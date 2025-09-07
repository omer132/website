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

    // Yeni Gmail uygulama şifresi ile e-posta gönderme
    const emailConfig = {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'destekakkus@gmail.com',
        pass: 'sarh gzbz qlbm snvb', // Yeni Gmail app password
      },
      tls: {
        rejectUnauthorized: false // SSL sertifika sorununu çözer
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
      from: 'destekakkus@gmail.com',
      to: 'omer.akkus4661@gmail.com',
      subject: `AKKUS Website - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background: linear-gradient(135deg, #0f0f23, #1a1a2e); padding: 30px; border-radius: 10px; color: white;">
            <h2 style="color: #00f5ff; margin-bottom: 20px; text-align: center;">AKKUS Website İletişim Formu</h2>
            
            <div style="background-color: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #00f5ff; margin-bottom: 15px;">Gönderen Bilgileri</h3>
              <p><strong>Ad Soyad:</strong> ${name}</p>
              <p><strong>E-posta:</strong> ${email}</p>
              <p><strong>Konu:</strong> ${subject}</p>
            </div>
            
            <div style="background-color: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px;">
              <h3 style="color: #00f5ff; margin-bottom: 15px;">Mesaj</h3>
              <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.2);">
              <p style="color: #888; font-size: 12px;">Bu mesaj AKKUS website iletişim formundan gönderilmiştir.</p>
            </div>
          </div>
        </div>
      `,
    }

    // Send email
    console.log('Attempting to send email...')
    console.log('Email config:', { ...emailConfig, auth: { ...emailConfig.auth, pass: '***' } })
    console.log('Mail options:', mailOptions)
    
    const result = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', result.messageId)

    return NextResponse.json(
      { message: 'Mesaj başarıyla gönderildi!' },
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
