import AffirmationClient from '@/app/components/AffirmationClient'
import { getAffirmationOfTheDay } from '@/app/data/affirmations'
import { notFound } from 'next/navigation'
import Logo from '@/app/components/Logo'
import Link from 'next/link'
import { ClickBankCTA } from '@/components/ClickBankCTA'
import { ROUTES } from '../../AppRoutes'

const CATEGORIES = {
  general: ROUTES.affirmations.general,
  career: ROUTES.affirmations.career,
  relationships: ROUTES.affirmations.relationships,
  health: ROUTES.affirmations.health,
  'personal-growth': ROUTES.affirmations['personal-growth'],
  confidence: ROUTES.affirmations.confidence,
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params
  const category = CATEGORIES[categorySlug as keyof typeof CATEGORIES]

  if (!category) {
    return {}
  }

  return {
    title: category.title,
    description: category.description,
    keywords: category.keywords,
    openGraph: {
      title: category.title,
      description: category.description,
      type: 'website',
      url: category.path,
      site_name: 'Daily Affirmations',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: category.title,
      description: category.description,
      site: '@dailyaffirmations',
    },
    alternates: {
      canonical: category.path,
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
            <h1 className="text-2xl font-bold text-gray-900">
              <Link href={ROUTES.home.path}>Daily Affirmations</Link>
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryData.title}</h1>
        <p className="text-lg text-gray-600">{categoryData.description}</p>

        <AffirmationClient initialAffirmation={initialAffirmation} initialCategory={categorySlug} />

        <section className="mt-12 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Recommended for You</h2>
            <p className="text-sm text-gray-600">
              Resources that can complement your daily affirmation practice.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <ClickBankCTA
              href="https://a50edfj1y4zwel2askfuwero7q.hop.clickbank.net"
              title="Mindset & Motivation Program"
              description="A recommended resource to support your mindset and stay consistent with daily habits."
              buttonLabel="Learn More"
            />
            <ClickBankCTA
              href="https://7d623ci3w2-t9l8dfgofyg5r16.hop.clickbank.net"
              title="Confidence & Personal Growth Resource"
              description="Explore this option as a next step alongside your affirmation practice."
              buttonLabel="View Details"
            />
          </div>
        </section>

        {/* SEO Content */}
        <div className="mt-12 bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why {categoryData.title} Work</h2>
          <p className="text-gray-600 leading-relaxed">
            {categoryData.description} Research shows that consistent practice of positive
            affirmations can rewire neural pathways and improve overall wellbeing. Make these
            affirmations part of your daily routine for best results.
          </p>
        </div>

        <section className="mt-12 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">More Recommended Resources</h2>
            <p className="text-sm text-gray-600">
              More options you can explore to support your personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <ClickBankCTA
              href="https://40f577b3s5bn2t1csgz9pqhs77.hop.clickbank.net"
              title="Wellness & Stress Support Option"
              description="A wellness-focused option that may help support calmer days and healthier routines."
              buttonLabel="See Option"
            />
            <ClickBankCTA
              href="https://40cc0ap-1w8r3l4cng1k0i2l4p.hop.clickbank.net"
              title="Self-Improvement Toolkit"
              description="A practical resource to pair with affirmations, reflection, and personal development."
              buttonLabel="Check It Out"
            />
          </div>
        </section>
      </main>

      <footer className="bg-white border-t-2 border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p className="text-sm font-medium">© 2025 Daily Affirmations.</p>
        </div>
      </footer>
    </div>
  )
}
