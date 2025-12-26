import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toti Cavalcanti | Desenvolvedor & Criador com IA",
  description: "Portfólio de Toti Cavalcanti - Desenvolvedor full-stack especializado em inteligência artificial, produção musical e criação de experiências digitais únicas.",
  keywords: ["IA", "Inteligência Artificial", "Desenvolvimento Web", "Música", "Clipes", "Next.js", "React", "Toti Cavalcanti"],
  authors: [{ name: "Toti Cavalcanti" }],
  openGraph: {
    title: "Toti Cavalcanti - Desenvolvedor & Criador com IA",
    description: "Portfólio profissional - IA, Música & Desenvolvimento Full-Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-foreground relative`}
        suppressHydrationWarning
      >
        <ParticlesBackground />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

