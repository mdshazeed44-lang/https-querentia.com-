import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

const ROWS = [
  { value: "94%", label: "Placement retention", accent: true },
  { value: "500+", label: "Successful placements", accent: false },
  { value: "48h", label: "Avg. shortlist turnaround", accent: false },
  { value: "10+", label: "Years placing senior IT talent", accent: true },
] as const;

export function Stats() {
  return (
    <section
      id="stats"
      className="border-y border-border bg-page py-24 md:py-28"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 gap-y-14 md:grid-cols-4 md:gap-y-0">
          {ROWS.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <div
                className={`px-4 ${
                  i !== ROWS.length - 1
                    ? "md:border-r md:border-border md:pr-8"
                    : ""
                } md:px-6`}
              >
                <p
                  className={`text-[clamp(3.5rem,6.5vw,5.5rem)] font-medium leading-none tracking-tight ${
                    s.accent ? "text-cyan" : "text-ink"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <CountUp value={s.value} />
                </p>
                <p className="mt-6 text-[11px] uppercase tracking-[0.25em] text-ink-muted">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
