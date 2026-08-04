import type { Metadata } from "next";
import { Fraunces, Instrument_Serif, Kablammo, Caveat } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { BottomDock } from "@/components/BottomDock";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Toaster } from "sonner";
import ScrollToTopOnLoad from "@/components/ScrollToponLoad";
// import { Analytics } from "@vercel/analytics/next";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import OnekoCat from "@/components/OnekoCat";
import SidePattern from "@/components/Sidepattern";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import ThemeShortcutProvider from "./hooks/useThemeShortcut";
import Section from "@/components/Section";
import { tanker } from "./font";
import { AudioProvider } from "@/components/AudioProvider";

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

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://probal-ghosh.vercel.app"),
  title: "Probal Ghosh",
  description:
    "Full-stack developer crafting clean and modern web experiences.",
  openGraph: {
    url: "https://probal-ghosh.vercel.app",
    siteName: "Probal Ghosh Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Probal Ghosh - Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`overflow-x-hidden ${instrumentSerif.variable} ${kablammo.variable} ${fraunces.variable} ${tanker.variable} ${caveat.variable} `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeShortcutProvider>
            <LenisProvider>
              <AudioProvider>
                <ScrollToTopOnLoad />
                <Toaster />
                <Navbar />
                <ScrollProgress className="fixed left-0 w-full h-0.5 transition-all duration-300 z-100" />
                <div className="relative min-h-screen bg-zinc-100/40 dark:bg-[#1d1c1c] text-black dark:text-white">
                  <div
                    className="pointer-events-none fixed inset-y-0 left-1/2 hidden lg:block
             border-l border-dashed border-neutral-400 dark:border-neutral-800 z-50"
                    style={{
                      transform: "translateX(calc(var(--content-width) / -2))",
                    }}
                  />

                  <div
                    className="pointer-events-none fixed inset-y-0 left-1/2 hidden lg:block
             border-l border-dashed border-neutral-400 dark:border-neutral-800 z-50"
                    style={{
                      transform: "translateX(calc(var(--content-width) / 2))",
                    }}
                  />

                  <div className="relative z-20">
                    {children}
                    <Section className="mt-5">
                      <Footer />
                    </Section>
                  </div>
                </div>
                {/* <OnekoCat /> */}
                {/* <Analytics />
              <SpeedInsights /> */}
                {/* <BottomDock /> */}
              </AudioProvider>
            </LenisProvider>
          </ThemeShortcutProvider>
        </ThemeProvider>
        {/* <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="652051f2-24d5-4acb-b79c-82930a61d307"
        ></script> */}
      </body>
    </html>
  );
}
