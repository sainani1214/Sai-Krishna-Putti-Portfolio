import { atlasCaseStudy } from "@/data/case-studies/atlas";
import { canvasCmsCaseStudy } from "@/data/case-studies/canvascms";
import { collabCanvasCaseStudy } from "@/data/case-studies/collabcanvas";
import type { CaseStudy } from "@/data/case-studies/types";
import type { ProjectVisualKey } from "@/data/projects";

const caseStudies: Record<ProjectVisualKey, CaseStudy> = {
  canvascms: canvasCmsCaseStudy,
  collabcanvas: collabCanvasCaseStudy,
  atlas: atlasCaseStudy,
};

export function getCaseStudy(slug: ProjectVisualKey): CaseStudy {
  return caseStudies[slug];
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  if (slug in caseStudies) {
    return caseStudies[slug as ProjectVisualKey];
  }
  return undefined;
}
