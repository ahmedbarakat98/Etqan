"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  linkHref: string;
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
}

export const ExpandingCards = React.forwardRef<
  HTMLUListElement,
  ExpandingCardsProps
>(({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
  const safeDefaultIndex =
    items.length === 0
      ? 0
      : Math.min(Math.max(defaultActiveIndex, 0), items.length - 1);

  const [activeIndex, setActiveIndex] = React.useState<number>(safeDefaultIndex);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(e.matches);
    };

    handleChange(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  React.useEffect(() => {
  if (isDesktop) return; // يشتغل بس في الموبايل

  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, 2500); // كل 2.5 ثانية

  return () => clearInterval(interval);
}, [isDesktop, items.length]);

  if (!items.length) return null;

  const handleInteraction = (index: number) => {
    setActiveIndex(index);
  };

  if (isDesktop) {
    const desktopGridStyle = {
      gridTemplateColumns: items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" "),
    };

    return (
      <ul
        ref={ref}
        className={cn(
          "grid h-[500px] w-full gap-2",
          "transition-[grid-template-columns] duration-500 ease-out",
          className
        )}
        style={desktopGridStyle}
        {...props}
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <li
              key={item.id}
              className={cn(
                "group relative min-w-0 overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm",
                "cursor-pointer"
              )}
              onMouseEnter={() => handleInteraction(index)}
              onFocus={() => handleInteraction(index)}
              onClick={() => handleInteraction(index)}
              tabIndex={0}
              aria-expanded={isActive}
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-out",
                  isActive ? "scale-100 grayscale-0" : "scale-110 grayscale"
                )}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <article className="absolute inset-0 flex flex-col justify-end gap-2 p-4">
                <h3
                  className={cn(
                    "hidden origin-left rotate-90 text-sm font-light uppercase tracking-wider text-white/80 transition-all duration-300 ease-out md:block",
                    isActive ? "opacity-0" : "opacity-100"
                  )}
                >
                  {item.title}
                </h3>

                <div
                  className={cn(
                    "text-white/90 transition-all duration-300 ease-out",
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  )}
                >
                  {item.icon}
                </div>

                <h3
                  className={cn(
                    "text-xl font-bold text-white transition-all duration-300 ease-out",
                    isActive
                      ? "translate-y-0 opacity-100 delay-75"
                      : "translate-y-2 opacity-0"
                  )}
                >
                  {item.title}
                </h3>

                <p
                  className={cn(
                    "w-full max-w-xs text-sm text-white/80 transition-all duration-300 ease-out",
                    isActive
                      ? "translate-y-0 opacity-100 delay-100"
                      : "translate-y-2 opacity-0"
                  )}
                >
                  {item.description}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul
      ref={ref}
      className={cn("flex w-full flex-col gap-3", className)}
      {...props}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <li
            key={item.id}
            className={cn(
              "group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm",
              "transition-all duration-300 ease-out",
              "cursor-pointer",
              isActive ? "h-[320px]" : "h-[88px]"
            )}
            onClick={() => handleInteraction(index)}
            tabIndex={0}
            aria-expanded={isActive}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-out",
                isActive ? "scale-100 grayscale-0" : "scale-105 grayscale-[40%]"
              )}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

            <article className="absolute inset-0 flex flex-col justify-end p-4">
              <div className="flex items-center gap-3">
                <div className="text-white/90">{item.icon}</div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-out",
                  isActive
                    ? "mt-3 max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <p className="max-w-md text-sm text-white/80">
                  {item.description}
                </p>

                {item.linkHref && (
                  <a
                    href={item.linkHref}
                    className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Explore
                  </a>
                )}
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
});

ExpandingCards.displayName = "ExpandingCards";