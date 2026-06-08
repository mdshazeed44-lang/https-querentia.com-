import { Reveal } from "@/components/ui/reveal";
import { Target, Award, UserCheck } from "@/components/ui/icons";

const cards = [
  {
    icon: Target,
    title: "Talent Recruitment Firm",
    desc: "Specialist IT recruiters with deep domain knowledge across Canada's enterprise stack.",
  },
  {
    icon: Award,
    title: "Committed to a World-Class Hiring Experience",
    desc: "Honest feedback, transparent timelines, and structured onboarding from brief to offer.",
  },
  {
    icon: UserCheck,
    title: "Specialized in Providing the Top Industry Talent",
    desc: "Pre-vetted candidates ready to deliver — drawn from our active enterprise network.",
  },
];

export function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-deep py-20 text-on-deep md:py-28">
      {/* Ambient brand glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="animate-aurora absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.45), transparent 70%)" }}
        />
        <div
          className="animate-aurora-2 absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.35), transparent 70%)" }}
        />
      </div>

      <div className="container-x relative">
        {/* Heading w/ brand underline */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="relative inline-block text-3xl font-bold tracking-tight text-white md:text-5xl">
              Who We{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(95deg, #38bdf8, #ffffff)" }}
              >
                Are
              </span>
              <span
                aria-hidden
                className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full"
                style={{ background: "linear-gradient(90deg, #38bdf8, #0ea5e9)" }}
              />
            </h2>
            <p className="mt-8 text-on-deep-muted">
              Three commitments that drive every placement — for employers and candidates alike.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 140}>
                <div className="ring-grad lift group relative h-full overflow-hidden rounded-3xl bg-white p-8 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.55)]">
                  {/* Decorative blob */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue/0 blur-2xl transition-all duration-500 group-hover:bg-blue/15"
                  />
                  {/* Circular icon chip */}
                  <span
                    className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full text-white shadow-[0_18px_36px_-12px_rgba(15,27,51,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ background: "linear-gradient(135deg, #0f1b33, #1e3a8a)" }}
                  >
                    <Icon className="h-9 w-9" />
                    {/* Outer ring */}
                    <span
                      aria-hidden
                      className="absolute -inset-2 rounded-full border border-deep/10 transition-opacity duration-500 group-hover:opacity-0"
                    />
                  </span>

                  <h3 className="mt-6 text-base font-bold leading-snug text-deep transition-colors duration-300 group-hover:text-green-700 md:text-lg">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {c.desc}
                  </p>

                  {/* Bottom accent line */}
                  <span
                    aria-hidden
                    className="mx-auto mt-5 block h-1 w-10 origin-center rounded-full transition-all duration-500 group-hover:w-20"
                    style={{ background: "linear-gradient(90deg, #2563eb, #0ea5e9)" }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
