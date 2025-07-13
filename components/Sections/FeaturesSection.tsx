import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Activity, 
  Users, 
  DollarSign, 
  Shuffle, 
  Calendar, 
  Wallet, 
  Globe, 
  Shield 
} from 'lucide-react'

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Activity,
      title: "Real-time Blockchain Integration",
      description: "Your flashed USDT tokens appear on the blockchain instantly with full transaction visibility and verification, ensuring seamless integration with all major exchanges.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "P2P Trading Compatibility",
      description: "Seamlessly works with all major P2P platforms including Binance P2P, LocalBitcoins, and other peer-to-peer trading platforms for maximum flexibility.",
      color: "text-accent"
    },
    {
      icon: DollarSign,
      title: "Fully Spendable USDT Tokens",
      description: "Flashed USDT tokens can be spent, traded, and used for any transaction just like regular USDT, providing complete functionality for arbitrage operations.",
      color: "text-success"
    },
    {
      icon: Shuffle,
      title: "Advanced Flash USDT Features",
      description: "Advanced transaction splitting, swapping capabilities, and multi-network support for maximum flexibility in your cryptocurrency operations.",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "300-Day Token Validity",
      description: "Each flashed USDT token maintains its validity for 300 days, giving you extended usage time for long-term arbitrage strategies and trading operations.",
      color: "text-info"
    },
    {
      icon: Wallet,
      title: "Multi-Wallet Support",
      description: "Compatible with Trust Wallet, MetaMask, Binance Wallet, and 50+ other cryptocurrency wallets for seamless integration with your existing setup.",
      color: "text-accent"
    },
    {
      icon: Globe,
      title: "Multi-Exchange Flash Support",
      description: "Works across 50+ cryptocurrency exchanges including Binance, Coinbase, Kraken, Huobi, and more for comprehensive arbitrage opportunities.",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Advanced Security Features",
      description: "Military-grade encryption, anti-detection algorithms, and secure transaction protocols keep your flash USDT operations completely secure.",
      color: "text-danger"
    }
  ]

  return (
    <section id="features" className="section-padding bg-background mb-8">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-text-primary mb-4">
            Advanced <span className="text-gradient">Flash USDT Software</span> Features
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our USDT flash software comes packed with powerful features designed to give you 
            maximum control and flexibility in your cryptocurrency arbitrage operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="card h-full text-center hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300`}>
                    <feature.icon size={24} className={`${feature.color} group-hover:scale-110 transition-all duration-300`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center">
              USDT Flash Software Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-text-secondary">Supported Blockchain Networks</span>
                  <span className="text-primary font-semibold">ERC-20, TRC-20, BEP-20</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-text-secondary">Flash Transaction Speed</span>
                  <span className="text-primary font-semibold">1-3 seconds</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-text-secondary">Software Success Rate</span>
                  <span className="text-primary font-semibold">99.9%</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-text-secondary">Minimum Flash Amount</span>
                  <span className="text-primary font-semibold">$1 USDT</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-text-secondary">Maximum Flash Amount</span>
                  <span className="text-primary font-semibold">Unlimited</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-text-secondary">Compatible Exchanges</span>
                  <span className="text-primary font-semibold">50+</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-text-secondary">Operating System</span>
                  <span className="text-primary font-semibold">Windows Only</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-text-secondary">Flash Token Validity</span>
                  <span className="text-primary font-semibold">300 days per flash</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection 