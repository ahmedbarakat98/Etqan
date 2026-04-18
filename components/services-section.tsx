"use client";

import {
  Globe,
  Map,
  Building2,
  Cpu,
  Brain,
  Layers,
  Code,
  Database,
} from "lucide-react";

import { ExpandingCards, CardItem } from "@/components/ui/expanding-cards";

const services: CardItem[] = [
  {
    id: "geo-dev",
    title: "Geospatial Systems Development",
    description:
      "Design and development of advanced GIS platforms, spatial databases, and scalable geospatial infrastructures.",
    imgSrc: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200",
    icon: <Globe size={24} />,
    linkHref: "#",
  },
  {
    id: "gis-analysis",
    title: "GIS Consulting & Spatial Analysis",
    description: "Advanced spatial analytics and decision support systems.",
    imgSrc:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200",
    icon: <Map size={24} />,
    linkHref: "#",
  },
  {
    id: "urban",
    title: "Urban & Infrastructure Planning",
    description:
      "Smart urban design, city planning, and infrastructure development driven by data and modern technologies.",
    imgSrc:
      "https://images.openai.com/static-rsc-4/FOLra3pxauVkQ9KxoxjQjqRYUXJVWQIlcxDmgwwwUZulTcpYoE0Ou0YqO2UUZ-Y274ol7xqcHxLN85xomPMWIWdKUD592adIpetqb1DkK7E9nAYgZyoorOnbMnQKID_XRaz6J3Go2oEHYlg0__D_KrNmy69apoh6yjPqCKnzyqLmEBjjYNwIA8_qaubVW09N?purpose=fullsize",
    icon: <Building2 size={24} />,
    linkHref: "#",
  },
  {
    id: "digital-twin",
    title: "Digital Twin & Smart City Solutions",
    description: "Smart city modeling and real-time simulation systems.",
    imgSrc: "https://images.openai.com/static-rsc-4/c_b0uDyfohiPEOt6_172R2F6vNEqaY5VyxhRqG5F4hzkAn14zYI5YbjiePDPtvMC_n2r0RTsIrNnX-Wy482wyPOOdVGIMwP20BLD7C0K5NUHxloq0A20oDDu4o7B3KaEWdtXstagthYJmohfNvtFSS9AsR2J4rjbawOcnmuw0FaCi7iL_9H7lQiytBk9bMlM?purpose=fullsize",
    icon: <Cpu size={24} />,
    linkHref: "#",
  },
  {
    id: "ai",
    title: "AI, GeoAI & Data-Driven Systems",
    description: "AI-powered geospatial intelligence and data insights.",
    imgSrc: "https://images.openai.com/static-rsc-4/xVaKGnabvJ5pXGa1PMWY4xtRg5geLIicOHA-6RRixcwWTLZHeU1aFLztiRHXYyDCrux9IydMQ0Q3DFBkEl64-mx6fCwpvZ0VT_rK0gVp1QOOFI4S1tjG7mDp3n33uZjbocuyQWXyU3gCLCPb7OP-cCFPTLb1SnmSCFycIbvJ64tEMGacQ9KBB_x6pHr8ZiK2?purpose=fullsize",
    icon: <Brain size={24} />,
    linkHref: "#",
  },
  {
    id: "bim",
    title: "BIM & GIS Integration",
    description: "Advanced integration of BIM and GIS environments for spatial modeling, asset management, and infrastructure analytics.",
    imgSrc:
      "https://images.openai.com/static-rsc-4/C_kvdjIwsDYQwmo14lvqnaSZy9xlVm6t2i-vur71GVyazN3uwjwI9vz3srAdY65DW0EknHW-yhT24BCQBPDmhQQOcQSj7JHdk1hlYE7MU5IYYqtZW5WlG4e7ZWZ_6lK3xk8SmZQ03TaDwTIaBrtr4COAPUKXEnwMXb1zBlWLenQKLzo2JF3XqHBRUMUuXjlx?purpose=fullsize",
    icon: <Layers size={24} />,
    linkHref: "#",
  },
  {
    id: "software",
    title: "Custom Software & Spatial Applications",
    description: "Tailored geospatial applications and platforms.",
    imgSrc:
      "https://images.openai.com/static-rsc-4/ADjKwr4Q2l7FBLSEyCOTHPMlQLBKE-m9erg4Yt2-_4eBob8uX6_NZI_mGxsCc653UqG54py4ApSriJ0MoQKyx9UgUnLburIIs4SlXIByYHkp3rW1lVI44YW1VJCl4t07N9dztIN4-b0kY6x4QsgSXA0SmXyL0ea4bU6lJxo19c7wmFwEDTWCbQR5siMudA85?purpose=fullsize",
    icon: <Code size={24} />,
    linkHref: "#",
  },
  {
    id: "projects",
    title: "Large-Scale Project Implementation",
    description: "End-to-end implementation of national-scale solutions.",
    imgSrc: "https://images.openai.com/static-rsc-4/nXUfZMCvp5hMRRu3ttzsQTx_rxWLqdBZ_tsa99EpXsw3aAD26zjvMeJh3KJgKZVs40jYn-rEq9nhjf3Tdj2p8p8yi7arec2tvHztgMLmsPGKvO0vAxExrq__d5vE_hc_N9ClZd3TDQPJHqB9ETCnq1eqIJz6wwbsFSaYvHDQD9Z38fBahjud9M4Z66ppdoTi?purpose=fullsize",
    icon: <Database size={24} />,
    linkHref: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Expanding Cards */}
      <ExpandingCards items={services} defaultActiveIndex={0} />
    </section>
  );
}
