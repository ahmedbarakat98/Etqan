'use client';
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export default function RevealScale({ children, className = "" }: RevealProps) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    fallbackInView: true,
    rootMargin: "0px 0px -15% 0px",
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`revealScale ${inView ? "show" : ""} ${className}`}>
      {children}
    </div>
  );
}