import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "@/components/ui/icons";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-page py-20 text-ink md:py-28">
      {/* Radial accent — soft cyan on light bg */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0,194,255,0.18) 0%, transparent 60%)",
        }}
      />

      {/* Corner brackets */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-8 top-12 hidden h-14 w-14 border-l border-t border-ink/20 md:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-8 top-12 hidden h-14 w-14 border-r border-t border-ink/20 md:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-12 left-8 hidden h-14 w-14 border-b border-l border-ink/20 md:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-12 right-8 hidden h-14 w-14 border-b border-r border-ink/20 md:block"
      />

      <div className="container-x relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-7 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
            VI · Get in touch
          </p>
        </Reveal>
        <Reveal delay={130}>
          <h2 className="mb-9 text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-ink">
            Most trusted partner
            <br />
            <span
              className="text-cyan"
              style={{ fontFamily: "var(--font-display)" }}
            >
              for exceptional talent.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <p className="mx-auto mb-12 max-w-xl text-base text-ink-muted md:text-lg">
            Connecting organizations with exceptional talent that elevates
            teams and drives growth.
          </p>
        </Reveal>
        <Reveal delay={380}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-green px-9 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-green-700"
            >
              Hire Talent
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2.5 border border-ink/25 px-9 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:border-ink/60 hover:bg-ink/5"
            >
              View Roles
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
