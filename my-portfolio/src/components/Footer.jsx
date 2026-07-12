const Footer = () => {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/60 px-4 py-10 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xl font-semibold text-white">Ayushman Pathak</p>
          <p className="mt-2 max-w-md text-sm text-slate-400">Building thoughtful digital experiences with modern web technologies and a focus on user impact.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <a href="#home" className="transition hover:text-cyan-300">Home</a>
          <a href="#about" className="transition hover:text-cyan-300">About</a>
          <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
          <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-slate-800/70 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Ayushman Pathak. All rights reserved.</p>
        <p>Built with React + Tailwind</p>
      </div>
    </footer>
  )
}

export default Footer
