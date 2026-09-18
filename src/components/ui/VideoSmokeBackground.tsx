"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function VideoSmokeBackground({
  className = "",
  playbackRate = 0.5,
}: {
  className?: string;
  playbackRate?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);

    function resize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);
    const parentEl = canvas.parentElement;
    const resizeObserver = parentEl ? new ResizeObserver(resize) : null;
    if (parentEl) resizeObserver!.observe(parentEl);

    // Dynamic fluid smoke particles/blobs
    const blobCount = 8;
    const blobs = Array.from({ length: blobCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.min(width, height) * (0.35 + Math.random() * 0.45),
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.2,
      alpha: 0.08 + (i % 4) * 0.03,
      pulse: Math.random() * Math.PI * 2,
    }));

    let frame: number;
    let time = 0;
    let paused = document.hidden;

    // Build static noise texture for organic film grain
    const noiseCanvas = document.createElement("canvas");
    noiseCanvas.width = 256;
    noiseCanvas.height = 256;
    const nctx = noiseCanvas.getContext("2d");
    if (nctx) {
      const imageData = nctx.createImageData(256, 256);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const v = Math.random() * 255;
        imageData.data[i] = v;
        imageData.data[i + 1] = v;
        imageData.data[i + 2] = v;
        imageData.data[i + 3] = 18;
      }
      nctx.putImageData(imageData, 0, 0);
    }

    function render() {
      time += 0.005;
      ctx!.clearRect(0, 0, width, height);

      // Deep dark ink background
      ctx!.fillStyle = "#070707";
      ctx!.fillRect(0, 0, width, height);

      // Render organic dark fluid smoke blobs
      for (const b of blobs) {
        b.x += b.vx + Math.sin(time + b.pulse) * 0.15;
        b.y += b.vy + Math.cos(time + b.pulse) * 0.15;

        if (b.x < -b.r) b.x = width + b.r;
        if (b.x > width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = height + b.r;
        if (b.y > height + b.r) b.y = -b.r;

        const currentRadius = b.r * (1 + Math.sin(time * 0.8 + b.pulse) * 0.08);

        const gradient = ctx!.createRadialGradient(
          b.x,
          b.y,
          0,
          b.x,
          b.y,
          currentRadius
        );
        gradient.addColorStop(0, `rgba(220, 220, 220, ${b.alpha * 1.4})`);
        gradient.addColorStop(0.4, `rgba(80, 80, 80, ${b.alpha * 0.8})`);
        gradient.addColorStop(1, "rgba(7, 7, 7, 0)");

        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(b.x, b.y, currentRadius, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Draw grain noise layer
      if (noiseCanvas) {
        ctx!.globalCompositeOperation = "overlay";
        ctx!.globalAlpha = 0.3;
        ctx!.drawImage(noiseCanvas, 0, 0, width, height);
        ctx!.globalCompositeOperation = "source-over";
        ctx!.globalAlpha = 1;
      }

      if (!reducedMotion && !paused) {
        frame = requestAnimationFrame(render);
      }
    }

    render();

    const video = videoRef.current;
    const onVisibilityChange = () => {
      paused = document.hidden;
      if (paused) {
        if (frame) cancelAnimationFrame(frame);
        video?.pause();
      } else {
        video?.play().catch(() => {});
        if (!reducedMotion) {
          frame = requestAnimationFrame(render);
        }
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("resize", resize);
      resizeObserver?.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* HTML5 video element with fallback */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-screen pointer-events-none filter contrast-125 brightness-90"
      >
        <source src="/videos/smoke.mp4" type="video/mp4" />
      </video>

      {/* Procedural fluid smoke canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover opacity-90 mix-blend-overlay pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle vignette gradient over media */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
    </div>
  );
}
