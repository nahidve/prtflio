import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Reveal } from "@/components/animations/Reveal";
import { CreepyButton } from "@/components/ui/CreepyButton";
import { PlusIcon } from "@/components/ui/Eyebrow";

export function Footer() {
  return (
    <footer className="w-full bg-paper text-ink">
      <div className="mx-auto w-full max-w-[1360px] px-6 pt-24 pb-12 md:px-10 md:pt-32">
        <Reveal className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <p className="max-w-md text-2xl leading-snug tracking-tight text-ink md:text-[1.75rem]">
              Whether you&rsquo;re building a full product or need an AI/ML
              feature added to one, <span className="text-muted">I&rsquo;m glad to help.</span>
            </p>
            <div className="flex items-center gap-3 text-sm text-muted">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
                NA
              </span>
              <div>
                <p className="font-medium text-ink">Nahid Azad</p>
                <p>Full-Stack Developer (AI/ML)</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium uppercase tracking-wide text-muted">
              Newsletter
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name *"
                className="border-b border-border bg-transparent pb-2 text-sm placeholder:text-muted focus:border-ink focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email *"
                className="border-b border-border bg-transparent pb-2 text-sm placeholder:text-muted focus:border-ink focus:outline-none"
              />
              <CreepyButton type="submit" className="w-fit">
                Subscribe
              </CreepyButton>
            </form>
            <p className="text-xs text-muted">
              Occasional notes on projects, tools, and things I&rsquo;m building.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-3">
          <div className="flex items-center gap-2 text-sm">
            <PlusIcon className="h-3 w-3" />
            <Link
              href={`mailto:${siteConfig.email}`}
              className="font-medium underline underline-offset-4"
            >
              {siteConfig.email}
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="text-xs uppercase tracking-wide text-muted">Navigation</p>
            <Link href="/" className="font-medium hover:opacity-60">
              Home
            </Link>
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="font-medium hover:opacity-60">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="text-xs uppercase tracking-wide text-muted">Social</p>
            {siteConfig.social.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:opacity-60"
              >
                {item.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 font-display text-[15vw] font-medium leading-none tracking-tight text-ink md:text-[9rem]">
          nahid<span className="align-super text-[0.5em]">®</span>
        </div>
      </div>

      <div className="w-full bg-black py-5">
        <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-3 px-6 text-xs text-muted-on-dark md:flex-row md:items-center md:justify-between md:px-10">
          <span>© {new Date().getFullYear()} Nahid Azad. All rights reserved.</span>
          <div className="flex gap-6">
            <span>Built with Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
