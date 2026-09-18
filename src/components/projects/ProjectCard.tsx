import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { TechBadgeList } from "@/components/ui/TechBadge";
import type { Project } from "@/data/projects";

type ProjectLink = { label: string; href: string; external: boolean };

function collectLinks(project: Project): ProjectLink[] {
  const links: ProjectLink[] = [];

  if (project.demoUrl) {
    links.push({ label: "Live demo", href: project.demoUrl, external: true });
  }
  if (project.repoUrl) {
    links.push({ label: "GitHub", href: project.repoUrl, external: true });
  }
  if (project.caseStudyUrl) {
    links.push({
      label: "Case study",
      href: project.caseStudyUrl,
      external: false,
    });
  }

  return links;
}

export function ProjectCard({ project }: { project: Project }) {
  const links = collectLinks(project);

  return (
    <article className="group relative rounded-[4px] border border-line bg-raised/30 transition-colors duration-300 ease-[var(--ease-out-expo)] hover:border-line-strong hover:bg-raised/60">
      <header className="flex items-center justify-between gap-4 border-b border-line-soft px-5 py-4 sm:px-8">
        <div className="flex items-baseline gap-4 sm:gap-6">
          <span className="font-mono text-micro text-ink-faint">{project.index}</span>
          <span className="font-mono text-micro text-ink-muted uppercase">
            {project.category}
          </span>
        </div>
        <span className="hidden font-mono text-micro text-ink-faint uppercase sm:inline">
          {project.slug}
        </span>
      </header>

      <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
        <div className="flex flex-col lg:col-span-5">
          {project.caseStudyUrl ? (
            <h3 className="text-heading font-medium tracking-[-0.03em] text-ink">
              <Link
                href={project.caseStudyUrl}
                className="transition-colors hover:opacity-80"
              >
                {project.name}
              </Link>
            </h3>
          ) : (
            <h3 className="text-heading font-medium tracking-[-0.03em] text-ink">
              {project.name}
            </h3>
          )}

          <p className="mt-4 max-w-[46ch] text-[0.9375rem] leading-relaxed text-ink-muted">
            {project.description}
          </p>

          <TechBadgeList items={project.technology} className="mt-7" />

          <div className="mt-auto pt-10">
            {links.length > 0 ? (
              <ul className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="group/link inline-flex items-center gap-1.5 text-[0.8125rem] text-ink-dim transition-colors hover:text-ink"
                    >
                      {link.label}
                      <ArrowUpRight
                        aria-hidden
                        strokeWidth={1.5}
                        className="h-3.5 w-3.5 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}

            <dl className="flex items-center justify-between gap-4 border-t border-line-soft pt-5 font-mono text-micro uppercase">
              <dt className="text-ink-faint">Status</dt>
              <dd className="text-ink-muted">{project.status}</dd>
            </dl>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ProjectVisual variant={project.visual} />
        </div>
      </div>
    </article>
  );
}
