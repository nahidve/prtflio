"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { navStagger, navItem } from "@/lib/motion-variants";
import { useLenis } from "@/lib/LenisProvider";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    return () => {
      document.body.style.overflow = original;
      lenis?.start();
    };
  }, [menuOpen, lenis]);

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navStagger}
        className={`w-full py-4 px-6 md:px-12 transition-colors duration-300 ${
          scrolled ? "sticky top-0 z-50 bg-paper/90 backdrop-blur-md shadow-xs" : "relative bg-paper"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
          {/* Logo */}
          <motion.div variants={navItem}>
            <Link
              href="/"
              className="font-display text-xl font-bold tracking-tight text-ink flex items-center hover:opacity-80 transition-opacity"
            >
              nahid
              <span className="ml-0.5 text-xs font-semibold uppercase tracking-tighter">
                ®
              </span>
            </Link>
          </motion.div>

          {/* Nav Items */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {siteConfig.nav.map((item) => (
              <motion.div key={item.label} variants={navItem}>
                <Link
                  href={item.href}
                  className="group relative flex items-center text-sm font-medium whitespace-nowrap text-ink transition-colors hover:text-black"
                >
                  {item.label}
                  {"count" in item && item.count && (
                    <span className="ml-0.5 text-[10px] font-semibold text-neutral-500 align-super -mt-2">
                      {item.count}
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Hamburger Icon */}
          <motion.button
            variants={navItem}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            whileTap={{ scale: 0.9 }}
            className="group relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full transition-colors hover:bg-ink/5 cursor-pointer"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
              className="block h-[2px] w-5 origin-center rounded-full bg-ink"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
              className="block h-[2px] w-5 origin-center rounded-full bg-ink"
            />
          </motion.button>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
