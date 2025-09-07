'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Hakkımızda', href: '/hakkimizda' },
      { name: 'Projeler', href: '/projeler' },
      { name: 'Kariyer', href: '/kariyer' },
      { name: 'Blog', href: '/blog' },
    ],
    services: [
      { name: 'Web Geliştirme', href: '/hizmetler/web-gelistirme' },
      { name: 'Mobil Uygulama', href: '/hizmetler/mobil-uygulama' },
      { name: 'Yapay Zeka', href: '/hizmetler/yapay-zeka' },
      { name: 'Blockchain', href: '/hizmetler/blockchain' },
    ],
    support: [
      { name: 'İletişim', href: '/iletisim' },
      { name: 'Destek', href: '/destek' },
      { name: 'SSS', href: '/sss' },
      { name: 'Dokümantasyon', href: '/dokumantasyon' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/akkus', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/akkus', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/akkus', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/akkus', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/akkus', label: 'GitHub' },
  ]

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-primary-black border-t border-gray-800">
      <div className="container-custom px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/AKKUSwhite.png"
                alt="AKKUS Logo"
                width={1000}
                height={280}
                className="h-40 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              <span className="bg-gradient-to-r from-primary-neon-blue via-primary-neon-purple to-primary-neon-orange bg-clip-text text-transparent font-bold text-lg glow-text">
                AKKUS
              </span>{' '}
              modern teknolojinin öncüsü olarak, yenilikçi çözümler ve etkileyici 
              projeler ile geleceği şekillendiriyoruz.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-primary-neon-blue" />
                <span>info@akkus.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} className="text-primary-neon-blue" />
                <span>+90 (212) 555 0123</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} className="text-primary-neon-blue" />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-primary-white mb-6">Şirket</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-neon-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-primary-white mb-6">Hizmetler</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-neon-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-primary-white mb-6">Destek</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-neon-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="text-center">
            <h4 className="text-xl font-semibold text-primary-white mb-4">
              Güncel Kalın
            </h4>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              En son teknoloji haberleri ve projelerimizden haberdar olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:border-primary-neon-blue transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary-neon-blue to-primary-neon-purple text-primary-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-neon-blue/50 transition-all duration-300 transform hover:scale-105">
                Abone Ol
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © {currentYear} AKKUS. Tüm hakları saklıdır.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-800 hover:bg-primary-neon-blue/20 text-gray-300 hover:text-primary-neon-blue rounded-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
