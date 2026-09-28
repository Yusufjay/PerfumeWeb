import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1f120a] text-white py-16 px-8 md:px-16 border-t border-white/5 z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-3xl font-light tracking-[0.3em] uppercase">Renoux<span className="text-[#C4A482]">.co</span></div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs uppercase tracking-[0.2em] text-white/50">
            <Link href="https://www.instagram.com/renoux.co?stkn=b2gxeTc3OGxqbDlh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Instagram</Link>
            <Link href="https://www.tiktok.com/@renoux.co?_r=1&_t=ZS-9A6NlI6ZBRM" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Tiktok</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 text-center text-[10px] uppercase tracking-[0.2em] text-white/30">
        &copy; {new Date().getFullYear()} Renoux.co Parfum. All rights reserved.
      </div>
    </footer>
  );
}
