import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { ROUTES, generateOpenGraph, generateTwitterCard } from '../AppRoutes'

export const metadata: Metadata = {
  title: ROUTES.blog.title,
  description: ROUTES.blog.description,
  keywords: ROUTES.blog.keywords,
  openGraph: generateOpenGraph('blog'),
  twitter: generateTwitterCard('blog'),
  alternates: {
    canonical: ROUTES.blog.path,
  },
}

const blogPosts = [
  {
    slug: 'how-to-use-affirmations-effectively',
    title: ROUTES.blogPosts['how-to-use-affirmations-effectively'].title,
    excerpt:
      'Discover the proven techniques that make affirmations actually work. Learn when to practice, how to write your own, and what science says about their effectiveness.',
    date: ROUTES.blogPosts['how-to-use-affirmations-effectively'].date,
    readTime: ROUTES.blogPosts['how-to-use-affirmations-effectively'].readTime,
    category: ROUTES.blogPosts['how-to-use-affirmations-effectively'].category,
  },
  {
    slug: 'science-of-affirmations',
    title: ROUTES.blogPosts['science-of-affirmations'].title,
    excerpt:
      'Explore the neuroscience behind positive affirmations. Research-backed evidence on how affirmations rewire your brain and improve mental wellbeing.',
    date: ROUTES.blogPosts['science-of-affirmations'].date,
    readTime: ROUTES.blogPosts['science-of-affirmations'].readTime,
    category: ROUTES.blogPosts['science-of-affirmations'].category,
  },
  {
    slug: 'morning-affirmations-routine',
    title: ROUTES.blogPosts['morning-affirmations-routine'].title,
    excerpt:
      'Start each morning with intention. These 10 affirmations are designed to boost confidence, reduce anxiety, and set a positive tone for your entire day.',
    date: ROUTES.blogPosts['morning-affirmations-routine'].date,
    readTime: ROUTES.blogPosts['morning-affirmations-routine'].readTime,
    category: ROUTES.blogPosts['morning-affirmations-routine'].category,
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Affirmations Blog</h1>
          <p className="text-xl text-gray-600">
            Science-backed insights, practical guides, and tips for using daily affirmations
            effectively.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map(post => (
            <Link
              key={post.slug}
              href={
                ROUTES.blogPosts[post.slug as keyof typeof ROUTES.blogPosts]?.path ||
                `/blog/${post.slug}`
              }
              className="block group"
            >
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

                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center gap-2 text-violet-600 font-semibold group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
