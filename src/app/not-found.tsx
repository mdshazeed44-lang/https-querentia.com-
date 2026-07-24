import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

// Root not-found UI. Rendered whenever notFound() is called in any segment
// (e.g. an unknown /jobs/[slug]) so bad URLs return a clean 404 instead of 500.
export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-deep-2 text-on-deep">
      <div aria-hidden className="absolute inset-0 -z-10">
        <span
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,194,255,0.12) 0%, transparent 60%)",
          }}
        />
        <span className="grain absolute inset-0" />
      </div>
      <div className="container-x flex min-h-[68vh] flex-col items-center justify-center py-28 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
          404
        </p>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
          This page could not be found.
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/65">
          The role or page you are looking for may have been filled, closed, or
          moved. Explore our live roles or head back home.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Button href="/jobs">View Roles</Button>
          <Button href="/" variant="outline-light">
            Go home
          </Button>
        </div>
      </div>
    </section>
  );
}
