import AffirmationClient from '@/app/components/AffirmationClient'
import { getAffirmationOfTheDay } from '@/app/data/affirmations'
import { notFound } from 'next/navigation'
import Logo from '@/app/components/Logo'

const CATEGORIES = {
  general: {
    title: 'Daily General Affirmations',
    description:
      'Start your day with powerful general affirmations for overall wellbeing and positivity.',
    keywords: 'daily affirmations, positive thinking, self improvement, mindfulness',
  },
  career: {
    title: 'Career & Success Affirmations',
    description:
      'Boost your professional confidence with daily career affirmations for success and growth.',
    keywords: 'career affirmations, professional development, success mindset, work motivation',
  },
  relationships: {
    title: 'Relationship Affirmations',
    description:
      'Nurture healthy connections with daily relationship affirmations for love and communication.',
    keywords:
      'relationship affirmations, love affirmations, communication skills, healthy relationships',
  },
  health: {
    title: 'Health & Wellness Affirmations',
    description: 'Support your wellbeing journey with daily health affirmations for mind and body.',
    keywords: 'health affirmations, wellness, self care, mental health, physical health',
  },
  'personal-growth': {
    title: 'Personal Growth Affirmations',
    description:
      'Accelerate your development with daily personal growth affirmations for transformation.',
    keywords: 'personal growth, self development, personal transformation, life improvement',
  },
  confidence: {
    title: 'Confidence Building Affirmations',
    description: 'Build unshakeable self-confidence with daily affirmations for empowerment.',
    keywords: 'confidence affirmations, self esteem, self worth, empowerment, self belief',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params
  const category = CATEGORIES[categorySlug as keyof typeof CATEGORIES]

  if (!category) {
    return {}
  }

  return {
    title: `${category.title} - Daily Affirmations`,
    description: category.description,
    keywords: category.keywords,
    openGraph: {
      title: `${category.title} - Daily Affirmations`,
      description: category.description,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map(category => ({
    category,
  }))
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params
  const categoryData = CATEGORIES[categorySlug as keyof typeof CATEGORIES]

  if (!categoryData) {
    notFound()
  }

  const initialAffirmation = getAffirmationOfTheDay(categorySlug)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <h1 className="text-2xl font-bold text-gray-900">Daily Affirmations</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryData.title}</h1>
        <p className="text-lg text-gray-600">{categoryData.description}</p>

        <AffirmationClient initialAffirmation={initialAffirmation} initialCategory={categorySlug} />

        {/* SEO Content */}
        <div className="mt-12 bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why {categoryData.title} Work</h2>
          <p className="text-gray-600 leading-relaxed">
            {categoryData.description} Research shows that consistent practice of positive
            affirmations can rewire neural pathways and improve overall wellbeing. Make these
            affirmations part of your daily routine for best results.
          </p>
        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p className="text-sm font-medium">© 2025 Daily Affirmations.</p>
        </div>
      </footer>
    </div>
  )
}
