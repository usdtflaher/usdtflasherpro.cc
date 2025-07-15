import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { userInfo, paymentInfo } = req.body

    // Enhanced validation with detailed logging
    if (!userInfo || !paymentInfo) {
      console.error('Missing required data:', { 
        hasUserInfo: !!userInfo, 
        hasPaymentInfo: !!paymentInfo,
        userInfo,
        paymentInfo 
      })
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required data - userInfo and paymentInfo are required' 
      })
    }

    // Validate userInfo fields
    const requiredUserFields = ['name', 'email', 'selectedPlan']
    const missingUserFields = requiredUserFields.filter(field => !userInfo[field])
    
    if (missingUserFields.length > 0) {
      console.error('Missing user fields:', missingUserFields, 'UserInfo:', userInfo)
      return res.status(400).json({ 
        success: false, 
        message: `Missing required user fields: ${missingUserFields.join(', ')}` 
      })
    }

    // Validate paymentInfo fields
    const requiredPaymentFields = ['method', 'address', 'amount']
    const missingPaymentFields = requiredPaymentFields.filter(field => !paymentInfo[field])
    
    if (missingPaymentFields.length > 0) {
      console.error('Missing payment fields:', missingPaymentFields, 'PaymentInfo:', paymentInfo)
      return res.status(400).json({ 
        success: false, 
        message: `Missing required payment fields: ${missingPaymentFields.join(', ')}` 
      })
    }

    // Log successful validation
    console.log('✅ Data validation passed:', {
      userInfo: {
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone || 'not provided',
        selectedPlan: userInfo.selectedPlan
      },
      paymentInfo: {
        method: paymentInfo.method,
        amount: paymentInfo.amount,
        address: paymentInfo.address?.substring(0, 10) + '...'
      }
    })

    // Log environment variables (without exposing password)
    console.log('Email config check:', {
      email: process.env.NOTIFICATION_EMAIL,
      hasPassword: !!process.env.NOTIFICATION_PASSWORD,
      passwordLength: process.env.NOTIFICATION_PASSWORD?.length,
      passwordFormat: process.env.NOTIFICATION_PASSWORD?.includes(' ') ? 'with_spaces' : 'no_spaces'
    })

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.NOTIFICATION_EMAIL,
        pass: process.env.NOTIFICATION_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Test connection
    console.log('🔌 Testing SMTP connection...')
    await transporter.verify()
    console.log('✅ SMTP connection verified')

    // Get plan name safely
    const planName = userInfo.selectedPlan === 'demo' ? 'Demo License ($15)' : 
                     userInfo.selectedPlan === '2year' ? '2-Year License ($3,000)' : 
                     userInfo.selectedPlan === 'lifetime' ? 'Lifetime License ($5,000)' :
                     `Unknown Plan (${userInfo.selectedPlan})`

    // Get payment method name safely
    const paymentMethodName = paymentInfo.method === 'usdt' ? 'USDT (TRC20)' : 
                             paymentInfo.method === 'btc' ? 'Bitcoin (BTC)' :
                             `Unknown Method (${paymentInfo.method})`

    // Create email content safely
    const emailContent = `
🚨 NEW PAYMENT VERIFICATION REQUEST

Customer Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: ${userInfo.name || 'Not provided'}
📧 Email: ${userInfo.email || 'Not provided'}  
📱 Phone: ${userInfo.phone || 'Not provided'}

Order Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 License Plan: ${planName}
💳 Payment Method: ${paymentMethodName}
💰 Amount: ${paymentInfo.amount || 'Not specified'} ${(paymentInfo.method || 'unknown').toUpperCase()}

Payment Address Used:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${paymentInfo.address || 'Not provided'}

⏰ Timestamp: ${new Date().toLocaleString()}

Action Required: Please verify the payment on the blockchain and process the license delivery.
    `

    // Prepare email options
    const mailOptions = {
      from: `"USDTFlasherPro" <${process.env.NOTIFICATION_EMAIL}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `🔔 New Payment Verification - ${userInfo.name || 'Unknown'} - ${planName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>').replace(/━/g, '─')
    }

    console.log('📤 Sending email...')

    // Send email
    const result = await transporter.sendMail(mailOptions)
    
    console.log('✅ Email sent successfully:', {
      messageId: result.messageId,
      response: result.response
    })

    res.status(200).json({ 
      success: true, 
      message: 'Notification sent successfully',
      messageId: result.messageId || 'unknown'
    })

  } catch (error) {
    console.error('❌ Error in send-notification API:', {
      error: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack
      } : error,
      timestamp: new Date().toISOString(),
      requestBody: req.body
    })
    
    // More specific error messages
    let errorMessage = 'Failed to send notification'
    let troubleshootingTip = ''
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login') || error.message.includes('EAUTH')) {
        errorMessage = 'Gmail authentication failed'
        troubleshootingTip = 'Check Gmail app password configuration'
      } else if (error.message.includes('ECONNREFUSED') || error.message.includes('ETIMEDOUT')) {
        errorMessage = 'Could not connect to Gmail servers'
        troubleshootingTip = 'Check internet connection'
      } else if (error.message.includes('Missing required')) {
        errorMessage = error.message
        troubleshootingTip = 'Ensure all form fields are filled'
      }
    }
    
    res.status(500).json({ 
      success: false, 
      message: errorMessage,
      troubleshooting: troubleshootingTip,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    })
  }
} 