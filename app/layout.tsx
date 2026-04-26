import type { Metadata, Viewport } from "next";
import { Caveat, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { jsonLd, seoMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { ScrollProgressButton } from "@/components/common/scroll-progress-button";
import { Navbar } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = seoMetadata;

export const viewport: Viewport = {
  userScalable: false,
  maximumScale: 1.0,
  initialScale: 1,
};

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  fallback: ["Arial"],
  variable: "--font-caveat",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  fallback: ["Arial"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn("antialiased w-full", caveat.variable, nunito.className)}
      >
        <Analytics />
        <Toaster position="top-right" reverseOrder />
        <Navbar />
        {children}
        <Footer />
        <ScrollProgressButton />
      </body>
    </html>
  );
}
