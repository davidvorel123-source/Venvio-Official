import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";


import Background3D from "@/components/Background3D";

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
      <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" /><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /><link rel="stylesheet" href="/style.css?v=2" /></head><body style={{ backgroundColor: "var(--color-bg-dark)", color: "var(--color-text)" }}>
      <Background3D />
      
      {children}
      <script src="https://unpkg.com/aos@next/dist/aos.js" defer></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js" defer></script>
      <script src="/script.js?v=2.0.1" defer></script>
      </body>
    </html>
  );
}