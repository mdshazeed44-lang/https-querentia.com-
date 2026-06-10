import { Reveal } from "@/components/ui/reveal";

export function Manifesto() {
  return (
    <section className="bg-page py-32 text-ink md:py-40 lg:py-48">
      <div className="container-x">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="flex flex-col items-center">
              <span className="inline-block h-[2px] w-14 bg-cyan" />
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
                II &middot; The promise
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h2
              className="mt-10 font-medium tracking-tight text-ink"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                lineHeight: 1.02,
              }}
            >
              <div>The most trusted partner.</div>
              <div className="text-cyan">The most precise process.</div>
              <div>The most impactful placements.</div>
            </h2>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-12 flex flex-col items-center">
              <span className="inline-block h-px w-8 bg-ink/15" />
            </div>
          </Reveal>

          <Reveal delay={420}>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">
              Querentia &middot; Est. 2014 &middot; Oakville, Ontario
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
