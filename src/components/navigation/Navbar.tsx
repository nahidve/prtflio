"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { navStagger, navItem } from "@/lib/motion-variants";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <nav className="hidden items-center gap-10 md:flex">
            {siteConfig.nav.map((item) => (
              <motion.div key={item.label} variants={navItem}>
                <Link
                  href={item.href}
                  className="group relative text-sm font-medium text-ink transition-colors hover:text-black flex items-center"
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
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-1.5 p-2 hover:opacity-75 transition-opacity cursor-pointer"
          >
            <span className="block h-[2px] w-6 bg-ink rounded-full" />
            <span className="block h-[2px] w-6 bg-ink rounded-full" />
          </motion.button>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
