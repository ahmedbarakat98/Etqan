import RevealScale from "@/components/RevealScale";
import TextType from "@/components/TextType";
import Image from "next/image";
import React from "react";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";

export default function page() {
  
  const ITEMS: FocusRailItem[] = [
  {
    id: 1,
    title: "Geospatial & GIS Engineering",
    description:
      "Master the core technologies behind spatial intelligence and geoinformatics.",
    meta: "Interactive maps • Spatial analysis reports • GIS-based decision systems",
    imageSrc:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop",
    href: "#GIS",
  },
  {
    id: 2,
    title: "BIM & Infrastructure Engineering",
    description:
      "Learn modern digital construction and infrastructure modeling techniques.",
    meta: "3D BIM models • Construction simulations • Infrastructure planning outputs",
    imageSrc:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    href: "#BIM",
  },
  {
    id: 3,
    title: "Smart Infrastructure & Digital Systems",
    description:
      "Explore the future of smart cities and connected infrastructure systems.",
    meta: "Digital twin models • Smart dashboards • Asset management systems",
    imageSrc:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop",
    href: "#smart-infra",
  },
  {
    id: 4,
    title: "Telecom & Network Engineering (GIS-Based)",
    description:
      "Specialized training in network planning and spatial telecom systems.",
    meta: "Network maps • Infrastructure planning models • GIS-based telecom systems",
    imageSrc:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    href: "#telecom",
  },
  {
    id: 5,
    title: "Engineering Automation & AI Applications",
    description:
      "Develop automation and AI-driven solutions for engineering workflows.",
    meta: "Automation scripts • Engineering tools • AI-based decision systems",
    imageSrc:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    href: "#automation-ai",
  },
  {
    id: 6,
    title: "Architecture & Digital Design",
    description:
      "For architects moving toward digital and computational design.",
    meta: "3D architectural models • Design studies • Visualization renders",
    imageSrc:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    href: "#architecture",
  },
  {
    id: 7,
    title: "Project-Based Learning",
    description:
      "All students complete real-world projects that simulate industry challenges.",
    meta: "Professional portfolio • Real engineering systems • Industry-ready skills",
    imageSrc:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    href: "#projects",
  },
];

  return (
    <>
      <div className="w-full h-fit">
        <RevealScale>
          <section className="w-full h-screen">
            <Image
              width={1000}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover"
              src="/training.jpg"
              alt="training"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex h-full items-center justify-center text-white">
              <h1 className="text-xl text-center rubik px-6 md:px-50 md:text-2xl lg:text-3xl font-bold">
                Etqan Academy provides industry-focused, project-based training
                that prepares students and professionals for real-world
                engineering careers.
              </h1>
            </div>
          </section>
        </RevealScale>

        {/* Our Cources  */}

        <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-neutral-950 py-20">
          <div className="mb-12 text-center">
            <h1 className="mb-2 text-4xl font-bold text-white">
               Training Programs
            </h1>
            <p className="text-neutral-400">
              Build your future in geospatial and engineering intelligence with Etqan Academy.
            </p>
          </div>

          <FocusRail items={ITEMS} autoPlay loop interval={2500} />
        </div>
      </div>
    </>
  );
}
