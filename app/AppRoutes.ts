// Centralized route definitions for Daily Affirmations app

export const ROUTES = {
  // Static routes
  home: {
    path: '/',
    title: 'Daily Affirmations - AI-Powered Positive Motivation & Inspiration Generator',
    description:
      'Transform your mindset with AI-powered daily affirmations. Get personalized positive quotes for confidence, success, relationships, health, and personal growth. Start your journey today.',
    keywords:
      'daily affirmations, positive affirmations, motivational quotes, self improvement, confidence boost, success mindset, personal growth, AI affirmations, AI-powered affirmations',
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
  printables: {
    path: '/free-printables',
    title: 'Free Printable Affirmation Cards - Download PDF',
    description:
      'Download free printable affirmation cards for daily motivation. Print beautiful affirmation cards for your mirror, desk, or journal. Choose from 6 categories.',
    keywords:
      'printable affirmations, affirmation cards PDF, free affirmation printables, daily affirmation cards, print affirmations, affirmation download, motivational cards printable',
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
    'manifestation-affirmations-guide': {
      path: '/blog/manifestation-affirmations-guide',
      title: '55 Manifestation Affirmations That Actually Work (Science-Backed Guide)',
      description:
        'Discover 55 science-backed manifestation affirmations that actually work. Learn the neuroscience behind the law of attraction and how to use manifestation effectively based on psychology research.',
      date: '2025-12-19',
      readTime: '10 min read',
      category: 'Personal Growth',
      keywords:
        'manifestation affirmations, law of attraction, neuroscience, psychology research, goal manifestation, science-backed affirmations, reticular activating system, self-fulfilling prophecy',
    },
    'new-year-resolutions-affirmations': {
      path: '/blog/new-year-resolutions-affirmations',
      title: "60 New Year's Affirmations to Make Your 2025 Resolutions Actually Stick",
      description:
        "Make your 2025 resolutions stick with 60 powerful New Year's affirmations plus science-backed strategies for motivation, identity change, and consistent daily action.",
      date: '2025-12-27',
      readTime: '11 min read',
      category: 'Personal Growth',
      keywords:
        "new year's affirmations, resolutions 2025, goal setting, habit change, motivation, personal growth, identity-based habits, consistency, science-backed affirmations",
    },
    'money-abundance-affirmations': {
      path: '/blog/money-abundance-affirmations',
      title: '75 Money Affirmations to Attract Wealth and Abundance (That Actually Work)',
      description:
        'Struggling with money anxiety or limiting beliefs about wealth? These 75 money affirmations, combined with practical financial strategies, can help you shift your mindset from scarcity to abundance—and actually improve your financial situation.',
      date: '2026-01-16',
      readTime: '12 min read',
      category: 'Personal Growth',
      keywords:
        'money affirmations, wealth attraction, abundance mindset, financial confidence, money scripts, scarcity mindset, financial freedom, wealth building, money anxiety, prosperity affirmations',
    },
    'affirmations-for-students': {
      path: '/blog/affirmations-for-students',
      title: '60 Powerful Affirmations for Students: Boost Focus, Confidence & Academic Success',
      description:
        'Struggling with exam anxiety, procrastination, or self-doubt? These 60 science-backed affirmations for students will help you build confidence, improve focus, and achieve academic success—plus practical study tips to maximize results.',
      date: '2026-03-05',
      readTime: '10 min read',
      category: 'Personal Growth',
      keywords:
        'affirmations for students, student motivation, exam anxiety, study affirmations, academic success, focus affirmations, test anxiety relief, college affirmations, student confidence, study motivation, back to school affirmations',
    },
    'morning-affirmations-for-women': {
      path: '/blog/morning-affirmations-for-women',
      title: '80 Morning Affirmations for Women: Start Your Day Empowered & Confident',
      description:
        'Start each morning feeling empowered with these 80 affirmations designed specifically for women. Build confidence, embrace self-love, and set intentions for success in career, relationships, and personal growth.',
      date: '2026-03-06',
      readTime: '12 min read',
      category: 'Personal Growth',
      keywords:
        'morning affirmations for women, affirmations for women, daily affirmations for women, positive affirmations for women, empowering affirmations, self love affirmations for women, confidence affirmations women, women empowerment quotes, morning routine women, female affirmations',
    },
    'bedtime-affirmations-sleep': {
      path: '/blog/bedtime-affirmations-sleep',
      title: '50 Bedtime Affirmations for Deep Sleep & Peaceful Rest (That Actually Work)',
      description:
        "Struggling to fall asleep? These 50 calming bedtime affirmations will quiet your racing mind, release the day's stress, and help you drift into deep, restorative sleep. Plus a complete nighttime routine for better rest.",
      date: '2026-03-07',
      readTime: '11 min read',
      category: 'Health',
      keywords:
        'bedtime affirmations, sleep affirmations, affirmations for sleep, nighttime affirmations, affirmations before bed, calming affirmations, affirmations for insomnia, peaceful sleep affirmations, relaxation affirmations, evening affirmations, sleep meditation affirmations',
    },
    'affirmations-for-overthinking': {
      path: '/blog/affirmations-for-overthinking',
      title: 'Affirmations for Overthinking: How to Quiet Your Racing Mind (Science-Backed)',
      description:
        'Trapped in endless thought loops? Learn how affirmations can help break the cycle of overthinking and rumination. Includes 25 powerful affirmations plus cognitive strategies backed by psychology research.',
      date: '2026-03-10',
      readTime: '14 min read',
      category: 'Mental Health',
      keywords:
        'affirmations for overthinking, stop overthinking affirmations, rumination affirmations, racing thoughts affirmations, anxious thoughts affirmations, mental peace affirmations, calm mind affirmations, overthinking anxiety, thought loops, cognitive defusion, mindfulness for overthinking',
    },
    'why-affirmations-work-psychology': {
      path: '/blog/why-affirmations-work-psychology',
      title: 'Why Affirmations Work: The Psychology and Neuroscience Explained',
      description:
        'Discover the fascinating science behind why affirmations actually work. From neuroplasticity to self-affirmation theory, explore the research-backed mechanisms that make positive self-talk effective for lasting change.',
      date: '2026-03-11',
      readTime: '15 min read',
      category: 'Science',
      keywords:
        'why affirmations work, psychology of affirmations, neuroscience affirmations, self-affirmation theory, neuroplasticity, positive self-talk science, affirmation research, brain science affirmations, cognitive psychology affirmations, how affirmations change the brain',
    },
    'affirmations-for-self-confidence': {
      path: '/blog/affirmations-for-self-confidence',
      title: 'Affirmations for Self-Confidence: The Science of Believing in Yourself',
      description:
        'Explore the psychology and neuroscience behind self-confidence. Learn how affirmations rewire your brain, why your inner critic holds you back, and how to build lasting self-belief through research-backed strategies.',
      date: '2026-03-13',
      readTime: '13 min read',
      category: 'Personal Growth',
      keywords:
        'affirmations for self-confidence, confidence affirmations, self-confidence affirmations, build confidence, overcome self-doubt, inner critic, self-belief affirmations, positive self-talk, confidence building, self-esteem affirmations, believe in yourself, confidence boosting affirmations',
    },
    'affirmations-for-kids': {
      path: '/blog/affirmations-for-kids',
      title:
        'Affirmations for Kids: How to Raise Confident, Resilient Children Through Positive Self-Talk',
      description:
        'Learn how affirmations help children build emotional resilience, self-esteem, and a growth mindset. A research-backed guide for parents on introducing positive self-talk at every age.',
      date: '2026-03-16',
      readTime: '14 min read',
      category: 'Guide',
      keywords:
        'affirmations for kids, positive affirmations children, kids self-esteem, children confidence, positive self-talk kids, parenting affirmations, growth mindset children, kids emotional resilience, affirmations for toddlers, affirmations for teens, positive parenting, child development affirmations',
    },
    'affirmations-for-burnout-recovery': {
      path: '/blog/affirmations-for-burnout-recovery',
      title: '50 Affirmations for Burnout Recovery: Reclaim Your Energy and Purpose',
      description:
        'Feeling burned out and emotionally exhausted? These 50 science-backed affirmations for burnout recovery will help you rebuild energy, set boundaries, and rediscover purpose. Includes practical recovery strategies from psychology research.',
      date: '2026-03-23',
      readTime: '13 min read',
      category: 'Mental Health',
      keywords:
        'affirmations for burnout, burnout recovery affirmations, work burnout affirmations, emotional exhaustion affirmations, burnout healing, stress recovery affirmations, overwhelm affirmations, workplace burnout, burnout prevention, energy recovery affirmations, boundary setting affirmations, self-care burnout',
    },
    'climate-anxiety-affirmations': {
      path: '/blog/climate-anxiety-affirmations',
      title:
        'Affirmations for Climate Anxiety: Finding Hope and Purpose in the Face of Climate Change',
      description:
        'Climate change weighing on your mental health? Explore how climate anxiety affects our psychology, why eco-distress is a rational response, and how affirmations can help you move from paralysis to purposeful action without denying the reality of the crisis.',
      date: '2026-03-24',
      readTime: '15 min read',
      category: 'Mental Health',
      keywords:
        'climate anxiety affirmations, eco-anxiety, climate change mental health, climate grief, environmental anxiety, eco-distress, climate depression, solastalgia, climate hope, environmental affirmations, climate action motivation, ecological grief',
    },
    'affirmations-for-war-anxiety': {
      path: '/blog/affirmations-for-war-anxiety',
      title:
        'Affirmations for Living Through an Era of War: Finding Inner Peace Amid Global Conflict',
      description:
        'Struggling with anxiety, helplessness, or grief over ongoing wars and global conflict? Explore the psychology of war-related distress, why distant suffering affects your mental health, and how affirmations can help you stay compassionate without being consumed.',
      date: '2026-03-25',
      readTime: '16 min read',
      category: 'Mental Health',
      keywords:
        'war anxiety affirmations, conflict anxiety, peace affirmations, war mental health, coping with war news, vicarious trauma, compassion fatigue, global conflict anxiety, peace of mind affirmations, war grief, collective trauma, doomscrolling war news',
    },
    'affirmations-for-ai-anxiety': {
      path: '/blog/affirmations-for-ai-anxiety',
      title: 'Affirmations for AI Anxiety: Staying Human in the Age of Artificial Intelligence',
      description:
        'Anxious about AI taking your job, changing society, or making your skills obsolete? Explore the psychology behind AI anxiety, why this technological moment feels so destabilizing, and how affirmations can help you adapt with confidence rather than freeze in fear.',
      date: '2026-03-30',
      readTime: '16 min read',
      category: 'Mental Health',
      keywords:
        'AI anxiety affirmations, artificial intelligence anxiety, job displacement AI, fear of AI, technology anxiety, AI job loss, future of work anxiety, automation anxiety, AI mental health, coping with AI change, career anxiety AI, technological disruption',
    },
    'digital-detox-affirmations': {
      path: '/blog/digital-detox-affirmations',
      title: 'Affirmations for Digital Detox: Reclaiming Your Attention in the Age of Social Media',
      description:
        'Struggling with social media addiction, doomscrolling, or screen fatigue? Discover how digital overload rewires your brain, why you feel anxious without your phone, and how affirmations can help you reclaim your attention, presence, and sense of self beyond the screen.',
      date: '2026-03-31',
      readTime: '15 min read',
      category: 'Mental Health',
      keywords:
        'digital detox affirmations, social media anxiety, phone addiction affirmations, doomscrolling, screen time anxiety, social media detox, digital wellness, internet addiction, phone dependency, social media mental health, attention reclaim, mindful technology use',
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
