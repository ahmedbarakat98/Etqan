
import RevealScale from "@/components/RevealScale";
import TextType from "@/components/TextType";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <RevealScale>
        <div className="w-full h-screen">
          <Image
            width={1000}
            height={1000}
            className="absolute inset-0 w-full h-full object-cover"
            src="/tech.jpg"
            alt="thechnologies"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex h-full items-center justify-center text-white">
            <h1 className="text-3xl text-center rubik px-50 md:text-3xl lg:text-4xl font-bold">
              "How can Geographic Information Science enhance business insights,
              reduce costs, and improve decision quality?"
            </h1>
          </div>
        </div>
      </RevealScale>
    </>
  );
}
