import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Phone, Check } from 'lucide-react'
import { UserInfo } from '../../pages/pricing'

interface UserInfoStepProps {
  userInfo: UserInfo
  setUserInfo: (info: UserInfo) => void
  onNext: () => void
}

const UserInfoStep = ({ userInfo, setUserInfo, onNext }: UserInfoStepProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const plans = [
    {
      id: 'demo',
      name: 'Demo License',
      price: '$15',
      features: [
        'Max flash amount: $40 one time',
        'Flash fully tradable USDT',
        'Swappable/spendable funds',
        '300-day lifespan',
        'Multi-exchange support',
        'P2P compatibility',
        'Regular updates'
      ]
    },
    {
      id: '2year',
      name: '2-Year License',
      price: '$3,000',
      features: [
        'Flash fully tradable USDT',
        'Swappable/spendable funds',
        '300-day lifespan',
        'Multi-exchange support',
        'P2P compatibility',
        'Regular updates',
        'Priority support'
      ]
    },
    {
      id: 'lifetime',
      name: 'Lifetime License',
      price: '$5,000',
      features: [
        'Flash fully tradable USDT',
        'Swappable/spendable funds',
        '300-day lifespan',
        'Multi-exchange support',
        'P2P compatibility',
        'Regular updates',
        'Priority support',
        'Lifetime access'
      ]
    }
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!userInfo.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!userInfo.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!userInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!userInfo.selectedPlan) {
      newErrors.selectedPlan = 'Please select a license plan'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onNext()
    }
  }

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setUserInfo({ ...userInfo, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' })
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
        Step 1: Your Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Plan Selection */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-4">
            Select Your License Plan
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative border rounded-card p-4 cursor-pointer transition-all duration-300 ${
                  userInfo.selectedPlan === plan.id
                    ? 'border-primary bg-primary/10'
                    : 'border-gray-600 hover:border-gray-500'
                }`}
                onClick={() => handleInputChange('selectedPlan', plan.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-text-primary">{plan.name}</h3>
                  <span className="text-primary font-bold">{plan.price}</span>
                </div>
                <ul className="text-sm text-text-secondary space-y-1">
                  {plan.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check size={14} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                  {plan.features.length > 3 && (
                    <li className="text-xs text-text-secondary">
                      +{plan.features.length - 3} more features
                    </li>
                  )}
                </ul>
                {userInfo.selectedPlan === plan.id && (
                  <div className="absolute top-2 right-2">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <Check size={12} className="text-button-text" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {errors.selectedPlan && (
            <p className="text-danger text-sm mt-1">{errors.selectedPlan}</p>
          )}
        </div>

        {/* User Information Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Full Name
            </label>
            <div className="relative">
              <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`input-field pl-10 w-full ${
                  errors.name ? 'border-danger' : ''
                }`}
                placeholder="Enter your full name"
              />
            </div>
            {errors.name && (
              <p className="text-danger text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
              <input
                type="tel"
                value={userInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`input-field pl-10 w-full ${
                  errors.phone ? 'border-danger' : ''
                }`}
                placeholder="Enter your phone number"
              />
            </div>
            {errors.phone && (
              <p className="text-danger text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`input-field pl-10 w-full ${
                errors.email ? 'border-danger' : ''
              }`}
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && (
            <p className="text-danger text-sm mt-1">{errors.email}</p>
          )}
          <p className="text-xs text-text-secondary mt-2">
            Your license key and download link will be sent to this email address
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn-primary px-8 py-3"
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default UserInfoStep 