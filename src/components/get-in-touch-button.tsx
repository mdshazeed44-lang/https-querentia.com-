"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/ui/icons";
import { ContactModal } from "@/components/contact-modal";

/**
 * Standard site CTA: "Get in Touch" opens the contact modal (the small window).
 * Drop-in button used across pages so contact CTAs stay consistent.
 */
export function GetInTouchButton({
  label = "Get in Touch",
  className,
  showArrow = true,
}: {
  label?: string;
  className?: string;
  showArrow?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
        {showArrow && (
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
