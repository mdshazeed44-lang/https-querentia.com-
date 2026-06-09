"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ArrowRight } from "@/components/ui/icons";

// 3D network — client-only, no SSR
const ParticleNetwork = dynamic(
  () => import("./particle-network").then((m) => m.ParticleNetwork),
  { ssr: false, loading: () => null }
);

const LINE_1 = "We connect elite tech talent";
const LINE_2 = "with what's next.";

function splitWords(text: string, base: number) {
  return text.split(/(\s+)/).map((piece, i) => {
    if (piece.match(/^\s+$/)) return <span key={i}> </span>;
    return (
      <span key={i} className="inline-block overflow-hidden align-baseline">
        <span className="split-word inline-block" data-i={base + i}>
          {piece}
        </span>
      </span>
    );
  });
}

export function FuturisticHero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const ctaPrimaryRef = useRef<HTMLAnchorElement | null>(null);
  const ctaSecondaryRef = useRef<HTMLAnchorElement | null>(null);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Staggered text reveal on mount
  useEffect(() => {
    if (!heroRef.current || reduceMotion) return;
    const words = heroRef.current.querySelectorAll(".split-word");
    const fade = heroRef.current.querySelectorAll(".fade-in");

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.set(words, { y: "110%", opacity: 0 })
      .to(words, { y: "0%", opacity: 1, duration: 1.2, stagger: 0.045 }, 0.2)
      .from(fade, { y: 24, opacity: 0, duration: 1, stagger: 0.12 }, "<0.4");

    return () => {
      tl.kill();
    };
  }, [reduceMotion]);

  // Magnetic effect for CTAs
  useEffect(() => {
    if (reduceMotion) return;
    const els = [ctaPrimaryRef.current, ctaSecondaryRef.current].filter(
      (e): e is HTMLAnchorElement => Boolean(e)
    );
    if (!els.length) return;

    const handlers: Array<() => void> = [];

    for (const el of els) {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        gsap.to(el, {
          x: x * 0.18,
          y: y * 0.25,
          duration: 0.4,
          ease: "power3.out",
        });
      };
      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      handlers.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    }

    return () => handlers.forEach((h) => h());
  }, [reduceMotion]);

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-dvh items-center overflow-hidden"
      style={{ background: "radial-gradient(circle at 20% 30%, rgba(16,39,212,0.18), transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,229,255,0.08), transparent 60%), #0a0a0f" }}
    >
      {/* Gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="blob-drift absolute -top-20 -left-20 h-[40rem] w-[40rem] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(79,107,255,0.32), transparent 70%)" }}
        />
        <div
          className="blob-drift absolute -bottom-32 -right-20 h-[36rem] w-[36rem] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.18), transparent 70%)", animationDelay: "-8s" }}
        />
        {/* film grain */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      {/* 3D particle network — placed behind the headline */}
      <div className="absolute inset-0 -z-[5] flex items-center justify-center">
        <div className="h-full max-h-[820px] w-full max-w-[1200px] opacity-90">
          <ParticleNetwork />
        </div>
      </div>

      {/* Content */}
      <div className="container-x relative pt-28 pb-16 md:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <span className="fade-in inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" style={{ background: "#00e5ff" }} />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "#00e5ff" }} />
            </span>
            Where elite IT talent meets the future
          </span>

          <h1
            className="h-display mt-8 text-[clamp(2.5rem,9vw,8rem)] text-white"
            aria-label={`${LINE_1} ${LINE_2}`}
          >
            <span className="block">{splitWords(LINE_1, 0)}</span>
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(95deg, #d3e2ff 0%, #4f6bff 45%, #00e5ff 100%)",
              }}
            >
              {splitWords(LINE_2, 100)}
            </span>
          </h1>

          <p className="fade-in mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            Specialist IT recruitment for Canada&apos;s most ambitious teams —
            cloud, data, AI, cybersecurity, full-stack and blockchain.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              ref={ctaPrimaryRef}
              href="/contact"
              className="glow-ring fade-in inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #1027d4, #4f6bff)",
                boxShadow: "0 18px 50px -12px rgba(79,107,255,0.55)",
              }}
            >
              Find talent <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              ref={ctaSecondaryRef}
              href="/jobs"
              className="fade-in inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-white/60 hover:bg-white/[0.08]"
            >
              Find your role
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="fade-in mt-20 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/45">
            <span>Scroll</span>
            <span className="relative block h-10 w-px overflow-hidden bg-white/15">
              <span
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, #00e5ff, transparent)",
                  animation: "scroll-cue 2.4s ease-in-out infinite",
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
