import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper hover:bg-indigo",
  outline: "border border-line text-ink hover:border-ink",
};

export function ButtonLink({ variant = "solid", className, children, ...rest }: ButtonLinkProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}

export const buttonClasses = (variant: Variant = "solid") => cn(base, variants[variant]);
