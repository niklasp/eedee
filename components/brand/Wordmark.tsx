import { useId } from "react";
import {
  BRAND_DARK,
  BRAND_LIGHT,
  wordmarkDot,
  wordmarkRects,
  wordmarkSize,
} from "@/lib/brand";

/** The eedee pixel wordmark, inline (no request, no layout shift). */
export function Wordmark({
  height = 26,
  variant = "dark",
  className,
}: {
  height?: number;
  variant?: "dark" | "light";
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const [from, to] = variant === "dark" ? BRAND_DARK : BRAND_LIGHT;
  const { width: w, height: h } = wordmarkSize;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${w} ${h}`}
      width={Math.round((w / h) * height)}
      height={height}
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient
          id={`eedee-g-${id}`}
          x1="0"
          y1={h}
          x2={w}
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <g fill={`url(#eedee-g-${id})`}>
        {wordmarkRects.map((p) => (
          <rect
            key={`${p.x}-${p.y}`}
            x={p.x}
            y={p.y}
            width={wordmarkDot}
            height={wordmarkDot}
          />
        ))}
      </g>
    </svg>
  );
}
