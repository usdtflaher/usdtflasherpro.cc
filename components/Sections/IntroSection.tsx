import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Shield, Globe, TrendingUp, Users, DollarSign } from 'lucide-react'

const IntroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      icon: Zap,
      title: "Flash USDT Technology",
      description: "Advanced blockchain simulation"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Military-grade encryption"
    },
    {
      icon: Globe,
      title: "Multi-Exchange Support",
      description: "Works across 50+ exchanges"
    },
    {
      icon: Users,
      title: "P2P Compatible",
      description: "Fully tradable and swappable"
    }
  ]

  return (
    <section id="about" className="section-padding bg-card-bg/50 mb-8">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mb-6">
              What is <span className="text-gradient">Flash USDT Software</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  <strong className="text-text-primary">Flash USDT software</strong> is a sophisticated blockchain technology that creates temporary, fully-functional USDT tokens for arbitrage trading, testing, and educational purposes. Unlike traditional USDT, flashed tokens appear on the blockchain with complete transaction history and can be used across multiple exchanges.
                </p>
                
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Our <strong className="text-text-primary">USDT flash software</strong> utilizes advanced cryptographic algorithms to generate tokens that are indistinguishable from regular USDT for a specified period. These tokens are fully swappable, tradable, and compatible with all major P2P platforms, making them ideal for arbitrage opportunities and market testing.
                </p>

                <p className="text-lg text-text-secondary leading-relaxed">
                  USDTFlasherPro stands out as the most advanced flash USDT software available, offering unparalleled security, reliability, and compatibility. With support for ERC-20, TRC-20, and BEP-20 networks, our software provides the flexibility needed for professional cryptocurrency operations while maintaining the highest security standards.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="card text-center p-4"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <highlight.icon size={24} className="text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Why Choose USDTFlasherPro?
                </h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <TrendingUp size={16} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>300-day validity period for maximum trading flexibility</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign size={16} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Fully spendable and tradable across all major exchanges</span>
                  </li>
                  <li className="flex items-start">
                    <Shield size={16} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Advanced anti-detection algorithms for secure operations</span>
                  </li>
                  <li className="flex items-start">
                    <Globe size={16} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Compatible with 50+ exchanges and major wallet providers</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IntroSection 