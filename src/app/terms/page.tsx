import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import { Mail, ArrowRight } from "@/components/ui/icons";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing your use of the Querentia website and recruitment services.",
  alternates: { canonical: "/terms" },
};

const UPDATED = "January 2026";

const SECTIONS: {
  id: string;
  num: string;
  title: string;
  body: string;
}[] = [
  {
    id: "acceptance",
    num: "01",
    title: "Acceptance",
    body: "By accessing this website you agree to these terms. If you don't agree, please don't use the site.",
  },
  {
    id: "use-of-the-site",
    num: "02",
    title: "Use of the site",
    body: "The content is provided for information and recruitment-related purposes only. You agree not to misuse the site, attempt to compromise its security, or scrape candidate data.",
  },
  {
    id: "recruitment-services",
    num: "03",
    title: "Recruitment services",
    body: `Engagements with ${site.legalName} for talent search, shortlisting, or placement are governed by a separate signed agreement. Open roles listed on this site may change or be removed at any time.`,
  },
  {
    id: "intellectual-property",
    num: "04",
    title: "Intellectual property",
    body: `All branding, copy, and design on this site are owned by ${site.legalName}. You may not reuse them without written permission.`,
  },
  {
    id: "liability",
    num: "05",
    title: "Liability",
    body: 'We work hard to keep information current, but the site is provided "as is." We\'re not liable for indirect losses arising from your use of it.',
  },
  {
    id: "governing-law",
    num: "06",
    title: "Governing law",
    body: "These terms are governed by the laws of the Province of Ontario, Canada.",
  },
  {
    id: "contact",
    num: "07",
    title: "Contact",
    body: `Questions about these terms? Reach ${site.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
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
              <span className="inline-block h-px w-8 bg-cyan/60" />
              <span>Legal · Terms of Use</span>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h1
              className={`${playfair.className} text-balance font-medium text-white`}
              style={{
                fontSize: "clamp(2.1rem, 4.6vw, 3.6rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                maxWidth: "18ch",
              }}
            >
              Clear terms,{" "}
              <span style={{ color: "#00C2FF" }}>
                no fine-print games.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/65 md:text-base">
              The rules that apply when you use the {site.name} website or engage
              our recruitment services.
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

      {/* ---------- BODY — contents sidebar + numbered sections ---------- */}
      <section className="bg-page py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* sticky contents nav (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-faint">
                Contents
              </p>
              <nav className="flex flex-col gap-1">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-card hover:text-ink"
                  >
                    <span className="font-mono text-[11px] text-cyan/70">
                      {s.num}
                    </span>
                    <span className="transition-colors group-hover:text-ink">
                      {s.title}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* sections */}
          <div className="mx-auto w-full max-w-2xl lg:mx-0">
            <div className="divide-y divide-border">
              {SECTIONS.map((s, i) => (
                <Reveal key={s.id} delay={i * 60}>
                  <div
                    id={s.id}
                    className="group scroll-mt-24 grid gap-4 py-9 first:pt-0 sm:grid-cols-[68px_1fr] sm:gap-8"
                  >
                    <span
                      className={`${playfair.className} text-3xl font-medium leading-none text-cyan/30 transition-colors duration-300 group-hover:text-cyan/60 sm:text-4xl`}
                    >
                      {s.num}
                    </span>
                    <div>
                      <h2
                        className={`${playfair.className} text-2xl font-medium tracking-tight text-ink md:text-[1.75rem]`}
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

            {/* closing contact card */}
            <Reveal delay={120}>
              <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[0_24px_60px_-32px_rgba(13,27,42,0.18)] md:p-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
                  Still have questions?
                </p>
                <h3
                  className={`${playfair.className} mt-4 text-2xl font-medium tracking-tight text-ink md:text-3xl`}
                >
                  We&apos;re happy to walk you through it.
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
                  Reach out about anything on this page and a member of our team
                  will get back to you.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-lg bg-green px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-green-700"
                  >
                    Contact Us
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-cyan transition-colors hover:text-ink"
                  >
                    <Mail className="h-4 w-4" /> {site.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
