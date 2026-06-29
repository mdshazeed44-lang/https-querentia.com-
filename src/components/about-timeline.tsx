"use client";

import { useEffect, useRef, useState } from "react";

type Milestone = { year: string; title: string; body: string };

/**
 * Scroll-driven "Our Story" timeline.
 * A cyan beam fills the vertical track as you scroll; each milestone node
 * lights up (hollow → filled + glow + ping) the moment the beam reaches it,
 * and its content eases into focus. Monotonic — once revealed it stays lit.
 * Fully static under prefers-reduced-motion.
 */
export function AboutTimeline({
  milestones,
  headingFont,
}: {
  milestones: Milestone[];
  headingFont: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [maxActive, setMaxActive] = useState(-1);
  const [beamH, setBeamH] = useState(0);

  // beam height = vertical centre of the furthest-reached node (minus track inset)
  useEffect(() => {
    const measure = () => {
      const wrap = wrapRef.current;
      const node = nodeRefs.current[maxActive];
      if (!wrap || maxActive < 0 || !node) {
        setBeamH(0);
        return;
      }
      const wrapTop = wrap.getBoundingClientRect().top;
      const r = node.getBoundingClientRect();
      setBeamH(r.top - wrapTop + r.height / 2 - 8);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [maxActive]);

  // reveal nodes as they cross ~62% of the viewport — never un-reveal
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setMaxActive(milestones.length - 1);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setMaxActive((prev) => (idx > prev ? idx : prev));
          }
        });
      },
      { rootMargin: "0px 0px -38% 0px", threshold: 0.15 }
    );
    nodeRefs.current.forEach((n) => n && io.observe(n));
    return () => io.disconnect();
  }, [milestones.length]);

  return (
    <div ref={wrapRef} className="relative mx-auto max-w-3xl">
      {/* base track */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-2 left-[7px] top-2 w-px bg-border md:left-[11px]"
      />
      {/* animated progress beam */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-[7px] top-2 w-px bg-gradient-to-b from-cyan via-cyan to-cyan/30 shadow-[0_0_8px_rgba(0,194,255,0.6)] transition-[height] duration-700 ease-out md:left-[11px]"
        style={{ height: beamH }}
      />

      <ol className="space-y-9 md:space-y-11">
        {milestones.map((m, idx) => {
          const on = idx <= maxActive;
          return (
            <li
              key={m.year}
              className="group relative pl-10 transition-transform duration-300 hover:-translate-y-0.5 md:pl-16"
            >
              {/* node */}
              <span
                ref={(el) => {
                  nodeRefs.current[idx] = el;
                }}
                data-idx={idx}
                aria-hidden
                className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center md:h-6 md:w-6"
              >
                {on && (
                  <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-cyan/40 md:h-3 md:w-3" />
                )}
                <span
                  className={`relative inline-flex rounded-full ring-4 transition-all duration-500 ${
                    on
                      ? "h-3 w-3 scale-100 bg-cyan ring-cyan/20 md:h-3.5 md:w-3.5"
                      : "h-2.5 w-2.5 scale-90 bg-page ring-border md:h-3 md:w-3"
                  }`}
                />
              </span>

              {/* content */}
              <div
                className={`transition-all duration-700 ease-out ${
                  on ? "translate-x-0 opacity-100" : "translate-x-1.5 opacity-50"
                }`}
              >
                <p
                  className={`${headingFont} text-2xl font-medium leading-none tracking-tight transition-colors duration-500 md:text-3xl ${
                    on ? "text-cyan" : "text-ink-muted"
                  }`}
                >
                  {m.year}
                </p>
                <h3 className="mt-3 text-lg font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-cyan md:text-xl">
                  {m.title}
                </h3>
                <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">
                  {m.body}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
