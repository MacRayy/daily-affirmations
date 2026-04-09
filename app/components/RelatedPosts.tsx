import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { ROUTES } from '../AppRoutes'

type BlogPostKey = keyof typeof ROUTES.blogPosts

// Define related posts mapping based on content relevance
const relatedPostsMap: Record<BlogPostKey, BlogPostKey[]> = {
  'how-to-use-affirmations-effectively': [
    'science-of-affirmations',
    'morning-affirmations-routine',
    'self-love-affirmations',
  ],
  'science-of-affirmations': [
    'how-to-use-affirmations-effectively',
    'affirmations-for-anxiety',
    'manifestation-affirmations-guide',
  ],
  'morning-affirmations-routine': [
    'how-to-use-affirmations-effectively',
    'affirmations-for-anxiety',
    'self-love-affirmations',
  ],
  'affirmations-for-anxiety': [
    'self-love-affirmations',
    'morning-affirmations-routine',
    'science-of-affirmations',
  ],
  'self-love-affirmations': [
    'affirmations-for-anxiety',
    'career-affirmations-for-success',
    'how-to-use-affirmations-effectively',
  ],
  'career-affirmations-for-success': [
    'manifestation-affirmations-guide',
    'self-love-affirmations',
    'affirmations-for-students',
  ],
  'manifestation-affirmations-guide': [
    'science-of-affirmations',
    'money-abundance-affirmations',
    'new-year-resolutions-affirmations',
  ],
  'new-year-resolutions-affirmations': [
    'manifestation-affirmations-guide',
    'self-love-affirmations',
    'career-affirmations-for-success',
  ],
  'money-abundance-affirmations': [
    'manifestation-affirmations-guide',
    'career-affirmations-for-success',
    'self-love-affirmations',
  ],
  'affirmations-for-students': [
    'affirmations-for-anxiety',
    'self-love-affirmations',
    'career-affirmations-for-success',
  ],
  'morning-affirmations-for-women': [
    'self-love-affirmations',
    'morning-affirmations-routine',
    'career-affirmations-for-success',
  ],
  'bedtime-affirmations-sleep': [
    'affirmations-for-anxiety',
    'morning-affirmations-routine',
    'affirmations-for-overthinking',
  ],
  'affirmations-for-overthinking': [
    'affirmations-for-anxiety',
    'bedtime-affirmations-sleep',
    'self-love-affirmations',
  ],
  'why-affirmations-work-psychology': [
    'science-of-affirmations',
    'how-to-use-affirmations-effectively',
    'manifestation-affirmations-guide',
  ],
  'affirmations-for-self-confidence': [
    'self-love-affirmations',
    'career-affirmations-for-success',
    'why-affirmations-work-psychology',
  ],
  'affirmations-for-kids': [
    'how-to-use-affirmations-effectively',
    'why-affirmations-work-psychology',
    'affirmations-for-self-confidence',
  ],
  'affirmations-for-burnout-recovery': [
    'affirmations-for-anxiety',
    'affirmations-for-overthinking',
    'self-love-affirmations',
  ],
  'climate-anxiety-affirmations': [
    'affirmations-for-anxiety',
    'affirmations-for-burnout-recovery',
    'affirmations-for-overthinking',
  ],
  'affirmations-for-war-anxiety': [
    'affirmations-for-anxiety',
    'affirmations-for-overthinking',
    'climate-anxiety-affirmations',
  ],
  'affirmations-for-ai-anxiety': [
    'career-affirmations-for-success',
    'affirmations-for-anxiety',
    'affirmations-for-burnout-recovery',
  ],
  'digital-detox-affirmations': [
    'affirmations-for-anxiety',
    'affirmations-for-overthinking',
    'affirmations-for-burnout-recovery',
  ],
  'affirmations-for-loneliness': [
    'self-love-affirmations',
    'affirmations-for-anxiety',
    'digital-detox-affirmations',
  ],
  'affirmations-for-imposter-syndrome': [
    'affirmations-for-self-confidence',
    'career-affirmations-for-success',
    'self-love-affirmations',
  ],
}

// Fallback: if a post isn't in the map, show recent posts
const defaultRelated: BlogPostKey[] = [
  'how-to-use-affirmations-effectively',
  'science-of-affirmations',
  'self-love-affirmations',
]

export default function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const relatedSlugs =
    relatedPostsMap[currentSlug as BlogPostKey]?.filter(slug => slug !== currentSlug) ||
    defaultRelated.filter(slug => slug !== currentSlug)

  const relatedPosts = relatedSlugs
    .slice(0, 3)
    .map(slug => {
      const post = ROUTES.blogPosts[slug]
      return post ? { slug, ...post } : null
    })
    .filter(Boolean)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="mt-16 pt-8 border-t-2 border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <Link
            key={post!.slug}
            href={post!.path}
            className="group bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-violet-300 hover:shadow-lg transition"
          >
            <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-semibold mb-3">
              {post!.category}
            </span>
            <h3 className="font-bold text-gray-900 group-hover:text-violet-600 transition mb-2 line-clamp-2">
              {post!.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              {new Date(post!.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
