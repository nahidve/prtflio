"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOutEditorial } from "@/lib/motion-variants";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "inverse";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-medium tracking-tight transition-colors duration-300";
  const variants = {
    primary: "bg-ink text-white hover:bg-ink-soft",
    inverse: "bg-white text-ink hover:bg-paper-dim",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.035 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.25, ease: easeOutEditorial },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} type={type} onClick={onClick} className={classes}>
      {children}
    </motion.button>
  );
}
