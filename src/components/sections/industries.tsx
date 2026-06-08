import { specializations } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import {
  Bank, Cloud, Data, Code, Shield, Spark, Bolt, Globe, Sparkles,
  Briefcase, Star, Users, BarChart, Network, Workflow, Lightbulb,
  Layers, Coins,
} from "@/components/ui/icons";
import type { ComponentType, SVGProps } from "react";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  bank: Bank,
  cloud: Cloud,
  data: Data,
  code: Code,
  shield: Shield,
  spark: Spark,
  bolt: Bolt,
  globe: Globe,
  sparkles: Sparkles,
  briefcase: Briefcase,
  star: Star,
  users: Users,
  barChart: BarChart,
  network: Network,
  workflow: Workflow,
  lightbulb: Lightbulb,
  layers: Layers,
  coins: Coins,
};

export function Industries() {
  return (
    <section className="bg-page-2 py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="relative inline-block text-3xl font-bold tracking-tight text-deep md:text-5xl">
              Our{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(95deg, #2563eb, #0ea5e9)" }}
              >
                Specialization
              </span>
              <span
                aria-hidden
                className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full"
                style={{ background: "linear-gradient(90deg, #2563eb, #0ea5e9)" }}
              />
            </h2>
            <p className="mt-8 text-ink-muted">
              Deep benches across the technology disciplines your enterprise actually runs on.
            </p>
          </div>
        </Reveal>

        {/* Dense grid */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
          {specializations.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Code;
            return (
              <Reveal key={s.title} delay={(i % 10) * 50}>
                <div className="ring-grad lift group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card px-4 py-6 text-center transition-all duration-300 hover:border-blue/40">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue/0 blur-xl transition-all duration-500 group-hover:bg-blue/20"
                  />
                  <span
                    className="relative flex h-12 w-12 items-center justify-center rounded-full bg-green-soft text-green-700 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:text-white"
                    style={{ transition: "background 0.4s, transform 0.4s, color 0.4s" }}
                  >
                    {/* Hover fill */}
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                      style={{ background: "linear-gradient(135deg, #2563eb, #0ea5e9)" }}
                    />
                    <Icon className="relative h-6 w-6" />
                  </span>
                  <h3 className="relative mt-4 text-sm font-semibold leading-snug text-deep transition-colors duration-300 group-hover:text-green-700">
                    {s.title}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA below grid (like original "Find Jobs" pill) */}
        <Reveal delay={120}>
          <div className="mt-12 text-center">
            <a
              href="/jobs"
              className="inline-flex items-center gap-2 rounded-full bg-deep px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-16px_rgba(15,27,51,0.5)] transition-all duration-300 hover:scale-[1.03] hover:bg-deep-2"
            >
              Find Jobs
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
