"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Eyebrow, PlusIcon } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/animations/Reveal";
import { RadialScore } from "@/components/ui/RadialScore";
import { MiniBarChart } from "@/components/ui/MiniBarChart";
import { CursorCard } from "@/components/ui/CursorCard";
import CountUp from "@/components/ui/CountUp";
import { easeOutEditorial } from "@/lib/motion-variants";
import { projects } from "@/data/projects";

const visitData = [
  { label: "Jan", value: 8, displayValue: "8k" },
  { label: "Feb", value: 11, displayValue: "+1.1k" },
  { label: "Mar", value: 15, displayValue: "+1.5k" },
  { label: "Apr", value: 23, displayValue: "+2.3k" },
  { label: "May", value: 59, displayValue: "+5.9k" },
];

export function FeaturedProject() {
  const project = projects.find((p) => p.slug === "ve-hr") ?? projects[0];

  return (
    <div className="w-full bg-paper py-24 md:py-32">
      <Container>
        <Reveal className="mb-16 flex items-end justify-between gap-8">
          <div>
            <Eyebrow>Case study</Eyebrow>
            <h2 className="font-display mt-4 text-6xl font-medium tracking-tight text-ink md:text-8xl">
              Experience.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left: dark case-study visual panel */}
          <Reveal className="relative overflow-hidden rounded-2xl bg-ink text-white lg:col-span-5">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: easeOutEditorial }}
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                style={{ objectPosition: project.thumbnailPosition === "top" ? "top" : "center" }}
                className="object-cover opacity-70"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

            <div className="relative z-10 flex min-h-[520px] flex-col justify-between p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-on-dark">Case study</p>
                  <p className="mt-1 text-sm">{project.category}</p>
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25">
                  <PlusIcon className="h-3 w-3" />
                </span>
              </div>

              <div>
                <span className="font-display block text-4xl font-medium tracking-tight md:text-5xl">
                  {project.title}
                </span>

                <div className="mt-10 flex items-end justify-between gap-4">
                  <a
                    href={project.liveUrl || "#"}
                    className="text-sm font-medium underline underline-offset-4 opacity-90 transition-opacity hover:opacity-100"
                  >
                    Live website ↗
                  </a>
                  <p className="max-w-[10rem] text-right text-xs text-muted-on-dark">
                    From full-stack builds to AI/ML integration. I do it all.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Middle: metrics + quote panel */}
          <Reveal className="flex flex-col justify-between gap-10 rounded-2xl bg-white p-8 lg:col-span-4">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs text-muted">Performance Boost:</p>
                <p className="font-display mt-1 text-2xl font-medium tracking-tight text-ink md:text-3xl">
                  Page speed +48%, Bounce rate −23%
                </p>
              </div>
              <div>
                <p className="text-xs text-muted">Reliability Improvement:</p>
                <p className="font-display mt-1 text-2xl font-medium tracking-tight text-ink md:text-3xl">
                  99.2% → 99.9% uptime
                </p>
              </div>
              <p className="text-sm text-muted">
                Read more about{" "}
                <CursorCard
                  image={project.heroImage}
                  description={project.description}
                  href={`/projects/${project.slug}`}
                >
                  {project.title}
                </CursorCard>{" "}
                in the full case study.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-t border-border pt-6">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-muted">
                &ldquo;The rebuild made the app noticeably faster, and the new
                dashboard gave our team the visibility we&rsquo;d been
                missing.&rdquo;
              </p>
              <div className="flex items-center gap-2 pt-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[10px] font-medium text-white">
                  JD
                </span>
                <span className="text-sm font-medium text-ink">Placeholder Client</span>
              </div>
            </div>
          </Reveal>

          {/* Right: radial score + bar chart panel */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <Reveal className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center">
              <div className="relative flex items-center justify-center">
                <RadialScore value={97} />
                <span className="font-display absolute flex text-2xl font-medium tracking-tight text-ink">
                  <CountUp to={97} duration={1.4} />
                </span>
              </div>
              <p className="text-sm font-medium text-ink">Pagespeed score</p>
              <p className="text-xs text-muted">
                I prioritize performance without sacrificing visual polish or
                functionality.
              </p>
            </Reveal>

            <Reveal className="flex flex-col gap-4 rounded-2xl bg-ink p-6 text-white">
              <div className="flex items-baseline gap-2">
                <span className="font-display flex text-2xl font-medium tracking-tight">
                  <CountUp to={38} duration={1.4} />K
                </span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white">
                  +30%
                </span>
              </div>
              <p className="text-xs text-muted-on-dark">Quarterly active users</p>
              <MiniBarChart data={visitData} theme="dark" />
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}
