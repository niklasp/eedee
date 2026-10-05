"use client";

import { useEffect, useRef, useState } from "react";

/**
 * True once the element comes within `margin` of the viewport (then stays
 * true), so heavy things such as WebGL shaders load only when needed.
 */
export function useNearViewport<T extends Element>(margin = "600px 0px") {
  const ref = useRef<T | null>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: margin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [near, margin]);

  return [ref, near] as const;
}
