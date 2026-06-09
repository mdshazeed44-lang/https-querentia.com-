import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Concept · Cinematic Aurora",
  description: "Massive editorial type, immersive aurora background.",
  robots: { index: false, follow: false },
};

export default function CinematicConcept() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#06070d] text-white">
      {/* Internal nav */}
      <ConceptBar />

      {/* Multi-layer aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-[20%] -top-[10%] h-[80vh] w-[80vh] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.55), transparent 70%)", animation: "float-slow 14s ease-in-out infinite" }}
        />
        <div
          className="absolute right-0 top-[30%] h-[60vh] w-[60vh] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.45), transparent 70%)", animation: "drift 16s ease-in-out infinite" }}
        />
        <div
          className="absolute left-[20%] bottom-0 h-[55vh] w-[55vh] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(circle, rgba(244,114,182,0.35), transparent 70%)", animation: "float-slow 18s ease-in-out infinite" }}
        />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      {/* Hero — full viewport, massive single statement */}
      <section className="relative flex min-h-[calc(100dvh-2.75rem)] items-center justify-center px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/55">
            Querentia · Toronto · Est. 2014
          </p>

          <h1
            className="mt-8 text-[clamp(3rem,11vw,12rem)] font-bold leading-[0.88] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block">Talent,</span>
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(95deg, #f0abfc 0%, #c4b5fd 25%, #93c5fd 50%, #67e8f9 75%, #fda4af 100%)",
                backgroundSize: "200% 100%",
                animation: "gradient-shift 8s ease-in-out infinite",
              }}
            >
              redefined.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base text-white/65 md:text-lg">
            The IT recruitment partner Canada&apos;s leading enterprises trust
            to build their most ambitious technology teams.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/jobs"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#06070d] transition-transform hover:scale-[1.03]"
            >
              See open roles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md hover:bg-white/10"
            >
              Hire IT talent
            </Link>
          </div>

          {/* Scroll cue */}
          <div className="mt-16 flex justify-center">
            <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/50">
              <span>Scroll</span>
              <span className="h-10 w-px animate-pulse bg-white/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="relative border-t border-white/10 py-10">
        <div className="container-x">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-white/40">
            Trusted by Canada&apos;s leading enterprises
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {["Deloitte", "Capgemini", "CGI", "Accenture", "TCS"].map((c) => (
              <span
                key={c}
                className="text-2xl font-semibold tracking-tight text-white/55 transition-colors hover:text-white md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — minimal split row */}
      <section className="relative border-t border-white/10 py-20">
        <div className="container-x grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {[
            { v: "10+", l: "years placing IT talent" },
            { v: "168+", l: "live enterprise roles" },
            { v: "48h", l: "qualified shortlists" },
            { v: "94%", l: "placement retention" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p
                className="text-5xl font-bold tracking-tight md:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.v}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/55">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Big closing statement */}
      <section className="relative border-t border-white/10 py-32">
        <div className="container-x mx-auto max-w-4xl text-center">
          <h2
            className="text-[clamp(2rem,6vw,5rem)] font-bold leading-[1] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Move at the pace of
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(95deg, #f0abfc, #67e8f9)" }}
            >
              the business.
            </span>
          </h2>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#06070d] transition-transform hover:scale-[1.03]"
            >
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ConceptBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="container-x flex items-center justify-between py-3 text-xs text-white/80">
        <Link href="/concepts" className="hover:text-white">← All concepts</Link>
        <span className="font-semibold">Concept 02 · <span className="text-white">Cinematic Aurora</span></span>
        <Link href="/" className="text-white/60 hover:text-white">Current homepage →</Link>
      </div>
    </div>
  );
}
