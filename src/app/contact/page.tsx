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
    "Get in touch with Querentia — Toronto-area IT recruitment. Hire enterprise tech talent or explore open roles.",
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
      { "@type": "ContactPoint", contactType: "customer service", email: site.email, telephone: site.phone, areaServed: "CA", availableLanguage: ["English"] },
      { "@type": "ContactPoint", contactType: "sales", email: site.email, telephone: site.phoneAlt, areaServed: "CA", availableLanguage: ["English"] },
    ],
  },
};

const channels = [
  { icon: Mail, title: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, title: "Call our team", value: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, "")}` },
  { icon: Linkedin, title: "LinkedIn", value: "@querentia", href: site.linkedin },
];

const reasons = [
  { label: "Hire IT talent", value: "hire" },
  { label: "Looking for a role", value: "candidate" },
  { label: "Resume / Interview", value: "services" },
  { label: "Something else", value: "general" },
];

const LINE_1 = ["Let's"];
const LINE_2 = ["talk."];

export default function ContactPage() {
  let i = 0;
  const w = () => {
    const d = 0.1 + i * 0.07;
    i++;
    return { animationDelay: `${d}s` } as React.CSSProperties;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* HERO + FORM */}
      <section className="relative isolate overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 animate-gradient-pan"
            style={{
              background:
                "linear-gradient(120deg, #0b0c0a 0%, #1a1c19 30%, #1f3a2a 60%, #1a1c19 100%)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -left-32 top-1/4 h-[36rem] w-[36rem] rounded-full blur-[140px]"
            style={{ background: "radial-gradient(circle, rgba(143,184,159,0.18), transparent 70%)" }}
          />
          <span className="grain absolute inset-0" />
        </div>

        <div className="container-x relative pt-32 pb-20 md:pt-44 md:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* LEFT */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
                  </span>
                  {site.location}
                </span>
              </Reveal>

              <h1 className="mt-7 text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-[0.95] tracking-tight">
                {LINE_1.map((word) => (
                  <span key={word} className="word mr-[0.22em]" style={w()}>
                    {word}
                  </span>
                ))}
                <br />
                {LINE_2.map((word) => (
                  <span key={word} className="word mr-[0.22em] text-white/70" style={w()}>
                    {word}
                  </span>
                ))}
              </h1>

              <Reveal delay={400}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
                  Hire technology talent, explore a new role, or simply say
                  hello — we typically respond within one business day.
                </p>
              </Reveal>

              {/* Channels */}
              <div className="mt-9 space-y-3">
                {channels.map((c, idx) => {
                  const Icon = c.icon;
                  const external = c.href.startsWith("http");
                  return (
                    <Reveal key={c.title} delay={520 + idx * 100}>
                      <a
                        href={c.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group lift flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-4 hover:border-sage/40"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/15 text-sage transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-sage group-hover:text-deep">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-white">{c.title}</p>
                          <p className="text-xs text-white/55">{c.value}</p>
                        </div>
                      </a>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — form */}
            <Reveal delay={300}>
              <form
                action={`mailto:${site.email}?subject=Querentia%20%E2%80%94%20new%20enquiry`}
                method="post"
                encType="text/plain"
                className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur-md md:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                  Send a message
                </p>
                <h2
                  className="mt-2 text-3xl font-medium tracking-tight text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Tell us what you need.
                </h2>

                {/* Reason chips */}
                <fieldset className="mt-5">
                  <legend className="text-xs font-medium text-white/55">I&apos;m here to…</legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {reasons.map((r, idx) => (
                      <label key={r.value} className="group cursor-pointer">
                        <input type="radio" name="reason" value={r.value} defaultChecked={idx === 0} className="peer sr-only" />
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/65 transition-all peer-checked:border-sage peer-checked:bg-sage/15 peer-checked:text-white">
                          <Check className="h-3 w-3 opacity-0 peer-checked:opacity-100" />
                          {r.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Field name="name" label="Your name" required placeholder="Jane Smith" />
                  <Field name="email" label="Work email" required placeholder="jane@company.com" type="email" />
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Field name="company" label="Company" placeholder="Optional" />
                  <Field name="role" label="Role" placeholder="Optional" />
                </div>
                <div className="mt-3">
                  <label className="block text-xs font-medium text-white/55">
                    Message
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Role, location, timeline — anything that helps."
                      className="mt-1 w-full rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-sage focus:bg-white/[0.08] focus:outline-none"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="magnetic shine mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_-12px_rgba(38,112,68,0.5)] transition-colors hover:bg-green-700 sm:w-auto"
                >
                  Send message <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OFFICE / MAP */}
      <section className="bg-page py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="lift relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(11,12,10,0.2)] md:grid md:grid-cols-[1fr_1.1fr]">
              <div className="relative p-8 md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">Where to find us</p>
                <h2
                  className="mt-3 text-3xl font-medium tracking-tight text-deep md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Querentia Inc.
                </h2>
                <ul className="mt-7 space-y-3 text-sm text-ink">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-soft text-green">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span>
                      <strong className="text-deep">Office</strong>
                      <br />
                      <span className="text-ink-muted">{site.location}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-soft text-green">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span>
                      <strong className="text-deep">Email</strong>
                      <br />
                      <a href={`mailto:${site.email}`} className="text-ink-muted hover:text-green">{site.email}</a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-soft text-green">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>
                      <strong className="text-deep">Phone</strong>
                      <br />
                      <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="text-ink-muted hover:text-green">{site.phone}</a>
                      <br />
                      <a href={`tel:${site.phoneAlt.replace(/[^+\d]/g, "")}`} className="text-ink-muted hover:text-green">{site.phoneAlt}</a>
                    </span>
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/jobs"
                    className="magnetic inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
                  >
                    Browse open roles <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-deep hover:border-green hover:text-green"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>

              <div className="relative min-h-[280px] md:min-h-full">
                <iframe
                  title="Querentia office — Oakville, Ontario, Canada"
                  src="https://maps.google.com/maps?q=Oakville,%20Ontario,%20Canada&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/95 px-3 py-1.5 text-xs font-medium text-deep shadow-md backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                  </span>
                  Oakville, ON
                </div>
              </div>
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
    <label className="block text-xs font-medium text-white/55">
      {label}
      {required ? <span className="text-sage"> *</span> : null}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1 w-full rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/45 focus:border-sage focus:bg-white/[0.08] focus:outline-none"
      />
    </label>
  );
}
