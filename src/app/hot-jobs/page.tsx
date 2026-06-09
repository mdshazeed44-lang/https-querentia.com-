import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRight, MapPin, Briefcase, Clock, Bolt,
} from "@/components/ui/icons";
import { site, openJobs, type Job } from "@/lib/site";

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

const LINE_1 = ["Hot"];
const LINE_2 = ["jobs."];

export default function HotJobsPage() {
  let i = 0;
  const w = () => {
    const d = 0.1 + i * 0.07;
    i++;
    return { animationDelay: `${d}s` } as React.CSSProperties;
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 animate-ken-burns">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
          </div>
          <span
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(11,12,10,0.92) 0%, rgba(11,12,10,0.65) 50%, rgba(11,12,10,0.5) 75%, rgba(11,12,10,0.92) 100%)",
            }}
          />
          <span className="grain absolute inset-0" />
        </div>

        <div className="container-x relative pt-32 pb-20 md:pt-44 md:pb-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
              </span>
              {hot.length} featured roles · Updated this week
            </span>
          </Reveal>

          <h1 className="mt-7 text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-[0.95] tracking-tight">
            {LINE_1.map((word) => (
              <span key={word} className="word mr-[0.22em]" style={w()}>{word}</span>
            ))}
            <br />
            {LINE_2.map((word) => (
              <span key={word} className="word mr-[0.22em] text-white/70" style={w()}>{word}</span>
            ))}
          </h1>

          <Reveal delay={400}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Handpicked enterprise IT roles open right now — standout opportunities our team is actively placing.
            </p>
          </Reveal>

          <Reveal delay={540}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#featured"
                className="magnetic shine inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_-12px_rgba(38,112,68,0.5)] transition-colors hover:bg-green-700"
              >
                See featured <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/jobs"
                className="magnetic inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-white/60 hover:bg-white/10"
              >
                View all open positions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CARDS */}
      <section id="featured" className="bg-page py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2">
            {hot.map((j, idx) => {
              const pay = payLabel(j);
              return (
                <Reveal key={j.id} delay={idx * 110}>
                  <article className="group lift relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 hover:border-green/40 md:p-8">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-green">
                      <Bolt className="h-3 w-3" /> Hot
                    </span>
                    <h3
                      className="mt-3 text-2xl font-medium leading-tight tracking-tight text-deep transition-colors duration-300 group-hover:text-green"
                      style={{ fontFamily: "var(--font-display)" }}
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
                          <span key={s} className="rounded-full bg-page-2 px-2.5 py-1 text-[11px] font-medium text-deep">
                            {s}
                          </span>
                        ))}
                      </div>
                      {pay && <span className="text-sm font-bold text-deep">{pay}</span>}
                    </div>

                    <span className="relative z-10 mt-5 inline-flex items-center gap-2 text-sm font-medium text-deep transition-colors duration-300 group-hover:text-green">
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
                className="magnetic inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-3 text-sm font-medium text-deep transition-colors hover:border-green hover:text-green"
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
