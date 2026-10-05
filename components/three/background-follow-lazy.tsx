"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useCoolCursor } from "@/components/cool-cursor-context";
import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";

// three.js, drei, postprocessing and the cursor model are only fetched on
// screens that show the 3D cursor, and only once the page is idle, so they
// stay out of the critical path (LCP, TBT).
const BackgroundFollow = dynamic(
  () => import("./background-follow").then((m) => m.BackgroundFollow),
  { ssr: false }
);

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

export function LazyBackgroundFollow() {
  const { coolcursor } = useCoolCursor();
  const [load, setLoad] = useState(false);
  // Reduced motion: no 3D cursor at all, so the system cursor stays too.
  const still = usePrefersReducedMotion();

  useEffect(() => {
    if (!coolcursor || still || load) return;
    const w = window as IdleWindow;
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setLoad(true), { timeout: 3000 });
      return () => w.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(() => setLoad(true), 1500);
    return () => window.clearTimeout(id);
  }, [coolcursor, still, load]);

  return load && !still ? <BackgroundFollow /> : null;
}
