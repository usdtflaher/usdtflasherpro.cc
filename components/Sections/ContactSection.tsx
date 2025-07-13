import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MessageCircle, Clock } from 'lucide-react'

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "usdtflasherpro@gmail.com",
      link: "mailto:usdtflasherpro@gmail.com"
    },
    {
      icon: MessageCircle,
      title: "Telegram Support",
      description: "Chat with our team",
      contact: "@usdt_trc20_flash",
      link: "https://t.me/usdt_trc20_flash"
    },
    {
      icon: Clock,
      title: "WhatsApp Support",
      description: "Chat on WhatsApp",
      contact: "+44 7514 003077",
      link: "https://wa.me/447514003077"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-background mb-8">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-text-primary mb-4">
            Get Help or Request <span className="text-gradient">Custom Setup</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Need assistance or have questions? Our support team is here to help you 24/7.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center">
              Contact Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                >
                  <div className="card hover:shadow-glow transition-all duration-300 text-center h-full">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <method.icon size={28} className="text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">{method.title}</h4>
                    <p className="text-text-secondary text-sm mb-4">{method.description}</p>
                    {method.link ? (
                      <a
                        href={method.link}
                        className="text-primary hover:text-accent transition-colors duration-300 font-medium"
                      >
                        {method.contact}
                      </a>
                    ) : (
                      <span className="text-primary font-medium">{method.contact}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="card">
                <h4 className="font-semibold text-text-primary mb-4">Quick Response Times</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Email Response:</span>
                    <span className="text-primary">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Telegram Response:</span>
                    <span className="text-primary">Within 30 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Technical Support:</span>
                    <span className="text-primary">24/7 Available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 