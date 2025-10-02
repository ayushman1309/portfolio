
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="w-full max-w-7xl mx-auto relative z-10">
            <Hero />
          </div>
        </section>

        <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="w-full max-w-7xl mx-auto">
            <About />
          </div>
        </section>

        <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm"></div>
          <div className="w-full max-w-7xl mx-auto relative z-10">
            <Project />
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="w-full max-w-7xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
