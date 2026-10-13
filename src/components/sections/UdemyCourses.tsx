import { stackLayers, udemyCourses } from "@/data/portfolio";
import { toneBar } from "@/lib/tones";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const layerById = new Map(stackLayers.map((layer) => [layer.id, layer]));

export function UdemyCourses() {
  // How many courses fall under each stack layer, in diagram order
  const tally = stackLayers
    .map((layer) => ({
      layer,
      count: udemyCourses.filter((course) => course.layer === layer.id).length,
    }))
    .filter((entry) => entry.count > 0);

  return (
    <Section id="courses">
      <SectionHeading
        title="Courses"
        description="Udemy courses I've completed, each filed under the layer of the stack it sharpened."
      />

      {/* Tally: total count + per-layer legend */}
      <div className="mt-14 flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
        <p className="flex items-baseline gap-3">
          <span className="font-display text-6xl font-semibold leading-none tracking-tight tabular-nums">
            {String(udemyCourses.length).padStart(2, "0")}
          </span>
          <span className="text-sm text-muted">Udemy courses completed</span>
        </p>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {tally.map(({ layer, count }) => (
            <li key={layer.id} className="flex items-center gap-2">
              <span aria-hidden className={cn("h-3.5 w-1.5 rounded-full", toneBar[layer.tone])} />
              <span>{layer.name}</span>
              <span className="tabular-nums text-muted">{count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Proportion bar: the same tones as the Skills section, sized by course count */}
      <div aria-hidden className="mt-6 flex h-1.5 gap-1">
        {tally.map(({ layer, count }) => (
          <span
            key={layer.id}
            style={{ flexGrow: count }}
            className={cn("basis-0 rounded-full", toneBar[layer.tone])}
          />
        ))}
      </div>

      {/* Course ledger */}
      <ol className="mt-10 border-t border-line">
        {udemyCourses.map((course, index) => {
          const layer = layerById.get(course.layer);

          return (
            <li
              key={course.title}
              className="group relative grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 border-b border-line py-7 md:grid-cols-12 md:items-center md:gap-10"
            >
              {/* Tone underline that draws in on hover */}
              {layer && (
                <span
                  aria-hidden
                  className={cn(
                    "absolute -bottom-px left-0 h-0.5 w-0 transition-[width] duration-500 ease-out group-hover:w-full",
                    toneBar[layer.tone],
                  )}
                />
              )}

              <span className="pt-1 font-display text-sm tabular-nums text-muted md:col-span-1 md:pt-0">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="md:col-span-8">
                <h3 className="font-display text-lg font-semibold tracking-tight md:text-xl">
                  {course.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {course.instructor}
                  {course.organization && <> · {course.organization}</>}
                </p>
              </div>

              <div className="col-start-2 flex flex-wrap items-center gap-3 md:col-span-3 md:col-start-auto md:justify-end">
                {layer && (
                  <span className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 text-sm">
                    <span aria-hidden className={cn("h-2 w-2 rounded-full", toneBar[layer.tone])} />
                    {layer.name}
                  </span>
                )}
                {course.certificateUrl && (
                  <a
                    href={course.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted underline-offset-4 hover:text-current hover:underline"
                  >
                    Certificate ↗
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
