"use client";
import { useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

function Counter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(from, { damping: 50, stiffness: 100, mass: 1 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (inView) {
      spring.set(to);
    }
  }, [inView, spring, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function StatsCounter() {
  return (
    <section className="py-24 md:py-32 bg-black text-white relative z-10 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between gap-16 md:gap-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-6xl md:text-8xl font-light mb-4">
            <Counter to={110} />
          </div>
          <div className="uppercase tracking-[0.2em] font-medium text-white/50 text-xs md:text-sm">Hours of Distillation</div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-6xl md:text-8xl font-light mb-4 flex">
            <Counter to={10} /><span className="text-white/30">+</span>
          </div>
          <div className="uppercase tracking-[0.2em] font-medium text-white/50 text-xs md:text-sm">high-quality materials</div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-6xl md:text-8xl font-light mb-4">
            <Counter to={2} />
          </div>
          <div className="uppercase tracking-[0.2em] font-medium text-white/50 text-xs md:text-sm">Master Perfumers</div>
        </div>
      </div>
    </section>
  );
}
