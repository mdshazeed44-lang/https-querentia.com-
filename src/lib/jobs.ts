import "server-only";

import { fetchCareerPortalJobs, type CeipalRawJob } from "./ceipal";
import type { Job } from "./site";

/**
 * PUBLIC DATA BOUNDARY.
 *
 * Everything a visitor can ever see about a job is built here, field by field,
 * from an explicit allow-list. We never spread a raw Ceipal record, so internal
 * fields (bill/pay rates, recruiter & manager IDs, client name/ID, internal
 * notes, tax terms, requisition text) can never leak to the page, the schema,
 * or the HTML source — even if Ceipal adds new fields later.
 *
 * Descriptions use ONLY `public_job_desc` (the field recruiters mark as
 * candidate-facing). The internal `requisition_description` is never read, so
 * client names / rates buried in it cannot escape. Jobs without a public
 * description get a clean generated summary instead.
 */

const REVALIDATE_MS = 25 * 60_000; // in-memory dedupe within a server instance

type Cache = { at: number; jobs: Job[] };
let cache: Cache | null = null;

// ---------------------------------------------------------------------------
// small pure helpers
// ---------------------------------------------------------------------------

const PROVINCES: Record<string, string> = {
  ontario: "ON",
  quebec: "QC",
  "british columbia": "BC",
  alberta: "AB",
  manitoba: "MB",
  saskatchewan: "SK",
  "nova scotia": "NS",
  "new brunswick": "NB",
  "newfoundland and labrador": "NL",
  "prince edward island": "PE",
  "northwest territories": "NT",
  nunavut: "NU",
  yukon: "YT",
};

