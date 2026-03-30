import { notFound } from 'next/navigation'
import Link from 'next/link'
import Logo from '@/app/components/Logo'
import MobileMenu from '@/app/components/MobileMenu'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import { ROUTES, generateBreadcrumbStructuredData } from '@/app/AppRoutes'
import {
  NICHE_AFFIRMATIONS,
  getNicheAffirmationOfTheDay,
  NICHE_SLUGS,
} from '@/app/data/niche-affirmations'
import NicheAffirmationClient from './NicheAffirmationClient'

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params
  const nicheData = NICHE_AFFIRMATIONS[topic]

  if (!nicheData) {
    return {}
  }

  const path = `/affirmations/for/${topic}`

  return {
    title: nicheData.title,
    description: nicheData.description,
    keywords: nicheData.keywords,
    openGraph: {
      title: nicheData.title,
      description: nicheData.description,
      type: 'website',
      url: path,
      site_name: 'Daily Affirmations',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: nicheData.title,
      description: nicheData.description,
      site: '@dailyaffirm',
    },
    alternates: {
      canonical: path,
    },
  }
}

export async function generateStaticParams() {
  return NICHE_SLUGS.map(topic => ({
    topic,
  }))
}

export default async function NicheAffirmationPage({
  params,
}: {
  params: Promise<{ topic: string }>
}) {
  const { topic } = await params
  const nicheData = NICHE_AFFIRMATIONS[topic]

  if (!nicheData) {
    notFound()
  }

  const initialAffirmation = getNicheAffirmationOfTheDay(topic)

  // Format topic name for display
  const topicName = topic
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: 'Home', url: 'https://daily-affirm.com' },
    { name: 'Affirmations', url: 'https://daily-affirm.com' },
    { name: `For ${topicName}`, url: `https://daily-affirm.com/affirmations/for/${topic}` },
  ])

  // Structured data for the page
  const pageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: nicheData.title,
    description: nicheData.description,
    url: `https://daily-affirm.com/affirmations/for/${topic}`,
    mainEntity: {
      '@type': 'ItemList',
      name: `Affirmations for ${topicName}`,
      description: nicheData.description,
      numberOfItems: nicheData.affirmations.length,
      itemListElement: nicheData.affirmations.slice(0, 10).map((affirmation, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Quotation',
          text: affirmation,
        },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }}
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
            items={[{ name: 'Affirmations', href: ROUTES.home.path }, { name: `For ${topicName}` }]}
          />

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{nicheData.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{nicheData.description}</p>

          <NicheAffirmationClient
            topic={topic}
            topicName={topicName}
            initialAffirmation={initialAffirmation}
            allAffirmations={nicheData.affirmations}
          />

          {/* All Affirmations List for SEO */}
          <div className="mt-12 bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              All {nicheData.affirmations.length} Affirmations for {topicName}
            </h2>
            <ol className="space-y-4">
              {nicheData.affirmations.map((affirmation, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed pt-1">&ldquo;{affirmation}&rdquo;</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Related Categories */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Affirmations</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {NICHE_SLUGS.filter(slug => slug !== topic)
                .slice(0, 6)
                .map(slug => {
                  const data = NICHE_AFFIRMATIONS[slug]
                  const name = slug
                    .split('-')
                    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(' ')
                  return (
                    <Link
                      key={slug}
                      href={`/affirmations/for/${slug}`}
                      className="p-4 bg-white border-2 border-gray-200 rounded-xl hover:shadow-lg hover:border-violet-300 transition"
                    >
                      <h3 className="font-bold text-gray-900 group-hover:text-violet-600 transition">
                        For {name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {data.affirmations.length} affirmations
                      </p>
                    </Link>
                  )
                })}
            </div>
          </div>

          {/* SEO Content */}
          <div className="mt-12 bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to Use These {topicName} Affirmations
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                These affirmations for {topic.replace(/-/g, ' ')} are designed to help you build a
                positive mindset and overcome challenges in this specific area of your life. Regular
                practice can lead to meaningful changes in how you think and feel.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">Best Practices:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Repeat your chosen affirmation 3-5 times each morning</li>
                <li>Say them out loud with conviction and feeling</li>
                <li>Write them in a journal for deeper impact</li>
                <li>
                  Use the &ldquo;Generate New&rdquo; button to find affirmations that resonate with
                  you
                </li>
                <li>Practice consistently for at least 21 days to form new thought patterns</li>
              </ul>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
