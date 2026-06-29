import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { HeroTalentOrbit } from "@/components/ui/hero-talent-orbit";
import { ABOUT_ORBIT_LOGOS } from "@/components/ui/about-orbit-logos";
import {
  ArrowRight,
  Star,
  Shield,
  Chat,
  Briefcase,
  Target,
  UserCheck,
  Check,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "For Talent — Senior IT Careers with Querentia",
  description:
    "Take charge of your career with Querentia. Confidential senior IT mandates with Canada's leading consulting firms and enterprise programs — built on talent, trust, and your long-term success.",
  alternates: { canonical: "/for-talent" },
};

const BENEFITS = [
  {
    num: "01",
    icon: Star,
    title: "Senior-only mandates",
    body: "Architects, principals, senior engineers, programme leads. We focus our network where impact compounds — no junior pipeline, no volume game.",
  },
  {
    num: "02",
    icon: Shield,
    title: "Confidential roles",
    body: "Tier-1 consulting and direct-enterprise mandates that never reach a public board. Precision access, available only through our network.",
  },
  {
    num: "03",
    icon: Chat,
    title: "Honest representation",
    body: "Real rates, real feedback, real timelines. No inflated CV, no surprises — and you are never shopped around behind your back.",
  },
];

const STEPS = [
  {
    num: "01",
    icon: Briefcase,
    title: "Share your CV",
    body: "Send your CV and tell us where you want to go next. It lands with a person who reads it — not a parser that scores it.",
  },
  {
    num: "02",
    icon: Chat,
    title: "A real conversation",
    body: "You hear back from a recruiter who knows the role — not an auto-reply. We talk goals, rates, and what a great fit actually looks like.",
  },
  {
    num: "03",
    icon: Target,
    title: "Matched with precision",
    body: "Role, rate, team, stack — all upfront before you commit an hour. Your profile goes nowhere without your explicit yes.",
  },
  {
    num: "04",
    icon: UserCheck,
    title: "Placed and supported",
    body: "We stay with you through offer, onboarding and beyond. Trust that outlasts the placement is the whole point.",
  },
];

const SPECIALIZATIONS = [
  "Cloud Technologies",
  "Data Engineering",
  "Data Analytics",
  "Data Science",
  "Cyber Security",
  "Full Stack Development",
  "Enterprise Architecture",
  "Application Integration",
  "Project Management",
  "Program Management",
  "Business Analysis",
  "Enterprise Resource Planning",
];

const VENDORS = ["AWS", "Azure", "Google Cloud", "SAP", "ServiceNow"];

