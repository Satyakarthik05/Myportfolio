"use client"

export default function Timeline() {
  const milestones = [
    {
      year: "2020",
      title: "Started Learning",
      description: "Began journey with web development basics and Python programming.",
    },
    {
      year: "2021",
      title: "First Full-Stack Project",
      description: "Built complete MERN stack application with authentication and real-time features.",
    },
    {
      year: "2022",
      title: "AI/ML Exploration",
      description: "Ventured into machine learning, trained first CNN models and computer vision projects.",
    },
    {
      year: "2023",
      title: "Hackathon Achievements",
      description: "Won multiple hackathons with innovative AI-powered game and automation projects.",
    },
    {
      year: "2024",
      title: "AI Engineer Path",
      description: "Focused on advanced AI/ML engineering with production-grade deployments and IoT integrations.",
    },
    {
      year: "2025",
      title: "Innovation Leader",
      description: "Leading cutting-edge projects combining full-stack development with AI/ML capabilities.",
    },
  ]

  return (
    <section id="timeline" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center glow">My Journey</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-600 transform -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`flex gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-4 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1.5 md:-translate-x-1/2 border-4 border-black" />

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}
                >
                  <div className="glassmorphism p-6 rounded-xl hover:border-purple-400/50 transition-all duration-300">
                    <div className="text-purple-400 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
