import { Doto, IBM_Plex_Mono } from "next/font/google";

export const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export const fontIBMPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["200"],
});
