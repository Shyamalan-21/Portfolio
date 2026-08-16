import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Bebas_Neue, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300","400","500","600"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space", subsets: ["latin"], weight: ["400","500","600","700"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400","500","700"] });
const bebasNeue = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: ["400"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["300","400","500","600","700","800","900"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["400","700","900"], style: ["normal","italic"] });

export const metadata: Metadata = {
  title: "Shyamalan V — Software Developer & Creative Technologist",
  description: "Portfolio of Shyamalan V — builder of software, AI pipelines, AR/VR experiences and interactive digital products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${bebasNeue.variable} ${outfit.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
