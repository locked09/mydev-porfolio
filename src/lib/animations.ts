import type { Variants } from "framer-motion";

export const easeOutQuart: [number, number, number, number] = [0.25, 1, 0.5, 1];

/** Hero copy: staggered by the `custom` index passed to each element */
export const heroText: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutQuart, delay: 0.1 + i * 0.08 },
  }),
};

/** Hero stack layers: drop in from above, bottom layer first */
export const layerDrop: Variants = {
  hidden: { opacity: 0, y: -56 },
  show: (order: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 22, delay: 0.55 + order * 0.22 },
  }),
};

/** Total time until the last hero layer has landed */
export const stackSettleDelay = (layerCount: number) => 0.55 + layerCount * 0.22 + 0.2;

/** Expand/collapse panels (project rows) */
export const expand: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { height: { duration: 0.3, ease: easeOutQuart }, opacity: { duration: 0.15 } },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: { height: { duration: 0.35, ease: easeOutQuart }, opacity: { duration: 0.25, delay: 0.1 } },
  },
};
