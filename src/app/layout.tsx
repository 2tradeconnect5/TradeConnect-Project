import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TradeConnect | Find the Best Trade Professionals for Your Home Projects',
  description: 'TradeConnect helps you find qualified trade professionals for your home improvement projects. Get quotes from trusted local tradesmen.',
  keywords: 'trade professionals, home improvement, plumber, electrician, carpenter, painter, roofer, landscaper',
  openGraph: {
    title: 'TradeConnect | Find the Best Trade Professionals',
    description: 'Connect with qualified trade professionals for your home improvement projects',
    url: 'https://trade-connect-project.vercel.app',
    siteName: 'TradeConnect',
    images: [
      {
        url: 'https://trade-connect-project.vercel.app/logo.png',
        width: 800,
        height: 600,
        alt: 'TradeConnect Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradeConnect | Find the Best Trade Professionals',
    description: 'Connect with qualified trade professionals for your home improvement projects',
    images: ['https://trade-connect-project.vercel.app/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TradeConnect",
              "url": "https://trade-connect-project.vercel.app",
              "logo": "https://trade-connect-project.vercel.app/logo.png",
              "description": "TradeConnect helps you find qualified trade professionals for your home improvement projects.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://facebook.com/tradeconnect",
                "https://twitter.com/tradeconnect",
                "https://instagram.com/tradeconnect"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
