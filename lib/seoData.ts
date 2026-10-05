export const siteUrl = "https://eedee.net";
/** The studio. eedee.net presents eedee first, its founder second. */
export const siteName = "eedee";
export const studioTagline = "web, web3 and WordPress studio";
export const founderName = "Niklas Jurij Plessing";

export const homeTitle = `eedee, ${studioTagline}`;
export const homeDescription =
  "eedee is a studio for web3 apps, React interfaces and WordPress plugins, founded by Niklas Jurij Plessing. Recent work: Polkadot UI, ink!, R0GUE and Wisp Gallery.";

export const homeKeywords = [
  "eedee",
  "web studio",
  "web3 development",
  "frontend development",
  "React",
  "Next.js",
  "Polkadot",
  "WordPress plugins",
  "block editor",
  "UX design",
  "Niklas Jurij Plessing",
];

export const absoluteUrl = (path = "/") =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

export const getPortfolioProjectSEO = (
  slug: string,
  title: string,
  excerpt: string,
  keywords?: string
) => ({
  title: `${title} | ${siteName}`,
  description: excerpt,
  keywords: [
    title,
    ...(keywords
      ? keywords
          .split(",")
          .map((k) => k.trim())
          .filter((k) => k && !/^key\d+$/.test(k))
      : []),
  ],
  canonicalUrl: absoluteUrl(`/portfolio/${slug}`),
});

export const getBlogPostSEO = (
  slug: string,
  title: string,
  excerpt: string
) => ({
  title: `${title} | Blog | ${siteName}`,
  description: excerpt,
  keywords: ["blog", "article", ...title.toLowerCase().split(" ")],
  canonicalUrl: absoluteUrl(`/blog/${slug}`),
});
