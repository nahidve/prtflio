"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Eyebrow, PlusIcon } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/animations/Reveal";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { easeOutEditorial } from "@/lib/motion-variants";

const skillGroups = [
  {
    index: "001",
    name: "Frontend Engineering",
    description:
      "Fast, accessible interfaces — component systems, state management, and motion done with intent, not decoration.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    index: "002",
    name: "Backend & APIs",
    description:
      "Reliable services underneath the product — schema design, authentication, and APIs built to scale with real traffic.",
    tags: ["Node.js", "PostgreSQL", "REST", "GraphQL", "Redis"],
  },
  {
    index: "003",
    name: "AI/ML Integration",
    description:
      "Bringing models into real products — from LLM-backed features to custom pipelines when off-the-shelf isn't enough.",
    tags: ["PyTorch", "LangChain", "OpenAI API", "scikit-learn"],
  },
  {
    index: "004",
    name: "Cloud & DevOps",
    description:
      "Shipping and keeping things running — containerized deployments, CI/CD, and monitoring that catches problems early.",
    tags: ["Docker", "AWS", "GitHub Actions", "Kubernetes"],
  },
];

export function SkillsAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-full bg-ink py-24 text-white md:py-32">
      <Container>
        <Reveal className="flex items-baseline gap-3">
          <Eyebrow theme="dark">What I do</Eyebrow>
        </Reveal>
        <Reveal>
          <h2 className="font-display mt-4 flex items-baseline gap-3 text-6xl font-medium tracking-tight md:text-8xl">
            Skills.
            <span className="text-2xl font-normal text-muted-on-dark md:text-3xl">
              ({skillGroups.length})
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-white/15 border-t border-white/15">
          {skillGroups.map((group, i) => {
            const isOpen = open === i;
            return (
              <div key={group.index}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className="w-12 text-sm text-muted-on-dark">({group.index})</span>
                    <span className="font-display text-xl font-medium md:text-2xl">
                      {group.name}
                    </span>
                  </div>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <PlusIcon className="h-3 w-3" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: easeOutEditorial }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-6 pb-8 pl-0 md:pl-18">
                        <p className="max-w-xl text-sm text-muted-on-dark md:text-base">
                          {group.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {group.tags.map((tag) => (
                            <Pill key={tag}>{tag}</Pill>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-12">
          <Button href="/studio" variant="inverse">
            More about me
          </Button>
        </Reveal>
      </Container>
    </div>
  );
}
