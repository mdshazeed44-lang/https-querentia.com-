import Link from "next/link";
import Image from "next/image";
import { site, addresses } from "@/lib/site";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from "@/components/ui/icons";

const COLUMNS = [
  {
    title: "For Talent",
    links: [
      { label: "Open Mandates", href: "/jobs" },
      { label: "Why Querentia", href: "/for-talent" },
      { label: "Submit Your CV", href: "/contact" },
      { label: "Hot Jobs", href: "/hot-jobs" },
    ],
  },
  {
    title: "For Companies",
    links: [
      { label: "How We Hire", href: "/for-companies" },
      { label: "Industries", href: "/industries" },
      { label: "Our Expertise", href: "/for-companies#expertise" },
      { label: "Get a Shortlist", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

const SOCIALS = [
  { Icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
  { Icon: Twitter, href: site.twitter, label: "Twitter / X" },
  { Icon: Instagram, href: site.instagram, label: "Instagram" },
  { Icon: Facebook, href: site.facebook, label: "Facebook" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden bg-deep-2 text-on-deep">
      {/* ambient cyan glow at top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(0,194,255,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative container-x py-16 md:py-24">
        {/* ───────── Row 1 · brand + nav columns (aligned to top) ───────── */}
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-9 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex flex-col items-start gap-1"
              aria-label={site.name}
            >
              <span className="flex items-start">
                <Image
                  src="/querentia-wm.png"
                  alt={site.name}
                  width={529}
                  height={93}
                  className="h-10 w-auto brightness-0 invert"
                />
                <span className="ml-1 mt-0.5 text-[13px] font-medium leading-none text-white">
                  ®
                </span>
              </span>
              <span className="text-[9px] uppercase leading-none tracking-[0.25em] text-cyan">
                Talent · Trust · Thrive
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-on-deep-muted">
              A trusted talent partner connecting organizations with
              exceptional people who elevate teams and accelerate growth.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm">
              <li className="flex items-start gap-3 text-on-deep-muted">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <span className="flex flex-col">
                  <a
                    href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {site.phone}
                  </a>
                  <a
                    href={`tel:${site.phoneAlt.replace(/[^+\d]/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {site.phoneAlt}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3 text-on-deep-muted">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-[13px] text-on-deep-muted transition-colors hover:text-white"
                    >
                      <span className="inline-block h-px w-0 bg-cyan transition-all duration-300 group-hover:w-3" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* ───────── Row 2 · offices (full-width, 3-up) ───────── */}
        <div className="mt-10 border-t border-white/10 pt-8 md:mt-12 md:pt-9">
          <div className="mb-4 flex items-center gap-2.5 md:mb-5">
            <MapPin className="h-4 w-4 shrink-0 text-cyan" />
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-on-deep-muted">
              Our Offices
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-y-6">
            {addresses.map((office) => (
              <li key={office.city} className="text-[13px] leading-snug">
                <p className="font-semibold text-white">{office.city}</p>
                <address className="mt-1 not-italic text-on-deep-muted">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ───────── Bottom bar · copyright + social ───────── */}
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
            <p className="text-[12px] text-on-deep-muted">
              © {year} {site.legalName}. All rights reserved.
            </p>
            <p className="text-[12px] text-on-deep-muted">
              Designed by{" "}
              <a
                href="https://www.incrementors.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-deep-muted transition-colors hover:text-cyan"
              >
                Incrementors
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-on-deep-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan hover:bg-cyan/10 hover:text-white"
              >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
