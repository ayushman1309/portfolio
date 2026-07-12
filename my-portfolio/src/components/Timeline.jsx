import { motion } from 'framer-motion'

const milestones = [
  { year: '2023', title: 'Started Programming', description: 'Built my first projects and learned the fundamentals of problem solving.' },
  { year: '2024', title: 'Learned MERN Stack', description: 'Created full-stack experiences and strengthened my front-end and backend foundations.' },
  { year: '2025', title: 'Built AI Projects', description: 'Explored modern AI workflows and connected intelligent features into real products.' },
  { year: 'Present', title: 'Open to Internship', description: 'Eager to contribute, learn fast, and ship impactful work with a team.' },
]

const Timeline = () => {
  return (
    <div className="mx-auto max-w-5xl px-2 sm:px-6">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Journey</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">A steady path of growth and building</h2>
      </div>

      <div className="space-y-6">
        {milestones.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative rounded-3xl border border-slate-800/80 bg-slate-900/65 p-6 shadow-[0_12px_50px_rgba(2,6,23,0.25)] backdrop-blur-xl"
          >
            <div className="absolute left-6 top-6 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
            <div className="ml-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
                  {item.year}
                </span>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="mt-3 max-w-2xl text-slate-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
