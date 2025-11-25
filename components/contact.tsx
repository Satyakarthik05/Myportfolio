"use client"

import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:contact@example.com" },
  ]

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center glow">Let's Connect</h2>
        <p className="text-gray-400 text-center mb-12">
          Interested in collaborating or have a project in mind? Let's build something amazing together!
        </p>

        <div className="glassmorphism p-12 rounded-2xl mb-12">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/5 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/5 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full bg-white/5 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors resize-none"
            />
            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>

        <div className="flex justify-center gap-8">
          {socialLinks.map((link, idx) => {
            const Icon = link.icon
            return (
              <a
                key={idx}
                href={link.href}
                title={link.label}
                className="p-4 glassmorphism rounded-full hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 group"
              >
                <Icon className="text-purple-400 group-hover:text-purple-300" size={24} />
              </a>
            )
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-purple-500/20 text-center text-gray-400 text-sm">
          <p>© 2025 Velivela Satya Karthik. Crafted with passion and cutting-edge technology.</p>
        </div>
      </div>
    </section>
  )
}
