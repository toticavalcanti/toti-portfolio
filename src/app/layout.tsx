import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Código Fluente Studio | IA, Música & Desenvolvimento",
  description: "Estúdio criativo especializado em inteligência artificial, produção musical e desenvolvimento full-stack. Criando experiências digitais únicas.",
  keywords: ["IA", "Inteligência Artificial", "Desenvolvimento Web", "Música", "Clipes", "Next.js", "React"],
  authors: [{ name: "Toti Cavalcanti" }],
  openGraph: {
    title: "Código Fluente Studio",
    description: "IA, Música & Desenvolvimento Full-Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

