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
      cache: "no-store",
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

/**
 * Fetch every career-portal, active job posting, following pagination.
 * Returns raw records; normalisation + the public-field allow-list happen in
 * jobs.ts. Node's fetch transparently gunzips Ceipal's gzipped responses.
 */
export async function fetchCareerPortalJobs(): Promise<CeipalRawJob[]> {
  const params = new URLSearchParams({
    limit: "50",
    postOnCareerportal: "1",
    isActive: "1",
  });

  const jobs: CeipalRawJob[] = [];
  let url: string | null = `${LIST_URL}?${params.toString()}`;
  let page = 0;

  while (url && page < MAX_PAGES) {
    const data: unknown = await authedGet(url);
    const results =
      data && typeof data === "object" && "results" in data
        ? (data as { results?: unknown }).results
        : null;

    if (Array.isArray(results)) {
      jobs.push(...(results as CeipalRawJob[]));
    }

    const next =
      data && typeof data === "object" && "next" in data
        ? (data as { next?: unknown }).next
        : null;
    url = typeof next === "string" && next ? next : null;
    page++;
  }

  return jobs;
}
