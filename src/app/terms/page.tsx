import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing your use of the Querentia website and recruitment services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const updated = "January 2026";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="animate-aurora absolute -top-32 left-[15%] h-[36rem] w-[36rem] rounded-full blur-[160px]"
            style={{ background: "radial-gradient(circle, rgba(0,194,255,0.45), transparent 65%)" }}
          />
        </div>
        <div className="container-x relative pt-32 pb-12 md:pt-40 md:pb-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
              Last updated · {updated}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-3 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              Terms of <span className="text-blue">Use</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 max-w-2xl text-on-deep-muted md:text-lg">
              The rules that apply when you use the {site.name} website or
              engage our recruitment services.
            </p>
          </Reveal>
        </div>
        <svg
          aria-hidden
          viewBox="0 0 1440 66"
          preserveAspectRatio="none"
          className="-mb-1.5 block h-8 w-full md:h-12"
        >
          <path d="M0 66V24C240 50 480 60 720 50C960 40 1200 12 1440 26V66H0Z" fill="var(--color-page)" />
        </svg>
      </section>

      {/* BODY */}
      <section className="bg-page py-16 md:py-20">
        <div className="container-x mx-auto max-w-3xl space-y-10 text-ink">
          <div>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">1. Acceptance</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              By accessing this website you agree to these terms. If you
              don&apos;t agree, please don&apos;t use the site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">2. Use of the site</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              The content is provided for information and recruitment-related
              purposes only. You agree not to misuse the site, attempt to
              compromise its security, or scrape candidate data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">3. Recruitment services</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Engagements with {site.legalName} for talent search,
              shortlisting, or placement are governed by a separate signed
              agreement. Open roles listed on this site may change or be
              removed at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">4. Intellectual property</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              All branding, copy, and design on this site are owned by{" "}
              {site.legalName}. You may not reuse them without written
              permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">5. Liability</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              We work hard to keep information current, but the site is
              provided &quot;as is.&quot; We&apos;re not liable for indirect
              losses arising from your use of it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">6. Governing law</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              These terms are governed by the laws of the Province of Ontario,
              Canada.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">7. Contact</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Questions about these terms? Reach{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-cyan hover:underline">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
