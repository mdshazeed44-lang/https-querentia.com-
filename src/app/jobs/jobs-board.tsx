"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { type Job } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { GetInTouchButton } from "@/components/get-in-touch-button";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  Bolt,
  ArrowRight,
  Filter,
  X,
} from "@/components/ui/icons";

type Props = { jobs: Job[] };

const WORK_MODEL_ORDER: Job["workModel"][] = ["Remote", "Hybrid", "On-site"];
const JOB_TYPE_ORDER: Job["jobType"][] = [
  "Full-time",
  "Part-time",
  "Contract",
  "Contract-to-hire",
];

function payLabel(j: Job) {
  if (!j.payMin || !j.payMax) return null;
  const unit = j.payUnit === "K" ? "K" : "/hr";
  return `$${j.payMin}–${j.payMax}${unit}`;
}

function daysAgo(iso: string) {
  const then = new Date(iso).getTime();
  const days = Math.max(0, Math.round((Date.now() - then) / (1000 * 60 * 60 * 24)));
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.round(days / 30);
  return months <= 1 ? "1 month ago" : `${months} months ago`;
}

export function JobsBoard({ jobs }: Props) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [workModels, setWorkModels] = useState<Set<Job["workModel"]>>(new Set());
  const [jobTypes, setJobTypes] = useState<Set<Job["jobType"]>>(new Set());
  const [specs, setSpecs] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<"new" | "old">("new");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const allSpecs = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.specialization))).sort(),
    [jobs]
  );

  // Only offer filter chips for values that actually exist in the live data.
  const workModelOpts = useMemo(() => {
    const present = new Set(jobs.map((j) => j.workModel));
    return WORK_MODEL_ORDER.filter((w) => present.has(w));
  }, [jobs]);

  const jobTypeOpts = useMemo(() => {
    const present = new Set(jobs.map((j) => j.jobType));
    return JOB_TYPE_ORDER.filter((t) => present.has(t));
  }, [jobs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const loc = location.trim().toLowerCase();
    const result = jobs.filter((j) => {
      if (q) {
        const hay = `${j.title} ${j.company ?? ""} ${j.skills.join(" ")} ${j.specialization}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (loc && !j.location.toLowerCase().includes(loc)) return false;
      if (workModels.size && !workModels.has(j.workModel)) return false;
      if (jobTypes.size && !jobTypes.has(j.jobType)) return false;
      if (specs.size && !specs.has(j.specialization)) return false;
      return true;
    });
    result.sort((a, b) => {
      const da = new Date(a.postedAt).getTime();
      const db = new Date(b.postedAt).getTime();
      return sort === "new" ? db - da : da - db;
    });
    return result;
  }, [jobs, query, location, workModels, jobTypes, specs, sort]);

  const toggleSet = <T extends string>(
    set: Set<T>,
    val: T,
    setter: (s: Set<T>) => void
  ) => {
    const next = new Set(set);
    if (next.has(val)) next.delete(val);
    else next.add(val);
    setter(next);
  };

  const clearAll = () => {
    setQuery("");
    setLocation("");
    setWorkModels(new Set());
    setJobTypes(new Set());
    setSpecs(new Set());
  };

  const activeCount =
    (query ? 1 : 0) +
    (location ? 1 : 0) +
    workModels.size +
    jobTypes.size +
    specs.size;

  if (jobs.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
        <p className="text-lg font-semibold text-deep">
          Our latest roles are on their way
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-muted">
          We&apos;re refreshing open positions right now. Join our talent pool and
          our recruiters will reach out the moment a role fits your skills.
        </p>
        <GetInTouchButton className="mt-5 inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700" />
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
      {/* ---------- FILTER SIDEBAR ---------- */}
      <aside
        className={`${filtersOpen ? "block" : "hidden"} lg:block`}
        aria-label="Job filters"
      >
        <div className="sticky top-28 rounded-3xl border border-border bg-card p-6 shadow-[0_1px_3px_rgba(15,27,51,0.05)]">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-cyan">
              Filters
            </h2>
            {activeCount > 0 && (
              <button
                onClick={clearAll}
                className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-ink-muted hover:text-deep"
              >
                <X className="h-3 w-3" /> Clear
              </button>
            )}
          </div>

          {/* Work model */}
          <FilterGroup title="Work model">
            {workModelOpts.map((w) => (
              <ChipToggle
                key={w}
                active={workModels.has(w)}
                onClick={() => toggleSet(workModels, w, setWorkModels)}
                label={w}
              />
            ))}
          </FilterGroup>

          {/* Job type */}
          <FilterGroup title="Job type">
            {jobTypeOpts.map((t) => (
              <ChipToggle
                key={t}
                active={jobTypes.has(t)}
                onClick={() => toggleSet(jobTypes, t, setJobTypes)}
                label={t}
              />
            ))}
          </FilterGroup>

          {/* Specialization */}
          <FilterGroup title="Specialization">
            <div className="flex flex-wrap gap-1.5">
              {allSpecs.map((s) => (
                <ChipToggle
                  key={s}
                  active={specs.has(s)}
                  onClick={() => toggleSet(specs, s, setSpecs)}
                  label={s}
                />
              ))}
            </div>
          </FilterGroup>
        </div>
      </aside>

      {/* ---------- RESULTS ---------- */}
      <div>
        <h2 className="sr-only">Search open roles</h2>
        {/* Search bar */}
        <Reveal>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-2 shadow-[0_1px_3px_rgba(15,27,51,0.05)] transition-colors focus-within:border-cyan focus-within:ring-2 focus-within:ring-cyan/30 sm:flex-row sm:items-center sm:rounded-full"
          >
            <div className="flex flex-1 items-center gap-2 px-3">
              <Search className="h-4 w-4 shrink-0 text-cyan" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Role, skill or keyword"
                aria-label="Search jobs by role, skill or keyword"
                className="w-full bg-transparent py-2.5 text-sm text-deep placeholder:text-ink-muted/70 focus:outline-none"
              />
            </div>
            <div className="hidden h-6 w-px bg-border sm:block" />
            <div className="flex flex-1 items-center gap-2 px-3">
              <MapPin className="h-4 w-4 shrink-0 text-cyan" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                aria-label="Filter jobs by location"
                className="w-full bg-transparent py-2.5 text-sm text-deep placeholder:text-ink-muted/70 focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => setFiltersOpen((o) => !o)}
              className="flex items-center justify-center gap-2 rounded-full border border-border-2 bg-white px-4 py-2.5 text-sm font-medium text-deep transition-colors hover:border-cyan hover:text-cyan lg:hidden"
            >
              <Filter className="h-4 w-4" /> Filters
              {activeCount > 0 && (
                <span className="rounded-full bg-cyan px-1.5 text-[11px] text-deep">
                  {activeCount}
                </span>
              )}
            </button>
          </form>
        </Reveal>

        {/* Results header */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-ink-muted">
            <strong className="text-deep">{filtered.length}</strong>{" "}
            {filtered.length === 1 ? "role" : "roles"}
            {activeCount > 0 ? " match your filters" : " currently open"}
          </p>
          <label className="flex items-center gap-2 text-xs text-ink-muted">
            Sort by
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as "new" | "old")}
              className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-deep focus:border-cyan focus:outline-none"
            >
              <option value="new">Newest first</option>
              <option value="old">Oldest first</option>
            </select>
          </label>
        </div>

        {/* Job cards */}
        <div className="mt-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
              <p className="text-lg font-semibold text-deep">No matches yet</p>
              <p className="mt-2 text-sm text-ink-muted">
                Try clearing some filters, or get in touch and we&apos;ll reach
                out when a role fits.
              </p>
              <GetInTouchButton className="mt-5 inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700" />
            </div>
          ) : (
            filtered.map((j, i) => (
              <Reveal key={j.id} delay={Math.min(i * 60, 360)}>
                <JobCard job={j} />
              </Reveal>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 border-t border-border pt-5 first:mt-5 first:border-t-0 first:pt-0">
      <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-deep">
        {title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function ChipToggle({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
        active
          ? "border-cyan bg-cyan-soft text-deep"
          : "border-border bg-white text-ink-muted hover:border-border-2 hover:text-deep"
      }`}
    >
      {label}
    </button>
  );
}

function JobCard({ job }: { job: Job }) {
  const pay = payLabel(job);
  const href = `/jobs/${job.slug}`;
  return (
    <article className="ring-grad lift group relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-7">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue/0 blur-2xl transition-all duration-500 group-hover:bg-blue/15"
      />

      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        {/* LEFT */}
        <div className="flex min-w-0 flex-1 gap-4">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
            style={{ background: "linear-gradient(135deg, var(--color-deep-2), var(--color-cyan))" }}
          >
            <Briefcase className="h-6 w-6" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold text-deep transition-colors duration-300 group-hover:text-cyan md:text-xl">
                <Link href={href} className="after:absolute after:inset-0">
                  {job.title}
                </Link>
              </h3>
              {job.isFeatured && (
                <span className="inline-flex items-center gap-1 rounded-full bg-green-soft px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-cyan">
                  <Bolt className="h-3 w-3" /> Featured
                </span>
              )}
            </div>
            {job.company && (
              <p className="mt-1 text-sm text-ink-muted">{job.company}</p>
            )}
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-muted">
              {job.summary}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5" /> {job.jobType} · {job.workModel}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {daysAgo(job.postedAt)}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {job.skills.slice(0, 5).map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-page-2 px-2.5 py-1 text-[12px] font-medium text-deep"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex shrink-0 flex-col items-start gap-3 md:items-end md:min-w-[8rem]">
          {pay && (
            <div className="md:text-right">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
                Compensation
              </p>
              <p className="text-base font-bold text-deep">{pay}</p>
            </div>
          )}
          {/* Visual only — the whole card is the link (title's stretched
              ::after overlay). Must NOT sit above that overlay, or clicks here
              get swallowed. */}
          <span className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-deep px-4 py-2 text-xs font-semibold text-white transition-all duration-300 group-hover:bg-green group-hover:text-white md:min-h-0">
            View role
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
