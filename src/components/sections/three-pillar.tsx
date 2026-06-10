import { Reveal } from "@/components/ui/reveal";

const PILLARS = [
  {
    num: "01",
    title: "Source",
    headline: "Brief in, shortlist out.",
    body: "From job brief to qualified shortlist in 48 hours — sourced from a decade-deep network of vetted senior talent, not cold Boolean searches.",
  },
  {
    num: "02",
    title: "Vet",
    headline: "Bulletproof every placement.",
    body: "Technical screening with precision — stack, culture, references. Candidates who don't just clear the role — they raise the bar.",
  },
  {
    num: "03",
    title: "Scale",
    headline: "Onboard and retain.",
    body: "Smooth onboarding. 94% retention over 12 months. High-impact teams that ship faster because they stay longer.",
  },
];

export function ThreePillar() {
  return (
    <section className="border-t border-border bg-page py-20 text-ink md:py-24">
      <div className="container-x">
        <Reveal>
          <p className="mb-14 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan md:mb-16">
            <span className="inline-block h-px w-8 bg-cyan/60" />
            I · The method
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3 lg:gap-x-12">
          {PILLARS.map((p, i) => (
            <Reveal key={p.num} delay={i * 120}>
              <div className="group relative pt-7">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-px w-12 bg-cyan/55 transition-all duration-500 group-hover:w-24 group-hover:bg-green"
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
                  {p.num} · {p.title}
                </p>
                <h3
                  className="mt-5 text-2xl font-medium leading-tight tracking-tight text-ink md:text-[1.65rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.headline}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-ink-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
