import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'
import {
  ROUTES,
  generateBlogPostStructuredData,
  generateBreadcrumbStructuredData,
} from '../../AppRoutes'
import { blogPosts } from './BlogPosts'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return {}
  }

  const postData = ROUTES.blogPosts[slug as keyof typeof ROUTES.blogPosts]

  return {
    title: postData?.title || post.title,
    description: postData?.description || '',
    keywords: postData?.keywords || '',
    openGraph: {
      title: postData?.title || post.title,
      description: postData?.description || '',
      type: 'article',
      url: postData?.path || `/blog/${slug}`,
      site_name: 'Daily Affirmations',
      locale: 'en_US',
      publishedTime: postData?.date,
      authors: ['Daily Affirmations'],
      images: [
        {
          url: 'https://daily-affirm.com/og-image.png',
          width: 1200,
          height: 630,
          alt: postData?.title || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: postData?.title || post.title,
      description: postData?.description || '',
      site: '@dailyaffirm',
    },
    alternates: {
      canonical: postData?.path || `/blog/${slug}`,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  // Generate structured data
  const blogPostStructuredData = generateBlogPostStructuredData(slug)
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: 'Home', url: 'https://daily-affirm.com' },
    { name: 'Blog', url: 'https://daily-affirm.com/blog' },
    { name: post.title, url: `https://daily-affirm.com/blog/${slug}` },
  ])

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <Link
            href={ROUTES.blog.path}
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 mb-8 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
              <span className="px-4 py-2 bg-violet-100 text-violet-700 rounded-full font-semibold">
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

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
          </header>

          <div
            className="prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-gray-900
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-gray-200
          prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
          prose-a:text-violet-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
          prose-ul:my-6 prose-ul:space-y-3
          prose-ol:my-6 prose-ol:space-y-3
          prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-lg
          prose-strong:text-gray-900 prose-strong:font-bold
          prose-lead:text-2xl prose-lead:text-gray-600 prose-lead:leading-relaxed prose-lead:font-normal prose-lead:mb-10
        "
          >
            {post.content}
          </div>

          <div className="mt-16 pt-8 border-t-2 border-gray-200">
            <div className="bg-linear-to-br from-violet-50 to-purple-50 rounded-2xl p-10 border-2 border-violet-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Start Your Daily Affirmations Practice
              </h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Get personalized affirmations delivered fresh every day. Choose from categories like
                career, relationships, health, and more.
              </p>
              <Link
                href={ROUTES.home.path}
                className="inline-block px-8 py-4 bg-violet-600 text-white rounded-lg font-bold hover:bg-violet-700 transition shadow-lg hover:shadow-xl text-lg"
              >
                Try Free Affirmations →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
