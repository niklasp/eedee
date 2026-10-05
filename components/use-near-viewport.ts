"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Watches an element against the viewport, grown by `margin`.
 * - `near`: true once the element has come within `margin` (then stays true),
 *   so heavy things such as WebGL shaders load only when needed.
 * - `inView`: whether it is within `margin` right now, so they can pause
 *   once scrolled away.
 */
export function useNearViewport<T extends Element>(margin = "600px 0px") {
  const ref = useRef<T | null>(null);
  const [near, setNear] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (!entry) return;
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setNear(true);
      },
      { rootMargin: margin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);

  return { ref, near, inView };
}
