#!/usr/bin/env node

/**
 * Email Setup Script for AKKUS Website
 * 
 * This script helps you set up email configuration for the contact form.
 * Run this script to get instructions for setting up your email service.
 */

console.log(`
🚀 AKKUS Email Setup Guide
========================

The contact form is currently not working because email configuration is missing.

To fix this, you need to set up environment variables. Here are your options:

📧 OPTION 1: Gmail (Recommended for testing)
-------------------------------------------
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Security > App passwords
   - Create a new app password for "Mail"
   - Copy the generated password

4. Set these environment variables:
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-gmail@gmail.com
   SMTP_PASS=your-app-password-here
   CONTACT_EMAIL=your-contact-email@gmail.com

📧 OPTION 2: SendGrid (Recommended for production)
-------------------------------------------------
1. Sign up at sendgrid.com
2. Get your API key
3. Set these environment variables:
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=your-sendgrid-api-key
   CONTACT_EMAIL=your-contact-email@gmail.com

📧 OPTION 3: Mailgun
--------------------
1. Sign up at mailgun.com
2. Get your SMTP credentials
3. Set these environment variables:
   SMTP_HOST=smtp.mailgun.org
   SMTP_PORT=587
   SMTP_USER=your-mailgun-username
   SMTP_PASS=your-mailgun-password
   CONTACT_EMAIL=your-contact-email@gmail.com

🔧 HOW TO SET ENVIRONMENT VARIABLES:
===================================

For Local Development:
1. Create a .env.local file in your project root
2. Add the variables above to the file
3. Restart your development server

For Vercel Deployment:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add each variable with its value
5. Redeploy your project

⚠️  IMPORTANT SECURITY NOTES:
============================
- Never commit .env files to git
- Use App Passwords for Gmail, not your regular password
- Keep your API keys secure
- Use different credentials for development and production

✅ After setting up, test your contact form to make sure it works!

Need help? Check the VERCEL_EMAIL_SETUP.md file for more details.
`);

// Check if we're in a development environment
if (process.env.NODE_ENV === 'development') {
  console.log(`
🔍 DEVELOPMENT MODE DETECTED
============================
You're running in development mode. Make sure to:
1. Create a .env.local file
2. Add your email configuration
3. Restart the development server
`);
}
