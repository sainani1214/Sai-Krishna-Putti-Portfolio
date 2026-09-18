export type NoteBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string };

export type Note = {
  index: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string | null;
  blocks: readonly NoteBlock[];
};

export const notes: Note[] = [
  {
    index: "01",
    slug: "preventing-overselling-high-concurrency-booking",
    title: "Preventing overselling in high-concurrency booking systems",
    excerpt:
      "Inventory, holds, and idempotent reservation paths under concurrent load.",
    publishedAt: null,
    blocks: [
      {
        type: "paragraph",
        content:
          "This note will cover concurrency-safe booking flows: inventory accounting, short-lived holds, and idempotent reservation APIs.",
      },
      {
        type: "paragraph",
        content:
          "[DRAFT — Full article pending. No production metrics or client claims will be added without verified implementation detail.]",
      },
    ],
  },
  {
    index: "02",
    slug: "designing-idempotent-payment-workflows",
    title: "Designing idempotent payment workflows",
    excerpt:
      "Keys, retries, and reconciliation when payment providers and clients disagree.",
    publishedAt: null,
    blocks: [
      {
        type: "paragraph",
        content:
          "A structured look at idempotency keys, webhook ordering, and safe retries in payment integrations.",
      },
      {
        type: "paragraph",
        content:
          "[DRAFT — Full article pending. Examples will reflect real integration patterns only.]",
      },
    ],
  },
  {
    index: "03",
    slug: "redis-caching-patterns-production",
    title: "Redis caching patterns in production applications",
    excerpt:
      "TTL discipline, cache-aside, and invalidation boundaries in live systems.",
    publishedAt: null,
    blocks: [
      {
        type: "paragraph",
        content:
          "Practical caching patterns with Redis: what to cache, how long to keep it, and how to invalidate without stale reads.",
      },
      {
        type: "paragraph",
        content: "[DRAFT — Full article pending.]",
      },
    ],
  },
  {
    index: "04",
    slug: "understanding-rag-retrieval-quality",
    title: "Understanding RAG retrieval quality",
    excerpt:
      "Chunking, embeddings, and evaluation without overclaiming answer accuracy.",
    publishedAt: null,
    blocks: [
      {
        type: "paragraph",
        content:
          "Retrieval quality in RAG systems depends on ingestion, chunk boundaries, embedding choice, and honest evaluation—not headline accuracy percentages.",
      },
      {
        type: "paragraph",
        content: "[DRAFT — Full article pending.]",
      },
    ],
  },
  {
    index: "05",
    slug: "react-nextjs-performance-optimization",
    title: "React and Next.js performance optimization",
    excerpt:
      "Rendering boundaries, data fetching, and measurable front-end improvements.",
    publishedAt: null,
    blocks: [
      {
        type: "paragraph",
        content:
          "Notes on diagnosing render cost, choosing server vs client boundaries, and validating improvements with profiling rather than assumptions.",
      },
      {
        type: "paragraph",
        content: "[DRAFT — Full article pending.]",
      },
    ],
  },
];

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((note) => note.slug === slug);
}

export function getAllNoteSlugs(): string[] {
  return notes.map((note) => note.slug);
}
