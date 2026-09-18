import type { MetadataRoute } from "next";

import { getAllNoteSlugs } from "@/data/notes";
import { absoluteUrl } from "@/lib/site-url";
import { getAllProjectSlugs, projectCaseStudyPath } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/notes"), lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];

  const workRoutes: MetadataRoute.Sitemap = getAllProjectSlugs().map((slug) => ({
    url: absoluteUrl(projectCaseStudyPath(slug)),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const noteRoutes: MetadataRoute.Sitemap = getAllNoteSlugs().map((slug) => ({
    url: absoluteUrl(`/notes/${slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes, ...noteRoutes];
}
