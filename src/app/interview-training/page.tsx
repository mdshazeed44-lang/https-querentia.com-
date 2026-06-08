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
  Users,
  Award,
  Target,
  Briefcase,
} from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Interview Training",
  description:
    "Querentia's virtual interview bootcamp teaches the soft-skills hiring managers actually score you on — from storytelling to body language to salary negotiation. Built by recruiters who run the interviews.",
  alternates: { canonical: "/interview-training" },
  openGraph: {
    title: "Interview Training · Querentia",
    description:
      "Sharpen the soft skills that decide hiring outcomes — taught by the recruiters who hire.",
    url: `${site.url}/interview-training`,
    type: "article",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Querentia Interview Training Bootcamp",
  description:
    "Virtual bootcamp that teaches interview soft skills — storytelling, executive presence, behavioural answers, negotiation — taught by senior recruiters.",
  provider: {
    "@type": "Organization",
    name: site.legalName,
    sameAs: site.url,
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "PT3H",
      location: { "@type": "VirtualLocation", url: `${site.url}/interview-training` },
    },
  ],
};

const questions = [
  "Have you ever thought about the gaps between you and your dream job?",
  "Have you ever deep-dived after an interview or a meeting?",
  "Do you often ask yourself — ‘did I do well at that meeting?’",
  "Do you know the subtle art of getting ready for success?",
];

const skills = [
  {
    icon: Sparkles,
    title: "Executive presence",
    desc: "Show up calm, confident, and credible — from the first 30 seconds of the call.",
  },
  {
    icon: Star,
    title: "Storytelling that lands",
    desc: "Turn your experience into structured STAR answers hiring managers remember.",
  },
  {
    icon: Bolt,
    title: "Sharp behavioural answers",
    desc: "Handle 'tell me about a time…' and curveballs without freezing up.",
  },
  {
    icon: Target,
    title: "Negotiation, the right way",
    desc: "Talk salary, scope, and start date — confidently and without burning bridges.",
  },
  {
    icon: Users,
    title: "Body language & virtual presence",
    desc: "Eye contact, framing, posture — the things that quietly tank a great resume.",
  },
  {
    icon: Award,
    title: "Closing strong",
    desc: "Great final questions, polished follow-ups, and reading the room for next steps.",
  },
];

const audiences = [
  {
    eyebrow: "New immigrant",
    title: "Searching for your first job in Canada",
    desc: "Translate global experience into local language, win the trust of Canadian hiring teams.",
  },
  {
    eyebrow: "Seasoned professional",
    title: "Going for a switch or a step up",
    desc: "Reset stale interview muscles. Polish the senior-level signal recruiters look for.",
  },
  {
    eyebrow: "Fresh graduate",
    title: "Hunting for your first role",
    desc: "Compete with confidence. Bridge the gap between a strong CV and a great interview.",
  },
];

