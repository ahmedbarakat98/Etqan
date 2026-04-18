"use client";
import React, { useEffect, useState, memo } from "react";

// --- Type Definitions ---
type IconType = "html" | "css" | "javascript" | "react" | "node" | "tailwind";

type GlowColor = "cyan" | "purple";

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<
  IconType,
  { component: () => React.JSX.Element; color: string }
> = {
  html: {
    component: () => (
      <img
        src="/orbit/1.png"
        alt="Geospatial Systems Development"
        className="w-full h-full object-contain"
      />
    ),
    color: "#E34F26",
  },
  css: {
    component: () => (
      <img
        src="/orbit/2.png"
        alt="GIS Consulting & Spatial Analysis"
        className="w-full h-full object-contain"
      />
    ),
    color: "#1572B6",
  },
  javascript: {
    component: () => (
      <img
        src="/orbit/3.png"
        alt="Urban & Infrastructure Planning"
        className="w-full h-full object-contain"
      />
    ),
    color: "#F7DF1E",
  },
  react: {
    component: () => (
      <img
        src="/orbit/4.png"
        alt="Digital Twin & Smart City Solutions"
        className="w-full h-full object-contain"
      />
    ),
    color: "#61DAFB",
  },
  node: {
    component: () => (
      <img
        src="/orbit/5.png"
        alt="AI, GeoAI & Data-Driven Systems"
        className="w-full h-full object-contain"
      />
    ),
    color: "#339933",
  },
  tailwind: {
    component: () => (
      <img
        src="/orbit/6.png"
        alt="BIM & GIS Integration"
        className="w-full h-full object-contain"
      />
    ),
    color: "#06B6D4",
  },
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = "SkillIcon";

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit
  {
    id: "html",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "html",
    phaseShift: 0,
    glowColor: "cyan",
    label: "Geospatial Systems Development",
  },
  {
    id: "css",
    orbitRadius: 100,
    size: 45,
    speed: 1,
    iconType: "css",
    phaseShift: (2 * Math.PI) / 3,
    glowColor: "cyan",
    label: "GIS Consulting & Spatial Analysis",
  },
  {
    id: "javascript",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "javascript",
    phaseShift: (4 * Math.PI) / 3,
    glowColor: "cyan",
    label: "Urban & Infrastructure Planning",
  },
  // Outer Orbit
  {
    id: "react",
    orbitRadius: 180,
    size: 50,
    speed: -0.6,
    iconType: "react",
    phaseShift: 0,
    glowColor: "purple",
    label: "Digital Twin & Smart City Solutions",
  },
  {
    id: "node",
    orbitRadius: 180,
    size: 45,
    speed: -0.6,
    iconType: "node",
    phaseShift: (2 * Math.PI) / 3,
    glowColor: "purple",
    label: "AI, GeoAI & Data-Driven Systems",
  },
  {
    id: "tailwind",
    orbitRadius: 180,
    size: 40,
    speed: -0.6,
    iconType: "tailwind",
    phaseShift: (4 * Math.PI) / 3,
    glowColor: "purple",
    label: "BIM & GIS Integration",
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? "scale-125 shadow-2xl" : "shadow-lg hover:shadow-xl"}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined,
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = "OrbitingSkill";

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(
  ({
    radius,
    glowColor = "cyan",
    animationDelay = 0,
  }: GlowingOrbitPathProps) => {
    const glowColors = {
      cyan: {
        primary: "rgba(6, 182, 212, 0.4)",
        secondary: "rgba(6, 182, 212, 0.2)",
        border: "rgba(6, 182, 212, 0.3)",
      },
      purple: {
        primary: "rgba(147, 51, 234, 0.4)",
        secondary: "rgba(147, 51, 234, 0.2)",
        border: "rgba(147, 51, 234, 0.3)",
      },
    };

    const colors = glowColors[glowColor] || glowColors.cyan;

    return (
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        {/* Glowing background */}
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
            boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
            animation: "pulse 4s ease-in-out infinite",
            animationDelay: `${animationDelay}s`,
          }}
        />

        {/* Static ring for depth */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 20px ${colors.secondary}`,
          }}
        />
      </div>
    );
  },
);
GlowingOrbitPath.displayName = "GlowingOrbitPath";

// --- Main App Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime((prevTime) => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{
    radius: number;
    glowColor: GlowColor;
    delay: number;
  }> = [
    { radius: 100, glowColor: "cyan", delay: 0 },
    { radius: 180, glowColor: "purple", delay: 1.5 },
  ];

  return (
    <main className="w-full flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #374151 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #4B5563 0%, transparent 50%)`,
          }}
        />
      </div>

      <div
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[450px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Central "Code" Icon with enhanced glow */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse"></div>
          <div
            className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill key={config.id} config={config} angle={angle} />
          );
        })}
      </div>
    </main>
  );
}
