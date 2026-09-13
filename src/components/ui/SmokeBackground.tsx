"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Blob = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
};

export function SmokeBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const blobCount = 6;
    const blobs: Blob[] = Array.from({ length: blobCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: (Math.min(width, height) * (0.35 + Math.random() * 0.35)),
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.1,
      alpha: 0.05 + (i % 3) * 0.02,
    }));

    let frame: number;
    let noiseCanvas: HTMLCanvasElement | null = null;

    function buildNoise() {
      noiseCanvas = document.createElement("canvas");
      noiseCanvas.width = 160;
      noiseCanvas.height = 160;
      const nctx = noiseCanvas.getContext("2d");
      if (!nctx) return;
      const imageData = nctx.createImageData(160, 160);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const v = Math.random() * 255;
        imageData.data[i] = v;
        imageData.data[i + 1] = v;
        imageData.data[i + 2] = v;
        imageData.data[i + 3] = 14;
      }
      nctx.putImageData(imageData, 0, 0);
    }
    buildNoise();

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      ctx!.fillStyle = "#050505";
      ctx!.fillRect(0, 0, width, height);

      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.r) b.x = width + b.r;
        if (b.x > width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = height + b.r;
        if (b.y > height + b.r) b.y = -b.r;

        const gradient = ctx!.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        gradient.addColorStop(0, `rgba(255,255,255,${b.alpha})`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx!.fillStyle = gradient;
        ctx!.fillRect(b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
      }

      if (noiseCanvas) {
        ctx!.globalAlpha = 0.35;
        ctx!.drawImage(noiseCanvas, 0, 0, width, height);
        ctx!.globalAlpha = 1;
      }

      if (!reducedMotion) {
        frame = requestAnimationFrame(draw);
      }
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
