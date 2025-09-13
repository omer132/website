# Vercel Email Setup Guide

## Vercel'de Mail Gönderme Sorununu Çözme

Vercel'de mail gönderme işlemi için aşağıdaki adımları takip edin:

### 1. Environment Variables Ayarlama

Vercel Dashboard'da projenize gidin ve Settings > Environment Variables bölümüne gidin. Aşağıdaki değişkenleri ekleyin:

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = destekakkus@gmail.com
SMTP_PASS = nucg ullz ojaw snob
CONTACT_EMAIL = destekakkus@gmail.com
FROM_NAME = "Akkus Destek"
FROM_EMAIL = destekakkus@gmail.com
NODE_ENV = production
```

### 2. Gmail App Password Kullanma

Gmail'de 2FA (Two-Factor Authentication) aktif olmalı ve App Password kullanılmalı:

1. Google Account Settings'e gidin
2. Security > 2-Step Verification'ı aktif edin
3. App passwords bölümünden yeni bir app password oluşturun
4. Bu password'ü SMTP_PASS olarak kullanın

### 3. Vercel Function Timeout

Vercel'de function timeout'u artırmak için `vercel.json` dosyası oluşturun:

```json
{
  "functions": {
    "src/app/api/contact/route.ts": {
      "maxDuration": 30
    }
  }
}
```

### 4. Alternatif Email Servisleri

Gmail yerine daha güvenilir email servisleri kullanabilirsiniz:

#### SendGrid
```
SMTP_HOST = smtp.sendgrid.net
SMTP_PORT = 587
SMTP_USER = apikey
SMTP_PASS = your-sendgrid-api-key
```

#### Mailgun
```
SMTP_HOST = smtp.mailgun.org
SMTP_PORT = 587
SMTP_USER = your-mailgun-username
SMTP_PASS = your-mailgun-password
```

### 5. Test Etme

Environment variables'ları ayarladıktan sonra:

1. Vercel'de projeyi yeniden deploy edin
2. Contact formunu test edin
3. Vercel Function Logs'u kontrol edin

### 6. Troubleshooting

Eğer hala çalışmıyorsa:

1. Vercel Function Logs'u kontrol edin
2. Environment variables'ların doğru ayarlandığından emin olun
3. Gmail App Password'un doğru olduğundan emin olun
4. Network restrictions'ları kontrol edin

### 7. Güvenlik Notları

- App Password'ları asla kod içinde hardcode etmeyin
- Environment variables kullanın
- Production'da NODE_ENV=production ayarlayın
- TLS sertifika kontrollerini production'da aktif bırakın



