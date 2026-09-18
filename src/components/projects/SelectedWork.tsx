import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="relative">
      <Container>
        <div className="py-20 sm:py-24 lg:py-32">
          <SectionHeading
            index="02"
            eyebrow="Selected work"
            title="A selection of systems, products, and engineering experiments."
            action={
              <span className="font-mono text-micro text-ink-faint uppercase">
                {String(projects.length).padStart(2, "0")} projects
              </span>
            }
          />

          <div className="mt-14 flex flex-col gap-6 sm:mt-16 lg:gap-8">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index === 0 ? 0 : 0.04}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>

      <div aria-hidden className="hairline-x h-px w-full" />
    </section>
  );
}
