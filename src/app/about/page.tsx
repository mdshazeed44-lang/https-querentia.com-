import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { HeroTalentOrbit } from "@/components/ui/hero-talent-orbit";
import { ABOUT_ORBIT_LOGOS } from "@/components/ui/about-orbit-logos";
import {
  ArrowRight,
  Briefcase,
  Shield,
  Star,
  UserCheck,
  Chat,
  Search,
  Bolt,
  Target,
  Clock,
  Check,
  Mail,
  Phone,
  MapPin,
} from "@/components/ui/icons";
import { site, stats, clients, industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Querentia is the most trusted partner for high-quality, high-impact IT talent in Canada — delivered with speed, precision, and integrity since 2014.",
  alternates: { canonical: "/about" },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${site.url}/about`,
  mainEntity: {
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    foundingDate: site.founded,
    email: site.email,
    telephone: site.phone,
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: site.locality,
        addressRegion: site.region,
        addressCountry: site.country,
      },
    },
    employee: [
      { "@type": "Person", name: "Seema Makhija", jobTitle: "Director" },
      { "@type": "Person", name: "Hemant Makhija", jobTitle: "Advisor" },
    ],
  },
};

/* ── What we do — engagement models (mirrors live job board types) ─────── */
const engagements = [
  {
    icon: UserCheck,
    title: "Permanent hires",
    desc: "Full-time technology professionals — engineers, architects, and program leaders — matched to your stack, your team, and your culture for the long run.",
  },
  {
    icon: Clock,
    title: "Contract & contract-to-hire",
    desc: "Senior contractors for programs, backfills, and surge capacity — with the option to convert when the fit is proven on the ground.",
  },
  {
    icon: Target,
    title: "Specialist & niche search",
    desc: "Hard-to-find skills across 30+ disciplines — from cloud, data, and cybersecurity to SAP, Pega, Guidewire, and enterprise architecture.",
  },
];

/* ── How we hire — the process behind the 48-hour shortlist ────────────── */
const process = [
  {
    num: "01",
    icon: Chat,
    title: "Brief us once",
    desc: "A single intake call — role, stack, team, and culture. We ask the questions internal recruiters ask.",
  },
  {
    num: "02",
    icon: Search,
    title: "Source & screen",
    desc: "We work an active network, not job-board keywords. Every profile is vetted by a recruiter who understands the technology.",
  },
  {
    num: "03",
    icon: Bolt,
    title: "Shortlist in 48 hours",
    desc: "A qualified shortlist in your inbox — pre-screened against the role, ready to interview.",
  },
  {
    num: "04",
    icon: Check,
    title: "Interview to offer",
    desc: "Honest feedback both ways, momentum to offer, and support through onboarding. 94% of placements are still delivering a year later.",
  },
];

const whoWeAre = [
  {
    icon: Briefcase,
    title: "A specialist recruitment firm",
    desc: "An IT recruitment practice based in Oakville, Ontario — placing technology professionals in permanent and contract roles with some of the biggest organizations in Canada since 2014.",
  },
  {
    icon: Star,
    title: "A world-class hiring experience",
    desc: "We are committed to a hiring experience that feels first-class on both sides of the table — responsive recruiters, honest feedback, and momentum from intake to offer.",
  },
  {
    icon: UserCheck,
    title: "Top industry talent, on call",
    desc: "We specialize in providing top industry talent across cloud, data, security, and engineering — drawn from an active network and matched to stack, team, and culture.",
  },
  {
    icon: Shield,
    title: "Trusted talent partners",
    desc: "Industry experts who understand exactly what internal recruiters and hiring leaders look for — and who deliver against it with precision and integrity.",
  },
];

const values = [
  {
    num: "01",
    title: "Precision.",
    desc: "Shortlists tuned to your stack, your team, and your culture — never keyword-matched resume floods. Every candidate we present has been vetted by a recruiter who actually understands the technology.",
  },
  {
    num: "02",
    title: "Impact.",
    desc: "We place people who move roadmaps, not just fill seats. A 94% placement retention rate means our matches keep delivering long after the start date — for the client and the candidate.",
  },
  {
    num: "03",
    title: "Integrity.",
    desc: "Honest pipelines, real timelines, and straight answers — for employers and candidates alike. Trust is the only metric that compounds, and we protect it on every search.",
  },
];

const leadership = [
  {
    name: "Seema Makhija",
    role: "Director",
    focus: "Recruitment practice · Search delivery",
    bio: "Seema leads Querentia's recruitment practice, guiding every search from intake to offer. She has spent her career placing technology professionals with some of Canada's largest consulting, banking, and enterprise organizations.",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hemant Makhija",
    role: "Advisor",
    focus: "Enterprise hiring strategy · Client delivery",
    bio: "Hemant advises Querentia on enterprise hiring strategy and client delivery. His background spans large-scale technology programs and engineering leadership, helping clients build teams that ship.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  },
];

/* ── Company fact sheet — at-a-glance details ──────────────────────────── */
const facts = [
  { label: "Founded", value: `${site.founded} · Oakville, Ontario` },
  { label: "What we do", value: "Specialist IT recruitment — permanent & contract" },
  { label: "Our motto", value: site.tagline },
  { label: "Coverage", value: "Enterprise clients across Canada" },
  { label: "Disciplines", value: "30+ specializations · 5 practice areas" },
  { label: "Track record", value: "500+ placements · 94% retention" },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ---------- 1. HERO — homepage-style: copy left, figure pinned to
           the section's bottom edge on the right ---------- */}
      <section className="relative isolate flex h-screen min-h-[680px] flex-col justify-center overflow-hidden bg-deep-2 pb-14 pt-24 text-on-deep md:pb-16 md:pt-24 lg:pb-0">
        {/* Cyan radial ambient */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 45% at 70% 20%, rgba(0,194,255,0.12) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 20% 100%, rgba(0,194,255,0.10) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="container-x relative z-10 grid items-center gap-16 lg:h-full lg:flex-1 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* ---------- LEFT — copy ---------- */}
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span
                  className="text-sm tracking-normal"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  I
                </span>
                <span className="inline-block h-px w-6 bg-current opacity-50" />
                <span>About Us · Est. {site.founded}</span>
                <span className="relative ml-1 flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
                </span>
              </p>
            </Reveal>

            <Reveal delay={140}>
              <h1
                className="mx-auto text-balance font-medium text-on-deep lg:mx-0"
                style={{
                  fontSize: "clamp(1.85rem, 3.9vw, 3.25rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.022em",
                  maxWidth: "17ch",
                }}
              >
                The most trusted partner
                <br className="hidden sm:block" />{" "}
                <span
                  className="text-cyan"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                  }}
                >
                  in IT talent.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-on-deep-muted md:text-[15px] lg:mx-0">
                Since {site.founded}, Querentia has delivered high-quality,
                high-impact technology talent to Canada&apos;s leading
                enterprises — with unmatched speed, precision, and integrity.
              </p>
            </Reveal>

            <Reveal delay={440}>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <MagneticButton
                  href="/for-companies"
                  className="group inline-flex items-center bg-green px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-green-700"
                >
                  Hire Talent
                  <ArrowRight className="ml-2.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </MagneticButton>
                <Link
                  href="/for-talent"
                  className="group inline-flex items-center gap-2.5 border border-white/25 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.25em] text-on-deep transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
                >
                  Find Work
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              </div>
            </Reveal>

            {/* Credibility row — instant trust signals */}
            <Reveal delay={580}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-white/15 pt-5 lg:justify-start">
                {[
                  { num: "94%", label: "Retention" },
                  { num: "48h", label: "Shortlist" },
                  { num: "10+", label: "Years" },
                  { num: "500+", label: "Placements" },
                ].map((s) => (
                  <div key={s.num} className="flex items-baseline gap-2">
                    <span
                      className="text-[1.1rem] font-medium leading-none tracking-tight text-on-deep"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.num}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-on-deep-muted">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ---------- RIGHT — orbit figure, pinned to section bottom ---------- */}
          <Reveal delay={250} className="hidden lg:block lg:self-stretch">
            {/* overshoot > max parallax+float lift so the figure never reveals
                a gap above the section edge (same as homepage hero) */}
            <div className="flex h-full items-end justify-center lg:-mb-8">
              <HeroTalentOrbit
                imgSrc="/people/about-hero.png"
                imgAlt="Querentia — the people behind the practice"
                logos={ABOUT_ORBIT_LOGOS}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 2. FACT SHEET — the company at a glance ---------- */}
      <section className="border-b border-border bg-card">
        <div className="container-x py-12 md:py-14">
          <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((f, idx) => (
              <Reveal key={f.label} delay={idx * 70}>
                <div className="border-l-2 border-cyan/40 pl-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
                    {f.label}
                  </p>
                  <p className="mt-1.5 text-[15px] font-medium text-ink">
                    {f.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 3. OUR STORY + MOTTO ---------- */}
      <section className="bg-page py-20 md:py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="font-mono">II</span>
                <span className="inline-block h-px w-8 bg-cyan/60" />
                Our Story
              </p>
            </Reveal>
            <Reveal delay={130}>
              <h2
                className="text-[clamp(1.9rem,4vw,3.25rem)] font-medium leading-[1.08] tracking-tight text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We build,{" "}
                <span className="text-cyan">attract and ignite</span> talent.
              </h2>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
                Querentia was founded in {site.founded} in Oakville, Ontario, as
                a specialist IT recruitment firm with a simple conviction:
                hiring should be fast, precise, and honest. As industry experts,
                we know exactly what internal recruiters and hiring leaders look
                for — and we use that insight to place technology professionals
                in permanent and contract roles with some of the biggest
                organizations in Canada.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
                A decade on, that conviction has compounded into 500+ successful
                placements, a 48-hour average shortlist, and a 94% placement
                retention rate — across cloud, data, security, engineering, and
                30+ specialist disciplines.
              </p>
            </Reveal>
          </div>

          {/* Motto card */}
          <Reveal delay={250}>
            <div className="grain relative overflow-hidden rounded-3xl bg-deep-2 p-8 text-on-deep md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,194,255,0.22), transparent 70%)",
                }}
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
                Our motto
              </p>
              <p
                className="mt-5 text-3xl leading-tight md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Precision.
                <br />
                Impact.
                <br />
                Integrity.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-on-deep-muted">
                Three words on every search — whether you&apos;re building a
                team or building a career.
              </p>
              <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-on-deep-muted">
                <MapPin className="h-4 w-4 text-cyan" />
                Headquartered in {site.location}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 4. WHAT WE DO ---------- */}
      <section className="bg-page-2 py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="font-mono">III</span>
              <span className="inline-block h-px w-8 bg-cyan/60" />
              What We Do
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="max-w-2xl text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.08] tracking-tight text-ink">
              Specialist IT recruitment,{" "}
              <span
                className="text-cyan"
                style={{ fontFamily: "var(--font-display)" }}
              >
                three ways.
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {engagements.map((e, idx) => (
              <Reveal key={e.title} delay={idx * 110}>
                <div className="group h-full rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_24px_50px_-28px_rgba(13,27,42,0.3)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-soft text-cyan transition-transform duration-300 group-hover:scale-110">
                    <e.icon className="h-5 w-5" />
                  </span>
                  <h3
                    className="mt-5 text-lg font-medium tracking-tight text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {e.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                    {e.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Industries served + trusted-by strip */}
          <Reveal delay={300}>
            <div className="mt-10 grid gap-8 rounded-3xl border border-border bg-card p-7 md:p-9 lg:grid-cols-2">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
                  Industries we serve
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <span
                      key={ind.title}
                      className="rounded-full border border-border bg-page px-3.5 py-1.5 text-xs font-medium text-ink-muted transition-colors duration-300 hover:border-cyan hover:text-ink"
                    >
                      {ind.title}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:border-l lg:border-border lg:pl-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
                  Trusted by Canada&apos;s enterprise IT programs
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
                  {clients.map((c) => (
                    <span
                      key={c}
                      className="text-lg font-semibold tracking-tight text-ink-faint transition-colors duration-300 hover:text-ink"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 5. HOW WE HIRE — process ---------- */}
      <section className="bg-page py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="font-mono">IV</span>
              <span className="inline-block h-px w-8 bg-cyan/60" />
              How We Work
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="max-w-2xl text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.08] tracking-tight text-ink">
              From intake to offer,{" "}
              <span
                className="text-cyan"
                style={{ fontFamily: "var(--font-display)" }}
              >
                with momentum.
              </span>
            </h2>
          </Reveal>

          <div className="relative mt-14">
            {/* connector line (desktop) */}
            <span
              aria-hidden
              className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent lg:block"
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {process.map((p, idx) => (
                <Reveal key={p.num} delay={idx * 130}>
                  <div className="group relative">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan/40 bg-page text-cyan transition-all duration-300 group-hover:bg-cyan group-hover:text-white">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
                      Step {p.num}
                    </p>
                    <h3
                      className="mt-2 text-lg font-medium tracking-tight text-ink"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 6. WHO WE ARE ---------- */}
      <section className="bg-page-2 py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="font-mono">V</span>
              <span className="inline-block h-px w-8 bg-cyan/60" />
              Who We Are
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="max-w-2xl text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.08] tracking-tight text-ink">
              Recruiters by trade.{" "}
              <span
                className="text-cyan"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Partners by design.
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whoWeAre.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 110}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 transition-colors duration-300 hover:border-cyan/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-soft text-cyan">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3
                    className="mt-5 text-lg font-medium tracking-tight text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 7. VALUES ---------- */}
      <section className="relative isolate overflow-hidden bg-deep-2 py-20 text-on-deep md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,194,255,0.10) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="container-x">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="font-mono">VI</span>
              <span className="inline-block h-px w-8 bg-cyan/60" />
              Our Values
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-on-deep">
              Three words we answer to
              <br />
              <span
                className="text-cyan"
                style={{ fontFamily: "var(--font-display)" }}
              >
                on every single search.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {values.map((v, idx) => (
              <Reveal key={v.num} delay={idx * 140}>
                <div className="border-t border-cyan/25 pt-6">
                  <p className="text-[12px] font-semibold tracking-[0.3em] text-cyan">
                    {v.num}
                  </p>
                  <h3
                    className="mt-4 text-3xl font-medium tracking-tight text-on-deep md:text-4xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-on-deep-muted">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 8. TRACK RECORD — success metrics ---------- */}
      <section className="bg-page py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-5 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="font-mono">VII</span>
                <span className="inline-block h-px w-8 bg-cyan/60" />
                Track Record
                <span className="inline-block h-px w-8 bg-cyan/60" />
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.08] tracking-tight text-ink">
                A decade of placements{" "}
                <span
                  className="text-cyan"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  that stick.
                </span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-y-12 border-y border-border py-12 md:grid-cols-4 md:divide-x md:divide-border">
            {stats.map((s, idx) => (
              <Reveal key={s.label} delay={idx * 110}>
                <div className="px-6 text-center">
                  <p
                    className="text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-none tracking-tight text-cyan"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-4 text-sm font-medium text-ink">{s.label}</p>
                  <p className="mt-1 text-xs text-ink-muted">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 9. LEADERSHIP / FOUNDERS ---------- */}
      <section className="bg-page pb-20 md:pb-24">
        <div className="container-x">
          <Reveal>
            <p className="mb-5 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="font-mono">VIII</span>
              <span className="inline-block h-px w-8 bg-cyan/60" />
              Leadership
              <span className="inline-block h-px w-8 bg-cyan/60" />
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mx-auto max-w-2xl text-center text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.08] tracking-tight text-ink">
              The people{" "}
              <span
                className="text-cyan"
                style={{ fontFamily: "var(--font-display)" }}
              >
                behind the practice.
              </span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            {leadership.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 140}>
                <div className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition-colors duration-300 hover:border-cyan/40">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={p.img}
                      alt={`${p.name}, ${p.role} at Querentia`}
                      fill
                      sizes="(min-width: 768px) 28rem, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-2/85 via-deep-2/10 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3
                        className="text-xl font-medium tracking-tight text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {p.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-white/80">{p.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                      {p.focus}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {p.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* direct contact strip */}
          <Reveal delay={300}>
            <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-5 sm:flex-row">
              <p className="text-sm text-ink-muted">
                Want to speak with the team directly?
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-cyan"
                >
                  <Mail className="h-4 w-4 text-cyan" /> {site.email}
                </a>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-cyan"
                >
                  <Phone className="h-4 w-4 text-cyan" /> {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 10. FINAL CTA ---------- */}
      <section className="relative isolate overflow-hidden bg-deep-2 py-20 text-on-deep md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(0,194,255,0.12) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="container-x mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-5 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="inline-block h-px w-8 bg-cyan/60" />
              Work With Us
              <span className="inline-block h-px w-8 bg-cyan/60" />
            </p>
          </Reveal>
          <Reveal delay={130}>
            <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-on-deep">
              Precision. Impact. Integrity.
              <br />
              <span
                className="text-cyan"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Experience all three.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={260}>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-on-deep-muted md:text-lg">
              Whether you&apos;re building a team or building a career, our
              recruiters are ready to add value from the first conversation.
            </p>
          </Reveal>
          <Reveal delay={380}>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/for-companies"
                className="group inline-flex items-center gap-2.5 bg-green px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-green-700"
              >
                Hire Talent
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/for-talent"
                className="inline-flex items-center gap-2.5 border border-white/25 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-on-deep transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
              >
                Find Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
