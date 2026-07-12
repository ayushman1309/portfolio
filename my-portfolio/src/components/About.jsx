import { motion } from 'framer-motion'
import image from '../assets/profile.png'

const points = [
  { title: 'Short Introduction', body: 'I’m a Computer Science student turning curiosity into real products through modern web and AI experiences.' },
  { title: 'What I Enjoy Building', body: 'I enjoy creating polished interfaces, full-stack applications, and problem-driven solutions that feel thoughtful and useful.' },
  { title: 'Technologies', body: 'React, Next.js, Tailwind, Node.js, Spring Boot, Java, Python, MongoDB, and Git are core parts of my toolkit.' },
  { title: 'Goals', body: 'My goal is to grow into a strong engineer who builds impactful software and contributes meaningfully to great teams.' },
]

const About = () => {
  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-6">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">About</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Building with curiosity, clarity, and care</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/70 p-4 shadow-[0_12px_60px_rgba(2,6,23,0.3)] backdrop-blur-xl">
          <img src={image} alt="Ayushman Pathak" className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[360px]" />
        </motion.div>

        <div className="space-y-4">
          {points.map((point, index) => (
            <motion.div key={point.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} className="rounded-3xl border border-slate-800/80 bg-slate-900/65 p-6 shadow-[0_12px_50px_rgba(2,6,23,0.24)] backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">{point.title}</h3>
              <p className="mt-2 text-slate-300">{point.body}</p>
            </motion.div>
          ))}

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.24 }} className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/70 to-violet-500/10 p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Education</p>
                <h3 className="mt-2 text-xl font-semibold text-white">B.E. Computer Engineering</h3>
              </div>
              <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200">2023–2027</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About