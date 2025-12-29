import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harsh Kumar Banka - AI/ML Engineer & Full Stack Developer',
  description: 'AI/ML Engineer building agentic AI systems, intelligent web applications with Next.js, TypeScript, and cutting-edge technologies.',
  keywords: 'Harsh Kumar Banka, AI Engineer, ML Engineer, Full Stack Developer, Python Developer, Machine Learning, Deep Learning, React Developer, Next.js Developer',
  authors: [{ name: 'Harsh Kumar Banka' }],
  creator: 'Harsh Kumar Banka',
  robots: 'index, follow, max-image-preview:large',
  openGraph: {
    title: 'Harsh Kumar Banka - AI/ML Engineer & Full Stack Developer',
    description: 'AI/ML Engineer building agentic AI systems, intelligent web applications with Next.js, TypeScript, and cutting-edge technologies.',
    url: 'https://www.harshbanka.tech',
    siteName: 'Harsh Kumar Banka Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.harshbanka.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Harsh Kumar Banka - AI/ML Engineer & Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Kumar Banka - AI/ML Engineer & Full Stack Developer',
    description: 'AI/ML Engineer building agentic AI systems, intelligent web applications with Next.js, TypeScript, and cutting-edge technologies.',
    images: ['https://www.harshbanka.tech/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased dark scrollbar-thin`}>
        <Navigation />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}