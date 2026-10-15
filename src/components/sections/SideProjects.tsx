"use client";

import { ArrowUpRight } from "lucide-react";
import { sideProjects } from "@/data/portfolio";
import type { SideProject, SideProjectKind } from "@/types";
import { toneBar } from "@/lib/tones";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const groups: { kind: SideProjectKind; name: string; summary: string; tone: keyof typeof toneBar }[] = [
  {
    kind: "freelance",
    name: "Freelance",
    summary: "Client work delivered outside a full-time role.",
    tone: "kihada",
  },
  {
    kind: "personal",
    name: "Personal",
    summary: "Side projects built to learn something, hosted and still online.",
    tone: "indigo",
  },
];

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");

export function SideProjects() {
  return (
    <Section id="side-projects">
      <SectionHeading
        title="Freelance & personal"
        description="Work that's live on the web right now. Every card opens the real site."
      />

      <ul className="mt-14 border-t border-line">
        {groups.map((group) => {
          const items = sideProjects.filter((project) => project.kind === group.kind);
          if (items.length === 0) return null;

          return (
            <li key={group.kind} className="grid gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-10">
              <div className="flex gap-4 md:col-span-4">
                <span aria-hidden className={cn("mt-1.5 h-9 w-1.5 shrink-0 rounded-full", toneBar[group.tone])} />
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{group.name}</h3>
                  <p className="mt-1 text-muted">{group.summary}</p>
                  <p className="mt-4 text-sm tabular-nums text-muted">
                    {items.length} {items.length === 1 ? "site" : "sites"}
                  </p>
                </div>
              </div>

              <ul className="grid gap-4 md:col-span-8 sm:grid-cols-2">
                {items.map((project) => (
                  <SiteCard key={project.url} project={project} tone={group.tone} />
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function SiteCard({ project, tone }: { project: SideProject; tone: keyof typeof toneBar }) {
  return (
    <li>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-indigo focus-visible:border-indigo focus-visible:outline-none"
      >
        {/* Browser-chrome strip: the three dots use the site's own stack tones */}
        <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
          <span aria-hidden className="flex gap-1.5">
            <span className={cn("size-2 rounded-full", toneBar.kihada)} />
            <span className={cn("size-2 rounded-full", toneBar.indigo)} />
            <span className={cn("size-2 rounded-full", toneBar.ink)} />
          </span>
          <span className="truncate font-mono text-xs text-muted">{hostOf(project.url)}</span>
          <ArrowUpRight
            aria-hidden
            className="ml-auto size-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-baseline justify-between gap-3">
            <h4 className="font-display text-lg font-semibold tracking-tight">{project.title}</h4>
            {project.year && <span className="shrink-0 text-xs tabular-nums text-muted">{project.year}</span>}
          </div>
          <p className="mt-2 text-sm text-muted">{project.summary}</p>

          <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {project.stack.map((tool) => (
              <li key={tool} className="rounded-md border border-line px-2.5 py-1 text-xs">
                {tool}
              </li>
            ))}
          </ul>
        </div>

        {/* Tone underline that draws in on hover, matching the course list */}
        <span aria-hidden className={cn("h-0.5 w-0 transition-[width] duration-500 ease-out group-hover:w-full", toneBar[tone])} />
      </a>
    </li>
  );
}
