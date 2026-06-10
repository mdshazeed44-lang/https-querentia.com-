import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { value: "94%", caption: "Placement retention · 12-month" },
  { value: "500+", caption: "Successful placements since 2014" },
  { value: "48h", caption: "Avg. shortlist turnaround" },
  { value: "10+", caption: "Years placing senior IT" },
];

export function StatsLuxury() {
  return (
    <section className="border-y border-border bg-page py-24 text-ink md:py-28">
      <div className="container-x">
        <p className="mb-16 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-cyan md:mb-20">
          III &middot; By the numbers
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-ink/10">
          {stats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 130}>
              <div className="flex flex-col items-center justify-center px-6 py-10 text-center md:py-4">
                <span
                  className="block font-medium leading-none tracking-tight text-ink"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(4rem, 9vw, 7.5rem)",
                    fontFeatureSettings: '"tnum" 1',
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  <CountUp value={stat.value} />
                </span>
                <span className="mt-6 block h-px w-10 bg-cyan" aria-hidden="true" />
                <span className="mt-5 block text-[10px] uppercase tracking-[0.3em] text-ink-muted">
                  {stat.caption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
