'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Globe, Building, Home } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Footer from './Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
        console.error('Form submission error:', result.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Network error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      value: "info@akkus.com",
      description: "7/24 e-posta desteği"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      value: "+90 552 507 91 46",
      description: "Pazartesi - Cuma 09:00-18:00"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adres",
      value: "İstanbul, Türkiye",
      description: "Merkez ofisimiz"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Çalışma Saatleri",
      value: "09:00 - 18:00",
      description: "Pazartesi - Cuma"
    }
  ]

  return (
    <>
      <section id="iletisim" className="section-padding bg-gradient-to-br from-primary-black via-gray-900 to-primary-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-neon-blue/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-neon-purple/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white hover:bg-gray-700/50 hover:border-primary-neon-blue/50 transition-all"
              >
                <Home size={20} />
                <span>Anasayfaya Dön</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="gradient-text">İletişim</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Projeleriniz için bizimle iletişime geçin. Modern teknoloji çözümleri ile işinizi büyütelim.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">İletişim Bilgileri</h3>
                <p className="text-gray-300 mb-8">
                  AKKUS olarak müşterilerimizin başarısı için buradayız. 
                  Projeleriniz hakkında konuşmak için bizimle iletişime geçin.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start space-x-4 p-4 glass-effect rounded-xl border border-gray-700/50 hover:border-primary-neon-blue/50 transition-all"
                  >
                    <div className="text-primary-neon-blue mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-primary-neon-blue font-medium">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="glass-effect p-6 rounded-xl border border-gray-700/50"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="w-6 h-6 text-primary-neon-blue" />
                  <h4 className="text-lg font-semibold text-white">AKKUS Teknoloji</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Modern teknolojinin öncüsü olarak, işletmenizi dijital dünyada 
                  bir adım öne taşıyoruz. Yenilikçi çözümler ve güvenilir hizmet 
                  anlayışımızla yanınızdayız.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass-effect p-8 rounded-2xl border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-8">Mesaj Gönderin</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Ad Soyad *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-neon-blue focus:ring-2 focus:ring-primary-neon-blue/20 transition-all"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">E-posta *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-neon-blue focus:ring-2 focus:ring-primary-neon-blue/20 transition-all"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Konu *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-neon-blue focus:ring-2 focus:ring-primary-neon-blue/20 transition-all"
                    placeholder="Mesajınızın konusu"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Mesaj *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-neon-blue focus:ring-2 focus:ring-primary-neon-blue/20 transition-all resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl transition-all font-medium ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-neon-blue to-primary-neon-purple text-white hover:shadow-lg hover:shadow-primary-neon-blue/50'
                  }`}
                >
                  <Send size={20} className={isSubmitting ? 'animate-spin' : ''} />
                  <span>{isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}</span>
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center"
                  >
                    ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center"
                  >
                    ❌ Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 text-center"
          >
            <div className="glass-effect p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Neden AKKUS?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-primary-neon-blue mb-3 flex justify-center">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Hızlı Yanıt</h4>
                  <p className="text-gray-300 text-sm">24 saat içinde yanıt garantisi</p>
                </div>
                <div className="text-center">
                  <div className="text-primary-neon-blue mb-3 flex justify-center">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Modern Teknoloji</h4>
                  <p className="text-gray-300 text-sm">En güncel teknolojiler ile çözümler</p>
                </div>
                <div className="text-center">
                  <div className="text-primary-neon-blue mb-3 flex justify-center">
                    <Building className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Güvenilir Hizmet</h4>
                  <p className="text-gray-300 text-sm">%99 müşteri memnuniyeti</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default Contact
