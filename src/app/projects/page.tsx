import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/animations/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Nahid Azad",
  description:
    "Full-stack products and AI/ML-powered systems built and shipped by Nahid Azad.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full bg-paper pb-24 pt-32 md:pb-32 md:pt-40">
      <Container>
        <Reveal className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>{`(${projects.length})`}</Eyebrow>
            <h1 className="font-display mt-4 text-5xl font-medium tracking-tight text-ink md:text-6xl">
              Projects.
            </h1>
          </div>
          <p className="max-w-sm text-sm text-muted md:text-right">
            A complete record of full-stack products and AI/ML-powered
            systems I&rsquo;ve designed, built, and shipped to production.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
