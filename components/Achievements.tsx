"use client";
import { useEffect, useRef } from "react";
import { Trophy, Star, Building2, MapPin, Calendar, Award, Globe, Monitor, Users } from "lucide-react";

const achievements = [
  {
    title: "The Cambrian Award – Best All-Rounder",
    project: "Intermediate Section",
    org1: "Prince of Wales' College, Moratuwa",
    org2: "Sri Lanka",
    date: "March 2025",
    description: "Recognized as the Best All-Rounder for outstanding performance in academics, extracurricular activities, and leadership during the 2022 academic year.",
    icon: <Trophy size={22} color="#f59e0b" strokeWidth={1.8} />,
    badge: { label: "1st Place", color: "#f59e0b", bg: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.3)" },
  },
  {
    title: "Best School Website – Silver Award",
    project: "Prince of Wales' College Website",
    org1: "LK Domain Registry",
    org2: "Sri Lanka",
    date: "August 2024",
    description: "The Prince of Wales' College Moratuwa website, which I developed and led the team for, won the Silver Award for Best School Website at BestWeb.lk 2024.",
     icon: <Trophy size={22} color="#f59e0b" strokeWidth={1.8} />,
    badge: { label: "1st Place", color: "#f59e0b", bg: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.3)" },
  },
  {
    title: "Merit Awardee – Young Computer Scientist",
    project: "National Level ICT Competition 2022",
    org1: "Ministry of Education",
    org2: "Sri Lanka",
    date: "December 2022",
    description: "Merit Awardee at the National Level ICT Competition 2022 Awards Ceremony held at the Ministry of Education with the distinguished presence of the Hon. Minister of Education.",
    icon: <Monitor size={22} color="#60a5fa" strokeWidth={1.8} />,
    badge: { label: "Merit Awardee", color: "#60a5fa", bg: "rgba(96,165,250,0.15)", border: "rgba(96,165,250,0.3)" },
  },
  {
    title: "Finalist – Glocal Teen Hero Sri Lanka",
    project: "1st Glocal Teen Hero Competition 2020",
    org1: "Glocal Pvt. Ltd.",
    org2: "Sri Lanka",
    date: "January 2020",
    description: "Selected as a Top 6 Finalist in the inaugural Glocal Teen Hero Competition in Sri Lanka 2020, recognizing young leaders making a difference.",
    icon: <Users size={22} color="#f472b6" strokeWidth={1.8} />,
    badge: { label: "Top 6 Finalist", color: "#f472b6", bg: "rgba(244,114,182,0.15)", border: "rgba(244,114,182,0.3)" },
  },
];

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".fade-up").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 100)
          );
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-24" style={{ background: "var(--bg)" }} ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="fade-up text-center mb-12">
          <h2 className="section-heading mb-4">Achievements</h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            Recognition and awards that showcase my technical expertise, innovation, and competitive programming capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className="fade-up card p-6"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Top row: icon + title + badge */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  {/* Icon box */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: a.badge.bg,
                      border: `1px solid ${a.badge.border}`,
                    }}
                  >
                    {a.icon}
                  </div>
                  <div>
                    <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.4 }}>
                      {a.title}
                    </h3>
                  </div>
                </div>

                {/* Badge */}
                <div
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: a.badge.bg,
                    border: `1px solid ${a.badge.border}`,
                    color: a.badge.color,
                  }}
                >
                  <Star size={10} color={a.badge.color} fill={a.badge.color} />
                  {a.badge.label}
                </div>
              </div>

              {/* Project name */}
              <div style={{ color: a.badge.color, fontWeight: 600, fontSize: "0.875rem", marginBottom: "12px" }}>
                {a.project}
              </div>

              {/* Meta info */}
              <div className="space-y-1.5 mb-4">
                <div className="flex items-center gap-2" style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                  <Building2 size={12} strokeWidth={2} />
                  {a.org1}
                </div>
                <div className="flex items-center gap-2" style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                  <MapPin size={12} strokeWidth={2} />
                  {a.org2}
                </div>
                <div className="flex items-center gap-2" style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                  <Calendar size={12} strokeWidth={2} />
                  {a.date}
                </div>
              </div>

              <div
                className="w-full h-px mb-4"
                style={{ background: "var(--card-border)" }}
              />

              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.65 }}>
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}