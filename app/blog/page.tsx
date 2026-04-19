import Link from 'next/link'
import Footer from '@/components/Footer'
import { ROUTES, generateOpenGraph, generateTwitterCard } from '../AppRoutes'
import BlogSearch from './BlogSearch'
import type { Metadata } from 'next'

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

const blogPosts = Object.entries(ROUTES.blogPosts)
  .map(([slug, post]) => ({
    slug,
    title: post.title,
    excerpt: post.description,
    date: post.date,
    readTime: post.readTime,
    category: post.category,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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
          <div className="mt-2">
            <span className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-2 py-0.5 text-xs font-semibold border border-violet-200">
              AI-powered
            </span>
          </div>
          <p className="text-xl text-gray-600">
            Science-backed insights, practical guides, and tips for using daily affirmations
            effectively.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            href="/blog"
            className="px-4 py-2 bg-violet-600 text-white rounded-full font-semibold text-sm"
          >
            All
          </Link>
          {[
            { slug: 'guide', name: 'Guide' },
            { slug: 'science', name: 'Science' },
            { slug: 'practice', name: 'Practice' },
            { slug: 'mental-health', name: 'Mental Health' },
            { slug: 'personal-growth', name: 'Personal Growth' },
            { slug: 'career', name: 'Career' },
            { slug: 'health', name: 'Health' },
          ].map(cat => (
            <Link
              key={cat.slug}
              href={`/blog/category/${cat.slug}`}
              className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full font-semibold text-sm text-gray-700 hover:border-violet-300 hover:text-violet-600 transition"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <BlogSearch posts={blogPosts} />
      </main>
      <Footer />
    </div>
  )
}
