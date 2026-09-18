import { cn } from "@/lib/utils";

type TechBadgeProps = {
  children: string;
  className?: string;
};

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <li
      className={cn(
        "rounded-[2px] border border-line px-2.5 py-1 font-mono text-micro text-ink-dim uppercase",
        className,
      )}
    >
      {children}
    </li>
  );
}

export function TechBadgeList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <TechBadge key={item}>{item}</TechBadge>
      ))}
    </ul>
  );
}
