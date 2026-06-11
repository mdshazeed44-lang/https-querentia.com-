import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "For Talent — Senior IT Careers with Querentia",
  description:
    "Take charge of your career with Querentia. Confidential senior IT mandates with Canada's leading consulting firms and enterprise programs — delivered with precision, impact, and integrity.",
};

const BENEFITS = [
  {
    num: "01",
    title: "Senior-only mandates",
    body: "Architects, principals, senior engineers, programme leads. We focus our network where impact compounds — no junior pipeline, no volume game.",
  },
  {
    num: "02",
    title: "Confidential roles",
    body: "Tier-1 consulting and direct-enterprise mandates that never reach a public board. Precision access, available only through our network.",
  },
  {
    num: "03",
    title: "Honest representation",
    body: "Real rates, real feedback, real timelines. No inflated CV, no surprises — and you are never shopped around behind your back.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Share your CV",
    body: "Send your CV and tell us where you want to go next. It lands with a person who reads it — not a parser that scores it.",
  },
  {
    num: "02",
    title: "A real conversation",
    body: "You hear back from a recruiter who knows the role — not an auto-reply. We talk goals, rates, and what a great fit actually looks like.",
  },
  {
    num: "03",
    title: "Matched with precision",
    body: "Role, rate, team, stack — all upfront before you commit an hour. Your profile goes nowhere without your explicit yes.",
  },
  {
    num: "04",
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
    <main className="min-h-screen bg-page text-ink">
      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden bg-deep-2 pb-20 pt-36 text-on-deep md:pt-44">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,194,255,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="container-x relative">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div className="max-w-2xl">
              <Reveal>
                <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  For Talent · Precision · Impact · Integrity
                </p>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="text-balance text-[clamp(2.25rem,6vw,4.75rem)] font-medium leading-[0.98] tracking-tight text-white">
                  Take charge of your career.
                  <br />
                  <span
                    className="text-cyan"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    We&apos;ll take it to the next level.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                  Querentia represents senior IT professionals on confidential
                  mandates with Canada&apos;s leading consulting firms and
                  enterprise programs. Honest representation, precise matches,
                  and the speed your next move deserves.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="/jobs"
                    className="group inline-flex items-center gap-2.5 bg-green px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-green-700"
                  >
                    See open roles
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 border border-white/25 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:border-white/60 hover:bg-white/5"
                  >
                    Submit your CV
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Circle cluster */}
            <Reveal delay={250} className="hidden lg:block">
              <div className="flex items-center justify-center">
                <div className="relative h-[440px] w-[440px]">
                  {/* Concentric orbit strokes */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/15"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/15"
                  />

                  {/* Large circle photo */}
                  <div className="absolute left-1/2 top-1/2 z-10 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-2 ring-cyan/40">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
                      alt="Senior IT professional represented by Querentia"
                      fill
                      priority
                      sizes="340px"
                      className="object-cover"
                    />
                  </div>

                  {/* Small circle photo — top right */}
                  <div className="absolute -top-2 right-4 z-10 h-[130px] w-[130px] overflow-hidden rounded-full ring-2 ring-cyan/40">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                      alt="Senior technology consultant"
                      fill
                      sizes="130px"
                      className="object-cover"
                    />
                  </div>

                  {/* Accent dots */}
                  <span
                    aria-hidden
                    className="absolute left-[46px] top-[70px] z-20 flex h-3 w-3"
                  >
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan" />
                  </span>
                  <span
                    aria-hidden
                    className="absolute bottom-[58px] right-[28px] z-20 h-2.5 w-2.5 rounded-full bg-green"
                  />

                  {/* Floating pills */}
                  <span className="absolute -left-6 top-[120px] z-20 rounded-full border border-cyan/30 bg-deep-2 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-cyan">
                    Confidential mandates
                  </span>
                  <span className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/4 rounded-full bg-cyan px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-deep">
                    Senior roles only
                  </span>
                </div>
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
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:gap-x-12">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.num} delay={i * 120}>
                <div className="pt-7">
                  <span aria-hidden className="block h-px w-12 bg-cyan/60" />
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
                    {b.num}
                  </p>
                  <h3
                    className="mt-5 text-[1.55rem] font-medium leading-tight tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {b.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-ink-muted">
                    {b.body}
                  </p>
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
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} delay={i * 110}>
                <div className="pt-7">
                  <span aria-hidden className="block h-px w-12 bg-cyan/60" />
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
                    {s.num}
                  </p>
                  <h3
                    className="mt-5 text-xl font-medium leading-tight tracking-tight text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-on-deep-muted">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
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
          <Reveal delay={140}>
            <div className="flex flex-wrap gap-3">
              {SPECIALIZATIONS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-ink"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-5 flex flex-wrap gap-3">
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
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="mb-7 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
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
              <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                Most of our mandates are confidential and filled from the
                network before they&apos;re ever advertised. Join us and be the
                first to hear about senior openings — and where the market is
                moving next.
              </p>
            </Reveal>
            <Reveal delay={380}>
              <div className="mt-10 flex justify-center">
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
    </main>
  );
}
