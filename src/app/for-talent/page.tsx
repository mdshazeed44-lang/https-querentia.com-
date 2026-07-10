import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRight,
  Target,
  Chat,
  Briefcase,
  Award,
  Clock,
  Users,
  Shield,
  Sparkles,
} from "@/components/ui/icons";

/**
 * For Talent: premium editorial aesthetic matching the homepage, About and
 * For Companies pages. Playfair serif headings + navy/cyan, full-bleed hero,
 * with layered ambient motion, hover sheen, and staggered scroll reveals.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "For Talent: Find a Place to Thrive with Querentia",
  description:
    "At Querentia, we help exceptional talent find roles where they are valued, supported, and empowered to thrive. Personalized career guidance, transparent communication, and advocacy that puts you first.",
  alternates: { canonical: "/for-talent" },
};

const EXPECTATIONS = [
  {
    num: "01",
    icon: Target,
    title: "Personalized Career Guidance",
    body: "Your journey is unique, and so is our approach. We take the time to understand your strengths, aspirations, and long-term goals so we can match you with opportunities that truly fit.",
  },
  {
    num: "02",
    icon: Chat,
    title: "Transparent & Trust-Based Communication",
    body: "No hidden agendas. No vague feedback. We keep you informed at every step, ensuring you always know where you stand in the process.",
  },
  {
    num: "03",
    icon: Briefcase,
    title: "Access to High-Impact Roles",
    body: "We partner with organizations that value excellence, innovation, and integrity. From contract engagements to full-time leadership roles, we bring you opportunities that elevate your career.",
  },
  {
    num: "04",
    icon: Award,
    title: "Advocacy That Puts You First",
    body: "We champion your strengths, negotiate on your behalf, and ensure you are positioned for success, not just placed into a role.",
  },
  {
    num: "05",
    icon: Clock,
    title: "A Long-Term Relationship, Not a Transaction",
    body: "Our commitment doesn't end when you're hired. We stay connected, support your growth, and help you navigate future opportunities as your career evolves.",
  },
];

const PILLARS = [
  {
    icon: Users,
    title: "Talent",
    body: "We recognize your expertise and treat it with the respect it deserves.",
  },
  {
    icon: Shield,
    title: "Trust",
    body: "We build relationships grounded in honesty, clarity, and integrity.",
  },
  {
    icon: Sparkles,
    title: "Thrive",
    body: "We help you grow into roles where you can excel, contribute, and flourish.",
  },
];

const VOICES = [
  {
    role: "Senior Cloud Architect",
    location: "Toronto, ON",
    quote:
      "Querentia told me the client, the rate, and the team before I committed a single hour. Four days later I was interviewing. Ten days later I signed. No other recruiter has ever been that straight with me.",
  },
  {
    role: "Data Analyst (Junior)",
    location: "Calgary, AB",
    quote:
      "I was nervous about changing roles early in my career, but Querentia walked me through every step. They explained the expectations clearly, prepared me for interviews, and matched me with a team that actually invests in junior talent.",
  },
  {
    role: "Platform Engineer",
    location: "Vancouver, BC",
    quote:
      "I've worked with recruiters before, but none took the time to understand my technical strengths the way Querentia did. They matched me with a modernization project that fits my skills perfectly, and negotiated a rate I didn't think I could get.",
  },
  {
    role: "Privacy & Governance Consultant",
    location: "Montreal, QC",
    quote:
      "What stood out was the transparency. Querentia shared the full project scope, culture, and expectations upfront. No surprises. The role has been one of the most rewarding engagements of my consulting career.",
  },
  {
    role: "Senior Data Engineer",
    location: "Edmonton, AB",
    quote:
      "Querentia treated me like a partner, not a placement. They advocated for me, kept me updated, and made sure the role aligned with my long-term goals. I've already referred two colleagues because the experience was that good.",
  },
  {
    role: "Senior Director, Technology Practice",
    location: "Toronto, ON",
    quote:
      "Querentia operates at a different level. They understood my leadership profile, my expectations, and the kind of culture I thrive in. Every conversation was transparent, every step was intentional, and the role they brought forward aligned perfectly with my long-term vision. It felt like a true partnership, not a placement.",
  },
];

function initials(role: string) {
  return role
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function ForTalentPage() {
  return (
    <div className="min-h-screen bg-page text-ink">
      {/* page-scoped effects */}
      <style>{`
        @media (min-width: 1024px) {
          .ft-hero-mask {
            -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.45) 30%, #000 62%, #000 100%);
            mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.45) 30%, #000 62%, #000 100%);
          }
        }
        @keyframes ft-img-in { from { opacity: 0; transform: scale(1.12); } to { opacity: 1; transform: scale(1); } }
        .ft-img-in { animation: ft-img-in 1.6s cubic-bezier(0.16,1,0.3,1) both; }

        /* drifting ambient orbs */
        @keyframes ft-drift { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(26px,-30px) scale(1.08); } }
        .ft-orb-a { animation: ft-drift 17s ease-in-out infinite; }
        .ft-orb-b { animation: ft-drift 23s ease-in-out infinite reverse; }

        /* hover sheen sweep across cards */
        .ft-sheen { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(115deg, transparent 36%, rgba(0,194,255,0.10) 50%, transparent 64%); transform: translateX(-130%); transition: transform 0.9s cubic-bezier(0.16,1,0.3,1); }
        .group:hover .ft-sheen { transform: translateX(130%); }

        /* gradient accent shimmer */
        @keyframes ft-shimmer { to { background-position: 200% center; } }
        .ft-line { background: linear-gradient(90deg, rgba(0,194,255,0.15), rgba(0,194,255,0.9), rgba(0,194,255,0.15)); background-size: 200% auto; animation: ft-shimmer 3.5s linear infinite; }

        /* floating scroll cue */
        @keyframes ft-bob { 0%,100% { transform: translateY(0); opacity: 0.55; } 50% { transform: translateY(7px); opacity: 1; } }
        .ft-bob { animation: ft-bob 1.9s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .ft-img-in, .ft-orb-a, .ft-orb-b, .ft-sheen, .ft-line, .ft-bob { animation: none !important; transform: none !important; }
        }
      `}</style>

      {/* 1. Hero: full-bleed image, homepage-style split */}
      <section
        className="relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-24 text-on-deep sm:pt-28 md:pb-20"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        {/* full-bleed image on the right; left edge feathered into navy via mask */}
        <div className="ft-hero-mask absolute inset-0 lg:left-[42%] lg:top-16">
          <Image
            src="/talent-thrive-hero.webp"
            alt="A supportive, diverse team collaborating in a bright modern office"
            fill
            priority
            sizes="(min-width:1024px) 58vw, 100vw"
            className="ft-img-in object-cover object-center"
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
              "linear-gradient(90deg, #0D1B2A 0%, rgba(13,27,42,0.92) 30%, rgba(13,27,42,0.55) 48%, rgba(13,27,42,0.18) 62%, rgba(13,27,42,0) 74%)",
          }}
        />
        {/* desktop: top + bottom navy fades and a soft tint so the image
            settles into the hero instead of floating on it */}
        <div
          aria-hidden
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.25) 16%, rgba(13,27,42,0) 32%, rgba(13,27,42,0) 72%, rgba(13,27,42,0.45) 100%), rgba(13,27,42,0.22)",
          }}
        />
        {/* drifting cyan glow on the copy side */}
        <div
          aria-hidden
          className="ft-orb-a pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-cyan/[0.10] blur-3xl"
        />

        <div className="container-x relative w-full">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-6 bg-current opacity-50" />
                <span>For Talent</span>
                <span className="relative ml-1 flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
                </span>
              </p>
            </Reveal>
            <Reveal delay={140}>
              <h1
                className={`${playfair.className} mx-auto text-balance font-medium text-white lg:mx-0`}
                style={{
                  fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.015em",
                  maxWidth: "22ch",
                }}
              >
                You deserve more than a job. You deserve a place to{" "}
                <span style={{ color: "#00C2FF" }}>thrive.</span>
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="mx-auto mt-6 max-w-xl text-[14px] leading-relaxed text-on-deep-muted md:text-[15px] lg:mx-0">
                At Querentia&reg;, we partner with the most forward-thinking
                companies to help exceptional talent find roles where they are
                valued, supported, and empowered to thrive.
              </p>
            </Reveal>
            <Reveal delay={440}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-lg bg-green px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white shadow-[0_16px_40px_-16px_rgba(255,107,43,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700"
                >
                  Submit your CV
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2.5 rounded-lg border border-white/25 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:border-white/60 hover:bg-white/5"
                >
                  Browse roles
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* scroll cue */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center lg:flex"
        >
          <span className="ft-bob flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
            <span className="h-1.5 w-1 rounded-full bg-cyan" />
          </span>
        </div>
      </section>

      {/* 2. What You Can Expect From Querentia */}
      <section className="relative isolate overflow-hidden bg-page py-16 md:py-24">
        <div
          aria-hidden
          className="ft-orb-b pointer-events-none absolute -right-40 top-24 -z-10 h-[440px] w-[440px] rounded-full bg-cyan/[0.05] blur-3xl"
        />
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-24">
            {/* LEFT — sticky editorial intro */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  What you can expect
                </p>
                <h2
                  className={`${playfair.className} text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.08] tracking-tight`}
                >
                  What you can expect{" "}
                  <span className="text-cyan">from Querentia.</span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
                  From the first conversation to long after you are placed, this
                  is what a partnership with Querentia looks like: five
                  commitments we hold to every professional we represent.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-lg bg-green px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.25em] text-white shadow-[0_16px_40px_-16px_rgba(255,107,43,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700"
                  >
                    Submit your CV
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <span
                    className={`${playfair.className} text-sm text-ink-faint`}
                  >
                    05 commitments
                  </span>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — refined editorial rows */}
            <div>
              {EXPECTATIONS.map((e, i) => (
                <Reveal key={e.num} delay={i * 80}>
                  <div className="group relative grid grid-cols-[auto_1fr] items-start gap-5 border-t border-ink/10 py-7 first:border-t-0 first:pt-0 sm:gap-7 md:py-8">
                    {/* soft hover wash behind the row */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-2 inset-x-[-1rem] rounded-2xl bg-gradient-to-r from-cyan/[0.07] via-cyan/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:inset-x-[-1.5rem]"
                    />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-soft text-cyan ring-1 ring-cyan/15 transition-all duration-500 group-hover:scale-105 group-hover:bg-cyan group-hover:text-white group-hover:shadow-[0_14px_34px_-10px_rgba(0,194,255,0.65)] md:h-14 md:w-14">
                      <e.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </span>
                    <div className="relative min-w-0">
                      <div className="flex items-baseline gap-3">
                        <span
                          className={`${playfair.className} text-[15px] font-medium text-cyan/60 transition-colors duration-300 group-hover:text-cyan`}
                        >
                          {e.num}
                        </span>
                        <h3
                          className={`${playfair.className} text-[1.3rem] font-medium leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-cyan md:text-[1.5rem]`}
                        >
                          {e.title}
                        </h3>
                      </div>
                      <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-ink-muted">
                        {e.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Promise to Talent: Talent. Trust. Thrive. */}
      <section className="relative isolate overflow-hidden bg-deep-2 py-16 text-on-deep md:py-24">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(0,194,255,0.12) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="ft-orb-a pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan/[0.07] blur-3xl"
        />
        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
              <p className="mb-5 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                Our promise to talent
                <span className="inline-block h-px w-8 bg-cyan/60" />
              </p>
              <h2
                className={`${playfair.className} text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-tight text-white`}
              >
                Talent. Trust. <span className="text-cyan">Thrive.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-on-deep-muted">
                At Querentia&reg;, we stand by three pillars that shape every
                relationship we build with the talent we represent.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan/40 hover:bg-white/[0.05] hover:shadow-[0_44px_90px_-46px_rgba(0,194,255,0.5)]">
                  <span aria-hidden className="ft-sheen" />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/25 to-cyan/[0.06] text-cyan shadow-[0_12px_30px_-12px_rgba(0,194,255,0.55)] ring-1 ring-cyan/25 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3
                    className={`${playfair.className} relative mt-6 text-[1.9rem] font-medium leading-tight tracking-tight text-white`}
                  >
                    {p.title}
                  </h3>
                  <p className="relative mt-4 text-base leading-relaxed text-on-deep-muted">
                    {p.body}
                  </p>
                  <span
                    aria-hidden
                    className="relative mt-6 block h-0.5 w-10 bg-cyan transition-all duration-500 group-hover:w-20"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Voices of Talent (was "From the Network") */}
      <section className="relative isolate overflow-hidden bg-page py-16 md:py-24">
        <div
          aria-hidden
          className="ft-orb-b pointer-events-none absolute -left-40 top-32 -z-10 h-[420px] w-[420px] rounded-full bg-cyan/[0.05] blur-3xl"
        />
        <div className="container-x">
          <Reveal>
            <div className="mb-12 max-w-2xl md:mb-16">
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                Voices of talent
              </p>
              <h2
                className={`${playfair.className} text-[clamp(1.9rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight`}
              >
                The people we&apos;ve placed,{" "}
                <span className="text-cyan">in their words.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {VOICES.map((v, i) => (
              <Reveal key={v.role + v.location} delay={(i % 2) * 90}>
                <figure className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan/40 hover:shadow-[0_44px_90px_-46px_rgba(0,194,255,0.4)] md:p-9">
                  <span aria-hidden className="ft-sheen" />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden
                    className={`${playfair.className} relative mb-3 block text-6xl leading-none text-cyan/25 transition-colors duration-300 group-hover:text-cyan/40`}
                  >
                    &ldquo;
                  </span>
                  <blockquote className="relative flex-1 text-[15px] leading-relaxed text-ink md:text-base">
                    {v.quote}
                  </blockquote>
                  <figcaption className="relative mt-7 flex items-center gap-4 border-t border-ink/10 pt-6">
                    <span
                      aria-hidden
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan/25 to-cyan/[0.06] text-xs font-semibold text-cyan ring-2 ring-cyan/30 transition-transform duration-500 group-hover:scale-110"
                    >
                      {initials(v.role)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{v.role}</p>
                      <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                        {v.location}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="relative isolate overflow-hidden bg-deep-2 py-20 text-on-deep md:py-24">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(0,194,255,0.12) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="ft-orb-a pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/[0.08] blur-3xl"
        />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="mb-7 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                Your next move
              </p>
            </Reveal>
            <Reveal delay={130}>
              <h2
                className={`${playfair.className} mb-8 text-balance text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.08] tracking-tight text-white`}
              >
                Let&apos;s find where you{" "}
                <span className="text-cyan">thrive.</span>
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <span
                aria-hidden
                className="ft-line mx-auto mb-8 block h-px w-40 rounded-full"
              />
            </Reveal>
            <Reveal delay={260}>
              <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-on-deep-muted md:text-lg">
                Send us your CV and we&apos;ll come back with a real
                conversation, not a form auto-reply.
              </p>
            </Reveal>
            <Reveal delay={380}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-lg bg-green px-9 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white shadow-[0_16px_40px_-16px_rgba(255,107,43,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700"
                >
                  Submit your CV
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2.5 rounded-lg border border-white/25 px-9 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:border-white/60 hover:bg-white/5"
                >
                  Browse roles
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
