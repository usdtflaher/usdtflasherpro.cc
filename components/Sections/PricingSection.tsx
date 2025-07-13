import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Crown, Zap, TestTube } from 'lucide-react'

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const plans = [
    {
      name: "Demo Version",
      price: "$15",
      duration: "One-time",
      icon: TestTube,
      description: "Perfect for testing and evaluation",
      features: [
        "Max flash amount: $40 one time",
        "Flash fully tradable USDT",
        "Swappable and spendable funds",
        "300-day lifespan per flash",
        "Multi-exchange support",
        "P2P platform compatibility",
        "Regular updates included"
      ],
      popular: false,
      buttonText: "Try Demo",
      buttonClass: "btn-secondary"
    },
    {
      name: "2-Year License",
      price: "$3,000",
      duration: "2 Years",
      icon: Zap,
      description: "Full access with extended validity",
      features: [
        "Flash fully tradable USDT",
        "Swappable and spendable funds",
        "300-day lifespan per flash",
        "Multi-exchange support",
        "P2P platform compatibility",
        "Priority support",
        "Regular updates included"
      ],
      popular: true,
      buttonText: "Get 2-Year License",
      buttonClass: "btn-primary"
    },
    {
      name: "Lifetime License",
      price: "$5,000",
      duration: "Lifetime",
      icon: Crown,
      description: "All features included for life",
      features: [
        "All 2-year license features",
        "Unlimited usage forever",
        "Lifetime updates",
        "Premium support",
        "Advanced features access",
        "Multi-device licensing",
        "Custom configurations"
      ],
      popular: false,
      buttonText: "Get Lifetime Access",
      buttonClass: "btn-primary"
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-card-bg mb-8">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-text-primary mb-4">
            Choose Your <span className="text-gradient">License Plan</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Select the perfect plan for your USDT flashing needs. All plans include secure payment processing and instant delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative ${plan.popular ? 'transform scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-button-text px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`card h-full ${plan.popular ? 'border-2 border-primary shadow-glow' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center ${plan.popular ? 'bg-primary text-button-text' : 'bg-primary/10 text-primary'}`}>
                      <plan.icon size={40} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{plan.name}</h3>
                  <p className="text-text-secondary text-sm mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <span className="text-text-secondary text-sm ml-2">/ {plan.duration}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check size={16} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a href="/pricing" className={`w-full ${plan.buttonClass} ${plan.popular ? 'animate-glow' : ''} block text-center`}>
                  {plan.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              What's Included in All Plans
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-primary text-2xl mb-2">🔒</div>
                <h4 className="font-semibold text-text-primary mb-2">Secure Payment</h4>
                <p className="text-text-secondary text-sm">SSL encrypted payment processing with multiple payment options</p>
              </div>
              <div>
                <div className="text-primary text-2xl mb-2">📧</div>
                <h4 className="font-semibold text-text-primary mb-2">Instant Delivery</h4>
                <p className="text-text-secondary text-sm">License key and download link sent immediately to your email</p>
              </div>
              <div>
                <div className="text-primary text-2xl mb-2">💬</div>
                <h4 className="font-semibold text-text-primary mb-2">24/7 Support</h4>
                <p className="text-text-secondary text-sm">Round-the-clock customer support via email and Telegram</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection 