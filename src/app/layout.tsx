import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LoadingProvider from '@/components/LoadingProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AKKUS - Modern Teknolojinin Öncüsü',
  description: 'Yenilikçi çözümler, etkileyici projeler. AKKUS ile geleceğin teknolojisini keşfedin.',
  keywords: 'teknoloji, yazılım, projeler, AKKUS, modern teknoloji',
  authors: [{ name: 'AKKUS Team' }],
  openGraph: {
    title: 'AKKUS - Modern Teknolojinin Öncüsü',
    description: 'Yenilikçi çözümler, etkileyici projeler. AKKUS ile geleceğin teknolojisini keşfedin.',
    type: 'website',
    locale: 'tr_TR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-primary-black text-primary-white antialiased`}>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}
