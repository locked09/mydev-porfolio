import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

/** Shared outer frame: divider, max width, vertical rhythm, scroll offset for the sticky nav. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-line">
      <div className={cn("mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28", className)}>
        {children}
      </div>
    </section>
  );
}
