"use client";

import dynamic from "next/dynamic";
import { useNearViewport } from "@/components/use-near-viewport";
import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";

// The WebGL mesh gradient behind the achievements: its code loads and the
// shader starts only when the section comes near the viewport, pauses when it
// is scrolled away again, and holds still for reduced motion.
const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.MeshGradient),
  { ssr: false }
);

export function AwardsBackground() {
  const { ref, near, inView } = useNearViewport<HTMLDivElement>();
  const still = usePrefersReducedMotion();

  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0 -z-10">
      {near && (
        <MeshGradient
          colors={["#000000", "#1d349a", "#000000", "#31213b", "#380c46"]}
          distortion={1}
          swirl={0.1}
          grainMixer={0.71}
          grainOverlay={0}
          scale={0.96}
          speed={still || !inView ? 0 : 0.44}
          maxPixelCount={800000}
          className="absolute inset-0 -z-10 object-cover w-full h-full"
        />
      )}
    </div>
  );
}
