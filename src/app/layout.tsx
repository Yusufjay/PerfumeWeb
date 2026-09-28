import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renoux | Scrollytelling Parfum",
  description: "Experience the essence of Renoux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased dark`}>
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
