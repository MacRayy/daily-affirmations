'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight, Search, X } from 'lucide-react'
import { ROUTES } from '../AppRoutes'

type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

export default function BlogSearch({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? posts.filter(post => {
        const q = query.toLowerCase()
        return (
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.category.toLowerCase().includes(q)
        )
      })
    : posts

  return (
    <>
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-12 pr-10 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {query && (
        <p className="text-sm text-gray-500 mb-6">
          {filtered.length} {filtered.length === 1 ? 'result' : 'results'} for &ldquo;{query}&rdquo;
        </p>
      )}

      <div className="space-y-8">
        {filtered.map(post => (
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

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your search.</p>
            <button
              onClick={() => setQuery('')}
              className="mt-4 text-violet-600 hover:text-violet-700 font-semibold"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </>
  )
}
