"use client";

import { useEffect, ReactNode } from "react";

interface GalleryWrapperProps {
  children: ReactNode;
}

// glightbox touches `window` when its module is evaluated, so it must never be
// imported on the server. It (and its CSS) is loaded only on pages that have
// `.glightbox` links.
function GalleryWrapper({ children }: GalleryWrapperProps) {
  useEffect(() => {
    if (!document.querySelector(".glightbox")) return;
    let lightbox: { destroy: () => void } | undefined;
    let cancelled = false;
    import("./glightbox-init").then(({ initGlightbox }) => {
      if (!cancelled) lightbox = initGlightbox();
    });

    return () => {
      cancelled = true;
      lightbox?.destroy();
    };
  }, []);

  return <>{children}</>;
}

export default GalleryWrapper;
