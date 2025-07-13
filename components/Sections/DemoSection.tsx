import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Monitor, Smartphone, ArrowRight } from 'lucide-react'

const DemoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-background mb-8">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-text-primary mb-4">
            See It in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Experience the power of our USDT flashing software through our interactive demo interface.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="card p-8 bg-gradient-to-br from-card-bg to-input-bg">
              {/* Interface Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-danger rounded-full"></div>
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <div className="text-text-secondary text-sm">USDTFlasherPro v2.0</div>
              </div>

              {/* Interface Content */}
              <div className="space-y-6">
                {/* Balance Display */}
                <div className="bg-background rounded-card p-4">
                  <div className="text-text-secondary text-sm mb-2">Current Balance</div>
                  <div className="text-2xl font-bold text-primary">$50,000.00 USDT</div>
                </div>

                {/* Flash Controls */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">Flash Amount</label>
                    <input 
                      type="text" 
                      placeholder="10,000" 
                      className="input-field w-full" 
                      defaultValue="10,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">Network</label>
                    <select className="input-field w-full">
                      <option>ERC-20</option>
                      <option>TRC-20</option>
                      <option>BEP-20</option>
                    </select>
                  </div>
                </div>

                {/* Target Wallet */}
                <div>
                  <label className="block text-sm text-text-secondary mb-2">Target Wallet Address</label>
                  <input 
                    type="text" 
                    placeholder="0x742d35Cc6634C0532925a3b8D6Ac0532925a3b8D" 
                    className="input-field w-full text-sm"
                  />
                </div>

                {/* Flash Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full flex items-center justify-center gap-2 animate-glow"
                >
                  <Play size={20} />
                  Execute Flash
                </motion.button>

                {/* Status */}
                <div className="bg-success/10 border border-success/30 rounded-card p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-success text-sm">Ready to Flash</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
            >
              <Monitor size={24} className="text-primary" />
            </motion.div>
          </motion.div>

          {/* Demo Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Track, Swap, and Control Your Flash in Real Time
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Set Flash Parameters</h4>
                  <p className="text-text-secondary text-sm">Configure amount, network, and target wallet with our intuitive interface.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Real-time Processing</h4>
                  <p className="text-text-secondary text-sm">Watch your flash execute with live blockchain confirmation and status updates.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Instant Confirmation</h4>
                  <p className="text-text-secondary text-sm">Get immediate confirmation with transaction hash and blockchain verification.</p>
                </div>
              </div>
            </div>

            {/* Platform Compatibility */}
            <div className="mt-8">
              <h4 className="font-semibold text-text-primary mb-4">Available On All Platforms</h4>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Monitor size={20} />
                  <span className="text-sm">Windows Desktop</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a href="/pricing" className="btn-primary inline-flex items-center gap-2">
                Try Demo Version
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection 