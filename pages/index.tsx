import Layout from '@/components/Layout/Layout'
import HeroSection from '@/components/Sections/HeroSection'
import IntroSection from '@/components/Sections/IntroSection'
import HowItWorksSection from '@/components/Sections/HowItWorksSection'
import PricingSection from '@/components/Sections/PricingSection'
import FeaturesSection from '@/components/Sections/FeaturesSection'
import DemoSection from '@/components/Sections/DemoSection'
import SecuritySection from '@/components/Sections/SecuritySection'
import FAQSection from '@/components/Sections/FAQSection'
import ContactSection from '@/components/Sections/ContactSection'

export default function Home() {
  return (
    <Layout
      title="Flash USDT Software | USDTFlasherPro – Secure Arbitrage Tools"
      description="Flash USDT across multiple exchanges using USDTFlasherPro – the most advanced, secure, and reliable flash USDT software. Fully swappable, tradable, and P2P-compatible."
    >
      <>
        <HeroSection />
        <IntroSection />
        <HowItWorksSection />
        <PricingSection />
        <FeaturesSection />
        <DemoSection />
        <SecuritySection />
        <FAQSection />
        <ContactSection />
      </>
    </Layout>
  )
} 