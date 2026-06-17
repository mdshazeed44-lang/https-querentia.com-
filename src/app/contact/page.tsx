import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Check,
  Clock,
} from "@/components/ui/icons";
import { site } from "@/lib/site";

/**
 * Contact — premium editorial aesthetic matching the About "Manifesto",
 * For Companies, and Industries pages: Playfair serif headings + navy/cyan,
 * clean hero (no orbit dots). All-talent positioning, tech and non-tech.
 * Server component — the form is a plain mailto form, no client JS.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Querentia — Canada's trusted recruitment partner for all talent, tech and non-tech. Hire exceptional people or explore your next role. Replies within one business day.",
  alternates: { canonical: "/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${site.url}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    sameAs: [site.linkedin, site.facebook, site.instagram, site.twitter],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: site.email,
        telephone: site.phone,
        areaServed: "CA",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phoneAlt,
        areaServed: "CA",
        availableLanguage: ["English"],
      },
    ],
  },
};

const tel = (n: string) => `tel:${n.replace(/[^+\d]/g, "")}`;
const MAPS_URL = "https://maps.google.com/?q=Oakville,+Ontario,+Canada";

type ChannelLink = { label: string; href: string; external?: boolean };

const channels: {
  icon: typeof Mail;
  title: string;
  note: string;
  links: ChannelLink[];
}[] = [
  {
    icon: Mail,
    title: "Email us",
    note: "Best for role specs, mandates, and resumes.",
    links: [{ label: site.email, href: `mailto:${site.email}` }],
  },
  {
    icon: Phone,
    title: "Call our team",
    note: "Either line reaches a recruiter — not a switchboard.",
    links: [
      { label: site.phone, href: tel(site.phone) },
      { label: site.phoneAlt, href: tel(site.phoneAlt) },
    ],
  },
  {
    icon: MapPin,
    title: "Our offices",
    note: "Oakville HQ, plus Toronto and Vancouver. Serving talent and employers Canada-wide.",
    links: [{ label: site.location, href: MAPS_URL, external: true }],
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    note: "Follow new roles, market notes, and hiring trends.",
    links: [
      {
        label: "linkedin.com/company/querentia",
        href: site.linkedin,
        external: true,
      },
    ],
  },
];

const reasons = [
  { label: "Hire talent", value: "hire" },
  { label: "Looking for a role", value: "candidate" },
  { label: "Something else", value: "general" },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main className="bg-page text-ink">
        {/* ---------- HERO ---------- */}
        <section className="relative isolate overflow-hidden bg-deep-2 pb-16 pt-32 text-on-deep md:pb-20 md:pt-40">
          {/* one quiet cyan ambient — no orbit dots, keep it editorial */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 72% 12%, rgba(0,194,255,0.12) 0%, transparent 60%)",
              }}
            />
          </div>

          <div className="container-x relative">
            <div className="max-w-3xl">
              <Reveal>
                <p className="mb-6 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  Contact Us
                </p>
              </Reveal>

              <Reveal delay={140}>
                <h1
                  className={`${playfair.className} text-balance font-medium text-white`}
                  style={{
                    fontSize: "clamp(2.4rem, 6vw, 5rem)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.015em",
                  }}
                >
                  Let&apos;s talk{" "}
                  <span style={{ color: "#00C2FF" }}>talent.</span>
                </h1>
              </Reveal>

              <Reveal delay={300}>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-on-deep-muted md:text-lg">
                  One call starts it. Whether you&apos;re building a team or
                  building a career, you&apos;ll get an honest conversation with
                  people who place exceptional talent — tech and non-tech —
                  across Canada.
                </p>
              </Reveal>

              <Reveal delay={440}>
                <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/15 pt-6">
                  <span className="inline-flex items-center gap-2 text-sm text-white/75">
                    <Clock className="h-4 w-4 text-frost" />
                    Replies within one business day
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-white/75">
                    <Check className="h-4 w-4 text-frost" />
                    A real recruiter, every time
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- SPLIT MAIN: CHANNELS + FORM ---------- */}
        <section className="bg-page py-16 md:py-20">
          <div className="container-x">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
              {/* LEFT — contact channels */}
              <div>
                <Reveal>
                  <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                    <span className="inline-block h-px w-8 bg-cyan/60" />
                    Direct Lines
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <h2
                    className={`${playfair.className} text-[clamp(1.9rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-tight text-ink`}
                  >
                    Reach a real{" "}
                    <span className="text-cyan">recruiter.</span>
                  </h2>
                </Reveal>

                <div className="mt-8 space-y-4">
                  {channels.map((c, idx) => {
                    const Icon = c.icon;
                    return (
                      <Reveal key={c.title} delay={160 + idx * 90}>
                        <div className="group flex items-start gap-5 rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/40 hover:shadow-[0_30px_70px_-40px_rgba(13,27,42,0.35)]">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-deep-2 text-cyan shadow-[0_14px_34px_-12px_rgba(0,194,255,0.45)] transition-transform duration-300 group-hover:scale-105">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-ink">
                              {c.title}
                            </p>
                            <div className="mt-1.5 space-y-0.5">
                              {c.links.map((l) => (
                                <a
                                  key={l.href}
                                  href={l.href}
                                  target={l.external ? "_blank" : undefined}
                                  rel={
                                    l.external
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                  className="block break-words text-sm text-ink transition-colors hover:text-cyan"
                                >
                                  {l.label}
                                </a>
                              ))}
                            </div>
                            <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                              {c.note}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT — form card */}
              <Reveal delay={200}>
                <form
                  action={`mailto:${site.email}?subject=Querentia%20%E2%80%94%20new%20enquiry`}
                  method="post"
                  encType="text/plain"
                  className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_30px_80px_-30px_rgba(13,27,42,0.25)] md:p-9"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/[0.06] blur-2xl"
                  />

                  <div className="relative">
                    <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                      <span className="inline-block h-px w-8 bg-cyan/60" />
                      Send a Message
                    </p>
                    <h2
                      className={`${playfair.className} text-[clamp(1.9rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-tight text-ink`}
                    >
                      Tell us what{" "}
                      <span className="text-cyan">you need.</span>
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
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-page px-4 py-2 text-xs font-medium text-ink-muted transition-all group-has-[:checked]:border-cyan group-has-[:checked]:bg-cyan-soft group-has-[:checked]:text-ink group-has-[:focus-visible]:ring-4 group-has-[:focus-visible]:ring-cyan/15">
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
                      />
                      <Field
                        name="email"
                        label="Work email"
                        required
                        placeholder="jane@company.com"
                        type="email"
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
                      />
                    </div>
                    <div className="mt-4">
                      <Field name="role" label="Role" placeholder="Optional" />
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
                          className="mt-1.5 w-full rounded-xl border border-border bg-page px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink-faint focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/15"
                        />
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-green-700 sm:w-auto"
                    >
                      Send message
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <p className="mt-4 text-xs text-ink-faint">
                      Submitting opens your email client with the details
                      pre-filled. Fields marked{" "}
                      <span className="text-red">*</span> are required.
                    </p>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- OFFICE / MAP CARD ---------- */}
        <section className="bg-page-2 py-16 md:py-20">
          <div className="container-x">
            <Reveal>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-[0_40px_90px_-40px_rgba(13,27,42,0.25)] md:grid md:grid-cols-[0.9fr_1.1fr]">
                {/* Address block */}
                <div className="relative p-8 md:p-12">
                  <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                    <span className="inline-block h-px w-8 bg-cyan/60" />
                    Where to Find Us
                  </p>
                  <h2
                    className={`${playfair.className} text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.1] tracking-tight text-ink`}
                  >
                    {site.legalName}
                  </h2>

                  <div className="mt-7 flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-deep-2 text-cyan shadow-[0_14px_34px_-12px_rgba(0,194,255,0.45)]">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {site.location}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        Oakville headquarters, with offices in Toronto and
                        Vancouver — serving talent and employers across Canada.
                        Meetings by appointment.
                      </p>
                    </div>
                  </div>

                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.25em] text-cyan"
                  >
                    Get directions
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Map */}
                <div className="relative min-h-[300px] md:min-h-full">
                  <iframe
                    title="Querentia office — Oakville, Ontario, Canada"
                    src="https://maps.google.com/maps?q=Oakville,%20Ontario,%20Canada&t=&z=12&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    style={{ border: 0 }}
                  />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-deep-2 px-4 py-2 text-xs font-medium text-cyan shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                    </span>
                    Oakville, Ontario
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- CLOSING STRIP ---------- */}
        <section className="relative isolate overflow-hidden bg-deep-2 py-16 text-on-deep md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 55% 55% at 50% 45%, rgba(0,194,255,0.12) 0%, transparent 62%)",
              }}
            />
          </div>

          <div className="container-x mx-auto max-w-3xl text-center">
            <Reveal>
              <h2
                className={`${playfair.className} text-[clamp(2.25rem,6vw,4.25rem)] font-medium leading-[1.06] tracking-tight text-white`}
              >
                Precision. <span style={{ color: "#00C2FF" }}>Impact.</span>{" "}
                Integrity.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-on-deep-muted md:text-lg">
                However you reach us, that&apos;s what you get.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/for-companies"
                  className="group inline-flex items-center gap-2.5 rounded-lg bg-green px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-green-700"
                >
                  For Companies
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/for-talent"
                  className="inline-flex items-center gap-2.5 rounded-lg border border-white/25 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-on-deep transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
                >
                  For Talent
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

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
