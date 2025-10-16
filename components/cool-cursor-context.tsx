"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface CoolCursorContextValue {
  coolcursor: boolean;
  setCoolcursor: (value: boolean) => void;
}

const CoolCursorContext = createContext<CoolCursorContextValue>({
  coolcursor: true,
  setCoolcursor: () => {},
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
  const [isSmall, setIsSmall] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent) => setIsSmall(e.matches);
    setIsSmall(mql.matches);
    if (typeof mql.addEventListener === "function")
      mql.addEventListener("change", onChange);
    else
      (
        mql as MediaQueryList & {
          addListener?: (listener: (e: MediaQueryListEvent) => void) => void;
        }
      ).addListener?.(onChange);
    return () => {
      if (typeof mql.removeEventListener === "function")
        mql.removeEventListener("change", onChange);
      else
        (
          mql as MediaQueryList & {
            removeListener?: (
              listener: (e: MediaQueryListEvent) => void
            ) => void;
          }
        ).removeListener?.(onChange);
    };
  }, []);

  const coolcursor = prefersCoolcursor && !isSmall;
  return (
    <CoolCursorContext.Provider
      value={{ coolcursor, setCoolcursor: setPrefersCoolcursor }}
    >
      {children}
    </CoolCursorContext.Provider>
  );
}

export function useCoolCursor(): CoolCursorContextValue {
  return useContext(CoolCursorContext);
}
