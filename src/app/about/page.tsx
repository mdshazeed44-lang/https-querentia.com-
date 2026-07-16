import type { Metadata } from "next";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import { AboutMilestones } from "@/components/about-milestones";
import { ClosingCTA } from "@/components/sections/closing-cta";
import { MapPin, Users, Sparkles, Shield } from "@/components/ui/icons";
import { site } from "@/lib/site";

/**
 * About — "The Manifesto", elevated.
 * Editorial / executive-search aesthetic (think Korn Ferry, Egon Zehnder):
 * quiet, confident, typography-led — now with tasteful CSS-keyframe motion:
 * staggered hero rise, floating ambient glows, a timeline line that draws in,
 * nodes that scale/pulse in, hover-lift milestones, and richer principle +
 * leadership cards. Playfair serif + navy + cyan accent. Server component —
 * all interactivity is pure CSS keyframes + Reveal.
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
    "Querentia is a trusted talent partner since 2021 — delivering exceptional people, tech and non-tech, who help organizations thrive. Talent. Trust. Thrive.",
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
      {
        "@type": "Person",
        name: "Seema Makhija",
        jobTitle: "Director, Talent Services",
      },
    ],
  },
};

/* ── Our story, told as a vertical timeline ─────────────────────────────── */
const milestones = [
  {
    year: "2021",
    title: "The Beginning",
    body: "We launched Querentia with a mission to deliver exceptional talent and began building partnerships that shaped our foundation.",
  },
  {
    year: "2022",
    title: "Expanding Our Reach",
    body: "Our capabilities grew as we supported increasingly complex mandates and strengthened our reputation for precision and trust.",
  },
  {
    year: "2023",
    title: "Deepening Our Expertise",
    body: "We evolved into a preferred partner for high-impact roles, accelerating delivery across critical functions nationwide.",
  },
  {
    year: "2024",
    title: "Scaling With Purpose",
    body: "Our network and capabilities matured, enabling us to support larger teams and more strategic hiring initiatives.",
  },
  {
    year: "2025",
    title: "Defining Our Identity",
    body: "We refined our brand pillars — Talent. Trust. Thrive. — and elevated our digital presence to reflect our evolution.",
  },
  {
    year: "2026",
    title: "Thriving Forward",
    body: "Querentia continues to grow as a modern, high-performance recruitment partner delivering talent that drives meaningful business impact.",
  },
];

/* ── What we stand for — Talent. Trust. Thrive. ─────────────────────────── */
const principles = [
  {
    num: "01",
    name: "Talent",
    Icon: Users,
    body: "We look beyond keywords to find people who elevate teams, culture, and outcomes.",
  },
  {
    num: "02",
    name: "Trust",
    Icon: Shield,
    body: "We build partnerships through clarity, honesty, and consistent delivery.",
  },
  {
    num: "03",
    name: "Thrive",
    Icon: Sparkles,
    body: "We place talent that drives performance, strengthens culture, and fuels growth.",
  },
];

