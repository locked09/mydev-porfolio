import { profile } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about" className="grid gap-12 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-4">
        <SectionHeading title="About" />
        <dl className="mt-10 space-y-5 text-sm">
          {profile.facts.map((fact) => (
            <div key={fact.label} className="border-l-2 border-line pl-4">
              <dt className="text-muted">{fact.label}</dt>
              <dd className="mt-0.5 font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="max-w-[62ch] space-y-6 text-lg leading-relaxed lg:col-span-7 lg:col-start-6">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
