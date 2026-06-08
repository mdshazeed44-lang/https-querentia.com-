import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Sparkles, MapPin, Briefcase, Star } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { clients } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-deep-2 text-on-deep">
      {/* Soft ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="animate-aurora absolute -top-40 left-[15%] h-[36rem] w-[36rem] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.45), transparent 65%)" }}
        />
        <div
          className="animate-aurora-2 absolute -bottom-20 right-[10%] h-[30rem] w-[30rem] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.3), transparent 70%)" }}
        />
      </div>

      <div className="container-x relative flex flex-1 items-center pt-28 pb-10 md:pt-32 md:pb-14">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* LEFT — copy */}
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-on-deep backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue" />
                </span>
                <Sparkles className="h-3.5 w-3.5 text-blue" />
                Trusted IT talent partners · Toronto, Canada
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
                We Build, <span className="text-blue">Attract</span>
                <br />&amp; Ignite Talent
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-on-deep-muted lg:mx-0 md:text-lg">
                Connecting Canada&apos;s leading enterprises with elite technology
                professionals — across cloud, data, security, and engineering.
              </p>
            </Reveal>

            {/* Search bar */}
            <Reveal delay={320}>
              <form
                action="/jobs"
                className="mx-auto mt-9 flex max-w-xl flex-col gap-2 rounded-2xl border border-white/15 bg-white/[0.06] p-2 backdrop-blur-md transition-all duration-500 focus-within:border-blue/60 focus-within:bg-white/[0.1] focus-within:shadow-[0_0_0_4px_rgba(37,99,235,0.18)] sm:flex-row sm:items-center sm:rounded-full lg:mx-0"
              >
                <div className="flex flex-1 items-center gap-2 px-3">
                  <Search className="h-4 w-4 shrink-0 text-blue" />
                  <input
                    name="q"
                    placeholder="Role, skill or keyword"
                    className="w-full bg-transparent py-2.5 text-sm text-white placeholder:text-on-deep-muted/70 focus:outline-none"
                  />
                </div>
                <div className="hidden h-6 w-px bg-white/15 sm:block" />
                <div className="flex flex-1 items-center gap-2 px-3">
                  <MapPin className="h-4 w-4 shrink-0 text-blue" />
                  <input
                    name="location"
                    placeholder="Location"
                    className="w-full bg-transparent py-2.5 text-sm text-white placeholder:text-on-deep-muted/70 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-[1.02] hover:bg-green-700"
                >
                  Search <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-5 lg:mt-6">
                <Button href="/employers" variant="outline-light" className="hover:scale-[1.02]">
                  Hire IT talent instead <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>

            {/* Trusted by */}
            <Reveal delay={560}>
              <div className="mt-12 lg:mt-14">
                <p className="text-xs uppercase tracking-[0.2em] text-on-deep-muted/60">
                  Trusted by top companies in Canada
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 lg:justify-start">
                  {clients.map((c) => (
                    <span
                      key={c}
                      className="text-base font-semibold text-white/55 transition-colors duration-300 hover:text-white md:text-lg"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — visual */}
          <Reveal delay={200}>
            <div className="relative mx-auto hidden w-full max-w-md lg:block">
              {/* Glow ring behind */}
              <span
                aria-hidden
                className="animate-aurora absolute -inset-6 -z-10 rounded-[2.5rem] opacity-70 blur-3xl"
                style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(37,99,235,0.6), transparent 70%)" }}
              />

              {/* Main image card */}
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                  alt="Diverse IT team collaborating around a laptop in a modern Toronto office"
                  fill
                  sizes="(min-width: 1024px) 28rem, 80vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  priority
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(10,19,34,0) 50%, rgba(10,19,34,0.55) 100%)" }}
                />

                {/* Top-left "Live" chip */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green opacity-80" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                  </span>
                  168 live roles
                </div>
              </div>

              {/* Floating job card overlay — bottom-left */}
              <div className="absolute -bottom-6 -left-6 w-60 rounded-2xl border border-border bg-white/95 p-4 shadow-[0_24px_50px_-18px_rgba(15,27,51,0.4)] backdrop-blur-md animate-float">
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ background: "linear-gradient(135deg, #2563eb, #0ea5e9)" }}
                  >
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-deep">Senior Cloud Architect</p>
                    <p className="text-[11px] text-ink-muted">Toronto · Full-time</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px]">
                  <span className="rounded-full bg-green-soft px-2 py-0.5 font-semibold text-green-700">AWS</span>
                  <span className="font-bold text-deep">$165K</span>
                </div>
              </div>

              {/* Floating rating chip — top-right */}
              <div className="absolute -right-4 top-12 inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-3 py-2 shadow-[0_18px_40px_-15px_rgba(15,27,51,0.35)] animate-float-2">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
                  style={{ background: "linear-gradient(135deg, #2563eb, #0ea5e9)" }}
                >
                  <Star className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-bold leading-none text-deep">94%</div>
                  <div className="text-[10px] text-ink-muted">retention</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom curve — extended viewBox so fill overflows ~6 units past section edge, killing subpixel seams */}
      <svg
        aria-hidden
        viewBox="0 0 1440 66"
        preserveAspectRatio="none"
        className="-mb-1.5 block h-12 w-full md:h-16"
      >
        <path d="M0 66V24C240 50 480 60 720 50C960 40 1200 12 1440 26V66H0Z" fill="var(--color-page)" />
      </svg>
    </section>
  );
}
