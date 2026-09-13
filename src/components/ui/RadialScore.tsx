"use client";

import { motion } from "framer-motion";
import { easeOutEditorial } from "@/lib/motion-variants";

export function RadialScore({
  value,
  max = 100,
  size = 128,
  stroke = 10,
}: {
  value: number;
  max?: number;
  size?: number;
  stroke?: number;
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = value / max;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth={stroke}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: circumference * (1 - progress) }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: easeOutEditorial }}
      />
    </svg>
  );
}
