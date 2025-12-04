import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/app/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daily Affirmations - Positive Motivation & Inspiration',
  description:
    'Start your day with powerful AI-generated affirmations. Get personalized daily motivation for career, relationships, health, confidence, and personal growth.',
  keywords:
    'daily affirmations, positive affirmations, morning motivation, self improvement, mindfulness, personal growth, confidence building',
  openGraph: {
    title: 'Daily Affirmations - Positive Motivation & Inspiration',
    description: 'Transform your mindset with personalized daily affirmations',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily Affirmations',
    description: 'Start your day with powerful affirmations',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
