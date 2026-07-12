import { useState } from 'react'
import { motion } from 'framer-motion'

const GitHubImageCard = ({ src, alt, className = '' }) => {
  const [hasError, setHasError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02, boxShadow: '0 18px 50px rgba(2, 6, 23, 0.24)' }}
      transition={{ duration: 0.3 }}
      className={`overflow-hidden rounded-[1.4rem] border border-slate-800/80 bg-slate-900/70 p-3 shadow-[0_12px_50px_rgba(2,6,23,0.23)] backdrop-blur-xl ${className}`}
    >
      {hasError ? (
        <div className="flex min-h-[220px] items-center justify-center rounded-[1rem] border border-slate-800/70 bg-slate-950/70 px-4 text-center text-sm text-slate-300">
          Unable to load GitHub statistics.
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setHasError(true)}
          className="h-full w-full rounded-[1rem] object-contain"
        />
      )}
    </motion.div>
  )
}

const GitHubSection = () => {
  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-6">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">GitHub</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">A consistent habit of building and shipping</h2>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/60 p-4 shadow-[0_12px_60px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white">Live GitHub overview</h3>
          <p className="mt-2 max-w-2xl text-slate-300">Recent activity and language insights sourced directly from GitHub profile cards.</p>
        </div>

        <div className="flex flex-col gap-6">
          <GitHubImageCard
            src="https://github-readme-activity-graph.vercel.app/graph?username=ayushman1309&theme=github-dark&hide_border=true"
            alt="GitHub contribution graph for ayushman1309"
            className="w-full"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <GitHubImageCard
              src="https://github-readme-stats-sigma-five.vercel.app/api?username=ayushman1309&show_icons=true&theme=tokyonight&hide_border=true"
              alt="GitHub stats card for ayushman1309"
              className="min-h-[220px]"
            />
            <GitHubImageCard
              src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=ayushman1309&layout=compact&theme=tokyonight&hide_border=true"
              alt="Top languages card for ayushman1309"
              className="min-h-[220px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GitHubSection
