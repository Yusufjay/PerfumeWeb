"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  { text: "A scent that captures the essence of pure luxury.", author: "Vogue Magazine" },
  { text: "Bold, timeless, and completely unforgettable.", author: "GQ" },
  { text: "The new standard in modern perfumery.", author: "Vanity Fair" },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-[#050505] text-white relative overflow-hidden px-8">
      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        <div className="h-[400px] flex flex-col justify-center relative">
          <AnimatePresence mode="popLayout">
            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 flex flex-col justify-center items-center"
            >
                <div className="absolute top-10 md:-top-10 -left-4 md:-left-16 text-[10rem] md:text-[15rem] leading-none opacity-10 font-serif">"</div>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 z-10 max-w-4xl">
                    {testimonials[index].text}
                </h3>
                <p className="uppercase tracking-[0.3em] text-white/50 text-xs md:text-sm z-10">
                    {testimonials[index].author}
                </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Progress indicators */}
      <div className="absolute bottom-12 md:bottom-24 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {testimonials.map((_, i) => (
            <div key={i} className="w-8 md:w-16 h-[2px] bg-white/20 relative overflow-hidden rounded-full">
                {i === index && (
                    <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, ease: "linear" }}
                        className="absolute top-0 left-0 h-full bg-white"
                    />
                )}
            </div>
        ))}
      </div>
    </section>
  );
}
