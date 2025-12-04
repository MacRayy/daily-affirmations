import Link from 'next/link'
import { Star, Briefcase, Users, Leaf, Rocket, Zap } from 'lucide-react'
import { getAffirmationOfTheDay } from '../data/affirmations'

type AffirmationClientProps = {
  initialAffirmation: string
  initialCategory: string
}

const CATEGORIES = [
  {
    id: 'general',
    name: 'General',
    icon: Star,
    color: 'bg-violet-600',
    href: '/affirmations/general',
  },
  {
    id: 'career',
    name: 'Career',
    icon: Briefcase,
    color: 'bg-blue-600',
    href: '/affirmations/career',
  },
  {
    id: 'relationships',
    name: 'Relationships',
    icon: Users,
    color: 'bg-rose-600',
    href: '/affirmations/relationships',
  },
  {
    id: 'health',
    name: 'Health',
    icon: Leaf,
    color: 'bg-emerald-600',
    href: '/affirmations/health',
  },
  {
    id: 'personal-growth',
    name: 'Personal Growth',
    icon: Rocket,
    color: 'bg-indigo-600',
    href: '/affirmations/personal-growth',
  },
  {
    id: 'confidence',
    name: 'Confidence',
    icon: Zap,
    color: 'bg-amber-600',
    href: '/affirmations/confidence',
  },
]

export const metadata = {
  title: 'Daily Affirmations - Positive Motivation & Inspiration',
  description:
    'Start your day with powerful affirmations. Get personalized daily motivation for career, relationships, health, confidence, and personal growth.',
}

export default function Home({
  initialAffirmation = getAffirmationOfTheDay('general'),
}: AffirmationClientProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto">
        {/* Category Links as Buttons */}
        <div className="mb-8">
          <h2 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
            Choose Your Focus
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {CATEGORIES.map(category => {
              const Icon = category.icon
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  className="p-4 rounded-xl transition-all border-2 shadow-sm hover:shadow-md bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                    <span className="font-semibold text-sm">{category.name}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Today's Affirmation */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8 md:p-12">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-violet-600 text-white">
              <Star className="w-5 h-5" strokeWidth={2} />
              Today&apos;s Affirmation
            </span>
          </div>

          <div className="mb-8">
            <p className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
              &ldquo;{initialAffirmation}&rdquo;
            </p>
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
              you're focusing on career success, building confidence, nurturing relationships, or
              prioritizing your health and wellbeing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Research shows that daily positive affirmations can reduce stress, increase
              self-confidence, and improve overall mental wellbeing. Start each morning with a fresh
              affirmation designed to inspire and empower you throughout your day.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
