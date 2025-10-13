import React from "react";
import { awardsData } from "@/lib/siteData";
import {
  FlutedGlass,
  GodRays,
  MeshGradient,
} from "@paper-design/shaders-react";

const Awards = () => {
  return (
    <div className="relative w-full h-full">
      <MeshGradient
        colors={["#000000", "#1d349a", "#000000", "#31213b", "#380c46"]}
        distortion={1}
        swirl={0.1}
        grainMixer={0.71}
        grainOverlay={0}
        scale={0.96}
        speed={0.44}
        maxPixelCount={800000}
        className="absolute inset-0 -z-10 object-cover w-full h-full"
      />
      {/* <GodRays
        colors={["#421853ab", "#10603f57"]}
        colorBack="#000000"
        colorBloom="#685aa0"
        bloom={1}
        intensity={0}
        density={0.46}
        spotty={1}
        midSize={0}
        midIntensity={0.49}
        speed={3}
        scale={0.6}
        offsetX={0.28}
        offsetY={0.05}
        className="absolute inset-0 -z-10 object-cover w-full h-full"
      /> */}
      <div
        id="awards"
        className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 py-24 xl:py-28 relative mt-24"
      >
        <div className="w-full lg:flex space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/3">
            <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-none before:border-2 before:border-white/30">
              {awardsData.mainData.title}
            </h6>
            <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
              {awardsData.mainData.title2}
              <span className="bg-themeGradient bg-clip-text text-transparent block">
                {awardsData.mainData.title2Span}
              </span>
            </h2>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {awardsData.awards.map((award, index) => (
              <div
                key={index}
                className="z-[1] hover:scale-[1.02] transition-all duration-200 p-8 space-y-1.5 bg-darkBg/40 backdrop-blur-md rounded-none relative overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient"
              >
                <h4 className="font-outfit font-medium text-white text-2xl">
                  {award.title}
                </h4>
                <h6 className="block font-outfit font-medium uppercase text-sm tracking-wider text-white/40">
                  {award.date}
                </h6>
                <p className="text-white/70">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
