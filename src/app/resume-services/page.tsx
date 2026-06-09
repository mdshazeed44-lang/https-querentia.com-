import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRight,
  Check,
  Star,
  Bolt,
  Briefcase,
  Award,
  Target,
  Globe2,
  Layers,
  Code,
} from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume Services",
  description:
    "ATS-ready resumes + cover letters tuned for Canada's enterprise hiring teams — written by senior recruiters.",
  alternates: { canonical: "/resume-services" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Professional Resume Writing & ATS Optimization",
  provider: { "@type": "Organization", name: site.legalName, url: site.url },
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Resume evaluation, professionally written resumes, well-articulated cover letters, ATS optimization. 2–4 day turnaround, 2 rounds of edits.",
};

const questions = [
  "Adapting your resume to the Canadian market?",
  "Is your CV compatible with modern ATS?",
  "Too time-consuming to tailor per role?",
  "Want the exact phrases recruiters look for?",
];

const deliverables = [
  { icon: Star, title: "Resume evaluation", desc: "Line-by-line review against your target role." },
  { icon: Briefcase, title: "Professionally written resumes", desc: "Clean, modern design that highlights what matters." },
  { icon: Award, title: "Well-articulated cover letters", desc: "Sharp, role-specific letters that open conversations." },
  { icon: Target, title: "ATS optimization", desc: "Keyword-tuned, parser-friendly so it reaches a human." },
];

const included = [
  { icon: Bolt, title: "2–4 day turnaround" },
  { icon: Layers, title: "Editable Word + PDF" },
  { icon: Code, title: "2 rounds of edits" },
];

const LINE_1 = ["Resume,"];
const LINE_2 = ["redefined."];

export default function ResumeServicesPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 animate-ken-burns">
            <Image
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=2400&q=80"
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
                "linear-gradient(115deg, rgba(11,12,10,0.92) 0%, rgba(11,12,10,0.65) 50%, rgba(11,12,10,0.5) 75%, rgba(11,12,10,0.92) 100%)",
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
                Professional Resume Services
              </span>
            </Reveal>

            <h1 className="mt-7 text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-[0.95] tracking-tight">
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

            <Reveal delay={500}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                ATS-ready resumes and cover letters tuned for the Canadian
                market — written by senior recruiters who read thousands of CVs
                a year.
              </p>
            </Reveal>

            <ul className="mt-7 max-w-xl space-y-2">
              {questions.map((q, idx) => (
                <Reveal key={q} delay={620 + idx * 80} as="li">
                  <div className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
                      <Check className="h-3 w-3" />
                    </span>
                    {q}
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={960}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="#quote"
                  className="magnetic shine inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_-12px_rgba(38,112,68,0.5)] transition-colors hover:bg-green-700"
                >
                  Get a quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/interview-training"
                  className="magnetic inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-white/60 hover:bg-white/10"
                >
                  Interview Training
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PITCH */}
      <section className="bg-page py-20 md:py-28">
        <div className="container-x mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
              We can help
            </p>
            <h2
              className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Captivating content that gets you noticed by top firms.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
              Innovative designs and sharply-written copy that highlight your
              strengths — built to stand out and get past every screener.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <Link
              href="#quote"
              className="magnetic mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_-12px_rgba(38,112,68,0.4)] transition-colors hover:bg-green-700"
            >
              Succeed today <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* DELIVERABLES + INCLUDED */}
      <section className="bg-page-2 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
                Our services
              </p>
              <h2
                className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-deep"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Everything you need.
              </h2>
            </div>
          </Reveal>

          {/* 2x2 deliverables */}
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {deliverables.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={idx * 110}>
                  <div className="group lift flex h-full items-start gap-5 rounded-3xl border border-border bg-card p-7 hover:border-green/40 md:p-8">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-soft text-green transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-green group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3
                        className="text-xl font-medium tracking-tight text-deep transition-colors duration-300 group-hover:text-green"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Included strip */}
          <Reveal delay={200}>
            <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
              <div className="border-b border-border bg-page-2 px-6 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
                  Included with every package
                </p>
              </div>
              <div className="grid divide-border md:grid-cols-3 md:divide-x">
                {included.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="flex items-center gap-3 p-6">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-soft text-green">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="text-sm font-medium text-deep">{p.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEW TO CANADA CTA */}
      <section id="quote" className="bg-page py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="grain animate-gradient-pan relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-24"
              style={{
                background:
                  "linear-gradient(120deg, #0b0c0a 0%, #1a1c19 30%, #1f3a2a 60%, #1a1c19 100%)",
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(143,184,159,0.25), transparent 70%)" }}
              />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                    New to Canada?
                  </p>
                  <h2
                    className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.05] tracking-tight text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Free resume evaluation for new tech immigrants.
                  </h2>
                  <p className="mt-4 max-w-md text-on-deep-muted">
                    We&apos;ll review your CV against the Canadian market, give
                    honest feedback, and support your search — at no cost.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                  <a
                    href={`mailto:${site.email}?subject=Resume%20Services%20%E2%80%94%20get%20a%20quote`}
                    className="magnetic shine inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_-12px_rgba(38,112,68,0.5)] transition-colors hover:bg-green-700"
                  >
                    Get a quote <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/contact"
                    className="magnetic inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
