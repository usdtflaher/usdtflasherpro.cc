import { useState } from 'react'
import Layout from '../components/Layout/Layout'
import UserInfoStep from '../components/Pricing/UserInfoStep'
import PaymentStep from '../components/Pricing/PaymentStep'
import VerificationStep from '../components/Pricing/VerificationStep'
import { motion } from 'framer-motion'

export interface UserInfo {
  name: string
  email: string
  phone: string
  selectedPlan: string
}

export interface PaymentInfo {
  method: 'usdt' | 'btc'
  address: string
  amount: string
}

const PricingPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    phone: '',
    selectedPlan: ''
  })
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    method: 'usdt',
    address: '',
    amount: ''
  })

  const steps = [
    { number: 1, title: 'User Information', description: 'Enter your details' },
    { number: 2, title: 'Payment', description: 'Choose payment method' },
    { number: 3, title: 'Verification', description: 'Verify your payment' }
  ]

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <UserInfoStep
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            onNext={handleNextStep}
          />
        )
      case 2:
        return (
          <PaymentStep
            userInfo={userInfo}
            paymentInfo={paymentInfo}
            setPaymentInfo={setPaymentInfo}
            onNext={handleNextStep}
            onPrev={handlePrevStep}
          />
        )
      case 3:
        return (
          <VerificationStep />
        )
      default:
        return null
    }
  }

  return (
    <Layout
      title="Pricing & Payment - USDTFlasherPro"
      description="Purchase your USDT Flasher Pro license. Choose from Demo, 2-Year, or Lifetime plans with secure payment options."
    >
      <div className="min-h-screen bg-background pt-20">
        <div className="container-max section-padding">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading text-text-primary mb-4">
              Complete Your <span className="text-gradient">Purchase</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Follow these simple steps to purchase your USDT Flasher Pro license
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                        currentStep >= step.number
                          ? 'bg-primary text-button-text'
                          : 'bg-card-bg text-text-secondary border-2 border-gray-600'
                      }`}
                      animate={{ scale: currentStep === step.number ? 1.1 : 1 }}
                    >
                      {step.number}
                    </motion.div>
                    <div className="text-center mt-2">
                      <div className={`text-sm font-medium ${
                        currentStep >= step.number ? 'text-primary' : 'text-text-secondary'
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {step.description}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-4 transition-all duration-300 ${
                      currentStep > step.number ? 'bg-primary' : 'bg-gray-600'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="max-w-2xl mx-auto">
            {renderStep()}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PricingPage 