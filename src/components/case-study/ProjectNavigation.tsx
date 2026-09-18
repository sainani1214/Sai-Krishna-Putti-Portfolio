import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/projects";
import { projectCaseStudyPath } from "@/lib/projects";

type ProjectNavigationProps = {
  prev: Project | null;
  next: Project | null;
};

export function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  return (
    <nav
      aria-label="Case study navigation"
      className="mt-16 flex flex-col gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between"
    >
      <Button href="/#work" variant="ghost" className="justify-start px-0">
        <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
        Selected work
      </Button>

      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        {prev ? (
          <Button href={projectCaseStudyPath(prev.slug)} variant="secondary" size="sm">
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
            {prev.name}
          </Button>
        ) : null}
        {next ? (
          <Button href={projectCaseStudyPath(next.slug)} variant="secondary" size="sm">
            {next.name}
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
          </Button>
        ) : null}
      </div>
    </nav>
  );
}
