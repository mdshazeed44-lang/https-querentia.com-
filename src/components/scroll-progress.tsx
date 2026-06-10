"use client";

import { useEffect, useRef } from "react";

/**
 * Thin electric-cyan progress bar at the very top of the viewport that fills
 * left-to-right as the page scrolls. Sits above the header (z-50 vs header z-40).
 * rAF-throttled, respects prefers-reduced-motion.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0;
      el.style.setProperty("--scroll", String(pct));
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]"
    >
      <div
        ref={ref}
        className="scroll-progress h-full bg-cyan"
        style={{ ["--scroll" as string]: 0 }}
      />
    </div>
  );
}
