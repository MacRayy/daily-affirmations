type ArticleSchemaProps = {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  readingTime: string
  category: string
  slug: string
  keywords?: string
}

export default function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  readingTime,
  category,
  slug,
  keywords,
}: ArticleSchemaProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: 'https://daily-affirm.com/og-image.png',
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: 'Daily Affirmations',
      url: 'https://daily-affirm.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://daily-affirm.com/og-image.png',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Daily Affirmations',
      url: 'https://daily-affirm.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://daily-affirm.com/og-image.png',
        width: 200,
        height: 200,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://daily-affirm.com/blog/${slug}`,
    },
    articleSection: category,
    keywords: keywords,
    timeRequired: `PT${readingTime.replace(' min read', 'M')}`,
    wordCount: parseInt(readingTime) * 200, // Approximate
    inLanguage: 'en-US',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}
