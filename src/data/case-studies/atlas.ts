import type { CaseStudy } from "@/data/case-studies/types";

export const atlasCaseStudy: CaseStudy = {
  slug: "atlas",
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
        "Atlas is an AI-powered knowledge and developer search platform exploring document ingestion, semantic retrieval, RAG, citations, conversational search, and MCP-based tool access.",
        "This case study frames the system design exploration. Retrieval quality claims and production metrics are intentionally omitted until backed by measured results.",
      ],
    },
    {
      key: "problem",
      title: "Problem",
      paragraphs: [
        "Engineering teams accumulate documents, APIs, and tribal knowledge that keyword search alone does not surface reliably.",
        "The project investigates ingestion pipelines, embedding-backed retrieval, and grounded answers with citations and tool access.",
      ],
    },
    {
      key: "product",
      title: "Product",
      paragraphs: [
        "The product direction combines ingest pipelines, vector search, conversational query interfaces, and optional MCP tools for agent-style access.",
      ],
      bullets: [
        "Document ingestion and chunking workflows",
        "Semantic retrieval with pgVector-backed storage",
        "RAG responses with citation hooks",
        "Conversational search over the knowledge index",
        "MCP-oriented tool endpoints for external clients",
      ],
    },
    {
      key: "architecture",
      title: "Architecture",
      paragraphs: [
        "Ingestion workers prepare documents for embedding; retrieval services query PostgreSQL/pgVector; the application layer orchestrates LLM calls and citation assembly.",
        "The diagram summarizes component boundaries rather than a specific model vendor or latency target.",
      ],
    },
    {
      key: "engineeringDecisions",
      title: "Engineering decisions",
      paragraphs: [
        "[ADD ACTUAL CONTRIBUTION] Document chunking strategy and metadata preserved for citations.",
        "[ADD ACTUAL CONTRIBUTION] Document embedding and retrieval pipeline choices.",
        "[ADD ACTUAL CONTRIBUTION] Document MCP tool surface and authorization boundaries.",
      ],
    },
    {
      key: "technicalChallenges",
      title: "Technical challenges",
      paragraphs: [
        "[ADD ACTUAL CONTRIBUTION] Retrieval quality and grounding without fabricated benchmark numbers.",
        "[ADD ACTUAL CONTRIBUTION] Citation alignment between generated answers and source chunks.",
        "[ADD ACTUAL CONTRIBUTION] Cost and latency trade-offs across embedding and LLM calls.",
      ],
    },
    {
      key: "keyFeatures",
      title: "Key features",
      bullets: [
        "Document ingestion pipeline",
        "Embeddings and semantic search",
        "RAG with citation-oriented responses",
        "Conversational search interface",
        "MCP-based tool access",
      ],
      paragraphs: [],
    },
    {
      key: "technology",
      title: "Technology",
      paragraphs: [
        "Next.js, TypeScript, RAG pipelines, embeddings, PostgreSQL, pgVector, LLM APIs, and MCP integration points.",
      ],
    },
    {
      key: "contributions",
      title: "What I changed / contributed",
      paragraphs: [
        "Personal contributions relative to upstream Atlas (or equivalent) codebases will be enumerated after attribution review.",
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
        "Upstream license and repository links will be added alongside a clear summary of personal changes.",
      ],
    },
  ],
};
