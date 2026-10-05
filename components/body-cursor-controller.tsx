"use client";

import { useEffect } from "react";
import { useCoolCursor } from "@/components/cool-cursor-context";

export function BodyCursorController() {
  const { coolcursor, sceneReady } = useCoolCursor();
  // Hide the system cursor only while the 3D cursor is actually rendered.
  const active = coolcursor && sceneReady;

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    if (active) {
      body.classList.add("coolcursor");
      html.classList.add("coolcursor");
    } else {
      body.classList.remove("coolcursor");
      html.classList.remove("coolcursor");
    }
  }, [active]);

  return null;
}
