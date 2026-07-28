import "server-only";

/**
 * Durable record of which jobs have already been posted to social.
 *
 * WHY THIS EXISTS: the jobs cache is in-memory and resets on every deploy. If
 * "already posted" lived there too, a single redeploy would re-post the entire
 * back catalogue (200+ posts) to the client's LinkedIn page. So the posted-set
 * is kept in Redis, and the first run against an empty store SEEDS instead of
 * posting (see `seedIfEmpty`).
 *
 * Backend: Upstash Redis REST (also works with Vercel KV, which exposes the
 * same protocol). No SDK needed — it's plain HTTPS + a bearer token.
 */

const REST_URL =
  process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || "";
const REST_TOKEN =
  process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || "";

const POSTED_KEY = "querentia:social:posted";
const SEEDED_KEY = "querentia:social:seeded";

/** True when a durable store is configured. Without it we refuse to post. */
export const hasStore = Boolean(REST_URL && REST_TOKEN);

async function redis<T = unknown>(command: (string | number)[]): Promise<T> {
  const res = await fetch(REST_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REST_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Redis ${command[0]} failed (HTTP ${res.status})`);
  }
  const data = (await res.json()) as { result: T };
  return data.result;
}

/** Job ids already posted. */
export async function getPosted(): Promise<Set<string>> {
  if (!hasStore) return new Set();
  const members = await redis<string[]>(["SMEMBERS", POSTED_KEY]);
  return new Set(members ?? []);
}

/** Mark a job as posted (atomic, safe to call repeatedly). */
export async function markPosted(jobId: string): Promise<void> {
  if (!hasStore) return;
  await redis(["SADD", POSTED_KEY, jobId]);
}

/**
 * First-run protection. If we've never seeded, record every job currently open
 * as "already posted" and return true — so the existing back catalogue is never
 * blasted out. Only jobs that appear AFTER this point get posted.
 */
export async function seedIfEmpty(allJobIds: string[]): Promise<boolean> {
  if (!hasStore) return false;
  const seeded = await redis<string | null>(["GET", SEEDED_KEY]);
  if (seeded) return false;

  if (allJobIds.length) {
    // Chunk to keep each request small.
    for (let i = 0; i < allJobIds.length; i += 200) {
      await redis(["SADD", POSTED_KEY, ...allJobIds.slice(i, i + 200)]);
    }
  }
  await redis(["SET", SEEDED_KEY, new Date().toISOString()]);
  return true;
}
