import React from 'react'

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'CineMate',
      description: 'Full-stack movie booking system with seat selection, payments, booking history. Complete end-to-end solution for cinema management.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      demoLink: 'https://cinemate-lyart.vercel.app/',
      githubLink: "https://github.com/ayushman1309/CineMate",
    },
    {
      id: 2,
      title: 'Google Gemini 2.0 Clone',
      description: 'Chat app integrated with Gemini API, responsive UI with typing indicators. Modern conversational AI interface.',
      techStack: ['React', 'Gemini API'],
      demoLink: 'https://react-project-alpha-lime.vercel.app/',
      githubLink: "https://github.com/ayushman1309/ReactProject",
    },
    {
      id: 3,
      title: 'Netflix Movie Analysis',
      description: 'Data analysis on Netflix movies using Python, Pandas, Matplotlib. Achieved 82% accuracy logistic regression model.',
      techStack: ['Python', 'Pandas', 'Matplotlib', 'Machine Learning'],
      demoLink: null,
      githubLink: 'https://github.com/ayushman1309/Data_Analysis',
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills in full-stack development, 
          AI integration, and data analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative bg-gray-800/40 backdrop-blur-lg border border-gray-700/30 rounded-3xl shadow-2xl hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 overflow-hidden group hover:border-purple-500/30 animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
            
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300"></div>
            <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500"></div>
            
            <div className="relative h-48 overflow-hidden rounded-t-3xl">
              <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
                                     radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                    animation: 'float 6s ease-in-out infinite'
                  }}></div>
                </div>
                
                <div className="text-center text-white relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl mb-3 animate-bounce group-hover:animate-pulse">🚀</div>
                  <p className="text-xl font-bold tracking-wide">{project.title}</p>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/10 transition-all duration-300"></div>
            </div>

            <div className="p-6 relative">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4 group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, techIndex) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-blue-400 border border-gray-600/30 text-xs font-medium rounded-full hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/50 hover:text-blue-300 hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-blue-500/25 animate-fade-in-up"
                  style={{ animationDelay: `${(index * 200) + (techIndex * 100)}ms` }}
                >
                  {tech}
                </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex-1 relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl font-medium text-center hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span className="text-lg group-hover/btn:animate-bounce">🌐</span>
                      Live Demo
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </a>
                )}
                
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex-1 relative border-2 border-gray-600/50 bg-gray-800/30 text-gray-300 px-4 py-3 rounded-xl font-medium text-center hover:border-blue-400/70 hover:text-blue-400 hover:bg-gray-700/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span className="text-lg group-hover/btn:animate-pulse">📂</span>
                      GitHub
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </a>
                )}
                
                {!project.demoLink && !project.githubLink && (
                  <div className="flex-1 bg-gray-700/30 text-gray-500 px-4 py-3 rounded-xl font-medium text-center cursor-not-allowed backdrop-blur-sm border border-gray-700/50">
                    🔒 Coming Soon
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-300 mb-4">
          Want to see more of my work?
        </p>
        <a
          href="https://github.com/ayushman1309"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-white font-medium rounded-full hover:from-gray-700 hover:to-gray-800 hover:border-blue-500/50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View All Projects on GitHub
        </a>
      </div>
    </div>
  )
}

export default Project
