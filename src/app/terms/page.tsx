import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { Mail } from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing your use of the Querentia website and recruitment services.",
  alternates: { canonical: "/terms" },
};

const UPDATED = "January 2026";

const SECTIONS: {
  num: string;
  title: string;
  body: string;
}[] = [
  {
    num: "01",
    title: "Acceptance",
    body: "By accessing this website you agree to these terms. If you don't agree, please don't use the site.",
  },
  {
    num: "02",
    title: "Use of the site",
    body: "The content is provided for information and recruitment-related purposes only. You agree not to misuse the site, attempt to compromise its security, or scrape candidate data.",
  },
  {
    num: "03",
    title: "Recruitment services",
    body: `Engagements with ${site.legalName} for talent search, shortlisting, or placement are governed by a separate signed agreement. Open roles listed on this site may change or be removed at any time.`,
  },
  {
    num: "04",
    title: "Intellectual property",
    body: `All branding, copy, and design on this site are owned by ${site.legalName}. You may not reuse them without written permission.`,
  },
  {
    num: "05",
    title: "Liability",
    body: 'We work hard to keep information current, but the site is provided "as is." We\'re not liable for indirect losses arising from your use of it.',
  },
  {
    num: "06",
    title: "Governing law",
    body: "These terms are governed by the laws of the Province of Ontario, Canada.",
  },
  {
    num: "07",
    title: "Contact",
    body: `Questions about these terms? Reach ${site.email}.`,
  },
];

export default function TermsPage() {
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
              <span>Terms of Use</span>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h1
              className="text-balance font-medium text-white"
              style={{
                fontSize: "clamp(1.85rem, 3.9vw, 3.25rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.022em",
                maxWidth: "17ch",
              }}
            >
              Clear terms,
              <br className="hidden sm:block" />{" "}
              <span
                className="text-cyan"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                }}
              >
                no fine-print games.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/65 md:text-[15px]">
              The rules that apply when you use the {site.name} website or
              engage our recruitment services.
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
                      className="text-xl font-medium tracking-tight text-ink md:text-2xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.title}
                    </h2>
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
