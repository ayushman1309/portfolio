import React from 'react'

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Resume
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Download or view my Resume
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://drive.google.com/file/d/1G3GYh7ZB5ZBNTCvEyS8SjYKX3k4b0MXS/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25"
        >
          <span className="mr-2">📄</span> View Resume
        </a>
        <a
          href="https://drive.google.com/file/d/1G3GYh7ZB5ZBNTCvEyS8SjYKX3k4b0MXS/view?usp=sharing"
          download
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-blue-400 hover:text-blue-400 transform hover:scale-105 transition-all duration-300 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm"
        >
          <span className="mr-2">⬇️</span> Download Resume
        </a>
      </div>
    </div>
  )
}

export default Resume
