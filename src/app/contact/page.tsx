import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Building,
  Linkedin,
  Check,
} from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Querentia — Toronto's specialist IT recruitment firm. Hire enterprise tech talent, explore open roles, or just say hello.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Querentia",
    description:
      "Toronto IT recruitment — reach our team about hiring tech talent or open roles.",
    url: `${site.url}/contact`,
    type: "article",
  },
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
        availableLanguage: ["English"],
        areaServed: "CA",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phoneAlt,
        availableLanguage: ["English"],
        areaServed: "CA",
      },
    ],
  },
};

const channels = [
  {
    icon: Mail,
    title: "Email us",
    desc: "Best for detailed briefs and shortlist requests.",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    title: "Call our team",
    desc: `Direct line — also reach us at ${site.phoneAlt}.`,
    value: site.phone,
    href: `tel:${site.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: Linkedin,
    title: "Connect on LinkedIn",
    desc: "Follow along for hiring insights and open-role drops.",
    value: "@querentia",
    href: site.linkedin,
  },
];

const reasons = [
  { label: "Hire IT talent", value: "hire" },
  { label: "I'm looking for a role", value: "candidate" },
  { label: "Resume / interview services", value: "services" },
  { label: "Something else", value: "general" },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* HERO */}
      <section className="relative flex min-h-dvh flex-col overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="animate-aurora absolute -top-32 left-[20%] h-[36rem] w-[36rem] rounded-full blur-[160px]"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.45), transparent 65%)" }}
          />
          <div
            className="animate-aurora-2 absolute -bottom-20 right-[15%] h-[30rem] w-[30rem] rounded-full blur-[160px]"
            style={{ background: "radial-gradient(circle, rgba(14,165,233,0.3), transparent 70%)" }}
          />
        </div>

        <div className="container-x relative flex flex-1 items-center pt-28 pb-10 md:pt-32 md:pb-14">
          <div className="grid w-full items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* LEFT — intro + channels */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-on-deep backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-blue" />
                  {site.location}
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
                  Let&apos;s <span className="text-blue">talk</span>.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-5 max-w-md text-base leading-relaxed text-on-deep-muted md:text-lg">
                  Hire technology talent, explore a new role, or simply say
                  hello — we typically respond within one business day.
                </p>
              </Reveal>

              {/* Channels list */}
              <div className="mt-9 space-y-3">
                {channels.map((c, i) => {
                  const Icon = c.icon;
                  const external = c.href.startsWith("http");
                  return (
                    <Reveal key={c.title} delay={320 + i * 100}>
                      <a
                        href={c.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/40 hover:bg-white/[0.08]"
                      >
                        <span
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                          style={{ background: "linear-gradient(135deg, var(--color-green), var(--color-blue))" }}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-white">{c.title}</p>
                          <p className="text-xs text-on-deep-muted">{c.desc}</p>
                        </div>
                        <span className="text-xs font-semibold text-sage">{c.value}</span>
                      </a>
                    </Reveal>
                  );
                })}
              </div>

              {/* Office line */}
              <Reveal delay={620}>
                <div className="mt-6 flex items-start gap-3 text-sm text-on-deep-muted">
                  <Building className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                  <span>
                    <strong className="text-white">Office</strong>
                    <br />
                    {site.location}
                  </span>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — form */}
            <Reveal delay={200}>
              <form
                action={`mailto:${site.email}?subject=Querentia%20%E2%80%94%20new%20enquiry`}
                method="post"
                encType="text/plain"
                className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur-md md:p-8"
              >
                <span
                  aria-hidden
                  className="animate-aurora pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
                  style={{ background: "radial-gradient(circle, rgba(37,99,235,0.45), transparent 70%)" }}
                />

                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
                    Send a message
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                    Tell us what you need.
                  </h2>

                  {/* Reason chips */}
                  <fieldset className="mt-6">
                    <legend className="text-xs font-medium text-on-deep-muted">
                      I&apos;m here to…
                    </legend>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {reasons.map((r, i) => (
                        <label
                          key={r.value}
                          className="group cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="reason"
                            value={r.value}
                            defaultChecked={i === 0}
                            className="peer sr-only"
                          />
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-on-deep-muted transition-all duration-200 hover:border-white/30 peer-checked:border-blue peer-checked:bg-blue/15 peer-checked:text-white">
                            <Check className="h-3 w-3 opacity-0 peer-checked:opacity-100" />
                            {r.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Field name="name" label="Your name" placeholder="Jane Smith" required />
                    <Field name="email" label="Work email" placeholder="jane@company.com" type="email" required />
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <Field name="company" label="Company" placeholder="Optional" />
                    <Field name="role" label="Role / Title" placeholder="Optional" />
                  </div>
                  <div className="mt-3">
                    <label className="block text-xs font-medium text-on-deep-muted">
                      Message
                      <textarea
                        name="message"
                        rows={4}
                        required
                        placeholder="A short brief — role, location, timeline, anything that helps us help you."
                        className="mt-1 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-on-deep-muted/55 focus:border-blue focus:bg-white/[0.08] focus:outline-none"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-[1.02] hover:bg-green-700 sm:w-auto"
                  >
                    Send message <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="mt-4 text-xs text-on-deep-muted/70">
                    By submitting, you agree to be contacted by our team. We
                    never share your details.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>

        {/* Bottom curve */}
        <svg
          aria-hidden
          viewBox="0 0 1440 66"
          preserveAspectRatio="none"
          className="-mb-1.5 block h-12 w-full md:h-16"
        >
          <path d="M0 66V24C240 50 480 60 720 50C960 40 1200 12 1440 26V66H0Z" fill="var(--color-page)" />
        </svg>
      </section>

      {/* OFFICE / MAP CARD */}
      <section className="bg-page py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_80px_-30px_rgba(15,27,51,0.3)] md:grid md:grid-cols-[1fr_1.1fr]">
              {/* LEFT — copy */}
              <div className="relative p-8 md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                  Where to find us
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-deep md:text-4xl">
                  Querentia Inc.
                </h2>
                <p className="mt-4 text-ink-muted">
                  Our team is based in Toronto, working with enterprise clients
                  across Canada. Drop us a note — we&apos;ll route your message
                  to the right person within the day.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-ink">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-soft text-green-700">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span>
                      <strong className="text-deep">Office</strong>
                      <br />
                      <span className="text-ink-muted">{site.location}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-soft text-green-700">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span>
                      <strong className="text-deep">Email</strong>
                      <br />
                      <a href={`mailto:${site.email}`} className="text-ink-muted hover:text-green-700">
                        {site.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-soft text-green-700">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>
                      <strong className="text-deep">Phone</strong>
                      <br />
                      <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="text-ink-muted hover:text-green-700">
                        {site.phone}
                      </a>
                      <br />
                      <a href={`tel:${site.phoneAlt.replace(/[^+\d]/g, "")}`} className="text-ink-muted hover:text-green-700">
                        {site.phoneAlt}
                      </a>
                    </span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/jobs" variant="primary">
                    Browse open roles <ArrowRight className="h-4 w-4" />
                  </Button>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border-2 bg-white px-5 py-3 text-sm font-medium text-deep transition-all hover:border-green hover:text-green-700"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>

              {/* RIGHT — map (Google Maps embed, no API key needed) */}
              <div className="relative min-h-[320px] md:min-h-full">
                <iframe
                  title="Querentia office location — Oakville, Ontario, Canada"
                  src="https://maps.google.com/maps?q=Oakville,%20Ontario,%20Canada&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "linear-gradient(110deg, rgba(255,255,255,0.3), transparent 40%)" }}
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

      {/* QUICK LINKS */}
      <section className="bg-page-2 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-deep md:text-4xl">
                Not sure where to start?
              </h2>
              <p className="mt-3 text-ink-muted">
                Jump straight to what you need.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { title: "Hire IT talent", desc: "For employers building delivery teams.", href: "/" },
              { title: "Resume Services", desc: "ATS-ready resumes and cover letters.", href: "/resume-services" },
              { title: "Interview Training", desc: "Coaching from senior recruiters.", href: "/interview-training" },
            ].map((q, i) => (
              <Reveal key={q.title} delay={i * 100}>
                <Link
                  href={q.href}
                  className="ring-grad lift group flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-[0_1px_3px_rgba(15,27,51,0.05)]"
                >
                  <div>
                    <h3 className="text-base font-semibold text-deep transition-colors duration-300 group-hover:text-green-700 md:text-lg">
                      {q.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">{q.desc}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-soft text-green-700 transition-all duration-300 group-hover:bg-green group-hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* Small field helper */
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
    <label className="block text-xs font-medium text-on-deep-muted">
      {label}
      {required ? <span className="text-blue"> *</span> : null}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-on-deep-muted/55 focus:border-blue focus:bg-white/[0.08] focus:outline-none"
      />
    </label>
  );
}
