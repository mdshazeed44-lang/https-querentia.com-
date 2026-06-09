import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, Star, Users, Award } from "@/components/ui/icons";

export function WhyBento() {
  return (
    <section className="bg-page py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green">
                Why Querentia
              </p>
              <h2
                className="mt-3 max-w-2xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-deep"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Three reasons our clients keep coming back.
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-deep transition-colors hover:text-green"
            >
              <span className="relative">
                Start the conversation
                <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-current opacity-30 transition-opacity group-hover:opacity-100" />
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        {/* Asymmetric bento — first card is large/featured, two smaller */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-2 md:gap-6">
          {/* Big feature card — spans 2 cols × 2 rows */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-deep p-10 text-on-deep md:p-14">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full blur-[120px]"
                style={{ background: "radial-gradient(circle, rgba(143,184,159,0.35), transparent 70%)" }}
              />
              <div className="relative">
                <span
                  className="text-xs font-semibold uppercase tracking-[0.3em] text-sage"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  01 — The principle
                </span>
                <h3
                  className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  People are the heart <em className="italic text-sage">and soul</em> of our business.
                </h3>
                <p className="mt-6 max-w-md text-base leading-relaxed text-on-deep-muted md:text-lg">
                  We strive to create opportunities and outcomes shaped to your
                  passion, expertise, and the path you actually want — not the
                  one a CRM dropdown chose for you.
                </p>
              </div>
              <div className="relative mt-12 flex items-end justify-between">
                <Users className="h-12 w-12 text-sage" />
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Our story <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          </Reveal>

          {/* Small card 1 */}
          <Reveal delay={140}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-green/40">
              <Star className="h-6 w-6 text-green" />
              <span
                className="mt-5 block text-xs font-semibold uppercase tracking-[0.3em] text-ink-faint"
                style={{ fontFamily: "var(--font-display)" }}
              >
                02 — The standard
              </span>
              <h3
                className="mt-3 text-2xl font-medium leading-tight tracking-tight text-deep"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Passionate about client success.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                First-class customer service, top-class candidates — every
                shortlist sharpened around the brief, not padded with volume.
              </p>
            </article>
          </Reveal>

          {/* Small card 2 */}
          <Reveal delay={280}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-green/40">
              <Award className="h-6 w-6 text-green" />
              <span
                className="mt-5 block text-xs font-semibold uppercase tracking-[0.3em] text-ink-faint"
                style={{ fontFamily: "var(--font-display)" }}
              >
                03 — The advantage
              </span>
              <h3
                className="mt-3 text-2xl font-medium leading-tight tracking-tight text-deep"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A holistic approach.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Resume Evaluation, professional resume building, and Interview
                Training Bootcamps — so the professionals we represent walk in
                fully prepared.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
