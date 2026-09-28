"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

const text = "A legacy of elegance. We believe fragrance is the ultimate accessory, crafted with the rarest ingredients to evoke memories and inspire confidence.";

export default function AboutReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const words = text.split(" ");

  return (
    <section id="story" ref={containerRef} className="py-32 md:py-64 px-8 md:px-16 max-w-7xl mx-auto bg-black text-white">
      <div className="flex flex-wrap text-4xl md:text-6xl lg:text-7xl font-light leading-snug tracking-tight">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          return <Word key={i} word={word} progress={scrollYProgress} start={start} end={end} />;
        })}
      </div>
    </section>
  );
}

function Word({ word, progress, start, end }: { word: string, progress: MotionValue<number>, start: number, end: number }) {
  const characters = word.split("");
  const amount = end - start;
  const step = amount / characters.length;

  return (
    <span className="relative mr-3 md:mr-5 lg:mr-6 mt-2">
      {characters.map((char: string, i: number) => {
        const charStart = start + (step * i);
        const charEnd = charStart + step;
        return <Character key={i} char={char} progress={progress} start={charStart} end={charEnd} />;
      })}
    </span>
  );
}

function Character({ char, progress, start, end }: { char: string, progress: MotionValue<number>, start: number, end: number }) {
  const opacity = useTransform(progress, [start, end], [0.1, 1]);
  return (
    <span className="relative inline-block">
      <span className="absolute opacity-0">{char}</span>
      <motion.span style={{ opacity }}>{char}</motion.span>
    </span>
  );
}
