import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

/**
 * Homepage hero — "Premium Executive Search" (client-approved reference).
 * Serif Playfair headline, split layout: copy left, sculptural architectural
 * image right (blends into navy). Renders as a full-height section beneath the
 * fixed SiteHeader; the partner row is handled by the ClientWall section below.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export function Hero() {
  return (
    <section
      data-hero
      className="relative isolate h-screen min-h-[620px] overflow-hidden"
      style={{ backgroundColor: "#0D1B2A" }}
    >
      {/* On desktop the image sits to the right and its left edge is feathered
          into the navy with a mask — no hard seam, no shade band. On mobile it
          is a full-bleed backdrop under a veil. */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-arch-mask {
            -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 32%, #000 100%);
            mask-image: linear-gradient(90deg, transparent 0%, #000 32%, #000 100%);
          }
        }
      `}</style>
      <div className="hero-arch-mask absolute inset-0 lg:left-[40%] lg:top-16">
        <Image
          src="/hero-arch.webp"
          alt="A lone professional standing inside a sculptural concrete opening beneath an open sky"
          fill
          priority
          sizes="(min-width:1024px) 60vw, 100vw"
          className="object-cover object-center"
        />
      </div>
      {/* mobile veil */}
      <div
        aria-hidden
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,27,42,0.78), rgba(13,27,42,0.92))",
        }}
      />
      {/* desktop: gentle navy wash on the far left for copy depth (mask does the blend) */}
      <div
        aria-hidden
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, #0D1B2A 0%, rgba(13,27,42,0.85) 26%, rgba(13,27,42,0.2) 40%, rgba(13,27,42,0) 52%)",
        }}
      />

      {/* Copy */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container-x w-full">
          <div className="max-w-xl">
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.3em] md:text-[13px]"
              style={{ color: "#00C2FF" }}
            >
              Talent · Trust · Thrive
            </p>
            <span
              className="mt-4 block h-px w-12"
              style={{ background: "rgba(0,194,255,0.6)" }}
            />

            <h1
              className={`${playfair.className} mt-7 font-medium`}
              style={{
                fontSize: "clamp(1.85rem, 4vw, 3.35rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "#F4F7FA",
              }}
            >
              Delivering the talent that helps your business{" "}
              <span style={{ color: "#00C2FF", fontStyle: "italic" }}>
                thrive.
              </span>
            </h1>

            <p
              className="mt-7 max-w-lg text-[15px] leading-relaxed sm:text-[16px] lg:text-[18px]"
              style={{ color: "#c6cfda" }}
            >
              Your trusted recruitment partner. Connecting organizations with
              exceptional talent that elevates teams and drives growth.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/for-companies"
                className="group inline-flex items-center gap-3 rounded-lg px-7 py-4 text-[14px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: "#FF6B2B" }}
              >
                Hire Talent
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link
                href="/jobs"
                className="group inline-flex items-center gap-3 rounded-lg px-7 py-4 text-[14px] font-semibold transition-colors duration-300 hover:bg-cyan/5"
                style={{ color: "#00C2FF", border: "1px solid rgba(0,194,255,0.55)" }}
              >
                View Roles
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
