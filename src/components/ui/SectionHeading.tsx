import type { ReactNode } from "react";

import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("w-full", className)}>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="max-w-2xl">
          <Label marker>
            {index ? <span className="text-ink-faint">{index}</span> : null}
            {eyebrow}
          </Label>

          <h2 className="mt-5 text-heading font-medium text-ink text-balance">
            {title}
          </h2>

          {description ? (
            <p className="mt-4 max-w-reading text-[0.9375rem] leading-relaxed text-ink-muted">
              {description}
            </p>
          ) : null}
        </div>

        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </Reveal>
  );
}
