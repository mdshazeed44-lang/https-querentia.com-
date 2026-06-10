import { Reveal } from "@/components/ui/reveal";

export function Signature() {
  return (
    <section className="relative overflow-hidden bg-deep-2 py-28 text-on-deep md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 0%, rgba(0,194,255,0.06), transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
              <span className="inline-block h-px w-8 bg-cyan/60" />
              V &middot; From the desk
            </p>
          </Reveal>

          <div className="mt-8 max-w-2xl text-balance">
            <Reveal delay={160}>
              <p
                className="text-lg leading-relaxed text-on-deep-muted md:text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Recruitment is, at its heart, a matter of trust. A senior IT
                leader is taking a leap; an enterprise team is staking its
                roadmap on them. Our work is to make that exchange honest,
                fast, and precise.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <p
                className="mt-6 text-lg leading-relaxed text-on-deep-muted md:text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                For over a decade we have placed senior talent into the
                consulting firms and enterprise programs that shape Canadian
                technology. We know what the role really needs, who is
                genuinely ready for it, and what feedback to give when the fit
                is wrong &mdash; because the alternative is everyone&apos;s
                time wasted.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <p
                className="mt-6 text-lg leading-relaxed text-on-deep-muted md:text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Precision. Impact. Integrity. Three words. One standard.
                Always.
              </p>
            </Reveal>
          </div>

          <Reveal delay={480}>
            <div className="mt-14">
              <div
                className="leading-none tracking-tight text-white"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  transform: "skew(-6deg)",
                }}
              >
                Seema Makhija
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-cyan">
                Director &middot; Querentia
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-on-deep-muted">
                Oakville, Ontario
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
