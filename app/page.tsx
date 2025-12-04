import AffirmationClient from './components/AffirmationClient'
import { getAffirmationOfTheDay } from './data/affirmations'
import Logo from '@/app/components/Logo'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, Briefcase, Users, Leaf, Rocket, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Daily Affirmations - Positive Motivation & Inspiration',
  description: 'Start your day with powerful affirmations.',
}

const CATEGORIES = [
  { id: 'general', name: 'General', icon: Star, href: '/affirmations/general' },
  { id: 'career', name: 'Career', icon: Briefcase, href: '/affirmations/career' },
  { id: 'relationships', name: 'Relationships', icon: Users, href: '/affirmations/relationships' },
  { id: 'health', name: 'Health', icon: Leaf, href: '/affirmations/health' },
  {
    id: 'personal-growth',
    name: 'Personal Growth',
    icon: Rocket,
    href: '/affirmations/personal-growth',
  },
  { id: 'confidence', name: 'Confidence', icon: Zap, href: '/affirmations/confidence' },
]

export default function Home() {
  const initialCategory = 'general'
  const initialAffirmation = getAffirmationOfTheDay(initialCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <h1 className="text-2xl font-bold text-gray-900">
              <Link href="/">Daily Affirmations</Link>
            </h1>
            <nav className="flex items-center gap-6 ml-auto">
              <Link
                href="/blog"
                className="text-gray-700 hover:text-violet-600 font-semibold transition"
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Interactive Affirmation Component */}
        <AffirmationClient
          initialAffirmation={initialAffirmation}
          initialCategory={initialCategory}
        />

        {/* Category Links for SEO */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Explore Affirmations by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CATEGORIES.map(category => {
              const Icon = category.icon
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:shadow-lg hover:border-violet-300 transition group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon
                      className="w-5 h-5 text-gray-700 group-hover:text-violet-600 transition"
                      strokeWidth={2}
                    />
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-violet-600 transition">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    View all {category.name.toLowerCase()} affirmations
                  </p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Start Your Day with Powerful Daily Affirmations
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Transform your mindset with personalized daily affirmations. Our affirmation generator
              provides unique, meaningful affirmations tailored to your specific needs—whether
              you&#39;re focusing on career success, building confidence, nurturing relationships,
              or prioritizing your health and wellbeing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Research shows that daily positive affirmations can reduce stress, increase
              self-confidence, and improve overall mental wellbeing. Start each morning with a fresh
              affirmation designed to inspire and empower you throughout your day.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p className="text-sm font-medium">
            © 2025 Daily Affirmations. Empowering you every day.
          </p>
        </div>
      </footer>
    </div>
  )
}
