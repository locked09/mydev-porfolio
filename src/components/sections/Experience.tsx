"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { experience } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();

  // The timeline line draws itself as the list scrolls through the viewport
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <Section id="experience">
      <SectionHeading title="Experience" />

      <ol ref={listRef} className="relative mt-14 space-y-14 pl-8 md:pl-10">
        {/* Track */}
        <span aria-hidden className="absolute bottom-2 left-0 top-2 w-px -translate-x-1/2 bg-line" />
        {/* Progress */}
        <motion.span
          aria-hidden
          style={{ scaleY: reduceMotion ? 1 : progress }}
          className="absolute bottom-2 left-0 top-2 w-px origin-top -translate-x-1/2 bg-indigo"
        />

        {experience.map((item) => (
          <li
            key={`${item.company}-${item.start}`}
            className="relative grid gap-3 md:grid-cols-[9rem_1fr] md:gap-10"
          >
            <span
              aria-hidden
              className={cn(
                "absolute -left-8 top-1.5 size-3 -translate-x-1/2 rounded-full border-2 md:-left-10",
                item.current ? "border-kihada bg-kihada" : "border-indigo bg-paper",
              )}
            />

            <p className="text-sm tabular-nums text-muted">
              {item.start} to {item.end}
            </p>

            <div className="max-w-2xl">
              <h3 className="font-display text-2xl font-semibold tracking-tight">{item.role}</h3>
              <p className="mt-0.5 text-muted">{item.company}</p>
              <p className="mt-4 leading-relaxed">{item.summary}</p>
              {item.highlights.length > 0 ? (
                <ul className="mt-4 space-y-2 text-muted">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="relative pl-5">
                      <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-muted" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
