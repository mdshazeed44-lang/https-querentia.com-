import { Reveal } from "@/components/ui/reveal";

const QUOTES = [
  {
    quote:
      "Querentia turned around a 5-candidate shortlist in 36 hours for a Senior Cloud Architect mandate. The first hire is still with us at 18 months.",
    author: "Practice Director",
    role: "Tier-1 Consulting · Toronto",
  },
  {
    quote:
      "What set Querentia apart was the technical depth of their screening. They sent us people who could actually do the job, not just check the keyword box.",
    author: "Head of Engineering",
    role: "Canadian Bank · Vancouver",
  },
  {
    quote:
      "After three years of Boolean-search agencies, Querentia felt different. They knew our stack, our team, and what 'senior' actually means in our environment.",
    author: "CIO",
    role: "Insurance Group · Mississauga",
  },
];

export function Testimonials() {
  const [featured, ...supporting] = QUOTES;

  return (
    <section className="bg-page-2 py-24 text-ink md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mb-20 text-center">
            <p className="flex items-center justify-center gap-3 font-mono text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="inline-block h-px w-8 bg-cyan/60" />
              IV &middot; In their words
              <span className="inline-block h-px w-8 bg-cyan/60" />
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <figure className="mx-auto mb-20 max-w-4xl">
            <span
              aria-hidden
              className="block text-center leading-none text-cyan/70"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(4rem, 7vw, 6rem)",
              }}
            >
              &ldquo;
            </span>
            <blockquote
              className="mx-auto mt-2 max-w-3xl text-center font-medium leading-tight tracking-tight text-ink"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              }}
            >
              {featured.quote}
            </blockquote>
            <div className="mx-auto mt-8 h-px w-12 bg-cyan" />
            <figcaption className="mt-6 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-ink">
                {featured.author}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-muted">
                {featured.role}
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {supporting.map((q, i) => (
            <Reveal key={i} delay={240 + i * 130}>
              <figure className="flex h-full flex-col">
                <blockquote className="text-lg leading-relaxed text-ink/90">
                  {q.quote}
                </blockquote>
                <div className="mt-6 h-px w-8 bg-cyan" />
                <figcaption className="mt-4">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-ink">
                    {q.author}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-muted">
                    {q.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
