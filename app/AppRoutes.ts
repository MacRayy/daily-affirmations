// Centralized route definitions for Daily Affirmations app

export const ROUTES = {
  // Static routes
  home: {
    path: '/',
    title: 'Daily Affirmations - Positive Motivation & Inspiration',
  },
  blog: {
    path: '/blog',
    title: 'Affirmations Blog - Tips, Science & Guides',
  },

  // Dynamic routes
  affirmations: {
    general: {
      path: '/affirmations/general',
      title: 'Daily General Affirmations',
      description:
        'Start your day with powerful general affirmations for overall wellbeing and positivity.',
      keywords: 'daily affirmations, positive thinking, self improvement, mindfulness',
    },
    career: {
      path: '/affirmations/career',
      title: 'Career & Success Affirmations',
      description:
        'Boost your professional confidence with daily career affirmations for success and growth.',
      keywords: 'career affirmations, professional development, success mindset, work motivation',
    },
    relationships: {
      path: '/affirmations/relationships',
      title: 'Relationship Affirmations',
      description:
        'Nurture healthy connections with daily relationship affirmations for love and communication.',
      keywords:
        'relationship affirmations, love affirmations, communication skills, healthy relationships',
    },
    health: {
      path: '/affirmations/health',
      title: 'Health & Wellness Affirmations',
      description:
        'Support your wellbeing journey with daily health affirmations for mind and body.',
      keywords: 'health affirmations, wellness, self care, mental health, physical health',
    },
    'personal-growth': {
      path: '/affirmations/personal-growth',
      title: 'Personal Growth Affirmations',
      description:
        'Accelerate your development with daily personal growth affirmations for transformation.',
      keywords: 'personal growth, self development, personal transformation, life improvement',
    },
    confidence: {
      path: '/affirmations/confidence',
      title: 'Confidence Building Affirmations',
      description: 'Build unshakeable self-confidence with daily affirmations for empowerment.',
      keywords: 'confidence affirmations, self esteem, self worth, empowerment, self belief',
    },
  },

  // Blog posts
  blogPosts: {
    'how-to-use-affirmations-effectively': {
      path: '/blog/how-to-use-affirmations-effectively',
      title: 'How to Use Daily Affirmations Effectively: A Science-Backed Guide',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Guide',
    },
    'science-of-affirmations': {
      path: '/blog/science-of-affirmations',
      title: 'Do Affirmations Really Work? What Science Says',
      date: '2024-12-10',
      readTime: '6 min read',
      category: 'Science',
    },
    'morning-affirmations-routine': {
      path: '/blog/morning-affirmations-routine',
      title: '10 Powerful Morning Affirmations to Transform Your Day',
      date: '2024-12-05',
      readTime: '5 min read',
      category: 'Practice',
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

// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', href: ROUTES.home.path },
  { label: 'Blog', href: ROUTES.blog.path },
] as const
