"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useNearViewport } from "@/components/use-near-viewport";

// A slow, dithered warp in the brand violet behind Recent Work: square pixels
// like the logo. Loads and starts only near the viewport; holds still for
// reduced motion.
const Dithering = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.Dithering),
  { ssr: false }
);

export function PortfolioBackground() {
  const [ref, near] = useNearViewport<HTMLDivElement>();
  const [still, setStill] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setStill(mq.matches);
    const onChange = () => setStill(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0 -z-10">
      {near && (
        <Dithering
          colorBack="#000000"
          colorFront="#3b0f73"
          shape="warp"
          type="4x4"
          size={3}
          scale={1.2}
          speed={still ? 0 : 0.25}
          maxPixelCount={1200000}
          className="absolute inset-0 w-full h-full"
        />
      )}
      {/* Darker behind the heading and text, so they stay easy to read. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,0,0,0.75),transparent_60%)]" />
    </div>
  );
}
