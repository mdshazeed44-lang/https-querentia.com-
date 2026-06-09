import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "@/components/ui/icons";

const pillars = [
  {
    n: "01",
    word: "Build",
    title: "Specialist IT recruitment, built on industry insight.",
    body:
      "We are industry experts uniquely positioned to help you understand what internal recruiters and HR teams are looking for — our recruitment services are sharpened by an industry-specific outlook only specialists can provide.",
    href: "/about",
    cta: "About Querentia",
  },
  {
    n: "02",
    word: "Attract",
    title: "A world-class experience for clients and candidates.",
    body:
      "We are committed to a world-class experience. Passionate about your success — that means access to the best tech and digital jobs for candidates, and talented, motivated people for the businesses that hire us.",
    href: "/resume-services",
    cta: "Resume Services",
  },
  {
    n: "03",
    word: "Ignite",
    title: "Top industry talent. Holistic career support.",
    body:
      "Beyond placements — we run Resume Evaluation and Interview Training Bootcamps so the professionals we represent walk into every conversation prepared, polished, and ready to win.",
    href: "/interview-training",
    cta: "Interview Training",
  },
];

export function Trio() {
  return (
    <section className="bg-page py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green">
            What we do
          </p>
        </Reveal>

        <div className="mt-12 space-y-20 md:space-y-28">
          {pillars.map((p, idx) => {
            const flip = idx % 2 === 1;
            return (
              <article
                key={p.n}
                className={`grid items-end gap-8 md:grid-cols-12 md:gap-12 ${
                  flip ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Word + number column */}
                <Reveal className="md:col-span-7">
                  <div>
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-faint"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.n}
                    </span>
                    <h2
                      className={`mt-3 text-[clamp(4rem,14vw,14rem)] font-medium leading-[0.85] tracking-[-0.05em] ${
                        idx === 2 ? "italic text-green" : "text-deep"
                      }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.word}
                    </h2>
                  </div>
                </Reveal>

                {/* Copy column */}
                <Reveal delay={140} className="md:col-span-5">
                  <div className="border-l-2 border-deep pl-6 md:pl-8">
                    <h3
                      className="text-xl font-medium leading-snug tracking-tight text-deep md:text-2xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
                      {p.body}
                    </p>
                    <Link
                      href={p.href}
                      className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-deep transition-colors hover:text-green"
                    >
                      <span className="relative">
                        {p.cta}
                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-current opacity-30 transition-opacity group-hover:opacity-100" />
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
