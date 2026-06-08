/* Internal preview — palette options for client selection. Not linked in nav. */

type Palette = {
  id: string;
  name: string;
  vibe: string;
  bg: string;
  panel: string;
  ink: string;
  sub: string;
  accent: string;
  accent2: string;
  accentText: string;
  border: string;
  swatches: string[];
};

const palettes: Palette[] = [
  {
    id: "1",
    name: "Quantum Blue",
    vibe: "Futuristic · tech-forward · the scope's “ahead of time” brief",
    bg: "#0A1020",
    panel: "#131C33",
    ink: "#EAF1FF",
    sub: "#9DB0D6",
    accent: "#38BDF8",
    accent2: "#6366F1",
    accentText: "#06121F",
    border: "rgba(255,255,255,0.10)",
    swatches: ["#0A1020", "#131C33", "#6366F1", "#38BDF8", "#EAF1FF"],
  },
  {
    id: "2",
    name: "Emerald Carbon",
    vibe: "Premium · growth · confident — green signals opportunity",
    bg: "#0B1512",
    panel: "#11211B",
    ink: "#ECFDF5",
    sub: "#9CC4B4",
    accent: "#34D399",
    accent2: "#10B981",
    accentText: "#042015",
    border: "rgba(255,255,255,0.10)",
    swatches: ["#0B1512", "#11211B", "#10B981", "#34D399", "#ECFDF5"],
  },
  {
    id: "3",
    name: "Indigo Amber",
    vibe: "Distinctive · premium · warm-cool contrast that feels expensive",
    bg: "#15122E",
    panel: "#211B45",
    ink: "#F4F1FF",
    sub: "#B4ABDD",
    accent: "#F59E0B",
    accent2: "#8B5CF6",
    accentText: "#1A1304",
    border: "rgba(255,255,255,0.10)",
    swatches: ["#15122E", "#211B45", "#8B5CF6", "#F59E0B", "#F4F1FF"],
  },
  {
    id: "4",
    name: "Royal Frost",
    vibe: "Clean · corporate · light — crisp enterprise credibility (CURRENT)",
    bg: "#F4F7FC",
    panel: "#FFFFFF",
    ink: "#0F1B33",
    sub: "#56678A",
    accent: "#2563EB",
    accent2: "#0EA5E9",
    accentText: "#FFFFFF",
    border: "rgba(15,27,51,0.10)",
    swatches: ["#0F1B33", "#2563EB", "#0EA5E9", "#DCE6F6", "#FFFFFF"],
  },
  {
    id: "5",
    name: "Forest Slate",
    vibe: "Earthy · sophisticated · trustworthy — quietly authoritative",
    bg: "#0F1A14",
    panel: "#172821",
    ink: "#EEF6F0",
    sub: "#A5BFAF",
    accent: "#84CC8F",
    accent2: "#D9B97A",
    accentText: "#0A1410",
    border: "rgba(255,255,255,0.10)",
    swatches: ["#0F1A14", "#172821", "#84CC8F", "#D9B97A", "#EEF6F0"],
  },
  {
    id: "6",
    name: "Crimson Luxe",
    vibe: "Bold · luxury · premium — different from every blue site out there",
    bg: "#1A0D11",
    panel: "#2B141C",
    ink: "#FBE9EC",
    sub: "#D3A8B0",
    accent: "#E11D48",
    accent2: "#F5C26B",
    accentText: "#1A0A0F",
    border: "rgba(255,255,255,0.10)",
    swatches: ["#1A0D11", "#2B141C", "#E11D48", "#F5C26B", "#FBE9EC"],
  },
  {
    id: "7",
    name: "Midnight Gold",
    vibe: "Exclusive · high-end · understated — black-tie tech",
    bg: "#0A0A0C",
    panel: "#16161A",
    ink: "#FAF7EE",
    sub: "#B8B1A0",
    accent: "#E2B669",
    accent2: "#F5E4B9",
    accentText: "#100C04",
    border: "rgba(255,255,255,0.10)",
    swatches: ["#0A0A0C", "#16161A", "#E2B669", "#F5E4B9", "#FAF7EE"],
  },
  {
    id: "8",
    name: "Sunset Coral",
    vibe: "Warm · human · friendly — modern alternative to corporate cool",
    bg: "#FFF8F4",
    panel: "#FFFFFF",
    ink: "#1F1B2E",
    sub: "#6C5F7A",
    accent: "#FB7185",
    accent2: "#F59E0B",
    accentText: "#FFFFFF",
    border: "rgba(31,27,46,0.10)",
    swatches: ["#1F1B2E", "#FB7185", "#F59E0B", "#FDE4D1", "#FFFFFF"],
  },
];

function Mockup({ p }: { p: Palette }) {
  const isLight = p.bg.toLowerCase() === "#f4f7fc";
  return (
    <div
      className="overflow-hidden rounded-2xl border"
      style={{ background: p.bg, borderColor: p.border }}
    >
      {/* mini hero */}
      <div className="relative px-7 py-9">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
          style={{ background: p.accent, opacity: 0.25 }}
        />
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium"
          style={{
            color: p.sub,
            border: `1px solid ${p.border}`,
            background: isLight ? "#fff" : "rgba(255,255,255,0.05)",
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent }} />
          Toronto, Canada
        </span>

        <h3
          className="mt-4 text-2xl font-bold leading-tight"
          style={{ color: p.ink, fontFamily: "var(--font-display)" }}
        >
          We Build,{" "}
          <span
            style={{
              background: `linear-gradient(95deg, ${p.accent}, ${p.accent2})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Attract
          </span>
          <br />& Ignite Talent
        </h3>
        <p className="mt-2 text-sm" style={{ color: p.sub }}>
          Enterprise IT recruitment for Canada&apos;s leading firms.
        </p>

        <div className="mt-5 flex items-center gap-2.5">
          <span
            className="rounded-full px-4 py-2 text-xs font-semibold"
            style={{ background: p.accent, color: p.accentText }}
          >
            Find Jobs →
          </span>
          <span
            className="rounded-full px-4 py-2 text-xs font-medium"
            style={{ color: p.ink, border: `1px solid ${p.border}` }}
          >
            Hire talent
          </span>
        </div>
      </div>

      {/* swatch strip */}
      <div className="flex">
        {p.swatches.map((c) => (
          <div key={c} className="flex-1">
            <div className="h-10" style={{ background: c }} />
            <div
              className="px-1 py-1 text-center text-[9px] font-medium tracking-wide"
              style={{ background: p.panel, color: p.sub }}
            >
              {c}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palette Options",
  description: "Querentia brand-direction options — pick the visual language for the new website.",
  robots: { index: false, follow: false },
};

export default function PalettesPage() {
  return (
    <div className="min-h-screen bg-[#0e1117] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/80">
            Internal review · Brand direction
          </span>
          <h1
            className="mt-5 text-3xl font-bold text-white md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Querentia — Palette Options
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/60 md:text-base">
            Same hero mockup, eight directions. Pick one (or mix). The
            currently-applied palette is marked.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-7">
          {palettes.map((p) => {
            const isCurrent = p.vibe.includes("(CURRENT)");
            const cleanVibe = p.vibe.replace(" (CURRENT)", "");
            return (
              <div key={p.id}>
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="text-xs font-bold text-white/40">{p.id}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2
                        className="text-lg font-semibold text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {p.name}
                      </h2>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-300">
                          ● Current
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white/50">{cleanVibe}</p>
                  </div>
                </div>
                <Mockup p={p} />
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center text-sm text-white/70 md:p-8">
          <p>
            <strong className="text-white">Like one of these?</strong> Tell us
            the number (1–8) and we&apos;ll apply it across the whole site —
            colors, gradients, hover states, the lot. Open to mixes too
            (e.g. <em className="text-white">#3 background with #7 accents</em>).
          </p>
          <a
            href="mailto:dev@querentia.com?subject=Querentia%20palette%20pick"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0e1117] transition-transform hover:scale-[1.02]"
          >
            Lock in my pick →
          </a>
        </div>
      </div>
    </div>
  );
}
