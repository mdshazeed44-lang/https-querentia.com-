import { Reveal } from "@/components/ui/reveal";
import { specializations } from "@/lib/site";

// Split the 30 specs across 3 rows (interleaved so each row has a mix)
function chunk<T>(arr: readonly T[], rows: number): T[][] {
  const out: T[][] = Array.from({ length: rows }, () => []);
  arr.forEach((item, i) => out[i % rows].push(item));
  return out;
}

export function SpecsMarquee() {
  const rows = chunk(specializations, 3);

  return (
    <section className="relative isolate overflow-hidden bg-deep py-24 text-on-deep md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
            Our specialization
          </p>
          <h2
            className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We staff across <em className="italic text-sage">30+</em> technology
            disciplines — the ones your enterprise actually runs on.
          </h2>
        </Reveal>
      </div>

      {/* 3 rows, alternating directions, full-bleed */}
      <div className="mt-14 space-y-4 md:mt-20">
        {rows.map((row, idx) => {
          const dirClass = idx % 2 === 0 ? "animate-marquee-slow" : "animate-marquee-rev";
          return (
            <div key={idx} className="relative">
              {/* Edge fades */}
              <span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-deep to-transparent" />
              <span className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-deep to-transparent" />

              <div className={`flex gap-4 whitespace-nowrap ${dirClass}`}>
                {[...row, ...row, ...row].map((s, k) => (
                  <span
                    key={`${s.title}-${k}`}
                    className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-on-deep transition-colors hover:border-sage/60 hover:bg-white/[0.08]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                    {s.title}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="container-x mt-14 md:mt-20">
        <Reveal>
          <p className="max-w-xl text-base text-on-deep-muted md:text-lg">
            From permanent placements with Canada&apos;s biggest enterprises to
            specialist contract roles — across the breadth of in-demand
            technology and business disciplines.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
