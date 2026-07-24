"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight, Mail, Phone, MapPin } from "@/components/ui/icons";
import { site } from "@/lib/site";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ContactModal({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  // Portals need document, which only exists after mount (SSR-safe).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Close on ESC + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focus first field after enter animation
    const t = setTimeout(() => firstFieldRef.current?.focus(), 120);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      clearTimeout(t);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  // Render into <body> so the modal escapes any transformed/ancestor stacking
  // context (Reveal animations, transformed sections) that would otherwise trap
  // `position: fixed` and break the overlay's positioning.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-deep-2/70 p-4 backdrop-blur-md md:items-center md:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-white shadow-[0_30px_80px_-20px_rgba(15,27,51,0.45)]"
        style={{
          animation: "modal-pop 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Brand top strip */}
        <div className="relative overflow-hidden bg-deep px-6 py-6 text-white md:px-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(0,194,255,0.55), transparent 70%)" }}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Get in touch</p>
          <h2 id="contact-modal-title" className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Let&apos;s talk.
          </h2>
          <p className="mt-2 text-sm text-on-deep-muted">
            One business day reply, on average. Tell us what you need.
          </p>
        </div>

        {/* Form */}
        <form
          action={`mailto:${site.email}?subject=Querentia%20%E2%80%94%20Get%20in%20Touch`}
          method="post"
          encType="text/plain"
          className="space-y-3 px-6 py-6 md:px-8"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-xs font-medium text-ink-muted">
              Your name <span className="text-red">*</span>
              <input
                ref={firstFieldRef}
                name="name"
                required
                placeholder="Jane Smith"
                className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-deep placeholder:text-ink-muted/55 focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/15"
              />
            </label>
            <label className="block text-xs font-medium text-ink-muted">
              Work email <span className="text-red">*</span>
              <input
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-deep placeholder:text-ink-muted/55 focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/15"
              />
            </label>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-xs font-medium text-ink-muted">
              Phone
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+1 (555) 123-4567"
                className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-deep placeholder:text-ink-muted/55 focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/15"
              />
            </label>
            <label className="block text-xs font-medium text-ink-muted">
              Company
              <input
                name="company"
                placeholder="Optional"
                className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-deep placeholder:text-ink-muted/55 focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/15"
              />
            </label>
          </div>
          <label className="block text-xs font-medium text-ink-muted">
            Message <span className="text-red">*</span>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="A short brief — role, location, timeline."
              className="mt-1 w-full resize-none rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-deep placeholder:text-ink-muted/55 focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/15"
            />
          </label>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(255,107,43,0.6)] transition-all duration-300 hover:scale-[1.01] hover:bg-green-700"
          >
            Send message <ArrowRight className="h-4 w-4" />
          </button>

          {/* Quick contacts */}
          <div className="mt-4 grid gap-2 border-t border-border pt-4 text-xs text-ink-muted sm:grid-cols-3">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 transition-colors hover:text-cyan"
            >
              <Mail className="h-3.5 w-3.5 text-cyan" />
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-cyan"
            >
              <Phone className="h-3.5 w-3.5 text-cyan" />
              {site.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-cyan" />
              {site.locality}, {site.region}
            </span>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes modal-pop {
          from { transform: translateY(12px) scale(0.98); opacity: 0; }
          to   { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </div>,
    document.body,
  );
}
