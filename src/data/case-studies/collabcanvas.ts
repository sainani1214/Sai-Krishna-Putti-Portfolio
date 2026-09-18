import type { CaseStudy } from "@/data/case-studies/types";

export const collabCanvasCaseStudy: CaseStudy = {
  slug: "collabcanvas",
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
        "CollabCanvas is a real-time collaborative workspace exploring WebSocket communication, shared state, persistence, authentication, presence, synchronization, and conflict-aware workflows.",
        "This case study describes the engineering focus of the extended work. Contribution details will be added after upstream attribution is verified.",
      ],
    },
    {
      key: "problem",
      title: "Problem",
      paragraphs: [
        "Collaborative editing surfaces need low-latency updates, durable persistence, and predictable behavior when multiple clients change shared state.",
        "The project examines how to structure real-time sync, presence, and conflict handling without over-promising production-scale metrics.",
      ],
    },
    {
      key: "product",
      title: "Product",
      paragraphs: [
        "The workspace direction combines a shared canvas or board model with authenticated sessions, live presence, and persisted document state.",
      ],
      bullets: [
        "Authenticated sessions and workspace membership",
        "Live presence and cursor or selection hints",
        "WebSocket transport for incremental updates",
        "Persistence layer for durable board state",
        "Conflict-aware update flows",
      ],
    },
    {
      key: "architecture",
      title: "Architecture",
      paragraphs: [
        "Clients connect through a Next.js front end to a Node.js real-time gateway, with PostgreSQL (via Prisma) for persistence and Docker for local orchestration.",
        "The diagram is a conceptual map of responsibilities, not a benchmarked latency or user-count claim.",
      ],
    },
    {
      key: "engineeringDecisions",
      title: "Engineering decisions",
      paragraphs: [
        "[ADD ACTUAL CONTRIBUTION] Document WebSocket message shapes and server authority boundaries.",
        "[ADD ACTUAL CONTRIBUTION] Document how shared state is persisted and rehydrated on reconnect.",
        "[ADD ACTUAL CONTRIBUTION] Document conflict handling strategy (last-write, operational transforms, or other).",
      ],
    },
    {
      key: "technicalChallenges",
      title: "Technical challenges",
      paragraphs: [
        "[ADD ACTUAL CONTRIBUTION] Reconnection and session continuity after network drops.",
        "[ADD ACTUAL CONTRIBUTION] Ordering and idempotency of real-time events.",
        "[ADD ACTUAL CONTRIBUTION] Balancing optimistic UI updates with authoritative server state.",
      ],
    },
    {
      key: "keyFeatures",
      title: "Key features",
      bullets: [
        "Real-time board updates over WebSockets",
        "Shared state with server-backed persistence",
        "Authentication and workspace access control",
        "Presence and synchronization signals",
        "Conflict-aware editing workflows",
      ],
      paragraphs: [],
    },
    {
      key: "technology",
      title: "Technology",
      paragraphs: [
        "Next.js, TypeScript, Node.js, WebSockets, PostgreSQL, Prisma, and Docker for containerized local development.",
      ],
    },
    {
      key: "contributions",
      title: "What I changed / contributed",
      paragraphs: [
        "Specific changes relative to the upstream repository will be listed here after a documented review. Placeholders mark areas pending that audit.",
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
        "Upstream authorship and license requirements remain in force. Links and contribution summaries will be published when finalized.",
      ],
    },
  ],
};
