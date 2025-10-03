import React from 'react'
import image from "../assets/profile.png"
const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gray-900"></div>
              </div>
              
              <img
                src={image}
                alt="Ayushman Pathak"
                className="relative w-full h-full rounded-full object-cover shadow-2xl ring-4 ring-gray-700/50 group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="hidden relative w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-500 items-center justify-center shadow-2xl ring-4 ring-gray-700/50 group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  AP
                </span>
              </div>
              
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -top-2 -right-6 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -right-2 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-500"></div>
            </div>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
              Ayushman Pathak
            </span>{' '}
            <span className="inline-block animate-bounce">👋</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium animate-fade-in-up delay-200">
            Aspiring Software Engineer | DSA Enthusiast | Machine Learning | Mern Stack Developer
          </p>
          
          <div className="mt-4 h-8 flex items-center justify-center">
            <p className="text-blue-400 font-mono text-sm animate-pulse">
              &gt; Building the future with code...
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-fade-in-up delay-400">
          <button
            onClick={() => scrollToSection('projects')}
            className="group w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden"
          >
            <span className="relative z-10">🚀 View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group w-full sm:w-auto px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-blue-400 hover:text-blue-400 transform hover:scale-105 transition-all duration-300 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm relative overflow-hidden"
          >
            <span className="relative z-10">💬 Contact Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        <div className="mt-16 animate-bounce animate-fade-in-up delay-600">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 mx-auto group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero