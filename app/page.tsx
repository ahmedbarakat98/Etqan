"use client";
import logo from "../public/maps.png";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import TextType from "@/components/TextType";
import Image from "next/image";
import testimonials from "@/components/TestmonialArray";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* hero section */}

      <div className="w-full h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center text-white">
          <h1 className="text-2xl text-center rubik px-50 md:px-70 md:text-3xl font-bold">
            <TextType
              text={
                "Geoinformatics Systems for a Dynamic World Power Your Vision with Etqan"
              }
              typingSpeed={80}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="_"
            />
          </h1>
        </div>
      </div>

      {/* how we are */}
      <Reveal>
        <div className="w-full bg-gray-50 relative flex md:flex-row flex-col items-center justify-center py-10 px-4 ">
          <div className="w-full md:w-1/4 ">
            <Image src={logo} alt="Logo" className="w-full mx-auto mb-4" />
          </div>
          <div className="md:w-3/4 w-full flex flex-col p-12 ">
            <h2 className="mb-3 font-bold text-2xl text-[#1694CC]">
              HOW CAN WE UES GIS OPEN-SOURCE IN BUSINESS?
            </h2>
            <p className="mb-3">
              GIS has become a vital tool across modern industries, extending
              far beyond traditional mapping. With advanced real-time geospatial
              technologies, organizations in both the public and private sectors
              increasingly rely on GIS to enhance planning, operations, and
              decision-making.
            </p>
            <p className="mb-3">
              Etqan delivers these capabilities by providing integrated GIS
              solutions for municipalities, utilities, telecommunications,
              engineering firms, and retail companies.We support telecom
              operators with accurate site-selection and network-coverage
              analysis, and assist retail businesses in optimizing product
              distribution, understanding regional demand, and improving
              supply-chain efficiency.
            </p>
            <p>
              With strong technical expertise and global partnerships, Etqan
              empowers clients with precise, reliable, and innovative geospatial
              solutions.
            </p>
          </div>
        </div>
      </Reveal>
      {/* testimonials */}
      <Reveal>
      <div className=" bg-gray-50 w-full relative flex flex-col items-center m-0 justify-center py-10 px-4 ">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#1694CC]">
          Our Partners
        </h2>
        <p className="text-center text-2xl  px-10">
          We have A multidisciplinary team combining strategy, design, and
          engineering.
        </p>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
      </Reveal>
      {/* our partners  */}
      <div className="bg-gray-200 w-full py-10 flex flex-col justify-center items-center px-4"></div>
    </div>
  );
}


