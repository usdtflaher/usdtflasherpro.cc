import Layout from '@/components/Layout/Layout'
import HeroSection from '@/components/Sections/HeroSection'
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
      title="USDT Flasher Pro - Flash USDT Across Exchanges Instantly"
      description="The most advanced USDT flashing software on the market. Fast, secure, and easy to use with full blockchain integration and multi-exchange support."
    >
      <>
        <HeroSection />
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