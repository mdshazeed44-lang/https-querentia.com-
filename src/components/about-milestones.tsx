import { Reveal } from "@/components/ui/reveal";

type Milestone = { year: string; title: string; body: string };

/**
 * "Our Story" — alternative to the vertical journey timeline: a clean,
 * premium card grid where each milestone reads as its own chapter. Large
 * serif year anchors each card; no timeline line or scroll beam.
 */
export function AboutMilestones({
  milestones,
  headingFont,
}: {
  milestones: Milestone[];
  headingFont: string;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
      {milestones.map((m, i) => (
        <Reveal key={m.year} delay={(i % 3) * 90}>
          <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan/40 hover:shadow-[0_40px_90px_-45px_rgba(0,194,255,0.35)] md:p-8">
            {/* corner glow on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan/[0.08] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="relative flex h-full flex-col">
              <span
                className={`${headingFont} text-5xl font-medium leading-none text-cyan/25 transition-colors duration-500 group-hover:text-cyan/50 md:text-6xl`}
              >
                {m.year}
              </span>
              <h3
                className={`${headingFont} mt-5 text-[1.35rem] font-medium leading-tight tracking-tight text-ink`}
              >
                {m.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-muted">
                {m.body}
              </p>
              <span
                aria-hidden
                className="mt-6 block h-0.5 w-10 rounded-full bg-cyan/50 transition-all duration-500 group-hover:w-20 group-hover:bg-cyan"
              />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
