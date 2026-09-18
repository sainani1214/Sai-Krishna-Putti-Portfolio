import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { getCaseStudyBySlug } from "@/data/case-studies";
import { createPageMetadata } from "@/lib/seo";
import { getAllProjectSlugs, getProjectBySlug, projectCaseStudyPath } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Case study" };
  }

  return createPageMetadata({
    title: `${project.name} — Case study`,
    description: project.description,
    path: projectCaseStudyPath(project.slug),
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const caseStudy = getCaseStudyBySlug(slug);

  if (!project || !caseStudy) {
    notFound();
  }

  return (
    <div className="relative">
      <div aria-hidden className="hairline-x h-px w-full" />
      <CaseStudyView project={project} caseStudy={caseStudy} />
      <div aria-hidden className="hairline-x h-px w-full" />
    </div>
  );
}
