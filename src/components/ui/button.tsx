import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline-light" | "outline-dark" | "ghost";

const styles: Record<Variant, string> = {
  // Forest green pill — primary CTA on light + dark
  primary:
    "bg-green text-white font-medium hover:bg-green-700",
  // Cream pill on light bg
  secondary:
    "bg-card text-deep border border-border-2 font-medium hover:border-deep",
  // Outline on dark bg (cream stroke)
  "outline-light":
    "border border-white/30 text-white font-medium hover:bg-white/10 hover:border-white/60",
  // Outline on light bg (charcoal stroke)
  "outline-dark":
    "border border-deep text-deep font-medium hover:bg-deep hover:text-white",
  ghost: "text-ink-muted hover:text-deep",
};

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: Props) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-300 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
