"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Fragrances", href: "/fragrances" },
  { title: "Our Story", href: "/story" },
  { title: "Contact", href: "/contact" },
];

const menuVars: Variants = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: 0,
    transition: { duration: 1, ease: [0.85, 0, 0.15, 1] },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] },
  },
};

const linkVars: Variants = {
  initial: { y: 40, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: 0.1 * i + 0.3 },
  }),
  exit: (i: number) => ({
    y: 20,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.85, 0, 0.15, 1], delay: 0.05 * i },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 80) setHidden(true);
    else if (latest < prev) setHidden(false);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{ y: hidden && !isOpen ? "-110%" : "0%" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-[60] flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white"
      >
        <Link href="/" className="flex items-center gap-2.5 text-xl md:text-2xl font-light tracking-[0.3em] uppercase origin-left hover:scale-105 transition-transform duration-500">
          <Image
            src="/logo-removebg-preview.png"
            alt="Renoux Logo"
            width={32}
            height={3}
            className="w-25 h-25 md:w-20 md:h-25 object-contain brightness-0 invert"
          />
          <span className="font-brand font-semibold">Renoux.co</span>
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 hover:opacity-70 transition-opacity"
        >
          <span className="uppercase text-sm tracking-[0.2em] hidden md:block mt-1">Menu</span>
          <Menu className="w-7 h-7" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-[70] bg-[#050505] text-white flex flex-col p-6 md:p-12 overflow-y-auto"
            data-lenis-prevent="true"
          >
            {/* Soft ambient background glow */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#C4A482]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex justify-between items-center relative z-10 shrink-0 mt-2">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-white/80 hover:text-white transition-colors">
                

                <span className="font-brand font-semibold">Renoux.co</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 hover:text-[#C4A482] transition-colors group"
              >
                <span className="uppercase text-sm tracking-[0.2em] hidden md:block mt-1 transition-colors">Close</span>
                <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            <div className="flex-1 mt-8 md:mt-12 flex flex-col md:flex-row w-full relative z-10 min-h-[400px]">
              {/* Left Side: Elegant Image from sequence */}
              <div className="hidden md:flex w-1/2 h-full items-center justify-center p-4 md:p-8 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.3 }}
                  className="absolute inset-4 md:inset-8 rounded-3xl overflow-hidden border border-white/10"
                >
                  <Image src="/fragrances/menu.png" alt="Renoux Essence" fill className="object-cover opacity-75 hover:opacity-100 transition-all duration-1000 scale-105 hover:scale-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 pointer-events-none" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pointer-events-none">
                    <p className="text-[#C4A482] uppercase tracking-[0.4em] mb-4 text-xs font-semibold">The Art of Scent</p>
                    <h2 className="text-3xl md:text-5xl font-light italic leading-snug">Elegance in <br />every drop.</h2>
                  </div>
                </motion.div>
              </div>

              {/* Right Side: Links */}
              <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-16 lg:px-24 py-8 md:py-0">
                <div className="flex flex-col gap-6 md:gap-8">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.title}
                      custom={i}
                      variants={linkVars}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group inline-block text-5xl md:text-6xl lg:text-7xl font-light tracking-tight transition-all duration-500 hover:text-[#C4A482] whitespace-nowrap"
                      >
                        <span className="group-hover:italic inline-block transform group-hover:translate-x-4 transition-all duration-500">
                          {link.title}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.85, 0, 0.15, 1] }}
              className="shrink-0 flex flex-col md:flex-row justify-between text-xs md:text-sm uppercase tracking-widest mt-8 border-t border-white/10 pt-8 gap-8 relative z-10 pb-4"
            >
              <div className="flex flex-wrap gap-8 text-white/50">
                <a href="https://www.instagram.com/renoux.co?stkn=b2gxeTc3OGxqbDlh" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A482] transition-colors">Instagram</a>
                <a href="https://www.tiktok.com/@renoux.co?_r=1&_t=ZS-9A6NlI6ZBRM" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A482] transition-colors">TikTok</a>
              </div>
              <div className="text-white/50">
                <a href="mailto:contact@renoux.com" className="hover:text-[#C4A482] transition-colors">
                  contact
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
