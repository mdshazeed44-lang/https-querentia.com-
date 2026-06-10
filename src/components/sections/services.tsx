import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "@/components/ui/icons";

const SERVICES = [
  {
    num: "01",
    title: "For Companies",
    headline: "Hire senior IT talent — fast, precise, vetted.",
    body: "Brief us once. Get a qualified shortlist of senior engineers, architects, and program leaders inside 48 hours — pre-screened against your stack, your role and your culture. High-quality, high-impact placements delivered with the speed your roadmap demands.",
    href: "/for-companies",
    cta: "How we help you hire",
    illustration: "/illustrations/services-companies.png",
    illustrationAlt: "Recruiter at laptop with floating tech-stack badges",
    tint: "rgba(0,194,255,0.08)",
    radial:
      "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,194,255,0.16) 0%, transparent 65%)",
  },
  {
    num: "02",
    title: "For Talent",
    headline: "Land the senior IT role you actually want.",
    body: "Confidential mandates from Canada's largest consulting firms and enterprise IT programs. Senior-level placements with tier-1 clients — many of which never make it to a public job board.",
    href: "/for-talent",
    cta: "See open mandates",
    illustration: "/illustrations/services-talent.png",
    illustrationAlt: "Senior IT professional collaborating with tier-1 team",
    tint: "rgba(255,107,43,0.08)",
    radial:
      "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,107,43,0.16) 0%, transparent 65%)",
  },
];

export function Services() {
  return (
    <section className="border-t border-border bg-page py-20 text-ink md:py-24">
      <div className="container-x">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-12">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                II · What we do
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight">
                Two sides.{" "}
                <span
                  className="text-cyan"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  One standard.
                </span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm text-base leading-relaxed text-ink-muted">
              Precision · Impact · Integrity — the same standard whether
              you&apos;re building a team or building a career.
            </p>
          </Reveal>
        </div>

        {/* Cards — stacked, alternating */}
        <div className="flex flex-col gap-10 md:gap-14">
          {SERVICES.map((s, i) => {
            const isFirst = i === 0;

            const TextBlock = (
              <div
                className={`flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 ${
                  isFirst ? "" : "md:order-2"
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
                  {s.num} · {s.title}
                </p>
                <h3
                  className="mb-6 mt-5 font-medium leading-tight tracking-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.65rem, 3vw, 2rem)",
                  }}
                >
                  {s.headline}
                </h3>
                <p className="text-base leading-relaxed text-ink-muted">
                  {s.body}
                </p>
                <span className="mt-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-cyan transition-colors group-hover:text-ink">
                  {s.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            );

            const Illustration = (
              <div
                className={`relative overflow-hidden md:min-h-[460px] ${
                  isFirst ? "" : "md:order-1"
                }`}
                style={{ backgroundColor: "#ffffff" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.illustration}
                  alt={s.illustrationAlt}
                  className="absolute inset-0 h-full w-full object-contain p-4 md:p-6"
                />
              </div>
            );

            return (
              <Reveal key={s.num} delay={i * 130}>
                <Link
                  href={s.href}
                  className="group block overflow-hidden rounded-3xl border border-ink/5 bg-card shadow-[0_30px_80px_-30px_rgba(13,27,42,0.25)] ring-1 ring-ink/[0.03] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_100px_-30px_rgba(13,27,42,0.35)]"
                >
                  <div className="grid items-stretch md:grid-cols-2 lg:grid-cols-[1.05fr_1fr]">
                    {TextBlock}
                    {Illustration}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
