import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { clients, stats } from "@/lib/site";

export function Billboards() {
  return (
    <section className="bg-page-2">
      {/* Big number billboards */}
      <div className="container-x py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green">
            By the numbers
          </p>
          <h2
            className="mt-3 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-deep"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A decade of compound progress —{" "}
            <em className="italic text-green">measured</em>.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {stats.map((s, idx) => (
            <Reveal key={s.label} delay={idx * 100}>
              <div className="group grid grid-cols-2 items-center gap-6 py-8 md:grid-cols-[1fr_2fr_auto] md:py-12">
                <p
                  className="text-[clamp(4rem,10vw,9rem)] font-medium leading-none tracking-tight text-deep transition-transform duration-500 group-hover:translate-x-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <CountUp value={s.value} />
                </p>
                <p
                  className="text-lg leading-snug text-deep md:text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.label}
                </p>
                <p className="hidden text-xs uppercase tracking-[0.2em] text-ink-faint md:block">
                  {s.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Trusted by */}
      <div className="border-t border-border bg-page py-14">
        <div className="container-x">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-ink-faint">
              Trusted by top companies in Canada
            </p>
          </Reveal>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-5 lg:justify-between">
            {clients.map((c, idx) => (
              <Reveal key={c} delay={idx * 80}>
                <span
                  className="text-2xl font-medium tracking-tight text-deep/55 transition-colors hover:text-deep md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
