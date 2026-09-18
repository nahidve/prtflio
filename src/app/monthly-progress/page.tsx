import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { monthlyProgress } from "@/data/monthlyProgress";

export const metadata: Metadata = {
  title: "Monthly Progress — Nahid Azad",
  description: "A running record of what I've been building, month by month.",
};

export default function MonthlyProgressPage() {
  return (
    <div className="w-full bg-paper pb-24 pt-32 md:pb-32 md:pt-40">
      <Container>
        <Reveal>
          <Eyebrow>{`(${monthlyProgress.length})`}</Eyebrow>
          <h1 className="font-display mt-4 text-6xl font-medium tracking-tight text-ink md:text-8xl">
            Monthly Progress.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            A running, honest record of what I&rsquo;ve actually been
            building — month by month, in plain language.
          </p>
        </Reveal>

        <StaggerGroup className="mt-20 flex flex-col md:mt-28">
          {monthlyProgress.map((entry) => (
            <StaggerItem
              key={`${entry.year}-${entry.period}`}
              className="grid grid-cols-1 gap-6 border-t border-border py-10 first:border-t-0 md:grid-cols-12 md:gap-10 md:py-14"
            >
              <div className="md:col-span-3">
                <p className="font-display text-xl font-medium tracking-tight text-ink md:text-2xl">
                  {entry.period}
                </p>
                <p className="mt-1 text-sm text-muted">{entry.year}</p>
              </div>

              <div className="md:col-span-9">
                <h2 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                  {entry.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                  {entry.summary}
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {entry.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-sm leading-relaxed text-ink/80"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Pill key={tag} tone="light">
                      {tag}
                    </Pill>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </div>
  );
}
