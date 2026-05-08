"use client";
import logo from "../public/maps.png";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
} from "@/components/ui/map";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Snowfall from "react-snowfall";
import DomeGallery from "@/components/DomeGallery";
import InfiniteGallery from "@/components/ui/3d-gallery-photography";
import ServicesSection from "@/components/services-section";

export default function Home() {
  const places = [
  {
    id: 1,
    name: "Cairo University",
    label: "Public",
    category: "Public University",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
    lng: 31.2086,
    lat: 30.0275,
  },
  {
    id: 2,
    name: "Ain Shams University",
    label: "Public",
    category: "Public University",
    rating: 0,
    reviews: 0,
    hours: "Check official site",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop",
    lng: 31.2838,
    lat: 30.0774,
  },
  {
    id: 3,
    name: "The American University in Cairo",
    label: "Private",
    category: "Private University",
    rating: 0,
    reviews: 0,
    hours: "Check official site",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop",
    lng: 31.4907,
    lat: 29.9869,
  },
  {
    id: 4,
    name: "Helwan University",
    label: "Public",
    category: "Public University",
    rating: 0,
    reviews: 0,
    hours: "Check official site",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop",
    lng: 31.3144,
    lat: 29.8652,
  },
  {
    id: 5,
    name: "German University in Cairo",
    label: "Private",
    category: "Private University",
    rating: 0,
    reviews: 0,
    hours: "Check official site",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=300&h=200&fit=crop",
    lng: 31.5055,
    lat: 30.0186,
  },
  {
    id: 6,
    name: "Future University in Egypt",
    label: "Private",
    category: "Private University",
    rating: 0,
    reviews: 0,
    hours: "Check official site",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=300&h=200&fit=crop",
    lng: 31.4917,
    lat: 29.9850,
  },
];
  const sampleImages = [
    { src: "alabd.png", alt: "Dubai" },
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
          <span>
            Geoinformatics Systems for a Dynamic World Power Your Vision with
            Etqan
          </span>
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
      {/* Our projects */}
      <Reveal>
        <div className=" w-full relative flex flex-col items-center m-0 justify-center py-10 ">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1694CC]">
            Projects
          </h2>
          <p className="text-center text-2xl text-amber-50 mb-5 px-10">
            Trusted by leading organizations:
          </p>

          {/* our proj  */}
          <div className="h-[500px] w-full">
            <Map center={[31.235793830917608 , 30.044337142118394]} zoom={8}>
              {places.map((place) => (
                <MapMarker
                  key={place.id}
                  longitude={place.lng}
                  latitude={place.lat}
                >
                  <MarkerContent>
                    <div className="relative flex items-center justify-center">
                      <span className="absolute inline-flex h-8 w-8 rounded-full bg-sky-400/20 blur-md" />
                      <div className="relative size-5 rounded-full border-2 border-white/90 bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.55)] cursor-pointer transition-all duration-200 hover:scale-110" />
                    </div>
                    <MarkerLabel position="bottom">{place.label}</MarkerLabel>
                  </MarkerContent>

                  <MarkerPopup className="w-50 p-0 overflow-hidden">
                    <div className="relative h-32 overflow-hidden rounded-t-xl">
                      <Image
                        fill
                        src={place.image}
                        alt={place.name}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 from-black/70 via-black/15 to-transparent" />
                    </div>

                    <div className="space-y-3 p-3">
                      <div>
                        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-sky-300/80">
                          {place.category}
                        </span>
                        <h3 className="leading-tight font-semibold text-white">
                          {place.name}
                        </h3>
                      </div>


                    </div>
                  </MarkerPopup>
                </MapMarker>
              ))}

              <MapControls
                position="bottom-right"
                showZoom
                showLocate
                showFullscreen
              />
            </Map>
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
