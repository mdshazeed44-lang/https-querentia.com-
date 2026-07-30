"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight, Mail, Phone, Check } from "@/components/ui/icons";
import { site } from "@/lib/site";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "sending" | "sent" | "error";

export function ContactModal({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  // Portals need document, which only exists after mount (SSR-safe).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Reset the form state each time the modal is (re)opened.
  useEffect(() => {
    if (open) {
      setStatus("idle");
      setErrorMessage("");
    }
  }, [open]);

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          message: data.get("message"),
          source: "Get in Touch modal",
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(json.message || "Something went wrong. Please try again.");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(`Couldn't send right now. Please email us at ${site.email}.`);
    }
  }

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

        {status === "sent" ? (
          <div className="flex flex-col items-center px-6 py-14 text-center md:px-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-soft text-cyan">
              <Check className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-bold tracking-tight text-deep">Message sent</h3>
            <p className="mt-2 max-w-xs text-sm text-ink-muted">
              Thanks for reaching out — a real recruiter will reply within one
              business day.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="space-y-3 px-6 py-6 md:px-8">
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

            {status === "error" && (
              <p className="rounded-xl bg-red/10 px-4 py-2.5 text-xs text-red">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(255,107,43,0.6)] transition-all duration-300 hover:scale-[1.01] hover:bg-green-700 disabled:cursor-wait disabled:opacity-70 disabled:hover:scale-100"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              {status !== "sending" && <ArrowRight className="h-4 w-4" />}
            </button>

            {/* Quick contacts */}
            <div className="mt-4 grid gap-2 border-t border-border pt-4 text-xs text-ink-muted sm:grid-cols-2">
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
            </div>
          </form>
        )}
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
