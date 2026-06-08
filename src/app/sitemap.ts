import type { MetadataRoute } from "next";
import { site, openJobs } from "@/lib/site";

// Static routes for the brand pages.
const routes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/employers", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/candidates", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/jobs", priority: 0.9, changeFrequency: "hourly" as const },
  { path: "/hot-jobs", priority: 0.8, changeFrequency: "daily" as const },
  { path: "/interview-training", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/resume-services", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/industries", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
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
