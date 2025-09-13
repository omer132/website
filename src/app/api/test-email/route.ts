import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    console.log('=== EMAIL TEST API CALLED ===')
    
    // Test email configuration
    const emailConfig = {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || 'destekakkus@gmail.com',
        pass: process.env.SMTP_PASS || 'nucg ullz ojaw snob',
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV !== 'production'
      }
    }

    // Create transporter
    const transporter = nodemailer.createTransport(emailConfig)
    
    // Verify connection
    try {
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        { 
          success: false,
          error: 'SMTP bağlantısı başarısız',
          details: verifyError instanceof Error ? verifyError.message : 'Unknown error'
        },
        { status: 500 }
      )
    }

    // Send test email
    const testMailOptions = {
      from: process.env.SMTP_USER || 'destekakkus@gmail.com',
      to: process.env.CONTACT_EMAIL || 'destekakkus@gmail.com',
      subject: '🧪 AKKUS - E-posta Sistemi Test',
      text: `
AKKUS E-posta Sistemi Test

Bu bir test e-postasıdır.

Test Detayları:
- Tarih: ${new Date().toLocaleString('tr-TR')}
- SMTP Host: ${emailConfig.host}
- SMTP Port: ${emailConfig.port}
- SMTP User: ${emailConfig.auth.user}

E-posta sistemi başarıyla çalışıyor!

© 2024 AKKUS - Modern Teknolojinin Öncüsü
      `,
      html: `
        <!DOCTYPE html>
        <html lang="tr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>AKKUS E-posta Test</title>
        </head>
        <body style="margin: 0; padding: 0; background: #ffffff; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          
          <div style="max-width: 650px; margin: 20px auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: #f8f9fa; padding: 30px; text-align: center; border-bottom: 1px solid #e0e0e0;">
              <div style="display: inline-block; background: #ffffff; padding: 20px 30px; border-radius: 10px; margin-bottom: 15px; border: 1px solid #e0e0e0; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <img src="https://akkus.vercel.app/AKKUS.png" alt="AKKUS Logo" style="max-width: 120px; height: auto;">
              </div>
              <h1 style="color: #333333; margin: 0; font-size: 24px;">🧪 E-posta Sistemi Test</h1>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; background: #28a745; color: white; padding: 15px 30px; border-radius: 6px; font-size: 18px; font-weight: 600;">
                  ✅ Test Başarılı
                </div>
              </div>
              
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #28a745; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px;">Test Detayları</h3>
                <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #e0e0e0;">
                  <p style="margin: 5px 0; color: #333333;"><strong>Tarih:</strong> ${new Date().toLocaleString('tr-TR')}</p>
                  <p style="margin: 5px 0; color: #333333;"><strong>SMTP Host:</strong> ${emailConfig.host}</p>
                  <p style="margin: 5px 0; color: #333333;"><strong>SMTP Port:</strong> ${emailConfig.port}</p>
                  <p style="margin: 5px 0; color: #333333;"><strong>SMTP User:</strong> ${emailConfig.auth.user}</p>
                </div>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <div style="display: inline-block; background: #007bff; color: white; padding: 15px 25px; border-radius: 6px; font-size: 14px; font-weight: 600;">
                  🚀 E-posta sistemi başarıyla çalışıyor!
                </div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="color: #666666; margin: 0; font-size: 14px;">
                Bu bir test e-postasıdır.
              </p>
              <p style="color: #999999; margin: 5px 0 0 0; font-size: 12px;">
                © 2024 AKKUS - Modern Teknolojinin Öncüsü
              </p>
            </div>
            
          </div>
          
        </body>
        </html>
      `,
    }

    const result = await transporter.sendMail(testMailOptions)
    console.log('Test email sent successfully:', result.messageId)

    return NextResponse.json({
      success: true,
      message: 'Test e-postası başarıyla gönderildi',
      messageId: result.messageId,
      timestamp: new Date().toISOString(),
      config: {
        host: emailConfig.host,
        port: emailConfig.port,
        user: emailConfig.auth.user
      }
    })

  } catch (error) {
    console.error('=== EMAIL TEST ERROR ===')
    console.error('Test email error:', error)
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Test e-postası gönderilirken hata oluştu',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
