'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowLeft, Calendar, Users, Code, Target, Clock, Star, Eye, Download } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useState, useRef } from 'react'
import { use } from 'react'

const projects = [
  {
    id: 1,
    slug: "e-ticaret",
    title: "E-Ticaret Platformu",
    description: "Modern ve kullanıcı dostu e-ticaret çözümü. React ve Node.js ile geliştirilmiş tam kapsamlı platform.",
    longDescription: "Bu proje, modern e-ticaret ihtiyaçlarını karşılamak üzere geliştirilmiş kapsamlı bir platformdur. Kullanıcı dostu arayüz, güvenli ödeme sistemi, stok yönetimi ve detaylı analitik raporları içerir. Mobil uyumlu tasarım ve hızlı yükleme süreleri ile müşteri deneyimini optimize eder.",
    image: "/ecommerce-main.jpg",
    category: "Web Geliştirme",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    link: "/projeler/e-ticaret",
    github: "https://github.com/omer132",
    featured: true,
    year: 2024,
    status: "Tamamlandı",
    color: "from-blue-500 to-purple-600",
    duration: "6 ay",
    team: "4 kişi",
    features: [
      "Kullanıcı kayıt ve giriş sistemi",
      "Ürün katalog yönetimi",
      "Sepet ve ödeme sistemi",
      "Stok takibi",
      "Admin paneli",
      "Analitik dashboard",
      "Mobil uyumlu tasarım",
      "SEO optimizasyonu"
    ],
    challenges: [
      "Yüksek trafik yönetimi",
      "Güvenli ödeme entegrasyonu",
      "Gerçek zamanlı stok takibi",
      "Mobil performans optimizasyonu"
    ],
    solutions: [
      "Redis cache sistemi ile performans artırımı",
      "Stripe API entegrasyonu ile güvenli ödeme",
      "WebSocket ile gerçek zamanlı güncellemeler",
      "Progressive Web App (PWA) özellikleri"
    ],
    images: [
      "/ecommerce-1.jpg",
      "/ecommerce-2.jpg",
      "/ecommerce-3.jpg"
    ]
  },
  {
    id: 2,
    slug: "mobil-uygulama",
    title: "Mobil Uygulama",
    description: "iOS ve Android için geliştirilmiş cross-platform mobil uygulama. Flutter ile yapılmış, performanslı ve kullanıcı dostu.",
    longDescription: "Cross-platform mobil uygulama geliştirme projesi. Flutter framework kullanılarak hem iOS hem de Android platformları için tek kod tabanından uygulama geliştirildi. Hızlı performans, native görünüm ve kullanıcı dostu arayüz tasarımı ile öne çıkıyor.",
    image: "/mobile-app-main.jpg",
    category: "Mobil Geliştirme",
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Provider", "GetX"],
    link: "/projeler/mobil-uygulama",
    github: "https://github.com/omer132",
    featured: true,
    year: 2024,
    status: "Tamamlandı",
    color: "from-green-500 to-teal-600",
    duration: "4 ay",
    team: "3 kişi",
    features: [
      "Cross-platform uygulama",
      "Offline çalışma modu",
      "Push notification sistemi",
      "Kullanıcı profil yönetimi",
      "Sosyal medya entegrasyonu",
      "Çoklu dil desteği",
      "Dark/Light tema",
      "Performans optimizasyonu"
    ],
    challenges: [
      "Platform farklılıkları",
      "Offline veri senkronizasyonu",
      "Push notification yönetimi",
      "Performans optimizasyonu"
    ],
    solutions: [
      "Flutter'ın cross-platform özelliklerini kullanma",
      "SQLite ile yerel veri yönetimi",
      "Firebase Cloud Messaging entegrasyonu",
      "Widget optimizasyonu ve lazy loading"
    ],
    images: [
      "/mobile-app-1.jpg",
      "/mobile-app-2.jpg",
      "/mobile-app-3.jpg"
    ]
  },
  {
    id: 3,
    slug: "ai-chatbot",
    title: "AI Chatbot",
    description: "Yapay zeka destekli müşteri hizmetleri chatbot'u. OpenAI API entegrasyonu ile doğal dil işleme özellikleri.",
    longDescription: "Yapay zeka teknolojilerini kullanarak geliştirilmiş akıllı chatbot sistemi. OpenAI API entegrasyonu ile doğal dil işleme, sentiment analizi ve kişiselleştirilmiş yanıtlar sunar. 7/24 müşteri desteği sağlayarak işletmelerin müşteri hizmetlerini optimize eder.",
    image: "/ai-chatbot-main.jpg",
    category: "Yapay Zeka",
    technologies: ["Python", "OpenAI", "FastAPI", "PostgreSQL", "NLP", "Redis"],
    link: "/projeler/ai-chatbot",
    github: "https://github.com/omer132",
    featured: false,
    year: 2024,
    status: "Geliştirme Aşamasında",
    color: "from-purple-500 to-pink-600",
    duration: "3 ay",
    team: "2 kişi",
    features: [
      "Doğal dil işleme",
      "Sentiment analizi",
      "Kişiselleştirilmiş yanıtlar",
      "Çoklu dil desteği",
      "Konuşma geçmişi",
      "Admin dashboard",
      "API entegrasyonu",
      "Performans izleme"
    ],
    challenges: [
      "Doğal dil anlama",
      "Yanıt kalitesi",
      "API maliyetleri",
      "Ölçeklenebilirlik"
    ],
    solutions: [
      "OpenAI GPT modeli entegrasyonu",
      "Prompt engineering optimizasyonu",
      "Redis cache ile API çağrı optimizasyonu",
      "Microservice mimarisi"
    ],
    images: [
      "/ai-chatbot-1.jpg",
      "/ai-chatbot-2.jpg",
      "/ai-chatbot-3.jpg"
    ]
  },
  {
    id: 4,
    slug: "dashboard",
    title: "Dashboard Analytics",
    description: "Gerçek zamanlı veri analizi ve görselleştirme dashboard'u. Büyük veri işleme kapasitesi ile detaylı raporlar.",
    longDescription: "Büyük veri analizi ve görselleştirme platformu. Gerçek zamanlı veri işleme, interaktif grafikler ve detaylı raporlama özellikleri sunar. İşletmelerin veri odaklı kararlar almasını destekleyen kapsamlı bir analitik çözümü.",
    image: "/data-analytics-main.jpg",
    category: "Veri Analizi",
    technologies: ["Vue.js", "D3.js", "Python", "Redis", "Apache Kafka", "Elasticsearch"],
    link: "/projeler/dashboard",
    github: "https://github.com/omer132",
    featured: false,
    year: 2023,
    status: "Tamamlandı",
    color: "from-orange-500 to-red-600",
    duration: "8 ay",
    team: "5 kişi",
    features: [
      "Gerçek zamanlı veri görselleştirme",
      "İnteraktif grafikler",
      "Veri filtreleme ve arama",
      "Rapor oluşturma",
      "Kullanıcı yetkilendirme",
      "Veri export",
      "Alert sistemi",
      "API entegrasyonu"
    ],
    challenges: [
      "Büyük veri işleme",
      "Gerçek zamanlı güncellemeler",
      "Performans optimizasyonu",
      "Veri güvenliği"
    ],
    solutions: [
      "Apache Kafka ile stream processing",
      "WebSocket ile gerçek zamanlı iletişim",
      "Redis cache ve Elasticsearch optimizasyonu",
      "JWT tabanlı güvenlik sistemi"
    ],
    images: [
      "/data-analytics-1.jpg",
      "/data-analytics-2.jpg",
      "/data-analytics-3.jpg"
    ]
  },
  {
    id: 5,
    slug: "blockchain-dapp",
    title: "Blockchain DApp",
    description: "Dezentralize uygulama. Ethereum blockchain üzerinde geliştirilmiş akıllı kontratlar ve güvenli işlemler.",
    longDescription: "Ethereum blockchain teknolojisi kullanılarak geliştirilmiş dezentralize uygulama. Akıllı kontratlar, güvenli işlemler ve şeffaf kayıt sistemi ile blockchain'in avantajlarını kullanır. Web3 teknolojileri ile modern web standartlarında geliştirildi.",
    image: "/blockchain-main.jpg",
    category: "Blockchain",
    technologies: ["Solidity", "Web3.js", "React", "MetaMask", "Hardhat", "IPFS"],
    link: "/projeler/blockchain-dapp",
    github: "https://github.com/omer132",
    featured: false,
    year: 2023,
    status: "Tamamlandı",
    color: "from-yellow-500 to-orange-600",
    duration: "5 ay",
    team: "3 kişi",
    features: [
      "Akıllı kontrat entegrasyonu",
      "Cüzdan bağlantısı",
      "Token yönetimi",
      "İşlem geçmişi",
      "Güvenli işlemler",
      "Gas optimizasyonu",
      "IPFS depolama",
      "Testnet desteği"
    ],
    challenges: [
      "Gas maliyetleri",
      "Akıllı kontrat güvenliği",
      "Kullanıcı deneyimi",
      "Blockchain entegrasyonu"
    ],
    solutions: [
      "Gas optimizasyonu teknikleri",
      "Audit edilmiş akıllı kontratlar",
      "Kullanıcı dostu arayüz tasarımı",
      "Web3.js ve MetaMask entegrasyonu"
    ],
    images: [
      "/blockchain-1.jpg",
      "/blockchain-2.jpg",
      "/blockchain-3.jpg"
    ]
  },
  {
    id: 6,
    slug: "iot-platform",
    title: "IoT Platform",
    description: "Nesnelerin İnterneti cihazları için yönetim platformu. Gerçek zamanlı izleme ve kontrol sistemi.",
    longDescription: "IoT cihazları için kapsamlı yönetim ve izleme platformu. Gerçek zamanlı veri toplama, cihaz kontrolü ve analitik özellikleri sunar. MQTT protokolü ile güvenli iletişim ve Docker containerization ile kolay deployment sağlar.",
    image: "/iot-platform-main.jpg",
    category: "IoT",
    technologies: ["Node.js", "MQTT", "MongoDB", "Docker", "Grafana", "InfluxDB"],
    link: "/projeler/iot-platform",
    github: "https://github.com/omer132",
    featured: false,
    year: 2024,
    status: "Geliştirme Aşamasında",
    color: "from-cyan-500 to-blue-600",
    duration: "7 ay",
    team: "4 kişi",
    features: [
      "Cihaz yönetimi",
      "Gerçek zamanlı izleme",
      "Veri analizi",
      "Alert sistemi",
      "Dashboard görselleştirme",
      "API entegrasyonu",
      "Güvenlik protokolleri",
      "Ölçeklenebilir mimari"
    ],
    challenges: [
      "Cihaz bağlantı yönetimi",
      "Büyük veri işleme",
      "Güvenlik",
      "Ölçeklenebilirlik"
    ],
    solutions: [
      "MQTT protokolü ile güvenli iletişim",
      "InfluxDB ile zaman serisi veri yönetimi",
      "JWT ve OAuth2 güvenlik",
      "Microservice mimarisi ve Docker"
    ],
    images: [
      "/iot-platform-1.jpg",
      "/iot-platform-2.jpg",
      "/iot-platform-3.jpg"
    ]
  }
]

const ProjectDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = use(params)
  const project = projects.find(p => p.slug === resolvedParams.slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  if (!project) {
    notFound()
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-primary-black via-gray-900 to-primary-black relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${project.color} rounded-full blur-3xl opacity-20 animate-pulse`} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-neon-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-neon-orange/10 rounded-full blur-3xl animate-pulse" />
      </motion.div>

      {/* Header */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <Link href="/projeler" className="inline-flex items-center space-x-2 text-primary-neon-blue hover:text-white transition-colors mb-8 group">
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowLeft size={20} />
              </motion.div>
              <span className="group-hover:underline">Projelere Dön</span>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <span className={`inline-block px-4 py-2 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full mb-4`}>
                {project.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              <span className="gradient-text">{project.title}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              {project.longDescription}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="relative z-10 container-custom px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-6 rounded-2xl text-center border border-gray-700/50"
            >
              <Calendar className="w-8 h-8 text-primary-neon-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{project.year}</div>
              <div className="text-gray-300 text-sm">Yıl</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-6 rounded-2xl text-center border border-gray-700/50"
            >
              <Clock className="w-8 h-8 text-primary-neon-orange mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{project.duration}</div>
              <div className="text-gray-300 text-sm">Süre</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-6 rounded-2xl text-center border border-gray-700/50"
            >
              <Users className="w-8 h-8 text-primary-neon-purple mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{project.team}</div>
              <div className="text-gray-300 text-sm">Ekip</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-6 rounded-2xl text-center border border-gray-700/50"
            >
              <Code className="w-8 h-8 text-primary-neon-green mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{project.technologies.length}</div>
              <div className="text-gray-300 text-sm">Teknoloji</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Project Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-6"
            >
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={project.images[selectedImage]}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-4">
                {project.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-primary-neon-blue' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-8"
            >
              {/* Technologies */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Kullanılan Teknolojiler</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary-neon-purple/20 to-primary-neon-blue/20 text-primary-neon-purple rounded-full border border-primary-neon-purple/30 backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Özellikler</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-primary-neon-blue rounded-full" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-800/50 text-white rounded-xl border border-gray-700/50 hover:bg-gray-700/50 transition-all"
                >
                  <Github size={20} />
                  <span>GitHub'da Görüntüle</span>
                </motion.a>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-neon-blue to-primary-neon-purple text-white rounded-xl hover:shadow-lg hover:shadow-primary-neon-blue/50 transition-all"
                >
                  <Download size={20} />
                  <span>Demo İndir</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="relative z-10 container-custom px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Karşılaşılan Zorluklar</h3>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-effect p-4 rounded-xl border border-red-500/20"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300">{challenge}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Çözümler</h3>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-effect p-4 rounded-xl border border-green-500/20"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300">{solution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="relative z-10 container-custom px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Benzer Projeler</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link key={relatedProject.id} href={relatedProject.link}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-effect p-6 rounded-xl border border-gray-700/50 hover:border-primary-neon-blue/50 transition-all"
                  >
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-bold text-white mb-2">{relatedProject.title}</h4>
                    <p className="text-gray-300 text-sm mb-3">{relatedProject.description}</p>
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${relatedProject.color} text-white text-xs rounded-full`}>
                      {relatedProject.category}
                    </span>
                  </motion.div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail
