import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We map your tech stack, team culture, and delivery goals — not just a job description.",
  },
  {
    n: "02",
    title: "Shortlist",
    desc: "Qualified, pre-vetted candidates in 48 hours, drawn from our active enterprise network.",
  },
  {
    n: "03",
    title: "Place & retain",
    desc: "Structured onboarding and ongoing check-ins that drive 94% placement retention.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-deep py-20 text-on-deep md:py-28">
      <div
        aria-hidden
        className="animate-aurora pointer-events-none absolute -right-20 top-0 h-[28rem] w-[28rem] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.35), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="animate-aurora-2 pointer-events-none absolute -left-16 bottom-0 h-[26rem] w-[26rem] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.25), transparent 70%)" }}
      />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                Why Querentia
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                A staffing process built for{" "}
                <span className="text-gradient-anim">enterprise speed</span>
              </h2>
              <p className="mt-4 max-w-md text-on-deep-muted">
                Querentia blends specialist recruiters with an AI-augmented pipeline,
                so the right people reach you faster — without sacrificing fit.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Connecting line */}
            <span
              aria-hidden
              className="absolute left-[2.1rem] top-6 bottom-6 w-px"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent)" }}
            />
            <div className="space-y-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 140}>
                  <div className="group relative flex gap-5 rounded-2xl border border-white/12 bg-white/[0.06] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-blue/40 hover:bg-white/[0.1] hover:shadow-[0_22px_50px_-22px_rgba(37,99,235,0.5)]">
                    <span
                      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
                        boxShadow: "0 8px 22px -6px rgba(37,99,235,0.6)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                      <p className="mt-1 text-sm text-on-deep-muted">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
