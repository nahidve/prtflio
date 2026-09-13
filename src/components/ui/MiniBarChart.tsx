"use client";

import { motion } from "framer-motion";
import { easeOutEditorial } from "@/lib/motion-variants";

export type BarDatum = {
  label: string;
  value: number;
  displayValue: string;
};

export function MiniBarChart({
  data,
  theme = "light",
}: {
  data: BarDatum[];
  theme?: "light" | "dark";
}) {
  const max = Math.max(...data.map((d) => d.value));
  const isDark = theme === "dark";

  const mutedColor = isDark ? "text-muted-on-dark" : "text-muted";
  const highlightColor = isDark ? "text-white" : "text-ink";
  const barBase = isDark ? "bg-white/15" : "bg-border";
  const barHighlight = isDark ? "bg-white" : "bg-ink";

  return (
    <div className="flex items-end justify-between gap-2">
      {data.map((d, i) => {
        const isLast = i === data.length - 1;
        const heightPct = (d.value / max) * 100;
        return (
          <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
            <span
              className={`text-[10px] font-medium ${isLast ? highlightColor : mutedColor}`}
            >
              {d.displayValue}
            </span>
            <div className="flex h-24 w-full items-end">
              <motion.div
                className={`w-full rounded-md ${isLast ? barHighlight : barBase}`}
                initial={{ height: 0 }}
                whileInView={{ height: `${heightPct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.06, ease: easeOutEditorial }}
              />
            </div>
            <span className={`text-[10px] ${mutedColor}`}>{d.label}</span>
          </div>
        );
      })}
    </div>
  );
}
