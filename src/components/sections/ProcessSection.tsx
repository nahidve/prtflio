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

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <StaggerItem key={step.index} className="h-full">
              <motion.div
                className="flex h-full flex-col gap-6 rounded-2xl bg-white p-6"
                whileHover={{ y: -6, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.18)" }}
                transition={{ duration: 0.35, ease: easeOutEditorial }}
              >
                <div className="flex items-center justify-between text-xs text-muted">
                  <span className="flex gap-1">
                    {steps.map((s) => (
                      <span
                        key={s.index}
                        className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
                          s.index <= step.index ? "bg-ink" : "bg-border"
                        }`}
                      />
                    ))}
                  </span>
                  <span>{step.index}</span>
                </div>
                <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="text-sm text-muted">{step.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </div>
  );
}
