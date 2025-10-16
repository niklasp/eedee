"use client";

import React, { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export function ParallaxAvatar({
  src,
  alt,
  className,
  maxTranslateY = 40,
  maxScale = 1.1,
  placeholder,
}: ParallaxAvatarProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const elementCenter = rect.top + rect.height / 2;
      const normalized =
        (elementCenter - viewportHeight / 2) / (viewportHeight / 2);
      const clamped = Math.max(-1, Math.min(1, normalized));
      const offsetY = -clamped * maxTranslateY;
      const scaleDelta = Math.max(0, maxScale - 1);
      const scale = 1 + Math.abs(clamped) * scaleDelta;
      if (!inner.style.transformOrigin) inner.style.transformOrigin = "50% 50%";
      inner.style.transform = `translateY(${offsetY}px) scale(${scale})`;
      rafIdRef.current = null;
    };

    const onScrollOrResize = () => {
      if (rafIdRef.current !== null) return;
      rafIdRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    // initial position
    onScrollOrResize();

    return () => {
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [maxTranslateY, maxScale]);

  return (
    <div
      ref={containerRef}
      className="relative inline-block will-change-transform animate-parallax-avatar"
    >
      <div
        ref={innerRef}
        className="transition-transform ease-out duration-200"
      >
        <Image
          src={src}
          alt={alt}
          placeholder={placeholder}
          className={cn(className)}
        />
      </div>
    </div>
  );
}

interface ParallaxAvatarProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  maxTranslateY?: number;
  maxScale?: number;
  placeholder?: "blur" | "empty";
}
