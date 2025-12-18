// Centralized route definitions for Daily Affirmations app

export const ROUTES = {
  // Static routes
  home: {
    path: '/',
    title: 'Daily Affirmations - Free Positive Motivation & Inspiration Generator',
    description:
      'Transform your mindset with free daily affirmations. Get personalized positive quotes for confidence, success, relationships, health, and personal growth. Start your journey today.',
    keywords:
      'daily affirmations, positive affirmations, motivational quotes, self improvement, confidence boost, success mindset, personal growth',
  },
  blog: {
    path: '/blog',
    title: 'Affirmations Blog - Science-Backed Tips & Guides for Personal Growth',
    description:
      'Discover proven techniques for using affirmations effectively. Expert guides, research-backed tips, and practical advice for transforming your mindset and achieving your goals.',
    keywords:
      'affirmations blog, positive thinking guide, self improvement tips, affirmation techniques, mindset transformation, personal growth advice',
  },
  terms: {
    path: '/terms',
    title: 'Terms of Service - Daily Affirmations Legal Terms',
    description:
      'Read our Terms of Service to understand your rights and responsibilities when using Daily Affirmations. Legal terms and conditions for our platform.',
    keywords: 'terms of service, legal terms, conditions, daily affirmations, user agreement',
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy Policy - Daily Affirmations Data Protection',
    description:
      'Learn how Daily Affirmations protects your privacy and handles your data. Our commitment to transparency and user privacy protection.',
    keywords:
      'privacy policy, data protection, user privacy, daily affirmations, personal data security',
  },
  contact: {
    path: '/contact',
    title: 'Contact Us - Daily Affirmations Support & Feedback',
    description:
      'Get in touch with Daily Affirmations. We&apos;d love to hear your feedback, questions, or suggestions. Contact our support team for help with your affirmation journey.',
    keywords: 'contact daily affirmations, support, feedback, customer service, help, questions',
  },

  // Dynamic routes
  affirmations: {
    general: {
      path: '/affirmations/general',
      title: 'Daily General Affirmations - Free Positive Quotes for Everyday Motivation',
      description:
        'Get powerful daily general affirmations to boost positivity and wellbeing. Free motivational quotes for confidence, success, and personal growth. Transform your mindset today.',
      keywords:
        'general affirmations, daily positive quotes, motivation, self improvement, confidence building, success mindset, personal growth',
    },
    career: {
      path: '/affirmations/career',
      title: 'Career Affirmations - Professional Success & Workplace Confidence',
      description:
        'Boost your career with powerful affirmations for professional success, workplace confidence, and leadership. Free daily motivation to achieve your career goals and advance professionally.',
      keywords:
        'career affirmations, professional development, workplace confidence, success mindset, leadership affirmations, career growth, work motivation',
    },
    relationships: {
      path: '/affirmations/relationships',
      title: 'Relationship Affirmations - Love, Communication & Connection',
      description:
        'Strengthen your relationships with powerful affirmations for love, communication, and healthy connections. Free daily quotes for better relationships, marriage, and social bonds.',
      keywords:
        'relationship affirmations, love affirmations, communication skills, healthy relationships, marriage affirmations, social connections, emotional intimacy',
    },
    health: {
      path: '/affirmations/health',
      title: 'Health & Wellness Affirmations - Mental & Physical Wellbeing',
      description:
        'Transform your health with daily affirmations for mental and physical wellbeing. Free motivational quotes for fitness, nutrition, stress relief, and holistic health improvement.',
      keywords:
        'health affirmations, wellness quotes, mental health, physical fitness, stress relief, nutrition affirmations, holistic health, self care',
    },
    'personal-growth': {
      path: '/affirmations/personal-growth',
      title: 'Personal Growth Affirmations - Self Development & Transformation',
      description:
        'Accelerate your personal growth with powerful affirmations for self development and transformation. Free daily motivation for self improvement, goal achievement, and becoming your best self.',
      keywords:
        'personal growth affirmations, self development, transformation, goal achievement, self improvement, personal transformation, life improvement, mindset change',
    },
    confidence: {
      path: '/affirmations/confidence',
      title: 'Confidence Affirmations - Build Self Esteem & Self Worth',
      description:
        'Build unshakeable confidence with powerful daily affirmations for self esteem and self worth. Free motivational quotes to boost confidence, overcome self doubt, and develop unstoppable self belief.',
      keywords:
        'confidence affirmations, self esteem, self worth, empowerment, self belief, confidence building, overcome self doubt, personal confidence',
    },
  },

  // Blog posts
  blogPosts: {
    'how-to-use-affirmations-effectively': {
      path: '/blog/how-to-use-affirmations-effectively',
      title: 'How to Use Daily Affirmations Effectively: Science-Backed Guide 2025',
      description:
        'Master the art of positive affirmations with proven techniques. Learn when to practice, how to write effective affirmations, and what neuroscience says about their power. Transform your mindset today.',
      date: '2025-12-13',
      readTime: '8 min read',
      category: 'Guide',
      keywords:
        'how to use affirmations, affirmation techniques, positive thinking guide, neuroscience affirmations, self improvement methods, mindset transformation',
    },
    'science-of-affirmations': {
      path: '/blog/science-of-affirmations',
      title: 'Do Affirmations Really Work? Neuroscience Research 2025',
      description:
        'Discover what science really says about positive affirmations. Explore peer-reviewed research, brain imaging studies, and psychological evidence on how affirmations rewire your mind for success.',
      date: '2025-12-10',
      readTime: '6 min read',
      category: 'Science',
      keywords:
        'affirmations science, neuroscience research, brain imaging, psychology studies, positive thinking research, mindset science, self talk research',
    },
    'morning-affirmations-routine': {
      path: '/blog/morning-affirmations-routine',
      title: '10 Powerful Morning Affirmations to Transform Your Day 2025',
      description:
        'Start each day with intention using these 10 proven morning affirmations. Boost confidence, reduce anxiety, and set a positive tone for success. Daily routine included.',
      date: '2025-12-05',
      readTime: '5 min read',
      category: 'Practice',
      keywords:
        'morning affirmations, daily routine, confidence boost, anxiety relief, positive morning habits, success mindset, daily motivation',
    },
    'affirmations-for-anxiety': {
      path: '/blog/affirmations-for-anxiety',
      title: 'Affirmations for Anxiety and Stress Relief: A Complete Guide',
      description:
        'Struggling with anxiety? Discover 20 powerful affirmations for anxiety relief, backed by research. Learn how to use affirmations effectively to calm your nervous system and reduce stress.',
      date: '2025-12-15',
      readTime: '7 min read',
      category: 'Mental Health',
      keywords:
        'anxiety affirmations, stress relief, mental health, calming techniques, nervous system, anxiety management, stress reduction, emotional wellness',
    },
    'self-love-affirmations': {
      path: '/blog/self-love-affirmations',
      title: '50 Self-Love Affirmations to Build Confidence and Self-Worth',
      description:
        'Build genuine confidence and self-worth with 50 powerful self-love affirmations. Learn how to practice self-compassion, set boundaries, and transform negative self-talk into positive self-belief.',
      date: '2025-12-16',
      readTime: '9 min read',
      category: 'Personal Growth',
      keywords:
        'self-love affirmations, confidence building, self worth, self compassion, personal growth, boundary setting, self esteem, emotional healing',
    },
    'career-affirmations-for-success': {
      path: '/blog/career-affirmations-for-success',
      title: '40 Career Affirmations for Success, Confidence, and Professional Growth',
      description:
        'Build workplace confidence and momentum with 40 powerful career affirmations for success, imposter syndrome, and professional growth—plus a practical routine to use them effectively.',
      date: '2025-12-18',
      readTime: '8 min read',
      category: 'Career',
      keywords:
        'career affirmations, professional success, workplace confidence, imposter syndrome, promotion mindset, work motivation, professional growth, leadership mindset',
    },
  },
} as const

