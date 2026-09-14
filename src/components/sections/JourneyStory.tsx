"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { journey } from "@/data/journey";
import { easeOutEditorial } from "@/lib/motion-variants";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function JourneyStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const count = journey.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (locked !== null) return;
    const index = Math.min(count - 1, Math.floor(latest * count));
    setActive(index);
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const goTo = (i: number) => {
    setLocked(i);
    setActive(i);
    window.setTimeout(() => setLocked(null), 900);
  };

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
              <div key={beat.index} className="relative border-t border-white/15 pt-8">
                <span className="font-display pointer-events-none absolute -top-2 right-0 text-[7rem] leading-none font-medium text-white/5 select-none">
                  {beat.index}
                </span>
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
        {/* Giant ghost numeral watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={active}
              initial={{ opacity: 0, x: 60, rotate: -4 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -60, rotate: 4 }}
              transition={{ duration: 0.7, ease: easeOutEditorial }}
              className="font-display select-none pr-4 text-[38vw] leading-none font-semibold text-white/[0.04] md:pr-16"
            >
              {journey[active].index}
            </motion.span>
          </AnimatePresence>
        </div>

        <Container className="relative z-10">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <Eyebrow theme="dark">My journey so far</Eyebrow>
              <h2 className="font-display mt-4 text-4xl font-medium tracking-tight md:text-6xl">
                From intern to{" "}
                <span className="text-muted-on-dark">shipping real products.</span>
              </h2>
            </div>
            <motion.span
              key={active}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easeOutEditorial }}
              className="hidden font-display text-lg text-muted-on-dark md:block"
            >
              {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </motion.span>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Progress rail */}
            <div className="hidden md:col-span-1 md:flex md:justify-center">
              <div className="relative h-full w-[3px] overflow-visible rounded-full bg-white/10">
                <motion.div
                  className="absolute left-0 top-0 w-[3px] rounded-full bg-white"
                  style={{ height: progressHeight }}
                />
                <motion.div
                  className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.7)]"
                  style={{ top: progressHeight, translateY: "-50%" }}
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
                    scale: active === i ? 1 : 0.98,
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
            <div className="hidden flex-col gap-2 md:col-span-4 md:flex">
              {journey.map((beat, i) => (
                <button
                  key={beat.index}
                  onClick={() => goTo(i)}
                  className="group flex items-center gap-4 border-l py-2 pl-4 text-left transition-colors duration-500 hover:border-white/50"
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
                    className="text-sm transition-colors duration-500 group-hover:text-white"
                    style={{ color: active === i ? "#ffffff" : "rgba(255,255,255,0.35)" }}
                  >
                    {beat.label}
                  </span>
                  <motion.span
                    animate={{ opacity: active === i ? 1 : 0, x: active === i ? 0 : -6 }}
                    transition={{ duration: 0.35, ease: easeOutEditorial }}
                    className="ml-auto text-white"
                  >
                    →
                  </motion.span>
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
