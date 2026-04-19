import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AffirmationClient from '@/app/components/AffirmationClient'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import Logo from '@/app/components/Logo'
import MobileMenu from '@/app/components/MobileMenu'
import { getAffirmationOfTheDay } from '@/app/data/affirmations'
import { ClickBankCTA } from '@/components/ClickBankCTA'
import Footer from '@/components/Footer'
import { ROUTES, generateBreadcrumbStructuredData } from '../../AppRoutes'

// Map category slugs to blog post category names for cross-linking
const CATEGORY_TO_BLOG: Record<string, string[] | undefined> = {
  general: ['Guide', 'Practice'],
  career: ['Career'],
  relationships: ['Personal Growth'],
  health: ['Health'],
  'personal-growth': ['Personal Growth'],
  confidence: ['Personal Growth', 'Mental Health'],
}

function getRelatedBlogPosts(categorySlug: string) {
  const blogCategories = CATEGORY_TO_BLOG[categorySlug] ?? []
  return Object.entries(ROUTES.blogPosts)
    .filter(([, post]) => blogCategories.includes(post.category))
    .map(([slug, post]) => ({ slug, ...post }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
}

const CATEGORIES = {
  general: ROUTES.affirmations.general,
  career: ROUTES.affirmations.career,
  relationships: ROUTES.affirmations.relationships,
  health: ROUTES.affirmations.health,
  'personal-growth': ROUTES.affirmations['personal-growth'],
  confidence: ROUTES.affirmations.confidence,
}

const getCategoryRoute = (slug: string) =>
  (CATEGORIES as Partial<typeof CATEGORIES>)[slug as keyof typeof CATEGORIES]

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params
  const category = getCategoryRoute(categorySlug)

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

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map(category => ({
    category,
  }))
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params
  const categoryData = getCategoryRoute(categorySlug)

  if (!categoryData) {
    notFound()
  }

  const initialAffirmation = getAffirmationOfTheDay(categorySlug)

  // Get category name for breadcrumbs
  const categoryName = categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: 'Home', url: 'https://daily-affirm.com' },
    { name: 'Affirmations', url: 'https://daily-affirm.com' },
    { name: categoryName, url: `https://daily-affirm.com${categoryData.path}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-10 shadow-sm relative">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8 min-w-[32px] min-h-[32px]" />
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Link href={ROUTES.home.path}>Daily Affirmations</Link>
                <span className="hidden md:inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-2 py-0.5 text-xs font-semibold border border-violet-200">
                  AI-powered
                </span>
              </h1>
              <nav className="hidden md:flex items-center gap-6 ml-auto">
                <Link
                  href={ROUTES.printables.path}
                  className="text-gray-700 hover:text-violet-600 font-semibold transition"
                >
                  Free Printables
                </Link>
                <Link
                  href={ROUTES.blog.path}
                  className="text-gray-700 hover:text-violet-600 font-semibold transition"
                >
                  Blog
                </Link>
              </nav>
              <div className="ml-auto md:hidden">
                <MobileMenu
                  links={[
                    { href: ROUTES.printables.path, label: 'Free Printables' },
                    { href: ROUTES.blog.path, label: 'Blog' },
                  ]}
                />
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <Breadcrumbs
            items={[{ name: 'Affirmations', href: ROUTES.home.path }, { name: categoryName }]}
          />

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryData.title}</h1>
          <p className="text-lg text-gray-600">{categoryData.description}</p>

          <AffirmationClient
            initialAffirmation={initialAffirmation}
            initialCategory={categorySlug}
          />

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
          {/* Related Blog Posts Cross-Link */}
          {(() => {
            const relatedPosts = getRelatedBlogPosts(categorySlug)
            if (relatedPosts.length === 0) {
              return null
            }
            return (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">From the Blog</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Deepen your understanding with these related articles.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedPosts.map(post => (
                    <Link
                      key={post.slug}
                      href={post.path}
                      className="group bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-violet-300 hover:shadow-lg transition"
                    >
                      <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-semibold mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-bold text-gray-900 group-hover:text-violet-600 transition mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link
                    href={ROUTES.blog.path}
                    className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-semibold"
                  >
                    View all articles
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </section>
            )
          })()}
        </main>

        <Footer />
      </div>
    </>
  )
}
