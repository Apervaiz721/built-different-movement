import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Built Different Movement | You're Not Broken. You're Built Different.",
  description:
    "A movement for everyone who was told they were too much and chose to keep going anyway. By Arzoo Pervaiz, author of Built Different.",
  keywords: [
    "Built Different",
    "Arzoo Pervaiz",
    "memoir",
    "self-help",
    "mental health",
    "movement",
    "identity",
    "empowerment",
  ],
  authors: [{ name: "Arzoo Pervaiz" }],
  openGraph: {
    title: "The Built Different Movement",
    description:
      "You're not broken. You're Built Different. A movement for everyone who was told they were too much and chose to keep going anyway.",
    url: "https://thebuiltdifferentmovement.com",
    siteName: "The Built Different Movement",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Built Different Movement",
    description:
      "You're not broken. You're Built Different. A movement by Arzoo Pervaiz.",
  },
  metadataBase: new URL("https://thebuiltdifferentmovement.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
