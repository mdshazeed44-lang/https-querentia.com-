"use client";

import { useEffect } from "react";

/**
 * ToDesktop-style scroll-driven theme transition for the hero.
 * - Page loads with hero in DARK mode (no class — CSS default is dark)
 * - After even a slight scroll (~80px), adds .is-light → CSS transitions to LIGHT
 * - Removes .is-light if user scrolls back to absolute top
 *
 * The actual color swap is done by CSS rules targeting .hero-themed and
 * .hero-themed.is-light in globals.css.
 */
export function ScrollTheme() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero-themed");
    if (!hero) return;

    let ticking = false;
    const THRESHOLD = 80;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      if (y > THRESHOLD) {
        hero.classList.add("is-light");
      } else {
        hero.classList.remove("is-light");
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    // Start in dark mode (no class)
    hero.classList.remove("is-light");
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
