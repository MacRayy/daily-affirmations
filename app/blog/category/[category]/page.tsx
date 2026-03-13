import Link from 'next/link'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import { Calendar, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { ROUTES, generateBreadcrumbStructuredData } from '../../../AppRoutes'

const BLOG_CATEGORIES = {
  guide: {
    name: 'Guide',
    title: 'Affirmation Guides - Step-by-Step Tutorials & How-To Articles',
    description:
      'Practical, step-by-step guides on how to use affirmations effectively. Learn proven techniques, build daily routines, and get the most out of your affirmation practice.',
    keywords:
      'affirmation guides, how to use affirmations, affirmation tutorials, daily affirmation routine, affirmation tips, affirmation practice guide',
  },
  science: {
    name: 'Science',
    title: 'The Science of Affirmations - Research, Psychology & Neuroscience',
    description:
      'Explore the research and neuroscience behind affirmations. Understand how positive self-talk rewires your brain, backed by peer-reviewed studies and psychology research.',
    keywords:
      'affirmation science, neuroscience affirmations, psychology research, brain science, positive self-talk research, affirmation studies',
  },
  practice: {
    name: 'Practice',
    title: 'Affirmation Practice - Daily Routines & Techniques',
    description:
      'Build an effective daily affirmation practice with proven routines and techniques. Morning affirmations, evening rituals, and practical tips for consistency.',
    keywords:
      'affirmation practice, daily routine, morning affirmations, evening affirmations, affirmation techniques, consistency tips',
  },
  'mental-health': {
    name: 'Mental Health',
    title: 'Affirmations for Mental Health - Anxiety, Stress & Emotional Wellness',
    description:
      'Discover how affirmations support mental health and emotional wellness. Research-backed approaches for anxiety, stress, overthinking, and building emotional resilience.',
    keywords:
      'mental health affirmations, anxiety affirmations, stress relief, emotional wellness, overthinking, emotional resilience, mental wellness',
  },
  'personal-growth': {
    name: 'Personal Growth',
    title: 'Affirmations for Personal Growth - Self-Improvement & Transformation',
    description:
      'Fuel your personal growth journey with affirmations for self-improvement, confidence, manifestation, and transformation. Science-backed strategies for becoming your best self.',
    keywords:
      'personal growth affirmations, self improvement, transformation, confidence building, manifestation, self development, personal development',
  },
  career: {
    name: 'Career',
    title: 'Career Affirmations - Professional Success & Workplace Confidence',
    description:
      'Advance your career with affirmations for professional success, workplace confidence, and leadership. Overcome imposter syndrome and build a growth-oriented mindset.',
    keywords:
      'career affirmations, professional success, workplace confidence, imposter syndrome, leadership affirmations, career growth',
  },
  health: {
    name: 'Health',
    title: 'Health & Wellness Affirmations - Sleep, Body Image & Physical Wellbeing',
    description:
      'Support your physical health and wellness with affirmations for better sleep, body confidence, and holistic wellbeing. Evidence-based approaches to mind-body connection.',
    keywords:
      'health affirmations, sleep affirmations, body confidence, wellness, physical wellbeing, mind body connection, holistic health',
  },
} as const

type BlogCategoryKey = keyof typeof BLOG_CATEGORIES

function getCategorySlug(categoryName: string): BlogCategoryKey | null {
  const nameToSlug: Record<string, BlogCategoryKey> = {
    Guide: 'guide',
    Science: 'science',
    Practice: 'practice',
    'Mental Health': 'mental-health',
    'Personal Growth': 'personal-growth',
    Career: 'career',
    Health: 'health',
  }
  return nameToSlug[categoryName] || null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: categorySlug } = await params
  const category = BLOG_CATEGORIES[categorySlug as BlogCategoryKey]

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
      url: `/blog/category/${categorySlug}`,
      site_name: 'Daily Affirmations',
      locale: 'en_US',
      images: [
        {
          url: 'https://daily-affirm.com/og-image.png',
          width: 1200,
          height: 630,
          alt: category.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: category.title,
      description: category.description,
      site: '@dailyaffirm',
    },
    alternates: {
      canonical: `/blog/category/${categorySlug}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(BLOG_CATEGORIES).map(category => ({
    category,
  }))
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: categorySlug } = await params
  const category = BLOG_CATEGORIES[categorySlug as BlogCategoryKey]

  if (!category) {
    notFound()
  }

  // Get all blog posts in this category
  const posts = Object.entries(ROUTES.blogPosts)
    .filter(([, post]) => {
      const postCategorySlug = getCategorySlug(post.category)
      return postCategorySlug === categorySlug
    })
    .map(([slug, post]) => ({
      slug,
      title: post.title,
      description: post.description,
      date: post.date,
      readTime: post.readTime,
      category: post.category,
      path: post.path,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Get other categories for navigation
  const otherCategories = Object.entries(BLOG_CATEGORIES)
    .filter(([slug]) => slug !== categorySlug)
    .map(([slug, cat]) => ({ slug, name: cat.name }))

  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: 'Home', url: 'https://daily-affirm.com' },
    { name: 'Blog', url: 'https://daily-affirm.com/blog' },
    { name: category.name, url: `https://daily-affirm.com/blog/category/${categorySlug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-semibold"
            >
              ← All Blog Posts
            </Link>
          </div>

          <Breadcrumbs
            items={[
              { name: 'Blog', href: ROUTES.blog.path },
              { name: category.name },
            ]}
          />

          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{category.name}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{category.description}</p>
          </div>

          {posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map(post => (
                <Link key={post.slug} href={post.path} className="block group">
                  <article className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-lg hover:border-violet-300 transition">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">{post.description}</p>

                    <div className="flex items-center gap-2 text-violet-600 font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-lg">
              No articles in this category yet. Check back soon!
            </p>
          )}

          {/* Other Categories */}
          <section className="mt-16 pt-8 border-t-2 border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Other Topics</h2>
            <div className="flex flex-wrap gap-3">
              {otherCategories.map(cat => (
                <Link
                  key={cat.slug}
                  href={`/blog/category/${cat.slug}`}
                  className="px-5 py-3 bg-white border-2 border-gray-200 rounded-full font-semibold text-gray-700 hover:border-violet-300 hover:text-violet-600 transition"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
