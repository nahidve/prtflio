"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { imageReveal, easeOutEditorial } from "@/lib/motion-variants";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <motion.div
        className="flex items-center justify-between rounded-t-2xl bg-white px-5 py-4"
        initial={{ opacity: 1 }}
        whileHover="hover"
      >
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium text-ink transition-colors duration-300 group-hover:text-ink/70">
            {project.title}
          </span>
          <span className="text-xs text-muted">/{project.year}</span>
        </div>
        <motion.span
          className="flex h-7 w-7 items-center justify-center rounded-full text-muted"
          variants={{ hover: { rotate: 45, backgroundColor: "var(--color-ink)", color: "#fff" } }}
          transition={{ duration: 0.3, ease: easeOutEditorial }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </motion.div>

      <motion.div
        className="relative aspect-[5/4] overflow-hidden rounded-b-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        variants={imageReveal}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1, filter: "blur(0px)" }}
          whileHover={{ scale: 1.08, filter: "blur(1.5px)" }}
          transition={{ duration: 0.6, ease: easeOutEditorial }}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectPosition: project.thumbnailPosition === "top" ? "top" : "center" }}
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/40 group-hover:backdrop-blur-[1px]" />

        <motion.div
          className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-ink shadow-sm"
          initial={{ y: 0, opacity: 0.95 }}
          whileHover={{ y: -3, opacity: 1 }}
          transition={{ duration: 0.4, ease: easeOutEditorial }}
        >
          {project.category}
        </motion.div>

        <motion.div
          className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink opacity-0"
          initial={{ opacity: 0, scale: 0.7 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: easeOutEditorial }}
        >
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </Link>
  );
}
