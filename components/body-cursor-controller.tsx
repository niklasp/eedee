"use client";

import { useEffect } from "react";
import { useCoolCursor } from "@/components/cool-cursor-context";

export function BodyCursorController() {
  const { coolcursor } = useCoolCursor();

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    if (coolcursor) {
      body.classList.add("coolcursor");
      html.classList.add("coolcursor");
    } else {
      body.classList.remove("coolcursor");
      html.classList.remove("coolcursor");
    }
  }, [coolcursor]);

  return null;
}
