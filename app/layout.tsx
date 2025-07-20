import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { FloatingCTA } from "@/components/floating-cta"

export const metadata: Metadata = {
  title: {
    default: "MAKSAB - Financial Advisory & Business Consulting Services",
    template: "%s | MAKSAB Financial Services"
  },
  description: "MAKSAB connects you to financial excellence through comprehensive advisory services, business consulting, risk management, and digital transformation solutions. Trusted by global leaders for lasting impact.",
  keywords: [
    "financial advisory",
    "business consulting", 
    "risk management",
    "digital transformation",
    "investment strategy",
    "financial planning",
    "corporate finance",
    "transaction advisory",
    "tax advisory",
    "legal advisory"
  ],
  authors: [{ name: "MAKSAB Financial Services" }],
  creator: "MAKSAB Financial Services",
  publisher: "MAKSAB Financial Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://maksab.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maksab.com',
    title: 'MAKSAB - Financial Advisory & Business Consulting Services',
    description: 'Connecting you to financial excellence through comprehensive advisory services and lasting impact.',
    siteName: 'MAKSAB Financial Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MAKSAB Financial Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAKSAB - Financial Advisory & Business Consulting Services',
    description: 'Connecting you to financial excellence through comprehensive advisory services and lasting impact.',
    images: ['/og-image.jpg'],
    creator: '@maksab_financial',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingCTA />
      </body>
    </html>
  )
}
