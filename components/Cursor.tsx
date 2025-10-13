"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const targetXRef = useRef<number>(0);
  const targetYRef = useRef<number>(0);
  const posXRef = useRef<number>(0);
  const posYRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const isInitializedRef = useRef<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const mouseElements = document.querySelectorAll(
      "a, button, input, textarea, .cursor-link",
    );

    const handleMouseMove = (e: MouseEvent) => {
      targetXRef.current = e.pageX;
      targetYRef.current = e.pageY;

      if (!isInitializedRef.current) {
        posXRef.current = e.pageX;
        posYRef.current = e.pageY;
        isInitializedRef.current = true;
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const lerp = (start: number, end: number, amt: number) =>
      start + (end - start) * amt;

    const animate = () => {
      posXRef.current = lerp(posXRef.current, targetXRef.current, 0.18);
      posYRef.current = lerp(posYRef.current, targetYRef.current, 0.18);

      cursor.style.left = posXRef.current + "px";
      cursor.style.top = posYRef.current + "px";

      rafIdRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    mouseElements.forEach((mouseElm) => {
      mouseElm.addEventListener("mouseenter", handleMouseEnter);
      mouseElm.addEventListener("mouseleave", handleMouseLeave);
    });

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
      document.removeEventListener("mousemove", handleMouseMove);
      mouseElements.forEach((mouseElm) => {
        mouseElm.removeEventListener("mouseenter", handleMouseEnter);
        mouseElm.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      id="cursor"
      ref={cursorRef}
      className={cn(
        "hidden lg:inline-block z-[11] absolute -translate-x-1/2 -translate-y-1/2 bg-white size-3 rounded-none",
        isHovered
          ? "mix-blend-difference bg-green-500 h-8 w-3 rotate-180"
          : "mix-blend-difference",
        "pointer-events-none transition-all ease-linear duration-[80ms]",
      )}
    ></div>
  );
}

export default Cursor;
