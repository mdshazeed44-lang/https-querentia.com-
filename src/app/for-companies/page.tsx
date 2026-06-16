import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, Mail, Check } from "@/components/ui/icons";
import { site } from "@/lib/site";

/**
 * For Companies — premium editorial aesthetic, matching the About "Manifesto"
 * and homepage hero: Playfair serif headings + navy/cyan. All-talent
 * positioning (tech and non-tech across 30+ disciplines).
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "For Companies — Hire Exceptional Talent in Canada",
  description:
    "Querentia is Canada's trusted recruitment partner for exceptional talent, tech and non-tech. 48-hour shortlists. 94% retention. Permanent and contract hiring across 30+ disciplines.",
  alternates: { canonical: "/for-companies" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Recruitment & Staffing for Companies",
  serviceType: "Staffing and recruitment",
  url: `${site.url}/for-companies`,
  description:
    "Permanent and contract recruitment for Canada's leading organizations. Pre-vetted shortlists in 48 hours across 30+ disciplines, tech and non-tech — from cloud, data and security to finance, HR, marketing and supply chain.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Employers hiring talent in Canada",
  },
  provider: {
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
  },
};

const STEPS = [
  {
    num: "01",
    title: "Brief us",
    body: "One call. We calibrate the role, the skills, and the culture fit you actually need — no forty-field intake forms, no committees.",
  },
  {
    num: "02",
    title: "Shortlist in 48h",
    body: "Four to six pre-vetted candidates from our network — each one already screened for real capability, not keyword overlap.",
  },
  {
    num: "03",
    title: "Interview",
    body: "We coordinate every step; you decide. Honest feedback flows both ways, so nobody's time gets wasted on a maybe.",
  },
  {
    num: "04",
    title: "Place + retain",
    body: "Offer, onboarding support, and 12-month retention follow-through. We stay accountable long after day one.",
  },
];

const PILLARS = [
  {
    num: "01",
    title: "Precision",
    body: "People are the heart of our business. Every search starts with your role, your team, and the outcome the hire must deliver — then we match for capability and pathway, never for keyword overlap.",
  },
  {
    num: "02",
    title: "Impact",
    body: "We are passionate about our clients' success. First-class service and top-class candidates, for permanent and contract roles alike — shortlists built to move your roadmap, not just fill a seat.",
  },
  {
    num: "03",
    title: "Integrity",
    body: "Honest pipelines, honest timelines. End-to-end delivery from first brief to onboarding, with transparent feedback at every step — because trust is the only metric that compounds.",
  },
];

const DISCIPLINES = [
  "Cloud Technologies",
  "Data Engineering",
  "Cyber Security",
  "Full Stack Development",
  "Project Management",
  "Business Analysis",
  "Financial Advisory",
  "Human Resources",
  "Digital Marketing",
  "Supply Chain & Procurement",
  "Risk & Internal Audit",
  "UI / UX Design",
];

const TESTIMONIAL = {
  quote:
    "Querentia turned around a five-person shortlist in 36 hours for a hard-to-fill leadership role. The first hire is still with us at 18 months.",
  author: "Talent Acquisition Lead",
  role: "Enterprise · Toronto",
};

export default function ForCompaniesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="min-h-screen bg-page text-ink">
        {/* ---------- HERO ---------- */}
        <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-deep-2 pb-16 pt-28 text-on-deep md:pb-20">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,194,255,0.12) 0%, transparent 60%)",
            }}
          />

          <div className="container-x relative w-full">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <div>
                <Reveal>
                  <p className="mb-6 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                    <span className="inline-block h-px w-6 bg-current opacity-50" />
                    <span>For Companies</span>
                    <span className="relative ml-1 flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
                    </span>
                  </p>
                </Reveal>
                <Reveal delay={140}>
                  <h1
                    className={`${playfair.className} mx-auto text-balance font-medium text-white lg:mx-0`}
                    style={{
                      fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
                      lineHeight: 1.08,
                      letterSpacing: "-0.015em",
                      maxWidth: "18ch",
                    }}
                  >
                    Hire exceptional talent.
                    <br className="hidden sm:block" />{" "}
                    <span style={{ color: "#00C2FF" }}>
                      Fast, precise, vetted.
                    </span>
                  </h1>
                </Reveal>
                <Reveal delay={300}>
                  <p className="mx-auto mt-6 max-w-md text-[14px] leading-relaxed text-on-deep-muted md:text-[15px] lg:mx-0">
                    Pre-vetted shortlists for Canada&apos;s leading organizations
                    — across every discipline, tech and non-tech, in 48 hours.
                  </p>
                </Reveal>
                <Reveal delay={440}>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-white/15 pt-5 lg:justify-start">
                    {["48h shortlists", "94% retention", "Permanent & contract"].map(
                      (t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-2 text-sm text-white/70"
                        >
                          <Check className="h-4 w-4 text-frost" /> {t}
                        </span>
                      )
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- HOW IT WORKS ---------- */}
        <section id="process" className="scroll-mt-24 bg-page py-16 md:py-20">
          <div className="container-x">
            <Reveal>
              <div className="mb-12 max-w-2xl md:mb-14">
                <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  How it works
                </p>
                <h2
                  className={`${playfair.className} text-[clamp(1.9rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight`}
                >
                  From brief to hire.{" "}
                  <span className="text-cyan">In four steps.</span>
                </h2>
              </div>
            </Reveal>

            <div className="relative">
              {/* Connecting line through the step circles (only spans a single
                  4-up row, so it appears at lg where the grid is 4 columns) */}
              <span
                aria-hidden
                className="absolute left-0 top-6 hidden h-px w-full bg-cyan/25 lg:block"
              />
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8">
                {STEPS.map((s, i) => (
                  <Reveal key={s.num} delay={i * 120}>
                    <div className="relative">
                      <span
                        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cyan text-base font-semibold text-deep"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {s.num}
                      </span>
                      <div className="mt-6 h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_24px_50px_-28px_rgba(13,27,42,0.3)]">
                        <h3
                          className="text-xl font-medium tracking-tight"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {s.title}
                        </h3>
                        <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- WHY QUERENTIA ---------- */}
        <section className="relative isolate overflow-hidden bg-deep-2 py-16 text-on-deep md:py-20">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 50% 100%, rgba(0,194,255,0.10) 0%, transparent 60%)",
            }}
          />
          <div className="container-x relative">
            <Reveal>
              <div className="mb-12 max-w-2xl md:mb-14">
                <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  Why Querentia
                </p>
                <h2
                  className={`${playfair.className} text-[clamp(1.9rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-white`}
                >
                  Three principles.{" "}
                  <span className="text-cyan">Every mandate.</span>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {PILLARS.map((v, i) => (
                <Reveal key={v.num} delay={i * 120}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-cyan/40 hover:bg-white/[0.05]">
                    <h3
                      className={`${playfair.className} text-[1.7rem] font-medium leading-tight tracking-tight text-white`}
                    >
                      {v.title}.
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-on-deep-muted">
                      {v.body}
                    </p>
                    <span
                      aria-hidden
                      className="mt-6 block h-0.5 w-10 bg-cyan transition-all duration-500 group-hover:w-16"
                    />
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Manifesto */}
            <Reveal delay={200}>
              <div className="mt-16 border-t border-white/10 pt-14 text-center md:mt-20">
                <p
                  className={`${playfair.className} mx-auto max-w-4xl text-balance text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.15] tracking-tight text-white`}
                >
                  High-quality, high-impact talent —{" "}
                  <span className="text-cyan">delivered.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- DISCIPLINES STRIP ---------- */}
        <section id="industries" className="scroll-mt-24 bg-page py-16 md:py-20">
          <div className="container-x">
            <Reveal>
              <div className="mb-10 max-w-2xl">
                <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  What we recruit for
                </p>
                <p className="text-lg leading-relaxed text-ink-muted md:text-xl">
                  From cloud and data to finance, HR and marketing — if the role
                  matters to your business, our network already covers it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="flex flex-wrap items-center gap-3">
                {DISCIPLINES.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-px hover:border-cyan"
                  >
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    {d}
                  </span>
                ))}
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan-soft px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-cyan"
                >
                  All 30 disciplines
                  <ArrowRight className="h-3.5 w-3.5 text-cyan transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- TESTIMONIAL ---------- */}
        <section className="border-t border-border bg-page-2 py-16 md:py-20">
          <div className="container-x">
            <Reveal>
              <figure className="mx-auto max-w-3xl border-t-2 border-cyan/70 bg-card p-10 shadow-[0_24px_50px_-20px_rgba(13,27,42,0.12)] md:p-14">
                <span
                  aria-hidden
                  className={`${playfair.className} mb-5 block text-6xl leading-none text-cyan/35`}
                >
                  &ldquo;
                </span>
                <blockquote
                  className={`${playfair.className} text-balance text-xl leading-relaxed text-ink md:text-2xl`}
                >
                  {TESTIMONIAL.quote}
                </blockquote>
                <figcaption className="mt-10 border-t border-ink/10 pt-6">
                  <p className="text-sm font-medium text-ink">
                    {TESTIMONIAL.author}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                    {TESTIMONIAL.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ---------- FINAL CTA ---------- */}
        <section className="relative isolate overflow-hidden bg-deep-2 py-16 text-on-deep md:py-20">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 45% at 50% 50%, rgba(0,194,255,0.12) 0%, transparent 60%)",
            }}
          />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <p className="mb-7 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  Get in touch
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                </p>
              </Reveal>
              <Reveal delay={130}>
                <h2
                  className={`${playfair.className} mb-8 text-balance text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.08] tracking-tight text-white`}
                >
                  Tell us what you&apos;re hiring for.{" "}
                  <span className="text-cyan">We&apos;ll do the rest.</span>
                </h2>
              </Reveal>
              <Reveal delay={260}>
                <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-on-deep-muted md:text-lg">
                  Permanent or contract, one role or a whole team — share your
                  hiring needs and our team will add value from the first brief.
                </p>
              </Reveal>
              <Reveal delay={380}>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-lg bg-green px-9 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-green-700"
                  >
                    Contact Us
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2.5 rounded-lg border border-white/25 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:border-white/60 hover:bg-white/5"
                  >
                    <Mail className="h-4 w-4 text-cyan" />
                    Email us
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
