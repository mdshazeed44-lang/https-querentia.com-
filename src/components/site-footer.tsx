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
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-deep-2 text-on-deep">
      {/* Top strip — CTA */}
      <div className="border-b border-white/10">
        <div className="container-x grid items-center gap-6 py-12 md:grid-cols-[1.4fr_1fr] md:py-16">
          <h2
            className="text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The best hires come through people you trust.
          </h2>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              Browse roles
            </Link>
          </div>
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
                className="text-xl font-medium text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {site.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-deep-muted">
              Specialist IT recruitment, based in {site.location}.
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

            <div className="mt-6 flex items-center gap-2">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-on-deep-muted transition-all hover:scale-105 hover:border-sage hover:text-white"
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

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
              For Candidates
            </h4>
            <ul className="mt-4 space-y-3">
              <li><Link href="/jobs" className="text-sm text-on-deep-muted hover:text-white">Find Jobs</Link></li>
              <li><Link href="/contact" className="text-sm text-on-deep-muted hover:text-white">Submit your CV</Link></li>
              <li><Link href="/resume-services" className="text-sm text-on-deep-muted hover:text-white">Resume help</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-on-deep-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {site.legalName} All rights reserved.</p>
          <p>Built with care in Oakville, Ontario.</p>
        </div>
      </div>
    </footer>
  );
}
