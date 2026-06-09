import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "@/components/ui/icons";
import { clients } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-deep-2 text-on-deep">
      {/* Background portrait image with overlays */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-65"
        />
        {/* Vignette */}
        <span
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(11,12,10,0.92) 0%, rgba(11,12,10,0.6) 45%, rgba(11,12,10,0.3) 70%, rgba(11,12,10,0.85) 100%)",
          }}
        />
        {/* Bottom fade */}
        <span
          className="absolute inset-x-0 bottom-0 h-64"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(11,12,10,0.95))",
          }}
        />
        {/* Subtle grain */}
        <span className="grain absolute inset-0" />
      </div>

      <div className="container-x relative pt-32 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
              </span>
              IT Recruitment · Oakville, Canada
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-7 text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-tight">
              There&apos;s a team
              <br />
              <span className="text-white/70">you should</span> build.
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              The IT recruitment partner Canada&apos;s leading enterprises trust
              to staff their most critical technology programs — through the
              people they already rely on.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02] hover:bg-green-700"
              >
                Hire IT talent <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-white/60 hover:bg-white/10"
              >
                Find a role
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Trust band */}
      <div className="relative border-t border-white/10">
        <div className="container-x py-8 md:py-10">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 lg:justify-between">
            {clients.map((c) => (
              <span
                key={c}
                className="text-xl font-medium tracking-tight text-white/55 transition-colors hover:text-white md:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
