import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Globe, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  const cryptoIcons = [
    { icon: Zap, position: 'top-20 left-4 md:left-20', delay: 0 },
    { icon: Shield, position: 'top-32 right-4 md:right-32', delay: 0.2 },
    { icon: Globe, position: 'bottom-40 left-2 md:left-16', delay: 0.4 },
    { icon: TrendingUp, position: 'bottom-20 right-2 md:right-20', delay: 0.6 },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 w-full">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card-bg" />
      
      {/* Animated Background Icons */}
      {cryptoIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} text-primary/20 hidden sm:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: item.delay, duration: 0.8 }}
        >
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <item.icon size={32} className="md:w-12 md:h-12" />
          </motion.div>
        </motion.div>
      ))}

      {/* Glowing Orbs - Responsive sizes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container-max section-padding relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main H1 Heading with Target Keywords */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">Flash USDT Software</span>
            <br />
            <span className="text-text-primary">for Instant</span>
            <br />
            <span className="text-primary">Exchange Arbitrage</span>
          </motion.h1>

          {/* Subtext with LSI Keywords */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The most advanced <strong>USDT flash software</strong> for professional cryptocurrency arbitrage. 
            Create fully spendable, tradable USDT tokens across 50+ exchanges with our secure 
            flash USDT solution.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/pricing" className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center">
              Get Flash USDT Software
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </Link>
            <Link href="#about" className="btn-secondary w-full sm:w-auto text-center">
              Learn More
            </Link>
          </motion.div>

          {/* Stats with SEO-optimized Labels */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-text-secondary text-xs md:text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2">300</div>
              <div className="text-text-secondary text-xs md:text-sm">Days Validity</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-text-secondary text-xs md:text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-text-secondary text-xs md:text-sm">Exchanges</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection 