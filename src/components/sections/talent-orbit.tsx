import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function TalentOrbit() {
  return (
    <section className="relative overflow-hidden bg-deep-2 text-on-deep">
      <div className="container-x">
        <div className="grid items-center gap-12 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — copy */}
          <div className="max-w-xl">
            <Reveal>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan">
                <span className="inline-block h-px w-8 bg-cyan/60" />
                One network · Every discipline
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2
                className="mb-7 text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The talent universe, <span className="text-cyan">in orbit.</span>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mb-9 max-w-md text-base leading-relaxed text-on-deep-muted md:text-lg">
                From cloud architects to cybersecurity leads — one pre-vetted
                network of senior IT professionals, matched to your mandate
                with precision.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <Link
                href="/for-companies"
                className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-cyan transition-colors hover:text-white"
              >
                How we match
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          {/* RIGHT — relevant image (static) */}
          <Reveal delay={200}>
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-cyan/25 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
                  alt="Senior IT professionals collaborating as one team"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                {/* subtle navy tint so the photo sits in the brand */}
                <span
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,27,42,0.45) 0%, rgba(13,27,42,0.05) 45%, transparent 100%)",
                  }}
                />
              </div>
              {/* floating caption pill */}
              <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-deep-2/90 px-4 py-2 text-xs font-medium text-cyan backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
                </span>
                Pre-vetted senior network
              </div>
            </div>
          </Reveal>
        </div>
      </div>

    </section>
  );
}
