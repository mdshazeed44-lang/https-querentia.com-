"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string; // e.g. "168+", "10+", "94%", "48h"
  duration?: number; // ms
  className?: string;
};

/**
 * Animates the numeric portion of a label from 0 to its target when it scrolls into view.
 * Preserves any non-numeric suffix/prefix verbatim ("+", "%", "h"...).
 */
export function CountUp({ value, duration = 1400, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [shown, setShown] = useState<string>(value);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
    if (!match) return; // nothing numeric
    const prefix = match[1] ?? "";
    const target = parseFloat(match[2]);
    const suffix = match[3] ?? "";
    const isInt = !match[2].includes(".");

    // start from 0
    setShown(`${prefix}0${suffix}`);

    const fire = () => {
      if (animated.current) return;
      animated.current = true;
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const v = target * eased;
        const out = isInt ? Math.round(v).toString() : v.toFixed(1);
        setShown(`${prefix}${out}${suffix}`);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (typeof IntersectionObserver === "undefined") {
      fire();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            fire();
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
