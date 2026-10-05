import React from "react";
import { aboutData } from "@/lib/siteData";

const Hero = () => {
  return (
    <div id="about" className="pt-36 pb-10 md:pt-40 xl:pt-48 xl:pb-14 text-center">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white !leading-relaxed max-w-[900px] mx-auto">
        {/* One span per letter for the colour wave (see .hero-pixel-ch);
            the text itself is unchanged for search engines and readers. */}
        {[...aboutData.mainData.name].map((ch, i) =>
          ch === " " ? (
            " "
          ) : (
            <span
              key={i}
              className="hero-pixel-ch"
              style={{ "--i": i } as React.CSSProperties}
            >
              {ch}
            </span>
          )
        )}
      </h1>
    </div>
  );
};

export default Hero;
