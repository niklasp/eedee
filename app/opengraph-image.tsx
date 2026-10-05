import { ogCard, ogContentType, ogSize } from "@/lib/og";
import { homeDescription, studioTagline } from "@/lib/seoData";

export const alt = `eedee, ${studioTagline}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({
    eyebrow: studioTagline,
    text: homeDescription,
    tags: ["Web3", "React", "Next.js", "WordPress", "UX"],
  });
}
