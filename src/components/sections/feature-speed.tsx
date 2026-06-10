import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { TimelineMockup } from "@/components/ui/timeline-mockup";

export function FeatureSpeed() {
  return (
    <section className="bg-page py-20 text-ink md:py-24">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                Speed
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mb-7 text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-ink">
                48-hour shortlists.
                <br />
                <span
                  className="text-cyan"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Without sacrificing precision.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mb-9 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
                A decade of relationships means we don&apos;t start from cold
                every time. When you brief us, we already know who to call —
                from our pre-vetted network of senior IT professionals. Most
                enterprise mandates close the shortlist stage in under 48
                hours.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <Link
                href="/for-companies"
                className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-cyan transition-colors hover:text-ink"
              >
                How it works
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          {/* Timeline mockup */}
          <Reveal delay={180}>
            <div className="order-1 lg:order-2">
              <TimelineMockup />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
