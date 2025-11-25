"use client"

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      color: "from-purple-600 to-blue-600",
      skills: [
        { name: "React Native", level: 95 },
        { name: "React", level: 94 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 90 },
      ],
    },
    {
      name: "Backend",
      color: "from-blue-600 to-cyan-600",
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Express", level: 92 },
        { name: "Java Spring Boot", level: 88 },
        { name: "Flask", level: 85 },
      ],
    },
    {
      name: "AI/ML",
      color: "from-cyan-600 to-teal-600",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "OpenCV", level: 92 },
        { name: "Python", level: 94 },
        { name: "CNN/LSTM", level: 89 },
      ],
    },
    {
      name: "Tools & Services",
      color: "from-orange-600 to-red-600",
      skills: [
        { name: "AWS EC2", level: 87 },
        { name: "Firebase", level: 88 },
        { name: "MongoDB", level: 91 },
        { name: "Git", level: 95 },
      ],
    },
  ]

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center glow">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glassmorphism p-8 rounded-2xl">
              <h3
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.name}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
