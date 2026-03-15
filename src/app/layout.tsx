import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fragancias Originales de USA en Perú | USA Beauty",
  description: "Body mists y lociones Victoria's Secret traídas directamente desde Estados Unidos. Stock limitado en Lima. ¡Compra ahora por WhatsApp!",
  keywords: ["Victoria's Secret", "Peru", "Lima", "Importado", "USA", "Fragancias", "Mist"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