function clean(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Strip HTML to readable plain-text paragraphs. Prevents any markup (and thus
 *  any dangerouslySetInnerHTML XSS) from Ceipal reaching the DOM. */
function htmlToText(html: string): string {
  return html
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<li[^>]*>/gi, "\n• ")
    .replace(/<(p|div|h[1-6]|ul|ol|tr|table)[^>]*>/gi, "\n")
    .replace(/<\/(p|div|li|h[1-6]|tr)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#3?9;|&apos;/gi, "'")
    .replace(/&(?:ndash|mdash);/gi, "-")
    .replace(/&#[0-9]+;/g, " ")
    .replace(/\r/g, "\n")
    .replace(/[^\S\n]+/g, " ") // collapse spaces/tabs but keep newlines
    .replace(/ *\n */g, "\n") // trim spaces hugging line breaks
    .replace(/\n{3,}/g, "\n\n") // cap consecutive blank lines
    .trim();
}

function provinceAbbr(state: string): string {
  return PROVINCES[state.toLowerCase()] || state;
}

function buildLocation(raw: CeipalRawJob, remote: boolean): string {
  const city = clean(raw.primary_city);
  const state = clean(raw.primary_state);
  const country = clean(raw.country);
  const parts: string[] = [];
  if (city) parts.push(city);
  if (state) parts.push(provinceAbbr(state));
  if (country && country.toLowerCase() !== "canada") parts.push(country);

  if (parts.length) return parts.join(", ");
  if (remote) return "Remote · Canada";
  return country || "Canada";
}

function mapJobType(raw: string): Job["jobType"] {
  const t = raw.toLowerCase();
  if (t.includes("full")) return "Full-time";
  if (t.includes("part")) return "Part-time";
  if (t.includes("contract")) return "Contract";
  return "Contract";
}

function buildDuration(raw: CeipalRawJob, jobType: Job["jobType"]): string {
  if (jobType === "Full-time") return "Permanent";
  if (jobType === "Part-time") return "Part-time";
  const start = clean(raw.job_start_date);
  const end = clean(raw.job_end_date);
  if (start && end) {
    const s = new Date(start).getTime();
    const e = new Date(end).getTime();
    if (Number.isFinite(s) && Number.isFinite(e) && e > s) {
      const months = Math.round((e - s) / (30 * 86_400_000));
      if (months >= 1) return `${months} month${months === 1 ? "" : "s"}`;
    }
  }
  return "Contract";
}

function toIsoDate(v: string): string {
  // Ceipal format: "2026-06-09 11:08:13" (assume UTC-ish; date is all we need).
  const datePart = v.split(" ")[0];
  if (/^\d{4}-\d{2}-\d{2}$/.test(datePart)) return datePart;
  const d = new Date(v);
  return Number.isFinite(d.getTime())
    ? d.toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10);
}

/** Strict variant: returns a YYYY-MM-DD date only for a genuinely parseable
 *  date, else undefined. Ceipal's closing_date is often free text like
 *  "Open Until Filled", which must NOT be coerced into a bogus date. */
function toIsoDateOrNull(v: string): string | undefined {
  const datePart = v.split(" ")[0];
  if (/^\d{4}-\d{2}-\d{2}$/.test(datePart)) return datePart;
  return undefined;
}

// --- title-driven skill + specialization derivation (Ceipal's own skills /
//     industry fields come back empty for this account) --------------------

const SKILL_DICT: [RegExp, string][] = [
  [/\bsap\b|s\/4hana|successfactors|fica|is-?u/i, "SAP"],
  [/\baws\b|amazon web/i, "AWS"],
  [/\bazure\b/i, "Azure"],
  [/\bgcp\b|google cloud/i, "GCP"],
  [/kubernetes|k8s/i, "Kubernetes"],
  [/terraform/i, "Terraform"],
  [/\bdevops\b/i, "DevOps"],
  [/cyberark/i, "CyberArk"],
  [/sailpoint/i, "SailPoint"],
  [/\bpam\b/i, "PAM"],
  [/\bgrc\b/i, "GRC"],
  [/\biam\b|identity/i, "IAM"],
  [/security|cyber/i, "Security"],
  [/\bqa\b|quality assurance|automation test|\bsdet\b/i, "QA"],
  [/selenium|cypress|playwright/i, "Test Automation"],
  [/\bjava\b/i, "Java"],
  [/\.net\b|c#|dotnet/i, ".NET"],
  [/python/i, "Python"],
  [/\breact\b/i, "React"],
  [/angular/i, "Angular"],
  [/node\.?js/i, "Node.js"],
  [/full ?stack/i, "Full Stack"],
  [/data engineer|\betl\b|databricks|snowflake/i, "Data Engineering"],
  [/machine learning|\bml\b|\bai\b|data scien/i, "AI / ML"],
  [/power ?bi|tableau|analytics/i, "Analytics"],
  [/salesforce/i, "Salesforce"],
  [/workday/i, "Workday"],
  [/servicenow/i, "ServiceNow"],
  [/icertis|\bclm\b/i, "Icertis CLM"],
  [/project manager|\bpmp\b|scrum|agile/i, "Project Management"],
  [/business analyst|\bba\b/i, "Business Analysis"],
  [/controller|accountant|finance|\bfp&a\b/i, "Finance"],
];

function deriveSkills(title: string): string[] {
  const out: string[] = [];
  for (const [re, skill] of SKILL_DICT) {
    if (re.test(title) && !out.includes(skill)) out.push(skill);
    if (out.length >= 6) break;
  }
  return out;
}

const SPEC_RULES: [RegExp, string][] = [
  [/security|cyber|cyberark|sailpoint|\bpam\b|\bgrc\b|\biam\b/i, "Cybersecurity"],
  [/\bsap\b|s\/4hana|successfactors|oracle|workday|servicenow|salesforce|icertis|\berp\b/i, "Enterprise Software"],
  [/data|analytics|machine learning|\bai\b|\bml\b|databricks|snowflake/i, "Data & AI"],
  [/cloud|\baws\b|azure|\bgcp\b|kubernetes|devops|infrastructure|platform/i, "Cloud Technologies"],
  [/\bqa\b|test|sdet|quality/i, "Quality Engineering"],
  [/developer|engineer|full ?stack|java|\.net|python|software|programmer/i, "Software Engineering"],
  [/project manager|program manager|scrum|delivery|\bpmo\b/i, "Project & Delivery"],
  [/controller|accountant|finance|\bfp&a\b|payroll/i, "Finance & Operations"],
  [/product|designer|\bux\b|\bui\b/i, "Digital & Product"],
];

function deriveSpecialization(title: string): string {
  for (const [re, spec] of SPEC_RULES) {
    if (re.test(title)) return spec;
  }
  return "Technology";
}

/** Only accept an Apply URL that is genuinely a Ceipal candidate-portal HTTPS
 *  link. Anything else is dropped so a malformed value can't become an
 *  open-redirect or inject a foreign destination. */
function safeApplyUrl(v: unknown): string | undefined {
  const s = clean(v);
  if (!s) return undefined;
  try {
    const u = new URL(s);
    if (u.protocol === "https:" && u.hostname.toLowerCase().endsWith("ceipal.com")) {
      return u.toString();
    }
  } catch {
    /* not a valid URL */
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// normalisation
// ---------------------------------------------------------------------------

/** Build the public Job from a raw record, or null if it shouldn't be shown. */
export function normalizeJob(raw: CeipalRawJob): Job | null {
  // Gate: only genuinely open, career-portal roles.
  if (clean(raw.job_status).toLowerCase() !== "active") return null;
  if (clean(raw.post_on_careerportal).toLowerCase() !== "yes") return null;

  const title = clean(raw.public_job_title) || clean(raw.position_title);
  const jobCode = clean(raw.job_code);
  if (!title || !jobCode) return null;

  const remote = clean(raw.remote_opportunities).toLowerCase() === "yes";
  const jobType = mapJobType(clean(raw.job_type));
  const location = buildLocation(raw, remote);

  const publicDesc = clean(raw.public_job_desc);
  const descText = publicDesc ? htmlToText(publicDesc) : "";

  const summary = descText
    ? descText.replace(/\s+/g, " ").slice(0, 260).trim()
    : `${title}. A ${jobType.toLowerCase()} opportunity ${
        remote ? "open across Canada" : `in ${location}`
      }, represented by Querentia. Apply to connect with our recruitment team about this role.`;

  const description = descText || summary;

  return {
    id: jobCode,
    slug: `${slugify(title)}-${slugify(jobCode)}`,
    title,
    location,
    workModel: remote ? "Remote" : "On-site",
    jobType,
    duration: buildDuration(raw, jobType),
    skills: deriveSkills(title),
    specialization: deriveSpecialization(title),
    postedAt: toIsoDate(clean(raw.created) || clean(raw.modified)),
    closingDate: toIsoDateOrNull(clean(raw.closing_date)),
    summary,
    description,
    applyUrl:
      safeApplyUrl(raw.apply_job_without_registration) ||
      safeApplyUrl(raw.apply_job),
  };
}

function dedupeBySlug(jobs: Job[]): Job[] {
  const seen = new Set<string>();
  const out: Job[] = [];
  for (const j of jobs) {
    let slug = j.slug;
    let n = 2;
    while (seen.has(slug)) slug = `${j.slug}-${n++}`;
    seen.add(slug);
    out.push(slug === j.slug ? j : { ...j, slug });
  }
  return out;
}

// ---------------------------------------------------------------------------
// public API used by the /jobs pages
// ---------------------------------------------------------------------------

/** All live public jobs, newest first. Never throws: on any Ceipal failure it
 *  returns the last good snapshot (if any) or an empty list, so the page
 *  degrades gracefully instead of 500-ing. */
export async function getPublicJobs(): Promise<Job[]> {
  if (cache && Date.now() - cache.at < REVALIDATE_MS) {
    return cache.jobs;
  }

  try {
    const raw = await fetchCareerPortalJobs();
    const jobs = dedupeBySlug(
      raw
        .map(normalizeJob)
        .filter((j): j is Job => j !== null)
        .sort(
          (a, b) =>
            new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
        ),
    );
    cache = { at: Date.now(), jobs };
    return jobs;
  } catch (err) {
    console.error("[jobs] Ceipal fetch failed:", err);
    return cache?.jobs ?? [];
  }
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const jobs = await getPublicJobs();
  return jobs.find((j) => j.slug === slug) ?? null;
}
