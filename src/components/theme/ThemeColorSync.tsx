"use client";

import { useEffect } from "react";

import { getStoredTheme, updateThemeColorMeta } from "@/lib/theme";

/** Keeps the mobile browser chrome `theme-color` in sync after hydration. */
export function ThemeColorSync() {
  useEffect(() => {
    updateThemeColorMeta(getStoredTheme());
  }, []);

  return null;
}
