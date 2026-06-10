"use client";

import { useEffect, useRef, useState } from "react";

const EVENTS = [
  { time: "0h", label: "Brief received", state: "done" as const },
  { time: "4h", label: "Network searched · 47 matches", state: "done" as const },
  { time: "12h", label: "Initial screen · 12 candidates", state: "done" as const },
  { time: "24h", label: "Technical review · 5 shortlisted", state: "done" as const },
  { time: "48h", label: "Shortlist delivered", state: "accent" as const },
  { time: "72h+", label: "Client interviews · placement", state: "pending" as const },
];

export function TimelineMockup() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(0);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(EVENTS.length);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !fired.current) {
            fired.current = true;
            EVENTS.forEach((_, i) => {
              setTimeout(() => setVisible((n) => Math.max(n, i + 1)), 250 + i * 320);
            });
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-sm border border-ink/10 bg-white shadow-[0_30px_80px_-20px_rgba(13,27,42,0.18)]"
    >
      <div className="flex items-center justify-between border-b border-ink/10 bg-ink/[0.025] px-5 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
          Mandate · Avg. Timeline
        </p>
        <p className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
          Typical mandate
        </p>
      </div>
      <div className="space-y-4 p-6 md:p-8">
        {EVENTS.map((e, i) => (
          <div
            key={i}
            className="relative grid grid-cols-[56px_16px_1fr] items-center gap-4"
            style={{
              opacity: i < visible ? 1 : 0,
              transform: i < visible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.55s ease, transform 0.55s ease",
            }}
          >
            <span
              className={`font-mono text-xs ${
                e.state === "accent" ? "text-cyan" : "text-ink/45"
              }`}
            >
              {e.time}
            </span>
            <span
              className={`relative h-3 w-3 rounded-full ${
                e.state === "accent"
                  ? "bg-cyan shadow-[0_0_14px_rgba(0,194,255,0.6)]"
                  : e.state === "done"
                    ? "bg-cyan/55"
                    : "border border-ink/20"
              }`}
            >
              {e.state === "accent" && i < visible && (
                <span className="absolute inset-0 inline-flex h-3 w-3 animate-ping rounded-full bg-cyan/35" />
              )}
            </span>
            <span
              className={`text-sm ${
                e.state === "accent"
                  ? "font-medium text-ink"
                  : e.state === "done"
                    ? "text-ink/80"
                    : "text-ink/35"
              }`}
            >
              {e.label}
            </span>
            {i < EVENTS.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[68px] top-[18px] h-[18px] w-px"
                style={{
                  background: i < visible - 1 ? "rgba(0,194,255,0.35)" : "rgba(13,27,42,0.1)",
                  transition: "background 0.5s ease",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
