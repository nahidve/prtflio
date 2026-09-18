import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/animations/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);

  return (
    <div className="w-full bg-paper py-24 md:py-32">
      <Container>
        <Reveal className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>{`(${projects.length})`}</Eyebrow>
            <h2 className="font-display mt-4 text-5xl font-medium tracking-tight text-ink md:text-6xl">
              Projects.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted md:text-right">
            A selection of full-stack products and AI/ML-powered systems
            I&rsquo;ve designed, built, and shipped to production.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <Button href="/projects">View all projects</Button>
        </Reveal>
      </Container>
    </div>
  );
}
