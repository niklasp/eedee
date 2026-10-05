import { footerData } from "@/lib/siteData";
import { Wordmark } from "@/components/brand/Wordmark";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center px-5 py-9 xl:py-10">
      <p className="text-white/70 inline-flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1">
        <span>&copy; {currentYear}</span>
        {/* Baseline-aligned: the svg sits on the text baseline, its e as tall as the capitals. */}
        <Wordmark height={14} className="self-baseline" />
        <span className="sr-only">eedee</span>
        <span>{footerData.copyWriteText}</span>
      </p>
    </footer>
  );
}
