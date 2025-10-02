import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <img
              src="/src/assets/profile.png"
              alt="About Ayushman Pathak"
              className="w-80 h-50 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl ring-2 ring-gray-700/50 hover:ring-blue-500/50 transition-all duration-300 hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'flex'
              }}
            />
            <div className="hidden w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl ring-2 ring-gray-700/50 items-center justify-center hover:scale-105 transition-transform duration-300">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-lg font-semibold">About Image</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed">
              Hello! I'm a 3rd-year Computer Science student with a strong interest in web development and I enjoy solving complex problems, building clean and efficient applications, and continuously improving my skills. In my free time, I dive into Machine Learning, exploring how data and algorithms can shape intelligent systems.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
              My journey in tech began with a curiosity about how intelligent systems work. This curiosity grew into a passion for Machine Learning, data analysis, and web development. I strongly believe in the power of technology to solve real-world problems and create a meaningful impact.
              </p>
            </div>

<div className="flex flex-wrap gap-3 mt-6">
  {[
    'Python', 
    'Problem Solving',
    'Web Development',
    'Javascript',
    'React',
    'Node.js',
    'MongoDB',
    'Tailwind',
    'Git',
    'GitHub',
  ].map((skill, index) => (
    <span
      key={skill}
      className="px-4 py-2 bg-gray-800/50 text-blue-400 border border-gray-700/50 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200 backdrop-blur-sm animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {skill}
    </span>
  ))}
</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About