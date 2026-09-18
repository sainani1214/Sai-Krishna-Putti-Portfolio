import type { Project, ProjectVisualKey } from "@/data/projects";
import { projects } from "@/data/projects";

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): ProjectVisualKey[] {
  return projects.map((project) => project.slug);
}

export function getAdjacentProjects(slug: ProjectVisualKey): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? projects[index - 1]! : null,
    next: index < projects.length - 1 ? projects[index + 1]! : null,
  };
}

export function projectCaseStudyPath(slug: ProjectVisualKey): string {
  return `/work/${slug}`;
}