export default function ForTalentPage() {
  return (
    <div className="min-h-screen bg-page text-ink">
      {/* page-scoped effects: dual-direction specialization marquee */}
      <style>{`
        @keyframes ft-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ft-track { animation: ft-marquee 44s linear infinite; }
        .ft-track-rev { animation: ft-marquee 50s linear infinite reverse; }
        .ft-pause:hover .ft-track, .ft-pause:hover .ft-track-rev { animation-play-state: paused; }
        .ft-mask { -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); }
        @media (prefers-reduced-motion: reduce) {
          .ft-track, .ft-track-rev { animation: none; }
        }
      `}</style>
      {/* 1. Hero — copy left, orbit figure pinned to the section's bottom
           edge on the right (same pattern as the homepage hero) */}
      <section className="relative isolate flex h-screen min-h-[680px] flex-col justify-center overflow-hidden bg-deep-2 pb-14 pt-24 text-on-deep md:pb-16 md:pt-24 lg:pb-0">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,194,255,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="container-x relative lg:h-full lg:flex-1">
          <div className="grid grid-cols-1 items-center gap-14 lg:h-full lg:grid-cols-[1.05fr_1fr]">
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
                  <span>For Talent</span>
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
                  Take charge of your career.
                  <br className="hidden sm:block" />{" "}
                  <span
                    className="text-cyan"
                    style={{
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    We&apos;ll take it further.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={300}>
                <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-white/65 md:text-[15px] lg:mx-0">
                  Confidential senior IT mandates with Canada&apos;s leading
                  consulting firms and enterprise programs — honest
                  representation, precise matches.
                </p>
              </Reveal>
              <Reveal delay={440}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-white/15 pt-5 lg:justify-start">
                  {["Senior-only", "Confidential", "Honest representation"].map(
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

            {/* Orbit figure — moved from the About hero, pinned to the
                section bottom (overshoot > max parallax+float lift) */}
            <Reveal delay={250} className="hidden lg:block lg:self-stretch">
              <div className="flex h-full items-end justify-center lg:-mb-8">
                <HeroTalentOrbit
                  imgSrc="/people/about-hero.webp"
                  imgAlt="Senior IT professional represented by Querentia"
                  logos={ABOUT_ORBIT_LOGOS}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Benefits */}
      <section className="bg-page py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                What changes when you join our network
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight">
                Built around{" "}
                <span
                  className="text-cyan"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  senior careers.
                </span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.num} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_28px_60px_-30px_rgba(13,27,42,0.3)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-soft text-cyan transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <h3
                    className="mt-6 text-[1.45rem] font-medium leading-tight tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {b.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">
                    {b.body}
                  </p>
                  <span
                    aria-hidden
                    className="mt-6 block h-0.5 w-10 bg-cyan transition-all duration-500 group-hover:w-16"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How it works for you */}
      <section className="relative overflow-hidden bg-deep-2 py-20 text-on-deep md:py-24">
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
            <div className="mb-14 max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                How it works for you
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-white">
                Four steps.{" "}
                <span
                  className="text-cyan"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Zero runaround.
                </span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12">
            {/* steps — 2×2 */}
            <div className="order-2 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:order-1">
              {STEPS.map((s, i) => (
                <Reveal key={s.num} delay={i * 110}>
                  <div className="group">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan/40 bg-white/[0.04] text-cyan transition-all duration-300 group-hover:bg-cyan group-hover:text-deep">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
                      Step {s.num}
                    </p>
                    <h3
                      className="mt-2 text-xl font-medium leading-tight tracking-tight text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-on-deep-muted">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* precision-match visual — your profile, found and chosen */}
            <Reveal delay={150} className="order-1 lg:order-2">
              <div className="relative">
                <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_40px_90px_-40px_rgba(0,0,0,0.6)]">
                  <div className="relative h-[260px] sm:h-[320px]">
                    <Image
                      src="/talent/precision-match.webp"
                      alt="A senior candidate highlighted among profiles — matched with precision"
                      fill
                      sizes="(min-width: 1024px) 34rem, 100vw"
                      className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                {/* floating chips */}
                <div className="absolute -bottom-4 left-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-deep-2 px-4 py-2 text-xs font-medium text-cyan shadow-lg">
                  <Target className="h-4 w-4" />
                  Matched with precision
                </div>
                <div className="absolute -top-4 right-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-deep-2 px-4 py-2 text-xs font-medium text-on-deep shadow-lg">
                  <Check className="h-4 w-4 text-frost" />
                  Nothing moves without your yes
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Specialization chips */}
      <section className="bg-page py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                Where our network works
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight">
                Deep in the disciplines{" "}
                <span
                  className="text-cyan"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  that move enterprises.
                </span>
              </h2>
            </div>
          </Reveal>
          <div className="ft-pause space-y-3">
            <Reveal delay={140}>
              <div className="ft-mask overflow-hidden">
                <div className="ft-track flex w-max gap-3">
                  {[...SPECIALIZATIONS.slice(0, 6), ...SPECIALIZATIONS.slice(0, 6)].map(
                    (s, i) => (
                      <span
                        key={`${s}-${i}`}
                        className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-cyan"
                      >
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-cyan" />
                        {s}
                      </span>
                    )
                  )}
                </div>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="ft-mask overflow-hidden">
                <div className="ft-track-rev flex w-max gap-3">
                  {[...SPECIALIZATIONS.slice(6), ...SPECIALIZATIONS.slice(6)].map(
                    (s, i) => (
                      <span
                        key={`${s}-${i}`}
                        className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-cyan"
                      >
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-cyan" />
                        {s}
                      </span>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="mt-6 flex flex-wrap gap-3">
              {VENDORS.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-cyan/30 bg-deep-2 px-5 py-2.5 text-sm font-medium text-cyan"
                >
                  {v}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Candidate quote */}
      <section className="bg-page pb-20 md:pb-24">
        <div className="container-x">
          <Reveal>
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-cyan/15"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-cyan/15"
              />
              <p className="mb-8 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                From the network
              </p>
              <blockquote
                className="text-[clamp(1.35rem,2.6vw,1.9rem)] font-medium leading-snug tracking-tight text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;Querentia told me the client, the rate, and the team
                before I committed a single hour. Four days later I was
                interviewing. Ten days later I signed. No other recruiter has
                ever been that straight with me.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <span
                  aria-hidden
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-soft text-sm font-semibold text-cyan ring-2 ring-cyan/40"
                >
                  CA
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    Senior Cloud Architect
                  </p>
                  <p className="text-sm text-ink-muted">
                    Placed with a Tier-1 consulting firm — Toronto
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Talent community band */}
      <section className="relative overflow-hidden border-t border-border bg-page py-20 md:py-24">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 45% at 50% 50%, rgba(0,194,255,0.10) 0%, transparent 60%)",
          }}
        />
        <div className="container-x relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            {/* network visual — one community, connected coast to coast */}
            <Reveal>
              <div className="relative">
                <div className="group overflow-hidden rounded-3xl border border-border bg-white shadow-[0_30px_80px_-40px_rgba(13,27,42,0.35)]">
                  <div className="relative h-[260px] sm:h-[320px]">
                    <Image
                      src="/talent/network-globe.webp"
                      alt="Senior IT professionals connected through the Querentia talent network"
                      fill
                      sizes="(min-width: 1024px) 32rem, 100vw"
                      className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-ink shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                  </span>
                  Network-first · Canada-wide
                </div>
              </div>
            </Reveal>

            {/* copy */}
            <div>
              <Reveal>
                <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  Talent community
                </p>
              </Reveal>
              <Reveal delay={130}>
                <h2 className="text-balance text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight">
                  The roles you won&apos;t see on{" "}
                  <span
                    className="text-cyan"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    any job board.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                  Most of our mandates are confidential and filled from the
                  network before they&apos;re ever advertised. Join us and be
                  the first to hear about senior openings — and where the
                  market is moving next.
                </p>
              </Reveal>
              <Reveal delay={380}>
                <div className="mt-9">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 bg-green px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-green-700"
                  >
                    Join the network
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="relative overflow-hidden bg-deep-2 py-24 text-on-deep md:py-28">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(0,194,255,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="mb-7 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                Your next move
              </p>
            </Reveal>
            <Reveal delay={130}>
              <h2 className="mb-8 text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-white">
                Senior IT.{" "}
                <span
                  className="text-cyan"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Senior representation.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={260}>
              <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                Send us your CV. We&apos;ll come back with a real conversation —
                not a form auto-reply.
              </p>
            </Reveal>
            <Reveal delay={380}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 bg-green px-9 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-green-700"
                >
                  Submit your CV
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2.5 border border-white/25 px-9 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:border-white/60 hover:bg-white/5"
                >
                  Browse roles
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
