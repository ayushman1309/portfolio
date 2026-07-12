import { motion } from 'framer-motion'
import resumePreview from '../assets/resume-preview.svg'

const Resume = () => {
  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-6">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Resume</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">A concise snapshot of my experience and direction</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/70 p-4 shadow-[0_12px_60px_rgba(2,6,23,0.3)] backdrop-blur-xl">
          <img src={resumePreview} alt="Resume preview" className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[380px]" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="space-y-4 rounded-[2rem] border border-slate-800/80 bg-slate-900/65 p-6 shadow-[0_12px_60px_rgba(2,6,23,0.25)] backdrop-blur-xl">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Overview</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Computer Science student with a strong foundation in full-stack development and problem solving.</h3>
          </div>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4"><strong className="text-white">Skills Summary:</strong> React, Tailwind, Node.js, Spring Boot, Java, Python, MongoDB, Git.</div>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4"><strong className="text-white">Experience Summary:</strong> Built personal and academic projects focused on real-world product thinking and clean implementation.</div>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4"><strong className="text-white">Education Summary:</strong> B.Tech in Computer Science with strong interest in software engineering, AI, and web development.</div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://drive.google.com/file/d/1kaRWCHkVTtiGfe_4W_t8tVabX_grgz7u/view?usp=drive_link" target="_blank" rel="noreferrer" className="rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-1">View Resume</a>
            <a href="https://drive.google.com/file/d/1kaRWCHkVTtiGfe_4W_t8tVabX_grgz7u/view?usp=drive_link" download className="rounded-full border border-slate-700/70 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300">Download Resume</a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
