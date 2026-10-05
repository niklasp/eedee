import { aboutData, portfolioData } from "@/lib/siteData";
import {
  absoluteUrl,
  founderName,
  homeDescription,
  siteName,
  siteUrl,
  studioTagline,
} from "@/lib/seoData";

export type Project = (typeof portfolioData.projects)[number];

const orgId = `${siteUrl}/#organization`;
const founderId = `${siteUrl}/#founder`;
const websiteId = `${siteUrl}/#website`;

/** Own plugins that are a free download on WordPress.org (slug = wp.org slug). */
const freeOnWordPressOrg = ["wisp-gallery"];

/** Projects eedee makes and sells itself (client "eedee (own product)"). */
export const isOwnProduct = (project: Project) =>
  "client" in project && /own product/i.test(project.client ?? "");

export function founderJsonLd() {
  return {
    "@type": "Person",
    "@id": founderId,
    name: founderName,
    url: siteUrl,
    jobTitle: "Founder, fullstack developer",
    worksFor: { "@id": orgId },
    sameAs: [
      ...aboutData.connect.map((c) => c.url),
      "https://profiles.wordpress.org/eedee/",
    ],
    knowsAbout: aboutData.skills.map((s) => s.name),
  };
}

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": orgId,
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl("/brand/icon-512.png"),
    image: absoluteUrl("/opengraph-image"),
    slogan: studioTagline,
    description: homeDescription,
    email: "niklas@eedee.net",
    founder: { "@id": founderId },
    sameAs: ["https://profiles.wordpress.org/eedee/"],
    knowsAbout: aboutData.skills.map((s) => s.name),
  };
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      founderJsonLd(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteName,
        description: homeDescription,
        inLanguage: "en",
        publisher: { "@id": orgId },
      },
      {
        "@type": "ItemList",
        name: "Recent work",
        itemListElement: portfolioData.projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: absoluteUrl(`/portfolio/${p.slug}`),
          name: p.title,
        })),
      },
    ],
  };
}

export function projectJsonLd(project: Project) {
  const url = absoluteUrl(`/portfolio/${project.slug}`);
  const common = {
    "@id": `${url}#work`,
    name: project.title,
    description: project.description,
    url,
    sameAs: project.projectLink.url,
    image: absoluteUrl(`/portfolio/${project.slug}/opengraph-image`),
    keywords: project.categories?.map((c) => c.name).join(", "),
    creator: { "@id": orgId },
    isPartOf: { "@id": websiteId },
  };
  const client =
    "client" in project && project.client && !isOwnProduct(project)
      ? project.client
      : undefined;
  const main = isOwnProduct(project)
    ? {
        "@type": "SoftwareApplication",
        ...common,
        applicationCategory: "WebApplication",
        applicationSubCategory: "WordPress plugin",
        operatingSystem: "WordPress",
        author: { "@id": orgId },
        publisher: { "@id": orgId },
        // Only Wisp Gallery is listed as a free download for now.
        ...(freeOnWordPressOrg.includes(project.slug)
          ? {
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              downloadUrl: `https://wordpress.org/plugins/${project.slug}/`,
            }
          : {}),
      }
    : {
        "@type": "CreativeWork",
        ...common,
        ...(client
          ? { funder: { "@type": "Organization", name: client } }
          : {}),
      };
  return {
    "@context": "https://schema.org",
    "@graph": [
      main,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteName, item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: absoluteUrl("/#portfolio"),
          },
          { "@type": "ListItem", position: 3, name: project.title, item: url },
        ],
      },
      organizationJsonLd(),
      founderJsonLd(),
    ],
  };
}

/** Serialize for a <script type="application/ld+json"> tag. */
export const jsonLdString = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
