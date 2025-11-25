"use client"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AI-Based Attendance System",
      description:
        "Face recognition system with CNN model training and live detection using Flask UI with camera integration.",
      tags: ["CNN", "Python", "Flask", "OpenCV", "Face Recognition"],
      image: "/face-recognition-system.jpg",
      gradient: "from-purple-600/20 to-blue-600/20",
    },
    {
      title: "Real-Time Music Sharing App",
      description: "MERN + React Native app enabling synchronized music playback, live chat, and user authentication.",
      tags: ["MERN", "React Native", "Socket.IO", "MongoDB", "Authentication"],
      image: "/music-app-interface.jpg",
      gradient: "from-blue-600/20 to-cyan-600/20",
    },
    {
      title: "Automatic Subway Surfers Gameplay",
      description:
        "Hand gesture recognition system using OpenCV with trained model for Up/Down/Left/Right/Roll gestures.",
      tags: ["OpenCV", "CNN", "Gesture Recognition", "Game Control"],
      image: "/hand-gesture-control.jpg",
      gradient: "from-cyan-600/20 to-teal-600/20",
    },
    {
      title: "Chess Bot with Neural Network",
      description: "Trained on Lichess database with neural network-based move prediction and Pygame integration.",
      tags: ["Neural Networks", "Lichess DB", "Pygame", "AI Strategy"],
      image: "/chess-ai-bot.jpg",
      gradient: "from-teal-600/20 to-green-600/20",
    },
    {
      title: "Carrom Board AI Game",
      description: "Hackathon project with hand gesture control, CNN gesture model, and real-time striker control.",
      tags: ["CNN", "Gesture Detection", "Game Physics", "Hackathon"],
      image: "/carrom-game-ai.jpg",
      gradient: "from-orange-600/20 to-red-600/20",
    },
    {
      title: "GPS + GSM Live Tracking",
      description: "IoT-based location tracking using Neo-6M and SIM800L modules with Firebase integration.",
      tags: ["IoT", "GPS", "GSM", "Firebase", "Real-time Tracking"],
      image: "/gps-tracking-system.jpg",
      gradient: "from-red-600/20 to-pink-600/20",
    },
    {
      title: "Real Estate App",
      description: "React Native application for property posting, requests, and real-time updates with smooth UX.",
      tags: ["React Native", "Real-time Database", "Mobile App", "Property Management"],
      image: "/real-estate-app.jpg",
      gradient: "from-pink-600/20 to-purple-600/20",
    },
    {
      title: "Attendance Management System",
      description:
        "Complete system with HOD/Staff/Student dashboards and WhatsApp automation for absence notifications.",
      tags: ["Full Stack", "WhatsApp API", "Excel Automation", "Dashboard"],
      image: "/attendance-management-dashboard.jpg",
      gradient: "from-purple-600/20 to-indigo-600/20",
    },
    {
      title: "AI Shawarma Counter",
      description: "CCTV footage analysis detecting shawarma completion with real-time counter updates.",
      tags: ["Computer Vision", "CNN", "Real-time Detection", "CCTV Integration"],
      image: "/shawarma-detection-system.jpg",
      gradient: "from-indigo-600/20 to-blue-600/20",
    },
  ]

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center glow">Featured Projects</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Showcase of innovative projects spanning full-stack development, AI/ML, and IoT integrations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg`}
              />

              <div className="relative glassmorphism rounded-xl overflow-hidden h-full flex flex-col hover:border-purple-400/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 py-2 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                      <ExternalLink size={16} /> View
                    </button>
                    <button className="flex-1 py-2 bg-blue-600/20 hover:bg-blue-600/40 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                      <Github size={16} /> Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
