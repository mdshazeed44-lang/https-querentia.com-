import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Check,
} from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Querentia — IT recruitment from Oakville, Ontario. Hire enterprise technology talent or explore your next role. Replies within one business day.",
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
    title: "Our office",
    note: "Meetings by appointment — we work across the Greater Toronto Area and Canada-wide.",
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
  { label: "Hire IT talent", value: "hire" },
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

      {/* ---------- HERO ---------- */}
      <section className="relative isolate overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="absolute inset-0 -z-10">
          <span
            className="absolute -left-40 -top-20 h-[34rem] w-[34rem] rounded-full blur-[140px]"
            style={{
              background:
                "radial-gradient(circle, rgba(0,194,255,0.12), transparent 70%)",
            }}
          />
          <span
            className="absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full blur-[140px]"
            style={{
              background:
                "radial-gradient(circle, rgba(0,194,255,0.10), transparent 70%)",
            }}
          />
          <span className="grain absolute inset-0" />
        </div>

        {/* Concentric circles + orbiting dots */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <div className="relative h-[26rem] w-[26rem]">
            <span className="absolute inset-0 rounded-full border border-cyan/15" />
            <span className="absolute inset-10 rounded-full border border-cyan/15" />
            <span className="absolute inset-20 rounded-full border border-cyan/10" />
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan" />
            <span className="absolute bottom-12 left-8 h-2 w-2 rounded-full bg-green" />
            <span className="absolute right-2 top-1/3 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
          </div>
        </div>

        <div className="container-x relative pb-16 pt-36 md:pb-20 md:pt-44">
          <div className="max-w-3xl">
            <Reveal>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                Contact Us
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1
                className="text-[clamp(2.5rem,7vw,5.25rem)] font-medium leading-[1.02] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let&apos;s talk <span className="text-cyan">talent.</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-on-deep-muted md:text-lg">
                One call starts it. Whether you&apos;re hiring or job hunting,
                you&apos;ll get an honest conversation with people who know
                enterprise IT.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <p className="mt-7 inline-flex items-center gap-2 text-sm text-on-deep-muted">
                <Check className="h-4 w-4 text-frost" />
                Replies within one business day
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- SPLIT MAIN: CHANNELS + FORM ---------- */}
      <section className="bg-page py-20 md:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            {/* LEFT — contact channels */}
            <div>
              <Reveal>
                <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  Direct Lines
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2
                  className="text-3xl font-medium tracking-tight text-ink md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Reach a real recruiter.
                </h2>
              </Reveal>

              <div className="mt-8 space-y-4">
                {channels.map((c, idx) => {
                  const Icon = c.icon;
                  return (
                    <Reveal key={c.title} delay={140 + idx * 90}>
                      <div className="lift group flex items-start gap-4 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-cyan/40">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-soft text-cyan transition-colors duration-300 group-hover:bg-cyan group-hover:text-deep">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-ink">
                            {c.title}
                          </p>
                          <div className="mt-1 space-y-0.5">
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
                          <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
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
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-cyan/15"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full border border-cyan/15"
                />

                <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  Send a Message
                </p>
                <h2
                  className="text-3xl font-medium tracking-tight text-ink md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Tell us what you need.
                </h2>

                {/* Reason chips */}
                <fieldset className="mt-6">
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
                  <Field name="company" label="Company" placeholder="Optional" />
                  <Field name="role" label="Role" placeholder="Optional" />
                </div>
                <div className="mt-4">
                  <label className="block text-xs font-medium text-ink-muted">
                    Message
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
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-green-700 sm:w-auto"
                >
                  Send message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="mt-4 text-xs text-ink-faint">
                  Submitting opens your email client with the details
                  pre-filled. Fields marked{" "}
                  <span className="text-red">*</span> are required.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- MAP BAND ---------- */}
      <section className="bg-page pb-20 md:pb-24">
        <div className="container-x">
          <Reveal>
            <div className="lift relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(13,27,42,0.2)] md:grid md:grid-cols-[0.9fr_1.1fr]">
              {/* Address block */}
              <div className="relative p-8 md:p-12">
                <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  Where to Find Us
                </p>
                <h2
                  className="text-3xl font-medium tracking-tight text-ink md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {site.legalName}
                </h2>

                <div className="mt-7 flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-soft text-cyan">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {site.location}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      Based in Oakville, serving the Greater Toronto Area and
                      clients across Canada. Meetings by appointment.
                    </p>
                  </div>
                </div>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan"
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

      {/* ---------- FINAL STRIP ---------- */}
      <section className="relative isolate overflow-hidden bg-deep-2 py-16 text-on-deep">
        <div aria-hidden className="absolute inset-0 -z-10">
          <span
            className="absolute left-1/2 top-1/2 h-[24rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
            style={{
              background:
                "radial-gradient(circle, rgba(0,194,255,0.10), transparent 70%)",
            }}
          />
          <span className="grain absolute inset-0" />
        </div>

        <div className="container-x text-center">
          <Reveal>
            <h2
              className="text-[clamp(1.875rem,4.5vw,3.25rem)] font-medium tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Precision. <span className="text-cyan">Impact.</span> Integrity.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-xl text-base text-on-deep-muted">
              However you reach us, that&apos;s what you get.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              <Link
                href="/for-companies"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan"
              >
                For Companies
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/for-talent"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan"
              >
                For Talent
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  placeholder,
  required,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
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
        className="mt-1.5 w-full rounded-xl border border-border bg-page px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink-faint focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/15"
      />
    </label>
  );
}
