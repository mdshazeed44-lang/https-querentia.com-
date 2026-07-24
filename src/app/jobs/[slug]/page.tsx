import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Clock,
  Sparkles,
} from "@/components/ui/icons";
import { site, type Job } from "@/lib/site";
import { getPublicJobs, getJobBySlug } from "@/lib/jobs";

type Params = { params: Promise<{ slug: string }> };

// Refresh from Ceipal at most every 30 min; render new slugs on demand.
export const revalidate = 1800;
export const dynamicParams = true;

export async function generateStaticParams() {
  const jobs = await getPublicJobs();
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) return { title: "Role not found" };
  // Keep the meta description ~155 chars so it isn't truncated in SERPs.
  const metaDesc =
    `${job.title} in ${job.location}. ${job.specialization} ${job.jobType.toLowerCase()} role (${job.workModel}) with Querentia. Apply today.`.slice(
      0,
      158,
    );
  // Long role titles already exceed the ~60-char SERP limit on their own, so
  // only append the location for short titles.
  const metaTitle =
    job.title.length > 42 ? job.title : `${job.title} in ${job.location}`;
  return {
    title: metaTitle,
    description: metaDesc,
    alternates: { canonical: `/jobs/${job.slug}` },
    openGraph: {
      title: `${job.title} · Querentia`,
      description: metaDesc,
      url: `${site.url}/jobs/${job.slug}`,
      type: "article",
    },
  };
}

function jobPostingSchema(job: Job) {
  // Most Ceipal roles are "Open Until Filled" (no real closing date). Google
  // requires validThrough in the future for an open posting, so fall back to a
  // rolling ~60-day window that is always ahead of today. Use the real Ceipal
  // closing date only when it is a genuine future date.
  const today = new Date();
  const rolling = new Date(today);
  rolling.setDate(today.getDate() + 60);
  const rollingIso = rolling.toISOString().slice(0, 10);
  const validThrough =
    job.closingDate && job.closingDate > today.toISOString().slice(0, 10)
      ? job.closingDate
      : rollingIso;

  // Emit a real address whenever we know the city (even for remote roles, which
  // are often hybrid/near an office), or for any on-site role. TELECOMMUTE +
  // applicantLocationRequirements (with the job's actual country) are added on
  // top for remote roles.
  const emitLocation = Boolean(job.city) || job.workModel !== "Remote";
  const address = {
    "@type": "PostalAddress",
    ...(job.city ? { addressLocality: job.city } : {}),
    ...(job.region ? { addressRegion: job.region } : {}),
    addressCountry: job.countryCode || "CA",
  };
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description || job.summary,
    datePosted: job.postedAt,
    validThrough,
    employmentType:
      job.jobType === "Full-time"
        ? "FULL_TIME"
        : job.jobType === "Part-time"
          ? "PART_TIME"
          : job.jobType === "Contract"
            ? "CONTRACTOR"
            : "OTHER",
    identifier: {
      "@type": "PropertyValue",
      name: site.legalName,
      value: job.id,
    },
    hiringOrganization: {
      "@type": "Organization",
      name: site.legalName,
      sameAs: site.url,
      logo: `${site.url}/querentia-logo-og.png`,
    },
    directApply: !job.applyUrl,
    url: `${site.url}/jobs/${job.slug}`,
    jobLocation: emitLocation ? { "@type": "Place", address } : undefined,
    jobLocationType: job.workModel === "Remote" ? "TELECOMMUTE" : undefined,
    applicantLocationRequirements:
      job.workModel === "Remote"
        ? { "@type": "Country", name: job.country || "Canada" }
        : undefined,
    ...(job.skills.length ? { skills: job.skills.join(", ") } : {}),
    industry: job.specialization,
    // No baseSalary: Querentia mandates carry no public rate, so none is emitted.
  };
}

function breadcrumbSchema(job: Job) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Open Roles", item: `${site.url}/jobs` },
      {
        "@type": "ListItem",
        position: 2,
        name: job.title,
        item: `${site.url}/jobs/${job.slug}`,
      },
    ],
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

