import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, MapPin } from "@/components/ui/icons";
import { site } from "@/lib/site";

/**
 * About — "The Manifesto".
 * Editorial / executive-search aesthetic (think Korn Ferry, Egon Zehnder):
 * quiet, confident, typography-led. Playfair serif + navy + cyan accent.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Querentia is Canada's trusted recruitment partner since 2014 — placing all talent, tech and non-tech, with the organizations and leaders shaping the country's future. Talent. Trust. Thrive.",
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

/* ── Our story, told as a vertical timeline ─────────────────────────────── */
const milestones = [
  {
    year: "2014",
    title: "Founded in Oakville",
    body: "Querentia opens its doors in Oakville, Ontario, on a single conviction: hiring should be fast, precise, and honest — for talent and employer alike.",
  },
  {
    year: "2017",
    title: "First 100 placements",
    body: "Word travels. A growing roster of Canadian enterprises trust us with their most important hires, and our first hundred placements take root.",
  },
  {
    year: "2020",
    title: "Three offices, coast to coast",
    body: "We expand beyond our Oakville headquarters to Toronto and Vancouver — closer to the markets, the leaders, and the talent we serve.",
  },
  {
    year: "2023",
    title: "All talent, every discipline",
    body: "Tech and non-tech alike. We grow into a full-spectrum partner across 30+ disciplines — from engineering, data, cloud, and security to finance, HR, marketing, and supply chain.",
  },
  {
    year: "Today",
    title: "500+ placements · 94% retention",
    body: "A decade of conviction, compounded. Five practices, 30+ disciplines, and a retention rate that proves the right person changes everything.",
  },
];

/* ── What we stand for — three numbered principles ──────────────────────── */
const principles = [
  {
    num: "01",
    name: "Precision",
    body: "We listen before we search. Every shortlist is matched to the role, the team, and the culture — not to keywords. The right person, not merely an available one.",
  },
  {
    num: "02",
    name: "Impact",
    body: "A placement is a beginning, not a transaction. We measure ourselves by the careers we accelerate and the teams that ship — long after the offer is signed.",
  },
  {
    num: "03",
    name: "Integrity",
    body: "Honest feedback, both ways. Candid counsel, even when it costs us the placement. Trust is the only asset that compounds, and we guard it on every search.",
  },
];

