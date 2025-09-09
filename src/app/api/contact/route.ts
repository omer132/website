import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    console.log('=== EMAIL API CALLED ===')
    const { name, email, subject, message } = await request.json()
    console.log('Received data:', { name, email, subject, message })

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
        pass: process.env.SMTP_PASS || 'sarh gzbz qlbm snvb',
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
      to: process.env.CONTACT_EMAIL || 'omer.akkus4661@gmail.com',
      subject: `🚀 AKKUS - Yeni İletişim Mesajı: ${subject}`,
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
                <img src="/AKKUSwhite.png" alt="AKKUS Logo" style="max-width: 120px; height: auto; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
              </div>
              <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px; font-weight: 300;">Modern Teknolojinin Öncüsü</p>
            </div>
            
            <!-- Content Area -->
            <div style="padding: 40px 30px;">
              
              <!-- Status Badge -->
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; background: linear-gradient(135deg, #00f5ff, #8A2BE2); color: white; padding: 12px 25px; border-radius: 25px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 15px rgba(0,245,255,0.3);">
                  📧 Yeni İletişim Mesajı
                </div>
              </div>
              
              <!-- Sender Info Card -->
              <div style="background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%); border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #00f5ff; box-shadow: 0 5px 20px rgba(0,245,255,0.1);">
                <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #00f5ff; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">👤</span>
                  Gönderen Bilgileri
                </h3>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <span style="color: #00f5ff; font-weight: 600; min-width: 80px;">Ad Soyad:</span>
                    <span style="color: #2c3e50; font-weight: 500;">${name}</span>
                  </div>
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <span style="color: #00f5ff; font-weight: 600; min-width: 80px;">E-posta:</span>
                    <span style="color: #2c3e50; font-weight: 500;">${email}</span>
                  </div>
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <span style="color: #00f5ff; font-weight: 600; min-width: 80px;">Konu:</span>
                    <span style="color: #2c3e50; font-weight: 500;">${subject}</span>
                  </div>
                </div>
              </div>
              
              <!-- Message Card -->
              <div style="background: linear-gradient(135deg, #fff5f8 0%, #f0f8ff 100%); border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #8A2BE2; box-shadow: 0 5px 20px rgba(138,43,226,0.1);">
                <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #8A2BE2; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">💬</span>
                  Mesaj İçeriği
                </h3>
                <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 3px 12px rgba(0,0,0,0.08); border: 1px solid rgba(138,43,226,0.1);">
                  <p style="line-height: 1.7; color: #2c3e50; margin: 0; font-size: 15px; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <!-- Timestamp -->
              <div style="text-align: center; margin: 30px 0;">
                <div style="display: inline-block; background: rgba(0,245,255,0.1); color: #00f5ff; padding: 10px 20px; border-radius: 20px; font-size: 13px; font-weight: 500;">
                  📅 ${new Date().toLocaleString('tr-TR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 25px 30px; text-align: center;">
              <p style="color: rgba(255,255,255,0.8); margin: 0 0 15px 0; font-size: 14px; line-height: 1.5;">
                Bu mesaj AKKUS website iletişim formundan otomatik olarak gönderilmiştir.
              </p>
              <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 15px;">
                <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">
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

    // Kullanıcıya otomatik onay e-postası gönder
    const confirmationMailOptions = {
      from: process.env.SMTP_USER || 'destekakkus@gmail.com',
      to: email,
      subject: '✅ AKKUS - Mesajınız Başarıyla Alınmıştır',
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
                <img src="/AKKUSwhite.png" alt="AKKUS Logo" style="max-width: 120px; height: auto; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
              </div>
              <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px; font-weight: 300;">Modern Teknolojinin Öncüsü</p>
            </div>
            
            <!-- Content Area -->
            <div style="padding: 40px 30px;">
              
              <!-- Success Badge -->
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; background: linear-gradient(135deg, #00C851, #00f5ff); color: white; padding: 15px 30px; border-radius: 25px; font-size: 18px; font-weight: 600; box-shadow: 0 6px 20px rgba(0,200,81,0.3);">
                  ✅ Mesajınız Başarıyla Alınmıştır
                </div>
              </div>
              
              <!-- Welcome Message -->
              <div style="background: linear-gradient(135deg, #e8f5e8 0%, #f0f8ff 100%); border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #00C851; box-shadow: 0 5px 20px rgba(0,200,81,0.1);">
                <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #00C851; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">👋</span>
                  Merhaba ${name},
                </h3>
                <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 3px 12px rgba(0,0,0,0.08);">
                  <p style="line-height: 1.7; color: #2c3e50; margin: 0; font-size: 15px;">
                    AKKUS'a gönderdiğiniz mesaj başarıyla alınmıştır. Değerli görüşleriniz bizim için çok önemli. En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              </div>
              
              <!-- Message Details Card -->
              <div style="background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%); border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #00f5ff; box-shadow: 0 5px 20px rgba(0,245,255,0.1);">
                <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #00f5ff; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">📋</span>
                  Mesaj Detayları
                </h3>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <span style="color: #00f5ff; font-weight: 600; min-width: 80px;">Konu:</span>
                    <span style="color: #2c3e50; font-weight: 500;">${subject}</span>
                  </div>
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <span style="color: #00f5ff; font-weight: 600; min-width: 80px;">Tarih:</span>
                    <span style="color: #2c3e50; font-weight: 500;">${new Date().toLocaleString('tr-TR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric', 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}</span>
                  </div>
                </div>
                <div style="margin-top: 15px; padding: 15px; background: white; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                  <p style="color: #00f5ff; font-weight: 600; margin: 0 0 10px 0; font-size: 14px;">Mesajınız:</p>
                  <p style="line-height: 1.6; color: #2c3e50; margin: 0; font-size: 14px; white-space: pre-wrap; background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 3px solid #00f5ff;">${message}</p>
                </div>
              </div>
              
              <!-- Next Steps Card -->
              <div style="background: linear-gradient(135deg, #fff5f8 0%, #f0f8ff 100%); border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #8A2BE2; box-shadow: 0 5px 20px rgba(138,43,226,0.1);">
                <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #8A2BE2; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">🚀</span>
                  Sonraki Adımlar
                </h3>
                <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 3px 12px rgba(0,0,0,0.08);">
                  <div style="display: grid; gap: 15px;">
                    <div style="display: flex; align-items: center; padding: 12px; background: linear-gradient(135deg, #f8f9ff, #e8f4fd); border-radius: 10px; border-left: 4px solid #00f5ff;">
                      <span style="background: #00f5ff; color: white; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">1</span>
                      <span style="color: #2c3e50; font-weight: 500;">Mesajınız ekibimiz tarafından incelenecek</span>
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px; background: linear-gradient(135deg, #f8f9ff, #e8f4fd); border-radius: 10px; border-left: 4px solid #00f5ff;">
                      <span style="background: #00f5ff; color: white; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">2</span>
                      <span style="color: #2c3e50; font-weight: 500;">24 saat içinde size dönüş yapılacak</span>
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px; background: linear-gradient(135deg, #fff5f8, #f0f8ff); border-radius: 10px; border-left: 4px solid #8A2BE2;">
                      <span style="background: #8A2BE2; color: white; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">📞</span>
                      <span style="color: #2c3e50; font-weight: 500;">Acil durumlar için: <strong>+90 552 507 91 46</strong></span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Contact Info -->
              <div style="text-align: center; margin: 30px 0;">
                <div style="display: inline-block; background: linear-gradient(135deg, #00f5ff, #8A2BE2); color: white; padding: 15px 25px; border-radius: 25px; font-size: 14px; font-weight: 600; box-shadow: 0 4px 15px rgba(0,245,255,0.3);">
                  💼 AKKUS - Modern Teknolojinin Öncüsü
                </div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 25px 30px; text-align: center;">
              <p style="color: rgba(255,255,255,0.8); margin: 0 0 15px 0; font-size: 14px; line-height: 1.5;">
                Bu otomatik bir onay e-postasıdır. Lütfen yanıtlamayın.
              </p>
              <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 15px;">
                <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">
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
      await transporter.sendMail(confirmationMailOptions)
      console.log('Confirmation email sent successfully to:', email)
    } catch (confirmationError) {
      console.error('Confirmation email failed:', confirmationError)
      // Onay e-postası başarısız olsa bile ana e-posta gönderildiği için hata döndürmüyoruz
    }

    return NextResponse.json(
      { message: 'Mesaj başarıyla gönderildi! Onay e-postası gönderildi.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('=== EMAIL ERROR ===')
    console.error('Email gönderme hatası:', error)
    
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
