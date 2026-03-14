"use client";
import { useEffect, useRef } from "react";
import { Briefcase, Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Web Developer, Videographer & Editor",
    badge: "Freelance",
    badgeColor: "#6b8afd",
    company: "Frame Toque Digital",
    period: "Dec. 2025 – Present",
    location: "Sri Lanka",
    points: [
      "Developed and maintained multiple client websites using Next.js, Tailwind CSS, and AWS services, achieving a 30% increase in site performance and user engagement.",
      "Produced and edited high-quality video content for various clients, resulting in a 25% increase in audience engagement across social media platforms.",
    ],
  },

  {
    role: "Co-Chief Editor",
    badge: "Digital Journalism",
    badgeColor: "#8b5cf6",
    company: "Android වැඩකාරයෝ",
    period: "Aug. 2021 – Present",
    location: "Sri Lanka",
    points: [
      "Co-Chief Editor for Sri Lanka's leading Tech news platform, overseeing content strategy and publication.",
      "Led a team of writers to produce in-depth articles on emerging technologies, resulting in a 40% increase in readership and engagement across social media platforms.",
    ],
  },
  

   {
    role: "Web Developer",
    badge: "Project Management",
    badgeColor: "#ec4848",
    company: "Prince of Wales' College",
    period: "May. 2023 – Dec. 2025",
    location: "Moratuwa, Sri Lanka",
    points: [
      "Led the development of a comprehensive school website. also won best school website silver award at bestweblk 2024.",
    ],
  },
  
  {
    role: "President",
    badge: "Leadership",
    badgeColor: "#ec4899",
    company: "Cambrians' ICT Society",
    period: "Jan. 2024 – Jan. 2025",
    location: "Prince of Wales' College, Moratuwa",
    points: [
      "Led the ICT Society to achieve a 50% increase in membership and organized workshops and events, fostering a vibrant tech community within the school.",
    ],
  },

  {
    role: "Videographer & Editor",
    badge: "Content Creation",
    badgeColor: "#06b6d4",
    company: "Cambrians' Media & Broadcasting Unit",
    period: "Sep. 2021 – Dec. 2024",
    location: "Prince of Wales' College, Moratuwa",
    points: [
      "Led a team in producing high-quality videos, including event coverage and promotional content, resulting in a 30% increase in audience engagement across social media platforms.",
      "Spearheaded the development of a video content strategy that increased viewership by 25% and enhanced the school's online presence.",
    ],
  },
];

export default function Experience() {
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

  return (
    <section id="experience" className="py-24" style={{ background: "var(--bg)" }} ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="fade-up text-center mb-12">
          <h2 className="section-heading mb-4">Experience</h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            My professional journey through various roles in AI/ML, software development, and technical leadership positions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: "16px",
              width: "1px",
              background: "linear-gradient(to bottom, #6b8afd, rgba(107,138,253,0.1))",
            }}
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="fade-up flex gap-6" style={{ transitionDelay: `${i * 80}ms` }}>
                {/* Dot */}
                <div className="flex-shrink-0 mt-6" style={{ width: "32px" }}>
                  <div
                    className="w-2.5 h-2.5 rounded-full mx-auto"
                    style={{ background: "#6b8afd", border: "2px solid var(--bg)", marginTop: "6px" }}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 card p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Briefcase size={16} color="#6b8afd" strokeWidth={1.8} />
                      <span style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1rem" }}>
                        {exp.role}
                      </span>
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                        style={{
                          background: `${exp.badgeColor}18`,
                          border: `1px solid ${exp.badgeColor}35`,
                          color: exp.badgeColor,
                        }}
                      >
                        {exp.badge}
                      </span>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 size={13} color="#6b8afd" strokeWidth={2} />
                    <span style={{ color: "#6b8afd", fontWeight: 500, fontSize: "0.875rem" }}>{exp.company}</span>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4" style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} strokeWidth={2} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} strokeWidth={2} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2">
                    {exp.points.map((p, j) => (
                      <li key={j} className="flex gap-2" style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                        <span
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                          style={{ background: "var(--text-muted)" }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
