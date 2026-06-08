import { stats } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { Star, Briefcase, Bolt, Shield } from "@/components/ui/icons";

const iconMap = {
  star: Star,
  briefcase: Briefcase,
  bolt: Bolt,
  shield: Shield,
} as const;

export function Stats() {
  return (
    <section className="bg-page py-16 md:py-20">
      <div className="container-x">
        <Reveal>
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-border">
            {stats.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <div
                  key={s.label}
                  className="group flex flex-col items-center px-6 text-center"
                >
                  <Icon className="h-5 w-5 text-green-700 transition-transform duration-500 group-hover:scale-110" />
                  <div
                    className="mt-3 text-4xl font-bold tracking-tight text-deep md:text-5xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-2 text-sm font-semibold text-deep">
                    {s.label}
                  </div>
                  <div className="mt-0.5 text-xs text-ink-faint">{s.sub}</div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
