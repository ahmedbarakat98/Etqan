import type { CardNavItem } from "@/components/CardNav";

const items: CardNavItem[] = [
  {
    label: "Who Are We?",
    bgColor: "#1694CC",
    textColor: "#ffffff",
    links: [
      {
        label: "Home",
        href: "#contact",
        ariaLabel: "Go to contact section",
      },
      {
        label: "Get in touch",
        href: "#contact",
        ariaLabel: "Go to contact section",
      },
      
    ],
  },
  {
    label: "Our Services",
    bgColor: "#1694CC",
    textColor: "#ffffff",
    links: [
      {
        label: "Geoinformatics Data Services",
        href: "/services",
        ariaLabel: "Go to web development section",
      },
      {
        label: "Project Management Services",
        href: "/services",
        ariaLabel: "Go to cloud and DevOps section",
      },
      {
        label: "Consultation Services",
        href: "/services",
        ariaLabel: "Go to cloud and DevOps section",
      },
      {
        label: "GIS Solutions Services",
        href: "/services",
        ariaLabel: "Go to cloud and DevOps section",
      },
    ],
  },
  
  {
    label: "Company",
    bgColor: "#1694CC",
    textColor: "#ffffff",
    links: [
      {
        label: "Projects",
        href: "#about",
        ariaLabel: "Go to about us section",
      },
      {
        label: "Trainings",
        href: "#about",
        ariaLabel: "Go to about us section",
      },
      {
        label: "Partners",
        href: "#contact",
        ariaLabel: "Go to contact section",
      },
    ],
  },
  
];
export { items };