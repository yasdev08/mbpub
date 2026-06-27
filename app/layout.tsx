import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MB PUB - Agence de Marketing Digital & Publicité Physique",
  description:
    "Solutions marketing complètes pour les entreprises locales. Création web, réseaux sociaux, enseignes commerciales, signalétique et branding.",
  generator: "v0.app",
  openGraph: {
    title: "MB PUB - Votre Agence Marketing Complète",
    description:
      "Digital et physique : solutions intégrées pour transformer votre visibilité",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#DE300D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} bg-background scroll-smooth`}
    >
      <body className="font-body text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
