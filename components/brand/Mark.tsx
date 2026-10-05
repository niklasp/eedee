import { useId } from "react";
import { BRAND_DARK } from "@/lib/brand";

// The e of the wordmark on its own (rows 2-6 of the 5x7 letter): the icon.
const E = [".###.", "#...#", "#####", "#....", ".####"];
const PITCH = 7;
const DOT = 6;
const SIZE = 4 * PITCH + DOT; // 34

/** The eedee pixel "e", inline. Scales to any size. */
export function Mark({
  size = 64,
  className,
  title,
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  const id = useId().replace(/:/g, "");
  const [from, to] = BRAND_DARK;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className={className}
      {...(title
        ? { role: "img", "aria-label": title }
        : { "aria-hidden": true, focusable: "false" })}
    >
      <defs>
        <linearGradient
          id={`eedee-m-${id}`}
          x1="0"
          y1={SIZE}
          x2={SIZE}
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <g fill={`url(#eedee-m-${id})`}>
        {E.flatMap((row, r) =>
          [...row].map((b, c) =>
            b === "#" ? (
              <rect
                key={`${c}-${r}`}
                x={c * PITCH}
                y={r * PITCH}
                width={DOT}
                height={DOT}
              />
            ) : null
          )
        )}
      </g>
    </svg>
  );
}
