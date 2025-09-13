'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowLeft, Search, Sparkles, Target, Clock } from 'lucide-react'
import Link from 'next/link'
import { useState, useRef } from 'react'
import Footer from '../../components/Footer'

const projects = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description: "Modern ve kullanıcı dostu e-ticaret çözümü. React ve Node.js ile geliştirilmiş tam kapsamlı platform.",
    longDescription: "Bu proje, modern e-ticaret ihtiyaçlarını karşılamak üzere geliştirilmiş kapsamlı bir platformdur. Kullanıcı dostu arayüz, güvenli ödeme sistemi, stok yönetimi ve detaylı analitik raporları içerir.",
    image: "/ecommerce-main.jpg",
    category: "Web Geliştirme",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    link: "/projeler/e-ticaret",
    github: "https://github.com/omer132",
    featured: true,
    year: 2024,
    status: "Tamamlandı",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Mobil Uygulama",
    description: "iOS ve Android için geliştirilmiş cross-platform mobil uygulama. Flutter ile yapılmış, performanslı ve kullanıcı dostu.",
    longDescription: "Cross-platform mobil uygulama geliştirme projesi. Flutter framework kullanılarak hem iOS hem de Android platformları için tek kod tabanından uygulama geliştirildi.",
    image: "/mobile-app-main.jpg",
    category: "Mobil Geliştirme",
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Provider", "GetX"],
    link: "/projeler/mobil-uygulama",
    github: "https://github.com/omer132",
    featured: true,
    year: 2024,
    status: "Tamamlandı",
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "AI Chatbot",
    description: "Yapay zeka destekli müşteri hizmetleri chatbot'u. OpenAI API entegrasyonu ile doğal dil işleme özellikleri.",
    longDescription: "Yapay zeka teknolojilerini kullanarak geliştirilmiş akıllı chatbot sistemi. OpenAI API entegrasyonu ile doğal dil işleme, sentiment analizi ve kişiselleştirilmiş yanıtlar sunar.",
    image: "/ai-chatbot-main.jpg",
    category: "Yapay Zeka",
    technologies: ["Python", "OpenAI", "FastAPI", "PostgreSQL", "NLP", "Redis"],
    link: "/projeler/ai-chatbot",
    github: "https://github.com/omer132",
    featured: false,
    year: 2024,
    status: "Geliştirme Aşamasında",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description: "Gerçek zamanlı veri analizi ve görselleştirme dashboard'u. Büyük veri işleme kapasitesi ile detaylı raporlar.",
    longDescription: "Büyük veri analizi ve görselleştirme platformu. Gerçek zamanlı veri işleme, interaktif grafikler ve detaylı raporlama özellikleri sunar.",
    image: "/data-analytics-main.jpg",
    category: "Veri Analizi",
    technologies: ["Vue.js", "D3.js", "Python", "Redis", "Apache Kafka", "Elasticsearch"],
    link: "/projeler/dashboard",
    github: "https://github.com/omer132",
    featured: false,
    year: 2023,
    status: "Tamamlandı",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    title: "Blockchain DApp",
    description: "Dezentralize uygulama. Ethereum blockchain üzerinde geliştirilmiş akıllı kontratlar ve güvenli işlemler.",
    longDescription: "Ethereum blockchain teknolojisi kullanılarak geliştirilmiş dezentralize uygulama. Akıllı kontratlar, güvenli işlemler ve şeffaf kayıt sistemi ile blockchain'in avantajlarını kullanır.",
    image: "/blockchain-main.jpg",
    category: "Blockchain",
    technologies: ["Solidity", "Web3.js", "React", "MetaMask", "Hardhat", "IPFS"],
    link: "/projeler/blockchain-dapp",
    github: "https://github.com/omer132",
    featured: false,
    year: 2023,
    status: "Tamamlandı",
    color: "from-yellow-500 to-orange-600"
  },
  {
    id: 6,
    title: "IoT Platform",
    description: "Nesnelerin İnterneti cihazları için yönetim platformu. Gerçek zamanlı izleme ve kontrol sistemi.",
    longDescription: "IoT cihazları için kapsamlı yönetim ve izleme platformu. Gerçek zamanlı veri toplama, cihaz kontrolü ve analitik özellikleri sunar.",
    image: "/iot-platform-main.jpg",
    category: "IoT",
    technologies: ["Node.js", "MQTT", "MongoDB", "Docker", "Grafana", "InfluxDB"],
    link: "/projeler/iot-platform",
    github: "https://github.com/omer132",
    featured: false,
    year: 2024,
    status: "Geliştirme Aşamasında",
    color: "from-cyan-500 to-blue-600"
  }
]