export default function InterviewTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
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
            {/* LEFT — copy + questions */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-on-deep backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-blue" />
                  Career Programs · Virtual Bootcamp
                </span>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
                  Interview <span className="text-blue">Training</span>
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-on-deep-muted md:text-lg">
                  Sharpen the soft skills hiring managers actually score you on —
                  taught by the recruiters who run the interviews.
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
                    href="#register"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-[1.02] hover:bg-green-700"
                  >
                    Register interest <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Button href="/jobs" variant="outline-light">
                    Browse open roles
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
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80"
                    alt="A Querentia coach running an interview-training session with a candidate"
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
                    Live bootcamp coming soon
                  </div>
                </div>

                {/* Floating chip */}
                <div className="absolute -bottom-6 -left-6 w-60 rounded-2xl border border-border bg-white/95 p-4 shadow-[0_24px_50px_-18px_rgba(15,27,51,0.4)] backdrop-blur-md animate-float">
                  <div className="flex items-start gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                      style={{ background: "linear-gradient(135deg, #2563eb, #0ea5e9)" }}
                    >
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-deep">Soft-skills-led</p>
                      <p className="text-[11px] text-ink-muted">Built by senior recruiters</p>
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

      {/* INTRO COPY */}
      <section className="bg-page py-20 md:py-28">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-deep md:text-4xl">
              Pre-interview anxiety can sabotage even a great resume.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              A study tells us the biggest fear of any professional — junior or
              senior — after an interaction is the same:{" "}
              <em className="text-deep">&apos;did I do okay?&apos;</em> A job
              interview is often a make-or-break moment, and predicting the
              questions alone is no brainer. What separates the offer from the
              rejection is how you show up.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Whether you&apos;re a new immigrant searching for your first role
              in Canada, a seasoned professional looking to switch, or a fresh
              graduate hunting for your first job, the soft skills are what
              decide the outcome. We call them{" "}
              <strong className="text-deep">Interview Soft Skills</strong> —
              and you can learn them from the people who run the interviews.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="bg-page-2 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="relative inline-block text-3xl font-bold tracking-tight text-deep md:text-5xl">
                Built for{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(95deg, #2563eb, #0ea5e9)" }}
                >
                  everyone interviewing
                </span>
                <span
                  aria-hidden
                  className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full"
                  style={{ background: "linear-gradient(90deg, #2563eb, #0ea5e9)" }}
                />
              </h2>
              <p className="mt-8 text-ink-muted">
                Three career moments where this bootcamp moves the needle.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 140}>
                <div className="ring-grad lift group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[0_1px_3px_rgba(15,27,51,0.05)]">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue/0 blur-2xl transition-all duration-500 group-hover:bg-blue/20"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                    {a.eyebrow}
                  </p>
                  <h3 className="mt-3 text-lg font-bold text-deep">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS YOU'LL LEARN */}
      <section className="bg-page py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                What you&apos;ll learn
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep md:text-5xl">
                The soft skills hiring managers quietly score you on.
              </h2>
              <p className="mt-4 text-ink-muted">
                Six muscles we&apos;ll train in the bootcamp.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="ring-grad lift group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6">
                    <span
                      className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-green-soft text-green-700 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-green group-hover:text-white group-hover:shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)]"
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-deep transition-colors duration-300 group-hover:text-green-700">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* REGISTER / COMING SOON */}
      <section id="register" className="bg-page-2 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div
              className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] px-6 py-14 text-center text-white shadow-[0_30px_80px_-30px_rgba(37,99,235,0.55)] md:px-14 md:py-20"
              style={{
                background:
                  "linear-gradient(120deg, #0a1322 0%, #1e3a8a 35%, #2563eb 70%, #0ea5e9 100%)",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 12s ease-in-out infinite",
              }}
            >
              <div
                aria-hidden
                className="animate-aurora pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full blur-[120px]"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)" }}
              />
              <div
                aria-hidden
                className="animate-aurora-2 pointer-events-none absolute -right-10 -bottom-10 h-72 w-72 rounded-full blur-[120px]"
                style={{ background: "radial-gradient(circle, rgba(56,189,248,0.5), transparent 70%)" }}
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md">
                  <span className="h-2 w-2 animate-blink rounded-full bg-green" />
                  Coming Soon
                </span>
                <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                  Ready to take charge of your success?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/85">
                  Register interest in our virtual bootcamp. We&apos;ll email you the moment a cohort opens — and send a short prep guide in the meantime.
                </p>

                <form
                  action="mailto:talent@querentia.com?subject=Interview%20Training%20Bootcamp%20%E2%80%94%20interested"
                  method="post"
                  className="mx-auto mt-8 flex max-w-md flex-col gap-2 rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur-md sm:flex-row sm:items-center sm:rounded-full"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@work.com"
                    className="w-full flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/55 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-deep transition-all duration-300 hover:scale-[1.02]"
                  >
                    Notify me <ArrowRight className="h-4 w-4" />
                  </button>
                </form>

                <p className="mt-4 text-xs text-white/65">
                  No spam — only bootcamp updates. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
