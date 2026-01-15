import type { Metadata } from "next";
import Script from "next/script";
import { Instrument_Serif, Kablammo } from "next/font/google";
import "./globals.css";
import { BottomDock } from "@/components/BottomDock";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Toaster } from "sonner";
import ScrollToTopOnLoad from "@/components/ScrollToponLoad";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

config.autoAddCss = false;

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const kablammo = Kablammo({
  subsets: ["latin"],
  variable: "--font-kablammo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://probal-ghosh.vercel.app'),
  title: 'Probal Ghosh',
  description: 'Full-stack developer crafting clean and modern web experiences.',
  openGraph: {
    url: 'https://probal-ghosh.vercel.app',
    siteName: 'Probal Ghosh Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/og.png',
      width: 1200,
      height: 630,
      alt: 'Probal Ghosh - Portfolio'
    }],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const res = await fetch('http://localhost:3000/api/v1/tracking',{
    cache: "force-cache",
  });

  const analytics = await res.json();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSerif.variable} ${kablammo.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollToTopOnLoad/>
          <Toaster />
          <Navbar />
          <ScrollProgress className="fixed left-0 w-full h-1.25 transition-all duration-300" />
          {children}
          <Analytics/>
          <SpeedInsights/>
          <BottomDock />
        </ThemeProvider>
        <Script strategy="afterInteractive" src={analytics.src} data-website-id= {analytics.websiteId}></Script>
      </body>
    </html>
  );
}

