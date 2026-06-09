import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section id="stats" className="bg-page py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
              By the numbers
            </p>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-deep">
              The best hires have always come through people you trust.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-y-12 border-y border-border md:grid-cols-4 md:divide-x md:divide-border md:py-12">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <div className="group px-6 text-center">
                <p
                  className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-none tracking-tight text-deep transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <CountUp value={s.value} />
                </p>
                <span className="mx-auto mt-4 block h-[2px] w-8 origin-center bg-green transition-all duration-500 group-hover:w-16" />
                <p className="mt-3 text-sm font-medium text-deep">{s.label}</p>
                <p className="mt-1 text-xs text-ink-faint">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
