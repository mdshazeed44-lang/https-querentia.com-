import { Reveal } from "@/components/ui/reveal";
import { clients } from "@/lib/site";

export function ClientWall() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border bg-page-2 py-11 text-ink md:py-14">
      {/* ambient cyan glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-cyan/[0.06] blur-3xl"
      />

      <div className="container-x relative">
        {/* Eyebrow */}
        <Reveal>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan sm:text-[12px] sm:tracking-[0.3em]">
            <span className="hidden h-px w-8 bg-cyan/60 sm:inline-block" />
            Partnered with Leading Organizations
            <span className="hidden h-px w-8 bg-cyan/60 sm:inline-block" />
          </p>
        </Reveal>

        {/* Partner panel */}
        <Reveal delay={120}>
          <div className="mx-auto mt-7 flex max-w-4xl flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-32px_rgba(13,27,42,0.22)] sm:flex-row sm:divide-x sm:divide-y-0 md:mt-8">
            {clients.map((c) => (
              <div
                key={c}
                className="group relative flex flex-1 items-center justify-center px-6 py-6 transition-colors duration-300 hover:bg-page-2 md:py-7"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/logos/${c.toLowerCase()}.png`}
                  alt={c}
                  loading="lazy"
                  className="h-10 w-auto max-w-[180px] object-contain opacity-90 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100 md:h-11"
                />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Trust microcopy */}
        <Reveal delay={220}>
          <p className="mt-5 text-center text-[13px] leading-relaxed text-ink-muted">
            Trusted to deliver exceptional talent across consulting, technology,
            and enterprise teams.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
