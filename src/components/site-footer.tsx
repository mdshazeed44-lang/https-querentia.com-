import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram, Twitter, ArrowRight } from "@/components/ui/icons";

const groups = [
  {
    title: "Services",
    links: [
      { label: "Talent Services", href: "/" },
      { label: "Resume Services", href: "/resume-services" },
      { label: "Interview Training", href: "/interview-training" },
      { label: "Open Roles", href: "/jobs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "For Candidates",
    links: [
      { label: "Find Jobs", href: "/jobs" },
      { label: "Submit your CV", href: "/contact" },
      { label: "Resume help", href: "/resume-services" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-deep-2 text-on-deep">
      {/* Newsletter / CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center md:py-12">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
              Hire the right people — faster.
            </h2>
            <p className="mt-2 text-sm text-on-deep-muted">
              Tell us what you need. Qualified shortlists in 48 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-[1.02] hover:bg-green-700"
          >
            Talk to our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="container-x py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand block */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/querentia-icon.png" alt="" width={150} height={150} className="h-9 w-9" />
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {site.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-deep-muted">
              Specialist IT recruitment, based in {site.location}. Trusted talent
              partners for Canada&apos;s leading enterprises.
            </p>

            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-start gap-2.5 text-on-deep-muted">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <span>
                  <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                    {site.phone}
                  </a>
                  <br />
                  <a href={`tel:${site.phoneAlt.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                    {site.phoneAlt}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-on-deep-muted">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-on-deep-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                {site.location}
              </li>
            </ul>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Facebook, href: site.facebook, label: "Facebook" },
                { Icon: Instagram, href: site.instagram, label: "Instagram" },
                { Icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
                { Icon: Twitter, href: site.twitter, label: "Twitter / X" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-on-deep-muted transition-all duration-300 hover:scale-105 hover:border-blue/40 hover:bg-white/[0.1] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
                {g.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-on-deep-muted transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-on-deep-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {site.legalName} All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <span>Built with care in Toronto.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
