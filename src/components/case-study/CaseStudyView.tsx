import { ArrowUpRight } from "lucide-react";

import { ArchitectureDiagram } from "@/components/architecture/ArchitectureDiagram";
import {
  CaseStudyList,
  CaseStudyProse,
  CaseStudySection,
} from "@/components/case-study/CaseStudySection";
import { ProjectMeta } from "@/components/case-study/ProjectMeta";
import { ProjectNavigation } from "@/components/case-study/ProjectNavigation";
import { TechStack } from "@/components/case-study/TechStack";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { CaseStudy } from "@/data/case-studies/types";
import type { Project } from "@/data/projects";
import { getAdjacentProjects } from "@/lib/projects";

type CaseStudyViewProps = {
  project: Project;
  caseStudy: CaseStudy;
};

export function CaseStudyView({ project, caseStudy }: CaseStudyViewProps) {
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <Container>
      <article className="py-16 sm:py-20 lg:py-24">
        <Reveal>
          <ProjectMeta project={project} />
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-8 max-w-[18ch] text-heading font-medium tracking-[-0.03em] text-ink sm:max-w-none">
            {project.name}
          </h1>
          <p className="mt-6 max-w-reading text-[0.9375rem] leading-relaxed text-ink-muted sm:text-base">
            {project.description}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <ProjectVisual variant={project.visual} />
        </Reveal>

        <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
          {caseStudy.sections.map((section) => {
            if (section.key === "technology") {
              return (
                <CaseStudySection key={section.key} id={section.key} title={section.title}>
                  <CaseStudyProse>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </CaseStudyProse>
                  <TechStack items={project.technology} />
                </CaseStudySection>
              );
            }

            if (section.key === "architecture") {
              return (
                <CaseStudySection key={section.key} id={section.key} title={section.title}>
                  <CaseStudyProse>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </CaseStudyProse>
                  <ArchitectureDiagram variant={project.slug} className="mt-6" />
                </CaseStudySection>
              );
            }

            if (section.key === "openSource") {
              return (
                <CaseStudySection key={section.key} id={section.key} title={section.title}>
                  <div className="rounded-[4px] border border-line bg-raised/30 p-6 sm:p-8">
                    <CaseStudyProse>
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      <p className="text-ink-dim">{caseStudy.openSource.licenseNote}</p>
                    </CaseStudyProse>
                    {caseStudy.openSource.upstreamRepoUrl ? (
                      <a
                        href={caseStudy.openSource.upstreamRepoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-6 inline-flex items-center gap-1.5 font-mono text-micro text-ink-muted uppercase transition-colors hover:text-ink"
                      >
                        Upstream repository
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
                      </a>
                    ) : (
                      <p className="mt-6 font-mono text-micro text-ink-faint uppercase">
                        Upstream repository — [ADD LINK]
                      </p>
                    )}
                  </div>
                </CaseStudySection>
              );
            }

            return (
              <CaseStudySection key={section.key} id={section.key} title={section.title}>
                {section.paragraphs.length > 0 ? (
                  <CaseStudyProse>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </CaseStudyProse>
                ) : null}
                {section.bullets ? <CaseStudyList items={section.bullets} /> : null}
              </CaseStudySection>
            );
          })}
        </div>

        <Reveal className="mt-14 border-t border-line-soft pt-10">
          <h2 className="font-mono text-micro text-ink-muted uppercase">Links</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.demoUrl ? (
              <Button href={project.demoUrl} variant="primary" target="_blank" rel="noreferrer noopener">
                Live demo
              </Button>
            ) : (
              <span className="inline-flex h-11 items-center rounded-[3px] border border-dashed border-line px-5 font-mono text-micro text-ink-faint uppercase">
                Live demo — pending
              </span>
            )}
            {project.repoUrl ? (
              <Button href={project.repoUrl} variant="secondary" target="_blank" rel="noreferrer noopener">
                GitHub
              </Button>
            ) : (
              <span className="inline-flex h-11 items-center rounded-[3px] border border-dashed border-line px-5 font-mono text-micro text-ink-faint uppercase">
                GitHub — pending
              </span>
            )}
          </div>
        </Reveal>

        <ProjectNavigation prev={prev} next={next} />
      </article>
    </Container>
  );
}
