import { portfolioData } from "@/lib/siteData";
import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "Project by eedee";
export const size = ogSize;
export const contentType = ogContentType;
export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioData.projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);
  if (!project) return ogCard({ eyebrow: "Work", title: "eedee", text: "" });
  return ogCard({
    eyebrow: `Work · ${project.projectLink.title}`,
    title: project.title,
    text: project.description,
    tags: project.categories?.map((c) => c.name) ?? [],
  });
}
