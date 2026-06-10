import { Fragment } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, Check } from "@/components/ui/icons";

const ROWS = [
  {
    label: "Shortlist speed",
    traditional: "2-4 weeks",
    querentia: "48 hours",
  },
  {
    label: "Vetting depth",
    traditional: "Keyword matching",
    querentia: "Technical screening with precision",
  },
  {
    label: "Candidate source",
    traditional: "Cold Boolean searches",
    querentia: "Decade-deep vetted network",
  },
  {
    label: "Transparency",
    traditional: "Black-box process",
    querentia: "Honest pipelines, real timelines",
  },
  {
    label: "Retention",
    traditional: "Place and disappear",
    querentia: "94% retention, 12-month support",
  },
] as const;

function QuerentiaValue({ value }: { value: string }) {
  return (
    <span className="flex items-start gap-2.5">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-frost" />
      <span className="text-sm font-medium text-white">{value}</span>
    </span>
  );
}

export function Comparison() {
  return (
    <section className="relative overflow-hidden bg-deep-2 py-20 text-on-deep md:py-24">
      {/* Cyan ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(0,194,255,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Concentric circle accent — Curasion motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 hidden lg:block"
      >
        <span className="block h-72 w-72 rounded-full border border-cyan/15" />
        <span className="absolute inset-10 rounded-full border border-cyan/10" />
        <span className="absolute left-6 top-1/2 h-2 w-2 rounded-full bg-cyan/60" />
      </div>

      <div className="container-x relative z-10">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <Reveal>
            <p className="mb-5 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="inline-block h-px w-8 bg-cyan/60" />
              Why Querentia
              <span className="inline-block h-px w-8 bg-cyan/60" />
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.08] tracking-tight text-white">
              Recruitment,{" "}
              <span
                className="text-cyan"
                style={{ fontFamily: "var(--font-display)" }}
              >
                re-engineered.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 text-base text-on-deep-muted md:text-lg">
              What changes when precision, impact, and integrity drive every
              mandate.
            </p>
          </Reveal>
        </div>

        {/* Comparison table — desktop */}
        <Reveal delay={300}>
          <div className="mx-auto hidden max-w-5xl grid-cols-[1.2fr_1fr_1fr] md:grid">
            {/* Column headers */}
            <div className="border-b border-white/10" />
            <div className="flex items-center border-b border-white/10 px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-on-deep-muted">
              Traditional agencies
            </div>
            <div className="flex items-center rounded-t-2xl border-x border-t border-cyan/20 bg-white/[0.04] px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan">
              Querentia
            </div>

            {/* Rows */}
            {ROWS.map((row, i) => {
              const isLast = i === ROWS.length - 1;
              const divider = isLast ? "" : "border-b border-white/10";
              return (
                <Fragment key={row.label}>
                  <div
                    className={`flex items-center px-6 py-5 text-sm font-medium text-white ${divider}`}
                  >
                    {row.label}
                  </div>
                  <div
                    className={`flex items-center px-6 py-5 text-sm text-on-deep-muted ${divider}`}
                  >
                    {row.traditional}
                  </div>
                  <div
                    className={`flex items-center border-x border-cyan/20 bg-white/[0.04] px-6 py-5 ${
                      isLast
                        ? "rounded-b-2xl border-b"
                        : "border-b border-white/10"
                    }`}
                  >
                    <QuerentiaValue value={row.querentia} />
                  </div>
                </Fragment>
              );
            })}
          </div>
        </Reveal>

        {/* Comparison cards — mobile */}
        <div className="space-y-4 md:hidden">
          {ROWS.map((row, i) => (
            <Reveal key={row.label} delay={120 + i * 90}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white">
                  {row.label}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-on-deep-muted">
                      Traditional
                    </p>
                    <p className="text-sm text-on-deep-muted">
                      {row.traditional}
                    </p>
                  </div>
                  <div className="rounded-xl border border-cyan/20 bg-white/[0.04] p-3">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-cyan">
                      Querentia
                    </p>
                    <QuerentiaValue value={row.querentia} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={420}>
          <div className="mt-12 flex justify-center md:mt-14">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-green px-9 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-green-700"
            >
              Experience the difference
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
