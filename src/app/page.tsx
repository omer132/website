import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-primary-black">
        {/* Hero: Giriş Bölümü */}
        <Hero />
        
        {/* Projects: Projeler Bölümü */}
        <section id="projects">
          <Projects />
        </section>

        {/* About: Hakkımızda Bölümü */}
        <section id="about">
          <About />
        </section>
      </main>
      <Footer />
    </>
  )
}
