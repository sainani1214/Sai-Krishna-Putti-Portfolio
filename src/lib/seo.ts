import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/site-url";
import { site } from "@/data/site";

export const siteTitle = "Sai Krishna — Full-Stack Software Developer";

export const siteDescription =
  "Full-stack software developer building production web applications, distributed systems, and AI-powered products.";

export function createPageMetadata({
  title,
  description = siteDescription,
  path,
}: {
  title: string;
  description?: string;
  path: string;
}): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
