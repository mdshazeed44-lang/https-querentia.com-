import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Clock,
  Bolt,
  Check,
  Sparkles,
} from "@/components/ui/icons";
import { site, openJobs, type Job } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return openJobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const job = openJobs.find((j) => j.slug === slug);
  if (!job) return { title: "Role not found" };
  const desc = `${job.title} at ${job.company} — ${job.location}, ${job.jobType} (${job.workModel}). ${job.summary}`;
  return {
    title: job.title,
    description: desc,
    alternates: { canonical: `/jobs/${job.slug}` },
    openGraph: {
      title: `${job.title} · Querentia`,
      description: desc,
      url: `${site.url}/jobs/${job.slug}`,
      type: "article",
    },
  };
}

function jobPostingSchema(job: Job) {
  const valid = new Date();
  valid.setDate(valid.getDate() + 60);
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.summary,
    datePosted: job.postedAt,
    validThrough: valid.toISOString(),
    employmentType:
      job.jobType === "Full-time"
        ? "FULL_TIME"
        : job.jobType === "Contract"
          ? "CONTRACTOR"
          : "OTHER",
    hiringOrganization: {
      "@type": "Organization",
      name: site.legalName,
      sameAs: site.url,
    },
    jobLocation:
      job.workModel === "Remote"
        ? undefined
        : {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: job.location.split(",")[0]?.trim() || "Toronto",
              addressRegion: "ON",
              addressCountry: "CA",
            },
          },
    jobLocationType: job.workModel === "Remote" ? "TELECOMMUTE" : undefined,
    applicantLocationRequirements:
      job.workModel === "Remote"
        ? { "@type": "Country", name: "Canada" }
        : undefined,
    skills: job.skills.join(", "),
    industry: job.specialization,
    baseSalary:
      job.payMin && job.payMax
        ? {
            "@type": "MonetaryAmount",
            currency: "CAD",
            value: {
              "@type": "QuantitativeValue",
              minValue: job.payMin * (job.payUnit === "K" ? 1000 : 1),
              maxValue: job.payMax * (job.payUnit === "K" ? 1000 : 1),
              unitText: job.payUnit === "K" ? "YEAR" : "HOUR",
            },
          }
        : undefined,
  };
}

function daysAgo(iso: string) {
  const days = Math.max(
    0,
    Math.round((Date.now() - new Date(iso).getTime()) / 86400000)
  );
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const m = Math.round(days / 30);
  return m <= 1 ? "1 month ago" : `${m} months ago`;
}

