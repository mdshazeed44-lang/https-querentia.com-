import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, Check } from "@/components/ui/icons";

type Service = {
  num: string;
  title: string;
  headline: string;
  body: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
  bullets: [string, string];
  glow: string;
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "For Companies",
    headline: "Hire exceptional talent — fast, precise, vetted.",
    body: "We connect exceptional people with meaningful roles where they can grow, contribute, and make an impact. Whether you're exploring your next move or seeking a long-term career path, we're here to support your journey.",
    href: "/for-companies",
    cta: "How we help you hire",
    image: "/services/companies-team.webp",
    imageAlt:
      "A diverse professional team collaborating in a strategy meeting",
    bullets: ["Qualified shortlist in 48 hours", "Vetted for skills, role and culture"],
    glow: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(0,194,255,0.18) 0%, transparent 70%)",
  },
  {
    num: "02",
    title: "For Talent",
    headline: "Find opportunities where your talent can thrive",
    body: "We take the time to understand your strengths, goals, and aspirations — then connect you with organizations that value exceptional people and offer meaningful opportunities to grow and make an impact.",
    href: "/for-talent",
    cta: "See open mandates",
    image: "/services/talent-workplace.webp",
    imageAlt:
      "A professional thriving in a vibrant modern workplace",
    bullets: ["Roles many never reach a job board", "A partner invested in your growth"],
    glow: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(0,194,255,0.18) 0%, transparent 70%)",
  },
];

export function Services() {
  return (
    <section className="border-t border-border bg-page py-14 text-ink md:py-16">
      <div className="container-x">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-12">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                What we do
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight">
                Two Sides.{" "}
                <span
                  className="text-cyan"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  One Purpose.
                </span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm text-base leading-relaxed text-ink-muted">
              Helping organizations and talent thrive through trusted
              recruitment partnerships.
            </p>
          </Reveal>
        </div>

        {/* Cards — stacked, alternating */}
        <div className="flex flex-col gap-8 md:gap-10">
          {SERVICES.map((s, i) => {
            const isFirst = i === 0;

            const TextBlock = (
              <div
                className={`flex flex-col justify-center px-8 py-9 md:px-12 md:py-11 ${
                  isFirst ? "" : "md:order-2"
                }`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
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
                <span className="mt-10 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.25em] text-cyan transition-colors group-hover:text-ink">
                  {s.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            );

            const Panel = (
              <div
                className={`relative min-h-[260px] overflow-hidden bg-deep-2 sm:min-h-[320px] md:min-h-[410px] ${
                  isFirst ? "" : "md:order-1"
                }`}
              >
                {/* Photographic backdrop */}
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Bottom scrim only — keep the photo bright, make bullets legible */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(13,27,42,0) 0%, rgba(13,27,42,0) 48%, rgba(13,27,42,0.55) 76%, rgba(13,27,42,0.94) 100%)",
                  }}
                />
                {/* Bullets pinned to the bottom */}
                <ul className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-7 md:p-9">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-[13px] font-medium leading-snug text-on-deep md:text-[14px]"
                    >
                      <Check className="h-4 w-4 shrink-0 text-frost" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
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
                    {Panel}
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
