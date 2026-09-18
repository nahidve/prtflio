import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Proof of Concept — Nahid Azad",
  description: "Coming soon.",
};

export default function ProofOfConceptPage() {
  return (
    <div className="w-full bg-paper pb-24 pt-32 md:pb-32 md:pt-40">
      <Container>
        <Reveal>
          <Eyebrow>Coming soon</Eyebrow>
          <h1 className="font-display mt-4 text-6xl font-medium tracking-tight text-ink md:text-8xl">
            Proof of Concept.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            This page is on the way. Check back soon, or get in touch if
            you&rsquo;d like to see something specific here.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-16 md:mt-20">
          <Button href="/contact">Get in touch</Button>
        </Reveal>
      </Container>
    </div>
  );
}
