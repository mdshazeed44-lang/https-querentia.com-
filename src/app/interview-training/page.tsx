import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRight,
  Check,
  Star,
  Bolt,
  Users,
  Award,
  Target,
  Sparkles,
} from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Interview Training",
  description:
    "Sharpen the soft skills hiring managers score you on — taught by senior recruiters who run interviews.",
  alternates: { canonical: "/interview-training" },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Querentia Interview Training Bootcamp",
  description:
    "Virtual bootcamp teaching interview soft skills — storytelling, executive presence, behavioural answers, negotiation.",
  provider: { "@type": "Organization", name: site.legalName, sameAs: site.url },
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
  "Have you thought about the gaps between you and your dream job?",
  "Have you deep-dived after an interview?",
  "Did you ever ask — 'did I do well at that meeting?'",
  "Do you know the subtle art of getting ready for success?",
];

const skills = [
  { icon: Sparkles, title: "Executive presence", desc: "Calm, confident, credible — from the first 30 seconds." },
  { icon: Star, title: "Storytelling that lands", desc: "Turn experience into structured STAR answers." },
  { icon: Bolt, title: "Sharp behavioural answers", desc: "Handle curveballs without freezing up." },
  { icon: Target, title: "Negotiation, the right way", desc: "Salary, scope, start date — confidently." },
  { icon: Users, title: "Body language & presence", desc: "Eye contact, framing, posture — done right." },
  { icon: Award, title: "Closing strong", desc: "Final questions + polished follow-ups." },
];

const LINE_1 = ["Interview"];
const LINE_2 = ["coaching."];

export default function InterviewTrainingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-deep-2 text-on-deep">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 animate-ken-burns">
            <Image
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2400&q=80"
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
                Career Programs · Virtual Bootcamp
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

            <Reveal delay={460}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                Sharpen the soft skills hiring managers actually score you on —
                taught by the recruiters who run the interviews.
              </p>
            </Reveal>

            <ul className="mt-7 max-w-xl space-y-2">
              {questions.map((q, idx) => (
                <Reveal key={q} delay={580 + idx * 80} as="li">
                  <div className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
                      <Check className="h-3 w-3" />
                    </span>
                    {q}
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={920}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="#register"
                  className="magnetic shine inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_-12px_rgba(38,112,68,0.5)] transition-colors hover:bg-green-700"
                >
                  Register interest <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/jobs"
                  className="magnetic inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-white/60 hover:bg-white/10"
                >
                  Browse roles
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INTRO COPY */}
      <section className="bg-page py-20 md:py-28">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pre-interview anxiety can sabotage even a great resume.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
              The biggest fear of any professional after an interview is the
              same: <em className="text-deep">&apos;did I do okay?&apos;</em>{" "}
              What separates the offer from rejection is how you show up — the{" "}
              <strong className="text-deep">Interview Soft Skills</strong> you
              can learn from the people who run interviews.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-page-2 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
                What you&apos;ll learn
              </p>
              <h2
                className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-deep"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Six muscles we train in the bootcamp.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={idx * 100}>
                  <div className="group lift h-full rounded-3xl border border-border bg-card p-7 hover:border-green/40">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-soft text-green transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-green group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3
                      className="mt-5 text-xl font-medium tracking-tight text-deep transition-colors duration-300 group-hover:text-green"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
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

      {/* REGISTER CTA */}
      <section id="register" className="bg-page py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div
              className="grain animate-gradient-pan relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-24"
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
              <div className="relative mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  Coming Soon
                </span>
                <h2
                  className="mt-5 text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Take charge of your success.
                </h2>
                <p className="mt-5 text-on-deep-muted md:text-lg">
                  Register interest in our virtual bootcamp. We&apos;ll email you the moment a cohort opens.
                </p>
                <form
                  action={`mailto:${site.email}?subject=Interview%20Training%20Bootcamp%20%E2%80%94%20interested`}
                  method="post"
                  encType="text/plain"
                  className="mx-auto mt-8 flex max-w-md flex-col gap-2 rounded-full border border-white/20 bg-white/[0.06] p-2 backdrop-blur-md sm:flex-row sm:items-center"
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
                    className="magnetic inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
                  >
                    Notify me <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
