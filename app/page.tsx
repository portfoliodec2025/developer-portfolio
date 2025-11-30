import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Portfolio</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              Get In Touch
            </a>
            <a href="#projects" className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-8 text-center">About Me</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate developer with expertise in building modern web applications. 
            I love creating elegant solutions to complex problems and am always eager to learn new technologies. 
            With a strong foundation in both frontend and backend development, I bring ideas to life through clean, 
            efficient code.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition">
                <h4 className="text-2xl font-bold text-white mb-3">Project {i}</h4>
                <p className="text-gray-300 mb-4">
                  A brief description of this amazing project and the technologies used to build it.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition">Live Demo →</a>
                  <a href="#" className="text-gray-400 hover:text-gray-300 transition">GitHub →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'].map((skill) => (
                  <span key={skill} className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Backend</h4>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'].map((skill) => (
                  <span key={skill} className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-8">Get In Touch</h3>
          <p className="text-lg text-gray-300 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex gap-6 justify-center text-3xl">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Your Name. Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}