"use client";
import { useEffect, useRef } from "react";
import { FileClock, Book, Video, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: <FileClock size={24} color="#6b8afd" strokeWidth={1.8} />,
    iconBg: "rgba(107,138,253,0.12)",
    title: "Daily Period Tracking System",
    desc1: "Developed a streamlined tracking system for Prince of Wales College to digitize daily period monitoring.",
    desc2: "Implemented features for teacher attendance tracking, timetable management, enhancing organizational efficiency and communication within the college.",
    tags: ["HTML/CSS", "PHP", "MySQL", "Bootstrap"],
    wide: false,
  },
  {
    icon: <Book size={24} color="#a78bfa" strokeWidth={1.8} />,
    iconBg: "rgba(167,139,250,0.12)",
    title: "School Library Management System",
    desc1: "Developed a comprehensive library management system to streamline book inventory and circulation processes.",
    desc2: "Implemented features such as book tracking, user management, and reporting, resulting in improved efficiency and organization for the school library.",
    tags: ["HTML/CSS", "PHP", "MySQL", "Bootstrap"],
    wide: false,
  },
  {
    icon: <Video size={24} color="#34d399" strokeWidth={1.8} />,
    iconBg: "rgba(52,211,153,0.12)",
    title: "AI Video Quality Analyzer",
    desc1: "Developed an AI-powered video quality analysis tool that utilizes advanced machine learning models to assess and enhance video content.",
    desc2: "Implemented features for automated quality scoring, noise reduction, and resolution enhancement, resulting in improved video quality and user experience.",
    tags: ["TypeScript", "Node.js", "Python", "NextJS", "LLM", "OpenCV", "TensorFlow", "FastAPI"],
    wide: true,
    showExternalIcon: true,
    link: "https://studio.frametoque.online/video-analyzer",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".fade-up").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 100)
          );
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const topProjects = projects.filter(p => !p.wide);
  const wideProject = projects.find(p => p.wide);

  return (
    <section id="projects" className="py-24" style={{ background: "var(--bg)" }} ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="fade-up text-center mb-12">
          <h2 className="section-heading mb-4">Featured Projects</h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
            A showcase of my technical projects spanning AI/ML, full-stack development, and innovative
            solutions that demonstrate my expertise and passion for technology.
          </p>
        </div>

        {/* 2-column grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {topProjects.map((p, i) => (
            <div
              key={p.title}
              className="fade-up card p-6 hover:border-blue-500 transition-colors duration-300"
              style={{ transitionDelay: `${i * 80}ms`, "--tw-border-opacity": "0.3" } as React.CSSProperties}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: p.iconBg }}
              >
                {p.icon}
              </div>

              <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1rem", lineHeight: 1.4, marginBottom: "10px" }}>
                {p.title}
              </h3>

              <p style={{ color: "var(--text-secondary)", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: "6px" }}>
                {p.desc1}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", lineHeight: 1.6, marginBottom: "16px" }}>
                {p.desc2}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => <span key={t} className="skill-pill">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Wide card */}
        {wideProject && (
          <div className="fade-up card p-6" style={{ transitionDelay: "200ms" }}>
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: wideProject.iconBg }}
              >
                {wideProject.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1rem", marginBottom: "8px" }}>
                      {wideProject.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: "4px" }}>
                      {wideProject.desc1}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", lineHeight: 1.6, marginBottom: "14px" }}>
                      {wideProject.desc2}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {wideProject.tags.map(t => <span key={t} className="skill-pill">{t}</span>)}
                    </div>
                  </div>

                  {/* External link icon */}

                  <a href={wideProject.link} target="_blank">
                  <button
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #1e2235" }}
                  >
                    <ExternalLink size={14} color="#9aa0b8" strokeWidth={2} />
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
