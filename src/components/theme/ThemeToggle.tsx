"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

import {
  applyTheme,
  getThemeSnapshot,
  subscribeTheme,
  type Theme,
} from "@/lib/theme";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    (): Theme => "dark",
  );

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
  }

  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-[3px] border border-line text-ink-dim transition-colors hover:border-line-strong hover:text-ink",
        className,
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-[15px] w-[15px]" strokeWidth={1.5} aria-hidden />
      ) : (
        <Moon className="h-[15px] w-[15px]" strokeWidth={1.5} aria-hidden />
      )}
    </button>
  );
}
