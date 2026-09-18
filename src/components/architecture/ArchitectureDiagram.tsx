import type { ProjectVisualKey } from "@/data/projects";
import { cn } from "@/lib/utils";

type Node = { id: string; label: string; sub?: string; x: number; y: number; w: number; h: number };

type Edge = { from: string; to: string; label?: string };

type DiagramSpec = { nodes: Node[]; edges: Edge[]; title: string };

const diagrams: Record<ProjectVisualKey, DiagramSpec> = {
  canvascms: {
    title: "Content platform boundaries",
    nodes: [
      { id: "editor", label: "Editor", sub: "Next.js", x: 24, y: 28, w: 120, h: 44 },
      { id: "api", label: "Content API", sub: "REST", x: 200, y: 28, w: 120, h: 44 },
      { id: "auth", label: "Auth / RBAC", sub: "Roles", x: 24, y: 108, w: 120, h: 44 },
      { id: "db", label: "PostgreSQL", sub: "Models", x: 200, y: 108, w: 120, h: 44 },
      { id: "hooks", label: "Webhooks", sub: "Events", x: 376, y: 68, w: 120, h: 44 },
      { id: "plugins", label: "Plugins", sub: "Extensions", x: 376, y: 148, w: 120, h: 44 },
    ],
    edges: [
      { from: "editor", to: "api", label: "mutations" },
      { from: "api", to: "db", label: "persist" },
      { from: "auth", to: "api", label: "guard" },
      { from: "api", to: "hooks", label: "emit" },
      { from: "plugins", to: "api", label: "hooks" },
    ],
  },
  collabcanvas: {
    title: "Real-time workspace flow",
    nodes: [
      { id: "client", label: "Clients", sub: "Next.js", x: 24, y: 68, w: 110, h: 44 },
      { id: "ws", label: "WebSocket", sub: "Gateway", x: 170, y: 68, w: 120, h: 44 },
      { id: "room", label: "Room state", sub: "Memory", x: 316, y: 28, w: 120, h: 44 },
      { id: "db", label: "PostgreSQL", sub: "Prisma", x: 316, y: 108, w: 120, h: 44 },
      { id: "auth", label: "Auth", sub: "Sessions", x: 24, y: 148, w: 110, h: 44 },
    ],
    edges: [
      { from: "client", to: "ws", label: "events" },
      { from: "ws", to: "room", label: "fan-out" },
      { from: "ws", to: "db", label: "flush" },
      { from: "auth", to: "ws", label: "verify" },
      { from: "db", to: "ws", label: "hydrate" },
    ],
  },
  atlas: {
    title: "Knowledge retrieval pipeline",
    nodes: [
      { id: "ingest", label: "Ingestion", sub: "Workers", x: 24, y: 28, w: 120, h: 44 },
      { id: "embed", label: "Embeddings", sub: "API", x: 24, y: 108, w: 120, h: 44 },
      { id: "pg", label: "pgVector", sub: "PostgreSQL", x: 200, y: 68, w: 120, h: 44 },
      { id: "rag", label: "RAG service", sub: "Retrieve", x: 376, y: 28, w: 120, h: 44 },
      { id: "llm", label: "LLM API", sub: "Generate", x: 376, y: 108, w: 120, h: 44 },
      { id: "mcp", label: "MCP tools", sub: "Access", x: 200, y: 168, w: 120, h: 44 },
    ],
    edges: [
      { from: "ingest", to: "embed", label: "chunks" },
      { from: "embed", to: "pg", label: "index" },
      { from: "pg", to: "rag", label: "search" },
      { from: "rag", to: "llm", label: "context" },
      { from: "mcp", to: "rag", label: "query" },
    ],
  },
};

function nodeCenter(node: Node) {
  return { x: node.x + node.w / 2, y: node.y + node.h / 2 };
}

function edgePath(from: Node, to: Node) {
  const a = nodeCenter(from);
  const b = nodeCenter(to);
  const midX = (a.x + b.x) / 2;
  return `M ${a.x} ${a.y} C ${midX} ${a.y}, ${midX} ${b.y}, ${b.x} ${b.y}`;
}

export function ArchitectureDiagram({
  variant,
  className,
}: {
  variant: ProjectVisualKey;
  className?: string;
}) {
  const spec = diagrams[variant];

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[4px] border border-line bg-panel/40 p-4 sm:p-6",
        className,
      )}
    >
      <figcaption className="mb-4 flex items-center justify-between gap-4 font-mono text-micro text-ink-faint uppercase">
        <span>{spec.title}</span>
        <span>Schematic</span>
      </figcaption>

      <svg
        viewBox="0 0 520 220"
        role="img"
        aria-label={`Architecture diagram for ${variant}`}
        className="h-auto w-full max-w-full"
      >
        <defs>
          <marker
            id={`arrow-${variant}`}
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--diagram-arrow)" />
          </marker>
        </defs>

        {spec.edges.map((edge) => {
          const from = spec.nodes.find((node) => node.id === edge.from);
          const to = spec.nodes.find((node) => node.id === edge.to);
          if (!from || !to) return null;

          const path = edgePath(from, to);
          const a = nodeCenter(from);
          const b = nodeCenter(to);
          const labelX = (a.x + b.x) / 2;
          const labelY = (a.y + b.y) / 2 - 6;

          return (
            <g key={`${edge.from}-${edge.to}`}>
              <path
                d={path}
                fill="none"
                stroke="var(--diagram-edge)"
                strokeWidth="1"
                markerEnd={`url(#arrow-${variant})`}
              />
              {edge.label ? (
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  className="fill-ink-faint text-[8px] font-mono uppercase"
                >
                  {edge.label}
                </text>
              ) : null}
            </g>
          );
        })}

        {spec.nodes.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={node.h}
              rx="2"
              fill="var(--diagram-node-fill)"
              stroke="var(--diagram-node-stroke)"
              strokeWidth="1"
            />
            <text
              x={node.x + node.w / 2}
              y={node.y + 20}
              textAnchor="middle"
              className="fill-ink text-[10px]"
            >
              {node.label}
            </text>
            {node.sub ? (
              <text
                x={node.x + node.w / 2}
                y={node.y + 34}
                textAnchor="middle"
                className="fill-ink-muted text-[7px] font-mono uppercase"
              >
                {node.sub}
              </text>
            ) : null}
          </g>
        ))}
      </svg>
    </figure>
  );
}
