import type { Metadata, Viewport } from "next";
import "swiper/css";
import "./globals.css";
import "./icons/bootstrap-icons-subset.css";

import {
  founderName,
  homeDescription,
  homeKeywords,
  homeTitle,
  siteName,
  siteUrl,
} from "@/lib/seoData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { fontIBMPlexMono } from "./fonts";
import { LazyBackgroundFollow } from "@/components/three/background-follow-lazy";
import { CoolCursorProvider } from "@/components/cool-cursor-context";
import { BodyCursorController } from "@/components/body-cursor-controller";
import { AppToaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s`,
  },
  description: homeDescription,
  keywords: homeKeywords,
  authors: [{ name: founderName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: homeTitle,
    description: homeDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@niftesty",
    creator: "@niftesty",
    title: homeTitle,
    description: homeDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
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
          {/* Background 3D cursor (loads after idle, desktop only) */}
          <LazyBackgroundFollow />

          {/* Header */}
          <Header />

          <main>{children}</main>

          {/* Footer */}
          <Footer />

          {/* Scroll to Top */}
          <ScrollToTop />
        </CoolCursorProvider>
        <AppToaster />
      </body>
    </html>
  );
}
