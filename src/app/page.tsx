import SequenceScroll from "@/components/SequenceScroll";
import AboutReveal from "@/components/AboutReveal";
import BentoSection from "@/components/BentoSection";
import StatsCounter from "@/components/StatsCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <SequenceScroll />
      
      {/* 
        Wrap other sections in a relative div with -mt-[100vh] to make 
        them seamlessly follow the sticky canvas hero.
      */}
      <div className="relative z-10 -mt-[100vh] bg-black">
        <AboutReveal />
        <BentoSection />
        <StatsCounter />
        <TestimonialSlider />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
