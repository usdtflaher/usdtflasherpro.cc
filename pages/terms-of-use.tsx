import Layout from '@/components/Layout/Layout'
import { motion } from 'framer-motion'

export default function TermsOfUse() {
  return (
    <Layout
      title="Terms of Use - USDTFlasherPro"
      description="Terms of Use and Service Agreement for USDTFlasherPro software. Please read these terms carefully before using our services."
    >
      <div className="min-h-screen bg-background pt-20">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading text-text-primary mb-4">
                Terms of <span className="text-gradient">Use</span>
              </h1>
              <p className="text-lg text-text-secondary">
                Please read these terms and conditions carefully before using USDTFlasherPro software
              </p>
              <p className="text-sm text-text-secondary mt-2">
                Last Updated: January 2025
              </p>
            </div>

            {/* Terms Content */}
            <div className="card space-y-8">
              {/* Section 1: Acceptance of Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Acceptance of Terms</h2>
                <p className="text-text-secondary mb-4">
                  By purchasing, downloading, or using USDTFlasherPro software, you agree to be bound by these Terms of Use. 
                  If you do not agree to these terms, please do not use our software or services.
                </p>
              </section>

              {/* Section 2: Software Activation and BIP Key */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Software Activation & BIP Key Requirements</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    <strong className="text-text-primary">BIP Key Activation Fee:</strong> The USDTFlasherPro software requires payment of an activation fee to activate your BIP key directly from within the software. This fee is separate from your initial license purchase and is required for full software functionality.
                  </p>
                  <p>
                    <strong className="text-text-primary">Wallet Balance Requirement:</strong> You may be required to maintain a real balance in the wallet from which your BIP key was generated. This requirement ensures proper software operation and may vary depending on your chosen license plan and intended usage.
                  </p>
                  <p>
                    <strong className="text-text-primary">Key Security:</strong> You are solely responsible for securing your BIP key and wallet credentials. USDTFlasherPro does not store or have access to your private keys or wallet information.
                  </p>
                </div>
              </section>

              {/* Section 3: License Grant */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">3. License Grant</h2>
                <p className="text-text-secondary mb-4">
                  Subject to your compliance with these Terms, USDTFlasherPro grants you a limited, non-exclusive, non-transferable license to use the software according to your purchased plan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Demo License: Limited functionality for testing purposes</li>
                  <li>Starter Plan: $5,000 daily flash limit for 1 month</li>
                  <li>Basic Plan: $10,000 daily flash limit for 1 month</li>
                  <li>Professional Plan: $1,000,000 daily flash limit for 1 year</li>
                  <li>Enterprise Plan: $20,000,000 daily flash limit for 1 year</li>
                  <li>Lifetime License: Unlimited flash amounts with lifetime access</li>
                </ul>
              </section>

              {/* Section 4: Refund Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Refund Policy</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    <strong className="text-text-primary">30-Day Refund Guarantee:</strong> If you are not satisfied with USDTFlasherPro software, you may request a refund within 30 days of your purchase date.
                  </p>
                  <p>
                    <strong className="text-text-primary">Refund Processing:</strong> All approved refunds will be processed within 30 business days from the date of approval. Refunds will be issued to the original payment method used for the purchase.
                  </p>
                  <p>
                    <strong className="text-text-primary">Refund Conditions:</strong> To be eligible for a refund, you must provide proof of purchase and demonstrate that you have attempted to use the software with our technical support team. Refunds may be denied for misuse or violation of these terms.
                  </p>
                </div>
              </section>

              {/* Section 5: Prohibited Uses */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Prohibited Uses</h2>
                <p className="text-text-secondary mb-4">You agree not to use USDTFlasherPro software for:</p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Any illegal or fraudulent activities</li>
                  <li>Money laundering or terrorist financing</li>
                  <li>Circumventing exchange security measures</li>
                  <li>Creating fake transactions for deceptive purposes</li>
                  <li>Violating any local, state, national, or international laws</li>
                  <li>Reverse engineering, decompiling, or attempting to extract source code</li>
                </ul>
              </section>

              {/* Section 6: Technical Support */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Technical Support</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    <strong className="text-text-primary">Support Channels:</strong> Technical support is provided via email and Telegram. Support level varies by license plan, with priority support available for Professional, Enterprise, and Lifetime license holders.
                  </p>
                  <p>
                    <strong className="text-text-primary">Response Times:</strong> We aim to respond to support requests within 24-48 hours. Priority support receives faster response times during business hours.
                  </p>
                </div>
              </section>

              {/* Section 7: Software Updates */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Software Updates</h2>
                <p className="text-text-secondary">
                  USDTFlasherPro may release updates, patches, and new versions of the software. Your license includes access to updates during your license period. Lifetime license holders receive updates indefinitely.
                </p>
              </section>

              {/* Section 8: Disclaimer and Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">8. Disclaimer and Limitation of Liability</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    <strong className="text-text-primary">Use at Your Own Risk:</strong> USDTFlasherPro software is provided "as is" without any warranties. You acknowledge that cryptocurrency trading involves significant risk and that you use the software at your own risk.
                  </p>
                  <p>
                    <strong className="text-text-primary">No Guarantee of Profits:</strong> We do not guarantee any specific financial results from using our software. Past performance does not indicate future results.
                  </p>
                  <p>
                    <strong className="text-text-primary">Limitation of Liability:</strong> Our total liability shall not exceed the amount you paid for the software license. We are not liable for any indirect, incidental, or consequential damages.
                  </p>
                </div>
              </section>

              {/* Section 9: Privacy and Data Protection */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">9. Privacy and Data Protection</h2>
                <p className="text-text-secondary">
                  We collect minimal personal information necessary to provide our services. We do not store your private keys, wallet addresses, or transaction details. All personal data is handled in accordance with applicable privacy laws.
                </p>
              </section>

              {/* Section 10: Termination */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">10. Termination</h2>
                <p className="text-text-secondary">
                  We reserve the right to terminate your license immediately if you violate these Terms of Use. Upon termination, you must cease all use of the software and delete all copies from your devices.
                </p>
              </section>

              {/* Section 11: Governing Law */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">11. Governing Law</h2>
                <p className="text-text-secondary">
                  These Terms are governed by international commercial law. Any disputes will be resolved through binding arbitration.
                </p>
              </section>

              {/* Section 12: Changes to Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">12. Changes to Terms</h2>
                <p className="text-text-secondary">
                  We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on our website. Your continued use of the software constitutes acceptance of any changes.
                </p>
              </section>

              {/* Contact Information */}
              <section className="border-t border-gray-700 pt-8">
                <h2 className="text-2xl font-semibold text-text-primary mb-4">Contact Information</h2>
                <div className="space-y-2 text-text-secondary">
                  <p><strong className="text-text-primary">Email:</strong> usdtflasherpro@gmail.com</p>
                  <p><strong className="text-text-primary">Telegram:</strong> @usdtflasherpro</p>
                  <p><strong className="text-text-primary">Website:</strong> https://usdtflasherpro.cc</p>
                </div>
                <p className="text-sm text-text-secondary mt-4">
                  For refund requests, technical support, or any questions regarding these Terms of Use, please contact us using the information above.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
