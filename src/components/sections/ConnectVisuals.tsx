"use client";

import { motion } from "framer-motion";

const barColors = ["bg-white/70", "bg-white/50", "bg-white/30"];

export function FrontendVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] p-6">
      <div className="w-full max-w-[220px] rounded-lg border border-white/10 bg-black/40 p-3">
        <div className="mb-2 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="flex flex-col gap-2">
          {[0, 1, 2].map((row) => (
            <motion.div
              key={row}
              className="h-2 rounded-full bg-white/15"
              initial={{ width: "20%" }}
              animate={{ width: ["20%", "85%", "60%", "20%"] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: row * 0.4,
              }}
            />
          ))}
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((box) => (
              <motion.div
                key={box}
                className="h-8 rounded bg-white/10"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: box * 0.3,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BackendVisual() {
  const nodes = [
    { x: "20%", y: "30%" },
    { x: "50%", y: "15%" },
    { x: "80%", y: "35%" },
    { x: "35%", y: "70%" },
    { x: "65%", y: "75%" },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#0f1a1a] to-[#0a0a0a]">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <motion.line
          x1="20%" y1="30%" x2="50%" y2="15%"
          stroke="rgba(255,255,255,0.15)" strokeWidth="1"
        />
        <motion.line
          x1="50%" y1="15%" x2="80%" y2="35%"
          stroke="rgba(255,255,255,0.15)" strokeWidth="1"
        />
        <motion.line
          x1="20%" y1="30%" x2="35%" y2="70%"
          stroke="rgba(255,255,255,0.15)" strokeWidth="1"
        />
        <motion.line
          x1="35%" y1="70%" x2="65%" y2="75%"
          stroke="rgba(255,255,255,0.15)" strokeWidth="1"
        />
        <motion.line
          x1="80%" y1="35%" x2="65%" y2="75%"
          stroke="rgba(255,255,255,0.15)" strokeWidth="1"
        />
      </svg>
      {nodes.map((node, i) => (
        <motion.span
          key={i}
          className="absolute h-2.5 w-2.5 rounded-full bg-white/60"
          style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}

export function AiMlVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a0f1a] to-[#0a0a0a]">
      <div className="flex items-end gap-1.5">
        {barColors.concat(barColors).map((color, i) => (
          <motion.div
            key={i}
            className={`w-2 rounded-t-sm ${color}`}
            animate={{ height: ["20%", "90%", "40%", "70%", "20%"] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
            style={{ height: "20%" }}
          />
        ))}
      </div>
      <motion.div
        className="absolute h-16 w-16 rounded-full border border-white/20"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
      />
    </div>
  );
}