export default async function JobDetailPage({ params }: Params) {
  const { slug } = await params;
  const job = openJobs.find((j) => j.slug === slug);
  if (!job) notFound();

  const pay =
    job.payMin && job.payMax
      ? `$${job.payMin}–${job.payMax}${job.payUnit === "K" ? "K" : "/hr"}`
      : null;

  const related = openJobs
    .filter((j) => j.id !== job.id && j.specialization === job.specialization)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema(job)) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="animate-aurora absolute -top-32 left-[20%] h-[36rem] w-[36rem] rounded-full blur-[160px]"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.45), transparent 65%)" }}
          />
        </div>

        <div className="container-x relative pt-28 pb-16 md:pt-36 md:pb-20">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-xs text-on-deep-muted">
              <Link href="/jobs" className="hover:text-white">
                Open Roles
              </Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="text-white/85">{job.title}</span>
            </nav>
          </Reveal>

          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0 flex-1">
              <Reveal delay={80}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-medium text-on-deep">
                    <Sparkles className="h-3 w-3 text-blue" />
                    {job.specialization}
                  </span>
                  {job.isFeatured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-soft px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-green-700">
                      <Bolt className="h-3 w-3" /> Featured
                    </span>
                  )}
                </div>
              </Reveal>
              <Reveal delay={160}>
                <h1 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl">
                  {job.title}
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-3 text-base text-on-deep-muted md:text-lg">
                  {job.company}
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-on-deep-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-sage" /> {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4 text-sage" />
                    {job.jobType} · {job.workModel}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-sage" /> {daysAgo(job.postedAt)}
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={400}>
              <div className="flex flex-col items-start gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-md md:items-end md:text-right">
                {pay && (
                  <div className="md:text-right">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-on-deep-muted">
                      Compensation
                    </p>
                    <p className="mt-1 text-2xl font-bold text-white">{pay}</p>
                    <p className="text-xs text-on-deep-muted">{job.duration}</p>
                  </div>
                )}
                <Link
                  href={`/contact?role=${encodeURIComponent(job.title)}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-green-700"
                >
                  Apply now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <svg
          aria-hidden
          viewBox="0 0 1440 66"
          preserveAspectRatio="none"
          className="-mb-1.5 block h-12 w-full md:h-16"
        >
          <path d="M0 66V24C240 50 480 60 720 50C960 40 1200 12 1440 26V66H0Z" fill="var(--color-page)" />
        </svg>
      </section>

      {/* DETAIL */}
      <section className="bg-page py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_18rem]">
          {/* MAIN */}
          <div className="space-y-12">
            <Reveal>
              <div>
                <h2 className="text-xl font-bold text-deep md:text-2xl">
                  About the role
                </h2>
                <p className="mt-4 leading-relaxed text-ink-muted">{job.summary}</p>
                <p className="mt-4 leading-relaxed text-ink-muted">
                  This is an enterprise-grade engagement managed end-to-end by
                  Querentia. Our recruiters will give you honest feedback at
                  every stage, prepare you for the interview, and support a
                  smooth onboarding once you land the offer.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="text-xl font-bold text-deep md:text-2xl">
                  What you&apos;ll bring
                </h2>
                <ul className="mt-5 space-y-3">
                  {[
                    `Hands-on experience across ${job.skills.slice(0, 3).join(", ")}`,
                    `Comfort delivering in a ${job.workModel.toLowerCase()} setting`,
                    "Strong communication with technical and business stakeholders",
                    "A track record of shipping in enterprise environments",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-soft">
                        <Check className="h-3 w-3 text-green-700" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="text-xl font-bold text-deep md:text-2xl">Skills</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-page-2 px-3 py-1.5 text-sm font-medium text-deep"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* SIDEBAR */}
          <aside>
            <div className="sticky top-28 space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-green-700">
                  Role at a glance
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <Row label="Job type" value={job.jobType} />
                  <Row label="Work model" value={job.workModel} />
                  <Row label="Duration" value={job.duration} />
                  <Row label="Location" value={job.location} />
                  <Row label="Specialization" value={job.specialization} />
                  {pay && <Row label="Compensation" value={pay} />}
                  <Row label="Posted" value={daysAgo(job.postedAt)} />
                </dl>
                <Link
                  href={`/contact?role=${encodeURIComponent(job.title)}`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-deep px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-deep-2"
                >
                  Apply now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <Link
                href="/jobs"
                className="block rounded-2xl border border-dashed border-border bg-card p-5 text-sm text-deep transition-colors hover:border-green hover:text-green-700"
              >
                ← Back to all open roles
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-page-2 py-16 md:py-20">
          <div className="container-x">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-deep md:text-3xl">
                More <span className="text-green-700">{job.specialization}</span> roles
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Reveal key={r.id}>
                  <Link
                    href={`/jobs/${r.slug}`}
                    className="ring-grad lift group block h-full rounded-2xl border border-border bg-card p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green-700">
                      {r.workModel} · {r.jobType}
                    </p>
                    <h3 className="mt-2 text-base font-bold text-deep transition-colors duration-300 group-hover:text-green-700">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-xs text-ink-muted">{r.location}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-xs text-ink-muted">{label}</dt>
      <dd className="text-right text-sm font-medium text-deep">{value}</dd>
    </div>
  );
}
