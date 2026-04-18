"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden text-white">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Glow Effects */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      {/* Grid Overlay (Stripe Style) */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">

        {/* Animated 404 */}
        <h1 className="text-[120px] md:text-[180px] font-extrabold tracking-widest bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-[pulse_3s_ease-in-out_infinite]">
          404
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 mb-6">
          This page doesn’t exist… or maybe it never did.
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/")}
          className="bg-sky-500 text-black hover:bg-sky-600 transition-all px-6 py-2 rounded-lg"
        >
          Back to Home
        </button>

      </div>

      {/* Floating Blobs */}
      <div className="absolute w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-bounce top-1/3 left-1/4"></div>
      <div className="absolute w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-bounce bottom-1/4 right-1/3"></div>

    </div>
  );
}