import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type CaseStudySectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function CaseStudySection({
  id,
  title,
  children,
  className,
}: CaseStudySectionProps) {
  return (
    <Reveal>
      <section id={id} className={cn("scroll-mt-28", className)}>
        <h2 className="font-mono text-micro text-ink-muted uppercase">{title}</h2>
        <div className="mt-5 space-y-4">{children}</div>
      </section>
    </Reveal>
  );
}

export function CaseStudyProse({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-reading space-y-4 text-[0.9375rem] leading-relaxed text-ink-muted">
      {children}
    </div>
  );
}

export function CaseStudyList({ items }: { items: readonly string[] }) {
  if (items.length === 0) return null;

  return (
    <ul className="max-w-reading space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-dim">
          <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
