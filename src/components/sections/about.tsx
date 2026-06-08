import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Users, Globe2, Check, ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

const rows = [
  {
    icon: Users,
    eyebrow: "What we do",
    title: "Talent Recruitment Firm",
    desc: "We are industry experts uniquely positioned to help you understand what internal recruiters and HR teams are looking for. Our recruitment services are sharpened by deep industry insight — so you place the right people, faster.",
    points: [
      "Specialist sourcing across the IT stack",
      "Pre-vetted candidates ready to interview",
      "Hands-on partnership from brief to offer",
    ],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
    alt: "Senior Querentia recruiter consulting a candidate on a laptop",
    reverse: false,
  },
  {
    icon: Globe2,
    eyebrow: "Why it works",
    title: "World-class experience",
    desc: "From small specialist mandates to large enterprise rollouts, Querentia brings the same rigour to every search. Our team blends senior recruiters with an AI-augmented pipeline — precision delivery, at speed.",
    points: [
      "Trusted by Deloitte, Capgemini, CGI",
      "Active across cloud, data, security, digital",
      "Transparent process & honest feedback",
    ],
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    alt: "Diverse technology team in a modern enterprise meeting",
    reverse: true,
  },
];

export function About() {
  return (
    <section className="bg-page py-20 md:py-28">
      <div className="container-x">
        {/* Heading with brand underline */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="relative inline-block text-3xl font-bold tracking-tight text-deep md:text-5xl">
              About{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(95deg, #2563eb, #0ea5e9)" }}
              >
                Querentia
              </span>
              <span
                aria-hidden
                className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full"
                style={{ background: "linear-gradient(90deg, #2563eb, #0ea5e9)" }}
              />
            </h2>
            <p className="mt-8 text-ink-muted">
              Toronto-based IT recruitment, trusted by Canada&apos;s most
              demanding enterprises.
            </p>
          </div>
        </Reveal>

        {/* Feature rows */}
        <div className="mt-16 space-y-20 md:space-y-28">
          {rows.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className={`grid items-center gap-10 md:gap-14 lg:grid-cols-2 ${
                  r.reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <Reveal>
                  <div className={`group lift relative mx-auto w-full max-w-sm ${r.reverse ? "lg:ml-auto lg:mr-0" : "lg:mr-auto lg:ml-0"}`}>
                    <span
                      aria-hidden
                      className="animate-aurora absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-full blur-3xl"
                      style={{ background: "radial-gradient(circle, rgba(37,99,235,0.4), transparent 70%)" }}
                    />
                    <span
                      aria-hidden
                      className="animate-aurora-2 absolute -right-6 -bottom-6 -z-10 h-40 w-40 rounded-full blur-3xl"
                      style={{ background: "radial-gradient(circle, rgba(14,165,233,0.35), transparent 70%)" }}
                    />
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(15,27,51,0.35)]">
                      <Image
                        src={r.img}
                        alt={r.alt}
                        fill
                        sizes="(min-width: 1024px) 22rem, 80vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      {/* Soft brand tint overlay */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 mix-blend-multiply"
                        style={{ background: "linear-gradient(180deg, rgba(15,27,51,0.0), rgba(15,27,51,0.18))" }}
                      />
                      {/* Floating proof chip */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-white/95 px-3 py-1.5 text-xs font-medium text-deep shadow-md backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green opacity-70" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                        </span>
                        Toronto, Canada
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Copy */}
                <Reveal delay={140}>
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-green-700 shadow-sm">
                      <Icon className="h-3.5 w-3.5" />
                      {r.eyebrow}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-deep md:text-3xl">
                      {r.title}
                    </h3>
                    <p className="mt-4 text-ink-muted">{r.desc}</p>
                    <ul className="mt-6 space-y-3">
                      {r.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-ink">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-soft transition-transform duration-300 hover:scale-110">
                            <Check className="h-3 w-3 text-green-700" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7">
                      <Button href="/about" variant="primary" className="px-5">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
