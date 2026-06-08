import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Check,
  Star,
  Bolt,
  Briefcase,
  Award,
  Target,
  Globe2,
  Layers,
  Bank,
  Code,
} from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Professional Resume Services",
  description:
    "Querentia helps you craft ATS-friendly, Canada-ready resumes and cover letters that get noticed by top firms. 2–4 day turnaround, two rounds of edits, free evaluation for new tech immigrants.",
  alternates: { canonical: "/resume-services" },
  openGraph: {
    title: "Professional Resume Services · Querentia",
    description:
      "Captivating resumes + cover letters tuned for Canada's enterprise hiring teams and ATS — built by senior recruiters.",
    url: `${site.url}/resume-services`,
    type: "article",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Professional Resume Writing & ATS Optimization",
  provider: {
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
  },
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Resume evaluation, professionally written resumes, well-articulated cover letters, and ATS optimization — delivered in 2–4 business days with two rounds of edits.",
};

const questions = [
  "Are you struggling to adapt your resume to the Canadian job market?",
  "Is your resume compatible with modern Applicant Tracking Systems (ATS)?",
  "Do you find it too time-consuming to tailor your resume to each role?",
  "Want to weave in the specific phrases recruiters actually look for?",
];

// Primary deliverables — what you take away
const deliverables = [
  {
    icon: Star,
    title: "Resume evaluation",
    desc: "Honest, line-by-line review of your current resume against the role you're targeting.",
  },
  {
    icon: Briefcase,
    title: "Professionally written resumes",
    desc: "Captivating content + clean, modern design that highlights your strengths and experience.",
  },
  {
    icon: Award,
    title: "Well-articulated cover letters",
    desc: "Sharp, role-specific cover letters that open conversations — not get skipped.",
  },
  {
    icon: Target,
    title: "ATS optimization",
    desc: "Keyword-tuned, parser-friendly formatting so your resume actually reaches a human.",
  },
];

// Included with every package — promises / perks
const included = [
  { icon: Bolt, title: "2–4 day turnaround", desc: "Fast delivery, no corner-cutting." },
  { icon: Layers, title: "Editable Word + PDF", desc: "Both formats — easy to tweak, easy to share." },
  { icon: Code, title: "2 rounds of edits", desc: "Two structured revision cycles included." },
];

const resources = [
  {
    title: "Get the basics right",
    desc: "Comprehensive resume-writing guide from Novorésumé covering structure, tone, and the modern do's-and-don'ts.",
    href: "https://novoresume.com/career-blog/how-to-write-a-resume-guide",
    label: "novoresume.com",
  },
  {
    title: "What career experts at Harvard say",
    desc: "CNBC piece breaking down what a perfect resume looks like — according to Harvard career experts.",
    href: "https://www.cnbc.com/2019/07/10/an-example-of-the-perfect-resume-according-to-harvard-career-experts.html",
    label: "cnbc.com",
  },
];

