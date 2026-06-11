import { Reveal } from "@/components/ui/reveal";

// 30 disciplines grouped into 5 practice areas — editorial row layout
const CATEGORIES = [
  {
    code: "01",
    title: "Cloud, Data & AI",
    items: [
      "Cloud Technologies",
      "DevOps",
      "Data Engineering",
      "Data Analytics",
      "Data Science",
      "Data Warehousing",
      "SAS",
      "Blockchain",
    ],
  },
  {
    code: "02",
    title: "Engineering & Product",
    items: [
      "Full Stack Development",
      "Web Development",
      "Testing Automation",
      "UI / UX Design",
      "Application Integration",
      "Pega",
    ],
  },
  {
    code: "03",
    title: "Enterprise Platforms",
    items: [
      "ERP",
      "Enterprise Architecture",
      "Guidewire",
      "Energy & Utilities",
      "Supply Chain & Procurement",
    ],
  },
  {
    code: "04",
    title: "Strategy & Delivery",
    items: [
      "Project Management",
      "Program Management",
      "Business Analysis",
      "Agile Delivery",
      "Org Change Management",
    ],
  },
  {
    code: "05",
    title: "Security, Risk & Business",
    items: [
      "Cyber Security",
      "Risk & Internal Audit",
      "Financial Advisory",
      "Taxation",
      "Human Resources",
      "Digital Marketing",
    ],
  },
];

export function Industries() {
  const totalCount = CATEGORIES.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <section className="relative isolate overflow-hidden border-t border-border bg-page py-20 text-ink md:py-24">
      {/* Soft ambient accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-cyan/[0.04] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan/[0.14] blur-3xl"
      />

      <div className="container-x relative">
        {/* Header */}
        <Reveal>
          <div className="mb-14 max-w-4xl md:mb-20">
            <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="inline-block h-px w-8 bg-cyan/60" />
              VI · Our expertise · {totalCount} disciplines · 5 practices
            </p>
            <h2 className="mt-6 text-[clamp(2.25rem,5.5vw,4.25rem)] font-medium leading-[0.98] tracking-tight">
              Across every discipline
              <br className="hidden md:block" />{" "}
              you{" "}
              <span
                className="text-cyan"
                style={{ fontFamily: "var(--font-display)" }}
              >
                actually
              </span>{" "}
              build on.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              {`Five deep practices. ${totalCount} specialised disciplines. Built over a decade placing senior IT talent into Canada's largest consulting and enterprise programs.`}
            </p>
          </div>
        </Reveal>

        {/* Editorial row layout — magazine table of contents */}
        <div className="border-y border-ink/10">
          {CATEGORIES.map((cat, idx) => (
            <Reveal key={cat.code} delay={idx * 80}>
              <div
                className={`group grid grid-cols-1 gap-6 py-9 transition-colors duration-500 hover:bg-ink/[0.015] md:grid-cols-[300px_1fr] md:gap-10 md:py-11 ${idx > 0 ? "border-t border-ink/10" : ""}`}
              >
                {/* Left — chapter heading */}
                <div className="flex flex-col">
                  <span className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
                    {cat.code} · Practice
                  </span>
                  <h3
                    className="text-[1.5rem] font-medium leading-[1.1] tracking-tight md:text-[1.75rem]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cat.title}
                  </h3>
                  <span className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/40">
                    {String(cat.items.length).padStart(2, "0")} disciplines
                  </span>
                </div>

                {/* Right — tag pills */}
                <div className="flex flex-wrap items-start gap-2 md:gap-2.5 md:pt-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-ink/15 bg-card px-3.5 py-1.5 text-xs font-medium text-ink/80 transition-all duration-300 hover:-translate-y-px hover:border-cyan hover:bg-cyan/[0.04] hover:text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footnote band */}
        <Reveal delay={550}>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-ink-muted md:text-base">
              Don&apos;t see your stack?{" "}
              <span className="text-ink">We&apos;ve probably placed it.</span>
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-cyan transition-colors hover:text-ink"
            >
              Tell us what you&apos;re hiring for
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
