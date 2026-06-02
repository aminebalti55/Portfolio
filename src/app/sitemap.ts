import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Case-study + blog slugs (must match the route folders under app/work and
// app/blog). Update when you add a page.
const workSlugs = [
  "pulse",
  "autoally",
  "invoicebirds",
  "fledem",
  "atlas",
  "compass",
  "cassandra",
  "easyrhis",
  "romorquage",
];

const blogSlugs = [
  "multi-tenant-saas-architecture",
  "scaling-websocket-signalr",
  "development-workflow",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...workSlugs.map((slug) => ({
      url: `${SITE_URL}/work/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
