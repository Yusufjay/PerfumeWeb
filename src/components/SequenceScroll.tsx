"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SequenceScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // 1 to 192 (inclusive)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, 192]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= 192; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, "0");
        img.src = `/sequence/ezgif-frame-${frameNumber}.jpg`;
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const render = (index: number) => {
      const img = images[Math.floor(index) - 1];
      if (img && img.complete) {
        const dpr = Math.max(window.devicePixelRatio || 1, 2); // HD retina scaling factor
        const width = canvas.width / dpr;
        const height = canvas.height / dpr;

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        // Draw image covering the canvas (object-fit: cover logic)
        const canvasRatio = width / height;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawWidth = width;
          drawHeight = width / imgRatio;
          offsetX = 0;
          offsetY = (height - drawHeight) / 2;
        } else {
          drawWidth = height * imgRatio;
          drawHeight = height;
          offsetX = (width - drawWidth) / 2;
          offsetY = 0;
        }

        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = 0.95;
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        ctx.restore();
      }
    };

    const handleResize = () => {
        const dpr = Math.max(window.devicePixelRatio || 1, 2);
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        render(frameIndex.get());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const unsubscribe = frameIndex.on("change", (latest) => {
        render(latest);
    });

    return () => {
        window.removeEventListener("resize", handleResize);
        unsubscribe();
    };
  }, [images, frameIndex]);

  // Text overlays
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.2, 0.3, 0.45], [50, 0, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.5, 0.6, 0.75], [50, 0, -50]);

  const text4Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const text4Y = useTransform(scrollYProgress, [0.8, 0.9], [50, 0]);

  return (
    <div ref={containerRef} className="h-[400vh] relative w-full bg-[#000000]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 w-full h-full pointer-events-none" />

        {/* Text 1: 0% */}
        <motion.div 
            style={{ opacity: text1Opacity, y: text1Y }} 
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8 pointer-events-none"
        >
            <h2 className="font-brand text-5xl sm:text-6xl md:text-9xl font-semibold uppercase tracking-[0.2em] mb-4 drop-shadow-2xl">
              Renoux<span className="text-[#C4A482]">.co</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-lg font-medium tracking-[0.35em] text-[#E5D3C0] uppercase max-w-md leading-relaxed drop-shadow-md">
                An Olfactory Masterpiece
            </p>
        </motion.div>

        {/* Text 2: 30% */}
        <motion.div 
            style={{ opacity: text2Opacity, y: text2Y }} 
            className="absolute inset-0 flex flex-col items-start justify-center text-left text-white p-8 md:p-16 max-w-7xl mx-auto pointer-events-none w-full"
        >
            <h3 className="text-4xl md:text-7xl max-w-2xl font-light leading-tight">
                Embrace the <span className="italic font-normal text-[#C4A482]">essence</span> of nature's finest.
            </h3>
        </motion.div>

        {/* Text 3: 60% */}
        <motion.div 
            style={{ opacity: text3Opacity, y: text3Y }} 
            className="absolute inset-0 flex flex-col items-end justify-center text-right text-white p-8 md:p-16 max-w-7xl mx-auto pointer-events-none w-full"
        >
            <h3 className="text-4xl md:text-7xl max-w-2xl font-light leading-tight">
                Crafted slowly, <br /> <span className="italic font-normal text-[#C4A482]">worn confidently</span>.
            </h3>
        </motion.div>

        {/* Text 4: 90% */}
        <motion.div 
            style={{ opacity: text4Opacity, y: text4Y, pointerEvents: useTransform(text4Opacity, (val) => val > 0.5 ? "auto" : "none") as any }} 
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8"
        >
            <h3 className="text-4xl md:text-7xl font-light leading-tight mb-12">
                Discover your <br className="md:hidden" /><span className="italic font-normal text-[#C4A482]">signature</span> scent.
            </h3>
            <Link href="/fragrances" className="group relative px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full overflow-hidden hover:scale-105 transition-transform duration-500 flex items-center gap-4 cursor-pointer inline-flex shadow-2xl">
                <span className="relative z-10 text-xs md:text-sm tracking-[0.2em] uppercase font-medium">Shop Collection</span>
                <span className="relative z-10 bg-black text-white p-2 rounded-full transform group-hover:-rotate-45 transition-transform duration-500">
                    <ArrowRight className="w-4 h-4" />
                </span>
            </Link>
        </motion.div>
      </div>
    </div>
  );
}
