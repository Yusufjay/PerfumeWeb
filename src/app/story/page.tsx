"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StoryPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-32 flex flex-col justify-between">

      <div className="max-w-5xl mx-auto px-4 md:px-8 mt-12 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          >
            <p className="text-[#C4A482] text-sm uppercase tracking-[0.3em] font-medium mb-6">Our Genesis</p>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-widest mb-8 leading-tight">The Birth of <br /><span className="italic font-light">Renoux</span></h1>
            <div className="space-y-6 text-white/70 font-light text-lg leading-relaxed">
              <p>
                Renoux began not as a business, but as a deeply personal obsession. It started in a small atelier where memories were bottled—where the scent of rain hitting warm asphalt or the faint trace of jasmine in a midnight garden were meticulously recreated.
              </p>
              <p>
                The founders, driven by a pursuit of olfactory perfection, spent years traveling the globe. From the secluded agarwood forests of Southeast Asia to the sun-drenched citrus groves of the Mediterranean, they sought only the rarest, most exquisite ingredients.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.85, 0, 0.15, 1] }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5"
          >
            <Image src="/fragrances/about.png" alt="Origins" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          className="text-center max-w-3xl mx-auto mb-32"
        >
          <h2 className="text-3xl md:text-5xl font-light italic mb-8">"We do not create perfumes. We craft an invisible garment."</h2>
          <p className="text-white/50 text-sm tracking-[0.2em] uppercase">— Jayy & Shabrina</p>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
