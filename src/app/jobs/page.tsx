import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { GetInTouchButton } from "@/components/get-in-touch-button";
import { site } from "@/lib/site";
import { getPublicJobs } from "@/lib/jobs";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
import { JobsBoard } from "./jobs-board";

// Re-pull from Ceipal at most every 30 min (client accepts up to 30 min delay).
export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Open Roles",
  description:
    "Live roles from Querentia, synced from our ATS: full-time, part-time, and contract positions at Canada's leading enterprises. Search by skill, location, or work model.",
  alternates: { canonical: "/jobs" },
  openGraph: {
    title: "Open Roles · Querentia",
    description:
      "Live enterprise roles across Canada: cloud, data, security, engineering, SAP, and more.",
    url: `${site.url}/jobs`,
    type: "website",
  },
};

export default async function JobsPage() {
  const openJobs = await getPublicJobs();

  // ItemList schema — search engines + AI can crawl this overview, and per-job
  // pages (/jobs/[slug]) add JobPosting schema each.
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Querentia Open Roles in Canada",
    numberOfItems: openJobs.length,
    itemListElement: openJobs.map((j, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.url}/jobs/${j.slug}`,
      name: j.title,
    })),
  };

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
              className={`${playfair.className} text-balance font-medium text-white`}
              style={{
                fontSize: "clamp(1.95rem, 4vw, 3.4rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                maxWidth: "18ch",
              }}
            >
              High-impact roles.
              <br className="hidden sm:block" />{" "}
              <span className="text-cyan">Matched with precision.</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/65 md:text-[15px]">
              Live roles from Canada&apos;s leading consulting firms and
              enterprises, represented honestly and moved fast.
            </p>
          </Reveal>
          <Reveal delay={440}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-5">
              <span className="inline-flex items-center gap-2 text-sm text-white/70">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-frost opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-frost" />
                </span>
                {openJobs.length} live roles · Synced from Ceipal
              </span>
              <GetInTouchButton className="group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.25em] text-cyan transition-colors hover:text-white" />
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
                  matches your skills, with no resume flood and no spam.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <GetInTouchButton className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-deep transition-transform duration-300 hover:scale-[1.03]" />
                  <Button href="/jobs#results" variant="outline-light">
                    View Roles
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
