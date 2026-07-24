"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight, Check, Bolt } from "@/components/ui/icons";

/**
 * "Quick Apply" — opens a small window asking only Name, Email, Phone, and a
 * resume, then posts to /api/apply which submits the applicant straight into
 * Ceipal against this job (Apply Without Registration). Drop-in button used on
 * the job detail page.
 */
export function QuickApplyButton({
  slug,
  jobTitle,
  className,
}: {
  slug: string;
  jobTitle: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        <Bolt className="h-4 w-4" />
        Quick Apply
      </button>
      <QuickApplyModal
        open={open}
        slug={slug}
        jobTitle={jobTitle}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

type Status = "idle" | "submitting" | "success" | "error";

function QuickApplyModal({
  open,
  slug,
  jobTitle,
  onClose,
}: {
  open: boolean;
  slug: string;
  jobTitle: string;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstFieldRef.current?.focus(), 120);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [open, onClose]);

  // Reset transient state whenever the modal is (re)opened.
  useEffect(() => {
    if (open) {
      setStatus("idle");
      setMessage("");
    }
  }, [open]);

  if (!open || !mounted) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    fd.set("slug", slug);
    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/apply", { method: "POST", body: fd });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
      };
      if (res.ok && data.ok) {
        setStatus("success");
        setMessage(data.message || "Your application has been submitted.");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  const input =
    "mt-1 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-deep placeholder:text-ink-muted/55 focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/15";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-apply-title"
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-deep-2/70 p-4 backdrop-blur-md md:items-center md:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-white shadow-[0_30px_80px_-20px_rgba(15,27,51,0.45)]"
        style={{ animation: "qa-pop 0.35s cubic-bezier(0.16,1,0.3,1) forwards" }}
      >
        {/* Brand strip */}
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
            Quick Apply
          </p>
          <h2 id="quick-apply-title" className="mt-2 text-xl font-bold tracking-tight md:text-2xl">
            {jobTitle}
          </h2>
          <p className="mt-2 text-sm text-on-deep-muted">
            Just the essentials. Your details go straight to our recruiters.
          </p>
        </div>

        {status === "success" ? (
          <div className="px-6 py-10 text-center md:px-8">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-soft">
              <Check className="h-7 w-7 text-frost" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-deep">Application received</h3>
            <p className="mx-auto mt-2 max-w-xs text-sm text-ink-muted">{message}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-deep px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-deep-2"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 px-6 py-6 md:px-8">
            <label className="block text-xs font-medium text-ink-muted">
              Full name <span className="text-red">*</span>
              <input ref={firstFieldRef} name="name" required placeholder="Jane Smith" className={input} />
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block text-xs font-medium text-ink-muted">
                Email <span className="text-red">*</span>
                <input name="email" type="email" required placeholder="jane@email.com" className={input} />
              </label>
              <label className="block text-xs font-medium text-ink-muted">
                Phone <span className="text-red">*</span>
                <input name="phone" type="tel" required autoComplete="tel" placeholder="+1 (555) 123-4567" className={input} />
              </label>
            </div>
            <label className="block text-xs font-medium text-ink-muted">
              Resume <span className="text-red">*</span>
              <input
                name="resume"
                type="file"
                required
                accept=".pdf,.doc,.docx,.rtf,.txt,application/pdf"
                className="mt-1 w-full cursor-pointer rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-deep file:mr-3 file:rounded-full file:border-0 file:bg-page-2 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-deep hover:file:bg-cyan-soft focus:border-cyan focus:outline-none"
              />
              <span className="mt-1 block text-[11px] text-ink-muted/80">
                PDF, DOC, or DOCX — up to 5 MB.
              </span>
            </label>

            {status === "error" && (
              <p className="rounded-xl bg-red/10 px-3 py-2 text-xs text-red" role="alert">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(255,107,43,0.6)] transition-all duration-300 hover:scale-[1.01] hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                "Submitting…"
              ) : (
                <>
                  Submit application <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
            <p className="text-center text-[11px] leading-relaxed text-ink-muted">
              By applying you consent to Querentia processing your details for
              this role.
            </p>
          </form>
        )}
      </div>

      <style>{`
        @keyframes qa-pop {
          from { transform: translateY(12px) scale(0.98); opacity: 0; }
          to   { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </div>,
    document.body,
  );
}
