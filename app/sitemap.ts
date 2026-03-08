import type { MetadataRoute } from 'next'
import { ROUTES } from './AppRoutes'
import { NICHE_SLUGS, NICHE_AFFIRMATIONS } from './data/niche-affirmations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://daily-affirm.com'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}${ROUTES.printables.path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}${ROUTES.blog.path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Affirmation category pages
  const categoryPages = Object.values(ROUTES.affirmations).map(category => ({
    url: `${baseUrl}${category.path}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  // Niche affirmation pages (programmatic SEO)
  const nichePages = NICHE_SLUGS.map(slug => ({
    url: `${baseUrl}/affirmations/for/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // Blog post pages
  const blogPostPages = Object.values(ROUTES.blogPosts).map(post => ({
    url: `${baseUrl}${post.path}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...categoryPages, ...nichePages, ...blogPostPages]
}
