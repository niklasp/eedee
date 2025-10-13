import React from "react";
import { aboutData } from "@/lib/siteData";

const Hero = () => {
  return (
    <div id="about" className="py-24 md:py-28 xl:py-32 text-center">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white !leading-relaxed max-w-[900px] mx-auto">
        {aboutData.mainData.name}
      </h1>
    </div>
  );
};

export default Hero;
