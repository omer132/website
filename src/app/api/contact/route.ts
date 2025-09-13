import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Simple in-memory rate limiting (for production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3 // Max 3 requests per 15 minutes per IP

export async function POST(request: NextRequest) {
  try {
    console.log('=== EMAIL API CALLED ===')
    const { name, email, subject, message } = await request.json()
    console.log('Received data:', { name, email, subject, message })

    // Get client IP address
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'Unknown'
    const timestamp = new Date().toISOString()

    // Rate limiting check
    const now = Date.now()
    const rateLimitKey = ip
    const rateLimitData = rateLimitMap.get(rateLimitKey)
    
    if (rateLimitData) {
      if (now < rateLimitData.resetTime) {
        if (rateLimitData.count >= RATE_LIMIT_MAX_REQUESTS) {
          console.log(`Rate limit exceeded for IP: ${ip}`)
          return NextResponse.json(
            { error: 'Çok fazla istek gönderdiniz. Lütfen 15 dakika sonra tekrar deneyin.' },
            { status: 429 }
          )
        }
        rateLimitData.count++
      } else {
        // Reset the counter
        rateLimitMap.set(rateLimitKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
      }
    } else {
      // First request from this IP
      rateLimitMap.set(rateLimitKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('Validation failed: missing required fields')
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur' },
        { status: 400 }
      )
    }

    // Log the contact form data
    console.log('=== CONTACT FORM DATA RECEIVED ===')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Subject:', subject)
    console.log('Message:', message)
    console.log('Timestamp:', new Date().toISOString())

    // Environment variables'dan email yapılandırması
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

    // Create transporter (using Gmail SMTP)
    const transporter = nodemailer.createTransport(emailConfig)
    
    // Verify connection configuration
    try {
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        { error: 'E-posta servisi yapılandırması hatası. Lütfen daha sonra tekrar deneyin.' },
        { status: 500 }
      )
    }

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || 'destekakkus@gmail.com',
      to: process.env.CONTACT_EMAIL || 'destekakkus@gmail.com',
      subject: `[Site] Yeni İletişim Formu - ${subject}`,
      text: `
AKKUS - Yeni İletişim Mesajı

Gönderen Bilgileri:
- Ad Soyad: ${name}
- E-posta: ${email}
- Konu: ${subject}

Mesaj:
${message}

Teknik Bilgiler:
- IP Adresi: ${ip}
- Tarih: ${new Date(timestamp).toLocaleString('tr-TR')}

Bu mesaj AKKUS website iletişim formundan otomatik olarak gönderilmiştir.
© 2024 AKKUS - Modern Teknolojinin Öncüsü
      `,
      html: `
        <!DOCTYPE html>
        <html lang="tr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>AKKUS İletişim Mesajı</title>
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          
          <!-- Main Container -->
          <div style="max-width: 650px; margin: 20px auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15);">
            
            <!-- Header with Logo -->
            <div style="background: linear-gradient(135deg, #00f5ff 0%, #8A2BE2 100%); padding: 40px 30px; text-align: center; position: relative;">
              <!-- Logo Container with Image -->
              <div style="display: inline-block; background: rgba(255,255,255,0.15); padding: 20px 30px; border-radius: 15px; margin-bottom: 15px; border: 2px solid rgba(255,255,255,0.3); backdrop-filter: blur(10px);">
                <img src="https://akkus.vercel.app/AKKUS.png" alt="AKKUS Logo" style="max-width: 120px; height: auto;">
              </div>
              <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px; font-weight: 300;">Modern Teknolojinin Öncüsü</p>
            </div>
            
            <!-- Content Area -->
            <div style="padding: 40px 30px;">
              
              <!-- Status Badge -->
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; background: #007bff; color: white; padding: 12px 25px; border-radius: 6px; font-size: 16px; font-weight: 600;">
                  📧 Yeni İletişim Mesajı
                </div>
              </div>
              
              <!-- Sender Info Card -->
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #007bff; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #007bff; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">👤</span>
                  Gönderen Bilgileri
                </h3>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">Ad Soyad:</span>
                    <span style="color: #333333; font-weight: 500;">${name}</span>
                  </div>
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">E-posta:</span>
                    <span style="color: #333333; font-weight: 500;">${email}</span>
                  </div>
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">Konu:</span>
                    <span style="color: #333333; font-weight: 500;">${subject}</span>
                  </div>
                </div>
              </div>
              
              <!-- Message Card -->
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #28a745; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #28a745; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">💬</span>
                  Mesaj İçeriği
                </h3>
                <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #e0e0e0;">
                  <p style="line-height: 1.7; color: #333333; margin: 0; font-size: 15px; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <!-- Additional Info -->
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #ffc107; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #ffc107; color: #333333; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">🔍</span>
                  Teknik Bilgiler
                </h3>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">IP Adresi:</span>
                    <span style="color: #333333; font-weight: 500;">${ip}</span>
                  </div>
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">Tarih:</span>
                    <span style="color: #333333; font-weight: 500;">${new Date(timestamp).toLocaleString('tr-TR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric', 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}</span>
                  </div>
                </div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="color: #666666; margin: 0 0 15px 0; font-size: 14px; line-height: 1.5;">
                Bu mesaj AKKUS website iletişim formundan otomatik olarak gönderilmiştir.
              </p>
              <div style="border-top: 1px solid #e0e0e0; padding-top: 15px;">
                <p style="color: #999999; margin: 0; font-size: 12px;">
                  © 2024 AKKUS - Modern Teknolojinin Öncüsü | İstanbul, Türkiye
                </p>
              </div>
            </div>
            
          </div>
          
        </body>
        </html>
      `,
    }

    // Send email
    console.log('Attempting to send email...')
    console.log('Email config:', { ...emailConfig, auth: { ...emailConfig.auth, pass: '***' } })
    console.log('Mail options:', mailOptions)
    
    const result = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', result.messageId)
    
    // Log successful admin email
    console.log('=== ADMIN EMAIL SENT ===')
    console.log('Event: mail_sent')
    console.log('Type: admin_notification')
    console.log('To:', process.env.CONTACT_EMAIL || 'destekakkus@gmail.com')
    console.log('MessageId:', result.messageId)
    console.log('Timestamp:', timestamp)

    // Kullanıcıya otomatik onay e-postası gönder
    const confirmationMailOptions = {
      from: process.env.SMTP_USER || 'destekakkus@gmail.com',
      to: email,
      subject: 'Mesajınız alındı — Teşekkürler',
      text: `
Merhaba ${name},

Mesajınızı aldık. En kısa sürede size dönüş yapacağız.

Gönderdiğiniz konu: ${subject}
Tahmini dönüş süresi: 24-72 saat

Mesajınız:
${message}

Sonraki Adımlar:
1. Mesajınız ekibimiz tarafından incelenecek
2. Tahmini dönüş süresi: 24-72 saat
3. Acil durumlar için: +90 552 507 91 46

İyi günler,
Akkus Destek

Bu otomatik bir onay e-postasıdır. Lütfen yanıtlamayın.
© 2024 AKKUS - Modern Teknolojinin Öncüsü
      `,
      html: `
        <!DOCTYPE html>
        <html lang="tr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>AKKUS Onay Mesajı</title>
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          
          <!-- Main Container -->
          <div style="max-width: 650px; margin: 20px auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15);">
            
            <!-- Header with Logo -->
            <div style="background: linear-gradient(135deg, #00f5ff 0%, #8A2BE2 100%); padding: 40px 30px; text-align: center; position: relative;">
              <!-- Logo Container with Image -->
              <div style="display: inline-block; background: rgba(255,255,255,0.15); padding: 20px 30px; border-radius: 15px; margin-bottom: 15px; border: 2px solid rgba(255,255,255,0.3); backdrop-filter: blur(10px);">
                <img src="https://akkus.vercel.app/AKKUS.png" alt="AKKUS Logo" style="max-width: 120px; height: auto;">
              </div>
              <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px; font-weight: 300;">Modern Teknolojinin Öncüsü</p>
            </div>
            
            <!-- Content Area -->
            <div style="padding: 40px 30px;">
              
              <!-- Success Badge -->
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; background: #28a745; color: white; padding: 15px 30px; border-radius: 6px; font-size: 18px; font-weight: 600;">
                  ✅ Mesajınız Başarıyla Alınmıştır
                </div>
              </div>
              
              <!-- Welcome Message -->
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #28a745; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #28a745; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">👋</span>
                  Merhaba ${name},
                </h3>
                <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #e0e0e0;">
                  <p style="line-height: 1.7; color: #333333; margin: 0; font-size: 15px;">
                    Mesajınızı aldık. En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              </div>
              
              <!-- Message Details Card -->
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #007bff; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #007bff; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">📋</span>
                  Mesaj Detayları
                </h3>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">Konu:</span>
                    <span style="color: #333333; font-weight: 500;">${subject}</span>
                  </div>
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">Tarih:</span>
                    <span style="color: #333333; font-weight: 500;">${new Date().toLocaleString('tr-TR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric', 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}</span>
                  </div>
                </div>
                <div style="margin-top: 15px; padding: 15px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                  <p style="color: #007bff; font-weight: 600; margin: 0 0 10px 0; font-size: 14px;">Mesajınız:</p>
                  <p style="line-height: 1.6; color: #333333; margin: 0; font-size: 14px; white-space: pre-wrap; background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 3px solid #007bff;">${message}</p>
                </div>
              </div>
              
              <!-- Next Steps Card -->
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #ffc107; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #ffc107; color: #333333; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">🚀</span>
                  Sonraki Adımlar
                </h3>
                <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #e0e0e0;">
                  <div style="display: grid; gap: 15px;">
                    <div style="display: flex; align-items: center; padding: 12px; background: #f8f9fa; border-radius: 6px; border-left: 4px solid #007bff;">
                      <span style="background: #007bff; color: white; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">1</span>
                      <span style="color: #333333; font-weight: 500;">Mesajınız ekibimiz tarafından incelenecek</span>
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px; background: #f8f9fa; border-radius: 6px; border-left: 4px solid #007bff;">
                      <span style="background: #007bff; color: white; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">2</span>
                      <span style="color: #333333; font-weight: 500;">Tahmini dönüş süresi: 24-72 saat</span>
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px; background: #f8f9fa; border-radius: 6px; border-left: 4px solid #ffc107;">
                      <span style="background: #ffc107; color: #333333; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">📞</span>
                      <span style="color: #333333; font-weight: 500;">Acil durumlar için: <strong>+90 552 507 91 46</strong></span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Contact Info -->
              <div style="text-align: center; margin: 30px 0;">
                <div style="display: inline-block; background: #007bff; color: white; padding: 15px 25px; border-radius: 6px; font-size: 14px; font-weight: 600;">
                  💼 AKKUS - Modern Teknolojinin Öncüsü
                </div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="color: #666666; margin: 0 0 15px 0; font-size: 14px; line-height: 1.5;">
                Bu otomatik bir onay e-postasıdır. Lütfen yanıtlamayın.
              </p>
              <div style="border-top: 1px solid #e0e0e0; padding-top: 15px;">
                <p style="color: #999999; margin: 0; font-size: 12px;">
                  © 2024 AKKUS - Modern Teknolojinin Öncüsü | İstanbul, Türkiye
                </p>
              </div>
            </div>
            
          </div>
          
        </body>
        </html>
      `,
    }

    // Onay e-postasını gönder
    try {
      const confirmationResult = await transporter.sendMail(confirmationMailOptions)
      console.log('Confirmation email sent successfully to:', email)
      
      // Log successful user confirmation email
      console.log('=== USER CONFIRMATION EMAIL SENT ===')
      console.log('Event: mail_sent')
      console.log('Type: user_confirmation')
      console.log('To:', email)
      console.log('MessageId:', confirmationResult.messageId)
      console.log('Timestamp:', timestamp)
    } catch (confirmationError) {
      console.error('Confirmation email failed:', confirmationError)
      
      // Log failed user confirmation email
      console.log('=== USER CONFIRMATION EMAIL FAILED ===')
      console.log('Event: mail_failed')
      console.log('Type: user_confirmation')
      console.log('To:', email)
      console.log('Error:', confirmationError)
      console.log('Timestamp:', timestamp)
      
      // Onay e-postası başarısız olsa bile ana e-posta gönderildiği için hata döndürmüyoruz
    }

    return NextResponse.json(
      { message: 'Mesaj başarıyla gönderildi! Onay e-postası gönderildi.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('=== EMAIL ERROR ===')
    console.error('Email gönderme hatası:', error)
    
    // Log failed email attempt
    console.log('=== EMAIL SEND FAILED ===')
    console.log('Event: mail_failed')
    console.log('Type: admin_notification')
    console.log('Error:', error)
    console.log('Timestamp:', new Date().toISOString())
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    
    // Log the full error object
    console.error('Full error object:', JSON.stringify(error, null, 2))
    
    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    )
  }
}
