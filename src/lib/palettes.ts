// Centralised palette definitions used by:
//  - /palettes preview page (gallery of 8 options + "Preview live" links)
//  - PaletteApplier client component (reads ?palette=<slug>, applies CSS vars)
//
// Each palette overrides the brand-accent variables defined in globals.css.
// Body / card backgrounds stay white so cards remain readable in every
// palette — only the dark feature sections, CTAs, accents, and alt tints
// change. That's enough for the client to feel each direction without
// breaking long-form content.

export type PaletteSlug =
  | "quantum-blue"
  | "emerald-carbon"
  | "indigo-amber"
  | "royal-frost"
  | "forest-slate"
  | "crimson-luxe"
  | "midnight-gold"
  | "sunset-coral";

export type PaletteDef = {
  slug: PaletteSlug;
  name: string;
  vibe: string;
  vars: Record<string, string>;
};

const ROYAL_FROST_DEFAULTS = {
  "--color-deep": "#0f1b33",
  "--color-deep-2": "#0a1322",
  "--color-green": "#2563eb",
  "--color-green-700": "#1d4ed8",
  "--color-green-soft": "#e4edfd",
  "--color-blue": "#0ea5e9",
  "--color-sage": "#5ab0f2",
  "--color-page-2": "#e9f0fa",
  "--color-on-deep": "#eaf1ff",
  "--color-on-deep-muted": "#aebdd8",
};

export const PALETTES: PaletteDef[] = [
  {
    slug: "quantum-blue",
    name: "Quantum Blue",
    vibe: "Futuristic · tech-forward",
    vars: {
      "--color-deep": "#131C33",
      "--color-deep-2": "#0A1020",
      "--color-green": "#6366F1",       // indigo CTA
      "--color-green-700": "#4f46e5",
      "--color-green-soft": "#E0E7FF",
      "--color-blue": "#38BDF8",        // sky secondary
      "--color-sage": "#A5B4FC",        // light indigo on dark
      "--color-page-2": "#EEF0FA",
      "--color-on-deep": "#EAF1FF",
      "--color-on-deep-muted": "#9DB0D6",
    },
  },
  {
    slug: "emerald-carbon",
    name: "Emerald Carbon",
    vibe: "Premium · growth · confident",
    vars: {
      "--color-deep": "#11211B",
      "--color-deep-2": "#0B1512",
      "--color-green": "#10B981",       // emerald CTA
      "--color-green-700": "#059669",
      "--color-green-soft": "#D1FAE5",
      "--color-blue": "#34D399",
      "--color-sage": "#6EE7B7",
      "--color-page-2": "#EAF6F0",
      "--color-on-deep": "#ECFDF5",
      "--color-on-deep-muted": "#9CC4B4",
    },
  },
  {
    slug: "indigo-amber",
    name: "Indigo Amber",
    vibe: "Distinctive · warm-cool premium",
    vars: {
      "--color-deep": "#211B45",
      "--color-deep-2": "#15122E",
      "--color-green": "#8B5CF6",       // violet CTA
      "--color-green-700": "#7c3aed",
      "--color-green-soft": "#EDE9FE",
      "--color-blue": "#F59E0B",        // amber secondary
      "--color-sage": "#C4B5FD",
      "--color-page-2": "#F0EEFA",
      "--color-on-deep": "#F4F1FF",
      "--color-on-deep-muted": "#B4ABDD",
    },
  },
  {
    slug: "royal-frost",
    name: "Royal Frost",
    vibe: "Clean · corporate · light (CURRENT default)",
    vars: ROYAL_FROST_DEFAULTS,
  },
  {
    slug: "forest-slate",
    name: "Forest Slate",
    vibe: "Earthy · trustworthy · authoritative",
    vars: {
      "--color-deep": "#172821",
      "--color-deep-2": "#0F1A14",
      "--color-green": "#16A34A",
      "--color-green-700": "#15803d",
      "--color-green-soft": "#DCFCE7",
      "--color-blue": "#D9B97A",        // beige accent
      "--color-sage": "#86EFAC",
      "--color-page-2": "#EFF3EC",
      "--color-on-deep": "#EEF6F0",
      "--color-on-deep-muted": "#A5BFAF",
    },
  },
  {
    slug: "crimson-luxe",
    name: "Crimson Luxe",
    vibe: "Bold · luxury · premium",
    vars: {
      "--color-deep": "#2B141C",
      "--color-deep-2": "#1A0D11",
      "--color-green": "#E11D48",       // rose CTA
      "--color-green-700": "#be123c",
      "--color-green-soft": "#FFE4E6",
      "--color-blue": "#F5C26B",        // gold secondary
      "--color-sage": "#FDA4AF",
      "--color-page-2": "#FBEFF1",
      "--color-on-deep": "#FBE9EC",
      "--color-on-deep-muted": "#D3A8B0",
    },
  },
  {
    slug: "midnight-gold",
    name: "Midnight Gold",
    vibe: "Exclusive · high-end · black-tie tech",
    vars: {
      "--color-deep": "#16161A",
      "--color-deep-2": "#0A0A0C",
      "--color-green": "#E2B669",       // gold CTA
      "--color-green-700": "#c8993f",
      "--color-green-soft": "#FAEFD7",
      "--color-blue": "#F5E4B9",
      "--color-sage": "#F5E4B9",
      "--color-page-2": "#F5F2EA",
      "--color-on-deep": "#FAF7EE",
      "--color-on-deep-muted": "#B8B1A0",
    },
  },
  {
    slug: "sunset-coral",
    name: "Sunset Coral",
    vibe: "Warm · human · friendly",
    vars: {
      "--color-deep": "#3A2D3F",
      "--color-deep-2": "#1F1B2E",
      "--color-green": "#FB7185",       // coral CTA
      "--color-green-700": "#e11d48",
      "--color-green-soft": "#FDE4D1",
      "--color-blue": "#F59E0B",
      "--color-sage": "#FECACA",
      "--color-page-2": "#FFF1EB",
      "--color-on-deep": "#FFF0EC",
      "--color-on-deep-muted": "#D4BAB1",
    },
  },
];

export const PALETTE_BY_SLUG: Record<PaletteSlug, PaletteDef> = Object.fromEntries(
  PALETTES.map((p) => [p.slug, p])
) as Record<PaletteSlug, PaletteDef>;

// Union of all CSS var keys we override — used to cleanly remove overrides on reset
export const PALETTE_VAR_KEYS: string[] = Array.from(
  new Set(PALETTES.flatMap((p) => Object.keys(p.vars)))
);
