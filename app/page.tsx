import logo from "../public/colors.1abbc0a68ca086c45298.png";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { items } from "@/components/NavbarItems";
import TextType from "@/components/TextType";
import Image from "next/image";
import testimonials from "@/components/TestmonialArray";

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
          <h1 className="text-3xl text-center rubik px-50 md:text-4xl lg:text-5xl font-bold">
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
      <div className="w-full relative flex md:flex-row flex-col items-center justify-center py-10 px-4 ">
        <div className="w-full md:w-1/4 ">
        <Image src={logo} alt="Logo" className="w-full mx-auto mb-4" />
        </div>
        <div className="md:w-3/4 w-full flex flex-col p-12 ">
          <h2 className="mb-3 font-bold text-2xl text-[#1694CC]">Who We Are ?</h2>
          <p className="mb-3">
            Etqan for Geoinformatics Systems and Solutions is a leading
            specialized company that provides spatial systems and solutions,
            geospatial services, and geoinformatics. With a remarkable track
            record of major projects and collaborations with prominent
            international organizations, Etqan has established itself as a
            trusted partner in delivering innovative and sustainable geospatial
            solutions.
          </p>
          <p className="mb-3">
            Our collaboration with UNICEF in Yemen stands as a testament to our
            expertise. We have successfully provided innovative spatial
            solutions and geospatial consultations in various projects,
            including areas such as 22 May and Al-Salakhana. These initiatives
            have contributed to enhancing the understanding of spatial dynamics
            and supporting effective decision-making.
          </p>
          <p>
            Excitingly, we are currently preparing for a new cooperation
            framework with the FAO, which will be announced in the near future.
            This partnership will further strengthen our commitment to
            delivering cutting-edge spatial solutions and advancing
            geoinformatics practices.
          </p>
        </div>
      </div>
      {/* testimonials */}
      <div className="w-full bg-white py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#1694CC]">
          Our Core Team
        </h2>
        <p className="text-center text-2xl  px-10">We have A multidisciplinary team combining strategy, design, and engineering.</p>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

      </div>
    </div>
  );
}
