export type ProjectVisualKey = "canvascms" | "collabcanvas" | "atlas";

export type Project = {
  index: string;
  slug: ProjectVisualKey;
  name: string;
  category: string;
  description: string;
  technology: string[];
  status: string;
  visual: ProjectVisualKey;
  /** Real URLs only — left null until the deployment/repository exists. */
  demoUrl: string | null;
  repoUrl: string | null;
  /** Case study routes are built in a later phase. */
  caseStudyUrl: string | null;
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "canvascms",
    name: "CanvasCMS",
    category: "Content Platform / Developer Tooling",
    description:
      "Developer-first content and publishing platform exploring typed content models, visual page composition, permissions, versioned publishing, APIs, and extensibility.",
    technology: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "RBAC",
      "REST APIs",
      "Webhooks",
      "Plugins",
    ],
    status: "Open-source based / extended",
    visual: "canvascms",
    demoUrl: null,
    repoUrl: null,
    caseStudyUrl: "/work/canvascms",
  },
  {
    index: "02",
    slug: "collabcanvas",
    name: "CollabCanvas",
    category: "Real-Time Systems",
    description:
      "Real-time collaborative workspace exploring WebSocket communication, shared state, persistence, authentication, presence, synchronization, and conflict-aware workflows.",
    technology: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    status: "Open-source based / extended",
    visual: "collabcanvas",
    demoUrl: null,
    repoUrl: null,
    caseStudyUrl: "/work/collabcanvas",
  },
  {
    index: "03",
    slug: "atlas",
    name: "Atlas",
    category: "AI / Knowledge Systems",
    description:
      "AI-powered knowledge and developer search platform exploring document ingestion, semantic retrieval, RAG, citations, conversational search, and MCP-based tool access.",
    technology: [
      "Next.js",
      "TypeScript",
      "RAG",
      "Embeddings",
      "PostgreSQL",
      "pgVector",
      "LLM APIs",
      "MCP",
    ],
    status: "Open-source based / extended",
    visual: "atlas",
    demoUrl: null,
    repoUrl: null,
    caseStudyUrl: "/work/atlas",
  },
];
