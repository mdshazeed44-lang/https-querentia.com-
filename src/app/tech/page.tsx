import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Check, X, ArrowRight, Bolt, Shield, Code, Globe, Sparkles } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Tech Stack & Performance",
  description:
    "Querentia is built on Next.js + React + TypeScript. Static-rendered, AI-crawlable, fast. No WordPress.",
  robots: { index: false, follow: false },
};

const stack = [
  { name: "Framework", value: "Next.js 16 (App Router, Turbopack)" },
  { name: "Runtime", value: "React 19" },
  { name: "Language", value: "TypeScript" },
  { name: "Styling", value: "Tailwind CSS v4" },
  { name: "Rendering", value: "Static Site Generation (SSG)" },
  { name: "Hosting target", value: "Vercel / Edge / InMotion VPS" },
  { name: "Job data source", value: "Ceipal REST API (server-side, cached)" },
];

const comparisons = [
  { label: "WordPress", here: false, them: true },
  { label: "Elementor / page-builder", here: false, them: true },
  { label: "Custom React + TypeScript", here: true, them: false },
  { label: "Static pre-rendered HTML", here: true, them: false },
  { label: "Per-job indexable URL + JSON-LD schema", here: true, them: false },
  { label: "AI bots allow-listed (GPTBot, ClaudeBot, PerplexityBot)", here: true, them: false },
  { label: "Bloated theme assets", here: false, them: true },
  { label: "Build-time optimization (next/image, next/font)", here: true, them: false },
];

export default function TechPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="container-x flex items-center justify-between py-3 text-xs text-white/80">
          <Link href="/" className="hover:text-white">← Querentia home</Link>
          <span className="font-semibold">Internal · Stack proof</span>
          <a
            href="https://github.com/mdshazeed44-lang/https-querentia.com-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white"
          >
            GitHub repo ↗
          </a>
        </div>
      </div>

      <div className="container-x pt-20 pb-24 md:pt-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/85">
            <Sparkles className="h-3.5 w-3.5 text-sky-300" />
            Internal review · Tech credibility
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            This is not <span className="text-sky-300">WordPress</span>.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            Every page on Querentia.com is custom React, written from scratch.
            No CMS, no Elementor, no theme files. Here&apos;s the proof and the
            performance fundamentals — open the repo to verify any of it.
          </p>
        </Reveal>

        {/* Stack table */}
        <Reveal delay={300}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            <div className="border-b border-white/10 px-6 py-4 md:px-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
                The stack
              </p>
            </div>
            <dl className="divide-y divide-white/10">
              {stack.map((row) => (
                <div key={row.name} className="grid grid-cols-1 gap-2 px-6 py-4 md:grid-cols-[14rem_1fr] md:items-center md:px-8">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white/55">{row.name}</dt>
                  <dd className="text-sm font-medium text-white md:text-base">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* This vs WordPress */}
        <Reveal delay={400}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            <div className="grid grid-cols-[1fr_4.5rem_4.5rem] items-center gap-3 border-b border-white/10 px-6 py-4 md:px-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
                What you&apos;re getting vs. a typical WP site
              </p>
              <span className="text-center text-[10px] font-bold uppercase tracking-wider text-emerald-300">Querentia</span>
              <span className="text-center text-[10px] font-bold uppercase tracking-wider text-rose-300">WP build</span>
            </div>
            <ul className="divide-y divide-white/10">
              {comparisons.map((row) => (
                <li key={row.label} className="grid grid-cols-[1fr_4.5rem_4.5rem] items-center gap-3 px-6 py-3 text-sm md:px-8">
                  <span className="text-white/85">{row.label}</span>
                  <span className="flex justify-center">
                    {row.here ? (
                      <Check className="h-5 w-5 text-emerald-300" />
                    ) : (
                      <X className="h-5 w-5 text-rose-300" />
                    )}
                  </span>
                  <span className="flex justify-center">
                    {row.them ? (
                      <Check className="h-5 w-5 text-rose-300" />
                    ) : (
                      <X className="h-5 w-5 text-emerald-300" />
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Highlights — 3 cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Bolt,
              title: "Fast by default",
              desc: "All pages static-pre-rendered at build time. First paint typically under 1.5s on cold cache. Page-load commitment 2–3 s easily exceeded.",
            },
            {
              icon: Globe,
              title: "AI-discoverable",
              desc: "robots.txt explicitly welcomes GPTBot, ClaudeBot, PerplexityBot, Google-Extended. Every page emits JSON-LD (Organization, JobPosting, AboutPage, ContactPage).",
            },
            {
              icon: Code,
              title: "Indexable job board",
              desc: "Each Ceipal role gets its own URL + JobPosting schema. Replaces the legacy iframe that hid 168+ jobs from Google. SEO-recoverable from day one.",
            },
          ].map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal key={h.title} delay={500 + i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{h.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Verification links */}
        <Reveal delay={700}>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-sky-400/30 hover:bg-white/[0.07]"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Verify</p>
                <p className="mt-1 text-sm font-semibold text-white">/robots.txt — AI bots allowed</p>
                <p className="mt-1 text-xs text-white/55">GPTBot · ClaudeBot · PerplexityBot · Google-Extended</p>
              </div>
              <ArrowRight className="h-4 w-4 text-white/55 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-sky-400/30 hover:bg-white/[0.07]"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Verify</p>
                <p className="mt-1 text-sm font-semibold text-white">/sitemap.xml — every job has a URL</p>
                <p className="mt-1 text-xs text-white/55">10+ indexable role pages, refreshed daily</p>
              </div>
              <ArrowRight className="h-4 w-4 text-white/55 transition-transform group-hover:translate-x-0.5" />
            </a>

            <Link
              href="/jobs/senior-cloud-architect-toronto"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-sky-400/30 hover:bg-white/[0.07]"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Sample indexable role</p>
                <p className="mt-1 text-sm font-semibold text-white">/jobs/senior-cloud-architect-toronto</p>
                <p className="mt-1 text-xs text-white/55">View-source → see JobPosting JSON-LD schema</p>
              </div>
              <ArrowRight className="h-4 w-4 text-white/55 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <a
              href="https://github.com/mdshazeed44-lang/https-querentia.com-"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-sky-400/30 hover:bg-white/[0.07]"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Open the source</p>
                <p className="mt-1 text-sm font-semibold text-white">GitHub repo — every file, every commit</p>
                <p className="mt-1 text-xs text-white/55">Look in package.json for the proof</p>
              </div>
              <ArrowRight className="h-4 w-4 text-white/55 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={800}>
          <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/20 to-violet-500/10 p-8 text-center md:p-12">
            <Shield className="mx-auto h-8 w-8 text-sky-300" />
            <h2 className="mx-auto mt-4 max-w-xl text-2xl font-bold tracking-tight md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              The structure is correct.<br />The direction is up for grabs.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/75 md:text-base">
              Tech foundations are solid and decoupled from look-and-feel.
              Whichever design direction you pick, the SEO, indexability, and
              performance stay intact.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/concepts"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0a0c] transition-transform hover:scale-[1.02]"
              >
                See the 3 design directions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
