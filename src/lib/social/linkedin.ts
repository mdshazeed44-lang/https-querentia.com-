import "server-only";

import { site, type Job } from "@/lib/site";

/**
 * Composes and publishes a LinkedIn post for a Ceipal job.
 *
 * Publishing goes through Upload-Post (https://docs.upload-post.com), which
 * holds the LinkedIn Marketing API partnership so we don't need our own
 * LinkedIn app approval. Docs: POST /api/upload_text with `platform[]=linkedin`.
 *
 * The job link is sent as `linkedin_link_url` (native preview card) and repeated
 * in `linkedin_first_comment`, rather than pasted into the body: LinkedIn
 * suppresses reach on posts with raw outbound links in the text.
 */

const API_URL = "https://api.upload-post.com/api/upload_text";

const API_KEY = process.env.UPLOAD_POST_API_KEY || "";
const PROFILE = process.env.UPLOAD_POST_USER || "";
const PAGE_ID = process.env.LINKEDIN_PAGE_ID || "";

/** True when the provider is configured; otherwise we run in dry-run mode. */
export const canPublish = Boolean(API_KEY && PROFILE);

/** Turn a skill/specialisation into a safe hashtag token. */
function tag(value: string): string {
  const cleaned = value
    .replace(/&/g, "and")
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");
  return cleaned ? `#${cleaned}` : "";
}

function hashtags(job: Job): string {
  const tags = ["#Hiring", "#Jobs"];
  const spec = tag(job.specialization);
  if (spec) tags.push(spec);
  for (const s of job.skills.slice(0, 2)) {
    const t = tag(s);
    if (t && !tags.includes(t)) tags.push(t);
  }
  tags.push("#Querentia");
  return tags.join(" ");
}

export type ComposedPost = {
  text: string;
  linkUrl: string;
  firstComment: string;
};

/**
 * A LinkedIn-ready blurb, or "" when the job has no real description.
 *
 * Jobs without a `public_job_desc` in Ceipal fall back to a generated sentence
 * ("...represented by Querentia. Apply to connect..."). That reads as filler in
 * a social post, so we drop it rather than publish boilerplate. Recruiter JDs
 * also often open with "Role: <title>" / "Job Summary", which just repeats the
 * headline, so those labels are stripped.
 */
function cleanSummary(job: Job): string {
  const raw = job.summary.replace(/\s+/g, " ").trim();
  if (!raw || /represented by Querentia\. Apply to connect/i.test(raw)) return "";

  // Recruiter JDs and the job title often differ only by dash style
  // ("Data & Analytics – X" vs "- X"), so match dashes interchangeably.
  const titlePattern = job.title
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/[-–—]/g, "[-–—]")
    .replace(/\s+/g, "\\s+");

  const stripped = raw
    .replace(/^role\s*:\s*/i, "")
    .replace(new RegExp(`^${titlePattern}\\s*[:.–—-]?\\s*`, "i"), "")
    .replace(/^(job\s+summary|job\s+description|overview|role\s+summary)\s*:?\s*/i, "")
    .trim();

  const body = stripped || raw;
  const trimmed =
    body.length <= 200
      ? body
      : body.slice(0, 200).replace(/[,;:]?\s+\S*$/, "");
  // The upstream summary is itself capped, so it can end mid-sentence; only
  // add an ellipsis when it doesn't already close cleanly.
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}...`;
}

/** Build the post copy for a job. Kept free of em dashes per the site style. */
export function composePost(job: Job): ComposedPost {
  const url = `${site.url}/jobs/${job.slug}`;
  const facts = [job.location, job.jobType, job.workModel]
    .filter(Boolean)
    .join(" · ");

  const summary = cleanSummary(job);

  const text = [
    `We're hiring: ${job.title}`,
    "",
    `📍 ${facts}`,
    "",
    summary,
    "",
    "Interested, or know someone who fits? Full details and how to apply are in the link below.",
    "",
    hashtags(job),
  ]
    .filter((line, i, arr) => !(line === "" && arr[i - 1] === ""))
    .join("\n")
    .trim();

  return {
    text,
    linkUrl: url,
    firstComment: `Full role details and apply here: ${url}`,
  };
}

export type PublishResult = {
  ok: boolean;
  dryRun: boolean;
  status?: number;
  message: string;
  requestId?: string;
};

/**
 * Publish one job to LinkedIn. When the provider isn't configured this returns
 * a dry-run result (composed but not sent) so the pipeline can be exercised
 * before credentials exist.
 *
 * `jobId` is sent as the Idempotency-Key: a second layer of duplicate
 * protection on top of the posted-set, so a retried request can't double-post.
 */
export async function publishJob(job: Job): Promise<PublishResult> {
  const post = composePost(job);

  if (!canPublish) {
    return {
      ok: true,
      dryRun: true,
      message: `DRY RUN (no UPLOAD_POST_API_KEY/USER): would post "${job.title}"`,
    };
  }

  const form = new FormData();
  form.append("user", PROFILE);
  form.append("platform[]", "linkedin");
  form.append("title", post.text);
  form.append("linkedin_link_url", post.linkUrl);
  form.append("linkedin_first_comment", post.firstComment);
  if (PAGE_ID) form.append("target_linkedin_page_id", PAGE_ID);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30_000);
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Apikey ${API_KEY}`,
        "Idempotency-Key": `querentia-job-${job.id}`,
      },
      body: form,
      cache: "no-store",
      signal: controller.signal,
    });

    let data: Record<string, unknown> = {};
    try {
      data = (await res.json()) as Record<string, unknown>;
    } catch {
      /* non-JSON body */
    }

    return {
      ok: res.ok,
      dryRun: false,
      status: res.status,
      message:
        (typeof data.message === "string" && data.message) ||
        (res.ok ? "Posted." : `Upload-Post error (HTTP ${res.status})`),
      requestId:
        typeof data.request_id === "string" ? data.request_id : undefined,
    };
  } finally {
    clearTimeout(timer);
  }
}
