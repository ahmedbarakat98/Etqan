import {
  Satellite,
  ShieldCheck,
  MapPin,
  Truck,
  Sprout,
  Bug,
  Bot,
  Building2,
  Workflow,
  CheckCircle2,
  Layers,
} from "lucide-react";

const solutions = [
  {
    icon: Satellite,
    color: "from-blue-500/20 to-cyan-500/10",
    tag: "Government / National-Level Systems",
    title: "Geospatial Command & Decision Platforms",
    featured: "Secure Geospatial Enterprise Platform (PoC)",
    featuredIcon: ShieldCheck,
    desc: "Secure, scalable geospatial platforms for strategic decision-making, operational monitoring, and data-driven governance.",
    capabilities: [
      "Secure spatial data hosting",
      "Role-based multi-user workspace",
      "Advanced vector spatial analysis",
      "GeoJSON, Shapefile, KML, CSV ingestion",
      "Interactive web mapping interface",
      "Collaboration & tasking system",
      "Enterprise-grade authentication",
    ],
    builtFor: [
      "National security institutions",
      "Government agencies",
      "Critical infrastructure authorities",
    ],
    focus: "Sovereignty, security, and full data control",
  },
  {
    icon: MapPin,
    color: "from-emerald-500/20 to-green-500/10",
    tag: "Commercial / Retail / Logistics",
    title: "Intelligent Branch & Delivery Systems",
    featured: "Bazooka Intelligent Branch Locator & Routing System",
    featuredIcon: Truck,
    desc: "Smart GIS-based operational platforms for optimizing customer experience, logistics, and branch management.",
    capabilities: [
      "Ultra-fast address search",
      "Landmark-based intelligent search",
      "Auto-routing to nearest branch",
      "Delivery zone optimization",
      "Real-time customer location mapping",
      "Live driver tracking system",
      "Cloud + optional offline mode",
    ],
    builtFor: [
      "Restaurant chains",
      "Delivery-based businesses",
      "Retail branch networks",
    ],
    focus: "Speed, automation, and customer experience",
  },
  {
    icon: Sprout,
    color: "from-yellow-500/20 to-lime-500/10",
    tag: "Agriculture / Environment",
    title: "Smart Agriculture & Environmental Monitoring Systems",
    featured: "Red Palm Weevil Monitoring System",
    featuredIcon: Bug,
    desc: "AI + GIS-powered solutions for agriculture, pest control, and environmental intelligence.",
    capabilities: [
      "Real-time pest monitoring using GIS",
      "Early detection alerts system",
      "Vegetation health analysis",
      "Spatial tracking of infestation zones",
      "Mobile GIS field data collection",
      "Decision support for agricultural intervention",
    ],
    builtFor: [
      "Agriculture authorities",
      "Environmental organizations",
      "Farm management operators",
    ],
    focus: "Precision agriculture and environmental protection",
  },
  {
    icon: Bot,
    color: "from-purple-500/20 to-fuchsia-500/10",
    tag: "AI / ERP / Enterprise",
    title: "AI & Enterprise Digital Systems",
    featured: "Enterprise Intelligence Platforms",
    featuredIcon: Building2,
    desc: "Intelligent enterprise systems combining GIS, AI, automation, and business process optimization.",
    capabilities: [
      "AI call center intelligence systems",
      "Location-based service optimization",
      "ERP + GIS integrated systems",
      "Spatial asset management",
      "Operational dashboards",
      "Workflow automation systems",
      "Custom API-based GIS solutions",
    ],
    builtFor: [
      "Enterprises",
      "Service providers",
      "Infrastructure operators",
    ],
    focus: "Automation, integration, and digital transformation",
  },
];

const deliverySteps = [
  "Requirement Analysis",
  "System Architecture Design",
  "Geospatial Data Modeling",
  "Development & Integration",
  "Testing & Optimization",
  "Deployment & Support",
];

const values = [
  "Operational efficiency",
  "Real-time decision intelligence",
  "Scalable enterprise architecture",
  "Secure geospatial environments",
  "AI-powered automation",
  "Industry-specific customization",
];

export default function ProductsPage() {
  return (
    <main className="bg-[#0b0f19] text-white pt-5 md:pt-10">
      <section className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-7xl space-y-24">
          {/* HERO */}
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              Products & Innovative Solutions
            </span>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Etqan Geospatial Intelligence Platforms
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              Etqan delivers advanced geospatial-powered systems that combine
              GIS, AI, automation, and enterprise technologies to solve
              real-world operational challenges across industries.
            </p>

            <p className="mt-4 text-gray-500">
              Our solutions are not off-the-shelf products — they are
              custom-built intelligent platforms designed for decision-making,
              efficiency, and digital transformation.
            </p>
          </div>

          {/* SOLUTIONS */}
          <section className="space-y-8">
            {solutions.map((item, index) => (
              <SolutionCard key={item.title} item={item} index={index} />
            ))}
          </section>

          {/* HOW WE DELIVER */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
                <Workflow className="h-6 w-6 text-blue-400" />
              </div>

              <h2 className="text-3xl font-semibold md:text-4xl">
                How We Deliver
              </h2>

              <p className="mt-4 text-gray-400">
                Every Etqan solution follows a structured engineering approach.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {deliverySteps.map((step, i) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <span className="text-sm text-blue-400">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-semibold">{step}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* OUR VALUE */}
          <section className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 md:p-10">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
                <Layers className="h-6 w-6 text-blue-400" />
              </div>

              <h2 className="text-3xl font-semibold md:text-4xl">
                Our Value
              </h2>

              <p className="mt-4 text-gray-400">
                Etqan solutions are built to deliver measurable technical,
                operational, and business value.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-gray-200">{value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function SolutionCard({ item, index }: { item: any; index: number }) {
  const Icon = item.icon;
  const FeaturedIcon = item.featuredIcon;

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className={`bg-gradient-to-br ${item.color} p-8 md:p-10`}>
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Icon className="h-7 w-7 text-white" />
          </div>

          <span className="text-sm text-gray-300">
            {String(index + 1).padStart(2, "0")} / {item.tag}
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight">
            {item.title}
          </h2>

          <p className="mt-5 leading-relaxed text-gray-300">{item.desc}</p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="mb-3 flex items-center gap-3">
              <FeaturedIcon className="h-5 w-5 text-blue-300" />
              <h3 className="font-semibold">Featured Solution</h3>
            </div>
            <p className="text-gray-300">{item.featured}</p>
          </div>
        </div>

        <div className="space-y-8 p-8 md:p-10">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Core Capabilities</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {item.capabilities.map((capability: string) => (
                <div key={capability} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                  <p className="text-sm leading-relaxed text-gray-400">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Built For</h3>
            <div className="flex flex-wrap gap-3">
              {item.builtFor.map((target: string) => (
                <span
                  key={target}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300"
                >
                  {target}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
            <p className="text-sm text-blue-300">Focus</p>
            <p className="mt-2 font-medium text-white">{item.focus}</p>
          </div>
        </div>
      </div>
    </article>
  );
}