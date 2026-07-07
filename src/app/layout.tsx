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
  keywords: [
    "Alvaro Ferreira",
    "avalito",
    "desarrollador",
    "emprendedor",
    "portfolio",
    "JUVAK",
    "Fútbol Para Todos",
    "automatización",
    "chatbot",
    "IA",
  ],
  authors: [{ name: "Alvaro Ferreira" }],
  creator: "Alvaro Ferreira",
  icons: {
    icon: [
      { url: "/favicon.png?v=3", sizes: "64x64", type: "image/png" },
      { url: "/icon-192.png?v=3", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png?v=3", sizes: "180x180" },
  },
  metadataBase: new URL("https://avalito.dev"),
  openGraph: {
    title: "Alvaro Ferreira · avalito — Developer & Co-Founder",
    description:
      "Developer y co-founder de S X S, JUVAK y Fútbol Para Todos. Construyo software y negocios.",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    siteName: "avalito",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvaro Ferreira · avalito — Developer & Co-Founder",
    description:
      "Developer y co-founder de S X S, JUVAK y Fútbol Para Todos. Construyo software y negocios.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#05070D",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alvaro Ferreira",
  alternateName: "avalito",
  url: "https://avalito.dev",
  jobTitle: "Software Developer & Co-Founder",
  knowsAbout: ["Web Development", "Automation", "AI", "Chatbots", "Entrepreneurship"],
  sameAs: [
    "https://github.com/victoralvaroferreirajuarez-star",
    "https://www.instagram.com/avalowowo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
