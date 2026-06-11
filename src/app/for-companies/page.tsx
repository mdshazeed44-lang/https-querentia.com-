import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { ArrowRight, Mail, Check, Clock } from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Companies — Hire Senior IT Talent in Canada",
  description:
    "Querentia is the most trusted partner for high-quality, high-impact senior IT talent. 48-hour shortlists. 94% retention. Built for Canada's leading consulting firms and enterprise programs.",
  alternates: { canonical: "/for-companies" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IT Recruitment & Staffing for Companies",
  serviceType: "IT staffing and recruitment",
  url: `${site.url}/for-companies`,
  description:
    "Permanent and contract IT recruitment for Canada's leading consulting firms and enterprise programs. Pre-vetted senior shortlists in 48 hours across cloud, data, security, and engineering.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Employers hiring senior IT talent in Canada",
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

const PROOF = [
  { value: "48h", label: "Avg. shortlist turnaround" },
  { value: "94%", label: "Placement retention" },
  { value: "500+", label: "Successful placements" },
  { value: "10+", label: "Years placing senior IT" },
];

const STEPS = [
  {
    num: "01",
    title: "Brief us",
    body: "One call. We calibrate the role, the stack, and the culture fit you actually need — no forty-field intake forms, no committees.",
  },
  {
    num: "02",
    title: "Shortlist in 48h",
    body: "Four to six pre-vetted senior candidates from our network — each one already screened for technical depth, not keyword overlap.",
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
    body: "People are the heart of our business. Every search starts with your stack, your team, and the outcome the hire must deliver — then we match for expertise and pathway, never for keyword overlap.",
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
  "Data Analytics",
  "Cyber Security",
  "DevOps",
  "Full Stack Development",
  "ERP",
  "Enterprise Architecture",
  "Project Management",
  "Business Analysis",
  "Testing Automation",
  "UI / UX Design",
];

const TESTIMONIAL = {
  quote:
    "Querentia turned around a 5-candidate shortlist in 36 hours for a Senior Cloud Architect mandate. The first hire is still with us at 18 months.",
  author: "Practice Director",
  role: "Tier-1 Consulting · Toronto",
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
        <section className="relative isolate overflow-hidden bg-deep-2 pb-20 pt-36 text-on-deep md:pt-44">
          {/* Float animation for the orbiting tag pills (motion-safe only) */}
          <style>{`
            @media (prefers-reduced-motion: no-preference) {
              @keyframes fc-float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-8px); }
              }
              .fc-float-a { animation: fc-float 7s ease-in-out infinite; }
              .fc-float-b { animation: fc-float 8s ease-in-out infinite; animation-delay: 1.3s; }
            }
          `}</style>

          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,194,255,0.12) 0%, transparent 60%)",
            }}
          />

          <div className="container-x relative">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Left — copy */}
              <div className="text-center lg:text-left">
                <Reveal>
                  <p className="mb-6 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                    <span
                      className="text-sm tracking-normal"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      I
                    </span>
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
                    className="mx-auto text-balance font-medium text-white lg:mx-0"
                    style={{
                      fontSize: "clamp(1.85rem, 3.9vw, 3.25rem)",
                      lineHeight: 1.06,
                      letterSpacing: "-0.022em",
                      maxWidth: "17ch",
                    }}
                  >
                    Hire senior IT talent.
                    <br className="hidden sm:block" />{" "}
                    <span
                      className="text-cyan"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                      }}
                    >
                      Fast, precise, vetted.
                    </span>
                  </h1>
                </Reveal>
                <Reveal delay={300}>
                  <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-on-deep-muted md:text-[15px] lg:mx-0">
                    Pre-vetted senior shortlists for Canada&apos;s leading
                    consulting firms and enterprise IT programs — in 48 hours.
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

              {/* Right — mandate console mockup (shortlist in progress) */}
              <Reveal delay={250} className="hidden lg:block">
                <div className="relative mx-auto max-w-md">
                  {/* floating proof pills */}
                  <span className="fc-float-a absolute -left-6 -top-4 z-20 inline-flex items-center rounded-full bg-cyan px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-deep shadow-lg">
                    48h shortlists
                  </span>
                  <span className="fc-float-b absolute -bottom-4 -right-3 z-20 inline-flex items-center rounded-full border border-cyan/30 bg-deep-2 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-cyan shadow-lg">
                    94% retention
                  </span>

                  <div className="glass-card rounded-2xl p-5 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]">
                    {/* header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-on-deep">
                          Senior Cloud Architect
                        </p>
                        <p className="mt-0.5 text-xs text-on-deep-muted">
                          Enterprise banking · Toronto · Hybrid
                        </p>
                      </div>
                      <span className="rounded-full bg-green-soft px-2.5 py-1 text-[11px] font-medium text-green">
                        ● Live mandate
                      </span>
                    </div>

                    {/* shortlist rows */}
                    <div className="mt-5 space-y-2.5">
                      {[
                        { initials: "CA", title: "Cloud Architect", meta: "12 yrs · AWS · Kubernetes" },
                        { initials: "PE", title: "Platform Engineer", meta: "9 yrs · Terraform · GCP" },
                        { initials: "SL", title: "SRE Lead", meta: "11 yrs · Azure · On-call at scale" },
                      ].map((c) => (
                        <div
                          key={c.initials}
                          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                        >
                          <span
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-xs font-semibold text-cyan"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {c.initials}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-on-deep">
                              {c.title}
                            </p>
                            <p className="truncate text-xs text-on-deep-muted">
                              {c.meta}
                            </p>
                          </div>
                          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-frost/10 px-2.5 py-1 text-[11px] font-medium text-frost">
                            <Check className="h-3 w-3" /> Vetted
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* footer */}
                    <div className="mt-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                      <span className="inline-flex items-center gap-2 text-xs text-on-deep-muted">
                        <Clock className="h-4 w-4 text-cyan" /> Brief → shortlist
                      </span>
                      <span className="text-sm font-semibold text-cyan">
                        <CountUp value="48h" />
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- PROOF STAT BAND ---------- */}
        <section className="border-y border-border bg-page py-16 md:py-20">
          <div className="container-x">
            <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-border">
              {PROOF.map((p, i) => (
                <Reveal key={p.label} delay={i * 100}>
                  <div className="px-6 text-center">
                    <p
                      className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none tracking-tight text-cyan"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      <CountUp value={p.value} />
                    </p>
                    <p className="mt-4 text-[12px] uppercase tracking-[0.25em] text-ink-muted">
                      {p.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- HOW IT WORKS ---------- */}
        <section className="bg-page py-20 md:py-24">
          <div className="container-x">
            <Reveal>
              <div className="mb-14 max-w-2xl md:mb-16">
                <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  How it works
                </p>
                <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight">
                  From brief to hire.{" "}
                  <span
                    className="text-cyan"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    In four steps.
                  </span>
                </h2>
              </div>
            </Reveal>

            <div className="relative">
              {/* Connecting line through the step circles */}
              <span
                aria-hidden
                className="absolute left-0 top-6 hidden h-px w-full bg-cyan/25 md:block"
              />
              <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6 lg:gap-8">
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
        <section className="relative isolate overflow-hidden bg-deep-2 py-20 text-on-deep md:py-24">
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
              <div className="mb-14 max-w-2xl md:mb-16">
                <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  Why Querentia
                </p>
                <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-white">
                  Three principles.{" "}
                  <span
                    className="text-cyan"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Every mandate.
                  </span>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {PILLARS.map((v, i) => (
                <Reveal key={v.num} delay={i * 120}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-cyan/40 hover:bg-white/[0.05]">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-3 -top-7 select-none font-mono text-[5.5rem] font-bold leading-none text-white/[0.05] transition-colors duration-500 group-hover:text-cyan/[0.12]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {v.num}
                    </span>
                    <h3
                      className="text-[1.65rem] font-medium leading-tight tracking-tight text-white"
                      style={{ fontFamily: "var(--font-display)" }}
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
              <div className="mt-20 border-t border-white/10 pt-16 text-center md:mt-24">
                <p
                  className="mx-auto max-w-4xl text-balance text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.15] tracking-tight text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  High-quality, high-impact talent —{" "}
                  <span className="text-cyan">delivered.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- DISCIPLINES STRIP ---------- */}
        <section className="bg-page py-20 md:py-24">
          <div className="container-x">
            <Reveal>
              <div className="mb-10 max-w-2xl">
                <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  What we recruit for
                </p>
                <p className="text-lg leading-relaxed text-ink-muted md:text-xl">
                  From cloud platforms to risk and audit — if the role is
                  senior and technical, our network already covers it.
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
        <section className="border-t border-border bg-page-2 py-20 md:py-24">
          <div className="container-x">
            <Reveal>
              <figure className="mx-auto max-w-3xl border-t-2 border-cyan/70 bg-card p-10 shadow-[0_24px_50px_-20px_rgba(13,27,42,0.12)] md:p-14">
                <span
                  aria-hidden
                  className="mb-5 block text-6xl leading-none text-cyan/35"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;
                </span>
                <blockquote className="text-balance text-xl leading-relaxed text-ink md:text-2xl">
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
        <section className="relative isolate overflow-hidden bg-deep-2 py-24 text-on-deep md:py-28">
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
                <h2 className="mb-8 text-balance text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-white">
                  Tell us what you&apos;re hiring for.{" "}
                  <span
                    className="text-cyan"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    We&apos;ll do the rest.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={260}>
                <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-on-deep-muted md:text-lg">
                  Permanent or contract, one role or a whole squad — share
                  your staffing needs and our team will add value from the
                  first brief.
                </p>
              </Reveal>
              <Reveal delay={380}>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 bg-green px-9 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-green-700"
                  >
                    Contact Us
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2.5 border border-white/25 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:border-white/60 hover:bg-white/5"
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