export default function ResumeServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="relative flex min-h-dvh flex-col overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="animate-aurora absolute -top-32 left-[15%] h-[36rem] w-[36rem] rounded-full blur-[160px]"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.45), transparent 65%)" }}
          />
          <div
            className="animate-aurora-2 absolute -bottom-20 right-[10%] h-[30rem] w-[30rem] rounded-full blur-[160px]"
            style={{ background: "radial-gradient(circle, rgba(14,165,233,0.3), transparent 70%)" }}
          />
        </div>

        <div className="container-x relative flex flex-1 items-center pt-28 pb-10 md:pt-32 md:pb-14">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* LEFT */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-on-deep backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-blue" />
                  Professional Resume Services
                </span>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
                  Resume{" "}
                  <span className="text-blue">Redefined</span>
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-on-deep-muted md:text-lg">
                  Captivating, ATS-ready resumes + cover letters tuned for the
                  Canadian job market — written by senior recruiters who read
                  thousands of CVs a year.
                </p>
              </Reveal>

              <ul className="mt-8 space-y-3">
                {questions.map((q, i) => (
                  <Reveal key={q} delay={320 + i * 80} as="li">
                    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-on-deep transition-colors duration-300 hover:border-blue/40 hover:bg-white/[0.08]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue">
                        <Check className="h-3 w-3" />
                      </span>
                      {q}
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={720}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link
                    href="#quote"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-[1.02] hover:bg-green-700"
                  >
                    Get a quote now <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Button href="/interview-training" variant="outline-light">
                    Interview Training
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — visual */}
            <Reveal delay={200}>
              <div className="relative mx-auto hidden w-full max-w-md lg:block">
                <span
                  aria-hidden
                  className="animate-aurora absolute -inset-6 -z-10 rounded-[2.5rem] opacity-70 blur-3xl"
                  style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(37,99,235,0.6), transparent 70%)" }}
                />
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]">
                  <Image
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80"
                    alt="A professional reviewing a resume on a laptop with handwritten notes"
                    fill
                    sizes="(min-width: 1024px) 28rem, 80vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    priority
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{ background: "linear-gradient(180deg, rgba(10,19,34,0) 50%, rgba(10,19,34,0.55) 100%)" }}
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green opacity-80" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                    </span>
                    ATS-optimized
                  </div>
                </div>

                {/* Floating turnaround chip */}
                <div className="absolute -bottom-6 -left-6 w-60 rounded-2xl border border-border bg-white/95 p-4 shadow-[0_24px_50px_-18px_rgba(15,27,51,0.4)] backdrop-blur-md animate-float">
                  <div className="flex items-start gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                      style={{ background: "linear-gradient(135deg, #2563eb, #0ea5e9)" }}
                    >
                      <Bolt className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-deep">2–4 day turnaround</p>
                      <p className="text-[11px] text-ink-muted">2 rounds of edits included</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom curve — extended viewBox + negative margin removes subpixel seam */}
        <svg
          aria-hidden
          viewBox="0 0 1440 66"
          preserveAspectRatio="none"
          className="-mb-1.5 block h-12 w-full md:h-16"
        >
          <path d="M0 66V24C240 50 480 60 720 50C960 40 1200 12 1440 26V66H0Z" fill="var(--color-page)" />
        </svg>
      </section>

      {/* PITCH — We Can Help */}
      <section className="bg-page py-20 md:py-28">
        <div className="container-x mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-deep md:text-5xl">
              <span className="text-green-700">We Can Help</span> you create
              captivating content
              <br className="hidden md:block" />{" "}
              that gets you noticed by top firms.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Innovative designs and sharply-written content that highlight your
              strengths and experience — built to stand out from the competition
              and get past every screener in the funnel.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8">
              <Button href="#quote" variant="primary" className="px-7">
                Succeed Today <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ROADMAP — Our Services */}
      <section className="bg-page-2 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                A step-by-step roadmap to success
              </p>
              <h2 className="relative mt-3 inline-block text-3xl font-bold tracking-tight text-deep md:text-5xl">
                Our{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(95deg, #2563eb, #0ea5e9)" }}
                >
                  Services
                </span>
                <span
                  aria-hidden
                  className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full"
                  style={{ background: "linear-gradient(90deg, #2563eb, #0ea5e9)" }}
                />
              </h2>
              <p className="mt-8 text-ink-muted">
                Everything you need — packaged, priced, and delivered fast.
              </p>
            </div>
          </Reveal>

          {/* Main 4 deliverables — balanced 2×2 grid */}
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {deliverables.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 100}>
                  <div className="ring-grad lift group relative flex h-full items-start gap-5 overflow-hidden rounded-2xl border border-border bg-card p-7 md:p-8">
                    <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-soft text-green-700 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-green group-hover:text-white group-hover:shadow-[0_12px_28px_-10px_rgba(37,99,235,0.5)]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-deep transition-colors duration-300 group-hover:text-green-700 md:text-xl">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Included with every package — compact 3-card strip */}
          <Reveal delay={200}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_3px_rgba(15,27,51,0.05)]">
              <div className="border-b border-border bg-page-2/70 px-6 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                  Included with every package
                </p>
              </div>
              <div className="grid divide-border md:grid-cols-3 md:divide-x">
                {included.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      className="group flex items-center gap-4 p-6 transition-colors duration-300 hover:bg-page-2/40"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-soft text-green-700 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-green group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-deep">{p.title}</h4>
                        <p className="mt-0.5 text-xs text-ink-muted">{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-page py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-deep md:text-4xl">
                Need help getting started with your new resume?
              </h2>
              <p className="mt-4 text-ink-muted">
                A couple of resources we recommend while you wait for our team.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {resources.map((r, i) => (
              <Reveal key={r.href} delay={i * 140}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ring-grad lift group flex h-full items-start gap-5 rounded-3xl border border-border bg-card p-7 shadow-[0_1px_3px_rgba(15,27,51,0.05)]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-soft text-green-700 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-green group-hover:text-white">
                    <Globe2 className="h-6 w-6" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-deep transition-colors duration-300 group-hover:text-green-700 md:text-lg">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-green-700">
                      {r.label}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEW TO CANADA — special offer */}
      <section id="quote" className="bg-page-2 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_80px_-30px_rgba(15,27,51,0.3)] md:grid md:grid-cols-[1.05fr_0.95fr]">
              {/* LEFT — copy */}
              <div className="relative p-8 md:p-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-green-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                  <Bank className="h-3.5 w-3.5" />
                  New to Canada?
                </span>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-deep md:text-4xl">
                  Free resume evaluation for new tech immigrants
                </h2>
                <p className="mt-4 text-ink-muted">
                  We&apos;ll review your resume against the Canadian market, give
                  honest feedback, and support you with job hunting and
                  networking — at no cost. Pay it forward when you land the role.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:talent@querentia.com?subject=Resume%20Services%20%E2%80%94%20get%20a%20quote"
                    className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-[1.02] hover:bg-green-700"
                  >
                    Get a quote <ArrowRight className="h-4 w-4" />
                  </a>
                  <Button href="/contact" variant="secondary">
                    Contact Us
                  </Button>
                </div>
              </div>

              {/* RIGHT — image */}
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1100&q=80"
                  alt="A new Canadian tech immigrant reviewing her CV on a laptop in a modern coworking space"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "linear-gradient(110deg, rgba(255,255,255,0.4), transparent 40%)" }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
