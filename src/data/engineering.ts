export type EngineeringDiscipline = {
  index: string;
  title: string;
  items: readonly string[];
};

export const engineeringDisciplines: EngineeringDiscipline[] = [
  {
    index: "01",
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Performance",
      "Component Architecture",
    ],
  },
  {
    index: "02",
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Authorization",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    index: "03",
    title: "Systems",
    items: [
      "Redis",
      "Kafka",
      "Event-driven architecture",
      "Async processing",
      "Idempotency",
      "Rate limiting",
      "Caching",
    ],
  },
  {
    index: "04",
    title: "AI Engineering",
    items: [
      "LLM APIs",
      "RAG",
      "Embeddings",
      "Semantic Search",
      "Tool Calling",
      "MCP",
    ],
  },
];
