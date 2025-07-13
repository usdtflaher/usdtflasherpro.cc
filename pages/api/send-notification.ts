import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { userInfo, paymentInfo } = req.body

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NOTIFICATION_EMAIL,
        pass: process.env.NOTIFICATION_PASSWORD
      }
    })

    // Get plan name
    const planName = userInfo.selectedPlan === 'demo' ? 'Demo License ($15)' : 
                     userInfo.selectedPlan === '2year' ? '2-Year License ($3,000)' : 
                     'Lifetime License ($5,000)'

    // Get payment method name
    const paymentMethodName = paymentInfo.method === 'usdt' ? 'USDT (TRC20)' : 'Bitcoin (BTC)'

    // Email content
    const emailContent = `
    🚨 NEW PAYMENT VERIFICATION REQUEST

    Customer Details:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    👤 Name: ${userInfo.name}
    📧 Email: ${userInfo.email}  
    📱 Phone: ${userInfo.phone}

    Order Details:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    📦 License Plan: ${planName}
    💳 Payment Method: ${paymentMethodName}
    💰 Amount: ${paymentInfo.amount} ${paymentInfo.method.toUpperCase()}
    
    Payment Address Used:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    ${paymentInfo.address}

    ⏰ Timestamp: ${new Date().toLocaleString()}
    
    Action Required: Please verify the payment on the blockchain and process the license delivery.
    `

    // Send email
    await transporter.sendMail({
      from: process.env.NOTIFICATION_EMAIL,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `🔔 New Payment Verification - ${userInfo.name} - ${planName}`,
      text: emailContent
    })

    res.status(200).json({ success: true, message: 'Notification sent successfully' })
  } catch (error) {
    console.error('Error sending notification:', error)
    res.status(500).json({ success: false, message: 'Failed to send notification' })
  }
} 