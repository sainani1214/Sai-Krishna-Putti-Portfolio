import type { ComponentType } from "react";

import type { ProjectVisualKey } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Abstract, monochrome product mocks drawn in HTML/CSS.
 * Placeholders for real screenshots — deliberately schematic, never photographic.
 */

function Chrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-line-soft px-4 py-2.5">
      <span className="flex gap-1" aria-hidden>
        <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/10" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/[0.07]" />
      </span>
      <span className="truncate font-mono text-micro text-ink-faint lowercase">
        {label}
      </span>
    </div>
  );
}

function Line({ className }: { className?: string }) {
  return <span className={cn("block h-1.5 rounded-[1px] bg-ink/[0.08]", className)} />;
}

function CanvasCmsVisual() {
  return (
    <div className="flex h-full flex-col">
      <Chrome label="canvascms / pages / marketing-home" />

      <div className="grid flex-1 grid-cols-12 overflow-hidden">
        <div className="col-span-3 hidden flex-col gap-3 border-r border-line-soft p-4 sm:flex">
          <span className="font-mono text-micro text-ink-faint uppercase">
            Content model
          </span>
          <div className="flex flex-col gap-2.5">
            {["Page", "Post", "Author", "Asset", "Redirect"].map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span
                  aria-hidden
                  className={cn(
                    "h-2 w-2 rounded-[1px] border",
                    index === 0 ? "border-ink/40 bg-ink/20" : "border-line-strong",
                  )}
                />
                <span className="font-mono text-micro text-ink-faint">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 flex flex-col gap-3 p-4 sm:col-span-6">
          <div className="rounded-[2px] border border-dashed border-line-strong bg-ink/[0.02] p-3">
            <Line className="w-2/3" />
            <Line className="mt-2 w-1/3 bg-ink/[0.05]" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[0, 1].map((block) => (
              <div
                key={block}
                className="rounded-[2px] border border-line-soft bg-ink/[0.015] p-3"
              >
                <span className="block h-8 rounded-[1px] bg-ink/[0.04]" />
                <Line className="mt-2.5 w-full bg-ink/[0.06]" />
                <Line className="mt-1.5 w-3/5 bg-ink/[0.04]" />
              </div>
            ))}
          </div>
          <div className="rounded-[2px] border border-line-soft p-3">
            <Line className="w-full bg-ink/[0.05]" />
            <Line className="mt-1.5 w-4/5 bg-ink/[0.04]" />
          </div>
        </div>

        <div className="col-span-3 hidden flex-col gap-3 border-l border-line-soft p-4 sm:flex">
          <span className="font-mono text-micro text-ink-faint uppercase">Fields</span>
          {["title", "slug", "status", "locale", "version"].map((field) => (
            <div key={field} className="flex items-center justify-between gap-2">
              <span className="font-mono text-micro text-ink-faint">{field}</span>
              <span aria-hidden className="h-px w-6 bg-line-strong" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CollabCanvasVisual() {
  return (
    <div className="flex h-full flex-col">
      <Chrome label="collabcanvas / board / session" />

      <div className="relative flex-1 overflow-hidden p-4">
        <div
          aria-hidden
          className="absolute inset-0 opacity-70 [background-image:radial-gradient(color-mix(in_srgb,var(--color-ink)_10%,transparent)_1px,transparent_1px)] [background-size:18px_18px]"
        />

        <div className="absolute top-4 right-4 flex items-center gap-1.5">
          {["A", "M", "S"].map((initial) => (
            <span
              key={initial}
              className="flex h-5 w-5 items-center justify-center rounded-full border border-line-strong bg-panel font-mono text-[0.5rem] text-ink-dim"
            >
              {initial}
            </span>
          ))}
          <span className="ml-1 font-mono text-micro text-ink-faint uppercase">
            live
          </span>
        </div>

        <svg
          aria-hidden
          viewBox="0 0 320 180"
          className="relative h-full w-full text-ink"
          preserveAspectRatio="xMidYMid meet"
        >
          <g stroke="var(--diagram-edge)" fill="none" strokeWidth="1">
            <path d="M96 56 C 128 56, 128 108, 160 108" />
            <path d="M160 108 C 196 108, 196 62, 228 62" />
          </g>
          <g fill="var(--diagram-node-fill)" stroke="var(--diagram-node-stroke)" strokeWidth="1">
            <rect x="36" y="38" width="60" height="36" rx="2" />
            <rect x="130" y="90" width="60" height="36" rx="2" />
            <rect x="228" y="44" width="56" height="36" rx="2" />
          </g>
          <g fill="color-mix(in srgb, var(--color-ink) 14%, transparent)">
            <rect x="44" y="48" width="36" height="3" rx="1.5" />
            <rect x="44" y="56" width="24" height="3" rx="1.5" />
            <rect x="138" y="100" width="40" height="3" rx="1.5" />
            <rect x="138" y="108" width="28" height="3" rx="1.5" />
            <rect x="236" y="54" width="32" height="3" rx="1.5" />
          </g>
          <g>
            <path
              d="M118 128 l0 14 l4 -4 l4 8 l3 -2 l-4 -8 l6 0 z"
              fill="color-mix(in srgb, var(--color-ink) 75%, transparent)"
            />
            <rect
              x="130"
              y="132"
              width="34"
              height="11"
              rx="2"
              fill="color-mix(in srgb, var(--color-ink) 12%, transparent)"
            />
            <path
              d="M244 96 l0 14 l4 -4 l4 8 l3 -2 l-4 -8 l6 0 z"
              fill="color-mix(in srgb, var(--color-ink) 40%, transparent)"
            />
          </g>
        </svg>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-[2px] border border-line-soft bg-panel/80 px-2 py-1 backdrop-blur-sm">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ink/60" />
          <span className="font-mono text-micro text-ink-faint uppercase">
            synced
          </span>
        </div>
      </div>
    </div>
  );
}

function AtlasVisual() {
  return (
    <div className="flex h-full flex-col">
      <Chrome label="atlas / search" />

      <div className="grid flex-1 grid-cols-12 overflow-hidden">
        <div className="col-span-12 flex flex-col gap-3 p-4 sm:col-span-8">
          <div className="flex items-center gap-2.5 rounded-[2px] border border-line bg-ink/[0.02] px-3 py-2.5">
            <span aria-hidden className="h-3 w-3 rounded-full border border-line-strong" />
            <span className="truncate font-mono text-micro text-ink-dim lowercase">
              how is retrieval ranked?
            </span>
            <span
              aria-hidden
              className="ml-auto h-3.5 w-px bg-ink/40 motion-safe:animate-pulse"
            />
          </div>

          {[
            { cite: "01", width: "w-full" },
            { cite: "02", width: "w-11/12" },
            { cite: "03", width: "w-4/5" },
          ].map((chunk) => (
            <div
              key={chunk.cite}
              className="rounded-[2px] border border-line-soft bg-ink/[0.012] p-3"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-[1px] border border-line-strong px-1 font-mono text-[0.5rem] text-ink-faint">
                  {chunk.cite}
                </span>
                <span aria-hidden className={cn("h-1.5 rounded-[1px] bg-ink/[0.07]", chunk.width)} />
              </div>
              <span aria-hidden className="mt-2 block h-1.5 w-3/5 rounded-[1px] bg-ink/[0.045]" />
            </div>
          ))}
        </div>

        <div className="col-span-4 hidden flex-col gap-3 border-l border-line-soft p-4 sm:flex">
          <span className="font-mono text-micro text-ink-faint uppercase">
            Vector space
          </span>
          <div className="grid grid-cols-6 gap-1.5">
            {Array.from({ length: 36 }).map((_, index) => (
              <span
                key={index}
                aria-hidden
                className={cn(
                  "aspect-square rounded-[1px]",
                  index % 7 === 0
                    ? "bg-ink/35"
                    : index % 3 === 0
                      ? "bg-ink/12"
                      : "bg-ink/[0.05]",
                )}
              />
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between">
            <span className="font-mono text-micro text-ink-faint uppercase">
              tools
            </span>
            <span className="font-mono text-micro text-ink-faint uppercase">mcp</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const visuals: Record<ProjectVisualKey, ComponentType> = {
  canvascms: CanvasCmsVisual,
  collabcanvas: CollabCanvasVisual,
  atlas: AtlasVisual,
};

export function ProjectVisual({ variant }: { variant: ProjectVisualKey }) {
  const Visual = visuals[variant];

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3px] border border-line-soft bg-panel">
      <div className="h-full w-full transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.015]">
        <Visual />
      </div>
    </div>
  );
}
