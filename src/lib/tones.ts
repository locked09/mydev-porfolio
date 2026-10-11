import type { Tone } from "@/types";

/**
 * Each stack layer has one colour that it keeps everywhere it appears,
 * so the hero diagram and the skills list read as the same system.
 * Full class strings are listed so Tailwind can detect them.
 */
export const toneFill: Record<Tone, string> = {
  kihada: "bg-kihada text-[#15233f]",
  indigo: "bg-indigo text-paper",
  ink: "bg-ink text-paper",
  line: "bg-line text-ink",
};

export const toneBar: Record<Tone, string> = {
  kihada: "bg-kihada",
  indigo: "bg-indigo",
  ink: "bg-ink",
  line: "bg-line",
};
