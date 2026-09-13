import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { LogoLoop, type LogoItem } from "@/components/ui/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPytorch,
  SiDocker,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techLogos: LogoItem[] = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiPytorch />, title: "PyTorch" },
  { node: <SiDocker />, title: "Docker" },
  { node: <FaAws />, title: "AWS" },
];

export function TechStrip() {
  return (
    <div className="w-full bg-paper py-16">
      <Container>
        <Reveal className="mb-8 flex items-center justify-between">
          <Eyebrow>Tech stack</Eyebrow>
          <span className="text-xs text-muted">(2019–{new Date().getFullYear()}©)</span>
        </Reveal>

        <div className="overflow-hidden rounded-2xl border border-border bg-white py-6">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={28}
            gap={56}
            pauseOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technologies I work with"
          />
        </div>
      </Container>
    </div>
  );
}
