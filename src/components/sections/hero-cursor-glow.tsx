"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative cyan glow that follows the cursor inside the hero section.
 *
 * - Renders inside the nearest positioned ancestor (the <section data-hero>).
 * - Skipped under prefers-reduced-motion and on coarse pointers (touch).
 * - Pointer-events disabled so it never interferes with clicks.
 */
export function HeroCursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) {
      el.style.opacity = "0";
      return;
    }

    const parent = el.parentElement; // the hero section
    if (!parent) return;

    const LERP = 0.12;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf = 0;
    let initialized = false;

    const tick = () => {
      currentX += (targetX - currentX) * LERP;
      currentY += (targetY - currentY) * LERP;
      el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      raf = window.requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      if (!initialized) {
        // Snap to first known position so it doesn't slide in from 0,0
        currentX = targetX;
        currentY = targetY;
        el.style.opacity = "1";
        initialized = true;
      }
    };

    const onLeave = () => {
      // Fade out gently when cursor leaves the hero
      el.style.opacity = "0";
    };

    const onEnter = () => {
      if (initialized) el.style.opacity = "1";
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    parent.addEventListener("mouseenter", onEnter);
    raf = window.requestAnimationFrame(tick);

    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      parent.removeEventListener("mouseenter", onEnter);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 -z-10 h-[700px] w-[700px]"
      style={{
        marginLeft: "-350px",
        marginTop: "-350px",
        background:
          "radial-gradient(circle, rgba(0,194,255,0.10) 0%, transparent 60%)",
        opacity: 0,
        transition: "opacity 400ms ease",
        willChange: "transform, opacity",
      }}
    />
  );
}
