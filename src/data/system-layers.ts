export type SystemLayer = {
  index: string;
  label: string;
  meta: string;
  /** Label rendered on the connector below this node. */
  edge?: string;
};

export const systemLayers: SystemLayer[] = [
  { index: "01", label: "Frontend", meta: "React · Next.js", edge: "request" },
  { index: "02", label: "API", meta: "Node.js · REST", edge: "query" },
  { index: "03", label: "Database", meta: "PostgreSQL", edge: "read-through" },
  { index: "04", label: "Cache", meta: "Redis", edge: "enqueue" },
  { index: "05", label: "Async processing", meta: "Workers · Events", edge: "context" },
  { index: "06", label: "AI", meta: "LLM · Embeddings" },
];
