import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "@/components/ui/icons";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * Shared closing "Talent. Trust. Thrive." CTA (light / Arctic White).
 * Used on About, For Companies and For Talent with a per-page subline.
 * Standard site CTAs only: Hire Talent -> /for-companies, View Roles -> /jobs.
 */
export function ClosingCTA({ subline }: { subline: string }) {
  return (
    <section className="relative isolate overflow-hidden border-t border-border bg-page-2 py-16 text-ink md:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 45%, rgba(0,194,255,0.10) 0%, transparent 62%)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/[0.07] blur-3xl" />
      </div>

      <div className="container-x mx-auto max-w-3xl text-center">
        <Reveal>
          <h2
            className={`${playfair.className} text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[1.05] tracking-tight text-ink`}
          >
            Talent. Trust.{" "}
            <span style={{ color: "#00C2FF" }}>Thrive.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {subline}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/for-companies"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-green px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-green-700"
            >
              Hire Talent
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2.5 rounded-lg border border-ink/25 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:border-ink/60 hover:bg-ink/5"
            >
              View Roles
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
