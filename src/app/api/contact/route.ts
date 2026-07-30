import { NextResponse } from "next/server";
import { site } from "@/lib/site";

/**
 * Sends contact form / "Get in Touch" submissions as a real email, instead of
 * the old mailto: form (which opened the visitor's email client and, on
 * Chrome, threw an "information is not secure" interstitial before Outlook
 * would even open).
 *
 * Uses Resend's REST API directly (no SDK — keeps the dependency footprint
 * the same as src/lib/social/linkedin.ts, which talks to Upload-Post the
 * same way). Gated by RESEND_API_KEY; without it, submissions fail with a
 * clear message rather than silently falling back to mailto, since that
 * fallback is exactly the behaviour the client asked to remove.
 */

export const runtime = "nodejs";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || site.email;
// Resend requires the "from" address's domain to be verified in their
// dashboard. Until querentia.com is verified there, this falls back to
// Resend's shared onboarding domain, which works but is not brand-clean.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Querentia Website <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  role?: string;
  reason?: string;
  message?: string;
  source?: string; // e.g. "Get in Touch modal" vs "Contact page form"
};

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name || "").trim().slice(0, 200);
  const email = (body.email || "").trim().slice(0, 200);
  const message = (body.message || "").trim().slice(0, 5000);
  const phone = (body.phone || "").trim().slice(0, 60);
  const company = (body.company || "").trim().slice(0, 200);
  const role = (body.role || "").trim().slice(0, 200);
  const reason = (body.reason || "").trim().slice(0, 60);
  const source = (body.source || "Website").trim().slice(0, 60);

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, message: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
  }

  if (!RESEND_API_KEY) {
    console.error("[api/contact] RESEND_API_KEY is not set — cannot send email.");
    return NextResponse.json(
      {
        ok: false,
        message:
          "Email sending isn't configured yet. Please email us directly at " + TO_EMAIL,
      },
      { status: 503 },
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ...(phone ? ([["Phone", phone]] as [string, string][]) : []),
    ...(company ? ([["Company", company]] as [string, string][]) : []),
    ...(role ? ([["Role", role]] as [string, string][]) : []),
    ...(reason ? ([["Reason", reason]] as [string, string][]) : []),
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#0D1B2A;line-height:1.6;">
      <p style="margin:0 0 16px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#00A0CC;">New enquiry &middot; ${escapeHtml(source)}</p>
      <table cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:2px 12px 2px 0;color:#5A6478;">${escapeHtml(k)}</td><td style="padding:2px 0;font-weight:600;">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="margin:0 0 4px;color:#5A6478;">Message</p>
      <p style="white-space:pre-wrap;margin:0;">${escapeHtml(message)}</p>
    </div>
  `.trim();

  const text = [
    `New enquiry (${source})`,
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    message,
  ].join("\n");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15_000);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Querentia website — new enquiry from ${name}`,
        html,
        text,
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("[api/contact] Resend error:", res.status, errText);
      return NextResponse.json(
        { ok: false, message: `Couldn't send right now. Please email us at ${TO_EMAIL}.` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, message: "Message sent — we'll be in touch." });
  } catch (err) {
    console.error("[api/contact] send failed:", err);
    return NextResponse.json(
      { ok: false, message: `Couldn't send right now. Please email us at ${TO_EMAIL}.` },
      { status: 502 },
    );
  } finally {
    clearTimeout(timer);
  }
}
