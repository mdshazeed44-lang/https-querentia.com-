import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { HeroTalentOrbit } from "@/components/ui/hero-talent-orbit";
import { ABOUT_ORBIT_LOGOS } from "@/components/ui/about-orbit-logos";
import {
  ArrowRight,
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
import { site, stats } from "@/lib/site";

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
    desc: "Full-time engineers, architects, and program leaders — matched to your stack, team, and culture for the long run.",
  },
  {
    icon: Clock,
    title: "Contract & contract-to-hire",
    desc: "Senior contractors for programs, backfills, and surge capacity — with the option to convert when the fit is proven.",
  },
  {
    icon: Target,
    title: "Specialist & niche search",
    desc: "Hard-to-find skills across 30+ disciplines — cloud, data, cybersecurity, SAP, Pega, Guidewire, and more.",
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

            {/* About pages inform — no conversion CTAs here. The motto line
                and credibility stats carry the hero instead. */}
            <Reveal delay={440}>
              <p
                className="mx-auto mt-7 max-w-md text-base text-cyan lg:mx-0"
                style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
              >
                {site.tagline}
              </p>
            </Reveal>

            {/* Credibility row — instant trust signals */}
            <Reveal delay={560}>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-white/15 pt-5 lg:justify-start">
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

      {/* ---------- 2. OUR STORY + MOTTO ---------- */}
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

      {/* ---------- 3. WHAT WE DO — network visual + engagement models ---------- */}
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

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
            {/* network visual — one connected talent pool, every market */}
            <Reveal>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white">
                <div className="relative min-h-[260px] flex-1">
                  <Image
                    src="/about/talent-network.png"
                    alt="A Querentia recruiter connected to senior IT professionals across markets"
                    fill
                    sizes="(min-width: 1024px) 34rem, 100vw"
                    className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="border-t border-border bg-card p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan">
                    One network · Every market
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    An active, coast-to-coast network of senior IT
                    professionals — so the right candidate is a call away, not
                    a cold search.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* engagement models — stacked */}
            <div className="flex flex-col gap-5">
              {engagements.map((e, idx) => (
                <Reveal key={e.title} delay={idx * 110}>
                  <div className="group flex h-full items-start gap-5 rounded-3xl border border-border bg-card p-6 transition-colors duration-300 hover:border-cyan/40">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-soft text-cyan transition-transform duration-300 group-hover:scale-110">
                      <e.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3
                        className="text-lg font-medium tracking-tight text-ink"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {e.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        {e.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 4. HOW WE WORK — process + screening visual ---------- */}
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

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12">
            {/* steps — 2×2 */}
            <div className="order-2 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:order-1">
              {process.map((p, idx) => (
                <Reveal key={p.num} delay={idx * 120}>
                  <div className="group relative">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan/40 bg-page text-cyan transition-all duration-300 group-hover:bg-cyan group-hover:text-white">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
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

            {/* pipeline visual — recruiter screening profiles into a shortlist */}
            <Reveal delay={150} className="order-1 lg:order-2">
              <div className="relative">
                <div className="group overflow-hidden rounded-3xl border border-border bg-white">
                  <div className="relative h-[230px] sm:h-[270px]">
                    <Image
                      src="/about/screening-pipeline.png"
                      alt="A Querentia recruiter screening candidate profiles into a qualified shortlist"
                      fill
                      sizes="(min-width: 1024px) 34rem, 100vw"
                      className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                {/* floating proof chip */}
                <div className="absolute -bottom-4 left-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-ink shadow-[0_12px_30px_-12px_rgba(13,27,42,0.35)]">
                  <Clock className="h-4 w-4 text-cyan" />
                  Avg. shortlist:&nbsp;
                  <span className="font-semibold text-cyan">48 hours</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 5. TRACK RECORD ---------- */}
      <section className="bg-page-2 py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <p className="mb-10 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="font-mono">V</span>
              <span className="inline-block h-px w-8 bg-cyan/60" />
              Track Record
              <span className="inline-block h-px w-8 bg-cyan/60" />
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-y-12 border-y border-border bg-card py-12 md:grid-cols-4 md:divide-x md:divide-border">
            {stats.map((s, idx) => (
              <Reveal key={s.label} delay={idx * 110}>
                <div className="px-6 text-center">
                  <p
                    className="text-[clamp(2.5rem,5.5vw,4rem)] font-medium leading-none tracking-tight text-cyan"
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

      {/* ---------- 6. LEADERSHIP / FOUNDERS ---------- */}
      <section className="bg-page py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <p className="mb-5 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="font-mono">VI</span>
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

      {/* ---------- 7. FINAL CTA ---------- */}
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
