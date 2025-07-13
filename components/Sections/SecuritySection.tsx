import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Lock, Eye, Zap, Server, Globe, BarChart3, CheckCircle } from 'lucide-react'

const SecuritySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const securityFeatures = [
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "AES-256 encryption ensures all your transactions and data remain completely secure and protected from unauthorized access.",
      color: "text-primary"
    },
    {
      icon: Eye,
      title: "Stealth Mode Operation",
      description: "Advanced stealth algorithms mask your flashing activities, making them undetectable by standard blockchain analysis tools.",
      color: "text-accent"
    },
    {
      icon: Lock,
      title: "Secure Transmission",
      description: "All data transmissions use end-to-end encryption with secure protocols to prevent interception or manipulation.",
      color: "text-success"
    },
    {
      icon: Zap,
      title: "Anti-Flag Detection",
      description: "Smart detection systems prevent flagging by exchanges and platforms, ensuring smooth operation without interruption.",
      color: "text-info"
    }
  ]

  const techSpecs = [
    {
      category: "Multi-Exchange Support",
      icon: Globe,
      specs: [
        "Binance & Binance P2P",
        "Coinbase Pro & Advanced",
        "Kraken & Kraken Pro",
        "Huobi Global",
        "KuCoin & KuCoin Futures",
        "OKX & OKX P2P",
        "Bybit & Bybit P2P",
        "Gate.io & Gate P2P",
        "50+ Additional Exchanges"
      ]
    },
    {
      category: "Advanced Features",
      icon: BarChart3,
      specs: [
        "Real-time blockchain monitoring",
        "Automatic gas optimization",
        "Multi-network broadcasting",
        "Transaction batching",
        "Smart contract integration",
        "API rate limiting bypass",
        "Proxy rotation support",
        "Custom RPC endpoints"
      ]
    },
    {
      category: "Private Flash Mode",
      icon: Lock,
      specs: [
        "Zero-knowledge proofs",
        "Mixer integration",
        "Privacy coin support",
        "Tor network routing",
        "VPN compatibility",
        "IP masking",
        "Blockchain obfuscation",
        "Anonymous transactions"
      ]
    }
  ]

  return (
    <section className="section-padding bg-card-bg mb-8">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-text-primary mb-4">
            Security & <span className="text-gradient">Technology</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Built with enterprise-grade security and cutting-edge technology to ensure your operations remain safe, private, and undetectable.
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="card h-full text-center hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <feature.icon size={28} className={`${feature.color} group-hover:scale-110 transition-all duration-300`} />
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techSpecs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              <div className="card h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <spec.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {spec.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {spec.specs.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
              Security & Performance Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">256-bit</div>
                <div className="text-text-secondary text-sm">Encryption Level</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-text-secondary text-sm">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">0.1s</div>
                <div className="text-text-secondary text-sm">Detection Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-text-secondary text-sm">Privacy Rate</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <div className="card max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Security Certifications
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary">
              <span className="px-3 py-1 bg-primary/10 rounded-full">ISO 27001</span>
              <span className="px-3 py-1 bg-primary/10 rounded-full">SOC 2 Type II</span>
              <span className="px-3 py-1 bg-primary/10 rounded-full">GDPR Compliant</span>
              <span className="px-3 py-1 bg-primary/10 rounded-full">PCI DSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SecuritySection 