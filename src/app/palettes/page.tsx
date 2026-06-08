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
    vibe: "Clean · corporate · light — crisp enterprise credibility",
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

export default function PalettesPage() {
  return (
    <div className="min-h-screen bg-[#1a1d24] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
          Querentia — Palette Options
        </h1>
        <p className="mt-2 text-center text-sm text-white/60">
          Same hero mockup, four directions. Pick one (or mix).
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {palettes.map((p) => (
            <div key={p.id}>
              <div className="mb-3 flex items-baseline gap-3">
                <span className="text-xs font-bold text-white/40">{p.id}</span>
                <div>
                  <h2 className="text-lg font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {p.name}
                  </h2>
                  <p className="text-xs text-white/50">{p.vibe}</p>
                </div>
              </div>
              <Mockup p={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
