"use client";
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, Music,} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

import Link from "next/link";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-24" style={{ background: "var(--bg)" }} ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="fade-up text-center mb-12">
          <h2 className="section-heading mb-4">Let&apos;s Connect</h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "580px", margin: "0 auto", lineHeight: 1.7 }}>
            I'm always open to discussing new opportunities, collaborations, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Get in Touch */}
          <div className="fade-up space-y-4">
            <h3 style={{ color: "#6b8afd", fontWeight: 700, fontSize: "1.1rem", marginBottom: "16px" }}>
              Get in Touch
            </h3>

            {/* Email */}
            <div className="card p-4 flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(59,130,246,0.12)" }}
              >
                <Mail size={18} color="#3b82f6" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9rem" }}>Email</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.82rem" }}>itsnelitha@gmail.com</div>
              </div>
            </div>

            {/* Phone */}
            <div className="card p-4 flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(34,197,94,0.12)" }}
              >
                <Phone size={18} color="#22c55e" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9rem" }}>Phone</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.82rem" }}>+94 775536129</div>
              </div>
            </div>

            {/* Location */}
            <div className="card p-4 flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(139,92,246,0.12)" }}
              >
                <MapPin size={18} color="#8b5cf6" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9rem" }}>Location</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.82rem" }}>Panadura, Sri Lanka</div>
              </div>
            </div>

            {/* Follow Me */}
            <div style={{ paddingTop: "8px" }}>
              <div style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "12px" }}>Follow Me</div>
              <div className="flex gap-3">
                <Link href="https://www.linkedin.com/in/itsnelitha" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid #1e2235" }}
              >
                <FaLinkedin size={18} color="#6b8afd" fill="#6b8afd" />
              </Link>

              <Link href="https://github.com/itsnelitha" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid #1e2235" }}
              >
                <FaGithub size={18} color="#9aa0b8" fill="#9aa0b8" />
              </Link>

              <Link href="https://facebook.com/itsnelitha" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid #1e2235" }}
              >
                <FaFacebook size={18} color="#9aa0b8" fill="#9aa0b8" />
              </Link>

              <Link href="https://instagram.com/itsnelitha" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid #1e2235" }}
              >
                <FaInstagram size={18} color="#9aa0b8" fill="#9aa0b8" />
              </Link>

              <Link href="https://youtube.com/channel/UCMWmBMnq0nMeZisA3lo1YYQ" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid #1e2235" }}
              >
                <FaYoutube size={18} color="#ff3b3b" fill="#ff3b3b" />
              </Link>

              <Link href="https://tiktok.com/@itsnelitha" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid #1e2235" }}
              >
                <FaTiktok size={18} color="#ffffff" />
              </Link>

              </div>
            </div>
          </div>

          {/* Right: Send a Message */}
          <div className="fade-up card p-6" style={{ transitionDelay: "120ms" }}>
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare size={18} color="#6b8afd" strokeWidth={1.8} />
              <span style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1rem" }}>Send a Message</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label style={{ color: "var(--text-secondary)", fontSize: "0.85rem", display: "block", marginBottom: "6px" }}>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label style={{ color: "var(--text-secondary)", fontSize: "0.85rem", display: "block", marginBottom: "6px" }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label style={{ color: "var(--text-secondary)", fontSize: "0.85rem", display: "block", marginBottom: "6px" }}>
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                  className="input-field"
                  style={{ resize: "none" }}
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="btn-gradient w-full py-3 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "sent" ? (
                  "✓ Message Sent!"
                ) : (
                  <>
                    <Send size={16} color="white" strokeWidth={2} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
