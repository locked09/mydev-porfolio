"use client";

import { motion } from "framer-motion";
import type { StackLayer } from "@/types";
import { layerDrop, stackSettleDelay } from "@/lib/animations";
import { toneFill } from "@/lib/tones";
import { cn } from "@/lib/utils";

/** Each layer is a little wider than the one above it, like strata. */
const widths = ["w-[82%]", "w-[91%]", "w-full"];

type StackDiagramProps = {
  /** Ordered top (interface) to bottom (data) */
  layers: StackLayer[];
};

export function StackDiagram({ layers }: StackDiagramProps) {
  const last = layers.length - 1;

  return (
    <figure className="w-full">
      <ol aria-label="My stack, from the interface down to the data" className="flex flex-col gap-2">
        {layers.map((layer, i) => (
          <motion.li
            key={layer.id}
            // Bottom layer lands first, so the stack builds upward
            custom={last - i}
            variants={layerDrop}
            initial="hidden"
            animate="show"
            className={cn(
              "ml-auto flex flex-col gap-1 rounded-md px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6",
              toneFill[layer.tone],
              widths[Math.min(i, widths.length - 1)],
            )}
          >
            <span className="font-display text-xl font-semibold tracking-tight">{layer.name}</span>
            <span className="text-sm opacity-85">{layer.tools.slice(0, 4).join(", ")}</span>
          </motion.li>
        ))}
      </ol>
      <motion.figcaption
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: stackSettleDelay(layers.length), duration: 0.5 }}
        className="mt-4 text-right text-sm text-muted"
      >
        Every layer, from schema to screen.
      </motion.figcaption>
    </figure>
  );
}
