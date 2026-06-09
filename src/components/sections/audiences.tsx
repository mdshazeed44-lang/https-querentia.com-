import Link from "next/link";
import { ArrowRight, Check } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

const cards = [
  {
    eyebrow: "For Employers",
    title: "One firm. Every hire.",
    desc: "From a single senior architect to scaling an entire delivery org — pre-vetted IT professionals ready to ship.",
    points: [
      "48-hour qualified shortlists",
      "Contract, contract-to-hire, permanent",
      "Enterprise compliance & onboarding",
    ],
    href: "/contact",
    cta: "Request talent",
  },
  {
    eyebrow: "For Job Seekers",
    title: "Investor-backed growth is a different game.",
    desc: "We match your skills to roles where you&apos;ll grow — at Canada&apos;s most demanding enterprises.",
    points: [
      "Roles at Deloitte, Capgemini, CGI & more",
      "Transparent process, honest feedback",
      "Contract & full-time opportunities",
    ],
    href: "/jobs",
    cta: "Find your next role",
  },
];

export function Audiences() {
  return (
    <section className="bg-page py-20 md:py-28">
      <div className="container-x grid gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.eyebrow} delay={i * 120}>
            <Link
              href={c.href}
              className="group shine lift relative block h-full overflow-hidden rounded-3xl border border-border bg-card p-8 hover:border-green/40 md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green">
                {c.eyebrow}
              </p>
              <h3
                className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.05] tracking-tight text-deep"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {c.title}
              </h3>
              <p
                className="mt-4 text-base text-ink-muted"
                dangerouslySetInnerHTML={{ __html: c.desc }}
              />
              <ul className="mt-7 space-y-3">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-deep">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-soft">
                      <Check className="h-3 w-3 text-green" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <span className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-deep">
                {c.cta}
                <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full border border-deep transition-all duration-300 group-hover:bg-green group-hover:border-green group-hover:text-white">
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
