"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useNearViewport } from "@/components/use-near-viewport";

// A slow, dithered warp in the brand violet behind the intro and Recent Work,
// from the top of the page: square pixels like the logo. Loads and starts only near the viewport; holds still for
// reduced motion.
const Dithering = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.Dithering),
  { ssr: false }
);

export function IntroBackground() {
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
          colorFront="#3a0f70"
          shape="warp"
          type="4x4"
          size={3}
          scale={1.7}
          speed={still ? 0 : 0.2}
          maxPixelCount={1200000}
          className="absolute inset-0 w-full h-full"
        />
      )}
      {/* Even out the pattern: quieter under the header and the headline,
          fuller in the middle, fading out at the bottom. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.3)_20%,rgba(0,0,0,0.05)_45%,rgba(0,0,0,0.2)_75%,rgba(0,0,0,0.85)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_16%_at_50%_20%,rgba(0,0,0,0.55),transparent)]" />
    </div>
  );
}
