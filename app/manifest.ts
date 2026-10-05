import type { MetadataRoute } from "next";
import { homeDescription } from "@/lib/seoData";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "eedee studio",
    short_name: "eedee",
    description: homeDescription,
    start_url: "/",
    display: "browser",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
