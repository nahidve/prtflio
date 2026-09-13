"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { StaggeredGrid, type BentoItem } from "@/components/ui/StaggeredGrid";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";
import { FrontendVisual, BackendVisual, AiMlVisual } from "./ConnectVisuals";

const bentoItems: BentoItem[] = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "React / Next.js",
    description: "Interfaces built with React, Next.js, and TypeScript.",
    icon: <span className="text-lg">◧</span>,
    content: <FrontendVisual />,
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "APIs & data",
    description: "Services and data layers built to scale with real traffic.",
    icon: <span className="text-lg">◨</span>,
    content: <BackendVisual />,
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    subtitle: "Applied ML",
    description: "Models and pipelines integrated into production products.",
    icon: <span className="text-lg">◩</span>,
    content: <AiMlVisual />,
  },
];

const socialIconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Twitter: FaTwitter,
};

const socialLinks = siteConfig.social.map((item) => ({
  label: item.label,
  href: item.href,
  icon: socialIconMap[item.label as keyof typeof socialIconMap] ?? FaGithub,
}));

export function ConnectGrid() {
  const images = projects.map((p) => p.thumbnail);

  return (
    <div className="w-full bg-paper py-16">
      <StaggeredGrid
        images={images}
        bentoItems={bentoItems}
        socialLinks={socialLinks}
        centerText="Connect"
      />
    </div>
  );
}
