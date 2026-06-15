import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight } from "@/components/ui/icons";
import { HeroCursorGlow } from "./hero-cursor-glow";
import { HeroTalentOrbit } from "@/components/ui/hero-talent-orbit";

export function Hero() {
  return (
    <section
      data-hero
      className="hero-themed relative isolate flex h-screen min-h-[680px] flex-col justify-center overflow-hidden pb-14 pt-24 md:pb-16 md:pt-24 lg:pb-0"
    >
      {/* Ambient gradient backdrop (cyan radial accent — visible in both themes) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,194,255,0.10) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0,194,255,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Cursor-tracking cyan glow (client component, respects reduced motion / touch) */}
      <HeroCursorGlow />

      <div className="container-x relative z-10 grid items-center gap-16 lg:h-full lg:flex-1 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* ---------- LEFT — copy + audience-split CTAs ---------- */}
        <div className="text-center lg:text-left">
          <Reveal>
            <p
              className="mb-6 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: "var(--haccent)" }}
            >
              <span
                className="text-sm tracking-normal"
                style={{ fontFamily: "var(--font-display)" }}
              >
                I
              </span>
              <span className="inline-block h-px w-6 bg-current opacity-50" />
              <span>Talent · Trust · Thrive</span>
              <span className="relative ml-1 flex h-1.5 w-1.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                  style={{ background: "var(--haccent)" }}
                />
                <span
                  className="relative inline-flex h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--haccent)" }}
                />
              </span>
            </p>
          </Reveal>

          <Reveal delay={140}>
            <h1
              className="text-balance font-medium"
              style={{
                fontSize: "clamp(1.85rem, 3.9vw, 3.25rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.022em",
                color: "var(--ht)",
                maxWidth: "20ch",
              }}
            >
              Delivering the talent that helps your
              <br className="hidden sm:block" />{" "}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--haccent)",
                  fontStyle: "italic",
                }}
              >
                business thrive.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p
              className="mx-auto mt-5 max-w-lg text-[14px] leading-relaxed md:text-[15px] lg:mx-0"
              style={{ color: "var(--htm)" }}
            >
              Your trusted recruitment partner. Connecting organizations with
              exceptional talent that elevates teams and drives growth.
            </p>
          </Reveal>

          <Reveal delay={440}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <MagneticButton
                href="/for-companies"
                className="group inline-flex items-center bg-green px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-green-700"
              >
                Hire Talent
                <ArrowRight className="ml-2.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
              <Link
                href="/jobs"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.25em] transition-colors duration-300"
                style={{
                  color: "var(--hbtn-secondary-text)",
                  border: "1px solid var(--hbtn-secondary-border)",
                }}
              >
                View Roles
                <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ---------- RIGHT — interactive orbit, pinned to section bottom ---------- */}
        <Reveal delay={250} className="hidden lg:block lg:self-stretch">
          {/* overshoot > max parallax(18px)+float(6px) lift, so the figure never
              reveals a gap above the section edge */}
          <div className="flex h-full items-end justify-center lg:-mb-8">
            <HeroTalentOrbit />
          </div>
        </Reveal>
      </div>

    </section>
  );
}
