import Link from "next/link";
import Footer from "@/components/Footer";

export type LegalSection = { title: string; body: string[] };

export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-40 md:pt-48 flex flex-col justify-between">
      <div className="relative max-w-4xl mx-auto px-6 md:px-8 w-full">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#C4A482]/10 blur-[120px] rounded-full pointer-events-none" />

        <header className="relative text-center mb-16">
          <p className="text-[#C4A482] text-xs uppercase tracking-[0.35em] font-medium mb-4">{eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-widest mb-6">{title}</h1>
          <p className="text-white/40 text-xs uppercase tracking-[0.25em]">Last updated: {updated}</p>
        </header>

        <p className="relative text-white/70 font-light leading-relaxed text-lg mb-12">{intro}</p>

        <div className="relative space-y-6">
          {sections.map((s, i) => (
            <section
              key={s.title}
              className="rounded-2xl border border-white/5 bg-gradient-to-b from-[#0f0d0b] to-[#0a0a0a] p-6 md:p-8 hover:border-[#C4A482]/25 transition-colors duration-500"
            >
              <h2 className="flex items-baseline gap-4 text-lg md:text-xl font-light tracking-wide mb-4">
                <span className="font-brand text-sm font-semibold text-[#C4A482]">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              <div className="space-y-3">
                {s.body.map((p, j) => (
                  <p key={j} className="text-white/60 font-light leading-relaxed">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="relative mt-16 text-center">
          <p className="text-white/50 font-light mb-6">Have any questions? Feel free to reach out to us.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#C4A482] px-10 py-3.5 text-black text-xs font-semibold uppercase tracking-[0.25em] hover:shadow-[0_0_40px_rgba(196,164,130,0.5)] transition-shadow duration-500"
          >
            Contact Us →
          </Link>
        </div>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
