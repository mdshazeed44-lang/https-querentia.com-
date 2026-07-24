import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getPublicJobs } from "@/lib/jobs";

// Static routes for the brand pages.
const routes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/jobs", priority: 0.9, changeFrequency: "hourly" as const },
  { path: "/hot-jobs", priority: 0.8, changeFrequency: "daily" as const },
  { path: "/for-talent", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/for-companies", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const openJobs = await getPublicJobs();

  // Brand pages
  const staticUrls = routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Per-job indexable URLs — each gets its own entry (replaces the legacy
  // single-iframe page that exposed zero job content to Google + AI).
  const jobUrls = openJobs.map((j) => ({
    url: `${site.url}/jobs/${j.slug}`,
    lastModified: new Date(j.postedAt),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...jobUrls];
}
