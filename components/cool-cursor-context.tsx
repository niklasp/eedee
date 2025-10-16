"use client";

import React, { createContext, useContext, useState } from "react";

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
  const [coolcursor, setCoolcursor] = useState<boolean>(defaultOn);
  return (
    <CoolCursorContext.Provider value={{ coolcursor, setCoolcursor }}>
      {children}
    </CoolCursorContext.Provider>
  );
}

export function useCoolCursor(): CoolCursorContextValue {
  return useContext(CoolCursorContext);
}
