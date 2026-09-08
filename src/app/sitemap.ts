import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/content";
import { getAllEnchants } from "@/lib/enchants";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const wikiUrl = siteConfig.wikiUrl;
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${wikiUrl}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${wikiUrl}/comecando`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${wikiUrl}/skyblock`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${wikiUrl}/geral`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${wikiUrl}/skyblock/comandos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${wikiUrl}/geral/comandos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${wikiUrl}/skyblock/encantamentos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${wikiUrl}/geral/vips`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const articles = getArticles().map((a) => ({
    url: `${wikiUrl}/${a.path}`,
    lastModified: new Date(a.meta.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const encantamentos = getAllEnchants().map((e) => ({
    url: `${wikiUrl}/skyblock/encantamentos/${e.path}`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articles, ...encantamentos];
}