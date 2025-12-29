'use client'

import { GraduationCap, Calendar, MapPin, FileText, Eye , Download, Sparkles, Star} from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about">
      <div className="py-20 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Passionate AI/ML Engineer and Full Stack Developer with expertise in building intelligent systems and scalable web applications. Currently pursuing Computer Science Engineering with a focus on cutting-edge technologies.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:items-stretch">
            {/* Education */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-gradient-blue">Education</h3>
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="glass-hover rounded-2xl p-6 group">
                  <div className="flex items-start justify-between my-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">
                        Bachelor of Technology in Computer Science and Engineering
                      </h4>
                      <p className="text-blue-400 font-semibold mb-4">
                        SRM Institute of Science and Technology
                      </p>
                    </div>
                    <div className="glass rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-gradient-blue">8.8</div>
                      <div className="text-xs text-muted-foreground">CGPA</div>
                    </div>
                  </div>
                  
                  <div className="flex items-stretch gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Sep 2022 – May 2026
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Chennai, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume/CV */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CV</span>
                </div>
                <h3 className="text-2xl font-bold text-gradient-blue">Resume</h3>
              </div>

              <div className="flex-1">
                <div className="relative">
                  <div className="glass-hover rounded-3xl p-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                          <FileText className="w-8 h-8 text-blue-400" />
                          <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/50"></div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            Resume / CV
                          </h3>
                          <p className="text-muted-foreground">
                            Download my professional resume
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 relative overflow-hidden group/btn">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10 flex items-center gap-3">
                            <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                            Download
                          </div>
                        </button>
                        
                        <button className="glass-hover p-4 rounded-2xl group/preview">
                          <Eye className="w-5 h-5 text-white group-hover/preview:text-cyan-400 transition-colors" />
                        </button>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <Star className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-20">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}