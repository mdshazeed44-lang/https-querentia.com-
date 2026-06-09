import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Concept · Editorial Swiss",
  description: "Brutalist editorial direction — confident, distinctive.",
  robots: { index: false, follow: false },
};

export default function EditorialConcept() {
  return (
    <div className="min-h-screen bg-[#f4f3ef] text-[#0a0a0a]">
      <ConceptBar />

      {/* Hero — newspaper feel */}
      <section className="border-b-2 border-[#0a0a0a]">
        <div className="container-x py-16 md:py-24">
          {/* Top row — date + section */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0a0a0a] pb-3 text-xs uppercase tracking-widest">
            <span className="font-bold">Querentia · Issue №1</span>
            <span>Toronto, ON · Est. 2014</span>
            <span className="font-mono">VOL. 01 / 2026</span>
          </div>

          {/* Massive headline grid */}
          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="font-mono text-xs uppercase tracking-widest text-[#0a0a0a]/55">
                01 — Specialist IT Recruitment
              </p>
              <h1
                className="mt-4 text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.86] tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Hiring,<br />
                <em className="not-italic" style={{ color: "#dc2626" }}>seriously.</em>
              </h1>
            </div>
            <div className="md:col-span-4 md:border-l md:border-[#0a0a0a] md:pl-8">
              <p className="font-mono text-xs uppercase tracking-widest text-[#0a0a0a]/55">
                The brief
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#0a0a0a]/85 md:text-base">
                We&apos;re a Toronto-based IT recruitment firm placing
                <strong> elite technology talent</strong> with Canada&apos;s
                leading enterprises &mdash; cloud, data, security, engineering.
                No resume floods. No black-holed candidates. Just precision.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 bg-[#0a0a0a] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#f4f3ef] hover:bg-[#dc2626]"
                >
                  Open roles <ArrowRight className="h-3 w-3" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-[#0a0a0a] px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#0a0a0a] hover:text-[#f4f3ef]"
                >
                  Hire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By-the-numbers — giant mono stats */}
      <section className="border-b-2 border-[#0a0a0a]">
        <div className="container-x py-16 md:py-20">
          <div className="flex items-center justify-between border-b border-[#0a0a0a] pb-3 text-xs uppercase tracking-widest">
            <span className="font-bold">02 — By the numbers</span>
            <span className="text-[#0a0a0a]/55">As of {new Date().getFullYear()}</span>
          </div>
          <div className="mt-10 grid gap-y-12 md:grid-cols-4">
            {[
              { v: "10+", l: "Years placing IT talent", sub: "Since 2014" },
              { v: "168+", l: "Live enterprise roles", sub: "Updated hourly" },
              { v: "48h", l: "Avg. shortlist turnaround", sub: "Qualified candidates" },
              { v: "94%", l: "Placement retention", sub: "Year over year" },
            ].map((s, i) => (
              <div key={s.l} className={`px-2 ${i > 0 ? "md:border-l md:border-[#0a0a0a]/20 md:pl-8" : ""}`}>
                <p
                  className="font-mono text-6xl font-bold leading-none tracking-tight md:text-7xl"
                  style={{ color: i === 1 ? "#dc2626" : "#0a0a0a" }}
                >
                  {s.v}
                </p>
                <p className="mt-3 text-sm font-bold uppercase tracking-wider">{s.l}</p>
                <p className="mt-1 text-xs text-[#0a0a0a]/55">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="border-b-2 border-[#0a0a0a]">
        <div className="container-x py-12">
          <div className="flex items-center justify-between border-b border-[#0a0a0a] pb-3 text-xs uppercase tracking-widest">
            <span className="font-bold">03 — Clients</span>
            <span className="text-[#0a0a0a]/55">Enterprises we&apos;ve staffed for</span>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4">
            {["Deloitte", "Capgemini", "CGI", "Accenture", "TCS"].map((c) => (
              <span
                key={c}
                className="text-3xl font-bold tracking-tight md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto rows */}
      <section className="border-b-2 border-[#0a0a0a]">
        <div className="container-x py-16 md:py-20">
          <div className="flex items-center justify-between border-b border-[#0a0a0a] pb-3 text-xs uppercase tracking-widest">
            <span className="font-bold">04 — The way we work</span>
          </div>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            {[
              { n: "i.", t: "Trust first.", d: "Honest feedback for candidates. Real conversation for clients. No recruiter games." },
              { n: "ii.", t: "Precision over volume.", d: "Shortlists, not resume floods. Quality is faster than quantity, every time." },
              { n: "iii.", t: "Long-term outcomes.", d: "94% retention isn't an accident. We optimize for the next 3 years, not the next hire." },
            ].map((m) => (
              <div key={m.n}>
                <p className="font-mono text-sm font-bold text-[#dc2626]">{m.n}</p>
                <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                  {m.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0a0a0a]/75">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — big bold sentence */}
      <section className="bg-[#0a0a0a] text-[#f4f3ef]">
        <div className="container-x py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-[#f4f3ef]/55">
            05 — Get in touch
          </p>
          <h2
            className="mt-4 text-[clamp(2rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s build the
            <br />
            <em className="not-italic" style={{ color: "#dc2626" }}>right</em> team.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#dc2626] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#b91c1c]"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 border border-[#f4f3ef]/30 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-[#f4f3ef] hover:bg-[#f4f3ef]/10"
            >
              See open roles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ConceptBar() {
  return (
    <div className="sticky top-0 z-50 border-b-2 border-[#0a0a0a] bg-[#f4f3ef]">
      <div className="container-x flex items-center justify-between py-3 text-xs uppercase tracking-widest text-[#0a0a0a]">
        <Link href="/concepts" className="font-bold hover:underline">← All concepts</Link>
        <span className="font-bold">Concept 03 — Editorial Swiss</span>
        <Link href="/" className="font-bold hover:underline">Current homepage →</Link>
      </div>
    </div>
  );
}
