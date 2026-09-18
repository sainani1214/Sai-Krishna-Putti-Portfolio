export type ExperienceEntry = {
  role: string;
  company: string;
  product?: string;
  period: string;
  summary: string;
  highlights: readonly string[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Software Developer",
    company: "McKinley Rice",
    product: "Redrob.io",
    period: "Dec 2023 — Present",
    summary:
      "Building and maintaining production web applications across frontend, backend, APIs, databases, payments, and third-party integrations.",
    highlights: [
      "Production development with React, Next.js, and TypeScript across customer-facing and internal features.",
      "Node.js APIs and database-driven functionality from design through deployment.",
      "Authentication, authorization, and payment integrations with external providers.",
      "Production debugging, performance optimization, and end-to-end feature ownership.",
      "Collaboration with product and client stakeholders on requirements and delivery.",
    ],
  },
];
