"use client";
import { useEffect, useRef } from "react";
import { Code2, Monitor, Brain, Award, GraduationCap, Calendar, MapPin, Cog } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: <Code2 size={16} strokeWidth={2} />,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++"],
  },
  {
    title: "Software Development",
    icon: <Monitor size={16} strokeWidth={2} />,
    skills: ["NodeJs", "React", "NextJs", "FastAPI", "SQL", "GCP", "Vercel"],
  },
  {
    title: "AI/ML & Data Science",
    icon: <Brain size={16} strokeWidth={2} />,
    skills: ["TensorFlow", "MLFlow", "Numpy", "Pandas", "Scikit Learn", "Data Analysis", "Model Development"],
  },
  {
    title: "Tools & Technologies",
    icon: <Cog size={16} strokeWidth={2} />,
    skills: ["VS Code", "Antigravity", "Git", "GitHub", "Docker", "Adobe Creative Suite", "Figma"],
  },
  {
    title: "Certifications",
    icon: <Award size={16} strokeWidth={2} />,
    skills: ["Google Certified Generative AI Leader", "Google Certified Cloud Digital Leader", "Reuters Certified Digital Journalist"],
  },
];

const stats = [
  { n: "5+", label: "Programming Languages" },
  { n: "6+", label: "AI/ML Technologies" },
  { n: "8+", label: "Development Tools" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".fade-up").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 80)
          );
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* About Me */}
      <section id="about" className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="fade-up text-center mb-12">
            <h2 className="section-heading mb-4">About Me</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
              AI/ML Enthusiast, Full Stack Developer, Cinematographer, and Video Editor
              with a passion for building intelligent systems and scalable web applications.
              Currently pursuing Data Science with a strong focus on emerging technologies and innovation.
            </p>
          </div>

          {/* Education row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="fade-up">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={18} color="#6b8afd" strokeWidth={2} />
                <span style={{ color: "#6b8afd", fontWeight: 600, fontSize: "1rem" }}>Education</span>
              </div>
              <div className="card p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.4 }}>
                      Primary & Secondary Education
                    </div>
                    <div style={{ color: "#6b8afd", fontSize: "0.85rem", marginTop: "6px", fontWeight: 500 }}>
                      Prince of Wales' College, Moratuwa
                    </div>
                    <div className="flex items-center gap-4 mt-3" style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} strokeWidth={2} />
                        2012 – 2025
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} strokeWidth={2} />
                        Sri Lanka
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center"
                    style={{ background: "rgba(107,138,253,0.1)", border: "1px solid rgba(107,138,253,0.2)" }}
                  >
                    <div style={{ color: "#6b8afd", fontWeight: 800, fontSize: "1.25rem" }}>N/A</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.65rem", letterSpacing: "0.05em" }}>GCE AL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="py-16" style={{ background: "var(--bg)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="fade-up text-center mb-12">
            <h2 className="section-heading mb-4">Technical Skills</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
              A comprehensive overview of my technical expertise spanning multiple domains including
              AI/ML, software development, and various programming languages.
            </p>
          </div>

          {/* Skill cards grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {skillGroups.slice(0, 4).map((group, i) => (
              <div key={group.title} className="fade-up card p-6" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-center gap-2 mb-4" style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  {group.icon}
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(s => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications full width */}
          <div className="fade-up card p-6 mb-6" style={{ transitionDelay: "160ms" }}>
            {skillGroups[4] && (
              <>
                <div className="flex items-center gap-2 mb-4" style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  {skillGroups[4].icon}
                  {skillGroups[4].title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroups[4].skills.map(s => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Stats bar */}
          <div className="fade-up card p-6" style={{ transitionDelay: "240ms" }}>
            <div className="grid grid-cols-3 divide-x" style={{ "--tw-divide-opacity": "1", borderColor: "#1e2235" } as React.CSSProperties}>
              {stats.map((s) => (
                <div key={s.label} className="text-center px-6">
                  <div className="gradient-text font-bold text-2xl">{s.n}</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: "4px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}