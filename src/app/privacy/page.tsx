import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Querentia collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const updated = "January 2026";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="animate-aurora absolute -top-32 left-[15%] h-[36rem] w-[36rem] rounded-full blur-[160px]"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.45), transparent 65%)" }}
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
              Privacy <span className="text-blue">Policy</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 max-w-2xl text-on-deep-muted md:text-lg">
              How {site.legalName} handles your data when you visit our site
              or submit information through our forms.
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
            <h2 className="text-2xl font-bold text-deep md:text-3xl">1. Information we collect</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              When you use our website or submit a contact form, we may collect
              your name, work email, company, role, and the message you send.
              Resume submissions additionally include the documents you choose
              to share. We also collect basic analytics (pages visited, device
              type, broad location) via Google Analytics.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">2. How we use it</h2>
            <ul className="mt-3 space-y-2 leading-relaxed text-ink-muted">
              <li>• To respond to enquiries and shortlist requests.</li>
              <li>• To match candidates to enterprise roles we&apos;re actively staffing.</li>
              <li>• To improve our website and recruitment service.</li>
              <li>• To send relevant role updates (only if you opt in).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">3. Sharing</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              We share candidate profiles only with the specific hiring clients
              they&apos;re being considered for, and only after you&apos;ve
              agreed. We do not sell personal data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">4. Storage &amp; security</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Data is stored on encrypted servers and inside our Applicant
              Tracking System (Ceipal). Access is limited to Querentia
              recruiters working on your file.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">5. Your rights</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              You can ask us to access, correct, or delete the personal
              information we hold about you at any time — email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-green-700 hover:underline">
                {site.email}
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-deep md:text-3xl">6. Contact</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Questions? Reach out to {site.legalName}, {site.location} —{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-green-700 hover:underline">
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
