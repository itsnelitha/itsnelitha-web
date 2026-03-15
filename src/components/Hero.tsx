"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin, Mail, Linkedin, Github, Download } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random() * 0.3 + 0.05,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(107,138,253,${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <style>{`
        @keyframes spinGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulseDot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.45); }
          50% { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .scroll-bounce { animation: scrollBounce 1.5s ease-in-out infinite; }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "#0d0f1a" }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.7 }} />

        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 pointer-events-none" style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)",
          filter: "blur(40px)",
        }} />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 pointer-events-none" style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)",
          filter: "blur(40px)",
        }} />

        {/* Hero card */}
        <div className="relative z-10 w-full px-5 sm:px-0 flex justify-center">
          <div
            className="w-full max-w-xl p-6 sm:p-10 text-center"
            style={{
              background: "rgba(19, 21, 37, 0.75)",
              border: "1px solid #1e2235",
              borderRadius: "20px",
              backdropFilter: "blur(20px)",
              animation: "fadeUp 0.7s ease forwards",
            }}
          >
            {/* Profile pic */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div
                  style={{
                    width: "96px",
                    height: "96px",
                    borderRadius: "50%",
                    padding: "3px",
                    background: "linear-gradient(135deg, #6b8afd, #a855f7, #4fc3f7, #6b8afd)",
                    backgroundSize: "300% 300%",
                    animation: "spinGradient 3s linear infinite",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "#161829",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/dp.jpg"
                      alt="Nelitha Priyawansha"
                      width={100}
                      height={100}
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                  </div>
                </div>
                <span
                  style={{
                    position: "absolute",
                    bottom: "6px",
                    right: "2px",
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    border: "2.5px solid #161829",
                    animation: "pulseDot 2s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl font-bold mb-3"
              style={{
                lineHeight: 1.1,
                background: "linear-gradient(135deg, #6b8afd 0%, #4fc3f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nelitha Priyawansha
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg mb-6" style={{ color: "#9aa0b8" }}>
              <span style={{ color: "#6b8afd" }}>AI/ML Enthusiast, </span>
              <span style={{ color: "#b5c3ee" }}>Developer, </span>
              <span style={{ color: "#e8eaf0" }}>Videographer & Editor</span>
            </p>

            {/* Location + Email */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8" style={{ color: "#9aa0b8", fontSize: "0.875rem" }}>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} strokeWidth={2} />
                Panadura, Sri Lanka
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} strokeWidth={2} />
                itsnelitha@gmail.com
              </span>
            </div>

            {/* Buttons row */}
            <div className="flex flex-wrap items-center justify-center gap-3">

              <a
                href="https://www.linkedin.com/in/itsnelitha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid #1e2235" }}
              >
                <Linkedin size={18} color="#6b8afd" fill="#6b8afd" />
              </a>

              <a
                href="https://github.com/itsnelitha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid #1e2235" }}
              >
                <Github size={18} color="#9aa0b8" fill="#9aa0b8" />
              </a>

              <a
                href="/Nelitha_Priyawansha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                aria-label="Download Resume"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm relative text-white font-semibold"
                style={{
                  background: "linear-gradient(135deg, #6b8afd, #a855f7)",
                  transition: "opacity 0.2s, transform 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-4px",
                    right: "-4px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#f59e0b",
                    border: "2px solid #0d0f1a",
                  }}
                />
                <Download size={16} color="white" strokeWidth={2} />
                Download Resume
              </a>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: "#2a3050" }}
          >
            <div className="w-1 h-2 rounded-full scroll-bounce" style={{ background: "#6b8afd" }} />
          </div>
        </div>
      </section>
    </>
  );
}