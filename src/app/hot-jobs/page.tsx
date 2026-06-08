import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Briefcase,
  Clock,
  Bolt,
} from "@/components/ui/icons";
import { site, openJobs, type Job } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hot Jobs",
  description:
    "Querentia's featured IT roles — handpicked enterprise opportunities across Canada. Cloud, data, security, engineering.",
  alternates: { canonical: "/hot-jobs" },
  openGraph: {
    title: "Hot Jobs · Querentia",
    description: "Handpicked enterprise IT roles across Canada.",
    url: `${site.url}/hot-jobs`,
    type: "website",
  },
};

const hot = openJobs.filter((j) => j.isFeatured);

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Querentia — Hot Jobs",
  numberOfItems: hot.length,
  itemListElement: hot.map((j, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${site.url}/jobs/${j.slug}`,
    name: j.title,
  })),
};

function daysAgo(iso: string) {
  const days = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 86400000));
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const m = Math.round(days / 30);
  return m <= 1 ? "1 month ago" : `${m} months ago`;
}

function payLabel(j: Job) {
  if (!j.payMin || !j.payMax) return null;
  const unit = j.payUnit === "K" ? "K" : "/hr";
  return `$${j.payMin}–${j.payMax}${unit}`;
}

export default function HotJobsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="animate-aurora absolute -top-32 left-[20%] h-[36rem] w-[36rem] rounded-full blur-[160px]"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.45), transparent 65%)" }}
          />
          <div
            className="animate-aurora-2 absolute -bottom-20 right-[15%] h-[30rem] w-[30rem] rounded-full blur-[160px]"
            style={{ background: "radial-gradient(circle, rgba(14,165,233,0.3), transparent 70%)" }}
          />
        </div>

        <div className="container-x relative pt-28 pb-12 md:pt-36 md:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-on-deep backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green opacity-80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                </span>
                <Sparkles className="h-3.5 w-3.5 text-blue" />
                {hot.length} featured roles · Updated this week
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Hot <span className="text-blue">Jobs</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-on-deep-muted md:text-lg">
                Handpicked enterprise IT roles open right now. Standout
                opportunities our team is actively placing this week.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="#hot"
                  className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-[1.02] hover:bg-green-700"
                >
                  See featured roles <ArrowRight className="h-4 w-4" />
                </Link>
                <Button href="/jobs" variant="outline-light">
                  View all open positions
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        <svg
          aria-hidden
          viewBox="0 0 1440 66"
          preserveAspectRatio="none"
          className="-mb-1.5 block h-8 w-full md:h-12"
        >
          <path d="M0 66V24C240 50 480 60 720 50C960 40 1200 12 1440 26V66H0Z" fill="var(--color-page)" />
        </svg>
      </section>

      {/* FEATURED JOB CARDS */}
      <section id="hot" className="bg-page py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2">
            {hot.map((j, i) => {
              const pay = payLabel(j);
              return (
                <Reveal key={j.id} delay={i * 100}>
                  <article className="ring-grad lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-7">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue/0 blur-2xl transition-all duration-500 group-hover:bg-blue/15"
                    />
                    <div className="flex items-start gap-4">
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                        style={{ background: "linear-gradient(135deg, var(--color-green), var(--color-blue))" }}
                      >
                        <Briefcase className="h-6 w-6" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-green-700">
                          <Bolt className="h-3 w-3" /> Hot
                        </span>
                        <h3 className="mt-2 text-xl font-bold text-deep transition-colors duration-300 group-hover:text-green-700">
                          <Link href={`/jobs/${j.slug}`} className="after:absolute after:inset-0">
                            {j.title}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-ink-muted">{j.company}</p>
                      </div>
                    </div>

                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink-muted">{j.summary}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {j.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" /> {j.jobType} · {j.workModel}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {daysAgo(j.postedAt)}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {j.skills.slice(0, 4).map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-page-2 px-2.5 py-1 text-[11px] font-medium text-deep"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      {pay && (
                        <span className="text-sm font-bold text-deep">{pay}</span>
                      )}
                    </div>

                    <span className="relative z-10 mt-5 inline-flex items-center gap-2 text-sm font-semibold text-deep transition-colors duration-300 group-hover:text-green-700">
                      View role
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* View all */}
          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 rounded-full border border-border-2 bg-white px-6 py-3 text-sm font-semibold text-deep transition-all duration-300 hover:scale-[1.02] hover:border-green hover:text-green-700"
              >
                View all open positions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-page-2 py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[2rem] px-6 py-14 text-center text-white shadow-[0_30px_80px_-30px_rgba(37,99,235,0.55)] md:px-14 md:py-20"
              style={{
                background:
                  "linear-gradient(120deg, var(--color-deep-2) 0%, var(--color-deep) 35%, var(--color-green) 70%, var(--color-blue) 100%)",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 12s ease-in-out infinite",
              }}
            >
              <div
                aria-hidden
                className="animate-aurora pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full blur-[120px]"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)" }}
              />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                  Don&apos;t see your fit?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/85">
                  Submit your CV and our recruiters will reach out when a role matches.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-deep transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Submit your CV <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Button href="/jobs" variant="outline-light">
                    Browse all roles
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
