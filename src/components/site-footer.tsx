import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
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
      { label: "Industries", href: "/for-companies#industries" },
      { label: "48-Hour Shortlist", href: "/for-companies" },
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

export function SiteFooter() {
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

      {/* ───────── Main grid ───────── */}
      <div className="relative container-x py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand block */}
          <div>
            <Link href="/" className="inline-flex" aria-label={site.name}>
              <Image
                src="/querentia-logo.png"
                alt={site.name}
                width={568}
                height={145}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-on-deep-muted">
              Canada&apos;s most trusted partner for senior IT placements —
              delivered with precision, impact, and integrity since 2014.
            </p>

            <ul className="mt-7 space-y-3 text-sm">
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
              <li className="flex items-start gap-3 text-on-deep-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                {site.location}
              </li>
            </ul>

            <div className="mt-7">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-on-deep-muted">
                Follow us
              </p>
              <div className="flex items-center gap-2.5">
                {[
                  { Icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
                  { Icon: Twitter, href: site.twitter, label: "Twitter / X" },
                  { Icon: Instagram, href: site.instagram, label: "Instagram" },
                  { Icon: Facebook, href: site.facebook, label: "Facebook" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-on-deep-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan hover:bg-cyan/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col, i) => (
            <nav key={col.title} aria-label={col.title}>
              <div className="mb-5 flex items-center gap-2.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {col.title}
                </h4>
              </div>
              <ul className="space-y-3.5">
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
      </div>
    </footer>
  );
}
