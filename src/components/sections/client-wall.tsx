import { Reveal } from "@/components/ui/reveal";
import { clients } from "@/lib/site";

export function ClientWall() {
  return (
    <section className="relative border-t border-border bg-page py-16 text-ink md:py-20">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee 30s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
      <div className="container-x">
        <Reveal>
          <p className="mb-10 flex items-center justify-center gap-4 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan md:mb-12">
            <span className="inline-block h-px w-8 bg-cyan/60" />
            Trusted by Canada&apos;s enterprise IT programs
            <span className="inline-block h-px w-8 bg-cyan/60" />
          </p>
        </Reveal>
      </div>
      <Reveal delay={120}>
        <div className="relative w-full overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[120px] bg-gradient-to-r from-page to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[120px] bg-gradient-to-l from-page to-transparent"
          />
          <div className="marquee-track flex w-max items-center">
            <ul className="flex items-center">
              {clients.map((c) => (
                <li key={c} className="pr-16 md:pr-24">
                  <span
                    className="whitespace-nowrap text-2xl font-medium tracking-tight text-ink/35 transition-colors duration-500 hover:text-ink md:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {c}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="flex items-center" aria-hidden="true">
              {clients.map((c) => (
                <li key={c} className="pr-16 md:pr-24">
                  <span
                    className="whitespace-nowrap text-2xl font-medium tracking-tight text-ink/35 transition-colors duration-500 hover:text-ink md:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
