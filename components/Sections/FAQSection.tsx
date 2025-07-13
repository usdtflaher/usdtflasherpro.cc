import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Head from 'next/head'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const faqs = [
    {
      question: "What is flash USDT software and how does it work?",
      answer: "Flash USDT software is an advanced cryptocurrency tool that creates temporary, fully-functional USDT tokens on the blockchain. These tokens appear with complete transaction history and can be used for arbitrage trading, P2P transactions, and testing purposes. The software uses sophisticated blockchain simulation to generate tokens that are indistinguishable from regular USDT for up to 300 days."
    },
    {
      question: "Is flashed USDT spendable and tradable on exchanges?",
      answer: "Yes, flashed USDT tokens are fully spendable and tradable across 50+ major cryptocurrency exchanges including Binance, Coinbase, Kraken, and others. The tokens can be used for P2P trading, arbitrage opportunities, and regular trading activities. They function identically to regular USDT during their validity period."
    },
    {
      question: "How long does flash USDT last before expiring?",
      answer: "Flash USDT tokens created with our software maintain their validity for 300 days from the time of creation. During this period, the tokens are fully functional and can be used for all types of transactions. After 300 days, the tokens become inactive, but all transactions completed within the validity period remain permanently recorded on the blockchain."
    },
    {
      question: "Which exchanges support USDT flash software transactions?",
      answer: "Our flash USDT software supports over 50 major cryptocurrency exchanges including Binance, Coinbase, Kraken, Huobi, KuCoin, Gate.io, and many others. The software is also compatible with major wallets like Trust Wallet, MetaMask, Binance Wallet, and supports ERC-20, TRC-20, and BEP-20 network protocols."
    },
    {
      question: "Can flash USDT be detected by exchanges or anti-fraud systems?",
      answer: "Our advanced flash USDT software incorporates military-grade encryption and sophisticated anti-detection algorithms. The flashed tokens are created using advanced blockchain simulation technology that makes them indistinguishable from regular USDT tokens. However, we recommend using the software responsibly and in compliance with your local regulations."
    },
    {
      question: "What is the minimum and maximum amount for flash USDT software?",
      answer: "The minimum flash amount is $1 USDT, while there is no maximum limit - you can flash unlimited amounts depending on your needs. The software automatically optimizes transaction sizes and can split large amounts across multiple transactions for better efficiency and security."
    },
    {
      question: "Is using flash USDT software legal and safe?",
      answer: "Our flash USDT software operates within legal boundaries and doesn't violate blockchain protocols. The software is designed for educational purposes, arbitrage trading, and testing scenarios. We recommend checking your local cryptocurrency regulations before use. The software includes advanced security features to protect your operations."
    },
    {
      question: "How fast are flash USDT transactions processed?",
      answer: "Flash USDT transactions are processed almost instantly, typically appearing on the blockchain within 1-3 seconds. The actual speed depends on network congestion and the specific blockchain being used (ERC-20, TRC-20, or BEP-20). Our software optimizes transaction routing for maximum speed and efficiency."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Schema markup for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      </Head>
      
      <section id="faq" className="section-padding bg-card-bg mb-8">
        <div className="container-max">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mb-4">
              Flash USDT Software <span className="text-gradient">FAQ</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Get answers to the most common questions about our USDT flash software and how it works for cryptocurrency arbitrage.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="mb-4"
              >
                <div className="card">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-center justify-between p-2 focus:outline-none"
                  >
                    <h3 className="text-lg font-semibold text-text-primary pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp size={20} className="text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-primary flex-shrink-0" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 border-t border-gray-700 mt-4"
                    >
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="card max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Need Help with Flash USDT Software?
              </h3>
              <p className="text-text-secondary mb-6">
                Our technical support team is available 24/7 to help you with flash USDT software installation, activation, and troubleshooting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn-primary">
                  Contact Support
                </a>
                <a href="mailto:usdtflasherpro@gmail.com" className="btn-secondary">
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default FAQSection 