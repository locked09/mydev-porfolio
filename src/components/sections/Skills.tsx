import { stackLayers } from "@/data/portfolio";
import { toneBar } from "@/lib/tones";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Skills"
        description="The same layers as the diagram at the top of the page, with the tools I reach for at each one."
      />

      <ul className="mt-14 border-t border-line">
        {stackLayers.map((layer) => (
          <li key={layer.id} className="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:gap-10">
            <div className="flex gap-4 md:col-span-5">
              <span aria-hidden className={cn("mt-1.5 h-9 w-1.5 shrink-0 rounded-full", toneBar[layer.tone])} />
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">{layer.name}</h3>
                <p className="mt-1 text-muted">{layer.summary}</p>
              </div>
            </div>

            <ul className="flex flex-wrap content-start gap-2 md:col-span-7 md:pt-1">
              {layer.tools.map((tool) => (
                <li key={tool} className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm">
                  {tool}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
