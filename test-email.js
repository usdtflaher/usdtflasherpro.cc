// Simple Gmail SMTP Test Script
// Run this with: node test-email.js

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmailConnection() {
  console.log('🧪 Testing Gmail SMTP Configuration...\n');
  
  // Log configuration (without password)
  console.log('📧 Configuration:', {
    email: process.env.NOTIFICATION_EMAIL,
    hasPassword: !!process.env.NOTIFICATION_PASSWORD,
    passwordLength: process.env.NOTIFICATION_PASSWORD?.length,
    passwordFirstChars: process.env.NOTIFICATION_PASSWORD?.substring(0, 4) + '...'
  });
  
  const configs = [
    {
      name: 'Gmail SMTP (587)',
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
    {
      name: 'Gmail SMTP (465)',
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
  ];
  
  for (const { name, config } of configs) {
    console.log(`\n🔄 Testing ${name}...`);
    
    try {
      const transporter = nodemailer.createTransport(config);
      
      // Test connection
      console.log('   Verifying connection...');
      await transporter.verify();
      console.log(`   ✅ ${name} connection successful!`);
      
      // Test sending email
      console.log('   Sending test email...');
      const result = await transporter.sendMail({
        from: `"USDTFlasherPro Test" <${process.env.NOTIFICATION_EMAIL}>`,
        to: process.env.NOTIFICATION_EMAIL,
        subject: '🧪 Gmail SMTP Test - ' + new Date().toLocaleString(),
        text: 'This is a test email to verify Gmail SMTP configuration is working correctly.',
        html: '<p>This is a test email to verify Gmail SMTP configuration is working correctly.</p>'
      });
      
      console.log(`   ✅ Email sent successfully!`);
      console.log(`   📧 Message ID: ${result.messageId}`);
      console.log(`   📨 Response: ${result.response}`);
      
      console.log(`\n🎉 SUCCESS: ${name} is working correctly!`);
      return true;
      
    } catch (error) {
      console.log(`   ❌ ${name} failed:`);
      console.log(`   Error: ${error.message}`);
      
      if (error.code) {
        console.log(`   Code: ${error.code}`);
      }
      
      // Specific error suggestions
      if (error.message.includes('Invalid login')) {
        console.log('   💡 Suggestion: Check Gmail app password');
      } else if (error.message.includes('EAUTH')) {
        console.log('   💡 Suggestion: Regenerate Gmail app password');
      } else if (error.message.includes('ECONNREFUSED')) {
        console.log('   💡 Suggestion: Check firewall/network settings');
      }
    }
  }
  
  console.log('\n❌ All configurations failed. Check Gmail settings:\n');
  console.log('📋 Gmail Setup Checklist:');
  console.log('   1. ✓ 2-Factor Authentication enabled');
  console.log('   2. ✓ App Password generated (not account password)');
  console.log('   3. ✓ App Password has no spaces');
  console.log('   4. ✓ Less secure apps disabled (use app password instead)');
  console.log('   5. ✓ Account not locked or suspended\n');
  
  return false;
}

// Run the test
testEmailConnection()
  .then(success => {
    if (success) {
      console.log('🎯 Email configuration is working! You can now use the payment verification.');
    } else {
      console.log('⚠️  Email configuration needs fixing. Follow the checklist above.');
    }
    process.exit(success ? 0 : 1);
  })
  .catch(error => {
    console.error('💥 Unexpected error:', error);
    process.exit(1);
  }); 