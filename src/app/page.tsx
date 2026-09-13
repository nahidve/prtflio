import { Hero } from "@/components/sections/Hero";
import { TechStrip } from "@/components/sections/TechStrip";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StatsRow } from "@/components/sections/StatsRow";
import { SkillsAccordion } from "@/components/sections/SkillsAccordion";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { JourneyStory } from "@/components/sections/JourneyStory";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { ConnectGrid } from "@/components/sections/ConnectGrid";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <ProjectsSection />
      <StatsRow />
      <SkillsAccordion />
      <ProcessSection />
      <JourneyStory />
      <FeaturedProject />
      <ConnectGrid />
      <CTABanner />
    </>
  );
}
