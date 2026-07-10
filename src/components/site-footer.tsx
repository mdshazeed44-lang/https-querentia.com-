import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { site, addresses } from "@/lib/site";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from "@/components/ui/icons";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

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
      {/* oversized wordmark watermark — subtle premium texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden"
      >
        <Image
          src="/querentia-wm.png"
          alt=""
          width={529}
          height={93}
          className="w-[130%] max-w-none translate-y-[26%] opacity-[0.035] brightness-0 invert sm:w-[112%]"
        />
      </div>

      {/* ───────── Top · brand statement + dual CTA ───────── */}
      <div className="relative border-b border-white/10">
        <div className="container-x flex flex-col gap-7 py-11 md:flex-row md:items-center md:justify-between md:gap-10 md:py-12">
          <div>
            <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="inline-block h-px w-8 bg-cyan/60" />
              Talent · Trust · Thrive
            </p>
            <h2
              className={`${playfair.className} text-balance text-[clamp(1.6rem,3.2vw,2.5rem)] font-medium leading-[1.12] tracking-tight text-white`}
            >
              The right people change{" "}
              <span className="text-cyan">everything.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/for-companies"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-green px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-white shadow-[0_16px_40px_-16px_rgba(255,107,43,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700"
            >
              Hire talent
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/for-talent"
              className="inline-flex items-center gap-2.5 rounded-lg border border-white/25 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:border-cyan/60 hover:bg-white/5"
            >
              Find your role
            </Link>
          </div>
        </div>
      </div>

      {/* ───────── Main · brand + nav columns ───────── */}
      <div className="relative container-x py-14 md:py-16">
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

            <ul className="mt-6 space-y-2.5 text-sm">
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

            {/* socials */}
            <div className="mt-6 flex items-center gap-2.5">
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

        {/* ───────── Offices — balanced 3-up ───────── */}
        <div className="mt-12 grid gap-8 border-t border-white/10 pt-9 sm:grid-cols-2 lg:grid-cols-3 md:mt-14 md:pt-10">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-cyan" />
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-on-deep-muted">
                Our Offices
              </p>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-on-deep-muted">
              Serving talent and employers across Canada. Meetings by
              appointment.
            </p>
          </div>
          {addresses.map((office) => (
            <div
              key={office.city}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-[13px] leading-snug transition-colors duration-300 hover:border-cyan/30 hover:bg-white/[0.04]"
            >
              <p className="font-semibold text-white">{office.city}</p>
              <address className="mt-1.5 not-italic text-on-deep-muted">
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          ))}
        </div>
      </div>

      {/* ───────── Bottom bar · copyright + back-to-top ───────── */}
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
            <p className="text-[12px] text-on-deep-muted">
              © {year} {site.legalName}. All rights reserved.
            </p>
            <p className="text-[12px] text-on-deep-muted">
              Querentia® is a registered trademark in Canada.
            </p>
          </div>
          <a
            href="#main"
            className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-on-deep-muted transition-colors hover:text-cyan"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-cyan">
              <ArrowRight className="h-3 w-3 -rotate-90" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
