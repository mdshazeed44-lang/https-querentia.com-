import { Reveal } from "@/components/ui/reveal";
import { Shield, Star, Target, Award } from "@/components/ui/icons";

const REASONS = [
  {
    Icon: Shield,
    title: "A partnership built on trust",
    body: "We work closely with you, acting as an extension of your team — transparent, thoughtful, and invested in your success.",
  },
  {
    Icon: Star,
    title: "A focus on exceptional people",
    body: "We prioritize quality over volume, curating talent who bring capability, character, and lasting impact.",
  },
  {
    Icon: Target,
    title: "A deep understanding of your needs",
    body: "We take the time to understand your culture, challenges, and ambitions, ensuring every hire strengthens your team.",
  },
  {
    Icon: Award,
    title: "A commitment to long-term success",
    body: "Our approach goes beyond filling roles — we help you build teams that thrive today and grow with you tomorrow.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border bg-page-2 py-16 text-ink md:py-20">
      {/* ambient cyan glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full bg-cyan/[0.05] blur-3xl"
      />

      <div className="container-x relative">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-12">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                Why choose us
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight">
                Because the right talent{" "}
                <span
                  className="text-cyan"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  changes everything
                </span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-md text-base leading-relaxed text-ink-muted">
              Exceptional people don&apos;t just fill roles — they elevate teams,
              strengthen culture, and drive meaningful growth. We&apos;re
              committed to understanding what makes your organization unique, then
              connecting you with talent that aligns with your goals, values, and
              long-term vision.
            </p>
          </Reveal>
        </div>

        {/* Sub-label */}
        <Reveal>
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-muted">
            <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-cyan align-middle" />
            What sets us apart
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-7">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 110}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan/40 hover:shadow-[0_40px_90px_-40px_rgba(13,27,42,0.35)] md:p-10">
                {/* top accent line on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* corner glow on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex h-full flex-col">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-deep-2 text-cyan shadow-[0_14px_34px_-12px_rgba(0,194,255,0.45)] transition-transform duration-500 group-hover:scale-105">
                    <r.Icon className="h-6 w-6" />
                  </span>

                  <h3
                    className="mt-7 text-[22px] font-medium leading-snug tracking-tight text-ink md:text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {r.title}
                  </h3>

                  <span
                    aria-hidden
                    className="mt-4 block h-0.5 w-10 rounded-full bg-cyan transition-all duration-500 group-hover:w-16"
                  />

                  <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-muted md:text-base">
                    {r.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
