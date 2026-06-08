import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "@/components/ui/icons";
import { site, openJobs } from "@/lib/site";
import { JobsBoard } from "./jobs-board";

export const metadata: Metadata = {
  title: "Open Roles",
  description:
    "Live IT and technology roles from Querentia — full-time, contract, and contract-to-hire positions at Canada's leading enterprises. Search by skill, location, or work model.",
  alternates: { canonical: "/jobs" },
  openGraph: {
    title: "Open Roles · Querentia",
    description:
      "Live enterprise IT roles in Canada — cloud, data, security, engineering.",
    url: `${site.url}/jobs`,
    type: "website",
  },
};

// ItemList schema — search engines + AI can crawl this overview, and per-job pages
// (/jobs/[slug]) will add JobPosting schema each.
const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Querentia — Open IT Roles in Canada",
  numberOfItems: openJobs.length,
  itemListElement: openJobs.map((j, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${site.url}/jobs/${j.slug}`,
    name: j.title,
  })),
};

export default function JobsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />

      {/* HERO — compact, listing-focused (not full viewport — we want results visible) */}
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

        <div className="container-x relative pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-on-deep backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green opacity-80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                </span>
                <Sparkles className="h-3.5 w-3.5 text-blue" />
                {openJobs.length} live roles · Updated this week
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                We want to <span className="text-blue">work with you</span>.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-on-deep-muted md:text-lg">
                Job searching just got simpler. If you&apos;re a skilled
                technology professional looking for a partner who actually
                listens — your search starts here.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#results"
                  className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-[1.02] hover:bg-green-700"
                >
                  See open roles <ArrowRight className="h-4 w-4" />
                </a>
                <Button href="/contact" variant="outline-light">
                  Submit your CV
                </Button>
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

      {/* JOB BOARD */}
      <section id="results" className="bg-page py-14 md:py-20">
        <div className="container-x">
          <JobsBoard jobs={openJobs} />
        </div>
      </section>

      {/* TALENT POOL CTA */}
      <section className="bg-page-2 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[2rem] px-6 py-14 text-center text-white shadow-[0_30px_80px_-30px_rgba(37,99,235,0.55)] md:px-14 md:py-20"
              style={{
                background:
                  "linear-gradient(120deg, #0a1322 0%, #1e3a8a 35%, #2563eb 70%, #0ea5e9 100%)",
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
                  Didn&apos;t find the right role?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/85">
                  Join our talent pool. Our recruiters reach out when a role
                  matches your skills — no resume flood, no spam.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-deep transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Submit your CV <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Button href="/interview-training" variant="outline-light">
                    See Interview Training
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
