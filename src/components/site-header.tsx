"use client";

import { useState, useEffect, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { ArrowRight, ChevronDown } from "@/components/ui/icons";
import { ContactModal } from "@/components/contact-modal";

type MenuItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const menu: MenuItem[] = [
  {
    label: "Talent Services",
    href: "/jobs",
    children: [{ label: "Open Positions", href: "/jobs" }],
  },
  { label: "Resume Services", href: "/resume-services" },
  { label: "Interview Training", href: "/interview-training" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Palette", href: "/palettes" },
];

// Distance (px) over which the header morphs from flat → pill
const RANGE = 180;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [t, setT] = useState(0); // 0 = top, 1 = fully shrunk pill

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      const next = Math.min(1, Math.max(0, y / RANGE));
      setT(next);
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Outer wrapper interpolation — padding grows to "squeeze" pill smaller + center it.
  // On mobile we squeeze less (the pill is already narrow), on desktop more.
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const squeezeRem = isMobile ? 1 : 9;
  const wrapperStyle: CSSProperties = {
    paddingTop: `${lerp(0, 12, t)}px`,
    paddingLeft: `calc(1.5rem + ${lerp(0, squeezeRem, t)}rem)`,
    paddingRight: `calc(1.5rem + ${lerp(0, squeezeRem, t)}rem)`,
  };

  // Pill bar interpolation — radius, bg, shadow, border, internal padding
  const barStyle: CSSProperties = {
    borderRadius: `${lerp(0, 999, t)}px`,
    backgroundColor: `rgba(255, 255, 255, ${lerp(0, 0.7, t)})`,
    backdropFilter: t > 0.02 ? "blur(16px)" : undefined,
    WebkitBackdropFilter: t > 0.02 ? "blur(16px)" : undefined,
    boxShadow: `0 12px 40px -12px rgba(15, 27, 51, ${lerp(0, 0.35, t)})`,
    border: `1px solid rgba(221, 230, 242, ${lerp(0, 1, t)})`,
    paddingTop: `${lerp(16, 4, t)}px`,
    paddingBottom: `${lerp(16, 4, t)}px`,
    paddingLeft: `${lerp(0, 12, t)}px`,
    paddingRight: `${lerp(0, 4, t)}px`,
  };

  // Color interpolation helpers
  const navColor = `color-mix(in srgb, rgba(255,255,255,0.85) ${100 - t * 100}%, rgba(20,34,46,0.85) ${t * 100}%)`;
  const navHoverBg = t > 0.5 ? "var(--color-page-2)" : "rgba(255,255,255,0.1)";
  const iconBtnBorder = `color-mix(in srgb, rgba(255,255,255,0.3) ${100 - t * 100}%, var(--color-border-2) ${t * 100}%)`;
  const iconBtnColor = `color-mix(in srgb, #ffffff ${100 - t * 100}%, var(--color-deep) ${t * 100}%)`;

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-x" style={wrapperStyle}>
        <div className="mx-auto flex w-full items-center justify-between gap-3 transition-[background-color] duration-100" style={barStyle}>
          {/* Logo — crossfade between white & colored versions */}
          <Link href="/" className="relative flex shrink-0 items-center" aria-label={site.name}>
            <div className="relative" style={{ height: lerp(34, 24, t), width: lerp(118, 88, t) }}>
              {/* Colored logo (final state) */}
              <Image
                src="/querentia-logo.png"
                alt={`${site.name} — ${site.tagline}`}
                fill
                priority
                sizes="160px"
                className="object-contain object-left"
                style={{ opacity: t }}
              />
              {/* White logo overlay (top state) */}
              <Image
                src="/querentia-logo.png"
                alt=""
                fill
                priority
                sizes="160px"
                className="object-contain object-left"
                style={{ opacity: 1 - t, filter: "brightness(0) invert(1)" }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0 lg:flex">
            {menu.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12.5px] font-medium transition-colors xl:px-3 xl:text-[13px]"
                  style={
                    {
                      color: navColor,
                      ["--hover-bg" as string]: navHoverBg,
                    } as CSSProperties
                  }
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = navHoverBg)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-[0_18px_50px_-12px_rgba(15,27,51,0.3)]">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="block rounded-xl px-3 py-2.5 text-sm text-ink-muted transition-colors hover:bg-page-2 hover:text-green-700"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right action — Get in Touch (opens modal) */}
          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="glow-green inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-green px-3.5 py-2 text-[12.5px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-green-700 xl:px-4 xl:text-[13px]"
            >
              Get in Touch <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden"
            style={{ borderColor: iconBtnBorder, color: iconBtnColor }}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-[max-height] duration-500 lg:hidden ${
            open ? "max-h-[32rem]" : "max-h-0"
          }`}
        >
          <nav className="mt-2 flex flex-col gap-1 rounded-3xl border border-border bg-white p-3 shadow-[0_18px_50px_-12px_rgba(15,27,51,0.25)]">
            {menu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-deep hover:bg-page-2"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 px-1">
              <button
                type="button"
                onClick={() => { setOpen(false); setModalOpen(true); }}
                className="glow-green inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
