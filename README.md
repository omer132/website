# AKKUS - Modern Teknolojinin Öncüsü

AKKUS web sitesi, şirketin teknoloji alanındaki hizmetlerini, projelerini ve kurumsal kimliğini modern bir şekilde sergileyen, kullanıcı deneyimi odaklı bir web platformudur.

## 🚀 Özellikler

- **Modern Tasarım**: Siyah temalı, minimal ve etkileyici görsel efektler
- **Responsive**: Tüm cihazlara uyumlu (mobile-first yaklaşım)
- **Animasyonlar**: Framer Motion ile smooth animasyonlar
- **SEO Optimized**: Temel SEO optimizasyonu
- **Performance**: Hızlı yükleme ve optimize edilmiş performans
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS

## 🛠️ Teknoloji Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Montserrat, Roboto)

## 📦 Kurulum

1. **Projeyi klonlayın**
   ```bash
   git clone <repository-url>
   cd akkus-website
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Development server'ı başlatın**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın**
   ```
   http://localhost:3000
   ```

## 🏗️ Proje Yapısı

```
akkus-website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   └── Footer.tsx
│   └── lib/
├── public/
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Siyah**: #000000 (arka plan)
- **Beyaz**: #FFFFFF (metin)
- **Neon Mavi**: #00F5FF (vurgular)
- **Neon Turuncu**: #FF6B35 (vurgular)
- **Neon Mor**: #8A2BE2 (vurgular)
- **Neon Yeşil**: #00FF41 (vurgular)

### Tipografi
- **Ana Font**: Poppins
- **İkincil Font**: Montserrat
- **Kod Font**: Roboto

### Animasyonlar
- **Fade In**: Sayfa yüklenme animasyonları
- **Slide Up**: Scroll-based animasyonlar
- **Glow**: Neon efektler
- **Float**: Yüzen elementler
- **Marquee**: Kaydırma efektleri

## 📱 Sayfalar

### Ana Sayfa (/)
- Hero bölümü
- Projeler önizlemesi
- Hakkımızda bölümü
- İletişim bilgileri

### Projeler (/projeler)
- Tüm projelerin listesi
- Filtreleme ve kategori seçimi
- Proje detay sayfaları

### Hakkımızda (/hakkimizda)
- Şirket hikayesi
- Ekip bilgileri
- Misyon ve vizyon
- Değerler

### İletişim (/iletisim)
- İletişim formu
- Konum haritası
- Sosyal medya linkleri

## 🔧 Geliştirme

### Scripts
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint kontrolü
```

### Yeni Bileşen Ekleme
1. `src/components/` klasöründe yeni dosya oluşturun
2. TypeScript interface'lerini tanımlayın
3. Tailwind CSS ile stillendirin
4. Framer Motion animasyonları ekleyin

### Stil Güncelleme
- Global stiller: `src/app/globals.css`
- Tailwind konfigürasyonu: `tailwind.config.js`
- Component-specific stiller: Her bileşenin içinde

## 🚀 Deployment

### Vercel (Önerilen)
1. GitHub'a push edin
2. Vercel'de yeni proje oluşturun
3. GitHub repository'sini bağlayın
4. Otomatik deployment

### Diğer Platformlar
- **Netlify**: `npm run build` sonrası `out` klasörünü deploy edin
- **AWS S3**: Static site hosting
- **Docker**: Containerized deployment

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Otomatik
- **Lazy Loading**: Intersection Observer API

## 🔒 Güvenlik

- **HTTPS**: Production'da zorunlu
- **CSP Headers**: Content Security Policy
- **XSS Protection**: Built-in Next.js protection
- **CSRF Protection**: Server Actions ile

## 📈 Analytics

Google Analytics entegrasyonu için:
1. `src/app/layout.tsx` dosyasına GA script'ini ekleyin
2. Environment variable'ları ayarlayın
3. Custom events tanımlayın

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Email**: info@akkus.com
- **Website**: https://akkus.com
- **LinkedIn**: https://linkedin.com/company/akkus

---

**AKKUS** - Modern Teknolojinin Öncüsü 🚀
