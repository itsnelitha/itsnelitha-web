"use client";
import { useState, useRef, useEffect } from "react";
import { X, Send, Minimize2, Maximize2, Sparkles, Bot } from "lucide-react";

const SUGGESTIONS = [
  "What are Nelitha's skills?",
  "Tell me about his projects",
  "What certifications does he have?",
  "What experience does he have?",
];

type Message = {
  role: "user" | "assistant";
  text: string;
  time: string;
};

function getTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "👋 Hi! I'm Nexa, Nelitha's AI assistant. Ask me anything about his background, skills, projects, or experience!",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open && !minimized) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, minimized]);

  useEffect(() => {
    if (open && !minimized) inputRef.current?.focus();
  }, [open, minimized]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", text: text.trim(), time: getTime() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const history = [...messages, userMsg].map(m => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.text }],
      }));

      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();
      const reply = data?.reply ?? "Sorry, I couldn't get a response. Please try again.";
      setMessages(prev => [...prev, { role: "assistant", text: reply, time: getTime() }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: "Something went wrong. Please try again.", time: getTime() }]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <>
      {/* Floating bubble */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-10 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
          style={{ background: "linear-gradient(135deg, #6b8afd, #a855f7)", boxShadow: "0 4px 24px rgba(107,138,253,0.5)" }}
          title="Chat with Nelitha's AI"
        >
          <Sparkles size={22} color="white" strokeWidth={2} />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div
          className="fixed z-50 flex flex-col"
          style={{
            bottom: "24px",
            right: "24px",
            width: "min(380px, calc(100vw - 32px))",
            height: minimized ? "64px" : "min(560px, calc(100dvh - 100px))",
            background: "rgba(13, 15, 26, 0.97)",
            border: "1px solid #1e2235",
            borderRadius: "20px",
            backdropFilter: "blur(24px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(107,138,253,0.1)",
            transition: "height 0.3s ease",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{ borderBottom: minimized ? "none" : "1px solid #1e2235", cursor: "pointer" }}
            onClick={() => setMinimized(m => !m)}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #6b8afd, #a855f7)" }}
            >
              <Bot size={18} color="white" strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              <div style={{ color: "#6b8afd", fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.2 }}>
                Nexa
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.72rem" }}>Ask me about Nelitha</div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={e => { e.stopPropagation(); setMinimized(m => !m); }}
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ color: "var(--text-muted)" }}
              >
                {minimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </button>
              <button
                onClick={e => { e.stopPropagation(); setOpen(false); setMinimized(false); }}
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ color: "var(--text-muted)" }}
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3" style={{ minHeight: 0 }}>
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    {msg.role === "assistant" && (
                      <div
                        className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                        style={{ background: "linear-gradient(135deg, #6b8afd, #a855f7)" }}
                      >
                        <Bot size={14} color="white" strokeWidth={2} />
                      </div>
                    )}
                    <div className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`} style={{ maxWidth: "80%" }}>
                      <div
                        className="px-3 py-2 rounded-2xl text-sm leading-relaxed"
                        style={{
                          background: msg.role === "user"
                            ? "linear-gradient(135deg, #6b8afd, #a855f7)"
                            : "rgba(255,255,255,0.06)",
                          color: msg.role === "user" ? "white" : "var(--text-primary)",
                          borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                          border: msg.role === "assistant" ? "1px solid #1e2235" : "none",
                        }}
                      >
                        {msg.text}
                      </div>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.68rem" }}>{msg.time}</span>
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #6b8afd, #a855f7)" }}
                    >
                      <Bot size={14} color="white" strokeWidth={2} />
                    </div>
                    <div
                      className="px-4 py-3 rounded-2xl flex items-center gap-1"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid #1e2235" }}
                    >
                      {[0, 1, 2].map(i => (
                        <span
                          key={i}
                          style={{
                            width: "6px", height: "6px", borderRadius: "50%",
                            background: "#6b8afd", display: "inline-block",
                            animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Suggestions */}
              {messages.length <= 1 && (
                <div className="px-4 pb-2 flex flex-wrap gap-2">
                  {SUGGESTIONS.map(s => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs px-3 py-1.5 rounded-full transition-all hover:opacity-80"
                      style={{
                        background: "rgba(107,138,253,0.1)",
                        border: "1px solid rgba(107,138,253,0.25)",
                        color: "#6b8afd",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="px-4 pb-4 pt-2 flex-shrink-0" style={{ borderTop: "1px solid #1e2235" }}>
                <div className="flex gap-2 items-end">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder="Ask about Nelitha..."
                    rows={1}
                    maxLength={500}
                    className="flex-1 resize-none input-field"
                    style={{
                      minHeight: "40px",
                      maxHeight: "100px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      lineHeight: "1.4",
                    }}
                  />
                  <button
                    onClick={() => send(input)}
                    disabled={!input.trim() || loading}
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                    style={{
                      background: input.trim() && !loading
                        ? "linear-gradient(135deg, #6b8afd, #a855f7)"
                        : "rgba(255,255,255,0.06)",
                      border: "1px solid #1e2235",
                      opacity: input.trim() && !loading ? 1 : 0.5,
                    }}
                  >
                    <Send size={16} color="white" strokeWidth={2} />
                  </button>
                </div>
                <div className="flex justify-between mt-1" style={{ color: "var(--text-muted)", fontSize: "0.68rem" }}>
                  <span>{input.length}/500</span>
                  <span>Enter to send</span>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}