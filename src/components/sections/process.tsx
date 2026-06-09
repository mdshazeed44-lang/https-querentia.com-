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
    <section className="bg-page py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
              Why Querentia
            </p>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-deep">
              A staffing process built for enterprise speed.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          {/* Connecting line behind the cards */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-[10%] right-[10%] top-1/2 hidden h-px -translate-y-1/2 md:block"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(38,112,68,0.35) 20%, rgba(38,112,68,0.35) 80%, transparent)",
            }}
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 160}>
              <div className="group lift relative h-full rounded-3xl border border-border bg-card p-8 hover:border-green/40">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-soft text-sm font-semibold text-green transition-all duration-500 group-hover:scale-110 group-hover:bg-green group-hover:text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.n}
                </span>
                <h3
                  className="mt-5 text-2xl font-medium tracking-tight text-deep transition-colors duration-300 group-hover:text-green"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
