import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline-light" | "ghost";

const styles: Record<Variant, string> = {
  // Royal blue CTA
  primary:
    "bg-green text-white font-semibold hover:bg-green-700 glow-green",
  // Light surface button for use on light sections
  secondary:
    "border border-border-2 bg-white text-deep font-medium hover:border-green hover:text-green-700",
  // Outline button for use on deep teal sections
  "outline-light":
    "border border-white/35 text-white font-medium hover:bg-white/10 hover:border-white/60",
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
