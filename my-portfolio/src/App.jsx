import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Timeline from './components/Timeline'
import GitHubSection from './components/Github'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(progress)
      setShowBackToTop(window.scrollY > 500)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.13),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.12),_transparent_25%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#020617_100%)] text-slate-100">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.03),_transparent_45%,_rgba(255,255,255,0.02))]" />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -25, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-5%] top-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 35, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-[-5%] h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl"
        />
      </div>

      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-slate-900/70">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        <section id="home" className="relative flex min-h-screen items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl">
            <Hero />
          </div>
        </section>

        <section id="about" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto w-full max-w-7xl">
            <About />
          </div>
        </section>

        <section id="skills" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto w-full max-w-7xl">
            <Skills />
          </div>
        </section>

        <section id="projects" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40" />
          <div className="relative mx-auto w-full max-w-7xl">
            <Project />
          </div>
        </section>

        <section id="timeline" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto w-full max-w-7xl">
            <Timeline />
          </div>
        </section>

        <section id="github" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto w-full max-w-7xl">
            <GitHubSection />
          </div>
        </section>

        <section id="resume" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto w-full max-w-7xl">
            <Resume />
          </div>
        </section>

        <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto w-full max-w-7xl">
            <Contact />
          </div>
        </section>

        <Footer />
      </main>

      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900/80 text-lg text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.2)] backdrop-blur-xl"
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default App
