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
      <body className="bg-[#060B18] text-white">
      <Background3D />
      <a href="/dashboard" style={{position:"fixed",top:"1rem",right:"1rem",zIndex:1000,background:"rgba(15,22,40,0.8)",border:"1px solid rgba(255,255,255,0.1)",padding:"0.5rem 1rem",borderRadius:"8px",color:"#00D2FF",textDecoration:"none",fontSize:"0.9rem"}}>Klientská zóna</a>
      {children}
      <script src="https://unpkg.com/aos@next/dist/aos.js" defer></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js" defer></script>
      <script src="/script.js" defer></script>
      </body>
    </html>
  );
}