"use client"

import { Trophy, Award, Star } from "lucide-react"

export default function Certifications() {
  const certifications = [
    { icon: Trophy, title: "Full-Stack Web Development", issuer: "Certification Body", year: "2023" },
    { icon: Award, title: "Machine Learning Specialization", issuer: "AI Institute", year: "2023" },
    { icon: Star, title: "React Native Expert", issuer: "Tech Academy", year: "2024" },
  ]

  return (
    <section id="certifications" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow">Certifications & Achievements</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon
            return (
              <div
                key={idx}
                className="glassmorphism p-8 rounded-xl text-center hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-6">
                  <Icon className="text-purple-400 group-hover:text-purple-300 transition-colors" size={48} />
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>
                <p className="text-purple-400 font-semibold">{cert.year}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
