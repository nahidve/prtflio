"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

const Silk = dynamic(() => import("@/components/ui/Silk"), { ssr: false });

export function CTABanner() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [nearView, setNearView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "50% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-3 my-3 overflow-hidden rounded-[28px] bg-ink text-white md:mx-4 md:my-4"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        {nearView && (
          <Silk speed={3} scale={1.1} color="#1c1c1c" noiseIntensity={1.8} rotation={0.15} />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

      <Container className="relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal className="rounded-2xl bg-white p-8 text-ink">
            <p className="text-xs font-medium text-muted">nahid®</p>
            <h3 className="font-display mt-2 text-2xl font-medium tracking-tight">
              Have a project in mind?
            </h3>
            <form className="mt-6 flex flex-col gap-5">
              <label className="flex flex-col gap-1 text-sm">
                Name
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="border-b border-border bg-transparent pb-2 placeholder:text-muted focus:border-ink focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                E-mail *
                <input
                  type="email"
                  placeholder="hello@yourcompany.com"
                  className="border-b border-border bg-transparent pb-2 placeholder:text-muted focus:border-ink focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                Message
                <textarea
                  placeholder="Your message"
                  rows={3}
                  className="border-b border-border bg-transparent pb-2 placeholder:text-muted focus:border-ink focus:outline-none"
                />
              </label>
              <Button type="submit" className="mt-2 w-full">
                Send message
              </Button>
              <p className="text-xs text-muted">
                By submitting, you agree to our{" "}
                <a href="#" className="underline underline-offset-2">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="underline underline-offset-2">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </Reveal>

          <Reveal className="flex flex-col justify-between">
            <div>
              <h2 className="font-display text-6xl font-medium tracking-tight md:text-7xl">
                Let&rsquo;s talk.
              </h2>
              <p className="mt-4 max-w-sm text-muted-on-dark">
                Tell me about your project — whether it&rsquo;s a full
                product build, an API, or an AI/ML feature.
              </p>
            </div>

            <div className="mt-10 border-t border-white/15 pt-10">
              <div className="flex flex-col gap-6 text-sm text-muted-on-dark md:flex-row md:gap-12">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 text-white">✎</span>
                  <div>
                    <p className="font-medium text-white">Quick response.</p>
                    <p>Usually within one business day.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 text-white">↗</span>
                  <div>
                    <p className="font-medium text-white">Clear next steps.</p>
                    <p>A short call to scope the work.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 text-ink w-fit">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-xs font-medium text-white">
                NA
              </span>
              <div className="text-xs leading-tight">
                <p className="text-muted">Nahid Azad</p>
                <p className="font-medium">Full-Stack Developer (AI/ML)</p>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="ml-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-white"
              >
                Ask directly
              </a>
            </div>
          </Reveal>
        </div>

        <p className="mt-16 text-xs text-muted-on-dark">
          © {new Date().getFullYear()} Nahid Azad
        </p>
      </Container>
    </div>
  );
}
