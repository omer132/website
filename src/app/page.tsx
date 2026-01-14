import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Footer from '@/components/Footer'

<meta name="google-site-verification" content="szAf31gfX89g2Cs7RgEHzacJNDePOHVoLr4pnotjqc4" />

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-black">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  )
}
