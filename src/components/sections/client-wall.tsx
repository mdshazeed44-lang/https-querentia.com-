import { Reveal } from "@/components/ui/reveal";
import { clients } from "@/lib/site";

export function ClientWall() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border bg-page-2 pt-12 pb-9 text-ink md:pt-14 md:pb-10">
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

        {/* Logo row — clean & borderless, evenly spaced, muted until hover */}
        <Reveal delay={120}>
          <div className="mx-auto mt-9 grid max-w-5xl grid-cols-2 items-center gap-x-8 gap-y-9 sm:grid-cols-3 sm:gap-x-10 lg:grid-cols-5 lg:gap-x-12 md:mt-11">
            {clients.map((c) => (
              <div key={c} className="flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/logos/${c.toLowerCase()}.png`}
                  alt={`${c} logo`}
                  loading="lazy"
                  width={180}
                  height={44}
                  className="h-9 w-auto max-w-[150px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-10"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
