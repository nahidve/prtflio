"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { journey } from "@/data/journey";
import { easeOutEditorial } from "@/lib/motion-variants";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function JourneyStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const count = journey.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(count - 1, Math.floor(latest * count));
    setActive(index);
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (reducedMotion) {
    return (
      <div className="w-full bg-ink py-24 text-white md:py-32">
        <Container>
          <Eyebrow theme="dark">My journey so far</Eyebrow>
          <h2 className="font-display mt-4 text-5xl font-medium tracking-tight md:text-7xl">
            From intern to <span className="text-muted-on-dark">shipping real products.</span>
          </h2>

          <div className="mt-16 flex flex-col gap-12">
            {journey.map((beat) => (
              <div key={beat.index} className="border-t border-white/15 pt-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl text-muted-on-dark">{beat.index}</span>
                  <p className="text-xs uppercase tracking-wide text-muted-on-dark">{beat.label}</p>
                </div>
                <h3 className="font-display mt-4 text-2xl font-medium tracking-tight md:text-3xl">
                  {beat.title}
                </h3>
                <p className="mt-3 max-w-xl text-muted-on-dark">{beat.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative bg-ink" style={{ height: `${count * 100}vh` }}>
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden text-white">
        <Container className="relative z-10">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <Eyebrow theme="dark">My journey so far</Eyebrow>
              <h2 className="font-display mt-4 text-4xl font-medium tracking-tight md:text-6xl">
                From intern to{" "}
                <span className="text-muted-on-dark">shipping real products.</span>
              </h2>
            </div>
            <span className="hidden font-display text-lg text-muted-on-dark md:block">
              {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Progress rail */}
            <div className="hidden md:col-span-1 md:flex md:justify-center">
              <div className="relative h-full w-px bg-white/10">
                <motion.div
                  className="absolute left-0 top-0 w-px bg-white"
                  style={{ height: progressHeight }}
                />
              </div>
            </div>

            {/* Beat content */}
            <div className="relative min-h-[220px] md:col-span-7">
              {journey.map((beat, i) => (
                <motion.div
                  key={beat.index}
                  className="absolute inset-0 flex flex-col justify-center"
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    y: active === i ? 0 : active > i ? -24 : 24,
                    pointerEvents: active === i ? "auto" : "none",
                  }}
                  transition={{ duration: 0.5, ease: easeOutEditorial }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-2xl text-muted-on-dark">{beat.index}</span>
                    <p className="text-xs uppercase tracking-wide text-muted-on-dark">
                      {beat.label}
                    </p>
                  </div>
                  <h3 className="font-display mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                    {beat.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-base text-muted-on-dark md:text-lg">
                    {beat.body}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Beat index list */}
            <div className="hidden flex-col gap-4 md:col-span-4 md:flex">
              {journey.map((beat, i) => (
                <div
                  key={beat.index}
                  className="flex items-center gap-4 border-l pl-4 transition-colors duration-500"
                  style={{
                    borderColor: active === i ? "#ffffff" : "rgba(255,255,255,0.12)",
                  }}
                >
                  <span
                    className="font-display text-sm transition-colors duration-500"
                    style={{ color: active === i ? "#ffffff" : "rgba(255,255,255,0.35)" }}
                  >
                    {beat.index}
                  </span>
                  <span
                    className="text-sm transition-colors duration-500"
                    style={{ color: active === i ? "#ffffff" : "rgba(255,255,255,0.35)" }}
                  >
                    {beat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
