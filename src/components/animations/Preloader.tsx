"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { easeOutEditorial } from "@/lib/motion-variants";

const SESSION_KEY = "preloader-shown";

export function Preloader() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible || reducedMotion) return;
    const timeout = window.setTimeout(() => setVisible(false), 1000);
    return () => window.clearTimeout(timeout);
  }, [visible, reducedMotion]);

  if (!ready || reducedMotion) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.7, ease: easeOutEditorial }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: easeOutEditorial }}
            className="font-display text-2xl font-medium tracking-tight text-white"
          >
            {siteConfig.title}
            <span className="align-super text-[0.6em]">®</span>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
