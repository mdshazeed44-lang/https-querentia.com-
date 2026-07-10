import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRight, MapPin, Briefcase, Clock, Bolt,
} from "@/components/ui/icons";
import { site, openJobs, type Job } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hot Jobs",
  description: "Featured IT roles — handpicked enterprise opportunities across Canada.",
  alternates: { canonical: "/hot-jobs" },
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
  const d = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 86400000));
  if (d === 0) return "Today";
  if (d === 1) return "1 day ago";
  if (d < 30) return `${d} days ago`;
  const m = Math.round(d / 30);
  return m <= 1 ? "1 month ago" : `${m} months ago`;
}

function payLabel(j: Job) {
  if (!j.payMin || !j.payMax) return null;
  return `$${j.payMin}–${j.payMax}${j.payUnit === "K" ? "K" : "/hr"}`;
}

export default function HotJobsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />

      {/* HERO — clean editorial intro, consistent with the rest of the site */}
      <section className="relative isolate overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="absolute inset-0 -z-10">
          <span
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,194,255,0.12) 0%, transparent 60%)",
            }}
          />
          <span
            className="absolute -bottom-32 right-0 h-[26rem] w-[26rem] rounded-full blur-[140px]"
            style={{
              background:
                "radial-gradient(circle, rgba(255,107,43,0.10), transparent 70%)",
            }}
          />
          <span className="grain absolute inset-0" />
        </div>

        <div className="container-x relative pb-16 pt-32 md:pb-20 md:pt-40">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="inline-block h-px w-6 bg-current opacity-50" />
              <span>Hot Jobs</span>
              <span className="relative ml-1 flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>
            </p>
          </Reveal>

          <Reveal delay={140}>
            <h1
              className={`${playfair.className} text-balance font-medium text-white`}
              style={{
                fontSize: "clamp(1.95rem, 4vw, 3.4rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                maxWidth: "18ch",
              }}
            >
              Standout roles,
              <br className="hidden sm:block" />{" "}
              <span className="text-cyan">placing right now.</span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/65 md:text-[15px]">
              Handpicked enterprise IT mandates we are actively shortlisting —
              senior, vetted, and moving fast.
            </p>
          </Reveal>

          <Reveal delay={440}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-5">
              <span className="inline-flex items-center gap-2 text-sm text-white/70">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-frost opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-frost" />
                </span>
                {hot.length} featured roles · Updated this week
              </span>
              <Link
                href="/jobs"
                className="group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.25em] text-cyan transition-colors hover:text-white"
              >
                View all open positions
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CARDS */}
      <section id="featured" className="bg-page py-16 md:py-20">
        <div className="container-x">
          <h2 className="sr-only">Featured roles</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {hot.map((j, idx) => {
              const pay = payLabel(j);
              return (
                <Reveal key={j.id} delay={idx * 110}>
                  <article className="group lift relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 hover:border-cyan/40 md:p-8">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-green">
                      <Bolt className="h-3 w-3" /> Hot
                    </span>
                    <h3
                      className={`${playfair.className} mt-3 text-2xl font-medium leading-tight tracking-tight text-deep transition-colors duration-300 group-hover:text-cyan`}
                    >
                      <Link href={`/jobs/${j.slug}`} className="after:absolute after:inset-0">
                        {j.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">{j.company}</p>
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink-muted">{j.summary}</p>

                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-muted">
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> {j.jobType} · {j.workModel}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {daysAgo(j.postedAt)}</span>
                    </div>

                    <div className="mt-5 flex items-end justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {j.skills.slice(0, 4).map((s) => (
                          <span key={s} className="rounded-full bg-page-2 px-2.5 py-1 text-[12px] font-medium text-deep">
                            {s}
                          </span>
                        ))}
                      </div>
                      {pay && <span className="text-sm font-bold text-deep">{pay}</span>}
                    </div>

                    <span className="relative z-10 mt-5 inline-flex items-center gap-2 text-sm font-medium text-deep transition-colors duration-300 group-hover:text-cyan">
                      View role
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={220}>
            <div className="mt-12 text-center">
              <Link
                href="/jobs"
                className="magnetic inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-3 text-sm font-medium text-deep transition-colors hover:border-cyan hover:text-cyan"
              >
                View all open positions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
