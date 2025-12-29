'use client'

import { useState, useEffect } from 'react'
import { Home, User, Briefcase, CodeXml, Trophy, Mail, Bot, Sparkles } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: CodeXml },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-6 left-0 right-0 mx-auto z-50 w-fit">
        <div className="glass rounded-full px-6 py-3 flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative p-3 rounded-full transition-all duration-300 group hover:bg-white/10"
                aria-label={item.label}
              >
                <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </div>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Floating AI Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="relative w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 hover:shadow-purple-500/25 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
          style={{ animation: 'float 6s ease-in-out infinite' }}
          aria-label="AI Assistant"
        >
          <div className="absolute inset-0 rounded-full"></div>
          <div className="relative flex items-center justify-center w-full h-full">
            <div className="absolute">
              <Bot className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-purple-400/50"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
            <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="absolute top-1/2 left-1/2 pointer-events-none">
              <Sparkles className="w-3 h-3 text-yellow-400" />
            </div>
          ))}
        </button>
      </div>
    </>
  )
}