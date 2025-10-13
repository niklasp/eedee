import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import "glightbox/dist/css/glightbox.min.css";
import { seoData } from "@/lib/seoData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollToTop from "@/components/ScrollToTop";
import { doto, fontIBMPlexMono } from "./fonts";
import { BackgroundFollow } from "@/components/three/background-follow";

export const metadata: Metadata = {
  title: seoData.home.title,
  description: seoData.home.description,
  openGraph: {
    title: seoData.home.title,
    description: seoData.home.description,
  },
  keywords: seoData.home.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black ${fontIBMPlexMono.className} overflow-x-hidden text-[14px]`}
      >
        {/* Background 3D scene */}
        <BackgroundFollow />

        {/* Header */}
        <Header />

        {children}

        {/* Footer */}
        <Footer />

        {/* Scroll to Top */}
        <ScrollToTop />

        {/* Cursor */}
        {/* <Cursor /> */}
      </body>
    </html>
  );
}
