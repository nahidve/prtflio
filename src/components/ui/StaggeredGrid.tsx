"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export interface BentoItem {
  id: number | string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  content?: React.ReactNode;
  image?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface StaggeredGridProps {
  images: string[];
  bentoItems: BentoItem[];
  socialLinks?: SocialLink[];
  centerText?: string;
  credits?: {
    madeBy: { text: string; href: string };
    moreDemos: { text: string; href: string };
  };
  className?: string;
  showFooter?: boolean;
  scroller?: string | Element | Window | null;
}

export function StaggeredGrid({
  images,
  bentoItems,
  socialLinks,
  centerText = "Connect",
  credits = {
    madeBy: { text: "Nahid Azad", href: "/" },
    moreDemos: { text: "View projects", href: "/projects" },
  },
  className,
  showFooter = true,
  scroller,
}: StaggeredGridProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const gridFullRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [activeBento, setActiveBento] = useState<number>(0);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block" style={{ willChange: "transform" }}>
        {char === " " ? " " : char}
      </span>
    ));
  };

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    imagesLoaded(
      document.querySelectorAll(".grid__item-img"),
      { background: true },
      handleLoad
    );
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    if (textRef.current) {
      const chars = textRef.current.querySelectorAll(".char");
      gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          scroller: scroller || undefined,
          start: "top bottom",
          end: "center center-=25%",
          scrub: 1,
        },
      }).from(chars, {
        ease: "sine.out",
        yPercent: 300,
        autoAlpha: 0,
        stagger: {
          each: 0.05,
          from: "center",
        },
      });
    }

    if (gridFullRef.current) {
      const gridFullItems = gridFullRef.current.querySelectorAll(".grid__item");
      const numColumns = getComputedStyle(gridFullRef.current)
        .getPropertyValue("grid-template-columns")
        .split(" ").length;
      const middleColumnIndex = Math.floor(numColumns / 2);

      const columns: Element[][] = Array.from({ length: numColumns }, () => []);
      gridFullItems.forEach((item) => {
        const colAttr = item.getAttribute("data-col");
        const columnIndex = colAttr !== null ? parseInt(colAttr, 10) : 0;
        if (columns[columnIndex]) {
          columns[columnIndex].push(item);
        }
      });

      columns.forEach((columnItems, columnIndex) => {
        if (!columnItems.length) return;
        const delayFactor = Math.abs(columnIndex - middleColumnIndex) * 0.2;

        gsap.timeline({
          scrollTrigger: {
            trigger: gridFullRef.current,
            scroller: scroller || undefined,
            start: "top bottom",
            end: "center center",
            scrub: 1.5,
          },
        }).from(columnItems, {
          yPercent: 450,
          autoAlpha: 0,
          delay: delayFactor,
          ease: "sine.out",
        });
      });

      const bentoContainer = gridFullRef.current.querySelector(".bento-container");
      if (bentoContainer) {
        gsap.timeline({
          scrollTrigger: {
            trigger: gridFullRef.current,
            scroller: scroller || undefined,
            start: "top top+=15%",
            end: "bottom center",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }).to(bentoContainer, {
          y: typeof window !== "undefined" ? window.innerHeight * 0.05 : 0,
          scale: 1.15,
          zIndex: 1000,
          ease: "power2.out",
          duration: 1,
          force3D: true,
        }, 0);
      }
    }
  }, [isLoaded, scroller]);

  const mixedGridItems: (string | "BENTO_GROUP")[] = Array.from(
    { length: 7 },
    (_, i) => images[i % images.length]
  );
  mixedGridItems[2] = "BENTO_GROUP";

  return (
    <div className={cn("relative overflow-hidden w-full", className)}>
      <section className="grid place-items-center w-full relative mt-[3vh]">
        <div
          ref={textRef}
          className="text font-display uppercase flex content-center text-[clamp(2rem,7vw,4.5rem)] leading-[0.85] tracking-tight text-ink"
        >
          {splitText(centerText)}
        </div>
      </section>

      <section className="grid place-items-center w-full relative">
        <div
          ref={gridFullRef}
          className="grid--full relative w-full my-[4vh] h-auto aspect-[5.5] max-w-none p-4 grid gap-3 grid-cols-7 grid-rows-1"
        >
          {mixedGridItems.map((item, i) => {
            if (item === "BENTO_GROUP") {
              if (!bentoItems || bentoItems.length === 0) return null;

              return (
                <div
                  key="bento-group"
                  data-col={2}
                  className="grid__item bento-container col-span-3 row-span-1 relative z-20 flex items-center justify-center gap-2 h-full w-full will-change-transform"
                >
                  {bentoItems.map((bentoItem, index) => {
                    const isActive = activeBento === index;
                    return (
                      <div
                        key={bentoItem.id}
                        className={cn(
                          "relative cursor-pointer overflow-hidden rounded-2xl h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                          isActive ? "bg-ink shadow-2xl" : "bg-ink-soft"
                        )}
                        style={{ width: isActive ? "60%" : "20%" }}
                        onMouseEnter={() => setActiveBento(index)}
                        onClick={() => setActiveBento(index)}
                      >
                        <div
                          className={cn(
                            "absolute inset-0 rounded-2xl border z-50 pointer-events-none transition-colors duration-700",
                            isActive ? "border-white/20" : "border-white/10"
                          )}
                        />

                        <div className="relative z-10 w-full h-full flex flex-col p-0">
                          <div
                            className={cn(
                              "absolute inset-0 flex flex-col transition-all duration-500 ease-in-out",
                              isActive
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4 pointer-events-none"
                            )}
                          >
                            <div className="absolute inset-0 bg-ink-soft overflow-hidden z-0 group/img">
                              {bentoItem.content ? (
                                <div className="absolute inset-0 w-full h-full">{bentoItem.content}</div>
                              ) : bentoItem.image ? (
                                <>
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={bentoItem.image}
                                    alt={bentoItem.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover/img:opacity-100"
                                  />
                                </>
                              ) : null}
                              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-20 flex items-center justify-between px-5 z-20">
                              <div className="flex flex-col relative z-10">
                                <h3 className="text-sm font-bold text-white drop-shadow-md leading-none tracking-tight">
                                  {bentoItem.title}
                                </h3>
                              </div>
                              <div className="text-white/90 transition-colors hover:text-white drop-shadow-md relative z-10">
                                {bentoItem.icon}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className={cn(
                            "absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-500",
                            isActive ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
                          )}
                        >
                          <div className="text-white/50 group-hover:text-white transition-colors">
                            {bentoItem.icon}
                          </div>
                          <span className="text-[10px] font-medium text-white/40 group-hover:text-white/70 transition-colors uppercase tracking-wider">
                            {bentoItem.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            }

            if (i === 3 || i === 4) return null;

            if (typeof item === "string") {
              const fallbackIcons = [FaGithub, FaLinkedin, FaTwitter];
              const fallbackLabels = ["GitHub", "LinkedIn", "Twitter"];
              const link = socialLinks?.[i % socialLinks.length];
              const Icon = link?.icon ?? fallbackIcons[i % 3];
              const label = link?.label ?? fallbackLabels[i % 3];
              const href = link?.href;

              const tileContent = (
                <div className="grid__item-img w-full h-full [backface-visibility:hidden] will-change-transform rounded-xl overflow-hidden shadow-sm border border-border bg-white flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-transparent">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                  <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                    <Icon className="w-6 h-6 text-muted transition-all duration-300 group-hover:text-white group-hover:scale-110" />

                    <div className="text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      <span className="block text-[9px] font-medium text-white/90 uppercase tracking-wider mb-0.5">
                        Find me on
                      </span>
                      <span className="block text-xs font-bold text-white tracking-tight">
                        {label}
                      </span>
                    </div>
                  </div>
                </div>
              );

              return (
                <figure
                  key={`img-${i}`}
                  data-col={i % 7}
                  className="grid__item m-0 relative z-10 [perspective:800px] will-change-[transform,opacity] group cursor-pointer"
                >
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                      {tileContent}
                    </a>
                  ) : (
                    tileContent
                  )}
                </figure>
              );
            }
            return null;
          })}
        </div>
      </section>

      {showFooter && (
        <footer className="w-full p-8 flex justify-between items-center relative z-50 text-ink uppercase font-medium text-xs tracking-wider">
          <a href={credits.madeBy.href} className="hover:opacity-60 transition-opacity">
            {credits.madeBy.text}
          </a>
          <a href={credits.moreDemos.href} className="hover:opacity-60 transition-opacity">
            {credits.moreDemos.text}
          </a>
        </footer>
      )}
    </div>
  );
}

export default StaggeredGrid;