/* ── Leadership — editorial portraits + pull-quotes ─────────────────────── */
const leadership = [
  {
    name: "Seema Makhija",
    role: "Director, Talent Services",
    focus: "Director, Talent Services",
    quote:
      "Exceptional talent doesn't just join a team — it elevates everything around it.",
    bio: "Seema oversees Querentia's full recruitment lifecycle, leading every search with clarity, precision, and a commitment to delivering exceptional tech and non-tech talent.",
    img: "/seema-makhija.webp",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ── Page-scoped keyframes (all guarded by prefers-reduced-motion) ── */}
      <style>{`
        @keyframes ab-rise {
          from { opacity: 0; transform: translateY(22px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .ab-rise { opacity: 0; animation: ab-rise 0.9s cubic-bezier(0.16,1,0.3,1) forwards; }

        @keyframes ab-float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50%      { transform: translateY(-26px) translateX(14px); }
        }
        .ab-glow-a { animation: ab-float 15s ease-in-out infinite; }
        .ab-glow-b { animation: ab-float 19s ease-in-out infinite reverse; }

        @keyframes ab-underline { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .ab-underline { transform-origin: left; animation: ab-underline 1.1s cubic-bezier(0.16,1,0.3,1) 0.6s both; }

        /* hero image: full-bleed on the right, left edge feathered into navy (homepage treatment) */
        @media (min-width: 1024px) {
          .ab-hero-mask {
            -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 34%, #000 100%);
            mask-image: linear-gradient(90deg, transparent 0%, #000 34%, #000 100%);
          }
        }
        @keyframes ab-img-in { from { opacity: 0; transform: scale(1.12); } to { opacity: 1; transform: scale(1); } }
        .ab-img-in { animation: ab-img-in 1.6s cubic-bezier(0.16,1,0.3,1) both; }

        @media (prefers-reduced-motion: reduce) {
          .ab-rise, .ab-underline, .ab-img-in { opacity: 1; transform: none; filter: none; animation: none; }
          .ab-glow-a, .ab-glow-b { animation: none; }
        }
      `}</style>

      {/* ---------- 1. HERO — full-bleed, homepage-style split ---------- */}
      <section
        className="relative isolate flex min-h-[96vh] items-center overflow-hidden text-on-deep"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        {/* full-bleed image on the right; left edge feathered into navy via mask */}
        <div className="ab-hero-mask absolute inset-0 lg:left-[42%] lg:top-16">
          <Image
            src="/about-hero.webp"
            alt="The Querentia team collaborating in a modern office — the people behind every placement."
            fill
            priority
            sizes="(min-width:1024px) 58vw, 100vw"
            className="ab-img-in object-cover object-center"
          />
        </div>

        {/* mobile veil so copy stays readable over the full-bleed image */}
        <div
          aria-hidden
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,27,42,0.80), rgba(13,27,42,0.93))",
          }}
        />
        {/* desktop: navy wash on the far left for copy depth (mask does the blend) */}
        <div
          aria-hidden
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, #0D1B2A 0%, rgba(13,27,42,0.85) 26%, rgba(13,27,42,0.2) 42%, rgba(13,27,42,0) 54%)",
          }}
        />
        {/* ambient cyan glow — subtle depth on the copy side */}
        <div
          aria-hidden
          className="ab-glow-b pointer-events-none absolute -left-32 bottom-0 -z-10 h-[380px] w-[380px] rounded-full bg-cyan/[0.06] blur-3xl"
        />

        {/* copy */}
        <div className="container-x relative z-10 w-full">
          <div className="max-w-2xl">
            <p
              className="ab-rise mb-8 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-cyan"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="inline-block h-px w-8 bg-cyan/60" />
              About Querentia · Est. 2021
            </p>

            <h1
              className={`${playfair.className} ab-rise text-balance font-medium text-on-deep`}
              style={{
                fontSize: "clamp(1.85rem, 4vw, 3.35rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                animationDelay: "0.2s",
              }}
            >
              We&apos;re built on a simple belief:{" "}
              <span className="relative inline-block" style={{ color: "#00C2FF" }}>
                exceptional talent transforms businesses.
                <span
                  aria-hidden
                  className="ab-underline absolute -bottom-2 left-0 h-[3px] w-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #00C2FF, rgba(0,194,255,0))" }}
                />
              </span>
            </h1>

            <p
              className="ab-rise mt-9 max-w-xl text-base leading-relaxed text-on-deep-muted md:text-lg"
              style={{ animationDelay: "0.4s" }}
            >
              Since 2021, Querentia has been a trusted talent partner —
              delivering exceptional people who help organizations thrive.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 2. OUR STORY — vertical timeline ---------- */}
      <section className="relative isolate overflow-hidden bg-page py-16 md:py-20">
        <div
          aria-hidden
          className="ab-glow-a pointer-events-none absolute -left-40 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-cyan/[0.04] blur-3xl"
        />
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
                A Journey Built on Talent, Trust, and{" "}
                <span className="text-cyan">Momentum.</span>
              </h2>
            </Reveal>
          </div>

          {/* Our Story — milestone card grid (alternative to the journey timeline) */}
          <AboutMilestones milestones={milestones} headingFont={playfair.className} />
        </div>
      </section>

      {/* ---------- 3. WHAT WE STAND FOR — numbered principle cards ---------- */}
      <section className="relative isolate overflow-hidden bg-page-2 py-16 md:py-20">
        <div
          aria-hidden
          className="ab-glow-b pointer-events-none absolute -right-40 bottom-0 -z-10 h-[480px] w-[480px] rounded-full bg-cyan/[0.05] blur-3xl"
        />
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
                Talent. Trust.{" "}
                <span className="text-cyan">Thrive.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-7">
            {principles.map((p, idx) => {
              const Icon = p.Icon;
              return (
                <Reveal key={p.num} delay={idx * 110}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_34px_80px_-40px_rgba(13,27,42,0.35)] md:p-8">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-deep-2 text-cyan shadow-[0_14px_34px_-12px_rgba(0,194,255,0.45)] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </span>

                    <h3
                      className={`${playfair.className} relative mt-6 text-3xl font-medium tracking-tight text-ink md:text-4xl`}
                    >
                      {p.name}
                    </h3>

                    {/* accent line grows on hover */}
                    <span
                      aria-hidden
                      className="relative mt-4 block h-px w-10 origin-left bg-cyan/60 transition-all duration-300 group-hover:w-20"
                    />

                    <p className="relative mt-5 text-[15px] leading-relaxed text-ink-muted md:text-base">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- 4. LEADERSHIP — editorial portraits + pull-quotes ---------- */}
      <section className="relative isolate overflow-hidden bg-page py-16 md:py-20">
        <div
          aria-hidden
          className="ab-glow-a pointer-events-none absolute -right-32 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-cyan/[0.04] blur-3xl"
        />
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
                The People Behind{" "}
                <span className="text-cyan">Querentia.</span>
              </h2>
            </Reveal>
          </div>

          <div className="space-y-8 md:space-y-10">
            {leadership.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 120}>
                <div
                  className={`group grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-cyan/40 hover:shadow-[0_40px_90px_-44px_rgba(13,27,42,0.35)] md:gap-12 md:p-9 ${
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
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-2/45 to-transparent" />
                    {/* role badge */}
                    <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full border border-cyan/30 bg-deep-2/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan backdrop-blur">
                      {p.role}
                    </span>
                  </div>

                  {/* pull-quote + bio */}
                  <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                    <p
                      aria-hidden
                      className={`${playfair.className} text-6xl leading-none text-cyan/25 transition-all duration-300 group-hover:text-cyan/40`}
                    >
                      &ldquo;
                    </p>
                    <blockquote
                      className={`${playfair.className} -mt-5 text-[clamp(1.4rem,2.6vw,2rem)] font-medium leading-snug tracking-tight text-ink`}
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
              Located in {site.location}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- 5. CLOSING CTA (shared) ---------- */}
      <ClosingCTA subline="Whether you're building a team or building a career, the right conversation starts here." />
    </>
  );
}
