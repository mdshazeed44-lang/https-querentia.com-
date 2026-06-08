import Link from "next/link";

/**
 * Floating palette button — bottom-right of every page.
 * Minimalist artist-palette SVG inside a glass pill.
 */
export function PaletteFab() {
  return (
    <Link
      href="/palettes"
      aria-label="Browse palette options"
      title="Browse palette options"
      className="group fixed bottom-5 right-5 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/80 text-deep shadow-[0_18px_40px_-12px_rgba(15,27,51,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white md:bottom-6 md:right-6 md:h-12 md:w-12"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[18deg] md:h-5 md:w-5"
        aria-hidden
      >
        {/* Artist's palette outline */}
        <path d="M12 3a9 9 0 1 0 0 18c.9 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1-.3-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8Z" />
        {/* Paint dots — colored to current palette via CSS vars */}
        <circle cx="7.5" cy="10.5" r="1.1" fill="var(--color-green)" stroke="none" />
        <circle cx="12" cy="7.5" r="1.1" fill="var(--color-blue)" stroke="none" />
        <circle cx="16" cy="10.5" r="1.1" fill="var(--color-sage)" stroke="none" />
      </svg>

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-deep-2 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block">
        Theme
      </span>
    </Link>
  );
}
