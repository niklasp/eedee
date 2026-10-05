"use client";

import { useEffect, useState } from "react";

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

/**
 * True once the page has loaded (window `load`) and the main thread is idle,
 * so optional work such as a WebGL shader stays out of hydration (TBT).
 */
export function useAfterLoadIdle(enabled = true, timeout = 3000) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!enabled || ready) return;
    const w = window as IdleWindow;
    let idleId: number | undefined;
    let timerId: number | undefined;

    const whenIdle = () => {
      if (w.requestIdleCallback) {
        idleId = w.requestIdleCallback(() => setReady(true), { timeout });
      } else {
        timerId = window.setTimeout(() => setReady(true), 500);
      }
    };

    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });

    return () => {
      window.removeEventListener("load", whenIdle);
      if (idleId !== undefined) w.cancelIdleCallback?.(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
    };
  }, [enabled, ready, timeout]);

  return ready;
}
