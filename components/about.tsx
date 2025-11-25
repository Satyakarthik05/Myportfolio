"use client"

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glassmorphism p-8 rounded-2xl">
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer and AI/ML engineer dedicated to crafting innovative solutions that
              push the boundaries of technology. With deep expertise in modern web technologies, machine learning, and
              mobile development, I transform complex problems into elegant, scalable applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey spans from building real-time applications to training neural networks for computer vision
              tasks. I excel at end-to-end system design, authentication frameworks, and IoT integrations that bridge
              the gap between cutting-edge algorithms and real-world applications.
            </p>
          </div>

          <div className="space-y-4">
            <div className="glassmorphism p-6 rounded-xl hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-purple-400 font-bold mb-2">Frontend Mastery</h3>
              <p className="text-gray-400 text-sm">React Native, React, Bootstrap, Tailwind CSS</p>
            </div>
            <div className="glassmorphism p-6 rounded-xl hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-blue-400 font-bold mb-2">Backend Excellence</h3>
              <p className="text-gray-400 text-sm">Node.js, Express, Java Spring Boot, Flask</p>
            </div>
            <div className="glassmorphism p-6 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-cyan-400 font-bold mb-2">AI/ML Innovation</h3>
              <p className="text-gray-400 text-sm">TensorFlow, OpenCV, CNN, LSTM, Python</p>
            </div>
            <div className="glassmorphism p-6 rounded-xl hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-orange-400 font-bold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-400 text-sm">AWS EC2, Firebase, MongoDB, JWT, Socket.IO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
