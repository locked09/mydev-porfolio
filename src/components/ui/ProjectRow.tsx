"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import type { Project } from "@/types";
import { expand } from "@/lib/animations";

type ProjectRowProps = {
  project: Project;
  defaultOpen?: boolean;
};

export function ProjectRow({ project, defaultOpen = false }: ProjectRowProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <li className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group grid w-full grid-cols-[3.5rem_1fr_auto] items-baseline gap-4 py-6 text-left sm:grid-cols-[5rem_1fr_auto] sm:gap-6"
        >
          <span className="text-sm tabular-nums text-muted">{project.year}</span>
          <span>
            <span className="block font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-indigo sm:text-3xl">
              {project.title}
            </span>
            <span className="mt-1 block text-sm text-muted">{project.role}</span>
          </span>
          <motion.span
            aria-hidden
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="grid size-9 place-items-center self-center rounded-full border border-line transition-colors group-hover:border-ink"
          >
            <Plus className="size-4" />
          </motion.span>
          <span className="sr-only">{open ? "Hide details" : "Show details"}</span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            variants={expand}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className="overflow-hidden"
          >
            <div className="grid gap-8 pb-10 sm:pl-[6.5rem] md:grid-cols-[1fr_14rem]">
              <div className="max-w-prose">
                <p className="text-lg leading-relaxed">{project.summary}</p>
                <ul className="mt-5 space-y-3 text-muted">
                  {project.details.map((detail) => (
                    <li key={detail} className="relative pl-5">
                      <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-muted" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="font-medium">Built with</h4>
                  <p className="mt-2 leading-relaxed text-muted">{project.stack.join(", ")}</p>
                </div>
                {project.links && project.links.length > 0 ? (
                  <ul className="space-y-2">
                    {project.links.map((link) => (
                      <li key={link.href + link.label}>
                        <a
                          href={link.href}
                          className="inline-flex items-center gap-1 font-medium text-indigo underline decoration-line underline-offset-4 hover:decoration-indigo"
                        >
                          {link.label}
                          <ArrowUpRight aria-hidden className="size-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
