'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Code, Rocket, Heart, Send, Home } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Footer from './Footer'



const companyValues = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Takım Ruhu",
    description: "Birlikte çalışarak daha büyük başarılar elde ediyoruz."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "İnovasyon",
    description: "Sürekli öğrenme ve yeni teknolojiler keşfetme tutkusu."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Müşteri Odaklılık",
    description: "Müşterilerimizin başarısı bizim başarımızdır."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Teknik Mükemmellik",
    description: "En yüksek kalitede kod ve çözümler üretiyoruz."
  }
]

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
    resume: null as File | null
  })

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
    alert('Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
  }

  return (
    <>
      <section id="kariyer" className="section-padding bg-gradient-to-br from-primary-black via-gray-900 to-primary-black relative overflow-hidden">
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
            <span className="gradient-text">Bize Katılın</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Geleceğin teknolojisini birlikte şekillendirelim. AKKUS'ta kariyerinizi bir üst seviyeye taşıyın.
          </motion.p>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {companyValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-6 rounded-2xl text-center border border-gray-700/50 hover:border-primary-neon-blue/50 transition-all"
            >
              <div className="text-primary-neon-blue mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-effect p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Başvuru Formu</h3>
            
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
                 <label className="block text-white text-sm font-medium mb-2">Telefon</label>
                 <input
                   type="tel"
                   name="phone"
                   value={formData.phone}
                   onChange={handleFormChange}
                   className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-neon-blue focus:ring-2 focus:ring-primary-neon-blue/20 transition-all"
                   placeholder="+90 5XX XXX XX XX"
                 />
               </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Deneyim Seviyesi</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-primary-neon-blue focus:ring-2 focus:ring-primary-neon-blue/20 transition-all"
                >
                  <option value="">Deneyim seviyesi seçiniz</option>
                  <option value="0-1 yıl">0-1 yıl</option>
                  <option value="1-3 yıl">1-3 yıl</option>
                  <option value="3-5 yıl">3-5 yıl</option>
                  <option value="5+ yıl">5+ yıl</option>
                </select>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">CV/Özgeçmiş</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-primary-neon-blue focus:ring-2 focus:ring-primary-neon-blue/20 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-neon-blue/20 file:text-primary-neon-blue hover:file:bg-primary-neon-blue/30"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Ek Notlar</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-neon-blue focus:ring-2 focus:ring-primary-neon-blue/20 transition-all resize-none"
                  placeholder="Kendiniz hakkında kısa bilgi ve neden bizimle çalışmak istediğinizi belirtebilirsiniz..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-neon-blue to-primary-neon-purple text-white rounded-xl hover:shadow-lg hover:shadow-primary-neon-blue/50 transition-all font-medium"
              >
                <Send size={20} />
                <span>Başvuruyu Gönder</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
    
    <Footer />
  </>
  )
}

export default Careers
