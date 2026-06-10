"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
};

/**
 * MagneticButton — a Link whose inner content magnetically eases toward the
 * cursor while hovered (max ~10px), then lerps back to rest on leave.
 *
 * - Respects prefers-reduced-motion (no JS pull, no transform).
 * - Disabled on coarse pointers (touch) so mobile stays static.
 */
export function MagneticButton({ children, href, className = "" }: Props) {
  const outerRef = useRef<HTMLAnchorElement | null>(null);
  const innerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    if (typeof window === "undefined") return;

    // Skip on reduced motion or coarse pointer (touch).
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    const MAX = 10; // px pull
    const LERP = 0.18;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf = 0;
    let running = false;

    const tick = () => {
      currentX += (targetX - currentX) * LERP;
      currentY += (targetY - currentY) * LERP;

      inner.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

      // Continue while still settling
      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        raf = window.requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = window.requestAnimationFrame(tick);
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = outer.getBoundingClientRect();
      const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

      // Clamp to [-1, 1] then scale to MAX
      targetX = Math.max(-1, Math.min(1, relX)) * MAX;
      targetY = Math.max(-1, Math.min(1, relY)) * MAX;
      start();
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      start();
    };

    outer.addEventListener("mousemove", onMove);
    outer.addEventListener("mouseleave", onLeave);

    return () => {
      outer.removeEventListener("mousemove", onMove);
      outer.removeEventListener("mouseleave", onLeave);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Link ref={outerRef} href={href} className={className}>
      <span
        ref={innerRef}
        className="inline-flex items-center gap-2.5"
        style={{ willChange: "transform" }}
      >
        {children}
      </span>
    </Link>
  );
}
