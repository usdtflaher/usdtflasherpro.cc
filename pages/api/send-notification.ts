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
      passwordLength: process.env.NOTIFICATION_PASSWORD?.length,
      passwordFirstChars: process.env.NOTIFICATION_PASSWORD?.substring(0, 4) + '...'
    })

    // Create transporter with multiple configuration attempts
    const transporterConfigs = [
      // Primary Gmail configuration
      {
        name: 'Gmail SMTP',
        config: {
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
        }
      },
      // Alternative Gmail configuration
      {
        name: 'Gmail Alternative',
        config: {
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.NOTIFICATION_EMAIL,
            pass: process.env.NOTIFICATION_PASSWORD
          },
          tls: {
            rejectUnauthorized: false
          }
        }
      }
    ]

    let transporter: nodemailer.Transporter | null = null
    let transporterUsed = ''

    // Try each configuration
    for (const { name, config } of transporterConfigs) {
      try {
        console.log(`Attempting ${name} configuration...`)
        const testTransporter = nodemailer.createTransport(config)
        
        // Test connection with timeout
        await Promise.race([
          testTransporter.verify(),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 10000))
        ])
        
        console.log(`✅ ${name} connection verified successfully`)
        transporter = testTransporter
        transporterUsed = name
        break
      } catch (verifyError) {
        console.log(`❌ ${name} failed:`, {
          error: verifyError instanceof Error ? verifyError.message : verifyError,
          code: verifyError instanceof Error && 'code' in verifyError ? (verifyError as any).code : 'unknown'
        })
        continue
      }
    }

    // If all configurations failed, try to send anyway (some SMTP servers don't support verify)
    if (!transporter) {
      console.log('All SMTP verifications failed, creating transporter without verification...')
      transporter = nodemailer.createTransport(transporterConfigs[0].config)
      transporterUsed = 'Gmail SMTP (unverified)'
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

    console.log(`Attempting to send email using ${transporterUsed}...`)

    // Send email with retry mechanism
    let emailResult: nodemailer.SentMessageInfo | null = null
    let sendAttempts = 0
    const maxAttempts = 2

    while (sendAttempts < maxAttempts && !emailResult) {
      try {
        sendAttempts++
        console.log(`Email send attempt ${sendAttempts}/${maxAttempts}`)
        
        const result = await Promise.race([
          transporter.sendMail(mailOptions),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Send timeout')), 30000))
        ]) as nodemailer.SentMessageInfo
        
        emailResult = result
        
        console.log('✅ Email sent successfully:', {
          messageId: emailResult.messageId,
          response: emailResult.response,
          transporterUsed
        })
        break
        
      } catch (sendError) {
        console.log(`❌ Email send attempt ${sendAttempts} failed:`, {
          error: sendError instanceof Error ? sendError.message : sendError,
          stack: sendError instanceof Error ? sendError.stack : undefined
        })
        
        if (sendAttempts >= maxAttempts) {
          throw sendError
        }
        
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, 2000))
      }
    }

    res.status(200).json({ 
      success: true, 
      message: 'Notification sent successfully',
      messageId: emailResult?.messageId || 'unknown',
      transporterUsed
    })

  } catch (error) {
    console.error('❌ Final error sending notification:', {
      error: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack,
        code: 'code' in error ? (error as any).code : undefined
      } : error,
      timestamp: new Date().toISOString()
    })
    
    // More specific error messages for troubleshooting
    let errorMessage = 'Failed to send notification'
    let troubleshootingTip = ''
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Gmail authentication failed'
        troubleshootingTip = 'Check if 2FA is enabled and app password is correct'
      } else if (error.message.includes('ECONNREFUSED') || error.message.includes('ETIMEDOUT')) {
        errorMessage = 'Could not connect to Gmail servers'
        troubleshootingTip = 'Check internet connection and firewall settings'
      } else if (error.message.includes('EAUTH')) {
        errorMessage = 'Gmail authentication error'
        troubleshootingTip = 'Regenerate Gmail app password and update .env.local'
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