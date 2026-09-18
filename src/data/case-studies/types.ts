import type { ProjectVisualKey } from "@/data/projects";

export type CaseStudySectionKey =
  | "overview"
  | "problem"
  | "product"
  | "architecture"
  | "engineeringDecisions"
  | "technicalChallenges"
  | "keyFeatures"
  | "technology"
  | "contributions"
  | "openSource";

export type CaseStudySection = {
  key: CaseStudySectionKey;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type CaseStudyOpenSource = {
  summary: string;
  upstreamName: string;
  upstreamRepoUrl: string | null;
  licenseNote: string;
};

export type CaseStudy = {
  slug: ProjectVisualKey;
  sections: readonly CaseStudySection[];
  openSource: CaseStudyOpenSource;
};
