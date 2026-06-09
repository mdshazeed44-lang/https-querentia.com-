import { specializations } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import {
  Bank, Cloud, Data, Code, Shield, Spark, Bolt, Globe, Sparkles,
  Briefcase, Star, Users, BarChart, Network, Workflow, Lightbulb,
  Layers, Coins,
} from "@/components/ui/icons";
import type { ComponentType, SVGProps } from "react";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  bank: Bank, cloud: Cloud, data: Data, code: Code, shield: Shield, spark: Spark,
  bolt: Bolt, globe: Globe, sparkles: Sparkles, briefcase: Briefcase, star: Star,
  users: Users, barChart: BarChart, network: Network, workflow: Workflow,
  lightbulb: Lightbulb, layers: Layers, coins: Coins,
};

export function Industries() {
  return (
    <section className="bg-deep py-20 text-on-deep md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Our specialization
            </p>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-white">
              You&apos;re in good company.
            </h2>
            <p className="mt-5 text-base text-on-deep-muted md:text-lg">
              Deep benches across the technology disciplines your enterprise
              actually runs on.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
          {specializations.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Code;
            return (
              <Reveal key={s.title} delay={(i % 10) * 50}>
                <div className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-7 text-center transition-all duration-300 hover:border-sage/50 hover:bg-white/[0.07]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.08] text-sage transition-all duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-medium leading-snug text-white">
                    {s.title}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
