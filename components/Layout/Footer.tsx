import Link from 'next/link'
import { Mail, MessageCircle, Twitter } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    main: [
      { name: 'Home', href: '#home' },
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Blog', href: 'https://usdtflasherpro.blog/', external: true },
      { name: 'Contact', href: '#contact' },
      { name: 'Documentation', href: '#' },
    ],
    legal: [
      { name: 'Terms of Use', href: '/terms-of-use' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Refund Policy', href: '#' },
    ],
  }

  return (
    <footer className="bg-footer-bg border-t border-gray-800">
      <div className="container-max">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-button-text font-bold text-lg">UP</span>
                </div>
                <span className="text-primary font-bold text-xl">USDTFlasherPro</span>
              </Link>
              <p className="text-text-secondary mb-6 max-w-md">
                The most advanced USDT flashing software on the market. Fast, secure, and easy to use 
                with full blockchain integration and multi-exchange support.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="text-text-primary font-semibold mb-3">Stay Updated</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input-field flex-1"
                  />
                  <button className="btn-primary">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Main Links */}
            <div>
              <h4 className="text-text-primary font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {footerLinks.main.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-text-secondary hover:text-primary transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-text-primary font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 mb-6">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div>
                <h4 className="text-text-primary font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://t.me/usdtflasherpro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                    aria-label="Telegram"
                  >
                    <MessageCircle size={20} />
                  </a>
                  <a
                    href="https://twitter.com/usdtflasherpro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="mailto:usdtflasherpro@gmail.com"
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm">
              © 2025 USDTFlasherPro. All rights reserved.
            </p>
            <p className="text-text-secondary text-sm mt-2 sm:mt-0">
              Made with ❤️ for the crypto community
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 