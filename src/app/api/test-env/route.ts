import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const envVars = {
      SMTP_HOST: process.env.SMTP_HOST || 'Not set',
      SMTP_PORT: process.env.SMTP_PORT || 'Not set',
      SMTP_SECURE: process.env.SMTP_SECURE || 'Not set',
      SMTP_USER: process.env.SMTP_USER || 'Not set',
      SMTP_PASS: process.env.SMTP_PASS ? '***' + process.env.SMTP_PASS.slice(-4) : 'Not set',
      CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'Not set',
      RESEND_API_KEY: process.env.RESEND_API_KEY ? '***' + process.env.RESEND_API_KEY.slice(-4) : 'Not set',
      NODE_ENV: process.env.NODE_ENV || 'Not set'
    }

    return NextResponse.json({
      message: 'Environment variables status:',
      environment: envVars,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to check environment variables' },
      { status: 500 }
    )
  }
}
