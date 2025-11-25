"use client"

import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [animateText, setAnimateText] = useState(false)

  useEffect(() => {
    setAnimateText(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl">
       <div className="mb-6 inline-block">
  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-purple-500/50 p-2 glassmorphism pulse-glow">
    <img
      src="/myimag.png"
      alt="Velivela Satya Karthik"
      className="w-full h-full rounded-full object-cover"
    />
  </div>
</div>


        <h1 className="text-5xl md:text-7xl font-bold mb-4 glow">Velivela Satya Karthik</h1>

        <p className="text-xl md:text-2xl text-purple-300 mb-2 font-light">
          Full-Stack Developer | AI/ML Engineer | Innovation Architect
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Building cutting-edge solutions with React, Node.js, and AI technologies. Based in India, creating impactful
          digital experiences globally.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            View My Work
          </button>
          <button className="px-8 py-3 border border-purple-500/50 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
            Get in Touch
          </button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-purple-400" size={32} />
        </div>
      </div>
    </section>
  )
}
