import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import { Mail } from "@/components/ui/icons";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Querentia collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "January 2026";

const SECTIONS: {
  num: string;
  title: string;
  body?: string;
  bullets?: string[];
}[] = [
  {
    num: "01",
    title: "Information we collect",
    body: "When you use our website or submit a contact form, we may collect your name, work email, phone number, company, role, and the message you send. Resume submissions additionally include the documents you choose to share. We also collect basic analytics (pages visited, device type, broad location) via Google Analytics.",
  },
  {
    num: "02",
    title: "How we use it",
    bullets: [
      "To respond to enquiries and shortlist requests.",
      "To match candidates to enterprise roles we're actively staffing.",
      "To improve our website and recruitment service.",
      "To send relevant role updates (only if you opt in).",
    ],
  },
  {
    num: "03",
    title: "Sharing",
    body: "We share candidate profiles only with the specific hiring clients they're being considered for, and only after you've agreed. We do not sell personal data.",
  },
  {
    num: "04",
    title: "Storage & security",
    body: "Data is stored on encrypted servers and inside our Applicant Tracking System (Ceipal). Access is limited to Querentia recruiters working on your file.",
  },
  {
    num: "05",
    title: "Your rights",
    body: `You can ask us to access, correct, or delete the personal information we hold about you at any time — email ${site.email}.`,
  },
  {
    num: "06",
    title: "Contact",
    body: `Questions? Reach out to ${site.legalName}, ${site.location} — ${site.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* ---------- HERO — standard clean intro ---------- */}
      <section className="relative isolate overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <span
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,194,255,0.12) 0%, transparent 60%)",
            }}
          />
          <span className="grain absolute inset-0" />
        </div>

        <div className="container-x relative pb-14 pt-32 md:pb-16 md:pt-40">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span
                className="text-sm tracking-normal"
                style={{ fontFamily: "var(--font-display)" }}
              >
                §
              </span>
              <span className="inline-block h-px w-6 bg-current opacity-50" />
              <span>Privacy Policy</span>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h1
              className={`${playfair.className} text-balance font-medium text-white`}
              style={{
                fontSize: "clamp(1.95rem, 4vw, 3.4rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                maxWidth: "18ch",
              }}
            >
              Your data,
              <br className="hidden sm:block" />{" "}
              <span className="text-cyan">handled with integrity.</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/65 md:text-[15px]">
              How {site.legalName} handles your information when you visit our
              site or submit details through our forms.
            </p>
          </Reveal>
          <Reveal delay={440}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-5 text-sm text-white/70">
              <span>Last updated · {UPDATED}</span>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-cyan transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" /> {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- BODY — numbered legal sections ---------- */}
      <section className="bg-page py-16 md:py-20">
        <div className="container-x mx-auto max-w-3xl">
          <div className="divide-y divide-border">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.num} delay={i * 60}>
                <div className="grid gap-4 py-9 first:pt-0 sm:grid-cols-[72px_1fr] sm:gap-8">
                  <span
                    className="font-mono text-2xl font-semibold text-cyan/40 sm:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <h2
                      className={`${playfair.className} text-xl font-medium tracking-tight text-ink md:text-2xl`}
                    >
                      {s.title}
                    </h2>
                    {s.body ? (
                      <p className="mt-3 leading-relaxed text-ink-muted">
                        {s.body.split(site.email).map((part, idx, arr) => (
                          <span key={idx}>
                            {part}
                            {idx < arr.length - 1 ? (
                              <a
                                href={`mailto:${site.email}`}
                                className="font-medium text-cyan hover:underline"
                              >
                                {site.email}
                              </a>
                            ) : null}
                          </span>
                        ))}
                      </p>
                    ) : null}
                    {s.bullets ? (
                      <ul className="mt-3 space-y-2.5">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-3 leading-relaxed text-ink-muted"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
