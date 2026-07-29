import "server-only";

/**
 * Ceipal ATS v2 API client — SERVER ONLY.
 *
 * The `server-only` import above makes the build fail if this module is ever
 * pulled into a client component, so the credentials below can never end up in
 * the browser bundle. Nothing here is exported to the client; the public data
 * boundary lives in `jobs.ts`, which maps raw records to a safe, allow-listed
 * shape before anything is rendered.
 *
 * Docs: https://developer.ceipal.com/ceipal-ats-v2/job-postings
 */

const AUTH_URL =
  process.env.CEIPAL_AUTH_URL || "https://api.ceipal.com/v2/createAuthtoken/";
const LIST_URL = "https://api.ceipal.com/v2/getJobPostingsList/";
const APPLY_URL = "https://api.ceipal.com/v2/applyJobWithOutRegistration/";

/** Job data is cached this long, matching the pages' `revalidate`. */
export const JOBS_REVALIDATE_SECONDS = 1800;

const REQUEST_TIMEOUT_MS = 20_000;
const MAX_PAGES = 20; // safety cap: 20 × 50 = 1000 jobs
const MAX_RETRIES = 3;

/** Raw job posting as returned by getJobPostingsList. Only the fields we may
 *  read are typed; everything else stays `unknown` and is never forwarded. */
export type CeipalRawJob = {
  id?: string;
  job_code?: string;
  position_title?: string;
  public_job_title?: string;
  public_job_desc?: string;
  job_status?: string;
  post_on_careerportal?: string;
  job_type?: string;
  remote_opportunities?: string;
  primary_city?: string;
  primary_state?: string;
  country?: string;
  job_start_date?: string;
  job_end_date?: string;
  closing_date?: string;
  created?: string;
  modified?: string;
  apply_job?: string;
  apply_job_without_registration?: string;
  // NOTE: fields like pay_rates, requisition_description, *_recruiter, *_manager,
  // company, client_job_id, comments, assigned_to are intentionally NOT typed
  // and never read — see jobs.ts for the strict allow-list.
};

type TokenCache = { token: string; expiresAt: number };
let tokenCache: TokenCache | null = null;

class CeipalError extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = "CeipalError";
  }
}

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new CeipalError(`Missing required env var ${name}`);
  return v;
}

async function fetchWithTimeout(
  url: string,
  init: RequestInit,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

/** Decode a JWT's `exp` claim (seconds) without verifying — used only to know
 *  when to refresh our own token. Falls back to a conservative default. */
function tokenExpiry(jwt: string): number {
  try {
    const payload = jwt.split(".")[1];
    if (!payload) return Date.now() + 45 * 60_000;
    const json = JSON.parse(
      Buffer.from(payload, "base64").toString("utf8"),
    ) as { exp?: number };
    if (typeof json.exp === "number") return json.exp * 1000;
  } catch {
    /* ignore — use fallback */
  }
  return Date.now() + 45 * 60_000;
}

async function authenticate(): Promise<string> {
  const now = Date.now();
  // Re-use a cached token until 60s before it expires.
  if (tokenCache && tokenCache.expiresAt - 60_000 > now) {
    return tokenCache.token;
  }

  const body = JSON.stringify({
    email: requireEnv("CEIPAL_EMAIL"),
    password: requireEnv("CEIPAL_PASSWORD"),
    apiKey: requireEnv("CEIPAL_API_KEY"),
    json: 1,
  });

  const res = await fetchWithTimeout(AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    cache: "no-store",
  });

  if (!res.ok) {
    throw new CeipalError(
      `Ceipal auth failed (HTTP ${res.status})`,
      res.status,
    );
  }

  const data = (await res.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new CeipalError("Ceipal auth response missing access_token");
  }

  tokenCache = {
    token: data.access_token,
    expiresAt: tokenExpiry(data.access_token),
  };
  return tokenCache.token;
}

