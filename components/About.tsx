import React from "react";
import Image from "next/image";
import { Suspense } from "react";
import { AvatarSphere } from "./three/avatar-sphere";
import Link from "next/link";
import { aboutData } from "@/lib/siteData";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { doto } from "@/app/fonts";

const About = () => {
  return (
    <div className="lg:flex space-y-8 lg:space-y-0">
      {/* Hero Avatar */}
      <div className="w-full lg:w-1/3 lg:order-2 text-center">
        {/* <Suspense
          fallback={
            <Image
              src={aboutData.mainData.heroAvatar}
              alt="hero avatar"
              placeholder="blur"
              className="inline-block w-[240px] h-[240px] md:w-[270px] md:h-[270px] xl:w-[320px] xl:h-[320px] rounded-full"
            />
          }
        >
          <AvatarSphere
            textureUrl={
              (aboutData.mainData.heroAvatar as any).src ??
              "/images/niftesty.jpg"
            }
          />
        </Suspense> */}
        <Image
          src={aboutData.mainData.heroAvatar}
          alt="hero avatar"
          placeholder="blur"
          className="inline-block w-[240px] h-[240px] md:w-[270px] md:h-[270px] xl:w-[320px] xl:h-[320px] rounded-full"
        />
      </div>
      {/* end Hero Avatar */}
      <div className="w-full lg:w-1/3 lg:order-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8">
        <div>
          <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">
            Biography
          </h6>
          <p className="text-white/70 leading-[1.75] font-ibm-plex-mono">
            {aboutData.mainData.biography}
          </p>
        </div>
        <div>
          <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">
            Skills
          </h6>
          <ul className="text-white/70 gap-1 flex flex-wrap">
            {aboutData.skills.map((item, index) => (
              <li key={index} className="list-none inline">
                <Badge
                  className={cn(
                    "bg-white/15 text-white cursor-default flex items-center gap-1 text-lg",
                    doto.className,
                  )}
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={14}
                      height={14}
                    />
                  )}{" "}
                  {item.name}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">
            Connect
          </h6>
          <ul className="space-x-1">
            {aboutData.connect.map((item, index) => (
              <li key={index} className="list-none inline-block">
                <Link
                  className="inline-block group w-[44px] h-[44px] rounded-none bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                  href={item.url}
                  aria-label="Social media link"
                >
                  <i
                    className={`${item.bootstrapIcon} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0`}
                  ></i>
                  <i
                    className={`${item.bootstrapIcon} absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100`}
                  ></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={cn(
          "w-full lg:w-1/3 order-3 grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-7 lg:text-right",
          doto.className,
        )}
      >
        <div>
          <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">
            Projects Done
          </h6>
          <span className="text-4xl lg:text-5xl xl:text-6xl font-outfit font-light text-white">
            {aboutData.mainData.projectsDone}
          </span>
        </div>
        <div>
          <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">
            Years of Experience
          </h6>
          <span className="text-4xl lg:text-5xl xl:text-6xl font-outfit font-light text-white">
            {aboutData.mainData.yearsOfExperience}+
          </span>
        </div>
        <div>
          <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">
            Worldwide Clients
          </h6>
          <span className="text-4xl lg:text-5xl xl:text-6xl font-outfit font-light text-white">
            {aboutData.mainData.worldwideClients}
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
