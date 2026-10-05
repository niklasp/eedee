// The eedee pixel wordmark: 5x7 dot letters with square dots, as in the
// brand generator (public/brand/*.svg). One source for the header, footer and
// the Open Graph images.

const FONT: Record<string, string[]> = {
  e: [".....", ".....", ".###.", "#...#", "#####", "#....", ".####"],
  d: ["....#", "....#", ".####", "#...#", "#...#", "#...#", ".####"],
};

export const BRAND_DARK = ["#ff82f3", "#7b13ff"] as const; // on dark grounds
export const BRAND_LIGHT = ["#d03cc4", "#5a10c4"] as const; // on light grounds

const PITCH = 7;
const DOT = 6;

/** Dot cells [col, row] of a word, 6 columns per letter. */
function cells(text: string): [number, number][] {
  const out: [number, number][] = [];
  [...text].forEach((ch, ci) =>
    FONT[ch].forEach((row, r) =>
      [...row].forEach((b, c) => {
        if (b === "#") out.push([ci * 6 + c, r]);
      })
    )
  );
  return out;
}

const word = cells("eedee");
const cols = Math.max(...word.map(([c]) => c)) + 1;
const rows = Math.max(...word.map(([, r]) => r)) + 1;

export const wordmarkSize = {
  width: (cols - 1) * PITCH + DOT, // 202
  height: (rows - 1) * PITCH + DOT, // 48
};

export const wordmarkRects = word.map(([c, r]) => ({
  x: c * PITCH,
  y: r * PITCH,
}));
export const wordmarkDot = DOT;

/** The wordmark as an SVG string (for data URIs, e.g. in OG images). */
export function wordmarkSvg(colors: readonly [string, string] = BRAND_DARK) {
  const { width: w, height: h } = wordmarkSize;
  const rects = wordmarkRects
    .map((p) => `<rect x="${p.x}" y="${p.y}" width="${DOT}" height="${DOT}"/>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" shape-rendering="crispEdges"><defs><linearGradient id="g" x1="0" y1="${h}" x2="${w}" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${colors[0]}"/><stop offset="1" stop-color="${colors[1]}"/></linearGradient></defs><g fill="url(#g)">${rects}</g></svg>`;
}
