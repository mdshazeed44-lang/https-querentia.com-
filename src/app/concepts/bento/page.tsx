import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Briefcase, MapPin, Star, Bolt, Search, Shield } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Concept · Bento Quantum",
  description: "Asymmetric bento-grid homepage direction for Querentia.",
  robots: { index: false, follow: false },
};

export default function BentoConcept() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background:
          "radial-gradient(60% 60% at 20% 0%, rgba(124,58,237,0.35), transparent 70%), radial-gradient(50% 50% at 80% 30%, rgba(34,211,238,0.25), transparent 70%), #050816",
      }}
    >
      {/* Internal sticky bar */}
      <ConceptBar name="Bento Quantum" id="01" />

      <div className="container-x relative pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-violet-300" />
            Concept 01 · Bento Quantum
          </span>
        </div>

        {/* Bento Grid Hero */}
        <div className="mt-8 grid auto-rows-[7.5rem] grid-cols-1 gap-3 sm:auto-rows-[8rem] sm:grid-cols-4 sm:gap-4 lg:grid-cols-6 lg:gap-5">
          {/* Big headline cell */}
          <article className="sm:col-span-4 sm:row-span-2 lg:col-span-4 lg:row-span-3 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md md:p-12">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(167,139,250,0.55), transparent 70%)" }}
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-300">
              Toronto · Since 2014
            </p>
            <h1
              className="mt-6 text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl xl:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We don&apos;t fill
              <br />
              vacancies. We
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(95deg, #a78bfa, #22d3ee)" }}
              >
                build benches.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base text-white/65">
              Specialist IT recruitment for Canada&apos;s enterprises — cloud,
              data, security, engineering. Sourcing depth, not posting density.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(167,139,250,0.6)] transition-transform hover:scale-[1.02]"
              >
                Open roles <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                Hire talent
              </Link>
            </div>
          </article>

          {/* 168 live roles */}
          <article className="sm:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/40 to-cyan-500/20 p-6">
            <p className="text-xs uppercase tracking-wider text-white/70">Live now</p>
            <p
              className="mt-2 text-5xl font-bold tracking-tight md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              168<span className="text-violet-300">+</span>
            </p>
            <p className="mt-1 text-sm text-white/75">open IT roles in Canada</p>
            <Link
              href="/jobs"
              className="absolute bottom-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-violet-700 transition-transform hover:scale-110"
            >
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          {/* 94% retention */}
          <article className="sm:col-span-2 lg:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
            <Star className="h-5 w-5 text-violet-300" />
            <p
              className="mt-3 text-4xl font-bold tracking-tight md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              94%
            </p>
            <p className="text-xs text-white/60">placement retention</p>
          </article>

          {/* AI-crawlable badge */}
          <article className="sm:col-span-2 lg:col-span-2 relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-500/[0.08] p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
              AI-discoverable
            </p>
            <p
              className="mt-3 text-lg font-semibold leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Cited by ChatGPT, Perplexity & Gemini for Canadian IT staffing.
            </p>
            <div className="mt-3 flex gap-1.5">
              {["GPTBot", "ClaudeBot", "Perplexity"].map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/80"
                >
                  ✓ {b}
                </span>
              ))}
            </div>
          </article>

          {/* Job card sample */}
          <article className="sm:col-span-2 lg:col-span-3 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/55">Featured role</p>
            <div className="mt-2 flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400">
                <Briefcase className="h-5 w-5 text-white" />
              </span>
              <div className="min-w-0">
                <h3 className="font-bold text-white">Senior Cloud Architect</h3>
                <p className="text-xs text-white/60">Enterprise Banking · Toronto</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <div className="flex gap-1.5">
                {["AWS", "K8s", "Terraform"].map((s) => (
                  <span key={s} className="rounded-full bg-white/10 px-2 py-0.5 text-white/85">{s}</span>
                ))}
              </div>
              <span className="font-bold text-violet-300">$165K</span>
            </div>
          </article>

          {/* Search */}
          <article className="sm:col-span-2 lg:col-span-3 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 px-1">
              <Search className="h-4 w-4 text-white/60" />
              <input
                placeholder="Search 168+ live roles…"
                className="w-full bg-transparent py-2 text-sm text-white placeholder:text-white/45 focus:outline-none"
              />
              <button className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-violet-700 hover:scale-[1.05] transition-transform">
                Find
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-white/55">
              {["Cloud Architect", "Data Engineer", "Cyber Analyst", "SAP S/4", "DevOps"].map((s) => (
                <span key={s} className="rounded-full border border-white/15 px-2 py-0.5">{s}</span>
              ))}
            </div>
          </article>

          {/* Clients */}
          <article className="sm:col-span-4 lg:col-span-4 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">Trusted by</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
              {["Deloitte", "Capgemini", "CGI", "Accenture", "TCS"].map((c) => (
                <span
                  key={c}
                  className="text-lg font-bold text-white/60 transition-colors hover:text-white md:text-xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c}
                </span>
              ))}
            </div>
          </article>

          {/* Shield trust */}
          <article className="sm:col-span-2 lg:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/30 to-violet-500/10 p-5">
            <Shield className="h-5 w-5 text-white" />
            <p className="mt-3 text-sm font-semibold text-white">
              Enterprise compliance &amp; onboarding from day one.
            </p>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md md:flex-row md:p-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">Bolt fast</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
              48-hour qualified shortlists.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-violet-700 transition-transform hover:scale-[1.02]"
          >
            Request talent <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ConceptBar({ name, id }: { name: string; id: string }) {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="container-x flex items-center justify-between py-3 text-xs text-white/80">
        <Link href="/concepts" className="inline-flex items-center gap-2 hover:text-white">
          ← All concepts
        </Link>
        <span className="font-semibold">
          Concept {id} · <span className="text-white">{name}</span>
        </span>
        <Link href="/" className="text-white/60 hover:text-white">
          Current homepage →
        </Link>
      </div>
    </div>
  );
}
