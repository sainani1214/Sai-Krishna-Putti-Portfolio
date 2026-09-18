import type { Project } from "@/data/projects";

export function ProjectMeta({ project }: { project: Project }) {
  return (
    <dl className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-micro uppercase">
      <div className="flex items-center gap-2">
        <dt className="text-ink-faint">Index</dt>
        <dd className="text-ink-dim">{project.index}</dd>
      </div>
      <div className="flex items-center gap-2">
        <dt className="text-ink-faint">Category</dt>
        <dd className="text-ink-muted">{project.category}</dd>
      </div>
      <div className="flex items-center gap-2">
        <dt className="text-ink-faint">Status</dt>
        <dd className="text-ink-muted">{project.status}</dd>
      </div>
    </dl>
  );
}
