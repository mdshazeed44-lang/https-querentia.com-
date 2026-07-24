"use client";

import { useEffect } from "react";
import Link from "next/link";

// Segment error boundary. Catches genuine runtime errors so visitors see a
// branded recovery screen instead of the bare /500 page. (notFound() is handled
// separately by not-found.tsx.)
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative isolate overflow-hidden bg-deep-2 text-on-deep">
      <div className="container-x flex min-h-[68vh] flex-col items-center justify-center py-28 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
          Something went wrong
        </p>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
          We hit an unexpected error.
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/65">
          Please try again in a moment. If it keeps happening, get in touch and
          we will take a look.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-green-700"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
          >
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
}
