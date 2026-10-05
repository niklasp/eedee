"use client";

import { useMediaQuery } from "@/components/use-media-query";

/** True while the visitor asks for reduced motion (false on the server). */
export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
