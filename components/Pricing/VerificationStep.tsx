import { motion } from 'framer-motion'
import { CheckCircle, Clock, ArrowLeft } from 'lucide-react'

const VerificationStep = () => {

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="card text-center"
    >
      <div className="mb-6">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Clock size={64} className="text-primary" />
        </div>
        <h2 className="text-2xl font-heading text-text-primary mb-2">
          Verifying Your Payment
        </h2>
        <p className="text-text-secondary mb-4">
          Please wait while we verify your blockchain transaction...
        </p>
        <div className="bg-info/10 border border-info/30 rounded-card p-4">
          <p className="text-sm text-text-secondary">
            Once payment is verified, your license key, software download link, and setup instructions will be sent to your email address.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto mb-6">
        <div className="text-sm text-text-secondary space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-success" />
            <span>Payment details received</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-success" />
            <span>Blockchain network contacted</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-text-secondary" />
            <span>Checking transaction confirmation...</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href="/"
          className="btn-secondary flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>
      </div>
    </motion.div>
  )
}

export default VerificationStep 