/** Apply CTA — links straight into the Ceipal candidate portal when available,
 *  otherwise routes to our own contact page. External links open safely. */
function ApplyButton({ job, className }: { job: Job; className: string }) {
  if (job.applyUrl) {
    return (
      <a
        href={job.applyUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={className}
      >
        Apply now <ArrowRight className="h-4 w-4" />
      </a>
    );
  }
  return (
    <Link
      href={`/contact?role=${encodeURIComponent(job.title)}`}
      className={className}
    >
      Apply now <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export default async function JobDetailPage({ params }: Params) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) notFound();

  const blocks = job.descriptionBlocks?.length
    ? job.descriptionBlocks
    : [{ type: "para" as const, text: job.summary }];

  const allJobs = await getPublicJobs();
  const related = allJobs
    .filter((j) => j.id !== job.id && j.specialization === job.specialization)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema(job)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(job)) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="animate-aurora absolute -top-32 left-[20%] h-[36rem] w-[36rem] rounded-full blur-[160px]"
            style={{ background: "radial-gradient(circle, rgba(0,194,255,0.45), transparent 65%)" }}
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
                </div>
              </Reveal>
              <Reveal delay={160}>
                <h1 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl">
                  {job.title}
                </h1>
              </Reveal>
              {job.company && (
                <Reveal delay={240}>
                  <p className="mt-3 text-base text-on-deep-muted md:text-lg">
                    {job.company}
                  </p>
                </Reveal>
              )}
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
                <div className="md:text-right">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-on-deep-muted">
                    Engagement
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">{job.jobType}</p>
                  <p className="text-xs text-on-deep-muted">{job.duration}</p>
                </div>
                <ApplyButton
                  job={job}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-green-700"
                />
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
                <div className="mt-4 space-y-4">
                  {blocks.map((b, i) =>
                    b.type === "heading" ? (
                      <h3
                        key={i}
                        className="pt-2 text-base font-bold text-deep md:text-lg"
                      >
                        {b.text}
                      </h3>
                    ) : b.type === "list" ? (
                      <ul key={i} className="space-y-2.5">
                        {b.items.map((it, k) => (
                          <li
                            key={k}
                            className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-muted"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        key={i}
                        className="text-[15px] leading-relaxed text-ink-muted"
                      >
                        {b.text}
                      </p>
                    ),
                  )}
                </div>
                <p className="mt-6 border-t border-border pt-5 text-[15px] leading-relaxed text-ink-muted">
                  This engagement is managed end-to-end by Querentia. Our
                  recruiters give you honest feedback at every stage, prepare you
                  for the interview, and support a smooth onboarding once you land
                  the offer.
                </p>
              </div>
            </Reveal>

            {job.skills.length > 0 && (
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
            )}
          </div>

          {/* SIDEBAR */}
          <aside>
            <div className="sticky top-28 space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">
                  Role at a glance
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <Row label="Job type" value={job.jobType} />
                  <Row label="Work model" value={job.workModel} />
                  <Row label="Duration" value={job.duration} />
                  <Row label="Location" value={job.location} />
                  <Row label="Specialization" value={job.specialization} />
                  <Row label="Posted" value={daysAgo(job.postedAt)} />
                </dl>
                <ApplyButton
                  job={job}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-deep px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-deep-2"
                />
              </div>

              <Link
                href="/jobs"
                className="block rounded-2xl border border-dashed border-border bg-card p-5 text-sm text-deep transition-colors hover:border-cyan hover:text-cyan"
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
                More <span className="text-cyan">{job.specialization}</span> roles
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Reveal key={r.id}>
                  <Link
                    href={`/jobs/${r.slug}`}
                    className="ring-grad lift group block h-full rounded-2xl border border-border bg-card p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
                      {r.workModel} · {r.jobType}
                    </p>
                    <h3 className="mt-2 text-base font-bold text-deep transition-colors duration-300 group-hover:text-cyan">
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
