import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    console.log('=== RESEND EMAIL API CALLED ===')
    const { name, email, subject, message } = await request.json()
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz' },
        { status: 400 }
      )
    }

    console.log('Contact form data:', { name, email, subject, message })

    // Check if Resend API key is set
    if (!resend || !process.env.RESEND_API_KEY) {
      console.log('Resend API key not set, using test mode')
      return NextResponse.json(
        { message: 'Mesaj başarıyla alındı! (Test modu - Resend API key eksik)' },
        { status: 200 }
      )
    }

    // Send main email to company
    const mainEmailResult = await resend.emails.send({
      from: 'AKKUS Contact <noreply@akkus.com>',
      to: [process.env.CONTACT_EMAIL || 'omer.akkus4661@gmail.com'],
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
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #00f5ff 0%, #8A2BE2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">AKKUS Teknoloji</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Modern Teknolojinin Öncüsü</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; background: linear-gradient(135deg, #00f5ff, #8A2BE2); color: white; padding: 12px 25px; border-radius: 25px; font-size: 16px; font-weight: 600;">
                  📧 Yeni İletişim Mesajı
                </div>
              </div>
              
              <!-- Sender Info -->
              <div style="background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%); border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #00f5ff;">
                <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">👤 Gönderen Bilgileri</h3>
                <div style="display: grid; gap: 12px;">
                  <div style="padding: 12px; background: white; border-radius: 10px;">
                    <strong style="color: #00f5ff;">Ad Soyad:</strong> ${name}
                  </div>
                  <div style="padding: 12px; background: white; border-radius: 10px;">
                    <strong style="color: #00f5ff;">E-posta:</strong> ${email}
                  </div>
                  <div style="padding: 12px; background: white; border-radius: 10px;">
                    <strong style="color: #00f5ff;">Konu:</strong> ${subject}
                  </div>
                </div>
              </div>
              
              <!-- Message -->
              <div style="background: linear-gradient(135deg, #fff5f8 0%, #f0f8ff 100%); border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #8A2BE2;">
                <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">💬 Mesaj İçeriği</h3>
                <div style="background: white; padding: 20px; border-radius: 12px;">
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
              <p style="color: rgba(255,255,255,0.8); margin: 0 0 15px 0; font-size: 14px;">
                Bu mesaj AKKUS website iletişim formundan otomatik olarak gönderilmiştir.
              </p>
              <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">
                © 2024 AKKUS - Modern Teknolojinin Öncüsü | İstanbul, Türkiye
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    console.log('Main email sent:', mainEmailResult.data?.id)

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: 'AKKUS Contact <noreply@akkus.com>',
        to: [email],
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
            
            <div style="max-width: 650px; margin: 20px auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15);">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #00f5ff 0%, #8A2BE2 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">AKKUS Teknoloji</h1>
                <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Modern Teknolojinin Öncüsü</p>
              </div>
              
              <!-- Content -->
              <div style="padding: 40px 30px;">
                <div style="text-align: center; margin-bottom: 30px;">
                  <div style="display: inline-block; background: linear-gradient(135deg, #00C851, #00f5ff); color: white; padding: 15px 30px; border-radius: 25px; font-size: 18px; font-weight: 600;">
                    ✅ Mesajınız Başarıyla Alınmıştır
                  </div>
                </div>
                
                <div style="background: linear-gradient(135deg, #e8f5e8 0%, #f0f8ff 100%); border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #00C851;">
                  <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">👋 Merhaba ${name},</h3>
                  <div style="background: white; padding: 20px; border-radius: 12px;">
                    <p style="line-height: 1.7; color: #2c3e50; margin: 0; font-size: 15px;">
                      AKKUS'a gönderdiğiniz mesaj başarıyla alınmıştır. Değerli görüşleriniz bizim için çok önemli. En kısa sürede size dönüş yapacağız.
                    </p>
                  </div>
                </div>
                
                <div style="background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%); border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #00f5ff;">
                  <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">📋 Mesaj Detayları</h3>
                  <div style="padding: 15px; background: white; border-radius: 10px;">
                    <p style="color: #00f5ff; font-weight: 600; margin: 0 0 10px 0; font-size: 14px;">Konu: ${subject}</p>
                    <p style="line-height: 1.6; color: #2c3e50; margin: 0; font-size: 14px; white-space: pre-wrap; background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 3px solid #00f5ff;">${message}</p>
                  </div>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                  <div style="display: inline-block; background: linear-gradient(135deg, #00f5ff, #8A2BE2); color: white; padding: 15px 25px; border-radius: 25px; font-size: 14px; font-weight: 600;">
                    💼 AKKUS - Modern Teknolojinin Öncüsü
                  </div>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 25px 30px; text-align: center;">
                <p style="color: rgba(255,255,255,0.8); margin: 0 0 15px 0; font-size: 14px;">
                  Bu otomatik bir onay e-postasıdır. Lütfen yanıtlamayın.
                </p>
                <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">
                  © 2024 AKKUS - Modern Teknolojinin Öncüsü | İstanbul, Türkiye
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
      })
      console.log('Confirmation email sent successfully')
    } catch (confirmationError) {
      console.error('Confirmation email failed:', confirmationError)
    }

    return NextResponse.json(
      { message: 'Mesaj başarıyla gönderildi! Onay e-postası gönderildi.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Resend email error:', error)
    
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    
    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    )
  }
}
