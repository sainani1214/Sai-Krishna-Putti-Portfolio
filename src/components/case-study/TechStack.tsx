import { TechBadgeList } from "@/components/ui/TechBadge";

export function TechStack({ items }: { items: readonly string[] }) {
  return (
    <div>
      <TechBadgeList items={items} />
    </div>
  );
}
