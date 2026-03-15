"use client";
import { useState, useEffect } from "react";
import { Home, User, Briefcase, Code, Award, Mail } from "lucide-react";

const navItems = [
  { id: "home",         icon: <Home size={18} strokeWidth={1.8} /> },
  { id: "about",        icon: <User size={18} strokeWidth={1.8} /> },
  { id: "experience",   icon: <Briefcase size={18} strokeWidth={1.8} /> },
  { id: "projects",     icon: <Code size={18} strokeWidth={1.8} /> },
  { id: "achievements", icon: <Award size={18} strokeWidth={1.8} /> },
  { id: "contact",      icon: <Mail size={18} strokeWidth={1.8} /> },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      const ids = navItems.map(n => n.id);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div
        className="flex items-center gap-1 px-4 py-3"
        style={{
          background: "rgba(19, 21, 37, 0.92)",
          border: "1px solid #1e2235",
          borderRadius: "100px",
          backdropFilter: "blur(20px)",
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            // FIX: each button now has a unique, descriptive aria-label
            aria-label={`Go to ${item.id.charAt(0).toUpperCase() + item.id.slice(1)} section`}
            title={item.id.charAt(0).toUpperCase() + item.id.slice(1)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              color: active === item.id ? "#e8eaf0" : "#5a6080",
              background: active === item.id ? "rgba(107,138,253,0.15)" : "transparent",
            }}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </nav>
  );
}