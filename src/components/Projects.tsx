'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description: "Modern ve kullanıcı dostu e-ticaret çözümü. React ve Node.js ile geliştirilmiş tam kapsamlı platform.",
    image: "/ecommerce-main.jpg",
    category: "Web Geliştirme",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "/projeler/e-ticaret",
    github: "https://github.com/omer132",
    featured: true
  },
  {
    id: 2,
    title: "Mobil Uygulama",
    description: "iOS ve Android için geliştirilmiş cross-platform mobil uygulama. Flutter ile yapılmış.",
    image: "/mobile-app-main.jpg",
    category: "Mobil Geliştirme",
    technologies: ["Flutter", "Dart", "Firebase", "REST API"],
    link: "/projeler/mobil-uygulama",
    github: "https://github.com/omer132",
    featured: true
  },
  {
    id: 3,
    title: "AI Chatbot",
    description: "Yapay zeka destekli müşteri hizmetleri chatbot'u. OpenAI API entegrasyonu ile.",
    image: "/ai-chatbot-main.jpg",
    category: "Yapay Zeka",
    technologies: ["Python", "OpenAI", "FastAPI", "PostgreSQL"],
    link: "/projeler/ai-chatbot",
    github: "https://github.com/omer132",
    featured: false
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description: "Gerçek zamanlı veri analizi ve görselleştirme dashboard'u. Büyük veri işleme kapasitesi.",
    image: "/data-analytics-main.jpg",
    category: "Veri Analizi",
    technologies: ["Vue.js", "D3.js", "Python", "Redis"],
    link: "/projeler/dashboard",
    github: "https://github.com/omer132",
    featured: false
  },
  {
    id: 5,
    title: "Blockchain DApp",
    description: "Dezentralize uygulama. Ethereum blockchain üzerinde geliştirilmiş akıllı kontratlar.",
    image: "/blockchain-main.jpg",
    category: "Blockchain",
    technologies: ["Solidity", "Web3.js", "React", "MetaMask"],
    link: "/projeler/blockchain-dapp",
    github: "https://github.com/omer132",
    featured: false
  },
  {
    id: 6,
    title: "IoT Platform",
    description: "Nesnelerin İnterneti cihazları için yönetim platformu. Gerçek zamanlı izleme ve kontrol.",
    image: "/iot-platform-main.jpg",
    category: "IoT",
    technologies: ["Node.js", "MQTT", "MongoDB", "Docker"],
    link: "/projeler/iot-platform",
    github: "https://github.com/omer132",
    featured: false
  }
]

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl glass-effect card-hover">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary-neon-blue/20 text-primary-neon-blue text-xs font-medium rounded-full">
              {project.category}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-primary-neon-orange/20 text-primary-neon-orange text-xs font-medium rounded-full">
                Öne Çıkan
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-neon-blue transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              <Link href={project.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-primary-neon-blue hover:text-primary-white transition-colors"
                >
                  <span className="text-sm font-medium">Detaylar</span>
                  <ArrowRight size={16} />
                </motion.button>
              </Link>
              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>

            <Link href={project.link}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-primary-neon-blue/20 text-primary-neon-blue rounded-lg hover:bg-primary-neon-blue hover:text-primary-black transition-all"
              >
                <ExternalLink size={16} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="projeler" className="section-padding bg-gradient-to-b from-primary-black to-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Yaptığımız</span>
            <br />
            <span className="text-primary-white">İşler</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Yenilikçi teknoloji çözümleri ile müşterilerimizin dijital dönüşümüne öncülük ediyoruz
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/projeler">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Tüm Projeleri Görün
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
