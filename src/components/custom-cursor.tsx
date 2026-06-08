"use client";

import { useEffect, useRef } from "react";

/**
 * Custom mouse cursor — small bright dot at the pointer + a thin outline ring
 * that follows with eased lag. Hover-active state grows the ring over
 * interactive elements (links, buttons, inputs).
 *
 * Skipped on touch / pen-only devices (pointer: coarse) — native cursor stays.
 * Uses mix-blend-mode: difference on the ring so it looks correct on both
 * the dark hero sections and the light page sections without flipping colors.
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Skip on touch devices or when user prefers reduced motion
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      // Dot tracks instantly (1:1)
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    const INTERACTIVE = "a, button, input, textarea, select, [role='button'], label";
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (t && t.closest(INTERACTIVE)) ring.classList.add("is-active");
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (t && t.closest(INTERACTIVE)) ring.classList.remove("is-active");
    };

    const onLeaveWindow = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnterWindow = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    // rAF loop: smooth ring follow with lerp
    const tick = () => {
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.18;
      ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, true);
    document.addEventListener("mouseout", onOut, true);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("mouseout", onOut, true);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
