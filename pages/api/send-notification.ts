import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { userInfo, paymentInfo } = req.body

    // Validate request data
    if (!userInfo || !paymentInfo) {
      console.error('Missing required data:', { userInfo: !!userInfo, paymentInfo: !!paymentInfo })
      return res.status(400).json({ success: false, message: 'Missing required data' })
    }

    // Log environment variables (without exposing password)
    console.log('Email config check:', {
      email: process.env.NOTIFICATION_EMAIL,
      hasPassword: !!process.env.NOTIFICATION_PASSWORD,
      passwordLength: process.env.NOTIFICATION_PASSWORD?.length
    })

    // Create transporter with enhanced Gmail configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.NOTIFICATION_EMAIL,
        pass: process.env.NOTIFICATION_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return res.status(500).json({ 
        success: false, 
        message: 'Email configuration error',
        error: verifyError instanceof Error ? verifyError.message : 'Unknown verification error'
      })
    }

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

    // Prepare email options
    const mailOptions = {
      from: `"USDTFlasherPro" <${process.env.NOTIFICATION_EMAIL}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `🔔 New Payment Verification - ${userInfo.name} - ${planName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>').replace(/━/g, '─')
    }

    console.log('Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    })

    // Send email
    const emailResult = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', {
      messageId: emailResult.messageId,
      response: emailResult.response
    })

    res.status(200).json({ 
      success: true, 
      message: 'Notification sent successfully',
      messageId: emailResult.messageId
    })

  } catch (error) {
    console.error('Detailed error sending notification:', {
      error: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack
      } : error,
      timestamp: new Date().toISOString()
    })
    
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send notification',
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    })
  }
} 