const categories = ["Tümü", "Web Geliştirme", "Mobil Geliştirme", "Yapay Zeka", "Veri Analizi", "Blockchain", "IoT"]

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative transform-gpu transition-all duration-700 group-hover:scale-105">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 shadow-2xl">
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
          
          {/* Project Image */}
          <div className="relative h-80 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-4 left-4 flex flex-col gap-2"
            >
              <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full">
                  <Sparkles size={12} className="inline mr-1" />
                  Öne Çıkan
                </span>
              )}
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-4 right-4"
            >
              <span className={`px-3 py-1 backdrop-blur-sm text-sm font-medium rounded-full border ${
                project.status === "Tamamlandı" 
                  ? "bg-green-500/20 text-green-400 border-green-500/30" 
                  : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
              }`}>
                {project.status === "Tamamlandı" ? <Target size={12} className="inline mr-1" /> : <Clock size={12} className="inline mr-1" />}
                {project.status}
              </span>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-neon-blue group-hover:to-primary-neon-purple transition-all duration-300">
                {project.title}
              </h3>
              <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
                {project.year}
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 3).map((tech: string) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gradient-to-r from-primary-neon-purple/20 to-primary-neon-blue/20 text-primary-neon-purple text-xs rounded-full border border-primary-neon-purple/30 backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full border border-gray-600/30">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-3">
                <Link href={project.link}>
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-primary-neon-blue hover:text-white transition-colors"
                  >
                    <span className="text-sm font-medium">Detaylar</span>
                    <ArrowLeft size={16} className="rotate-180" />
                  </motion.button>
                </Link>
                
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </motion.a>
              </div>

              <Link href={project.link}>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gradient-to-r from-primary-neon-blue to-primary-neon-purple text-white rounded-xl hover:shadow-lg hover:shadow-primary-neon-blue/50 transition-all"
                >
                  <ExternalLink size={16} />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
      </div>
    </motion.div>
  )
}

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü")
  const [searchTerm, setSearchTerm] = useState("")
  const containerRef = useRef(null)

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "Tümü" || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-primary-black via-gray-900 to-primary-black relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-neon-blue/10 rounded-full blur-3xl animate-pulse" />
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
            <Link href="/" className="inline-flex items-center space-x-2 text-primary-neon-blue hover:text-white transition-colors mb-8 group">
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowLeft size={20} />
              </motion.div>
              <span className="group-hover:underline">Ana Sayfaya Dön</span>
            </Link>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              <span className="gradient-text">Projelerimiz</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Yenilikçi teknoloji çözümleri ile geliştirdiğimiz projeler. 
              Her proje, modern teknolojiler ve yaratıcı yaklaşımlarla hayata geçirildi.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="relative z-10 container-custom px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="text"
              placeholder="Proje ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-4 bg-gray-900/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-neon-blue focus:ring-2 focus:ring-primary-neon-blue/20 transition-all backdrop-blur-sm"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary-neon-blue to-primary-neon-purple text-white shadow-lg shadow-primary-neon-blue/50"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50 backdrop-blur-sm"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 container-custom px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-gray-400 text-xl">
              <Search size={48} className="mx-auto mb-4 opacity-50" />
              Arama kriterlerinize uygun proje bulunamadı.
            </div>
          </motion.div>
        )}
      </div>

      {/* Stats */}
      <div className="relative z-10 container-custom px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-8 rounded-2xl text-center border border-gray-700/50"
            >
              <div className="text-4xl font-bold text-primary-neon-blue mb-2">
                {projects.length}
              </div>
              <div className="text-gray-300">Toplam Proje</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-8 rounded-2xl text-center border border-gray-700/50"
            >
              <div className="text-4xl font-bold text-primary-neon-orange mb-2">
                {projects.filter(p => p.status === "Tamamlandı").length}
              </div>
              <div className="text-gray-300">Tamamlanan</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-8 rounded-2xl text-center border border-gray-700/50"
            >
              <div className="text-4xl font-bold text-primary-neon-purple mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-300">Teknoloji Alanı</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  )
}

export default ProjectsPage
