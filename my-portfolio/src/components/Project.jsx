import { motion } from 'framer-motion'
import cinematePreview from '../assets/cinemate-preview.svg'
import geminiPreview from '../assets/gemini-preview.svg'
import netflixPreview from '../assets/netflix-preview.svg'

const projects = [
  {
    id: 1,
    title: 'CineMate',
    description: 'A full-stack movie booking experience with seat selection, payment flow, and booking history built for modern cinema use cases.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    demoLink: 'https://cinemate-lyart.vercel.app/',
    githubLink: 'https://github.com/ayushman1309/CineMate',
    image: cinematePreview,
    features: ['Seat selection', 'Booking history', 'Responsive design'],
    featured: true,
  },
  {
    id: 2,
    title: 'Google Gemini 2.0 Clone',
    description: 'A conversational AI-inspired interface with smooth interaction states and a polished frontend experience.',
    techStack: ['React', 'Gemini API'],
    demoLink: 'https://react-project-alpha-lime.vercel.app/',
    githubLink: 'https://github.com/ayushman1309/ReactProject',
    image: geminiPreview,
    features: ['AI chat UI', 'Typing feedback', 'Modern layout'],
  },
  {
    id: 3,
    title: 'Netflix Movie Analysis',
    description: 'A data analysis project using Python and visualization tools to uncover patterns and build a predictive model.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Machine Learning'],
    githubLink: 'https://github.com/ayushman1309/Data_Analysis',
    image: netflixPreview,
    features: ['EDA workflows', 'Visual insights', 'Model testing'],
  },
]

const Project = () => {
  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-6">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Projects</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Selected work that blends product thinking with technical depth</h2>
      </div>

      <div className="grid gap-7 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className={`group relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/65 p-4 shadow-[0_15px_60px_rgba(2,6,23,0.28)] backdrop-blur-xl ${project.featured ? 'lg:col-span-2' : ''}`}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-800/70 bg-slate-950/70">
              <img src={project.image} alt={project.title} className={`w-full object-cover ${project.featured ? 'h-72 sm:h-80' : 'h-56 sm:h-64'}`} />
            </div>
            <div className="relative mt-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-700/70 bg-slate-800/70 px-3 py-2 text-xs font-medium text-slate-200">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Highlights</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400" />{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative z-20 mt-5 flex flex-wrap gap-3">
              {project.demoLink && (
              <button
                type="button"
                onClick={() => window.open(project.demoLink, "_blank", "noopener,noreferrer")}
                className="rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
              >
              🚀 Live Demo
              </button>
              )}

  {project.githubLink && (
    <button
      type="button"
      onClick={() => window.open(project.githubLink, "_blank", "noopener,noreferrer")}
      className="rounded-full border border-slate-700/70 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
    >
      💻 GitHub
    </button>
  )}
</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Project
