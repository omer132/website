'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false) // Close mobile menu if open
      }
    }
  }

  const navItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Projeler', href: '/projeler' },
    { name: 'Hakkımızda', href: '#hakkimizda' },
    { name: 'Kariyer', href: '/kariyer' },
    { name: 'İletişim', href: '/iletisim' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect' : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Image
                src="/AKKUSwhite.png"
                alt="AKKUS Logo"
                width={1000}
                height={280}
                className="h-40 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => handleSmoothScroll(item.href)}
                  className="relative text-primary-white hover:text-primary-neon-blue transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-neon-blue transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-primary-white hover:text-primary-neon-blue transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-neon-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/iletisim">
              <button className="btn-primary">
                Bize Ulaşın
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-white hover:text-primary-neon-blue transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect"
          >
            <div className="container-custom px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.href.startsWith('#') ? (
                      <button
                        onClick={() => handleSmoothScroll(item.href)}
                        className="block text-primary-white hover:text-primary-neon-blue transition-colors duration-300 py-2 text-left"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-primary-white hover:text-primary-neon-blue transition-colors duration-300 py-2"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <Link href="/iletisim" onClick={() => setIsOpen(false)}>
                    <button className="btn-primary w-full">
                      Bize Ulaşın
                    </button>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
