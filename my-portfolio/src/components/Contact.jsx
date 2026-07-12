import { motion } from 'framer-motion'

const Contact = () => {
  const contactMethods = [
    { name: 'Email', href: 'mailto:pathakayush1309@gmail.com', icon: '✉' },
    { name: 'GitHub', href: 'https://github.com/ayushman1309', icon: 'GH' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ayushman-pathak-98629128b/', icon: 'in' },
  ]

  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-6">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Contact</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Let&apos;s build something meaningful together</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/65 p-6 shadow-[0_12px_60px_rgba(2,6,23,0.25)] backdrop-blur-xl">
          <div className="flex flex-wrap gap-4">
            {contactMethods.map((method) => (
              <a key={method.name} href={method.href} target={method.name === 'Email' ? undefined : '_blank'} rel={method.name === 'Email' ? undefined : 'noopener noreferrer'} className="flex items-center gap-3 rounded-full border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300">
                <span className="text-lg text-cyan-300">{method.icon}</span>
                {method.name}
              </a>
            ))}
          </div>
          <p className="mt-6 text-slate-300">I’m always open to new opportunities, thoughtful collaborations, and conversations around product development, AI, and web engineering.</p>
        </div>

        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/65 p-6 shadow-[0_12px_60px_rgba(2,6,23,0.25)] backdrop-blur-xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-left text-sm text-slate-300">
              <span className="mb-2 block">Name</span>
              <input className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" placeholder="Your name" />
            </label>
            <label className="text-left text-sm text-slate-300">
              <span className="mb-2 block">Email</span>
              <input type="email" className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-4 block text-left text-sm text-slate-300">
            <span className="mb-2 block">Message</span>
            <textarea rows="5" className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" placeholder="Tell me about your project or idea." />
          </label>
          <button className="mt-5 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-1">Send Message</button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact