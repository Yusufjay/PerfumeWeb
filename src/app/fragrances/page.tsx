"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";

export default function FragrancesPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-32 flex flex-col justify-between">

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          className="mb-20 text-center"
        >
          <p className="text-[#C4A482] text-sm uppercase tracking-[0.3em] font-medium mb-4">The Collection</p>
          <h1 className="text-5xl md:text-7xl font-light uppercase tracking-widest mb-6">Fragrances</h1>
          <p className="text-white/60 max-w-2xl mx-auto font-light text-lg">
            Discover our curated signature collection of six distinct scents, masterfully crafted for an unforgettable aura.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-10 sm:gap-y-16 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.85, 0, 0.15, 1] }}
              className="h-full"
            >
            <Link
              href={`/fragrances/${product.slug}`}
              id={`product-${product.slug}`}
              className="group cursor-pointer flex flex-col justify-between h-full bg-[#0a0a0a] p-4 sm:p-5 rounded-2xl border border-white/5 hover:border-[#C4A482]/30 transition-all duration-500"
            >
              <div className="relative aspect-[3/4] mb-4 sm:mb-6 overflow-hidden rounded-xl bg-[#111]">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                <div className="pr-2">
                  <h3 className="text-base sm:text-xl font-light tracking-wide mb-1 group-hover:text-[#C4A482] transition-colors">{product.name}</h3>
                  <p className="text-white/50 text-[11px] sm:text-xs font-light tracking-wider">{product.notes}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end shrink-0">
                  <span className="text-xs sm:text-sm text-white/40 line-through font-light">{product.originalPrice}</span>
                  <span className="text-sm sm:text-base md:text-lg font-medium text-[#C4A482]">{product.price}</span>
                </div>
              </div>
              <span className="mt-4 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/40 group-hover:text-[#C4A482] transition-colors">View Details →</span>
            </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
