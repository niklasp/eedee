"use client";

import React from "react";
import Link from "next/link";
import { clientsData } from "@/lib/siteData";
import { doto } from "@/app/fonts";
import { cn } from "@/lib/utils";

const Clients = () => {
  return (
    <div className="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5 text-white py-24">
      <h2 className="text-7xl font-bold text-center">Teams I worked with</h2>
      <div className="flex flex-row flex-wrap py-24 space-between justify-center gap-y-8">
        {clientsData.clients.map((client) => (
          <Link
            key={client.url}
            href={client.url}
            className="flex items-center justify-center gap-3 h-14 opacity-80 hover:opacity-100 transition-opacity w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <span
              className={cn(
                "flex items-center shrink-0 w-32 [&_img]:w-32 [&_img]:h-auto [&_svg]:w-32 [&_svg]:h-auto",
                client.name && "!w-auto !h-12"
              )}
            >
              {client.logo ?? null}
            </span>
            <span
              className={cn("leading-none text-white text-lg", doto.className)}
            >
              {client.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Clients;
