"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import type { Product } from "@/data/products";

const ease = [0.85, 0, 0.15, 1] as const;

export default function ProductDetail({ product, others }: { product: Product; others: Product[] }) {
  const router = useRouter();
  const pyramid = [
    { label: "Top Notes", items: product.topNotes },
    { label: "Heart Notes", items: product.heartNotes },
    { label: "Base Notes", items: product.baseNotes },
  ];
  const specs = [
    { label: "Character", value: product.character },
    { label: "Occasion", value: product.occasion },
    { label: "Longevity", value: product.longevity },
    { label: "Size", value: product.size },
  ];

  return (
    <main className="bg-[#050505] min-h-screen text-white pt-40 md:pt-48 flex flex-col justify-between">

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="relative z-[65] mb-10">
          <button
            type="button"
            onClick={() => router.push("/fragrances")}
            id="back-to-fragrances"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-white/60 hover:text-[#C4A482] hover:border-[#C4A482]/40 transition-colors cursor-pointer"
          >
            ← Back to Collection
          </button>
        </motion.div>

        <section className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-[radial-gradient(circle_at_center,rgba(196,164,130,0.25),transparent_70%)] blur-2xl pointer-events-none" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-[#111] group">
              <Image
                src={product.img}
                alt={`${product.name} perfume bottle`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-[#C4A482] text-black text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full">
                Special Price
              </span>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
          >
            <p className="text-[#C4A482] text-xs uppercase tracking-[0.35em] font-medium mb-4">Signature Collection</p>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-widest mb-3">{product.name}</h1>
            <p className="text-white/70 italic font-light text-lg mb-6">{product.tagline}</p>

            <div className="flex items-end gap-4 mb-8">
              <span className="text-3xl md:text-4xl font-medium text-[#C4A482]">{product.price}</span>
              <span className="text-lg text-white/40 line-through font-light mb-1">{product.originalPrice}</span>
            </div>


            <div className="grid grid-cols-2 gap-3 mb-10">
              {specs.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1">{s.label}</p>
                  <p className="text-sm font-light">{s.value}</p>
                </div>
              ))}
            </div>

            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              id={`buy-now-${product.slug}`}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-[#C4A482] px-12 py-4 text-black text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-500 hover:shadow-[0_0_40px_rgba(196,164,130,0.5)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/40 skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Buy Now</span>
              <span className="relative transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </section>

        {/* Fragrance pyramid */}
        <section className="mt-28">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="text-center text-2xl md:text-4xl font-light uppercase tracking-widest mb-12"
          >
            Fragrance Notes
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pyramid.map((tier, i) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12, ease }}
                className="rounded-2xl border border-white/5 bg-gradient-to-b from-[#0f0d0b] to-[#0a0a0a] p-8 hover:border-[#C4A482]/30 transition-colors duration-500"
              >
                <p className="text-[#C4A482] text-xs uppercase tracking-[0.3em] mb-5">{tier.label}</p>
                <ul className="space-y-3">
                  {tier.items.map((n) => (
                    <li key={n} className="flex items-center gap-3 font-light text-white/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C4A482]" />
                      {n}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Other products */}
        <section className="mt-28">
          <h2 className="text-center text-2xl md:text-4xl font-light uppercase tracking-widest mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/fragrances/${p.slug}`}
                className="group bg-[#0a0a0a] p-4 rounded-2xl border border-white/5 hover:border-[#C4A482]/30 transition-all duration-500"
              >
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-xl bg-[#111]">
                  <Image src={p.img} alt={p.name} fill sizes="33vw" className="object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                </div>
                <h3 className="font-light tracking-wide group-hover:text-[#C4A482] transition-colors">{p.name}</h3>
                <p className="text-sm text-[#C4A482]">{p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
