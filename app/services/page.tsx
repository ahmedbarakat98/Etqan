  import {
  Map,
  BarChart3,
  Lightbulb,
  Code2,
  CheckCircle2,
  Workflow,
  Globe2,
  Mail,
} from "lucide-react";

const services = [
  {
    icon: Map,
    title: "Geoinformatics Data Services",
    desc: "We transform raw spatial data into meaningful insights that support decision-making, planning, and analysis.",
    items: [
      "Geospatial Data Collection & Acquisition",
      "Data Integration & Management",
      "Spatial Analysis & Modeling",
      "Geodatabase Design & Development",
      "Data Visualization & Cartography",
      "Web-based GIS Solutions",
      "Data Quality Assurance & Validation",
    ],
  },
  {
    icon: BarChart3,
    title: "Project Management Services",
    desc: "We ensure the successful execution of geospatial and engineering projects through structured planning and professional management practices.",
    items: [
      "Project Planning & Scope Definition",
      "Stakeholder & Resource Management",
      "Risk Management",
      "Project Monitoring & Reporting",
      "Change Management",
      "Project Documentation",
    ],
  },
  {
    icon: Lightbulb,
    title: "Consultation Services",
    desc: "We provide strategic geospatial consulting to help organizations design, optimize, and implement effective GIS-based systems.",
    items: [
      "Needs Assessment & Requirements Analysis",
      "Solution Design & System Architecture",
      "Geospatial Data Strategy Development",
      "System Integration with Enterprise Platforms",
      "Training & Capacity Building",
      "Cost–Benefit Analysis",
    ],
  },
  {
    icon: Code2,
    title: "GIS Applications Development",
    desc: "We design and develop customized GIS solutions tailored to organizational and industry-specific needs.",
    items: [
      "Custom GIS Application Development",
      "Web GIS Platforms & Geoportals",
      "Mobile GIS Applications",
      "Geospatial Database Design",
      "GIS Web Services & APIs",
      "Data Integration & Visualization",
      "System Maintenance & Support",
    ],
  },
];

const approach = [
  "Understand",
  "Design",
  "Develop",
  "Integrate",
  "Deliver",
  "Support",
];

const whyEtqan = [
  "Integrated geospatial and engineering expertise",
  "Strong experience in government and international projects",
  "End-to-end service delivery from data to systems",
  "Focus on quality, accuracy, and decision intelligence",
  "Custom solutions tailored to each client’s needs",
];

export default function page() {
  return (
  //   <RevealScale>
  // <div className="w-full h-screen">
  //       <Image
  //         width={1000}
  //         height={1000}
  //         className="absolute inset-0 w-full h-full object-cover"
  //         src="/services.jpg"
  //         alt="srvices"
  //       />
  //       <div className="absolute inset-0 bg-black/40" />
  //       <div className="relative z-10 flex h-full items-center justify-center text-white">
  //         <h1 className="text-3xl text-center rubik px-50 md:text-3xl lg:text-4xl font-bold">
  //          How can Geographic Information Science enhance business insights, reduce costs, and improve decision quality?
  //         </h1>
  //       </div>
  //     </div>
  //     </RevealScale>
    <main className="bg-[#0b0f19] text-white">
      <section className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-7xl space-y-24">
          {/* HERO */}
          <section className="mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              Our Services
            </span>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Integrated Geospatial, Engineering & Digital Solutions
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              Etqan delivers integrated geospatial, engineering, and digital
              transformation solutions that empower organizations to plan,
              manage, and optimize their operations using accurate spatial
              intelligence and advanced technologies.
            </p>

            <p className="mt-4 text-gray-500">
              We combine GIS, project management, consulting, and software
              development to deliver scalable, data-driven, and high-impact
              solutions.
            </p>
          </section>

          {/* SERVICES GRID */}
          <section className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                desc={service.desc}
                items={service.items}
              />
            ))}
          </section>

          {/* APPROACH */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
                <Workflow className="h-6 w-6 text-blue-400" />
              </div>

              <h2 className="text-3xl font-semibold md:text-4xl">
                Our Approach
              </h2>

              <p className="mt-4 text-gray-400">
                We follow a structured, end-to-end methodology that ensures
                quality, accuracy, and scalability.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-6">
              {approach.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center"
                >
                  <span className="text-sm text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-semibold">{step}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* WHY ETQAN */}
          <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
                <Globe2 className="h-6 w-6 text-blue-400" />
              </div>

              <h2 className="text-3xl font-semibold md:text-4xl">
                Why Etqan?
              </h2>

              <p className="mt-4 text-gray-400">
                We don’t just deliver services — we build complete geospatial
                ecosystems that drive smarter decisions and real-world impact.
              </p>
            </div>

            <div className="grid gap-4">
              {whyEtqan.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 text-center md:p-12">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
              <Mail className="h-7 w-7 text-blue-400" />
            </div>

            <h2 className="text-3xl font-semibold md:text-4xl">
              Let’s Build Something Impactful
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Contact Etqan to start your project and transform spatial data
              into strategic value.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-blue-500 px-7 py-3 font-medium text-white transition hover:bg-blue-600"
            >
              Contact Etqan
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  items,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
        <Icon className="h-7 w-7 text-blue-400" />
      </div>

      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>

      <p className="mb-6 leading-relaxed text-gray-400">{desc}</p>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-400" />
            <p className="text-sm leading-relaxed text-gray-300">{item}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
