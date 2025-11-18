"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/colors.1abbc0a68ca086c45298.png";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-slate-950">
        <div className="relative flex flex-col items-center gap-4">
          <div className="pointer-events-none absolute -inset-16 rounded-full bg-gradient-to-tr from-sky-400/20 via-cyan-500/25 to-blue-500/20 blur-3xl animate-pulse" />

          <div className="relative flex items-center justify-center">
            <div className="absolute h-40 w-40 rounded-full border border-sky-400/40 animate-ping" />

            {/* اللوجو نفسه */}
            <Image
              src={logo}
              alt="Logo"
              width={140}
              height={140}
              priority
              className="relative drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]"
            />
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
