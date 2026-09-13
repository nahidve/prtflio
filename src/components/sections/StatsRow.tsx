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
import MagnetLines from "@/components/ui/MagnetLines";

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
            <motion.div
              className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a]"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: easeOutEditorial }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <MagnetLines
                  rows={7}
                  columns={7}
                  containerSize="120%"
                  lineColor="#ffffff"
                  lineWidth="1.5px"
                  lineHeight="18px"
                  baseAngle={-10}
                />
              </div>
              <span className="font-display relative z-10 text-6xl font-medium text-white/15">NA</span>
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-sm font-medium text-white">
                Your product idea starts with a conversation.
              </p>
              <Button href="/contact" variant="inverse" className="mt-4 !px-4 !py-2 text-xs">
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
                  className={`group flex flex-col justify-between gap-10 rounded-2xl p-6 transition-colors duration-300 ${
                    isDark
                      ? "bg-white/[0.04] hover:bg-white/[0.07]"
                      : "bg-white hover:bg-white/80"
                  }`}
                >
                  <div className="flex items-start justify-between">
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
                    <span className={`text-xs ${isDark ? "text-muted-on-dark" : "text-muted"}`}>
                      {stat.index}
                    </span>
                  </div>
                  <span className={`text-sm ${isDark ? "text-muted-on-dark" : "text-muted"}`}>
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
