"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import {
  Cloud,
  Code,
  Layers,
  Briefcase,
  Shield,
  ArrowRight,
} from "@/components/ui/icons";

// 30 disciplines grouped into 5 practice areas — interactive vertical tabs
const CATEGORIES = [
  {
    code: "01",
    title: "Cloud, Data & AI",
    blurb: "Platform, pipeline and intelligence talent for data-driven programs.",
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
    ],
  },
  {
    code: "02",
    title: "Engineering & Product",
    blurb: "Builders who ship — from full-stack squads to product design.",
    Icon: Code,
    items: [
      "Full Stack Development",
      "Web Development",
      "Testing Automation",
      "UI / UX Design",
      "Application Integration",
      "Pega",
    ],
  },
  {
    code: "03",
    title: "Enterprise Platforms",
    blurb: "The systems your business actually runs on, staffed properly.",
    Icon: Layers,
    items: [
      "ERP",
      "Enterprise Architecture",
      "Guidewire",
      "Energy & Utilities",
      "Supply Chain & Procurement",
    ],
  },
  {
    code: "04",
    title: "Strategy & Delivery",
    blurb: "Leaders who keep regulated, multi-squad programs on schedule.",
    Icon: Briefcase,
    items: [
      "Project Management",
      "Program Management",
      "Business Analysis",
      "Agile Delivery",
      "Org Change Management",
    ],
  },
  {
    code: "05",
    title: "Security, Risk & Business",
    blurb: "Defence, governance and the business functions that back them.",
    Icon: Shield,
    items: [
      "Cyber Security",
      "Risk & Internal Audit",
      "Financial Advisory",
      "Taxation",
      "Human Resources",
      "Digital Marketing",
    ],
  },
];

export function Industries() {
  const totalCount = CATEGORIES.reduce((sum, c) => sum + c.items.length, 0);
  const [active, setActive] = useState(0);
  const cat = CATEGORIES[active];

  return (
    <section className="relative isolate overflow-hidden border-t border-border bg-page pt-20 pb-14 text-ink md:pt-24 md:pb-16">
      {/* chip stagger-in animation (panel remounts on tab change) */}
      <style>{`
        @keyframes ind-chip-in { from { opacity: 0; transform: translateY(10px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .ind-chip { opacity: 0; animation: ind-chip-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards; }
        @media (prefers-reduced-motion: reduce) { .ind-chip { opacity: 1; animation: none; } }
      `}</style>

      {/* Soft ambient accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-cyan/[0.04] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan/[0.14] blur-3xl"
      />

      <div className="container-x relative">
        {/* Header */}
        <Reveal>
          <div className="mb-14 max-w-4xl md:mb-16">
            <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="inline-block h-px w-8 bg-cyan/60" />
              VI · Our expertise · {totalCount} disciplines · 5 practices
            </p>
            <h2 className="mt-6 text-[clamp(2.25rem,5.5vw,4.25rem)] font-medium leading-[0.98] tracking-tight">
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
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              {`Five deep practices. ${totalCount} specialised disciplines. Built over a decade placing senior IT talent into Canada's largest consulting and enterprise programs.`}
            </p>
          </div>
        </Reveal>

        {/* Interactive vertical tabs */}
        <Reveal delay={150}>
          <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:gap-10">
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
                    className={`group flex cursor-pointer items-center gap-4 rounded-xl px-5 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
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
                  </button>
                );
              })}
            </div>

            {/* active panel — chips stagger in on change (key remount) */}
            <div
              key={active}
              role="tabpanel"
              className="rounded-2xl border border-border bg-card p-8 shadow-[0_24px_60px_-32px_rgba(13,27,42,0.18)]"
            >
              <div className="flex items-center gap-4">
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
              <div className="mt-7 flex flex-wrap gap-2.5">
                {cat.items.map((t, i) => (
                  <span
                    key={t}
                    className="ind-chip inline-flex items-center gap-2 rounded-full border border-border bg-page px-4 py-2 text-sm font-medium text-ink transition-colors duration-300 hover:border-cyan hover:bg-cyan/[0.06]"
                    style={{ animationDelay: `${i * 55}ms` }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Footnote band */}
        <Reveal delay={350}>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-ink-muted md:text-base">
              Don&apos;t see your stack?{" "}
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
