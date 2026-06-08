import Link from "next/link";

/**
 * Floating palette button — bottom-right of every page.
 * Replaces the old "Palette" nav item. Opens /palettes for client review.
 * Renders a stack of color swatches inside a glassy circular pill.
 */
export function PaletteFab() {
  return (
    <Link
      href="/palettes"
      aria-label="Browse palette options"
      title="Browse palette options"
      className="group fixed bottom-5 right-5 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-deep-2/90 shadow-[0_18px_40px_-12px_rgba(15,27,51,0.45)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-deep-2 md:bottom-6 md:right-6 md:h-14 md:w-14"
    >
      <span aria-hidden className="relative block h-6 w-6 md:h-7 md:w-7">
        {/* Palette icon — 4 small swatches arranged in a circular pattern */}
        <span
          className="absolute h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:-translate-y-0.5 md:h-3 md:w-3"
          style={{ background: "var(--color-green)", top: 0, left: "50%", transform: "translateX(-50%)" }}
        />
        <span
          className="absolute h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 md:h-3 md:w-3"
          style={{ background: "var(--color-blue)", right: 0, top: "50%", transform: "translateY(-50%)" }}
        />
        <span
          className="absolute h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:translate-y-0.5 md:h-3 md:w-3"
          style={{ background: "var(--color-sage)", bottom: 0, left: "50%", transform: "translateX(-50%)" }}
        />
        <span
          className="absolute h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:-translate-x-0.5 md:h-3 md:w-3"
          style={{ background: "#ffffff", left: 0, top: "50%", transform: "translateY(-50%)" }}
        />
      </span>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-deep-2 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block">
        Browse palettes
      </span>
    </Link>
  );
}
