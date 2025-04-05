import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TradeConnect | Find the Best Trade Professionals for Your Home Projects",
  description: "TradeConnect helps you find qualified trade professionals for your home improvement projects. Get matched with the best professionals in your area.",
  keywords: "trade professionals, home improvement, contractors, plumbers, electricians, carpenters, home projects, local tradespeople",
  authors: [{ name: "TradeConnect Team" }],
  creator: "TradeConnect",
  publisher: "TradeConnect",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://trade-connect-project.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TradeConnect | Find the Best Trade Professionals",
    description: "Get matched with qualified trades in your area for all your home improvement projects.",
    url: "https://trade-connect-project.vercel.app",
    siteName: "TradeConnect",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 60,
        alt: "TradeConnect Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeConnect | Find the Best Trade Professionals",
    description: "Get matched with qualified trades in your area for all your home improvement projects.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0047AB" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
