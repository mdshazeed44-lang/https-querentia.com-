import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "@/components/ui/icons";

// Specs scroll vertically on the right edge as a "live" feed
const SPECS_LIVE = [
  "Cloud Technologies",
  "Data Engineering",
  "Cyber Security",
  "Full Stack Development",
  "Data Science",
  "UI / UX Design",
  "DevOps",
  "Blockchain",
  "Data Analytics",
  "Project Management",
];

const WORDS = ["Build,", "Attract", "&", "Ignite"];

export function Hero() {
  let i = 0;
  const w = () => {
    const d = 0.1 + i * 0.09;
    i++;
    return { animationDelay: `${d}s` } as React.CSSProperties;
  };

  return (
    <section className="relative isolate overflow-hidden bg-page">
      {/* Subtle grid backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            color: "var(--color-ink)",
          }}
        />
        <div
          className="absolute -left-32 top-0 h-[40rem] w-[40rem] rounded-full blur-[140px] opacity-30"
          style={{ background: "radial-gradient(circle, rgba(38,112,68,0.4), transparent 70%)" }}
        />
        <div
          className="absolute -right-32 bottom-0 h-[34rem] w-[34rem] rounded-full blur-[140px] opacity-25"
          style={{ background: "radial-gradient(circle, rgba(143,184,159,0.6), transparent 70%)" }}
        />
      </div>

      <div className="container-x relative grid items-end gap-12 pt-32 pb-16 md:pt-44 md:pb-24 lg:grid-cols-[1.5fr_1fr]">
        {/* LEFT — editorial type */}
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green">
              Querentia · Talent Redefined
            </p>
          </Reveal>

          {/* Massive editorial headline — word-by-word reveal */}
          <h1 className="mt-6 text-[clamp(3.5rem,11vw,11rem)] font-medium leading-[0.86] tracking-[-0.04em] text-deep">
            <span className="block">
              <span className="word mr-[0.18em]" style={w()}>We</span>
            </span>
            <span className="block">
              {WORDS.map((wd) => (
                <span
                  key={wd}
                  className={`word mr-[0.18em] ${wd === "Ignite" ? "italic text-green" : ""}`}
                  style={w()}
                >
                  {wd}
                </span>
              ))}
            </span>
            <span className="block">
              <span className="word mr-[0.18em]" style={w()}>Talent.</span>
            </span>
          </h1>

          <Reveal delay={820}>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-ink-muted md:text-xl">
              Trusted Talent Partners. Remarkable services. Built for the
              ambitions of Canada&apos;s leading enterprises — and the careers
              of the people powering them.
            </p>
          </Reveal>

          <Reveal delay={960}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/jobs"
                className="magnetic inline-flex items-center gap-2 rounded-full bg-deep px-8 py-4 text-sm font-medium text-page transition-all hover:bg-green"
              >
                Find Jobs <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="magnetic group inline-flex items-center gap-3 text-sm font-medium text-deep"
              >
                <span className="relative">
                  Or hire IT talent
                  <span className="absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-100 bg-deep transition-transform duration-500 group-hover:scale-x-0" />
                  <span className="absolute inset-x-0 -bottom-1 h-[2px] origin-right scale-x-0 bg-green transition-transform duration-500 group-hover:scale-x-100" />
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — live spec vertical feed */}
        <Reveal delay={400}>
          <div className="relative hidden lg:block">
            <div className="absolute -top-6 left-0 right-0 z-10 h-16 bg-gradient-to-b from-page to-transparent" />
            <div className="absolute -bottom-6 left-0 right-0 z-10 h-16 bg-gradient-to-t from-page to-transparent" />

            <div className="relative h-[28rem] overflow-hidden">
              <div className="flex animate-marquee-rev flex-col gap-3" style={{ animationDirection: "normal" }}>
                {[...SPECS_LIVE, ...SPECS_LIVE].map((s, idx) => (
                  <div
                    key={`${s}-${idx}`}
                    className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-green/40"
                  >
                    <span className="text-sm font-medium text-deep">{s}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-soft text-green transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-ink-faint">
              ↑ Live · 30+ specialisations
            </p>
          </div>
        </Reveal>
      </div>

      {/* Bottom edge — running specializations marquee in a thin dark band */}
      <div className="relative border-y border-border bg-deep py-5 text-on-deep">
        <div className="flex animate-marquee-mid gap-12 whitespace-nowrap">
          {[
            "Cloud · Data · Cyber · AI · Cloud · Data · Cyber · AI · Cloud · Data · Cyber · AI",
            "Cloud · Data · Cyber · AI · Cloud · Data · Cyber · AI · Cloud · Data · Cyber · AI",
          ].map((row, idx) => (
            <span
              key={idx}
              className="text-2xl font-medium tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {row}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
