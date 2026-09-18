import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Container({
  as: Component = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full min-w-0 max-w-shell px-5 sm:px-8 lg:px-12 xl:px-16",
        className,
      )}
    >
      {children}
    </Component>
  );
}
