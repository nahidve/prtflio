"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { easeOutEditorial } from "@/lib/motion-variants";
import { VideoSmokeBackground } from "@/components/ui/VideoSmokeBackground";

export function Hero() {
  return (
    <section className="relative mx-3 mt-2 mb-10 overflow-hidden rounded-[26px] md:rounded-[36px] bg-[#070707] text-white md:mx-6 md:mt-3 shadow-2xl">
      {/* Video & Organic Fluid Smoke Background */}
      <VideoSmokeBackground />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[82vh] md:min-h-[88vh] w-full max-w-[1440px] flex-col justify-between p-6 pt-10 pb-8 md:p-12 md:pt-14 lg:p-14 lg:pt-16">
        
        {/* Top Header Row: Main Brand Typography + Services List */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-6">
          
          {/* Main Display Typography: nahid® / role */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easeOutEditorial }}
              className="flex flex-col"
            >
              {/* Top Row: nahid + circled (R) */}
              <div className="flex items-baseline flex-wrap gap-2 md:gap-4">
                <h1 className="font-display text-[16vw] font-bold tracking-tighter leading-[0.82] text-white sm:text-[14vw] md:text-[9.5rem] lg:text-[11rem]">
                  nahid
                </h1>
                
                {/* Circled ® Icon */}
                <div className="inline-flex items-center justify-center rounded-full border-[3px] md:border-[5px] border-white text-white font-bold h-10 w-10 text-xl sm:h-14 sm:w-14 sm:text-2xl md:h-20 md:w-20 md:text-4xl lg:h-24 lg:w-24 lg:text-5xl tracking-tighter self-start mt-2 md:mt-4 shadow-lg">
                  R
                </div>
              </div>

              {/* Sub-wordmark: role (offset right underneath) */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.12, ease: easeOutEditorial }}
                className="font-display text-[10vw] font-semibold tracking-tight text-white sm:text-[8vw] md:text-[5.5rem] lg:text-[6.5rem] leading-none ml-auto md:ml-[220px] lg:ml-[280px] -mt-2 md:-mt-6"
              >
                {siteConfig.role}
              </motion.h2>
            </motion.div>
          </div>

          {/* Upper Right Services/Capabilities List */}
          <div className="flex flex-col lg:col-span-4 lg:items-end lg:pt-4">
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easeOutEditorial }}
              className="flex flex-col gap-1.5 text-left md:text-right font-medium text-white/95 text-base md:text-lg lg:text-[1.15rem] tracking-tight"
            >
              {siteConfig.services.map((service) => (
                <li key={service} className="hover:text-white transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Decorative Grid Alignment Crosshairs (+) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="my-10 md:my-14 grid grid-cols-4 w-full text-white/50 text-sm font-light select-none"
        >
          <div className="flex justify-start">+</div>
          <div className="flex justify-center">+</div>
          <div className="flex justify-center">+</div>
          <div className="flex justify-end">+</div>
        </motion.div>

        {/* Bottom Hero Section: Lead Paragraph + Copyright + Floating Team Card */}
        <div className="mt-auto flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          
          {/* Bottom Left Marketing Tagline Statement */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: easeOutEditorial }}
            className="max-w-xl self-start"
          >
            <p className="text-xl leading-[1.25] tracking-tight text-white font-bold md:text-2xl lg:text-[2.1rem]">
              {siteConfig.tagline}{" "}
              <span className="font-medium text-white/80">
                {siteConfig.taglineSub}
              </span>
            </p>
          </motion.div>

          {/* Bottom Right Container: Copyright & Floating Team Card */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 w-full lg:w-auto justify-between lg:justify-end">
            
            {/* Center/Bottom Copyright Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xs md:text-sm text-white/70 font-medium self-start lg:self-end mb-2"
            >
              © {new Date().getFullYear()} Nahid Azad
            </motion.div>

            {/* Floating Team Lead Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: easeOutEditorial }}
              className="relative self-end z-20"
            >
              <div className="flex items-center gap-4 rounded-[24px] bg-white p-3 pr-5 text-neutral-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-white/20 transition-transform duration-300 hover:scale-[1.02]">
                
                {/* Woman Portrait Photo Frame */}
                <div className="relative h-[105px] w-[90px] sm:h-[115px] sm:w-[100px] overflow-hidden rounded-[18px] bg-neutral-200 shrink-0 shadow-inner">
                  <Image
                    src={siteConfig.teamLead.photo}
                    alt={siteConfig.teamLead.name}
                    fill
                    sizes="(max-width: 768px) 100px, 120px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Team Lead Info */}
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <p className="text-xs font-semibold text-neutral-500 leading-tight">
                      {siteConfig.teamLead.role}
                    </p>
                    <p className="text-[11px] text-neutral-400 font-medium">
                      {siteConfig.teamLead.company}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 mt-1">
                      {siteConfig.teamLead.name}
                    </h3>
                  </div>

                  {/* Black Pill Action Button with Dot */}
                  <Link
                    href={siteConfig.teamLead.ctaHref}
                    className="mt-3 inline-flex items-center justify-between gap-4 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-neutral-800 shadow-md"
                  >
                    <span>{siteConfig.teamLead.ctaText}</span>
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
