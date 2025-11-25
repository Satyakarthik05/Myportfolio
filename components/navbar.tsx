"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

export default function Navbar({ isDark, setIsDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ["About", "Skills", "Projects", "Timeline", "Contact"]

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism border-b border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold glow">VSK</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm hover:text-purple-400 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-purple-500/30 p-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-sm hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
