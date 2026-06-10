"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "@/components/ui/icons";

export function TalentCommunity() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden border-t border-border bg-page py-20 text-ink md:py-24">
      {/* Soft cyan ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,194,255,0.16) 0%, transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-6 inline-flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="inline-block h-px w-8 bg-cyan/60" />
              VIII · Talent community
              <span className="inline-block h-px w-8 bg-cyan/60" />
            </p>
          </Reveal>
          <Reveal delay={130}>
            <h2 className="mb-8 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight">
              The roles you won&apos;t see on{" "}
              <span
                className="text-cyan"
                style={{ fontFamily: "var(--font-display)" }}
              >
                any job board.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={250}>
            <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
              Join our weekly brief. New senior IT mandates, confidential
              tier-1 roles, and market intelligence — curated with precision,
              sent every Monday.
            </p>
          </Reveal>
          <Reveal delay={380}>
            {submitted ? (
              <p className="inline-flex items-center gap-2 text-base text-cyan">
                <span aria-hidden>✓</span>
                You&apos;re in. Check your inbox for confirmation.
              </p>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mx-auto flex max-w-md items-stretch overflow-hidden border border-ink/20 bg-card transition-colors focus-within:border-ink/60"
              >
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-5 py-4 text-sm text-ink placeholder:text-ink/35 focus:outline-none"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 bg-green px-6 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-green-700"
                >
                  Join
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </Reveal>
          <Reveal delay={500}>
            <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
              Weekly · No spam · Unsubscribe anytime
            </p>
          </Reveal>
          <Reveal delay={600}>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">
              Where our network works
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              {[
                "AWS",
                "Microsoft Azure",
                "Google Cloud",
                "Salesforce",
                "SAP",
                "ServiceNow",
                "Snowflake",
                "Databricks",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink/15 bg-card px-4 py-1.5 text-xs font-medium text-ink/70 transition-colors hover:border-cyan hover:text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
