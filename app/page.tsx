"use client";
import logo from "../public/maps.png";
import TextType from "@/components/TextType";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Snowfall from "react-snowfall";
import DomeGallery from "@/components/DomeGallery";
import InfiniteGallery  from "@/components/ui/3d-gallery-photography";
import OrbitingSkills from "@/components/ui/orbiting-skills";
import ServicesSection from "@/components/services-section";


export default function Home() {
  const sampleImages = [
		{ src: '/training.jpg', alt: 'Arjaa' },
		{ src: '/tech.jpg', alt: 'Bazooka' },
		{ src: '/industries.jpg', alt: 'Dubai' },
  	];
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-black">
      {/* hero section */}

      <InfiniteGallery
				images={sampleImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-screen w-full rounded-lg overflow-hidden"
			/>
			<div className="absolute inset-0 flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
				<h1 className="font-serif text-3xl md:text-5xl md:px-15 tracking-tight">
					<span >Geoinformatics Systems for a Dynamic World Power Your Vision with Etqan</span>
				</h1>
			</div>
       {/* <Snowfall
          color="#FFF"
          snowflakeCount={200}
          speed={[0.5, 2]}
          wind={[-0.5, 2]}
        ></Snowfall> */}

      

      {/* how we are */}
      <Reveal>
        <div className="w-full bg-black relative flex md:flex-row flex-col items-center justify-center py-10 px-4 ">
          <div className="w-full md:w-1/4 ">
            <Image src={logo} alt="Logo" className="w-full mx-auto mb-4" />
          </div>
          <div className="md:w-3/4 w-full flex flex-col p-12 ">
            <h2 className="mb-3 font-bold text-2xl text-[#1694CC]">
              Etqan for Geoinformatics Systems and Solutions
            </h2>
            <p className="mb-3 text-amber-50">
              Empowering Digital Transformation Through Geospatial Intelligence
              We deliver integrated geospatial systems, smart solutions, and
              large-scale digital transformation projects that enable
              governments, enterprises, and organizations to turn spatial data
              into actionable intelligence.
            </p>
            <p className="mb-3 text-amber-50">
              From GIS and urban planning to Digital Twin, AI, BIM Integration,
              and GeoAI, we build solutions that drive smarter decisions and
              real-world impact. Trusted by leading international organizations
              and government entities worldwide.
            </p>
            <h2 className="m-3 font-bold text-2xl text-[#1694CC]">
              Who We Are ?
            </h2>
            <p className="mb-3 text-amber-50">
              Etqan is a specialized geoinformatics company delivering
              end-to-end geospatial systems, consulting services, and
              intelligent solutions. We are not just a GIS provider — we are a
              strategic partner in spatial digital transformation, helping
              organizations optimize infrastructure, planning, and
              decision-making through advanced geospatial technologies.
            </p>
          </div>
        </div>
      </Reveal>
      {/* what we do */}
      <Reveal>
        <div className="  w-full relative flex flex-col items-center m-0 justify-center py-10 px-4 ">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1694CC]">
            What We Do 
          </h2>
          <p className="text-center text-2xl text-amber-50  px-10">
            We provide a full spectrum of geospatial solutions:
          </p>
          
      {/* our partners  */}
          <div className="md:h-screen w-full">
            <ServicesSection />
          </div>
        </div>
      </Reveal>
      {/* testimonials */}
      <Reveal>
        <div className="  w-full relative flex flex-col items-center m-0 justify-center py-10 px-4 ">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1694CC]">
            Clients and Partners
          </h2>
          <p className="text-center text-2xl text-amber-50  px-10">
            Trusted by leading organizations:
          </p>
          
      {/* our partners  */}
          <div style={{ width: "95vw", height: "100vh" }}>
            <DomeGallery
              fit={0.9}
              minRadius={600}
              maxVerticalRotationDeg={12}
              segments={34}
              dragDampening={1.2}
              grayscale
            />
          </div>
        </div>
      </Reveal>
      
    </div>
  );
}
