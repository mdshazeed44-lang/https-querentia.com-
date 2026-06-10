import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Logo Options — Querentia",
  robots: { index: false, follow: false },
};

const options = [
  {
    label: "Option 01 — Wordmark",
    src: "/logos/querentia-option-1.svg",
    alt: "Logo option 1",
    rationale:
      "Clean geometric wordmark with a cyan initial Q — the lightest, most versatile mark for headers, email signatures, and documents.",
  },
  {
    label: "Option 02 — Monogram Circle",
    src: "/logos/querentia-option-2.svg",
    alt: "Logo option 2",
    rationale:
      "A cyan-ringed Q monogram echoes the circle-driven brand graphics and doubles as a standalone favicon or avatar mark.",
  },
  {
    label: "Option 03 — Stacked Modern",
    src: "/logos/querentia-option-3.svg",
    alt: "Logo option 3",
    rationale:
      "Centered stacked lockup with a signal-orange full stop — confident and compact, ideal for social profiles and presentation covers.",
  },
];

export default function LogoOptionsPage() {
  return (
    <main className="min-h-screen bg-deep-2 pt-32 pb-24 text-on-deep">
      <div className="container-x">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan">
            <span className="inline-block h-px w-8 bg-cyan/60" />
            Internal Preview
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1
            className="text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Querentia — Three Logo Options
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-4 max-w-2xl text-on-deep-muted md:text-lg">
            Registered wordmark with Precision . Impact . Integrity
          </p>
        </Reveal>

        <div className="mt-16 space-y-16">
          {options.map((option, i) => (
            <Reveal key={option.src} delay={i * 80}>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                {option.label}
              </p>
              <div className="flex items-center justify-center rounded-3xl bg-white p-12 md:p-16">
                {/* eslint-disable-next-line @next/next/no-img-element -- static SVG concept asset */}
                <img
                  src={option.src}
                  alt={option.alt}
                  className="h-24 w-auto md:h-28"
                />
              </div>
              <p className="mt-4 text-sm text-on-deep-muted md:text-base">
                {option.rationale}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
