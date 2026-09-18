import type { CaseStudy } from "@/data/case-studies/types";

export const canvasCmsCaseStudy: CaseStudy = {
  slug: "canvascms",
  openSource: {
    summary:
      "Built as an extension of an upstream open-source project, with additional features and engineering work by Sai Krishna.",
    upstreamName: "[UPSTREAM PROJECT NAME]",
    upstreamRepoUrl: null,
    licenseNote:
      "Original license and attribution from the upstream repository are preserved. [ADD UPSTREAM LICENSE / REPO LINK]",
  },
  sections: [
    {
      key: "overview",
      title: "Project overview",
      paragraphs: [
        "CanvasCMS is a developer-first content and publishing platform focused on typed content models, visual page composition, permissions, versioned publishing, APIs, and extensibility.",
        "This case study documents the engineering direction of the extended implementation. Detailed contribution notes will be added as upstream attribution and personal changes are finalized.",
      ],
    },
    {
      key: "problem",
      title: "Problem",
      paragraphs: [
        "Teams building content-driven products often need structured models, editorial workflows, and APIs without adopting a rigid, opaque CMS.",
        "The project explores how a developer-oriented platform can balance editorial flexibility with schema safety and deployment discipline.",
      ],
    },
    {
      key: "product",
      title: "Product",
      paragraphs: [
        "The product direction centers on composable pages, typed fields, role-based access, and publish/version workflows exposed through REST APIs and webhooks.",
      ],
      bullets: [
        "Content models with typed fields and relationships",
        "Visual page composition for marketing and product surfaces",
        "Permissions and role-based publishing controls",
        "Versioned publish states and rollback-oriented workflows",
        "Extensibility through plugins and outbound webhooks",
      ],
    },
    {
      key: "architecture",
      title: "Architecture",
      paragraphs: [
        "The system is organized around a Next.js application surface, a Node.js API layer, PostgreSQL for durable content, and integration points for auth and plugins.",
        "The diagram below is a schematic view of the major boundaries—not a claim about a specific production deployment topology.",
      ],
    },
    {
      key: "engineeringDecisions",
      title: "Engineering decisions",
      paragraphs: [
        "[ADD ACTUAL CONTRIBUTION] Document the schema and API boundaries chosen for content models and publishing.",
        "[ADD ACTUAL CONTRIBUTION] Document how permissions and versioning were modeled in the database and application layers.",
        "[ADD ACTUAL CONTRIBUTION] Document plugin and webhook extension points and their trade-offs.",
      ],
    },
    {
      key: "technicalChallenges",
      title: "Technical challenges",
      paragraphs: [
        "[ADD ACTUAL CONTRIBUTION] Challenges around consistent content validation across the editor, API, and published output.",
        "[ADD ACTUAL CONTRIBUTION] Challenges around publish/version semantics and concurrent editorial changes.",
        "[ADD ACTUAL CONTRIBUTION] Challenges around extensibility without compromising core platform invariants.",
      ],
    },
    {
      key: "keyFeatures",
      title: "Key features",
      bullets: [
        "Typed content models and field validation",
        "Visual page composition",
        "RBAC for editorial and administrative roles",
        "REST APIs for content delivery and management",
        "Webhooks and plugin hooks for integration",
      ],
      paragraphs: [],
    },
    {
      key: "technology",
      title: "Technology",
      paragraphs: [
        "Next.js, TypeScript, PostgreSQL, RBAC, REST APIs, webhooks, and a plugin-oriented extension model.",
      ],
    },
    {
      key: "contributions",
      title: "What I changed / contributed",
      paragraphs: [
        "Personal engineering contributions on this codebase are being documented against the upstream baseline. Until that review is complete, specifics are intentionally marked as placeholders.",
      ],
      bullets: [
        "[ADD ACTUAL CONTRIBUTION]",
        "[ADD ACTUAL CONTRIBUTION]",
        "[ADD ACTUAL CONTRIBUTION]",
      ],
    },
    {
      key: "openSource",
      title: "Open-source attribution",
      paragraphs: [
        "Built as an extension of [UPSTREAM PROJECT NAME], with additional features and engineering work by Sai Krishna.",
        "The upstream implementation is not presented as original work in its entirety. Repository links, license text, and a concise diff of personal contributions will be added here.",
      ],
    },
  ],
};
