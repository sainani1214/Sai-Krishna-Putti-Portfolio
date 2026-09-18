import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type LabelProps = {
  children: ReactNode;
  className?: string;
  /** Renders the small index tick used across section eyebrows. */
  marker?: boolean;
};

/** Mono, uppercase, wide-tracked micro label — the technical voice of the page. */
export function Label({ children, className, marker = false }: LabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-label text-ink-muted uppercase",
        className,
      )}
    >
      {marker ? (
        <span aria-hidden className="h-1 w-1 rounded-full bg-ink-faint" />
      ) : null}
      {children}
    </span>
  );
}
