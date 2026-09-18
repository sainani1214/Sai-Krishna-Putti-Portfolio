import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const base =
  "group/button inline-flex select-none items-center justify-center gap-2 rounded-[3px] text-[0.8125rem] font-medium tracking-[-0.01em] whitespace-nowrap transition-[background-color,border-color,color,opacity] duration-200 ease-[var(--ease-out-expo)] disabled:pointer-events-none disabled:opacity-40";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-canvas hover:opacity-90",
  secondary:
    "border border-line bg-ink/[0.04] text-ink hover:border-line-strong hover:bg-ink/[0.08]",
  ghost: "px-0 text-ink-dim hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5",
  sm: "h-9 px-3.5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: never;
  };

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function Button({
  variant = "secondary",
  size = "md",
  className,
  children,
  ...rest
}: AnchorProps | NativeButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorRest } = rest as AnchorProps;

    if (isInternalHref(href)) {
      return (
        <Link href={href} className={classes} {...anchorRest}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
