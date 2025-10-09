import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const navRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect()
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const navElement = navRef.current
    if (navElement) {
      navElement.addEventListener('mousemove', handleMouseMove)
      navElement.addEventListener('mouseenter', handleMouseEnter)
      navElement.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (navElement) {
        navElement.removeEventListener('mousemove', handleMouseMove)
        navElement.removeEventListener('mouseenter', handleMouseEnter)
        navElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsOpen(false)
  }

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' }
  ]
  
  return (
    <nav 
      ref={navRef}
      className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 shadow-2xl relative overflow-hidden cursor-none"
    >
      <div
        className={`absolute pointer-events-none transition-all duration-300 ease-out z-10 ${
          isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        style={{
          left: cursorPos.x - 10,
          top: cursorPos.y - 10,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
      </div>

      <div
        className={`absolute pointer-events-none transition-all duration-700 ease-out ${
          isHovering ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          left: cursorPos.x - 20,
          top: cursorPos.y - 20,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-white hover:text-blue-400 transition-all duration-200 hover:scale-105 cursor-none relative group"
            >
              <span className="relative z-10 drop-shadow-lg">Ayushman</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-800/50 rounded-md backdrop-blur-sm cursor-none relative group hover:scale-105"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200 backdrop-blur-sm cursor-none relative group hover:scale-105"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/90 backdrop-blur-md border-t border-gray-700/50">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-all duration-200 backdrop-blur-sm cursor-none relative group hover:scale-105"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar