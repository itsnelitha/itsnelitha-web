'use client'

import { MapPin, Mail, Download, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export default function HomeSection() {
  return (
    <section id="home">
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 mt-12 md:mt-0">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="glass rounded-3xl p-8 md:p-12 animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-blue">
              Harsh Kumar Banka
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-8">
              <span className="text-gradient">AI/ML Engineer</span> &{' '}
              <span className="text-gradient">Full Stack Developer</span>
            </div>

            {/* Location & Email */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Chennai, India
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                harshbanka321@gmail.com
              </div>
            </div>

            {/* Social Links & Resume Button */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
              <div className="flex justify-center gap-4">
                <Link 
                  href="https://linkedin.com/in/harsh-banka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-hover p-3 rounded-xl group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </Link>
                <Link 
                  href="https://github.com/LordHarsh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-hover p-3 rounded-xl group"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors" />
                </Link>
              </div>
              
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl flex items-center gap-3 font-semibold relative overflow-hidden group animate-glow">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  Download Resume
                </div>
                <div className="absolute top-1 right-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12">
            <div className="inline-block">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}