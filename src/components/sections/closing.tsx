import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, Mail } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function Closing() {
  return (
    <section className="relative isolate overflow-hidden bg-deep-2 py-24 text-on-deep md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="animate-marquee-slow absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(143,184,159,0.25), transparent 70%)" }}
        />
        <div
          className="animate-marquee-rev absolute -right-32 bottom-0 h-[34rem] w-[34rem] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(38,112,68,0.45), transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      <div className="container-x relative">
        {/* Massive editorial closing statement */}
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
            Your next move
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h2
            className="mt-6 max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Take charge of your career — and let us help you take it to{" "}
            <em className="italic text-sage">the next level</em>.
          </h2>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/jobs"
              className="magnetic inline-flex items-center gap-2 rounded-full bg-page px-8 py-4 text-sm font-medium text-deep transition-transform hover:scale-[1.02]"
            >
              Find Jobs <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="magnetic inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Hire IT talent
            </Link>
          </div>
        </Reveal>

        {/* Newsletter — talent community */}
        <Reveal delay={420}>
          <div className="mt-20 grid items-end gap-8 border-t border-white/10 pt-12 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
                Talent community
              </p>
              <h3
                className="mt-3 text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Join to hear about the latest openings + market trends.
              </h3>
            </div>
            <form
              action={`mailto:${site.email}?subject=Talent%20community%20signup`}
              method="post"
              encType="text/plain"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] p-2 backdrop-blur-md"
            >
              <Mail className="ml-3 h-4 w-4 text-sage" />
              <input
                type="email"
                name="email"
                required
                placeholder="you@work.com"
                className="w-full flex-1 bg-transparent px-2 py-2.5 text-sm text-white placeholder:text-white/55 focus:outline-none"
              />
              <button
                type="submit"
                className="magnetic inline-flex items-center gap-2 rounded-full bg-page px-5 py-2.5 text-sm font-medium text-deep transition-transform hover:scale-[1.02]"
              >
                Send <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
