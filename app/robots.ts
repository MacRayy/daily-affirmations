import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // TODO: add domain here
    sitemap: 'https://your-domain.com/sitemap.xml',
  }
}
