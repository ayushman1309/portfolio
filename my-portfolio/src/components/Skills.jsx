import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind'],
    accent: 'from-cyan-500/20 to-sky-500/10',
  },
  {
    title: 'Backend',
    items: ['Node', 'Express', 'Spring Boot'],
    accent: 'from-violet-500/20 to-purple-500/10',
  },
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript'],
    accent: 'from-fuchsia-500/20 to-pink-500/10',
  },
  {
    title: 'Database',
    items: ['MongoDB', 'MySQL'],
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Postman'],
    accent: 'from-amber-500/20 to-orange-500/10',
  },
]

const Skills = () => {
  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-6">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Competencies</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Crafting polished products with modern tools</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          I focus on building intuitive interfaces, reliable systems, and thoughtful user experiences.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-[0_12px_60px_rgba(2,6,23,0.35)] backdrop-blur-xl"
          >
            <div className={`mb-5 rounded-2xl bg-gradient-to-r ${group.accent} p-4`}>
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700/70 bg-slate-800/70 px-3 py-2 text-sm font-medium text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
