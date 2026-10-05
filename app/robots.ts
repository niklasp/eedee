import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "@/lib/seoData";

// Search engines and AI crawlers are welcome: the site is a public portfolio.
// Pages that shouldn't be indexed (the placeholder blog) say so with a
// noindex robots meta, which crawlers can only see if they may fetch them.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
