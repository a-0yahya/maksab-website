"use client"

import { useEffect } from 'react'

interface StructuredDataProps {
  data: Record<string, any>
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [data])

  return null
}

export const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "MAKSAB Financial Services",
  "description": "Comprehensive financial advisory and business consulting services",
  "url": "https://maksab.com",
  "logo": "https://maksab.com/logo.png",
  "image": "https://maksab.com/hero-bg.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Global"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "serviceType": [
    "Financial Advisory",
    "Business Consulting", 
    "Risk Management",
    "Digital Transformation",
    "Transaction Advisory",
    "Tax Advisory",
    "Legal Advisory"
  ],
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Financial Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Financial Advisory"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Business Consulting"
        }
      }
    ]
  }
} 