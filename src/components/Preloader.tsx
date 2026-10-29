"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const totalFrames = 192;
    let loadedCount = 0;

    // Smooth counter animation target
    let targetProgress = 1;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < targetProgress) {
          return Math.min(prev + 1, targetProgress);
        }
        return prev;
      });
    }, 15);

    const loadImages = async () => {
      const promises = [];
      for (let i = 1; i <= totalFrames; i++) {
        const frameNumber = i.toString().padStart(3, "0");
        const img = new window.Image();
        img.src = `/sequence/ezgif-frame-${frameNumber}.jpg`;
        
        const promise = new Promise((resolve) => {
          img.onload = () => {
            loadedCount++;
            targetProgress = Math.max(1, Math.floor((loadedCount / totalFrames) * 100));
            resolve(true);
          };
          img.onerror = () => {
            loadedCount++;
            targetProgress = Math.max(1, Math.floor((loadedCount / totalFrames) * 100));
            resolve(true);
          };
        });
        promises.push(promise);
      }
      
      await Promise.all(promises);

      // Force target to 100% once promises settle
      targetProgress = 100;

      // Wait until progress counter reaches 100
      const checkFull = setInterval(() => {
        setProgress((curr) => {
          if (curr >= 100) {
            clearInterval(checkFull);
            clearInterval(interval);
            setTimeout(() => {
              setIsLoading(false);
              document.body.style.overflow = "";
            }, 400);
            return 100;
          }
          return curr + 2;
        });
      }, 20);
    };

    loadImages();

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white"
          >
            {/* Ambient luxury glow */}
            <div className="absolute w-[500px] h-[500px] bg-[#C4A482]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="flex flex-col items-center gap-10 relative z-10 font-brand">
              <h1
                aria-label="Renoux.co"
                className="flex text-3xl md:text-5xl font-semibold tracking-[0.3em] uppercase overflow-hidden"
              >
                {"RENOUX.CO".split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                    className={i >= 6 ? "text-[#C4A482]" : ""}
                  >
                    {ch}
                  </motion.span>
                ))}
              </h1>

              {/* Progress Line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-56 md:w-72 h-[3px] bg-white/10 overflow-hidden rounded-full"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#8a6f52] via-[#E5D3C0] to-[#C4A482] shadow-[0_0_14px_rgba(196,164,130,0.9)] transition-[width] duration-150 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </motion.div>

              {/* Counter Display */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-baseline gap-1 text-white tabular-nums"
              >
                <span className="text-2xl md:text-3xl font-semibold tracking-wider">{progress}</span>
                <span className="text-sm md:text-base font-medium text-[#C4A482]">%</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