async function authedGet(
  url: string,
  { allowReauth = true }: { allowReauth?: boolean } = {},
): Promise<unknown> {
  const token = await authenticate();

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetchWithTimeout(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // Cached for the same 30 minutes the pages revalidate on. `no-store` here
      // forced /jobs to render dynamically, so every visitor waited on a live
      // Ceipal round trip; with this the board is served pre-rendered and
      // refreshes in the background instead.
      next: { revalidate: JOBS_REVALIDATE_SECONDS },
    });

    // Token rejected → force one fresh auth and retry.
    if (res.status === 401 && allowReauth) {
      tokenCache = null;
      return authedGet(url, { allowReauth: false });
    }

    // Rate limited → honour Retry-After (capped) and back off.
    if (res.status === 429 && attempt < MAX_RETRIES) {
      const retryAfter = Number(res.headers.get("retry-after"));
      const waitMs = Number.isFinite(retryAfter)
        ? Math.min(retryAfter * 1000, 10_000)
        : Math.min(500 * 2 ** attempt, 8_000);
      await new Promise((r) => setTimeout(r, waitMs));
      continue;
    }

    if (!res.ok) {
      throw new CeipalError(
        `Ceipal request failed (HTTP ${res.status})`,
        res.status,
      );
    }

    return res.json();
  }

  throw new CeipalError("Ceipal request exhausted retries", 429);
}

function readResults(data: unknown): CeipalRawJob[] {
  const results =
    data && typeof data === "object" && "results" in data
      ? (data as { results?: unknown }).results
      : null;
  return Array.isArray(results) ? (results as CeipalRawJob[]) : [];
}

/**
 * Fetch every career-portal, active job posting.
 *
 * Page 1 also reports `num_pages`, so the remaining pages are fetched in
 * PARALLEL rather than walking `next` one request at a time. With ~5 pages that
 * turns 5 sequential round-trips into 2, which matters because this runs on the
 * apply path and during ISR regeneration (a slow refetch there leaves the jobs
 * page serving a stale snapshot).
 *
 * Node's fetch transparently gunzips Ceipal's gzipped responses.
 */
export async function fetchCareerPortalJobs(): Promise<CeipalRawJob[]> {
  const params = new URLSearchParams({
    limit: "50",
    postOnCareerportal: "1",
    isActive: "1",
  });
  const base = `${LIST_URL}?${params.toString()}`;

  const first: unknown = await authedGet(base);
  const jobs = readResults(first);

  const totalPages =
    first && typeof first === "object" && "num_pages" in first
      ? Number((first as { num_pages?: unknown }).num_pages)
      : 1;
  const lastPage = Math.min(
    Number.isFinite(totalPages) && totalPages > 0 ? totalPages : 1,
    MAX_PAGES,
  );

  if (lastPage > 1) {
    const rest = await Promise.all(
      Array.from({ length: lastPage - 1 }, (_, i) =>
        authedGet(`${base}&page=${i + 2}`),
      ),
    );
    for (const data of rest) jobs.push(...readResults(data));
  }

  return jobs;
}

export type ApplyInput = {
  jobId: string; // Ceipal encrypted job id
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resume: { data: ArrayBuffer; filename: string; type: string };
};

export type ApplyResult = {
  ok: boolean;
  status: number;
  message: string;
  submissionId?: string;
};

/**
 * Submit a candidate to a Ceipal job via the "Apply Without Registration"
 * endpoint (multipart/form-data). Server-only — the Bearer token never leaves
 * this module.
 */
export async function submitApplication(input: ApplyInput): Promise<ApplyResult> {
  const token = await authenticate();

  const form = new FormData();
  form.append("jobId", input.jobId);
  form.append("standard_fields.firstname", input.firstName);
  form.append("standard_fields.lastname", input.lastName);
  form.append("standard_fields.email", input.email);
  form.append("standard_fields.mobile_number", input.phone);
  form.append(
    "document_fields.1",
    new Blob([input.resume.data], { type: input.resume.type }),
    input.resume.filename,
  );

  // NOTE: do not set Content-Type — fetch adds the multipart boundary itself.
  const res = await fetchWithTimeout(APPLY_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: form,
    cache: "no-store",
  });

  let data: Record<string, unknown> = {};
  try {
    data = (await res.json()) as Record<string, unknown>;
  } catch {
    /* non-JSON body */
  }

  return {
    ok: res.ok,
    status: res.status,
    message:
      (typeof data.message === "string" && data.message) ||
      (res.ok ? "Application submitted." : `Ceipal error (HTTP ${res.status})`),
    submissionId:
      typeof data.submissionId === "string" ? data.submissionId : undefined,
  };
}
