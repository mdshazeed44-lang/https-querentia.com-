import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import {
  Bank,
  Shield,
  Code,
  Building,
  Globe2,
  Bolt,
  Spark,
  Briefcase,
  ArrowRight,
} from "@/components/ui/icons";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Querentia places exceptional talent, tech and non-tech, across the sectors that power modern business: banking, insurance, technology, public sector, retail, energy, healthcare, and professional services.",
  alternates: { canonical: "/industries" },
};

const SECTORS = [
  {
    Icon: Bank,
    title: "Banking and Financial Services",
    body: "Core banking, payments, risk, compliance, and capital-markets talent for leading financial institutions and fintechs.",
  },
  {
    Icon: Shield,
    title: "Insurance",
    body: "Underwriting, claims, actuarial, and digital-transformation talent across property, casualty, and life insurance.",
  },
  {
    Icon: Code,
    title: "Technology and SaaS",
    body: "Product, engineering, data, and go-to-market talent for high-growth software companies and scale-ups.",
  },
  {
    Icon: Building,
    title: "Public Sector and Government",
    body: "Cleared, compliant talent for federal, provincial, and municipal programs and crown corporations.",
  },
  {
    Icon: Globe2,
    title: "Retail and Consumer",
    body: "Digital, supply-chain, merchandising, and analytics talent for national retail and consumer brands.",
  },
  {
    Icon: Bolt,
    title: "Energy and Utilities",
    body: "Engineering, operations, and program talent for power, utilities, and the energy transition.",
  },
  {
    Icon: Spark,
    title: "Healthcare and Life Sciences",
    body: "Clinical operations, regulatory, data, and technology talent for healthcare and life-sciences organizations.",
  },
  {
    Icon: Briefcase,
    title: "Professional Services and Consulting",
    body: "Consultants, delivery leaders, and specialist talent for advisory firms and systems integrators.",
  },
];

const industriesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: `${site.url}/industries`,
  name: "Industries We Serve",
  about: SECTORS.map((s) => ({ "@type": "Thing", name: s.title })),
  isPartOf: {
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
  },
};

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }}
      />

      <div className="bg-page text-ink">
        {/* ---------- HERO ---------- */}
        <section className="relative isolate overflow-hidden bg-deep-2 pb-16 pt-28 text-on-deep sm:pt-32 md:pb-20 md:pt-40">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 70% 10%, rgba(0,194,255,0.12) 0%, transparent 60%)",
              }}
            />
          </div>

          <div className="container-x relative">
            <div className="max-w-3xl">
              <Reveal>
                <p className="mb-6 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  Industries
                </p>
              </Reveal>
              <Reveal delay={140}>
                <h1
                  className={`${playfair.className} text-balance font-medium text-white`}
                  style={{
                    fontSize: "clamp(2.1rem, 4.8vw, 3.75rem)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.015em",
                  }}
                >
                  The talent behind every{" "}
                  <span style={{ color: "#00C2FF" }}>sector we serve.</span>
                </h1>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-on-deep-muted md:text-lg">
                  From banking floors to public-sector programs, Querentia places
                  exceptional people, tech and non-tech alike, across the
                  industries that power modern business.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- SECTORS GRID ---------- */}
        <section className="relative isolate overflow-hidden bg-page py-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full bg-cyan/[0.05] blur-3xl"
          />
          <div className="container-x relative">
            <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-12">
              <Reveal>
                <div className="max-w-2xl">
                  <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                    <span className="inline-block h-px w-8 bg-cyan/60" />
                    Sectors we serve
                  </p>
                  <h2
                    className={`${playfair.className} text-[clamp(1.9rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-ink`}
                  >
                    Deep networks in the industries{" "}
                    <span className="text-cyan">that matter.</span>
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <p className="max-w-md text-base leading-relaxed text-ink-muted">
                  Years of focused placements have built us genuine reach in
                  each of these sectors — so the right person is a conversation
                  away, not a cold search.
                </p>
              </Reveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-4">
              {SECTORS.map((s, i) => (
                <Reveal key={s.title} delay={(i % 4) * 90}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan/40 hover:shadow-[0_40px_90px_-40px_rgba(13,27,42,0.35)] md:p-8">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="relative flex h-full flex-col">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-deep-2 text-cyan shadow-[0_14px_34px_-12px_rgba(0,194,255,0.45)] transition-transform duration-500 group-hover:scale-105">
                        <s.Icon className="h-6 w-6" />
                      </span>
                      <h3
                        className={`${playfair.className} mt-6 text-xl font-medium leading-snug tracking-tight text-ink`}
                      >
                        {s.title}
                      </h3>
                      <span
                        aria-hidden
                        className="mt-4 block h-0.5 w-10 rounded-full bg-cyan transition-all duration-500 group-hover:w-16"
                      />
                      <p className="mt-5 flex-1 text-[14px] leading-relaxed text-ink-muted">
                        {s.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CROSS-DISCIPLINE BAND ---------- */}
        <section className="border-t border-border bg-page-2 py-16 md:py-20">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <p className="mb-5 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  One partner, every function
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                </p>
              </Reveal>
              <Reveal delay={130}>
                <h2
                  className={`${playfair.className} text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.12] tracking-tight text-ink`}
                >
                  Whatever the sector, we cover the talent{" "}
                  <span className="text-cyan">behind it.</span>
                </h2>
              </Reveal>
              <Reveal delay={260}>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                  Across 30+ specialised disciplines — from cloud, data, and
                  security to finance, HR, marketing, and supply chain — we place
                  the people who keep each of these industries moving.
                </p>
              </Reveal>
              <Reveal delay={380}>
                <div className="mt-9">
                  <Link
                    href="/for-companies#expertise"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-cyan transition-colors hover:text-ink"
                  >
                    Explore the disciplines we recruit for
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="relative isolate overflow-hidden bg-deep-2 py-16 text-on-deep md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 55% 55% at 50% 45%, rgba(0,194,255,0.12) 0%, transparent 62%)",
            }}
          />
          <div className="container-x mx-auto max-w-3xl text-center">
            <Reveal>
              <h2
                className={`${playfair.className} text-[clamp(2.25rem,6vw,4.25rem)] font-medium leading-[1.06] tracking-tight text-white`}
              >
                Hiring in your industry?{" "}
                <span style={{ color: "#00C2FF" }}>Let&apos;s talk.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-on-deep-muted md:text-lg">
                Tell us the role and the sector — we&apos;ll bring the shortlist.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/for-companies"
                  className="group inline-flex items-center gap-2.5 rounded-lg bg-green px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-green-700"
                >
                  Hire Talent
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2.5 rounded-lg border border-white/25 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-on-deep transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
                >
                  View Roles
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
