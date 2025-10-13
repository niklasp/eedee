import { servicesData } from "@/lib/siteData";
import { cn } from "@/lib/utils";
import { doto, fontIBMPlexMono } from "@/app/fonts";
import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full lg:flex py-24 xl:py-28 space-y-6 lg:space-y-0"
    >
      <div className="w-full lg:w-1/3">
        <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-none before:border-2 before:border-white/30">
          {servicesData.mainData.title}
        </h6>
        <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
          {servicesData.mainData.title2}{" "}
          <span className="bg-themeGradient bg-clip-text text-transparent">
            {servicesData.mainData.title2Span}
          </span>
        </h2>
      </div>
      <div className="w-full lg:w-2/3 space-y-6">
        {servicesData.services.map((item, index) => (
          <div
            key={index}
            className={cn(
              "z-[1] p-8 space-y-3 md:space-y-0 md:flex md:items-center bg-darkBg",
              "rounded-none relative overflow-hidden",
              "before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:h-full before:bg-themeGradient before:opacity-0 before:w-0 hover:before:w-full hover:before:opacity-10 before:transition-all before:ease-linear before:duration-200",
              "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient",
            )}
          >
            <div className="md:w-[15%] text-white">
              <span
                className={cn(
                  "font-outfit text-5xl font-medium",
                  doto.className,
                )}
              >
                {item.number}/
              </span>
            </div>
            <div className="md:w-[40%] text-white">
              <h3 className="inline-flex pl-3 font-outfit font-medium text-2xl xl:text-3xl">
                {item.title}
              </h3>
            </div>
            <div className="md:w-[45%]">
              <p className={cn("text-white/70", fontIBMPlexMono.className)}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
