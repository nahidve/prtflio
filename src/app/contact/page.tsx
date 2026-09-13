import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact — Nahid Azad",
  description:
    "Get in touch with Nahid Azad about a full-stack or AI/ML project.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-paper pb-24 pt-32 md:pb-32 md:pt-40">
      <Container>
        <Reveal>
          <h1 className="font-display text-6xl font-medium tracking-tight text-ink md:text-8xl">
            Get in touch.
          </h1>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 lg:grid-cols-12">
          {/* Left: intro + direct details */}
          <Reveal className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="max-w-sm text-xl leading-relaxed text-ink md:text-2xl">
                <span className="font-medium">Have a project in mind?</span>{" "}
                <span className="text-muted">
                  Tell me a bit about it and I&rsquo;ll get back to you within
                  a day.
                </span>
              </p>
            </div>

            <div className="mt-16 flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-wide text-muted">Direct</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg font-medium text-ink underline underline-offset-4"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-wide text-muted">Elsewhere</p>
                <div className="flex flex-col gap-1">
                  {siteConfig.social.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-fit text-sm font-medium text-ink hover:opacity-60"
                    >
                      {item.label} ↗
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 border-t border-border pt-8 text-sm text-muted">
                <p className="font-medium text-ink">Quick response.</p>
                <p>Usually within one business day.</p>
              </div>
            </div>
          </Reveal>

          {/* Right: contact form */}
          <Reveal delay={0.05} className="rounded-2xl bg-white p-8 shadow-sm lg:col-span-7">
            <p className="text-xs font-medium text-muted">nahid®</p>
            <h2 className="font-display mt-2 text-2xl font-medium tracking-tight text-ink">
              Send a message
            </h2>

            <form className="mt-8 flex flex-col gap-6">
              <label className="flex flex-col gap-1 text-sm">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  className="border-b border-border bg-transparent pb-2 placeholder:text-muted focus:border-ink focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                E-mail *
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="hello@yourcompany.com"
                  className="border-b border-border bg-transparent pb-2 placeholder:text-muted focus:border-ink focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                What are you building?
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project"
                  className="border-b border-border bg-transparent pb-2 placeholder:text-muted focus:border-ink focus:outline-none"
                />
              </label>
              <Button type="submit" className="mt-2 w-fit">
                Send message
              </Button>
              <p className="text-xs text-muted">
                By submitting, you agree to be contacted about your project.
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
