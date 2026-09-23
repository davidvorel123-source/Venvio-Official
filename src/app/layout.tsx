import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import "./style.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "600", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Venvio | Moderní Weby",
  description: "Express webová řešení. Profesionální weby s pevnou cenou, dodané bleskově.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${outfit.variable} ${inter.variable}`}>
      <body>{children}`n      <script src="https://unpkg.com/aos@next/dist/aos.js" defer></script>`n      <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js" defer></script>`n      <script src="/script.js" defer></script>`n      <script src="https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js" defer></script></body>
    </html>
  );
}