import { projects } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectRow } from "@/components/ui/ProjectRow";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        title="Selected work"
        description="Open a project to see what I built and the stack behind it."
      />

      <ul className="mt-14 border-t border-line">
        {projects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} defaultOpen={i === 0} />
        ))}
      </ul>
    </Section>
  );
}
