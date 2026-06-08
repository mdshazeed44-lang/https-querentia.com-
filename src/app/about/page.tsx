import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Check,
  Star,
  Bolt,
  Shield,
  Users,
  Award,
  Target,
  Globe2,
  Briefcase,
} from "@/components/ui/icons";
import { site, clients, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Querentia is a Toronto-based IT recruitment firm placing elite technology talent at Canada's leading enterprises. Learn our story, mission, and the leadership behind the practice.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Querentia",
    description:
      "Toronto-based IT recruitment firm trusted by Canada's enterprise leaders.",
    url: `${site.url}/about`,
    type: "article",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${site.url}/about`,
  mainEntity: {
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    description: site.description,
    foundingDate: site.founded,
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: site.locality,
        addressRegion: site.region,
        addressCountry: site.country,
      },
    },
    employee: {
      "@type": "Person",
      name: "Seema Makhija",
      jobTitle: "Director, Talent Services",
    },
  },
};

const values = [
  {
    icon: Shield,
    title: "Trust first",
    desc: "Honest feedback, transparent timelines, no recruiter games. Reputation is everything in this market.",
  },
  {
    icon: Target,
    title: "Precision over volume",
    desc: "We send shortlists, not resume floods. Quality is faster than quantity — every time.",
  },
  {
    icon: Bolt,
    title: "Move at enterprise speed",
    desc: "48-hour qualified shortlists. Senior-recruiter responsiveness. No black-holed candidates.",
  },
  {
    icon: Award,
    title: "Long-term outcomes",
    desc: "We optimize for retention — not for the next hire. 94% placement retention says we mean it.",
  },
];

const leadership = [
  {
    name: "Seema Makhija",
    role: "Director, Talent Services",
    bio: "Leads Querentia's enterprise practice. Two decades in IT staffing across banking, consulting, and digital transformation programs.",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Hemant Makhija",
    role: "Advisor",
    bio: "Strategic advisor on enterprise architecture and program delivery. Background spans Fortune-500 engineering leadership and digital banking.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
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
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-on-deep backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue" />
                Oakville, ON · Since {site.founded}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                About <span className="text-blue">Querentia</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-on-deep-muted md:text-lg">
                Querentia is a specialist IT recruitment firm headquartered in
                Toronto. We connect Canada&apos;s leading enterprises with the
                elite technology professionals they need to ship — across
                cloud, data, security, and engineering.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button href="/contact" variant="primary">
                  Talk to our team <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/jobs" variant="outline-light">
                  Browse open roles
                </Button>
              </div>
            </Reveal>

            {/* Trust strip */}
            <Reveal delay={500}>
              <div className="mt-12">
                <p className="text-xs uppercase tracking-[0.2em] text-on-deep-muted/60">
                  Trusted by top companies in Canada
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
                  {clients.map((c) => (
                    <span
                      key={c}
                      className="text-base font-semibold text-white/55 transition-colors duration-300 hover:text-white md:text-lg"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
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

      {/* STORY */}
      <section className="bg-page py-20 md:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative mx-auto w-full max-w-md">
                <span
                  aria-hidden
                  className="animate-aurora absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-full blur-3xl"
                  style={{ background: "radial-gradient(circle, rgba(37,99,235,0.4), transparent 70%)" }}
                />
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(15,27,51,0.35)]">
                  <Image
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
                    alt="The modern Toronto office where Querentia's recruitment team works"
                    fill
                    sizes="(min-width: 1024px) 28rem, 80vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/95 px-3 py-1.5 text-xs font-medium text-deep shadow-md backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                    </span>
                    Toronto, Canada
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                  Our Story
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep md:text-5xl">
                  A decade of placing IT talent where it actually moves the needle.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                  Querentia was founded in {site.founded} with a simple
                  conviction: enterprise IT recruitment in Canada deserved
                  better than the resume-flood model. Better matches, faster
                  shortlists, honest feedback for candidates.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                  A decade later, we&apos;re trusted by Deloitte, Capgemini, CGI
                  and a roster of Canada&apos;s most respected firms to staff
                  the technology teams behind their most ambitious programs.
                </p>
              </Reveal>
              <Reveal delay={340}>
                <ul className="mt-7 space-y-3">
                  {[
                    "Specialist IT-only practice — no generalist baggage",
                    "Active network across cloud, data, security, digital",
                    "Two-sided care — employers and candidates",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-soft">
                        <Check className="h-3 w-3 text-green-700" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="bg-page-2 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="relative inline-block text-3xl font-bold tracking-tight text-deep md:text-5xl">
                Mission &amp;{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(95deg, #2563eb, #0ea5e9)" }}
                >
                  Vision
                </span>
                <span
                  aria-hidden
                  className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full"
                  style={{ background: "linear-gradient(90deg, #2563eb, #0ea5e9)" }}
                />
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="ring-grad lift group relative h-full overflow-hidden rounded-3xl border border-deep bg-deep p-8 text-on-deep md:p-10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue/35 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                  Our Mission
                </p>
                <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                  Place the right people, faster — and treat both sides like grown-ups.
                </h3>
                <p className="mt-4 text-on-deep-muted">
                  Cut the noise out of enterprise hiring. Help employers ship
                  teams that deliver, and help candidates land roles that
                  actually grow their careers.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="ring-grad lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue/15 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                  Our Vision
                </p>
                <h3 className="mt-3 text-2xl font-bold text-deep md:text-3xl">
                  The most trusted IT talent partner in Canada.
                </h3>
                <p className="mt-4 text-ink-muted">
                  Become the firm enterprises call first — and the firm
                  technology professionals come back to, hire after hire,
                  for the entire arc of their careers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-page py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                What we stand for
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep md:text-5xl">
                The four principles that run every search.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 90}>
                  <div className="ring-grad lift group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-green-soft text-green-700 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-green group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-deep transition-colors duration-300 group-hover:text-green-700">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="relative overflow-hidden bg-deep py-20 text-on-deep md:py-28">
        <div
          aria-hidden
          className="animate-aurora pointer-events-none absolute -right-20 top-0 h-[28rem] w-[28rem] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.4), transparent 70%)" }}
        />
        <div
          aria-hidden
          className="animate-aurora-2 pointer-events-none absolute -left-16 bottom-0 h-[26rem] w-[26rem] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.25), transparent 70%)" }}
        />

        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                By the numbers
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                A decade of compound progress.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <div className="text-center">
                  <div
                    className="text-4xl font-bold tracking-tight md:text-5xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white/90">{s.label}</div>
                  <div className="mt-0.5 text-xs text-on-deep-muted/80">{s.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-page py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                Leadership
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep md:text-5xl">
                The people behind the practice.
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 140}>
                <div className="ring-grad lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6">
                  <div className="flex items-center gap-5">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                      <Image
                        src={p.img}
                        alt={`${p.name}, ${p.role}`}
                        fill
                        sizes="80px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-deep">{p.name}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                        {p.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-ink-muted">{p.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-page-2 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[2rem] px-6 py-16 text-center text-white shadow-[0_30px_80px_-30px_rgba(37,99,235,0.55)] md:px-16 md:py-24"
              style={{
                background:
                  "linear-gradient(120deg, #0a1322 0%, #1e3a8a 30%, #2563eb 60%, #0ea5e9 100%)",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 12s ease-in-out infinite",
              }}
            >
              <div
                aria-hidden
                className="animate-aurora pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full blur-[120px]"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)" }}
              />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                  Let&apos;s build something together.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/85">
                  Whether you&apos;re scaling a delivery org or searching for
                  your next role — Querentia moves at the pace you need.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-deep transition-all duration-300 hover:scale-[1.03]"
                  >
                    Contact us <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Button href="/jobs" variant="outline-light" className="hover:scale-[1.02]">
                    Browse open roles
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
