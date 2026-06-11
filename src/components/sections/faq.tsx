"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const FAQ_ITEMS = [
  {
    q: "How fast can you deliver a shortlist?",
    a: "Most enterprise IT mandates get a qualified shortlist of 4-6 candidates inside 48 hours. Highly niche or executive search roles may take 5-7 business days — we tell you upfront which bucket your role falls into.",
  },
  {
    q: "Do you place contract or permanent roles?",
    a: "Both. Roughly 60% of our placements are contract or contract-to-hire with consulting firms; 40% are permanent with enterprise IT teams. Many candidates start contract and convert to perm after 6 months.",
  },
  {
    q: "Which industries do you specialise in?",
    a: "We focus on enterprise IT across tier-1 consulting (Deloitte, Capgemini, CGI, Accenture), financial services, insurance, government tech programs, and energy/utilities — primarily across Canada.",
  },
  {
    q: "What's your placement guarantee?",
    a: "Permanent placements come with a 90-day replacement guarantee. Contract placements get full payroll/onboarding support and a 5-business-day replacement window if the fit isn't right.",
  },
  {
    q: "Do you charge candidates?",
    a: "Never. Our recruitment fees come from the hiring company — candidates pay nothing at any stage. What you get from us is honest representation: real rates, real feedback, and a recruiter who knows the role.",
  },
  {
    q: "Can you support roles outside Toronto/Oakville?",
    a: "Yes. We place across Canada — Toronto, Vancouver, Calgary, Montreal, Ottawa. Most senior IT roles are hybrid or remote-first, so location is rarely a blocker.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-border bg-page py-20 text-ink md:py-24">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Left — sticky heading */}
          <Reveal>
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                VII · Frequently asked
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight">
                Questions,{" "}
                <span
                  className="text-cyan"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  answered.
                </span>
              </h2>
              <p className="mt-7 max-w-sm text-base leading-relaxed text-ink-muted">
                Not seeing what you need?{" "}
                <Link
                  href="/contact"
                  className="text-cyan underline-offset-4 hover:underline"
                >
                  Get in touch
                </Link>
                .
              </p>
            </div>
          </Reveal>

          {/* Right — accordion */}
          <div className="divide-y divide-ink/10 border-t border-ink/10">
            {FAQ_ITEMS.map((item, i) => (
              <Reveal key={i} delay={i * 50}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-cyan"
                  >
                    <span
                      className="text-lg font-medium tracking-tight md:text-xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`relative ml-2 inline-flex h-5 w-5 shrink-0 items-center justify-center text-cyan transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
                      aria-hidden
                    >
                      <span className="absolute h-px w-4 bg-current" />
                      <span className="absolute h-4 w-px bg-current" />
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: open === i ? "400px" : "0",
                      opacity: open === i ? 1 : 0,
                      transition:
                        "max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease",
                      overflow: "hidden",
                    }}
                  >
                    <p className="pb-7 pr-10 text-base leading-relaxed text-ink-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
