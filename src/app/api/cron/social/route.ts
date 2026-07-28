import { NextResponse } from "next/server";
import { getPublicJobs } from "@/lib/jobs";
import { getPosted, markPosted, seedIfEmpty, hasStore } from "@/lib/social/store";
import { publishJob, canPublish, composePost } from "@/lib/social/linkedin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/** Posts per run. LinkedIn reach drops if a page floods the feed, so this is
 *  deliberately small: a few of the newest roles per run, not every job. */
const MAX_POSTS_PER_RUN = Number(process.env.SOCIAL_MAX_POSTS_PER_RUN || 2);

/**
 * Cron endpoint: publishes newly-opened Ceipal jobs to LinkedIn.
 *
 * Safety rails, in order:
 *  1. Auth — requires CRON_SECRET (Vercel Cron sends it as a bearer token).
 *  2. Kill switch — SOCIAL_AUTOPOST_ENABLED must be "true".
 *  3. Durable store required — without Redis we refuse to post at all, because
 *     in-memory state would re-post the whole back catalogue after a deploy.
 *  4. Seed on first run — an empty store is filled with today's open jobs and
 *     nothing is posted; only jobs that appear later go out.
 *  5. Per-run cap + Idempotency-Key on the provider call.
 */
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
    }
  }

  // ?preview=1 — show exactly what the next posts would say, without touching
  // the store or publishing anything. Useful for client sign-off.
  if (new URL(req.url).searchParams.get("preview")) {
    const jobs = await getPublicJobs();
    return NextResponse.json({
      ok: true,
      preview: true,
      posts: jobs.slice(0, 3).map((j) => ({
        job: `${j.id} ${j.title}`,
        ...composePost(j),
      })),
    });
  }

  if (process.env.SOCIAL_AUTOPOST_ENABLED !== "true") {
    return NextResponse.json({
      ok: true,
      skipped: "SOCIAL_AUTOPOST_ENABLED is not 'true'",
      posted: 0,
    });
  }

  if (!hasStore) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "No durable store configured (UPSTASH_REDIS_REST_URL/TOKEN). Refusing to post to avoid duplicate blasts.",
      },
      { status: 503 },
    );
  }

  const jobs = await getPublicJobs();
  if (!jobs.length) {
    return NextResponse.json({ ok: true, message: "No jobs from Ceipal.", posted: 0 });
  }

  // First ever run: remember what already exists, publish nothing.
  const seeded = await seedIfEmpty(jobs.map((j) => j.id));
  if (seeded) {
    return NextResponse.json({
      ok: true,
      seeded: jobs.length,
      posted: 0,
      message:
        "Seeded the posted-set with existing roles. Only jobs opened from now on will be published.",
    });
  }

  const posted = await getPosted();
  const fresh = jobs.filter((j) => !posted.has(j.id)); // jobs are newest-first
  const batch = fresh.slice(0, Math.max(0, MAX_POSTS_PER_RUN));

  const results: { job: string; ok: boolean; message: string }[] = [];
  for (const job of batch) {
    try {
      const r = await publishJob(job);
      // Only record real publishes, so a dry run doesn't consume the job.
      if (r.ok && !r.dryRun) await markPosted(job.id);
      results.push({ job: `${job.id} ${job.title}`, ok: r.ok, message: r.message });
      if (!r.ok) break; // stop the run on a provider error; retry next cycle
    } catch (err) {
      console.error("[cron/social] publish failed:", err);
      results.push({
        job: `${job.id} ${job.title}`,
        ok: false,
        message: err instanceof Error ? err.message : "Unknown error",
      });
      break;
    }
  }

  return NextResponse.json({
    ok: true,
    dryRun: !canPublish,
    totalJobs: jobs.length,
    newJobs: fresh.length,
    attempted: batch.length,
    posted: results.filter((r) => r.ok).length,
    results,
  });
}
