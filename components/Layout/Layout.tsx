import { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from '../WhatsAppFloat'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

const Layout = ({ children, title, description }: LayoutProps) => {
  const siteTitle = title ? `${title} | USDTFlasherPro` : 'USDTFlasherPro - Flash USDT Across Exchanges Instantly'
  const siteDescription = description || 'The most advanced USDT flashing software on the market. Fast, secure, and easy to use with full blockchain integration.'

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="USDT Flash Software, Flash USDT Instantly, USDT Arbitrage Tool, Spendable USDT Flash, P2P Crypto Flashing" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://usdtflasherpro.cc" />
        <meta property="og:image" content="https://usdtflasherpro.cc/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content="https://usdtflasherpro.cc/og-image.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/usdt.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Font Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "USDTFlasherPro",
              "url": "https://usdtflasherpro.cc",
              "logo": "https://usdtflasherpro.cc/logo.png",
              "description": siteDescription,
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "en"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  )
}

export default Layout 