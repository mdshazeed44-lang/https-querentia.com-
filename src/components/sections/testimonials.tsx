import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import { Star, Briefcase, Shield, Code, Users } from "@/components/ui/icons";
import type { ComponentType, SVGProps } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

type Quote = {
  quote: string;
  author: string;
  role: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  dark?: boolean;
};

// One dark accent card (the quantifiable 48-hour shortlist) for visual rhythm
// across the 2x2 grid.
const QUOTES: Quote[] = [
  {
    quote:
      "What set Querentia apart was the depth of their screening. We finally started seeing candidates who could actually build in our environment, not just match keywords. Their process saved our engineering team countless hours.",
    author: "Head of Engineering",
    role: "Global Technology Services Company · Vancouver",
    Icon: Code,
  },
  {
    quote:
      "Querentia delivered a five-candidate shortlist for a Senior Cloud Architect role in under 48 hours. Every profile was vetted, relevant, and deployable. The first hire is still with us 18 months later and has become a key delivery lead.",
    author: "Practice Director",
    role: "Tier-1 Consulting Company · Toronto",
    Icon: Briefcase,
    dark: true,
  },
  {
    quote:
      "After years of working with agencies that relied on Boolean searches, Querentia felt refreshingly different. They understood our tech stack, our culture, and what 'senior' actually means in a complex enterprise environment.",
    author: "Chief Information Officer",
    role: "Enterprise IT Organization · New York",
    Icon: Shield,
  },
  {
    quote:
      "Querentia's candidates consistently arrived prepared — technically strong, context-aware, and aligned to our delivery model. It's rare to find a partner who gets both the engineering depth and the business nuance right.",
    author: "VP Technology",
    role: "Large Professional Services Firm · Calgary",
    Icon: Users,
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 text-cyan" fill="currentColor" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border bg-page-2 py-20 text-ink md:py-24">
      {/* ambient cyan glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan/[0.05] blur-3xl"
      />

      <div className="container-x relative">
        {/* Header */}
        <Reveal>
          <div className="mb-12 text-center md:mb-14">
            <p className="mb-5 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="inline-block h-px w-8 bg-cyan/60" />
              Testimonials
              <span className="inline-block h-px w-8 bg-cyan/60" />
            </p>
            <h2
              className={`${playfair.className} text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight`}
            >
              In their <span className="text-cyan">words.</span>
            </h2>
          </div>
        </Reveal>

        {/* Even 2x2 grid — equal height, one dark accent card */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 120}>
              <figure
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 md:p-9 ${
                  q.dark
                    ? "bg-deep-2 text-on-deep shadow-[0_40px_90px_-42px_rgba(13,27,42,0.55)]"
                    : "border border-border bg-card hover:border-cyan/40 hover:shadow-[0_30px_70px_-35px_rgba(13,27,42,0.3)]"
                }`}
              >
                {q.dark && (
                  <>
                    <div
                      aria-hidden
                      className="grain pointer-events-none absolute inset-0"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(0,194,255,0.22), transparent 70%)",
                      }}
                    />
                  </>
                )}

                <div className="relative flex h-full flex-col">
                  <div className="mb-5 flex items-center justify-between">
                    <Stars />
                    <span
                      aria-hidden
                      className={`${playfair.className} leading-none`}
                      style={{
                        fontSize: "2.75rem",
                        color: q.dark
                          ? "rgba(0,194,255,0.45)"
                          : "rgba(0,194,255,0.25)",
                      }}
                    >
                      &ldquo;
                    </span>
                  </div>

                  <blockquote
                    className={`flex-1 text-[15px] leading-relaxed md:text-base ${
                      q.dark ? "text-on-deep" : "text-ink/90"
                    }`}
                  >
                    {q.quote}
                  </blockquote>

                  <figcaption
                    className={`mt-7 flex items-center gap-3.5 border-t pt-5 ${
                      q.dark ? "border-white/10" : "border-border"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        q.dark
                          ? "border border-white/10 bg-white/[0.06] text-cyan"
                          : "bg-cyan-soft text-cyan"
                      }`}
                    >
                      <q.Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p
                        className={`text-sm font-semibold ${
                          q.dark ? "text-on-deep" : "text-ink"
                        }`}
                      >
                        {q.author}
                      </p>
                      <p
                        className={`mt-0.5 font-mono text-[11px] uppercase tracking-[0.2em] ${
                          q.dark ? "text-on-deep-muted" : "text-ink-muted"
                        }`}
                      >
                        {q.role}
                      </p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
