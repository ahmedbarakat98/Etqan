import React from "react";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";
import Reveal from "@/components/Reveal";

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

const COURSE_DETAILS = [
  {
    id: "GIS",
    icon: "🗺️",
    title: "Geospatial & GIS Engineering",
    description:
      "Master the core technologies behind spatial intelligence and geoinformatics.",
    includes: [
      "GIS Fundamentals (QGIS / ArcGIS)",
      "Spatial Analysis & Modeling",
      "Web Mapping Systems",
      "Spatial Databases (PostGIS)",
      "GIS Applications for Decision Making",
    ],
    outcomes: [
      "Interactive maps",
      "Spatial analysis reports",
      "GIS-based decision systems",
    ],
  },
  {
    id: "BIM",
    icon: "🏗️",
    title: "BIM & Infrastructure Engineering",
    description:
      "Learn modern digital construction and infrastructure modeling techniques.",
    includes: [
      "BIM Fundamentals (Revit)",
      "BIM Coordination & Modeling",
      "BIM for Infrastructure (Roads & Utilities)",
      "4D Construction Planning",
      "5D Cost Estimation Basics",
    ],
    outcomes: [
      "3D BIM models",
      "Construction simulations",
      "Infrastructure planning outputs",
    ],
  },
  {
    id: "smart-infra",
    icon: "🏙️",
    title: "Smart Infrastructure & Digital Systems",
    description:
      "Explore the future of smart cities and connected infrastructure systems.",
    includes: [
      "Digital Twin for Buildings & Infrastructure",
      "Smart Cities Fundamentals",
      "Infrastructure Asset Management Systems",
      "Smart Monitoring & Data Systems",
      "GIS-based Infrastructure Networks",
    ],
    outcomes: [
      "Digital twin models",
      "Smart dashboards",
      "Asset management systems",
    ],
  },
  {
    id: "telecom",
    icon: "📡",
    title: "Telecom & Network Engineering (GIS-Based)",
    description:
      "Specialized training in network planning and spatial telecom systems.",
    includes: [
      "Fiber Optic Network Design (FTTH)",
      "Telecom Network Planning Basics",
      "GIS for Utilities & Networks",
      "Smart City Infrastructure Systems",
    ],
    outcomes: [
      "Network maps",
      "Infrastructure planning models",
      "GIS-based telecom systems",
    ],
  },
  {
    id: "automation-ai",
    icon: "🤖",
    title: "Engineering Automation & AI Applications",
    description:
      "Develop automation and AI-driven solutions for engineering workflows.",
    includes: [
      "Python for Engineers",
      "GIS Automation & Scripting",
      "BIM Automation Basics (Revit workflows)",
      "Data Processing & Engineering Tools",
      "AI in Engineering Applications (Applied)",
    ],
    outcomes: [
      "Automation scripts",
      "Engineering tools",
      "AI-based decision systems",
    ],
  },
  {
    id: "architecture",
    icon: "🏛️",
    title: "Architecture & Digital Design",
    description:
      "For architects moving toward digital and computational design.",
    includes: [
      "BIM for Architecture (Revit / Archicad)",
      "Parametric Design (Grasshopper / Dynamo)",
      "Computational Design Basics",
      "Architectural Visualization & Rendering",
    ],
    outcomes: [
      "3D architectural models",
      "Design studies",
      "Visualization renders",
    ],
  },
  {
    id: "projects",
    icon: "🎯",
    title: "Project-Based Learning",
    description:
      "All students complete real-world projects that simulate industry challenges.",
    examples: [
      "Smart City Mini Systems",
      "Infrastructure Digital Twin Projects",
      "GIS Decision Support Systems",
      "BIM Coordination Projects",
      "Telecom Network Design Projects",
    ],
    outcomes: [
      "Professional portfolio",
      "Real engineering systems",
      "Industry-ready skills",
    ],
  },
];

export default function Page() {
  return (
    <div className="w-full h-fit">
      <section className="flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-neutral-950 px-4 py-20 pt-10 md:pt-30">
        <div className="mb-12 max-w-3xl text-center">
          <h1 className="mb-3 text-4xl font-bold text-white">
            Training Programs
          </h1>
          <p className="text-neutral-400">
            Build your future in geospatial and engineering intelligence with
            Etqan Academy.
          </p>
        </div>

        <FocusRail items={ITEMS} autoPlay loop interval={2500} />

        {/* Course Details */}
        <div className="mt-5 w-full max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Program Details
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Explore Each Learning Track
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              Each track is designed to combine technical knowledge, practical
              tools, and real project outputs.
            </p>
          </div>

           <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {COURSE_DETAILS.map((course) => (
              <article
                key={course.id}
                id={course.id}
                className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 backdrop-blur transition hover:border-cyan-400/40 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                    {course.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-400">
                      {course.description}
                    </p>
                  </div>
                </div>

                {course.includes && (
                  <div className="mt-6">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                      Includes
                    </h4>
                    <ul className="space-y-2 text-sm text-neutral-300">
                      {course.includes.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {course.examples && (
                  <div className="mt-6">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                      Project Examples
                    </h4>
                    <ul className="space-y-2 text-sm text-neutral-300">
                      {course.examples.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                    Outcomes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.outcomes.map((outcome) => (
                      <span
                        key={outcome}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}