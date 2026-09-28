"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CTA() {
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    if (!buttonRef.current) return;
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section className="py-48 min-h-screen flex items-center bg-white text-black text-center relative overflow-hidden z-10">
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                borderRadius: ["30%", "50%", "30%"]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] -translate-x-1/2 -translate-y-1/2 bg-zinc-100 rounded-full blur-3xl -z-10"
        />

        <div className="max-w-5xl mx-auto px-8 w-full relative z-10">
            <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-8xl lg:text-[7rem] font-light uppercase tracking-tight mb-8 leading-none"
            >
                Ready to find <br/><span className="italic font-normal">your</span> aura?
            </motion.h2>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex justify-center mt-12 md:mt-24"
            >
                <motion.button
                    ref={buttonRef}
                    onClick={() => router.push('/fragrances')}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    animate={{ x: position.x, y: position.y }}
                    transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                    className="w-40 h-40 md:w-56 md:h-56 bg-black text-white rounded-full flex items-center justify-center text-xs md:text-sm tracking-[0.3em] uppercase transition-colors duration-500 hover:bg-zinc-800 focus:outline-none"
                >
                    <motion.span animate={{ x: position.x * 0.5, y: position.y * 0.5 }}>
                        Shop Now
                    </motion.span>
                </motion.button>
            </motion.div>
        </div>
    </section>
  );
}
