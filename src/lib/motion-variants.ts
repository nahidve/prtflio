import type { Variants } from "framer-motion";

export const easeOutEditorial = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutEditorial },
  },
};

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutEditorial },
  },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const imageReveal: Variants = {
  hidden: { clipPath: "inset(8% 8% 8% 8% round 1px)", scale: 1.06, opacity: 0.4 },
  visible: {
    clipPath: "inset(0% 0% 0% 0% round 1px)",
    scale: 1,
    opacity: 1,
    transition: { duration: 1.1, ease: easeOutEditorial },
  },
};

export const navStagger = staggerContainer(0.06, 0.1);

export const navItem: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutEditorial },
  },
};