// Helper functions
export const getBlogPostPath = (slug: string): string => {
  return ROUTES.blogPosts[slug as keyof typeof ROUTES.blogPosts]?.path || `/blog/${slug}`
}

export const getAffirmationPath = (category: string): string => {
  return (
    ROUTES.affirmations[category as keyof typeof ROUTES.affirmations]?.path ||
    `/affirmations/${category}`
  )
}

// SEO utilities
export const generateStructuredData = (route: keyof typeof ROUTES | string) => {
  const routeData = ROUTES[route as keyof typeof ROUTES]

  if (!routeData) {
    return null
  }

  // Type guard to ensure routeData has the expected properties
  if (!('title' in routeData && 'description' in routeData && 'path' in routeData)) {
    return null
  }

  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: routeData.title,
    description: routeData.description,
    url: routeData.path,
  }

  // Add specific structured data for different page types
  if (route === 'home') {
    return {
      ...baseStructuredData,
      '@type': 'WebSite',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${ROUTES.home.path}?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    }
  }

  if (route === 'blog') {
    return {
      ...baseStructuredData,
      '@type': 'Blog',
      blogPost: Object.values(ROUTES.blogPosts).map(post => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: {
          '@type': 'Organization',
          name: 'Daily Affirmations',
        },
      })),
    }
  }

  return baseStructuredData
}

