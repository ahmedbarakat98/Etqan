import TextType from "@/components/TextType";
import Image from "next/image";
import {
  Sparkles,
  Award,
  ShieldCheck,
  Users,
  TrendingUp,
  CheckCircle2,
  Eye,
  Target,
  type LucideIcon,
} from "lucide-react";

type CardItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const values: CardItem[] = [
  {
    icon: Sparkles,
    title: "Innovation",
    desc: "We continuously push boundaries to develop future-ready geospatial solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We uphold the highest standards in every project, service, and system we deliver.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We build trust through transparency, reliability, and long-term partnerships.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    desc: "Our clients are at the heart of everything we do — their success is our priority.",
  },
  {
    icon: TrendingUp,
    title: "Impact-Driven",
    desc: "We focus on delivering real, measurable value that drives growth and transformation.",
  },
];

const highlights: string[] = [
  "Scalable Solutions",
  "Data-driven Decisions",
  "Real-world Impact",
];

const commitments: string[] = [
  "Advanced GIS & Geoinformatics Technologies",
  "Scalable & Reliable Solutions",
  "Full Project Lifecycle Support",
  "Measurable Impact",
];

export default function AboutPage() {
  return (
    <main className="bg-[#0b0f19] text-white">

      <section className="px-6 py-20 md:px-20">
        <div className="mx-auto max-w-7xl space-y-24">
          <section className="mx-auto max-w-4xl text-center">
            <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              About Etqan
            </span>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              End-to-End Geospatial Digital Transformation
            </h2>

            <p className="text-lg leading-relaxed text-gray-400">
              Etqan for Geoinformatics Systems and Solutions is more than a GIS
              services provider — it is a strategic partner delivering
              end-to-end geospatial digital transformation.
            </p>
          </section>

          <section className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-5 leading-relaxed text-gray-300">
              <p>
                We empower governments, enterprises, and organizations to unlock
                the full value of spatial data through integrated systems,
                intelligent solutions, and large-scale project execution.
              </p>

              <p>
                With a strong track record of impactful projects and
                international collaborations — including successful partnerships
                with global organizations such as UNICEF and the Iraqi National
                Security Advisory under the Council of Ministers — Etqan has
                proven its ability to operate efficiently in complex
                environments and deliver at scale.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8">
              <div className="space-y-5">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                    <span className="text-lg text-gray-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-semibold">What We Deliver</h2>

            <p className="leading-relaxed text-gray-400">
              From urban planning and infrastructure development to advanced
              geospatial systems and cutting-edge technologies such as Digital
              Twin, AI, BIM Integration, and GeoAI, we build intelligent spatial
              systems that empower smarter decisions.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <InfoCard
              icon={Eye}
              title="Vision"
              desc="To become a global leader in geospatial innovation, shaping the future of smart cities, digital transformation, and spatial intelligence across industries."
            />

            <InfoCard
              icon={Target}
              title="Mission"
              desc="To deliver integrated geospatial systems, services, and solutions that empower organizations to make smarter decisions, enhance operational efficiency, and achieve sustainable growth."
            />
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <h2 className="mb-8 text-3xl font-semibold">Our Commitment</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {commitments.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Core Values
              </h2>
              <p className="mt-4 text-gray-400">
                The principles that guide our work, partnerships, and impact.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((item) => (
                <ValueCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ icon: Icon, title, desc }: CardItem) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:bg-white/[0.07]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>

      <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
      <p className="leading-relaxed text-gray-400">{desc}</p>
    </div>
  );
}

function ValueCard({ icon: Icon, title, desc }: CardItem) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 transition group-hover:scale-110">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>

      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="leading-relaxed text-gray-400">{desc}</p>
    </div>
  );
}