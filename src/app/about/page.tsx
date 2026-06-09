import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import {
  ArrowRight,
  Check,
} from "@/components/ui/icons";
import { site, clients, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Querentia is a Toronto-area IT recruitment firm placing elite technology talent at Canada's leading enterprises.",
  alternates: { canonical: "/about" },
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
    title: "Trust first",
    desc: "Honest feedback, transparent timelines, no recruiter games. Reputation is everything in this market.",
  },
  {
    title: "Precision over volume",
    desc: "We send shortlists, not resume floods. Quality is faster than quantity — every time.",
  },
  {
    title: "Enterprise speed",
    desc: "48-hour qualified shortlists. Senior-recruiter responsiveness. No black-holed candidates.",
  },
  {
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

// Headline words for stagger
const LINE_1 = ["The", "people"];
const LINE_2 = ["behind", "the", "practice."];

export default function AboutPage() {
  let i = 0;
  const w = () => {
    const d = 0.1 + i * 0.07;
    i++;
    return { animationDelay: `${d}s` } as React.CSSProperties;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 animate-ken-burns">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=80"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
          </div>
          <span
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(11,12,10,0.92) 0%, rgba(11,12,10,0.7) 50%, rgba(11,12,10,0.5) 75%, rgba(11,12,10,0.92) 100%)",
            }}
          />
          <span className="grain absolute inset-0" />
        </div>

        <div className="container-x relative pt-32 pb-20 md:pt-48 md:pb-28">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
                </span>
                About Querentia · Since {site.founded}
              </span>
            </Reveal>

            <h1 className="mt-7 text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-tight">
              {LINE_1.map((word) => (
                <span key={word} className="word mr-[0.22em]" style={w()}>
                  {word}
                </span>
              ))}
              <br />
              {LINE_2.map((word) => (
                <span key={word} className="word mr-[0.22em] text-white/70" style={w()}>
                  {word}
                </span>
              ))}
            </h1>

            <Reveal delay={640}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                Querentia is a specialist IT recruitment firm based in Oakville,
                Canada. We connect Canada&apos;s leading enterprises with the
                technology professionals they need to ship — without the resume
                flood.
              </p>
            </Reveal>

            <Reveal delay={780}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="magnetic shine inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_-12px_rgba(38,112,68,0.5)] transition-colors hover:bg-green-700"
                >
                  Talk to our team <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/jobs"
                  className="magnetic inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-white/60 hover:bg-white/10"
                >
                  See open roles
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-page py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md">
              <div className="lift group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(11,12,10,0.25)]">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
                  alt="A Querentia recruiter consulting a candidate"
                  fill
                  sizes="(min-width: 1024px) 28rem, 80vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/95 px-3 py-1.5 text-xs font-medium text-deep shadow-md backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                  </span>
                  Oakville, ON
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
                Our story
              </p>
              <h2
                className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-deep"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A decade of placing IT talent where it actually moves the needle.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
                Querentia was founded in {site.founded} with one conviction:
                enterprise IT recruitment in Canada deserved better than the
                resume-flood model. Better matches, faster shortlists, honest
                feedback for candidates.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
                A decade later, we&apos;re trusted by Deloitte, Capgemini, CGI
                and a roster of Canada&apos;s most respected firms to staff the
                teams behind their most ambitious programs.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <ul className="mt-7 space-y-3">
                {[
                  "Specialist IT-only practice",
                  "Active network across cloud, data, security, digital",
                  "Two-sided care — employers and candidates",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-deep">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-soft">
                      <Check className="h-3 w-3 text-green" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-deep py-20 text-on-deep md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                What we stand for
              </p>
              <h2
                className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Four principles that run every search.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <Reveal key={v.title} delay={idx * 110}>
                <div className="group lift h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-500 hover:border-sage/40 hover:bg-white/[0.07]">
                  <p
                    className="text-3xl font-medium leading-none text-sage transition-transform duration-500 group-hover:scale-110 origin-left"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    0{idx + 1}
                  </p>
                  <h3
                    className="mt-4 text-xl font-medium tracking-tight text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-deep-muted">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="bg-page py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
                By the numbers
              </p>
              <h2
                className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-deep"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A decade of compound progress.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-y-12 border-y border-border md:grid-cols-4 md:divide-x md:divide-border md:py-12">
            {stats.map((s, idx) => (
              <Reveal key={s.label} delay={idx * 110}>
                <div className="group px-6 text-center">
                  <p
                    className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-none tracking-tight text-deep transition-transform duration-500 group-hover:scale-[1.04]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <CountUp value={s.value} />
                  </p>
                  <span className="mx-auto mt-4 block h-[2px] w-8 bg-green transition-all duration-500 group-hover:w-16" />
                  <p className="mt-3 text-sm font-medium text-deep">{s.label}</p>
                  <p className="mt-1 text-xs text-ink-faint">{s.sub}</p>
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
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
                Leadership
              </p>
              <h2
                className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-deep"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Senior recruiters. Real conversations.
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-3xl gap-5 md:grid-cols-2">
            {leadership.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 140}>
                <div className="group lift h-full overflow-hidden rounded-3xl border border-border bg-card p-6 hover:border-green/40">
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
                      <h3
                        className="text-lg font-medium tracking-tight text-deep"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {p.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-green">
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

      {/* CLIENT STRIP */}
      <section className="border-y border-border bg-page-2 py-12">
        <div className="container-x">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.2em] text-ink-faint">
              Trusted by top companies in Canada
            </p>
          </Reveal>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 lg:justify-between">
            {clients.map((c, idx) => (
              <Reveal key={c} delay={idx * 80}>
                <span
                  className="text-xl font-medium tracking-tight text-deep/60 transition-colors hover:text-deep md:text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