// Generate Open Graph metadata
export const generateOpenGraph = (route: keyof typeof ROUTES | string) => {
  const routeData = ROUTES[route as keyof typeof ROUTES]

  if (!routeData) {
    return {}
  }

  // Type guard to ensure routeData has the expected properties
  if (!('title' in routeData && 'description' in routeData && 'path' in routeData)) {
    return {}
  }

  return {
    title: routeData.title,
    description: routeData.description,
    type: 'website',
    url: routeData.path,
    site_name: 'Daily Affirmations',
    locale: 'en_US',
    images: [
      {
        url: 'https://daily-affirm.com/og-image.png',
        width: 1200,
        height: 630,
        alt: routeData.title,
      },
    ],
  }
}

// Generate Twitter Card metadata
export const generateTwitterCard = (route: keyof typeof ROUTES | string) => {
  const routeData = ROUTES[route as keyof typeof ROUTES]

  if (!routeData) {
    return {}
  }

  // Type guard to ensure routeData has the expected properties
  if (!('title' in routeData && 'description' in routeData)) {
    return {}
  }
  return {
    card: 'summary_large_image',
    title: routeData.title,
    description: routeData.description,
    site: '@dailyaffirm',
    images: ['https://daily-affirm.com/og-image.png'],
  }
}

// Generate blog post structured data
export const generateBlogPostStructuredData = (slug: string) => {
  const postData = ROUTES.blogPosts[slug as keyof typeof ROUTES.blogPosts]

  if (!postData) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: postData.title,
    description: postData.description,
    image: 'https://daily-affirm.com/og-image.png',
    datePublished: postData.date,
    dateModified: postData.date,
    author: {
      '@type': 'Organization',
      name: 'Daily Affirmations',
      url: 'https://daily-affirm.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Daily Affirmations',
      logo: {
        '@type': 'ImageObject',
        url: 'https://daily-affirm.com/og-image.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://daily-affirm.com${postData.path}`,
    },
    keywords: postData.keywords,
    articleSection: postData.category,
    readTime: postData.readTime,
  }
}

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Generate website structured data
export const generateWebsiteStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Daily Affirmations',
    description:
      'Transform your mindset with free daily affirmations. Get personalized positive quotes for confidence, success, relationships, health, and personal growth.',
    url: 'https://daily-affirm.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://daily-affirm.com?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    sameAs: [
      'https://twitter.com/dailyaffirm',
      'https://facebook.com/dailyaffirm',
      'https://instagram.com/dailyaffirm',
    ],
  }
}

// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', href: ROUTES.home.path },
  { label: 'Blog', href: ROUTES.blog.path },
] as const
