"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { easeOutEditorial } from "@/lib/motion-variants";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: easeOutEditorial }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink text-white"
        >
          <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between px-6 py-6 md:px-10">
            <Link href="/" onClick={onClose} className="font-display text-lg font-medium">
              nahid<span className="align-super text-[0.6em]">®</span>
            </Link>
            <motion.button
              onClick={onClose}
              aria-label="Close menu"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, ease: easeOutEditorial }}
              className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10 cursor-pointer"
            >
              <span className="absolute h-[1.5px] w-5 rotate-45 rounded-full bg-white" />
              <span className="absolute h-[1.5px] w-5 -rotate-45 rounded-full bg-white" />
            </motion.button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-4 px-6 md:px-10">
            {siteConfig.nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: easeOutEditorial }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group font-display inline-flex items-baseline gap-3 text-4xl font-medium tracking-tight transition-opacity hover:opacity-70"
                >
                  <span>{item.label}</span>
                  {"count" in item && item.count && (
                    <span className="text-sm font-normal text-muted-on-dark">
                      {item.count}
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="px-6 pb-10 text-sm text-muted-on-dark md:px-10">
            {siteConfig.email}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
