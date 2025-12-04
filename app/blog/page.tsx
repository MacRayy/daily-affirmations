import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import Logo from '@/app/components/Logo'

export const metadata = {
  title: 'Affirmations Blog - Tips, Science & Guides',
  description:
    'Learn how to use daily affirmations effectively. Science-backed tips, guides, and research on positive affirmations for personal growth.',
}

const blogPosts = [
  {
    slug: 'how-to-use-affirmations-effectively',
    title: 'How to Use Daily Affirmations Effectively: A Science-Backed Guide',
    excerpt:
      'Discover the proven techniques that make affirmations actually work. Learn when to practice, how to write your own, and what science says about their effectiveness.',
    date: '2025-12-5',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'science-of-affirmations',
    title: 'Do Affirmations Really Work? What Science Says',
    excerpt:
      'Explore the neuroscience behind positive affirmations. Research-backed evidence on how affirmations rewire your brain and improve mental wellbeing.',
    date: '2025-11-30',
    readTime: '6 min read',
    category: 'Science',
  },
  {
    slug: 'morning-affirmations-routine',
    title: '10 Powerful Morning Affirmations to Transform Your Day',
    excerpt:
      'Start each morning with intention. These 10 affirmations are designed to boost confidence, reduce anxiety, and set a positive tone for your entire day.',
    date: '2025-11-25',
    readTime: '5 min read',
    category: 'Practice',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Affirmations Blog</h1>
          <p className="text-xl text-gray-600">
            Science-backed insights, practical guides, and tips for using daily affirmations
            effectively.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
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
