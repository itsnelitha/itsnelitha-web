import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nelitha Priyawansha - AI/ML Enthusiast & Developer, Cinematographer",
  description: "Portfolio of Nelitha Priyawansha, AI/ML Enthusiast and Full Stack Developer based in Panadura, Sri Lanka. Explore projects in web development, video production, and tech innovation.",
  
  keywords: [
    "Nelitha Priyawansha",
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Cinematographer",
    "Web Developer",
    "Portfolio",
    "Sri Lanka",
    "Video Editor",
    "Technology",
    "Coding"
  ],
  authors: [
    { name: "Nelitha Priyawansha", url: "https://linkedin.com/in/itsnelitha" }
  ],
  creator: "Nelitha Priyawansha",
  publisher: "Nelitha Priyawansha",
  applicationName: "Nelitha Portfolio",
  robots: "index, follow",
  
  openGraph: {
    title: "Nelitha Priyawansha - AI/ML Enthusiast & Developer, Cinematographer",
    description: "Explore the portfolio of Nelitha Priyawansha, a Sri Lankan Full Stack Developer, AI/ML Enthusiast, and Cinematographer.",
    url: "https://itsnelitha.vercel.app",
    siteName: "Nelitha Priyawansha Portfolio",
    type: "website",
    images: [
      {
        url: "https://itsnelitha.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nelitha Priyawansha Portfolio Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nelitha Priyawansha - AI/ML & Full Stack Developer",
    description: "Portfolio of Nelitha Priyawansha, showcasing tech projects, web dev, and cinematography.",
    site: "@itsnelitha",
    creator: "@itsnelitha",
    images: ["https://itsnelitha.vercel.app/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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
