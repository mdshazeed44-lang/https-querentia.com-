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
                "linear-gradient(120deg, #0D1B2A 0%, #142235 30%, #16324C 60%, #142235 100%)",
            }}
          />
          <span className="grain absolute inset-0" />
        </div>

        <div className="container-x relative pb-16 pt-32 md:pb-20 md:pt-40">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span
                className="text-sm tracking-normal"
                style={{ fontFamily: "var(--font-display)" }}
              >
                I
              </span>
              <span className="inline-block h-px w-6 bg-current opacity-50" />
              <span>Open Roles</span>
              <span className="relative ml-1 flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h1
              className="text-balance font-medium text-white"
              style={{
                fontSize: "clamp(1.85rem, 3.9vw, 3.25rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.022em",
                maxWidth: "17ch",
              }}
            >
              High-impact roles.
              <br className="hidden sm:block" />{" "}
              <span
                className="text-cyan"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                }}
              >
                Matched with precision.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/65 md:text-[15px]">
              Live senior IT mandates from Canada&apos;s leading consulting
              firms and enterprises — represented honestly, moved fast.
            </p>
          </Reveal>
          <Reveal delay={440}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-5">
              <span className="inline-flex items-center gap-2 text-sm text-white/70">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-frost opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-frost" />
                </span>
                {openJobs.length} live roles · Updated this week
              </span>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.25em] text-cyan transition-colors hover:text-white"
              >
                Submit your CV
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
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
                  "linear-gradient(120deg, #0D1B2A 0%, #142235 30%, #16324C 60%, #142235 100%)",
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(0,194,255,0.25), transparent 70%)" }}
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
                  <Button href="/for-talent" variant="outline-light">
                    For Talent
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
