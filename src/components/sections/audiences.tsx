import Link from "next/link";
import { ArrowRight, Check } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

const cards = [
  {
    eyebrow: "For Employers",
    title: "Build teams that ship.",
    desc: "Access pre-vetted IT professionals ready to deliver. From a single critical hire to scaling an entire delivery team.",
    points: [
      "48-hour qualified shortlists",
      "Contract, contract-to-hire & permanent",
      "Enterprise compliance & onboarding",
    ],
    href: "/employers",
    cta: "Request talent",
    tone: "deep" as const,
  },
  {
    eyebrow: "For Job Seekers",
    title: "Careers worth the move.",
    desc: "Work with Canada's most respected enterprises. We match your skills to roles where you'll grow — not just fill a seat.",
    points: [
      "Roles at Deloitte, Capgemini, CGI & more",
      "Transparent process, real feedback",
      "Contract & full-time opportunities",
    ],
    href: "/candidates",
    cta: "Find your next role",
    tone: "light" as const,
  },
];

export function Audiences() {
  return (
    <section className="bg-page py-20 md:py-28">
      <div className="container-x grid gap-6 md:grid-cols-2">
        {cards.map((c, i) => {
          const deep = c.tone === "deep";
          return (
            <Reveal key={c.eyebrow} delay={i * 140}>
              <Link
                href={c.href}
                className={`shine lift ring-grad group relative block overflow-hidden rounded-3xl border p-8 md:p-10 ${
                  deep
                    ? "border-deep bg-deep text-on-deep"
                    : "border-border bg-card text-ink"
                }`}
              >
                {/* Decorative glow */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl transition-all duration-700 group-hover:scale-110 ${
                    deep ? "bg-blue/35" : "bg-blue/15"
                  } opacity-60 group-hover:opacity-100`}
                />
                <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${deep ? "text-sage" : "text-green-700"}`}>
                  {c.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-bold md:text-3xl">{c.title}</h3>
                <p className={`mt-3 ${deep ? "text-on-deep-muted" : "text-ink-muted"}`}>{c.desc}</p>
                <ul className="mt-6 space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm transition-transform duration-300 group-hover:translate-x-0.5">
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${deep ? "bg-white/15" : "bg-green-soft"}`}>
                        <Check className={`h-3 w-3 ${deep ? "text-sage" : "text-green-700"}`} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <span className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${deep ? "text-white" : "text-deep"}`}>
                  {c.cta}
                  <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-green group-hover:text-white">
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
