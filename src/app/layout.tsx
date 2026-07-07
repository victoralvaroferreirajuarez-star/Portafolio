import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alvaro Ferreira · avalito — Developer & Co-Founder",
  description:
    "Developer y co-founder de S X S, JUVAK y Fútbol Para Todos. De Perú a Barcelona: construyo software y negocios, y le encuentro solución a todo.",
  openGraph: {
    title: "Alvaro Ferreira · avalito — Developer & Co-Founder",
    description:
      "Developer y co-founder de S X S, JUVAK y Fútbol Para Todos. De Perú a Barcelona: construyo software y negocios.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070D",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
