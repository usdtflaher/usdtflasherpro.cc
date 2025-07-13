import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const faqs = [
    {
      question: "What is USDT Flashing?",
      answer: "USDT Flashing is a process that allows you to create fully spendable USDT tokens that appear on the blockchain with real transaction history. These tokens can be used for trading, P2P transactions, and other crypto operations with a validity period of 300 days."
    },
    {
      question: "Is the software legal to use?",
      answer: "Our software operates within legal boundaries and doesn't violate any blockchain protocols. However, we recommend checking your local regulations regarding cryptocurrency operations. The software is designed for educational and testing purposes primarily."
    },
    {
      question: "How fast are the transactions?",
      answer: "Flash transactions are processed instantly, typically appearing on the blockchain within 1-3 seconds. The speed depends on network congestion and the specific blockchain being used (ERC-20, TRC-20, or BEP-20)."
    },
    {
      question: "Do I need KYC to use this tool?",
      answer: "No KYC is required to purchase or use our software. We prioritize user privacy and anonymity. You only need to provide an email address to receive your license and software download link."
    },
    {
      question: "What wallets and exchanges are compatible?",
      answer: "Our software supports 50+ exchanges including Binance, Coinbase, Kraken, and others. It's compatible with major wallets like Trust Wallet, MetaMask, Binance Wallet, and most ERC-20, TRC-20, and BEP-20 compatible wallets."
    },
    {
      question: "What happens after the 300-day validity period?",
      answer: "After 300 days, the flashed USDT will no longer be valid for new transactions. However, any transactions completed within the validity period remain permanently recorded on the blockchain."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We offer a 24-hour refund policy for the demo version only. For the 2-year and lifetime licenses, we recommend trying the demo version first to ensure the software meets your needs before purchasing."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 customer support via email and Telegram. Our support team can help with installation, activation, troubleshooting, and general questions about the software's features and functionality."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
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
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get answers to the most common questions about our USDT flashing software.
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
              Still Have Questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Our support team is available 24/7 to help you with any questions or concerns.
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
  )
}

export default FAQSection 