import type { Metadata } from "next";
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
import OnekoCat from "@/components/OnekoCat";
import SidePattern from "@/components/Sidepattern";
import Footer from "@/components/Footer";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSerif.variable} ${kablammo.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollToTopOnLoad/>
          <Toaster />
          <Navbar />
          <ScrollProgress className="fixed left-0 w-full h-1.25 transition-all duration-300" />
          <div className="grid grid-cols-1 xl:grid-cols-4 min-h-screen bg-white dark:bg-neutral-900">
            <SidePattern />
              <div className="col-span-1 xl:col-span-2">
                {children}
                <Footer/>
              </div>
            <SidePattern />
          </div>
          <OnekoCat/>
          <Analytics/>
          <SpeedInsights/>
          <BottomDock />
        </ThemeProvider>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="652051f2-24d5-4acb-b79c-82930a61d307"></script>
      </body>
    </html>
  );
}

