import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nelitha Priyawansha — AI/ML Enthusiast & Full Stack Developer",
  description: "Portfolio of Nelitha Priyawansha, AI/ML Enthusiast and Full Stack Developer based in Panadura, Sri Lanka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
