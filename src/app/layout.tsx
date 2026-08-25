import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Bebas_Neue, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300","400","500","600"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space", subsets: ["latin"], weight: ["400","500","600","700"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400","500","700"] });
const bebasNeue = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: ["400"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["300","400","500","600","700","800","900"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["400","700","900"], style: ["normal","italic"] });

export const viewport: Viewport = {
  themeColor: "#03060F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Shyamalan V — Software Developer & Creative Technologist",
  description: "Portfolio of Shyamalan V — builder of high-performance software, AI agent pipelines, AR/VR spatial experiences, and interactive web platforms.",
  keywords: [
    "Shyamalan V",
    "Software Developer",
    "Creative Technologist",
    "Full-Stack Engineer",
    "AI Systems",
    "AR/VR Developer",
    "Next.js",
    "Three.js",
    "LangGraph",
  ],
  authors: [{ name: "Shyamalan V" }],
  creator: "Shyamalan V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shyamalanv.dev",
    title: "Shyamalan V — Software Developer & Creative Technologist",
    description: "Builder of high-performance software, agentic AI pipelines, AR/VR worlds, and interactive web experiences.",
    siteName: "Shyamalan V Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shyamalan V — Software Developer & Creative Technologist",
    description: "Builder of high-performance software, agentic AI pipelines, AR/VR worlds, and interactive web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${bebasNeue.variable} ${outfit.variable} ${playfair.variable} antialiased bg-[#03060F] text-white selection:bg-[#2B6FFF]/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
