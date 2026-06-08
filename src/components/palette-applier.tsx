"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { X } from "@/components/ui/icons";
import {
  PALETTE_BY_SLUG,
  PALETTE_VAR_KEYS,
  type PaletteSlug,
} from "@/lib/palettes";

const STORAGE_KEY = "querentia-palette";

function PaletteApplierInner() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState<PaletteSlug | null>(null);
  const [mounted, setMounted] = useState(false);

  // Apply / reset CSS vars on root element
  useEffect(() => {
    setMounted(true);

    // 1) check ?palette=
    const urlParam = params.get("palette");
    if (urlParam === "default" || urlParam === "reset") {
      // explicit reset
      clearVars();
      try { localStorage.removeItem(STORAGE_KEY); } catch {}
      setActive(null);
      // remove the query param from URL
      router.replace(pathname, { scroll: false });
      return;
    }

    let chosen: PaletteSlug | null = null;
    if (urlParam && urlParam in PALETTE_BY_SLUG) {
      chosen = urlParam as PaletteSlug;
      try { localStorage.setItem(STORAGE_KEY, chosen); } catch {}
    } else {
      // fall back to last-saved choice
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && saved in PALETTE_BY_SLUG) chosen = saved as PaletteSlug;
      } catch {}
    }

    if (chosen && chosen !== "royal-frost") {
      applyVars(chosen);
      setActive(chosen);
    } else {
      clearVars();
      setActive(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, pathname]);

  const resetPalette = () => {
    clearVars();
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
    setActive(null);
    router.replace(pathname, { scroll: false });
  };

  if (!mounted || !active) return null;
  const def = PALETTE_BY_SLUG[active];

  return (
    <div className="fixed bottom-4 left-1/2 z-[120] -translate-x-1/2 px-4">
      <div className="flex items-center gap-3 rounded-full border border-white/15 bg-deep-2/90 px-4 py-2 text-sm text-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-green" />
        <span className="font-medium">
          Previewing: <strong className="font-semibold">{def.name}</strong>
        </span>
        <span className="hidden text-xs text-white/55 sm:inline">{def.vibe.replace(" (CURRENT default)", "")}</span>
        <Link
          href="/palettes"
          className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          Browse
        </Link>
        <button
          type="button"
          onClick={resetPalette}
          aria-label="Reset to default"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

function applyVars(slug: PaletteSlug) {
  const root = document.documentElement;
  const def = PALETTE_BY_SLUG[slug];
  for (const [key, value] of Object.entries(def.vars)) {
    root.style.setProperty(key, value);
  }
  root.dataset.palette = slug;
}

function clearVars() {
  const root = document.documentElement;
  PALETTE_VAR_KEYS.forEach((key) => root.style.removeProperty(key));
  delete root.dataset.palette;
}

export function PaletteApplier() {
  return (
    <Suspense fallback={null}>
      <PaletteApplierInner />
    </Suspense>
  );
}
