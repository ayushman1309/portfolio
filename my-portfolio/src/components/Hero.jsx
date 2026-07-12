import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import image from '../assets/profile.png'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const words = ['Full Stack Developer', 'AI Enthusiast', 'Problem Solver']

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
  const currentWord = words[wordIndex]

  let charIndex = 0
  let isDeleting = false
  let timeout

  const type = () => {
    if (!isDeleting) {
      setDisplayText(currentWord.substring(0, charIndex + 1))
      charIndex++

      if (charIndex > currentWord.length) {
        isDeleting = true
        timeout = setTimeout(type, 2000) // Pause after typing
        return
      }

      timeout = setTimeout(type, 110) // Typing speed
    } else {
      setDisplayText(currentWord.substring(0, charIndex - 1))
      charIndex--

      if (charIndex < 0) {
        setWordIndex((prev) => (prev + 1) % words.length)
        return
      }

      timeout = setTimeout(type, 60) // Deleting speed
    }
  }

  timeout = setTimeout(type, 500)

  return () => clearTimeout(timeout)
}, [wordIndex])

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center">
      <div className="relative z-10 w-full px-2 text-center sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
          <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 p-[2px]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-10px] rounded-full border border-cyan-400/20"
            />
            <img src={image} alt="Ayushman Pathak" className="relative h-full w-full rounded-full object-cover shadow-[0_0_60px_rgba(34,211,238,0.2)] ring-4 ring-slate-700/70" />
            <div className="absolute inset-0 rounded-full ring-4 ring-cyan-400/20" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">Portfolio • 2026</p>
          <h1 className="mb-4 text-4xl font-semibold text-white sm:text-5xl lg:text-7xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">Ayushman Pathak</span>
          </h1>
          <div className="mx-auto flex min-h-10 items-center justify-center text-lg font-medium text-slate-300 sm:text-xl lg:text-2xl">
            <span className="mr-2 text-cyan-300">&gt;</span>
            <span>{displayText}</span>
            <span className="ml-1 animate-pulse">|</span>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-slate-300 sm:text-base">
            <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2">📍 India</span>
            <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2">🎓 B.E. Computer Engineering</span>
            <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2">💼 Open to Internship</span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: 'GitHub', href: 'https://github.com/ayushman1309', icon: 'GH' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayushman-pathak-98629128b/', icon: 'in' },
              { label: 'LeetCode', href: 'https://leetcode.com/u/ayushman1309/', icon: 'LC' },
              { label: 'Email', href: 'mailto:pathakayush1309@gmail.com', icon: 'pathakayush1309@gmail.com' },
              {label: 'Instagram', href: 'https://www.instagram.com/ayushhmann_', icon: 'IG'},
            ].map((item) => (
              <a key={item.label} href={item.href} target={item.label === 'Email' ? undefined : '_blank'} rel={item.label === 'Email' ? undefined : 'noopener noreferrer'} className="rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300">
                {item.icon}
              </a>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {[
              { value: '15+', label: 'Projects' },
              { value: '400+', label: 'DSA Problems' },
              { value: '2+', label: 'Years Learning' },
              { value: 'Open', label: 'To Internship' },
            ].map((stat) => (
              <motion.div key={stat.label} whileHover={{ y: -4, scale: 1.01 }} className="rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-5 shadow-[0_10px_30px_rgba(2,6,23,0.2)]">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button onClick={() => scrollToSection('projects')} className="rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 px-7 py-3 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.2)] transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(192,132,252,0.25)]">View Projects</button>
            <button onClick={() => scrollToSection('contact')} className="rounded-full border border-slate-700/70 bg-slate-900/60 px-7 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300">Contact Me</button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero