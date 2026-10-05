import type { MetadataRoute } from "next";
import { portfolioData } from "@/lib/siteData";
import { absoluteUrl } from "@/lib/seoData";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...portfolioData.projects.map((p) => ({
      url: absoluteUrl(`/portfolio/${p.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
