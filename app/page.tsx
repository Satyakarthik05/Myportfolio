"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Timeline from "@/components/timeline"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import ParticlesBackground from "@/components/particles-background"
import CursorFollower from "@/components/cursor-follower"

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Set dark mode on mount
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      <ParticlesBackground />
      <CursorFollower />

      <div className="relative z-10">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
      </div>
    </main>
  )
}
