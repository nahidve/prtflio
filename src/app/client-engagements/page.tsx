import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { Button } from "@/components/ui/Button";
import { engagements } from "@/data/engagements";

export const metadata: Metadata = {
  title: "Client Engagements — Nahid Azad",
  description:
    "How I've helped real businesses put AI and full-stack engineering to work in their day-to-day operations.",
};

export default function ClientEngagementsPage() {
  return (
    <div className="w-full bg-paper pb-24 pt-32 md:pb-32 md:pt-40">
      <Container>
        <Reveal>
          <Eyebrow>{`(${engagements.length})`}</Eyebrow>
          <h1 className="font-display mt-4 text-6xl font-medium tracking-tight text-ink md:text-8xl">
            Client Engagements.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Real businesses, real problems. Here&rsquo;s how I&rsquo;ve helped
            put engineering and AI to work where it actually moves the
            needle — in plain language, not jargon.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-20 md:mt-28 md:gap-28">
          {engagements.map((engagement) => (
            <Reveal
              key={engagement.slug}
              className="overflow-hidden rounded-3xl border border-border bg-white"
            >
              <div className="bg-ink px-6 py-10 text-white md:px-12 md:py-14">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-on-dark">
                      {engagement.client}
                    </p>
                    <h2 className="font-display mt-3 text-4xl font-medium tracking-tight md:text-6xl">
                      {engagement.project}
                    </h2>
                  </div>
                  <span className="text-sm text-muted-on-dark">{engagement.since}</span>
                </div>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
                  {engagement.summary}
                </p>

                <div className="mt-10 flex flex-wrap gap-2">
                  {engagement.tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-10 p-6 md:grid-cols-12 md:gap-12 md:p-12">
                <div className="md:col-span-5">
                  <p className="text-xs uppercase tracking-wide text-muted">
                    The challenge
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-ink">
                    {engagement.challenge}
                  </p>

                  <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
                    {engagement.highlights.map((h) => (
                      <div key={h.label} className="flex flex-col gap-1">
                        <span className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
                          {h.value}
                        </span>
                        <span className="text-xs text-muted">{h.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="text-xs uppercase tracking-wide text-muted">
                    What I&rsquo;ve done
                  </p>
                  <StaggerGroup className="mt-4 flex flex-col gap-6">
                    {engagement.approach.map((item, idx) => (
                      <StaggerItem
                        key={item.title}
                        className="flex gap-5 border-t border-border pt-6 first:border-t-0 first:pt-0"
                      >
                        <span className="font-display shrink-0 text-sm text-muted">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-medium text-ink">{item.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {item.body}
                          </p>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 flex flex-col items-start gap-6 border-t border-border pt-16 md:mt-32 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-xl leading-relaxed text-ink md:text-2xl">
            Running a complex business and want it to feel this clear?
          </p>
          <Button href="/contact">Let&rsquo;s talk</Button>
        </Reveal>
      </Container>
    </div>
  );
}