/* ── Leadership — editorial portraits + pull-quotes ─────────────────────── */
const leadership = [
  {
    name: "Hemant Makhija",
    role: "Advisor",
    focus: "Enterprise hiring strategy · Client delivery",
    quote:
      "Great hiring is strategy made human. Get it right, and everything else follows.",
    bio: "Hemant advises on enterprise hiring strategy and client delivery, helping Canada's leading organizations build teams that perform across every function.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Seema Makhija",
    role: "Director",
    focus: "Recruitment practice · Search delivery",
    quote:
      "The right person doesn't fill a seat. They change the trajectory of a team.",
    bio: "Seema leads Querentia's recruitment practice and search delivery, guiding every engagement from first brief to signed offer across both tech and non-tech disciplines.",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ---------- 1. HERO — a single editorial statement ---------- */}
      <section className="relative isolate overflow-hidden bg-deep-2 pb-14 pt-28 text-on-deep md:pb-20 md:pt-36">
        {/* one quiet cyan ambient — no orbit dots, keep it editorial */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 65% 50% at 75% 15%, rgba(0,194,255,0.10) 0%, transparent 62%)",
            }}
          />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-4xl">
            <Reveal>
              <p className="mb-8 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                About Querentia · Est. {site.founded}
              </p>
            </Reveal>

            <Reveal delay={140}>
              <h1
                className={`${playfair.className} text-balance font-medium text-on-deep`}
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 5rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.015em",
                }}
              >
                We believe the right person{" "}
                <span style={{ color: "#00C2FF" }}>
                  changes everything.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-on-deep-muted md:text-lg">
                Since {site.founded}, Querentia has been Canada&apos;s trusted
                recruitment partner — placing all talent, tech and non-tech,
                with the organizations and leaders shaping the country&apos;s
                future. {site.tagline}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 2. OUR STORY — vertical timeline ---------- */}
      <section className="bg-page py-16 md:py-20">
        <div className="container-x">
          <div className="mb-10 max-w-2xl md:mb-12">
            <Reveal>
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                Our Story
              </p>
            </Reveal>
            <Reveal delay={130}>
              <h2
                className={`${playfair.className} text-[clamp(1.9rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-ink`}
              >
                A decade of conviction,{" "}
                <span className="text-cyan">compounded.</span>
              </h2>
            </Reveal>
          </div>

          {/* timeline */}
          <div className="relative mx-auto max-w-3xl">
            {/* vertical line */}
            <span
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan/50 via-border to-transparent md:left-[11px]"
            />
            <ol className="space-y-9 md:space-y-11">
              {milestones.map((m, idx) => (
                <li key={m.year} className="relative pl-10 md:pl-16">
                  {/* node */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center md:h-6 md:w-6"
                  >
                    <span className="absolute inline-flex h-full w-full rounded-full bg-cyan/20" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan md:h-2.5 md:w-2.5" />
                  </span>
                  <Reveal delay={idx * 90}>
                    <p
                      className={`${playfair.className} text-2xl font-medium leading-none tracking-tight text-cyan md:text-3xl`}
                    >
                      {m.year}
                    </p>
                    <h3 className="mt-3 text-lg font-medium tracking-tight text-ink md:text-xl">
                      {m.title}
                    </h3>
                    <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">
                      {m.body}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- 3. WHAT WE STAND FOR — numbered principles ---------- */}
      <section className="bg-page-2 py-16 md:py-20">
        <div className="container-x">
          <div className="mb-10 text-center md:mb-12">
            <Reveal>
              <p className="mb-5 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                What We Stand For
                <span className="inline-block h-px w-8 bg-cyan/60" />
              </p>
            </Reveal>
            <Reveal delay={130}>
              <h2
                className={`${playfair.className} mx-auto max-w-2xl text-[clamp(1.9rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-ink`}
              >
                Precision. Impact.{" "}
                <span className="text-cyan">Integrity.</span>
              </h2>
            </Reveal>
          </div>

          <div className="mx-auto max-w-4xl divide-y divide-border">
            {principles.map((p, idx) => (
              <Reveal key={p.num} delay={idx * 110}>
                <div
                  className={`flex flex-col gap-5 py-8 md:flex-row md:items-baseline md:gap-12 md:py-10 ${
                    idx % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  {/* big serif numeral */}
                  <p
                    className={`${playfair.className} shrink-0 text-[clamp(3.5rem,9vw,6rem)] font-medium leading-none text-cyan/25`}
                    style={{ minWidth: "5rem" }}
                  >
                    {p.num}
                  </p>
                  <div className={idx % 2 === 1 ? "md:ml-auto" : ""}>
                    <h3
                      className={`${playfair.className} text-3xl font-medium tracking-tight text-ink md:text-4xl`}
                    >
                      {p.name}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 4. LEADERSHIP — editorial portraits + pull-quotes ---------- */}
      <section className="bg-page py-16 md:py-20">
        <div className="container-x">
          <div className="mb-10 max-w-2xl md:mb-12">
            <Reveal>
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                Leadership
              </p>
            </Reveal>
            <Reveal delay={130}>
              <h2
                className={`${playfair.className} text-[clamp(1.9rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-ink`}
              >
                The people{" "}
                <span className="text-cyan">behind the practice.</span>
              </h2>
            </Reveal>
          </div>

          <div className="space-y-10 md:space-y-14">
            {leadership.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 120}>
                <div
                  className={`grid items-center gap-8 md:gap-14 ${
                    idx % 2 === 1
                      ? "md:grid-cols-[1fr_minmax(0,18rem)]"
                      : "md:grid-cols-[minmax(0,18rem)_1fr]"
                  }`}
                >
                  {/* portrait */}
                  <div
                    className={`relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_24px_60px_-32px_rgba(13,27,42,0.4)] ${
                      idx % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={p.img}
                      alt={`${p.name}, ${p.role} at Querentia`}
                      fill
                      sizes="(min-width: 768px) 18rem, 90vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-2/40 to-transparent" />
                  </div>

                  {/* pull-quote + bio */}
                  <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                    <p
                      aria-hidden
                      className={`${playfair.className} text-5xl leading-none text-cyan/30`}
                    >
                      &ldquo;
                    </p>
                    <blockquote
                      className={`${playfair.className} -mt-4 text-[clamp(1.4rem,2.6vw,2rem)] font-medium leading-snug tracking-tight text-ink`}
                    >
                      {p.quote}
                    </blockquote>
                    <div className="mt-7 border-t border-border pt-5">
                      <p className="text-base font-medium tracking-tight text-ink">
                        {p.name}
                      </p>
                      <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                        {p.focus}
                      </p>
                      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted">
                        {p.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* HQ line */}
          <Reveal delay={200}>
            <p className="mt-10 flex items-center justify-center gap-2 text-sm text-ink-faint md:mt-14">
              <MapPin className="h-4 w-4 text-cyan" />
              Headquartered in {site.location}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- 5. CLOSING CTA ---------- */}
      <section className="relative isolate overflow-hidden bg-deep-2 py-16 text-on-deep md:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 55% at 50% 45%, rgba(0,194,255,0.12) 0%, transparent 62%)",
            }}
          />
        </div>

        <div className="container-x mx-auto max-w-3xl text-center">
          <Reveal>
            <h2
              className={`${playfair.className} text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[1.05] tracking-tight text-on-deep`}
            >
              Talent. Trust.{" "}
              <span style={{ color: "#00C2FF" }}>
                Thrive.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-on-deep-muted md:text-lg">
              Whether you&apos;re building a team or building a career, the right
              conversation starts here.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/for-companies"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-green px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-green-700"
              >
                Hire Talent
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/for-talent"
                className="inline-flex items-center gap-2.5 rounded-lg border border-white/25 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-on-deep transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
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
