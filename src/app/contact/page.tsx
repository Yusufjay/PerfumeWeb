"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

const socialLinks = [
  { platform: "WhatsApp", handle: "+62 895-376-862-679", link: "https://wa.me/6281234567890" },
  { platform: "Instagram", handle: "@renoux.co", link: "https://www.instagram.com/renoux.co?stkn=b2gxeTc3OGxqbDlh" },
  { platform: "TikTok", handle: "@renoux.co", link: "https://www.tiktok.com/@renoux.co?_r=1&_t=ZS-9A6NlI6ZBRM" },
];

export default function ContactPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-32 flex flex-col justify-between">

      <div className="max-w-4xl mx-auto px-4 md:px-8 mt-12 md:mt-24 w-full flex-1">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
            className="text-center mb-24"
        >
          <p className="text-[#C4A482] text-sm uppercase tracking-[0.3em] font-medium mb-6">Get in Touch</p>
          <h1 className="text-4xl md:text-7xl font-light uppercase tracking-widest leading-tight">Connect with <br/><span className="italic font-light">Admin</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {socialLinks.map((social, i) => (
            <motion.a 
              key={social.platform}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * i + 0.3, ease: [0.85, 0, 0.15, 1] }}
              className="group block p-8 md:p-10 rounded-2xl bg-[#111] border border-white/5 hover:bg-[#1a1a1a] hover:border-[#C4A482]/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-xl md:text-2xl font-light tracking-wide group-hover:text-[#C4A482] transition-colors">{social.platform}</span>
                <MoveUpRight className="w-6 h-6 text-white/30 group-hover:text-[#C4A482] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-white/60 font-light tracking-wider">{social.handle}</p>
            </motion.a>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
