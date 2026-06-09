import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Design Concepts",
  description:
    "Three radically different homepage directions for Querentia — internal review.",
  robots: { index: false, follow: false },
};

const concepts = [
  {
    id: "01",
    slug: "bento",
    name: "Bento Quantum",
    vibe: "Modern · Linear / Vercel-style · asymmetric glass grid",
    description:
      "Asymmetric bento layout with glassy cards, sharp neon accents, micro-interactions. Feels like a state-of-the-art product page.",
    bg: "linear-gradient(135deg, #050816 0%, #0b1739 50%, #1f1e4d 100%)",
    accent: "#7c3aed",
  },
  {
    id: "02",
    slug: "cinematic",
    name: "Cinematic Aurora",
    vibe: "Massive editorial type · single immersive view · zero clutter",
    description:
      "Full-bleed aurora background, one giant headline, almost no copy. Feels like Apple Vision Pro page or a film studio.",
    bg: "radial-gradient(60% 60% at 30% 30%, rgba(168,85,247,0.5), transparent 70%), radial-gradient(40% 50% at 80% 70%, rgba(56,189,248,0.4), transparent 70%), #06070d",
    accent: "#f0abfc",
  },
  {
    id: "03",
    slug: "editorial",
    name: "Editorial Swiss",
    vibe: "Brutalist · grid lines · giant monospace numbers",
    description:
      "Newspaper-meets-Stripe Press. Visible grid, huge stat callouts, mono numbers, one bold accent. Confident, distinctive, never-seen-on-a-recruitment-site.",
    bg: "#f4f3ef",
    accent: "#0a0a0a",
  },
];

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/80">
            Internal review · Direction selection
          </span>
          <h1
            className="mt-5 text-3xl font-bold text-white md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Three directions, zero replicas
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60 md:text-base">
            Same Querentia message, three radically different visual languages.
            Tap <strong className="text-white">View concept →</strong> to see
            the full live page. We&apos;ll build the winner across the rest of
            the site.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {concepts.map((c, i) => (
            <Reveal key={c.slug} delay={i * 120}>
              <Link
                href={`/concepts/${c.slug}`}
                className="group block overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:border-white/30"
              >
                {/* Preview */}
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{ background: c.bg }}
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span
                      className="inline-flex items-center self-start gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-md"
                      style={{
                        backgroundColor:
                          c.bg === "#f4f3ef" ? "rgba(0,0,0,0.08)" : undefined,
                        color: c.bg === "#f4f3ef" ? "#0a0a0a" : undefined,
                      }}
                    >
                      {c.id}
                    </span>
                    <h3
                      className="mt-3 text-2xl font-bold leading-tight md:text-3xl"
                      style={{
                        color: c.bg === "#f4f3ef" ? "#0a0a0a" : "#ffffff",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {c.name}
                    </h3>
                  </div>
                  {/* decorative accent corner */}
                  <span
                    aria-hidden
                    className="absolute right-4 top-4 h-3 w-3 rounded-full"
                    style={{ background: c.accent }}
                  />
                </div>

                {/* Meta */}
                <div className="bg-[#11141c] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                    {c.vibe}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {c.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    View concept <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center text-sm text-white/70 md:p-8">
          <p>
            <strong className="text-white">How this works:</strong> Browse each
            concept, then tell us which one to push across the rest of the
            site. We can also <em className="text-white">mix</em> — e.g. Bento
            hero with Editorial sections.
          </p>
          <p className="mt-3">
            All three are real, live, scrollable pages — not images.
          </p>
        </div>
      </div>
    </div>
  );
}
