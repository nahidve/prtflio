"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { TwoToneText } from "@/components/ui/TwoToneText";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { easeOutEditorial } from "@/lib/motion-variants";

const steps = [
  {
    index: "01",
    title: "Frame the problem",
    body: "Start with the outcome that matters — not the tech. Define success before writing code.",
  },
  {
    index: "02",
    title: "Build the system",
    body: "Clean architecture, sensible data models, and version-controlled work from day one.",
  },
  {
    index: "03",
    title: "Test honestly",
    body: "Stress-test against edge cases and real-world usage, not just the happy path.",
  },
  {
    index: "04",
    title: "Ship and monitor",
    body: "Deploy behind clear interfaces, then watch performance in production — not just at launch.",
  },
];

export function ProcessSection() {
  return (
    <div className="w-full bg-paper py-24 md:py-32">
      <Container>
        <TwoToneText
          className="max-w-3xl"
          bold="How I take a product"
          muted="from first idea to a system people actually use."
        />

        <div className="relative mt-16">
          <div className="pointer-events-none absolute top-[2.05rem] right-0 left-0 hidden h-px bg-border lg:block" />

          <StaggerGroup className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <StaggerItem key={step.index} className="h-full">
                <motion.div
                  className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border border-border bg-white p-6 transition-colors duration-300 hover:border-ink/20"
                  whileHover={{ y: -6, boxShadow: "0 24px 48px -24px rgba(0,0,0,0.22)" }}
                  transition={{ duration: 0.35, ease: easeOutEditorial }}
                >
                  <span className="font-display pointer-events-none absolute -top-6 -right-4 text-8xl leading-none font-semibold text-ink/4 transition-colors duration-300 select-none group-hover:text-ink/7">
                    {step.index}
                  </span>

                  <div className="relative flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-paper font-display text-sm font-medium text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                      {step.index}
                    </span>
                    {i < steps.length - 1 && (
                      <span className="hidden text-muted transition-transform duration-300 group-hover:translate-x-1 lg:inline-block">
                        →
                      </span>
                    )}
                  </div>

                  <div className="relative">
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted">{step.body}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </div>
  );
}
