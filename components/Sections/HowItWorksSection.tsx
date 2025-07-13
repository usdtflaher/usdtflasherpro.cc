import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CreditCard, Mail, Play, ArrowRight } from 'lucide-react'

const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: CreditCard,
      title: "Purchase Flash USDT Software License",
      description: "Select your preferred plan and complete the secure payment process. Choose from our demo version, 2-year license, or lifetime access to our advanced USDT flash software.",
      features: ["Secure payment gateway", "Multiple payment options", "Instant order confirmation"]
    },
    {
      icon: Mail,
      title: "Download USDT Flash Software",
      description: "After payment confirmation, your license key and flash USDT software download link are instantly sent to your email address with complete installation instructions.",
      features: ["Instant email delivery", "Download links included", "License key provided"]
    },
    {
      icon: Play,
      title: "Start Flash USDT Operations",
      description: "Launch the software, enter your license key to activate, and start creating spendable USDT tokens across supported exchanges immediately with our user-friendly interface.",
      features: ["One-click activation", "Instant access", "Ready to use interface"]
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-background mb-8">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-text-primary mb-4">
            How Our <span className="text-gradient">USDT Flash Software</span> Works
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get started with our flash USDT software in just 3 simple steps. Our streamlined process 
            ensures you can start creating spendable USDT tokens within minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="card text-center hover:shadow-glow transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-button-text font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon size={40} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 text-left">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                      <ArrowRight size={14} className="text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Ready to Start Using Flash USDT Software?
            </h3>
            <p className="text-text-secondary mb-6">
              Join thousands of users who trust our USDT flash software for their cryptocurrency arbitrage operations and exchange trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/pricing" className="btn-primary">
                Get USDT Flash Software
              </a>
              <a href="#features" className="btn-secondary">
                Explore Features
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection 