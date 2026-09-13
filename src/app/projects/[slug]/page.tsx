import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/animations/Reveal";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Nahid Azad`,
    description: project.description,
  };
}

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="w-full bg-paper pb-24 pt-32 md:pb-32 md:pt-40">
      <Container>
        {/* Header */}
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>{project.category}</Eyebrow>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h1 className="font-display text-6xl font-medium tracking-tight text-ink md:text-8xl">
              {project.title}
            </h1>
            <span className="text-sm text-muted">/{project.year}</span>
          </div>
        </Reveal>

        {/* Hero image */}
        {project.heroImageSize ? (
          <ImageReveal
            wrapperClassName="relative mt-12 w-full overflow-hidden rounded-2xl border border-border md:mt-16"
            imageClassName="h-auto w-full"
            src={project.heroImage}
            alt={project.title}
            width={project.heroImageSize.width}
            height={project.heroImageSize.height}
            priority
          />
        ) : (
          <ImageReveal
            wrapperClassName="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl md:mt-16"
            imageClassName="object-cover"
            src={project.heroImage}
            alt={project.title}
            fill
            priority
          />
        )}

        {/* Overview / Role / Tech */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="text-xs uppercase tracking-wide text-muted">Overview</p>
            <p className="mt-4 text-xl leading-relaxed text-ink md:text-2xl">
              {project.overview || project.description}
            </p>
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col gap-8 md:col-span-3">
            {project.role && (
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Role</p>
                <p className="mt-2 text-sm font-medium text-ink">{project.role}</p>
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">Year</p>
              <p className="mt-2 text-sm font-medium text-ink">{project.year}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <p className="text-xs uppercase tracking-wide text-muted">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Pill key={tech} tone="light">
                  {tech}
                </Pill>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Links */}
        {(project.liveUrl || project.githubUrl) && (
          <Reveal className="mt-10 flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary">
                Live website ↗
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="inverse">
                View code ↗
              </Button>
            )}
          </Reveal>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <Reveal className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-10 md:mt-28 md:grid-cols-4">
            {project.results.map((result) => (
              <div key={result.label} className="flex flex-col gap-2">
                <span className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
                  {result.value}
                </span>
                <span className="text-sm text-muted">{result.label}</span>
              </div>
            ))}
          </Reveal>
        )}

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <div className="mt-20 flex flex-col gap-6 md:mt-28">
            {project.gallery.map((image, i) => {
              if (typeof image === "string") {
                return (
                  <ImageReveal
                    key={image + i}
                    wrapperClassName="relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
                    imageClassName="object-cover"
                    src={image}
                    alt={`${project.title} — image ${i + 1}`}
                    fill
                  />
                );
              }
              return (
                <ImageReveal
                  key={image.src}
                  wrapperClassName="relative w-full overflow-hidden rounded-2xl border border-border"
                  imageClassName="h-auto w-full"
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              );
            })}
          </div>
        )}
      </Container>

      {/* Next project navigation */}
      <div className="mt-24 border-t border-border md:mt-32">
        <Container>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col gap-4 py-16 md:flex-row md:items-center md:justify-between md:py-24"
          >
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">Next project</p>
              <h2 className="font-display mt-2 text-4xl font-medium tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                {nextProject.title}
              </h2>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45">
              <svg width="18" height="18" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </Container>
      </div>
    </div>
  );
}
