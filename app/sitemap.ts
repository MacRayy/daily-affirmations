import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: add domain here
  const baseUrl = 'https://your-domain.com'

  const categories = [
    'general',
    'career',
    'relationships',
    'health',
    'personal-growth',
    'confidence',
  ]

  const categoryPages = categories.map(category => ({
    url: `${baseUrl}/affirmations/${category}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...categoryPages,
  ]
}
