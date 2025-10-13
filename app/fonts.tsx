import {
  Doto,
  Geist,
  Geist_Mono,
  Fira_Mono,
  Nova_Mono,
  IBM_Plex_Mono,
} from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export const fontFiraMono = Fira_Mono({
  variable: "--font-font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const fontNovaMono = Nova_Mono({
  variable: "--font-font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const fontIBMPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["200"],
});
