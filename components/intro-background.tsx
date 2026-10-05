"use client";

import { useEffect, useState, type ComponentType } from "react";
import type { DitheringProps } from "@paper-design/shaders-react";
import { useNearViewport } from "@/components/use-near-viewport";
import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { useAfterLoadIdle } from "@/components/use-after-load-idle";

// A slow, dithered warp in the brand violet behind the intro and Recent Work,
// from the top of the page: square pixels like the logo. The shader code is
// fetched and started only after the page has loaded and gone idle (it sits
// at the top, so it would otherwise run during hydration), then fades in.
// It pauses while scrolled away and holds still for reduced motion.
export function IntroBackground() {
  const { ref, near, inView } = useNearViewport<HTMLDivElement>();
  const still = usePrefersReducedMotion();
  const idle = useAfterLoadIdle(near);
  const [Shader, setShader] = useState<ComponentType<DitheringProps> | null>(
    null
  );
  const [shown, setShown] = useState(false);
  const [maxPixelCount, setMaxPixelCount] = useState(1200000);

  useEffect(() => {
    if (!idle || Shader) return;
    let cancelled = false;
    import("@paper-design/shaders-react").then((m) => {
      if (cancelled) return;
      // Phones: fewer pixels to shade, the dither looks the same.
      setMaxPixelCount(window.innerWidth < 768 ? 400000 : 1200000);
      setShader(() => m.Dithering);
    });
    return () => {
      cancelled = true;
    };
  }, [idle, Shader]);

  // Fade in once the canvas is mounted, so it doesn't pop in.
  useEffect(() => {
    if (!Shader) return;
    let id = requestAnimationFrame(() => {
      id = requestAnimationFrame(() => setShown(true));
    });
    return () => cancelAnimationFrame(id);
  }, [Shader]);

  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0 -z-10">
      {Shader && (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${shown ? "opacity-100" : "opacity-0"}`}
        >
          <Shader
            colorBack="#000000"
            colorFront="#3a0f70"
            shape="warp"
            type="4x4"
            size={3}
            scale={1.7}
            speed={still || !inView ? 0 : 0.2}
            maxPixelCount={maxPixelCount}
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )}
      {/* Even out the pattern: quieter under the header and the headline,
          fuller in the middle, fading out at the bottom. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.3)_20%,rgba(0,0,0,0.05)_45%,rgba(0,0,0,0.2)_75%,rgba(0,0,0,0.85)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_16%_at_50%_20%,rgba(0,0,0,0.55),transparent)]" />
    </div>
  );
}
