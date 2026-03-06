export default function StructuredData() {
  const webAppData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Daily Affirmations',
    description:
      'Free daily affirmations for personal growth, career success, relationships, health, and confidence building',
    url: 'https://daily-affirm.com',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    featureList: [
      'AI-powered affirmation generation',
      'Six affirmation categories',
      'Share affirmations',
      'Free to use',
      'No registration required',
    ],
  }

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Daily Affirmations',
    url: 'https://daily-affirm.com',
    logo: 'https://daily-affirm.com/og-image.png',
    description:
      'Daily Affirmations helps people transform their mindset with AI-powered positive affirmations for confidence, success, and personal growth.',
    sameAs: [
      'https://twitter.com/dailyaffirm',
      'https://facebook.com/dailyaffirm',
      'https://instagram.com/dailyaffirm',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: 'https://daily-affirm.com/contact',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  )
}
