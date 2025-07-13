import { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from '../WhatsAppFloat'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  canonical?: string
}

const Layout = ({ children, title, description, canonical }: LayoutProps) => {
  const siteTitle = title || 'Flash USDT Software | USDTFlasherPro – Secure Arbitrage Tools'
  const siteDescription = description || 'Flash USDT across multiple exchanges using USDTFlasherPro – the most advanced, secure, and reliable flash USDT software. Fully swappable, tradable, and P2P-compatible.'
  const siteUrl = 'https://usdtflasherpro.cc'
  const canonicalUrl = canonical || siteUrl

  // Enhanced structured data for Organization and SoftwareApplication
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "USDTFlasherPro",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": siteDescription,
    "founder": {
      "@type": "Person",
      "name": "USDTFlasherPro Team"
    },
    "foundingDate": "2024",
    "industry": "Cryptocurrency Software",
    "keywords": "flash usdt software, usdt flash software, cryptocurrency arbitrage, blockchain simulation",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "usdtflasherpro@gmail.com",
      "availableLanguage": ["en", "es", "fr", "zh", "de", "ja", "ko", "pt", "ru", "ar"],
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://t.me/usdtflasherpro",
      "https://usdtflasherpro.blog"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "USDTFlasherPro - Flash USDT Software",
    "description": "Advanced flash USDT software for cryptocurrency arbitrage trading. Create fully spendable USDT tokens for exchange trading and P2P transactions.",
    "url": siteUrl,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Windows",
    "downloadUrl": `${siteUrl}/pricing`,
    "offers": {
      "@type": "Offer",
      "price": "15.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1247"
    },
    "author": {
      "@type": "Organization",
      "name": "USDTFlasherPro",
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "USDTFlasherPro",
      "url": siteUrl
    },
    "softwareVersion": "3.0",
    "datePublished": "2024-01-01",
    "dateModified": "2024-12-01",
    "keywords": "flash usdt software, usdt flash software, cryptocurrency arbitrage, blockchain simulation, usdt flashing tool",
    "featureList": [
      "Flash USDT creation",
      "Multi-exchange support",
      "P2P trading compatibility",
      "300-day validity period",
      "Advanced security features",
      "Real-time blockchain presence",
      "Multiple network support (ERC-20, TRC-20, BEP-20)"
    ],
    "screenshot": `${siteUrl}/screenshot.jpg`,
    "softwareHelp": {
      "@type": "CreativeWork",
      "url": `${siteUrl}/#faq`
    }
  }

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        
        {/* Enhanced Keywords */}
        <meta name="keywords" content="flash usdt software, usdt flash software, flash usdt, usdt flashing software, cryptocurrency arbitrage, blockchain simulation, usdt flash tool, flash tether software, crypto flash software, usdt arbitrage software, flash usdt generator, temporary usdt, fake usdt detector, usdt flash app, cryptocurrency flashing" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Language and Region */}
        <meta name="language" content="en" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        
        {/* Enhanced Open Graph Tags */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="USDTFlasherPro - Flash USDT Software" />
        <meta property="og:site_name" content="USDTFlasherPro" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
        <meta name="twitter:image:alt" content="USDTFlasherPro - Flash USDT Software" />
        <meta name="twitter:site" content="@USDTFlasherPro" />
        <meta name="twitter:creator" content="@USDTFlasherPro" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="USDTFlasherPro" />
        <meta name="publisher" content="USDTFlasherPro" />
        <meta name="copyright" content="USDTFlasherPro" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/usdt.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Hreflang for International SEO */}
        <link rel="alternate" href={siteUrl} hrefLang="en" />
        <link rel="alternate" href={`${siteUrl}/es`} hrefLang="es" />
        <link rel="alternate" href={`${siteUrl}/fr`} hrefLang="fr" />
        <link rel="alternate" href={`${siteUrl}/zh`} hrefLang="zh" />
        <link rel="alternate" href={`${siteUrl}/de`} hrefLang="de" />
        <link rel="alternate" href={`${siteUrl}/ja`} hrefLang="ja" />
        <link rel="alternate" href={`${siteUrl}/ko`} hrefLang="ko" />
        <link rel="alternate" href={`${siteUrl}/pt`} hrefLang="pt" />
        <link rel="alternate" href={`${siteUrl}/ru`} hrefLang="ru" />
        <link rel="alternate" href={`${siteUrl}/ar`} hrefLang="ar" />
        <link rel="alternate" href={siteUrl} hrefLang="x-default" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        
        {/* Software Application Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema)
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-background overflow-x-hidden w-full">
        <Navbar />
        <main className="pt-20 w-full">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  )
}

export default Layout 