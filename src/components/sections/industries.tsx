"use client";

import { useState, useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import {
  Cloud,
  Code,
  Layers,
  Briefcase,
  Shield,
  Network,
  Coins,
  ArrowRight,
} from "@/components/ui/icons";

// 42 disciplines grouped into 7 practice areas — interactive vertical tabs
const CATEGORIES = [
  {
    code: "01",
    title: "Cloud, Data & AI",
    blurb: "Talent that powers intelligent, cloud-first, data-driven enterprises.",
    Icon: Cloud,
    items: [
      "Cloud Technologies",
      "DevOps",
      "Data Engineering",
      "Data Analytics",
      "Data Science",
      "Data Warehousing",
      "SAS",
      "Blockchain",
      "AI & Machine Learning",
      "Platform Engineering",
    ],
  },
  {
    code: "02",
    title: "Engineering & Product",
    blurb: "High-caliber engineering talent that builds modern, resilient digital products.",
    Icon: Code,
    items: [
      "Full Stack Development",
      "Web Development",
      "Testing Automation",
      "UI / UX Design",
      "Application Integration",
      "Mobile Engineering",
      "Quality Assurance",
    ],
  },
  {
    code: "03",
    title: "Enterprise Platforms",
    blurb: "Specialists who deliver complex enterprise transformations with precision.",
    Icon: Layers,
    items: [
      "Enterprise Architecture",
      "Pega",
      "ServiceNow",
      "Salesforce",
      "SAP",
      "Microsoft Dynamics 365",
    ],
  },
  {
    code: "04",
    title: "Strategy & Delivery",
    blurb: "Leaders who drive clarity, alignment, and successful delivery across the enterprise.",
    Icon: Briefcase,
    items: [
      "Project Management",
      "Program Management",
      "Business Analysis",
      "Agile Delivery",
      "Org Change Management",
      "Agile Coaches",
    ],
  },
  {
    code: "05",
    title: "Security, Risk & Business",
    blurb: "Talent that protects your business and strengthens resilience.",
    Icon: Shield,
    items: [
      "Cyber Security",
      "Governance, Risk & Compliance (GRC)",
      "Identity & Access Management (IAM)",
      "Business Continuity & Resilience",
    ],
  },
  {
    code: "06",
    title: "Infrastructure, Networking & IT Operations",
    blurb: "Talent that keeps your technology resilient, secure, and running at scale.",
    Icon: Network,
    items: [
      "Network Engineering & Architecture",
      "Systems Engineering (Windows, Linux)",
      "Cloud & On-Prem Infrastructure",
      "IT Support & Service Desk",
      "ITSM & Operations",
    ],
  },
  {
    code: "07",
    title: "Business, Finance, Risk",
    blurb: "Talent that strengthens financial integrity and drives confident decision-making.",
    Icon: Coins,
    items: [
      "Risk & Internal Audit",
      "Financial Advisory",
      "Taxation",
      "Compliance & Regulatory",
    ],
  },
];

export function Industries() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cat = CATEGORIES[active];

  // Start the auto-advance only while the section is on screen, and respect
  // users who prefer reduced motion.
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance every 4s while the section is on screen; pause on hover and
  // when the user prefers reduced motion. Resets on any active change.
  useEffect(() => {
    if (paused || reduced || !inView) return;
    const id = window.setTimeout(
      () => setActive((a) => (a + 1) % CATEGORIES.length),
      4000,
    );
    return () => window.clearTimeout(id);
  }, [active, paused, reduced, inView]);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden border-t border-border bg-page pt-20 pb-14 text-ink md:pt-24 md:pb-16">
      {/* chip stagger-in animation (panel remounts on tab change) */}
      <style>{`
        @keyframes ind-chip-in { from { opacity: 0; transform: translateY(10px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .ind-chip { opacity: 0; animation: ind-chip-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards; }
        @keyframes ind-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .ind-progress { animation: ind-progress 4s linear forwards; }
        @keyframes ind-fade-up { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .ind-fade { opacity: 0; animation: ind-fade-up 0.5s cubic-bezier(0.16,1,0.3,1) forwards; }
        @keyframes ind-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-22px); } }
        .ind-glow-a { animation: ind-float 13s ease-in-out infinite; }
        .ind-glow-b { animation: ind-float 17s ease-in-out infinite reverse; }
        @media (prefers-reduced-motion: reduce) {
          .ind-chip, .ind-fade { opacity: 1; animation: none; }
          .ind-glow-a, .ind-glow-b { animation: none; }
        }
      `}</style>

      {/* Soft ambient accents (gently floating) */}
      <div
        aria-hidden
        className="ind-glow-a pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-cyan/[0.04] blur-3xl"
      />
      <div
        aria-hidden
        className="ind-glow-b pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan/[0.14] blur-3xl"
      />

      <div className="container-x relative">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <Reveal>
            <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="inline-block h-px w-8 bg-cyan/60" />
              Our expertise
            </p>
          </Reveal>
          <div className="mt-6 flex flex-col gap-7 md:mt-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <Reveal>
              <h2 className="max-w-3xl text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[0.98] tracking-tight">
                Across every discipline
                <br className="hidden md:block" />{" "}
                you{" "}
                <span
                  className="text-cyan"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  actually
                </span>{" "}
                build on.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="max-w-sm text-[clamp(1.05rem,1.7vw,1.4rem)] font-medium leading-snug tracking-tight text-ink lg:pb-1">
                Seven practices. Forty-two disciplines.{" "}
                <span className="text-cyan">One partner you can trust.</span>
              </p>
            </Reveal>
          </div>
        </div>

        {/* Interactive vertical tabs */}
        <Reveal delay={150}>
          <div
            className="grid gap-8 lg:grid-cols-[360px_1fr] lg:gap-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* tab rail */}
            <div role="tablist" aria-label="Practice areas" className="flex flex-col gap-1">
              {CATEGORIES.map((c, i) => {
                const isOn = i === active;
                return (
                  <button
                    key={c.code}
                    role="tab"
                    aria-selected={isOn}
                    onClick={() => setActive(i)}
                    className={`group relative flex cursor-pointer items-center gap-3 rounded-xl px-4 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan sm:gap-4 sm:px-5 ${
                      isOn
                        ? "bg-deep-2 text-on-deep shadow-lg"
                        : "text-ink-muted hover:bg-card hover:text-ink"
                    }`}
                  >
                    <span
                      className={`font-mono text-sm font-semibold ${
                        isOn ? "text-cyan" : "text-ink-faint group-hover:text-cyan"
                      }`}
                    >
                      {c.code}
                    </span>
                    <span
                      className="flex-1 text-base font-medium"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {c.title}
                    </span>
                    <span
                      className={`font-mono text-[11px] tracking-wider ${
                        isOn ? "text-on-deep-muted" : "text-ink-faint"
                      }`}
                    >
                      {String(c.items.length).padStart(2, "0")}
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 transition-all duration-300 ${
                        isOn
                          ? "translate-x-0 text-cyan opacity-100"
                          : "-translate-x-1 opacity-0"
                      }`}
                    />
                    {isOn && !reduced && (
                      <span
                        key={active}
                        aria-hidden
                        className="ind-progress pointer-events-none absolute bottom-1.5 left-5 right-5 h-[3px] origin-left rounded-full bg-cyan/70"
                        style={{
                          animationPlayState:
                            inView && !paused ? "running" : "paused",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* active panel — content fades + chips stagger in on change (key remount) */}
            <div
              key={active}
              role="tabpanel"
              className="relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_24px_60px_-32px_rgba(13,27,42,0.18)] sm:p-8"
            >
              {/* faded category watermark fills the empty space */}
              <cat.Icon
                aria-hidden
                className="ind-fade pointer-events-none absolute -bottom-9 -right-9 h-48 w-48 text-cyan/[0.05]"
                style={{ animationDelay: "120ms" }}
              />

              <div className="ind-fade relative flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-deep-2 text-cyan">
                  <cat.Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3
                    className="text-2xl text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cat.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-muted">{cat.blurb}</p>
                </div>
              </div>

              <div className="relative mt-7 flex flex-1 flex-wrap content-start gap-2.5">
                {cat.items.map((t, i) => (
                  <span
                    key={t}
                    className="ind-chip inline-flex items-center gap-2 rounded-full border border-border bg-page px-4 py-2 text-sm font-medium text-ink transition-colors duration-300 hover:-translate-y-0.5 hover:border-cyan hover:bg-cyan/[0.06]"
                    style={{ animationDelay: `${i * 55}ms` }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden />
                    {t}
                  </span>
                ))}
              </div>

              {/* bottom bar — count + contextual CTA fill the panel base */}
              <div className="relative mt-7 flex items-center justify-between gap-4 border-t border-border pt-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                  {String(cat.items.length).padStart(2, "0")} specialised disciplines
                </span>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-cyan transition-colors hover:text-ink"
                >
                  Hire for this practice
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Footnote band */}
        <Reveal delay={350}>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-ink-muted md:text-base">
              Don&apos;t see your discipline?{" "}
              <span className="text-ink">We&apos;ve probably placed it.</span>
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-cyan transition-colors hover:text-ink"
            >
              Tell us what you&apos;re hiring for
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
