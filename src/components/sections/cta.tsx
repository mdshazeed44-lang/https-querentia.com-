import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

export function CTA() {
  return (
    <section className="bg-page py-12 md:py-16">
      <div className="container-x">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-3xl bg-deep-2 px-8 py-16 md:px-16 md:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                  Hunt with us
                </p>
                <h2
                  className="mt-4 text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Your trusted partner in the talent department from you&apos;ll trust.
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <Button href="/contact" variant="primary">
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/jobs" variant="outline-light">
                  Browse roles
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
