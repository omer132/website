'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Target, Award, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

const stats = [
  {
    icon: Users,
    number: 50,
    suffix: "+",
    label: "Mutlu Müşteri",
    description: "Başarıyla tamamlanan proje"
  },
  {
    icon: Target,
    number: 100,
    suffix: "+",
    label: "Tamamlanan Proje",
    description: "Farklı sektörlerde çözümler"
  },
  {
    icon: Award,
    number: 5,
    suffix: "+",
    label: "Yıllık Deneyim",
    description: "Teknoloji sektöründe"
  },
  {
    icon: Zap,
    number: 99,
    suffix: "%",
    label: "Memnuniyet",
    description: "Müşteri odaklılık"
  }
]

const values = [
  {
    title: "Yenilikçilik",
    description: "En son teknolojileri takip ederek müşterilerimize en iyi çözümleri sunuyoruz.",
    color: "from-primary-neon-blue to-primary-neon-purple"
  },
  {
    title: "Kalite",
    description: "Her projede en yüksek kalite standartlarını hedefliyoruz.",
    color: "from-primary-neon-orange to-primary-neon-purple"
  },
  {
    title: "Güvenilirlik",
    description: "Müşterilerimizin güvenini kazanmak için şeffaf ve dürüst çalışıyoruz.",
    color: "from-primary-neon-green to-primary-neon-blue"
  },
  {
    title: "Sürdürülebilirlik",
    description: "Çevre dostu ve uzun vadeli çözümler geliştiriyoruz.",
    color: "from-primary-neon-purple to-primary-neon-orange"
  }
]

// Sayaç animasyonu bileşeni
const Counter = ({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className="text-3xl font-bold text-primary-white">
      {count}{suffix}
    </span>
  )
}

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="hakkimizda" className="section-padding bg-gradient-to-b from-gray-900 to-primary-black">
      <div className="container-custom">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Hakkımızda</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                AKKUS, 2019 yılında teknoloji tutkunları tarafından kurulmuş, 
                yenilikçi dijital çözümler üreten bir teknoloji şirketidir.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Modern teknolojileri kullanarak işletmelerin dijital dönüşümüne 
                öncülük ediyor, müşterilerimizin ihtiyaçlarına özel çözümler 
                geliştiriyoruz. Web geliştirme, mobil uygulama, yapay zeka ve 
                blockchain alanlarında uzmanlaşmış ekibimizle, geleceğin 
                teknolojisini bugünden yaşatıyoruz.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <motion.div 
                className="glass-effect p-6 rounded-xl card-hover"
                whileHover={{ 
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary-neon-blue mb-3">
                  Misyonumuz
                </h3>
                <p className="text-gray-300">
                  Müşterilerimizin dijital dönüşümüne öncülük ederek, 
                  yenilikçi teknoloji çözümleri ile işlerini büyütmelerine 
                  yardımcı olmak.
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-effect p-6 rounded-xl card-hover"
                whileHover={{ 
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary-neon-orange mb-3">
                  Vizyonumuz
                </h3>
                <p className="text-gray-300">
                  Teknoloji sektöründe lider konuma gelerek, Türkiye'nin 
                  dijital geleceğine katkıda bulunmak.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/ecommerce-1.jpg"
                  alt="AKKUS Ekibi"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary-neon-blue to-primary-neon-purple rounded-full opacity-20 blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-primary-neon-orange to-primary-neon-purple rounded-full opacity-20 blur-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="glass-effect p-6 rounded-xl h-full">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-primary-neon-blue to-primary-neon-purple rounded-full">
                    <stat.icon size={24} className="text-primary-white" />
                  </div>
                </div>
                <div className="mb-2">
                  <Counter end={stat.number} suffix={stat.suffix} duration={2} />
                </div>
                <div className="text-primary-neon-blue font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-white mb-4">
              Değerlerimiz
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Çalışma prensiplerimizi oluşturan temel değerlerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <div className="glass-effect p-6 rounded-xl h-full card-hover">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-neon-blue to-primary-neon-purple rounded-full mb-4 group-hover:w-16 transition-all duration-300" />
                  <h4 className="text-xl font-bold text-primary-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
