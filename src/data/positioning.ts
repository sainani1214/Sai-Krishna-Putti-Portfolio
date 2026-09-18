export type PositioningArea = {
  index: string;
  title: string;
  description: string;
};

export const positioningStatement = {
  lead: "From product interfaces to backend systems,",
  trail: "I work across the layers that make software reliable.",
};

export const positioningAreas: PositioningArea[] = [
  {
    index: "01",
    title: "Product Engineering",
    description:
      "Building production features from requirements through deployment.",
  },
  {
    index: "02",
    title: "Systems",
    description:
      "APIs, databases, caching, asynchronous workflows, reliability and performance.",
  },
  {
    index: "03",
    title: "AI Applications",
    description: "RAG, semantic search, LLM APIs, tool calling and MCP.",
  },
];
