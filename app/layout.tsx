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
import ScrollToTop from "@/components/ScrollToTop";
import { fontIBMPlexMono } from "./fonts";
import { BackgroundFollow } from "@/components/three/background-follow";
import { CoolCursorProvider } from "@/components/cool-cursor-context";
import { BodyCursorController } from "@/components/body-cursor-controller";
import { AppToaster } from "@/components/ui/toaster";

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
        <CoolCursorProvider defaultOn>
          <BodyCursorController />
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
        </CoolCursorProvider>
        <AppToaster />
      </body>
    </html>
  );
}
