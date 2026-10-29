import type { Metadata } from "next";
import { Outfit, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RENOUX - Essence of Sophistication",
  description: "Experience the essence of Renoux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${montserrat.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans bg-black text-white overflow-x-hidden selection:bg-white/20">
        <SmoothScroll>
          <Preloader>
            <Navbar />
            {children}
          </Preloader>
        </SmoothScroll>
      </body>
    </html>
  );
}
