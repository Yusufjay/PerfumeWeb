"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "High-Quality Materials",
    description: "Carefully selected from the finest ingredients for a perfect fragrance.",
    span: "md:col-span-2 md:row-span-2",
    img: "/fragrances/bahan.png"
  },
  {
    title: "Artisan Crafted",
    description: "Distilled slowly by master perfumers.",
    span: "md:col-span-1 md:row-span-1",
    img: "/fragrances/pengrajin.png"
  },
  {
    title: "Timeless",
    description: "A scent that lingers through generations.",
    span: "md:col-span-1 md:row-span-1",
    img: "/fragrances/aroma.png"
  }
];

export default function BentoSection() {
  return (
    <section id="ingredients" className="py-24 px-4 md:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase mb-4">The Ingredients</h2>
          <p className="text-white/60 text-lg font-light tracking-wide max-w-md">Nature's finest elements, curated carefully for the perfect blend.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 min-h-[80vh]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * 0.1 }}
              className={`relative overflow-hidden group rounded-3xl bg-[#0a0a0a] border border-white/5 ${item.span}`}
            >
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                 <div className="overflow-hidden mb-2">
                    <motion.h3 
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                        className="text-2xl md:text-4xl font-light uppercase tracking-widest"
                    >
                        {item.title}
                    </motion.h3>
                 </div>
                 <div className="overflow-hidden">
                    <motion.p 
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
                        className="text-white/70 font-light"
                    >
                        {item.description}
                    </motion.p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
