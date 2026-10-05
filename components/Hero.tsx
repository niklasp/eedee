import React from "react";
import { aboutData } from "@/lib/siteData";

const Hero = () => {
  const sentence = aboutData.mainData.name;
  return (
    <div id="intro" className="pt-36 pb-10 md:pt-40 xl:pt-48 xl:pb-14 text-center">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white !leading-relaxed max-w-[900px] mx-auto">
        {/* Screen readers and search engines get the sentence once, as
            text. The visual copy is one span per letter for the colour wave
            (see .hero-pixel-ch); each letter is drawn by CSS from data-ch,
            so the heading's text isn't doubled, and it is hidden from
            assistive tech. */}
        <span className="sr-only">{sentence}</span>
        <span aria-hidden="true">
          {[...sentence].map((ch, i) =>
            ch === " " ? (
              " "
            ) : (
              <span
                key={i}
                className="hero-pixel-ch"
                data-ch={ch}
                style={{ "--i": i } as React.CSSProperties}
              />
            )
          )}
        </span>
      </h1>
    </div>
  );
};

export default Hero;
