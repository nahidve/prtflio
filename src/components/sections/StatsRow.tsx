"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneText } from "@/components/ui/TwoToneText";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { Reveal } from "@/components/animations/Reveal";
import { imageReveal, easeOutEditorial } from "@/lib/motion-variants";
import { Button } from "@/components/ui/Button";
import { Cover } from "@/components/ui/Cover";
import CountUp from "@/components/ui/CountUp";
import { RippleTransition } from "@/components/ui/ripple-transition";
import { projects } from "@/data/projects";

const stats = [
  {
    index: "01",
    to: 20,
    suffix: "+",
    label: "Full-stack products shipped",
  },
  {
    index: "02",
    to: 99.2,
    suffix: "%",
    label: "Best production uptime",
  },
];

export function StatsRow({ theme = "light" }: { theme?: "light" | "dark" }) {
  const isDark = theme === "dark";

  return (
    <div className={`w-full py-24 md:py-32 ${isDark ? "bg-ink text-white" : "bg-paper text-ink"}`}>
      <Container>
        <Eyebrow theme={theme}>Why work with me</Eyebrow>

        <TwoToneText
          theme={theme}
          className="mt-6 max-w-3xl"
          bold="Proven results across every product I ship,"
          muted="with a focus on craft and reliability."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <Reveal
            variants={imageReveal}
            className="relative order-2 aspect-[3/4] overflow-hidden rounded-2xl bg-ink-soft lg:order-1 lg:col-span-4"
          >
            <RippleTransition
              images={projects.map((p) => p.thumbnail)}
              className="absolute inset-0 h-full w-full"
              borderRadius={0}
              autoPlay
              autoPlayInterval={3600}
              autoPlayOrigin="random"
              duration={1.4}
              pinch
              label="Preview of recent projects"
            />
            <div className="pointer-events-none absolute top-6 left-6 flex items-center gap-2 text-xs font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for work
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16">
              <p className="text-sm font-medium leading-snug text-white">
                Your product idea starts with a conversation.
              </p>
              <Button
                href="/contact"
                variant="inverse"
                className="pointer-events-auto mt-4 !px-4 !py-2 text-xs"
              >
                Let&rsquo;s talk
              </Button>
            </div>
          </Reveal>

          <div className="order-1 flex flex-col gap-8 lg:order-2 lg:col-span-8">
            <div className={`max-w-xl text-lg leading-relaxed ${isDark ? "text-muted-on-dark" : "text-muted"}`}>
              <Cover theme={theme} className="text-lg font-medium">
                No fluff, just results.
              </Cover>{" "}
              Thoughtful engineering and tools that make your product better.
              I focus on solid architecture and useful features, project after
              project.
            </div>

            <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <StaggerItem
                  key={stat.index}
                  className={`group relative flex flex-col justify-between gap-10 overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                    isDark
                      ? "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                      : "border-border bg-white hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.25)]"
                  }`}
                >
                  <span
                    className={`font-display pointer-events-none absolute -top-6 -right-2 text-8xl leading-none font-semibold select-none ${
                      isDark ? "text-white/5" : "text-ink/4"
                    }`}
                  >
                    {stat.index}
                  </span>

                  <div className="relative flex items-start justify-between">
                    <motion.span
                      className="font-display flex items-baseline text-4xl font-medium tracking-tight md:text-5xl"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: easeOutEditorial }}
                    >
                      <CountUp to={stat.to} duration={1.4} />
                      {stat.suffix}
                    </motion.span>
                  </div>
                  <span className={`relative text-sm ${isDark ? "text-muted-on-dark" : "text-muted"}`}>
                    {stat.label}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Container>
    </div>
  );
}
