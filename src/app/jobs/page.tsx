import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
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

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 animate-gradient-pan"
            style={{
              background:
                "linear-gradient(120deg, #0b0c0a 0%, #1a1c19 30%, #1f3a2a 60%, #1a1c19 100%)",
            }}
          />
          <span className="grain absolute inset-0" />
        </div>

        <div className="container-x relative pt-32 pb-16 md:pt-44 md:pb-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
              </span>
              {openJobs.length} live roles · Updated this week
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="mt-7 max-w-3xl text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We want to <span className="text-white/70">work with you</span>.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              If you&apos;re a skilled technology professional looking for a
              partner who actually listens — your search starts here.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#results"
                className="magnetic shine inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_-12px_rgba(38,112,68,0.5)] transition-colors hover:bg-green-700"
              >
                See open roles <ArrowRight className="h-4 w-4" />
              </a>
              <Button href="/contact" variant="outline-light" className="magnetic">
                Submit your CV
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOB BOARD */}
      <section id="results" className="bg-page py-14 md:py-20">
        <div className="container-x">
          <JobsBoard jobs={openJobs} />
        </div>
      </section>

      {/* TALENT POOL CTA */}
      <section className="bg-page py-12 md:py-16">
        <div className="container-x">
          <Reveal>
            <div
              className="grain animate-gradient-pan relative overflow-hidden rounded-3xl px-8 py-16 text-center text-white md:px-16 md:py-24"
              style={{
                background:
                  "linear-gradient(120deg, #0b0c0a 0%, #1a1c19 30%, #1f3a2a 60%, #1a1c19 100%)",
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(143,184,159,0.25), transparent 70%)" }}
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
