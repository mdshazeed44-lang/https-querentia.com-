"use client";

import { useState, useEffect } from "react";
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
  { label: "About Us", href: "/about" },
  {
    label: "Talent Services",
    href: "/jobs",
    children: [{ label: "Open Positions", href: "/jobs" }],
  },
  { label: "Resume Services", href: "/resume-services" },
  { label: "Interview Training", href: "/interview-training" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-deep-2/90 backdrop-blur-xl"
            : "border-b border-transparent bg-deep-2/40 backdrop-blur-sm"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center" aria-label={site.name}>
            <Image
              src="/querentia-logo.png"
              alt={site.name}
              width={350}
              height={200}
              priority
              className="h-9 w-auto brightness-0 invert md:h-10"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {menu.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-white/85 transition-colors hover:text-white"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.3)]">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="block rounded-xl px-3 py-2.5 text-sm text-ink-muted transition-colors hover:bg-page-2 hover:text-deep"
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

          {/* Right action — Get in Touch */}
          <div className="hidden items-center lg:flex">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-green-700"
            >
              Get in Touch <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
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
          className={`overflow-hidden border-t border-white/10 bg-deep-2 transition-[max-height] duration-500 lg:hidden ${
            open ? "max-h-[32rem]" : "max-h-0"
          }`}
        >
          <nav className="container-x flex flex-col gap-1 py-4">
            {menu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 px-1">
              <button
                type="button"
                onClick={() => { setOpen(false); setModalOpen(true); }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-medium text-white hover:bg-green-700"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      </header>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
