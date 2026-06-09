import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "@/components/ui/icons";
import { clients } from "@/lib/site";

// Headline split into words for staggered rise animation
const LINE_1 = ["There's", "a", "team"];
const LINE_2_PRE = ["you", "should"];
const LINE_2_POST = ["build."];

export function Hero() {
  // Build staggered animation delays per word
  let i = 0;
  const wordStyle = () => {
    const d = 0.1 + i * 0.07;
    i++;
    return { animationDelay: `${d}s` } as React.CSSProperties;
  };

  return (
    <section className="relative isolate overflow-hidden bg-deep-2 text-on-deep">
      {/* Background portrait with Ken Burns slow zoom */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-65"
          />
        </div>
        {/* Vignette */}
        <span
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(11,12,10,0.92) 0%, rgba(11,12,10,0.6) 45%, rgba(11,12,10,0.3) 70%, rgba(11,12,10,0.85) 100%)",
          }}
        />
        {/* Bottom fade */}
        <span
          className="absolute inset-x-0 bottom-0 h-64"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(11,12,10,0.95))",
          }}
        />
        {/* Subtle grain */}
        <span className="grain absolute inset-0" />
      </div>

      <div className="container-x relative pt-32 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
              </span>
              IT Recruitment · Oakville, Canada
            </span>
          </Reveal>

          {/* Staggered word-rise headline */}
          <h1 className="mt-7 text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-tight">
            {LINE_1.map((w) => (
              <span key={w} className="word mr-[0.22em]" style={wordStyle()}>
                {w}
              </span>
            ))}
            <br />
            {LINE_2_PRE.map((w) => (
              <span key={w} className="word mr-[0.22em] text-white/70" style={wordStyle()}>
                {w}
              </span>
            ))}
            {LINE_2_POST.map((w) => (
              <span key={w} className="word" style={wordStyle()}>
                {w}
              </span>
            ))}
          </h1>

          <Reveal delay={640}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              The IT recruitment partner Canada&apos;s leading enterprises trust
              to staff their most critical technology programs — through the
              people they already rely on.
            </p>
          </Reveal>

          <Reveal delay={780}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="magnetic shine inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_-12px_rgba(38,112,68,0.5)] transition-colors duration-300 hover:bg-green-700"
              >
                Hire IT talent
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/jobs"
                className="magnetic inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-white/60 hover:bg-white/10"
              >
                Find a role
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <Reveal delay={1100}>
          <a
            href="#stats"
            aria-label="Scroll to next section"
            className="absolute bottom-32 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/55 transition-colors hover:text-white md:flex"
          >
            <span>Scroll</span>
            <span className="relative block h-10 w-px overflow-hidden bg-white/15">
              <span className="absolute inset-0 animate-scroll-cue bg-white/90" />
            </span>
          </a>
        </Reveal>
      </div>

      {/* Trust band */}
      <div className="relative border-t border-white/10">
        <div className="container-x py-8 md:py-10">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 lg:justify-between">
            {clients.map((c, idx) => (
              <Reveal key={c} delay={idx * 80}>
                <span
                  className="text-xl font-medium tracking-tight text-white/55 transition-colors hover:text-white md:text-2xl"
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
