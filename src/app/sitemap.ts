import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/content";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const wikiUrl = siteConfig.wikiUrl;
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${wikiUrl}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${wikiUrl}/comandos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${wikiUrl}/encantamentos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${wikiUrl}/ranks`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${wikiUrl}/skyblock`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${wikiUrl}/rankup`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];

  const articles = getArticles().map((a) => ({
    url: `${wikiUrl}/${a.path}`,
    lastModified: new Date(a.meta.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articles];
}