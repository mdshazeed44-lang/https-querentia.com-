import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

export function CTA() {
  return (
    <section className="bg-page py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[2rem] px-6 py-16 text-center text-white shadow-[0_30px_80px_-30px_rgba(37,99,235,0.55)] md:px-16 md:py-24"
            style={{
              background:
                "linear-gradient(120deg, var(--color-deep-2) 0%, var(--color-deep) 35%, var(--color-green) 70%, var(--color-blue) 100%)",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 12s ease-in-out infinite",
            }}
          >
            <div
              aria-hidden
              className="animate-aurora pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full blur-[120px]"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)" }}
            />
            <div
              aria-hidden
              className="animate-aurora-2 pointer-events-none absolute -right-10 -bottom-10 h-72 w-72 rounded-full blur-[120px]"
              style={{ background: "radial-gradient(circle, rgba(56,189,248,0.5), transparent 70%)" }}
            />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                Take charge of your career.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/85">
                Whether you&apos;re scaling a delivery org or searching for your next role,
                Querentia moves at the pace you need.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href="/jobs"
                  variant="secondary"
                  className="w-full border-transparent !text-deep transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
                >
                  Find Jobs <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href="/employers"
                  variant="outline-light"
                  className="w-full transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
                >
                  Hire IT talent
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
