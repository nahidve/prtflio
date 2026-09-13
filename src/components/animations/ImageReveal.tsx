"use client";

import { motion } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import { imageReveal } from "@/lib/motion-variants";

type ImageRevealProps = Omit<ImageProps, "className"> & {
  wrapperClassName?: string;
  imageClassName?: string;
};

export function ImageReveal({
  wrapperClassName,
  imageClassName,
  ...imageProps
}: ImageRevealProps) {
  return (
    <motion.div
      className={wrapperClassName}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={imageReveal}
    >
      <Image {...imageProps} className={imageClassName} />
    </motion.div>
  );
}
