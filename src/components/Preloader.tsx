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

            <div className="flex flex-col items-center gap-8 relative z-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center gap-2"
              >
                <h1 className="text-3xl md:text-5xl font-light tracking-[0.35em] uppercase">
                  Renoux<span className="text-[#C4A482]">.co</span>
                </h1>
                <p className="text-xs uppercase tracking-[0.4em] text-[#C4A482] font-medium mt-1">
                  The Olfactory Masterpiece
                </p>
              </motion.div>

              {/* Progress Line */}
              <div className="relative w-64 md:w-80 h-[2px] bg-white/10 overflow-hidden rounded-full mt-2">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#C4A482] via-white to-[#C4A482] shadow-[0_0_12px_rgba(196,164,130,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>

              {/* Counter Display */}
              <motion.div className="text-base font-mono tracking-widest text-white/80">
                {progress}%
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
