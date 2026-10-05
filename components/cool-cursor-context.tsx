"use client";

import React, { createContext, useContext, useState } from "react";
import { useMediaQuery } from "@/components/use-media-query";

interface CoolCursorContextValue {
  coolcursor: boolean;
  setCoolcursor: (value: boolean) => void;
  /** True once the 3D cursor is on screen (it loads lazily, after idle). */
  sceneReady: boolean;
  setSceneReady: (value: boolean) => void;
}

const CoolCursorContext = createContext<CoolCursorContextValue>({
  coolcursor: true,
  setCoolcursor: () => {},
  sceneReady: false,
  setSceneReady: () => {},
});

export function CoolCursorProvider({
  children,
  defaultOn = true,
}: {
  children: React.ReactNode;
  defaultOn?: boolean;
}) {
  // Store user preference and compute effective value based on viewport size
  const [prefersCoolcursor, setPrefersCoolcursor] =
    useState<boolean>(defaultOn);
  const isSmall = useMediaQuery("(max-width: 767px)");
  const [sceneReady, setSceneReady] = useState<boolean>(false);

  const coolcursor = prefersCoolcursor && !isSmall;
  return (
    <CoolCursorContext.Provider
      value={{
        coolcursor,
        setCoolcursor: setPrefersCoolcursor,
        sceneReady,
        setSceneReady,
      }}
    >
      {children}
    </CoolCursorContext.Provider>
  );
}

export function useCoolCursor(): CoolCursorContextValue {
  return useContext(CoolCursorContext);
}
