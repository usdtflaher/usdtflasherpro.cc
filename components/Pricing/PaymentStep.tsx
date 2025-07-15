import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, ArrowLeft, Bitcoin, DollarSign } from 'lucide-react'
import QRCode from 'react-qr-code'
import { UserInfo, PaymentInfo } from '../../pages/pricing'

interface PaymentStepProps {
  userInfo: UserInfo
  paymentInfo: PaymentInfo
  setPaymentInfo: (info: PaymentInfo) => void
  onNext: () => void
  onPrev: () => void
}

const PaymentStep = ({ userInfo, paymentInfo, setPaymentInfo, onNext, onPrev }: PaymentStepProps) => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
  const [isVerifying, setIsVerifying] = useState(false)

  const paymentMethods = {
    usdt: {
      name: 'USDT (TRC20)',
      address: 'TE3vqAdb5fNdZ9iuVJtMWcuQNHQyPKGNKT',
      icon: DollarSign,
      color: 'text-green-500'
    },
    btc: {
      name: 'Bitcoin (BTC)',
      address: 'bc1q0htx33u2c9ksc66j02h58qzvr9wxkf2zw3nejd',
      icon: Bitcoin,
      color: 'text-orange-500'
    }
  }

  const planPrices = {
    demo: { usdt: '15', btc: '0.00025' },
    '2year': { usdt: '3000', btc: '0.05' },
    'lifetime': { usdt: '5000', btc: '0.083' }
  }

  const selectedMethod = paymentMethods[paymentInfo.method]
  const selectedPlan = userInfo.selectedPlan as keyof typeof planPrices
  const paymentAmount = planPrices[selectedPlan]?.[paymentInfo.method] || '0'

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedAddress(text)
      setTimeout(() => setCopiedAddress(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleMethodChange = (method: 'usdt' | 'btc') => {
    setPaymentInfo({
      ...paymentInfo,
      method,
      address: paymentMethods[method].address,
      amount: planPrices[selectedPlan]?.[method] || '0'
    })
  }

  const handleVerifyPayment = async () => {
    setIsVerifying(true)
    
    try {
      // Validate required fields before sending
      if (!userInfo.name || !userInfo.email || !userInfo.selectedPlan) {
        throw new Error('Please ensure all user information is complete before verifying payment.')
      }

      if (!selectedMethod.address || !paymentAmount) {
        throw new Error('Payment information is incomplete. Please refresh and try again.')
      }

      // Update payment info with current values
      const updatedPaymentInfo = {
        method: paymentInfo.method,
        address: selectedMethod.address,
        amount: paymentAmount
      }
      
      setPaymentInfo(updatedPaymentInfo)

      // Prepare clean data for API
      const requestData = {
        userInfo: {
          name: userInfo.name.trim(),
          email: userInfo.email.trim(),
          phone: userInfo.phone?.trim() || '',
          selectedPlan: userInfo.selectedPlan
        },
        paymentInfo: {
          method: paymentInfo.method,
          address: selectedMethod.address,
          amount: paymentAmount
        }
      }

      console.log('Sending notification with data:', requestData)

      // Send notification email
      const response = await fetch('/api/send-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      })

      console.log('API response status:', response.status)
      
      const responseData = await response.json()
      console.log('API response data:', responseData)

      if (!response.ok) {
        console.error('API error:', responseData)
        throw new Error(responseData.message || responseData.error || 'Failed to send notification')
      }

      console.log('Email notification sent successfully:', responseData)
      
      // Proceed to verification step
      onNext()
    } catch (error) {
      console.error('Error in handleVerifyPayment:', error)
      
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      
      // Show specific error message
      alert(`Error: ${errorMessage}\n\nYou can still proceed, and our team will manually check for your payment.`)
      
      // Still proceed to verification step even if email fails
      onNext()
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="card"
    >
      <h2 className="text-2xl font-heading text-text-primary mb-6">
        Step 2: Payment Details
      </h2>

      {/* Order Summary */}
      <div className="bg-card-bg rounded-card p-4 mb-6">
        <h3 className="font-semibold text-text-primary mb-2">Order Summary</h3>
        <div className="flex justify-between items-center">
          <span className="text-text-secondary">
            {userInfo.selectedPlan === 'demo' ? 'Demo License' : 
             userInfo.selectedPlan === '2year' ? '2-Year License' : 
             'Lifetime License'}
          </span>
          <span className="text-primary font-bold">
            {userInfo.selectedPlan === 'demo' ? '$15' : 
             userInfo.selectedPlan === '2year' ? '$3,000' : 
             '$5,000'}
          </span>
        </div>
        <div className="text-sm text-text-secondary mt-2">
          Customer: {userInfo.name} ({userInfo.email})
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="mb-6">
        <h3 className="font-semibold text-text-primary mb-4">Choose Payment Method</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(paymentMethods).map(([key, method]) => (
            <div
              key={key}
              className={`border rounded-card p-4 cursor-pointer transition-all duration-300 ${
                paymentInfo.method === key
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-600 hover:border-gray-500'
              }`}
              onClick={() => handleMethodChange(key as 'usdt' | 'btc')}
            >
              <div className="flex items-center gap-3">
                <method.icon size={24} className={method.color} />
                <div>
                  <div className="font-semibold text-text-primary">{method.name}</div>
                  <div className="text-sm text-text-secondary">
                    {planPrices[selectedPlan]?.[key as 'usdt' | 'btc']} {key.toUpperCase()}
                  </div>
                </div>
              </div>
              {paymentInfo.method === key && (
                <div className="mt-2">
                  <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center ml-auto">
                    <Check size={12} className="text-button-text" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Payment Details */}
      <div className="bg-card-bg rounded-card p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <selectedMethod.icon size={24} className={selectedMethod.color} />
          <h3 className="font-semibold text-text-primary">
            Pay with {selectedMethod.name}
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Amount to Pay
            </label>
            <div className="text-2xl font-bold text-primary">
              {paymentAmount} {paymentInfo.method.toUpperCase()}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Payment Address
            </label>
            <div className="flex items-center gap-2 bg-background rounded-card p-3">
              <code className="text-sm text-text-primary flex-1 break-all">
                {selectedMethod.address}
              </code>
              <button
                onClick={() => copyToClipboard(selectedMethod.address)}
                className="p-2 hover:bg-primary/10 rounded-button transition-colors duration-200"
                title="Copy address"
              >
                {copiedAddress === selectedMethod.address ? (
                  <Check size={16} className="text-success" />
                ) : (
                  <Copy size={16} className="text-text-secondary" />
                )}
              </button>
            </div>
            {copiedAddress === selectedMethod.address && (
              <p className="text-success text-sm mt-1">Address copied to clipboard!</p>
            )}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-text-primary mb-2">
              QR Code
            </label>
            <div className="flex justify-center p-4 bg-white rounded-card">
              <QRCode
                value={selectedMethod.address}
                size={200}
                level="H"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Instructions */}
      <div className="bg-info/10 border border-info/30 rounded-card p-4 mb-6">
        <h4 className="font-semibold text-info mb-2">Payment Instructions</h4>
        <ol className="text-sm text-text-secondary space-y-1 list-decimal list-inside">
          <li>Send exactly {paymentAmount} {paymentInfo.method.toUpperCase()} to the address above</li>
          <li>Use the same wallet address for the entire payment</li>
          <li>Wait for blockchain confirmation (usually 1-3 minutes)</li>
          <li>Click "Verify Payment" below to confirm your transaction</li>
        </ol>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="btn-secondary flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        
        <button
          onClick={handleVerifyPayment}
          disabled={isVerifying}
          className={`btn-primary px-8 py-3 ${isVerifying ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isVerifying ? 'Sending Verification...' : 'Verify Payment'}
        </button>
      </div>
    </motion.div>
  )
}

export default PaymentStep 