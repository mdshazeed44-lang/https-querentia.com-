"use client";

import { useState, type FormEvent } from "react";
import { Playfair_Display } from "next/font/google";
import { ArrowRight, Check } from "@/components/ui/icons";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const reasons = [
  { label: "Hire talent", value: "hire" },
  { label: "Looking for a role", value: "candidate" },
  { label: "Something else", value: "general" },
];

type Status = "idle" | "sending" | "sent" | "error";

function Field({
  name,
  label,
  placeholder,
  required,
  type = "text",
  autoComplete,
}: {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-xs font-medium text-ink-muted">
      {label}
      {required ? <span className="text-red"> *</span> : null}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-xl border border-border bg-page px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink-faint focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/15"
      />
    </label>
  );
}

/**
 * "Send us a message" card on /contact. Real email delivery via
 * /api/contact (Resend) — no mailto: form, no browser interstitial.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
          role: data.get("role"),
          reason: data.get("reason"),
          message: data.get("message"),
          source: "Contact page form",
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

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_30px_80px_-30px_rgba(13,27,42,0.25)] md:p-9"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/[0.06] blur-2xl"
      />

      {status === "sent" ? (
        <div className="relative flex flex-col items-center py-10 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-soft text-cyan">
            <Check className="h-6 w-6" />
          </span>
          <h2
            className={`${playfair.className} mt-5 text-2xl font-medium tracking-tight text-ink`}
          >
            Message sent.
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
            Thanks for reaching out — a real recruiter will reply within one
            business day.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-cyan hover:text-cyan"
          >
            Send another message
          </button>
        </div>
      ) : (
        <div className="relative">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
            <span className="inline-block h-px w-8 bg-cyan/60" />
            Send a Message
          </p>
          <h2
            className={`${playfair.className} text-[clamp(1.9rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-tight text-ink`}
          >
            Tell us what <span className="text-cyan">you need.</span>
          </h2>

          {/* Reason chips */}
          <fieldset className="mt-7">
            <legend className="text-xs font-medium text-ink-muted">
              I&apos;m here to…
            </legend>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {reasons.map((r, idx) => (
                <label key={r.value} className="group cursor-pointer">
                  <input
                    type="radio"
                    name="reason"
                    value={r.value}
                    defaultChecked={idx === 0}
                    className="sr-only"
                  />
                  <span className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-border bg-page px-4 py-2.5 text-xs font-medium text-ink-muted transition-all duration-200 hover:border-cyan/40 active:scale-[0.97] group-has-[:checked]:border-cyan group-has-[:checked]:bg-cyan-soft group-has-[:checked]:text-ink group-has-[:focus-visible]:ring-4 group-has-[:focus-visible]:ring-cyan/15">
                    <Check className="h-3 w-3 text-cyan opacity-0 transition-opacity group-has-[:checked]:opacity-100" />
                    {r.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field
              name="name"
              label="Your name"
              required
              placeholder="Jane Smith"
              autoComplete="name"
            />
            <Field
              name="email"
              label="Work email"
              required
              placeholder="jane@company.com"
              type="email"
              autoComplete="email"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field
              name="phone"
              label="Phone"
              placeholder="+1 (555) 123-4567"
              type="tel"
              autoComplete="tel"
            />
            <Field
              name="company"
              label="Company"
              placeholder="Optional"
              autoComplete="organization"
            />
          </div>
          <div className="mt-4">
            <Field
              name="role"
              label="Role"
              placeholder="Optional"
              autoComplete="organization-title"
            />
          </div>
          <div className="mt-4">
            <label className="block text-xs font-medium text-ink-muted">
              Message
              <span className="text-red"> *</span>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Role, location, timeline — anything that helps."
                className="mt-1.5 min-h-[120px] w-full resize-y rounded-xl border border-border bg-page px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink-faint focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/15"
              />
            </label>
          </div>

          {status === "error" && (
            <p className="mt-4 rounded-xl bg-red/10 px-4 py-2.5 text-xs text-red">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white shadow-[0_18px_40px_-16px_rgba(255,107,43,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-[0_24px_52px_-16px_rgba(255,107,43,0.65)] active:translate-y-0 active:shadow-[0_12px_30px_-16px_rgba(255,107,43,0.5)] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
          >
            {status === "sending" ? "Sending…" : "Send message"}
            {status !== "sending" && (
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </button>
          <p className="mt-4 text-xs text-ink-faint">
            We&apos;ll reply to the email address you provide. Fields marked{" "}
            <span className="text-red">*</span> are required.
          </p>
        </div>
      )}
    </form>
  );
}
