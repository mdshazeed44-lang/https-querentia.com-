"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "@/components/ui/icons";

const STEPS = [
  { label: "Brief calibrated", state: "done" as const },
  { label: "Initial screen · 12 candidates", state: "done" as const },
  { label: "Technical review · 5 shortlisted", state: "done" as const },
  { label: "Client interviews · in progress", state: "active" as const },
  { label: "Offer & onboarding", state: "pending" as const },
];

export function LiveMandate() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisibleSteps(STEPS.length);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !fired.current) {
            fired.current = true;
            // Play steps in sequence
            STEPS.forEach((_, i) => {
              setTimeout(() => setVisibleSteps((n) => Math.max(n, i + 1)), 350 + i * 280);
            });
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-sm text-left shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] backdrop-blur-sm"
      style={{
        background: "var(--hmockup-bg-grad)",
        border: "1px solid var(--hmockup-border)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-3 px-5 py-3"
        style={{
          borderBottom: "1px solid var(--hmockup-border)",
          background: "var(--hmockup-chrome)",
        }}
      >
        <div className="flex gap-1.5">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: "var(--hmockup-dot)" }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: "var(--hmockup-dot)" }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: "var(--hmockup-dot)" }}
          />
        </div>
        <span
          className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: "var(--hmockup-text-muted)" }}
        >
          querentia · live-mandate
        </span>
        <span
          className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: "var(--haccent)" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
              style={{ background: "var(--haccent)" }}
            />
            <span
              className="relative inline-flex h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--haccent)" }}
            />
          </span>
          Active
        </span>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8">
        <div className="mb-7 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
          <Field label="Role" value="Senior Cloud Architect" />
          <Field label="Stack" value="AWS · Terraform · K8s" />
          <Field label="Client" value="Tier-1 Consulting · Toronto" />
          <Field label="Shortlist due" value="38h" highlight />
        </div>

        <div className="space-y-2.5">
          {STEPS.map((s, i) => (
            <Step
              key={i}
              label={s.label}
              state={s.state}
              visible={i < visibleSteps}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <p
        className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.2em]"
        style={{ color: "var(--hmockup-text-dim)" }}
      >
        {label}
      </p>
      <p
        className="text-sm"
        style={{ color: highlight ? "var(--haccent)" : "var(--hmockup-text)" }}
      >
        {value}
      </p>
    </div>
  );
}

function Step({
  label,
  state,
  visible,
}: {
  label: string;
  state: "done" | "active" | "pending";
  visible: boolean;
}) {
  return (
    <div
      className="flex items-center gap-3"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(6px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {state === "done" ? (
        <span
          className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "color-mix(in srgb, var(--haccent) 22%, transparent)",
            color: "var(--haccent)",
          }}
        >
          <Check className="h-2.5 w-2.5" />
        </span>
      ) : state === "active" ? (
        <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-40"
            style={{ background: "var(--haccent)" }}
          />
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ background: "var(--haccent)" }}
          />
        </span>
      ) : (
        <span
          className="h-4 w-4 shrink-0 rounded-full"
          style={{ border: "1px solid var(--hmockup-step-pending)" }}
        />
      )}
      <span
        className="text-sm"
        style={{
          color:
            state === "done"
              ? "var(--hmockup-step-done)"
              : state === "active"
                ? "var(--hmockup-text)"
                : "var(--hmockup-step-pending)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
