// Niche-specific affirmations for programmatic SEO pages

type NicheAffirmation = {
  title: string
  description: string
  keywords: string
  affirmations: string[]
}

export const NICHE_AFFIRMATIONS: Record<string, NicheAffirmation | undefined> = {
  anxiety: {
    title: 'Affirmations for Anxiety - Calm Your Mind & Find Inner Peace',
    description:
      'Powerful affirmations to help reduce anxiety, calm racing thoughts, and restore inner peace. Science-backed positive statements for anxiety relief and mental wellness.',
    keywords:
      'affirmations for anxiety, anxiety relief affirmations, calming affirmations, stress relief, mental health affirmations, peace of mind',
    affirmations: [
      'I am safe in this present moment',
      'My thoughts do not control me; I observe them with compassion',
      'I breathe in calm and breathe out tension',
      'I release worry and embrace peace',
      'I am stronger than my anxiety',
      'This feeling is temporary and will pass',
      'I choose to focus on what I can control',
      'My nervous system is calming down with each breath',
      'I am grounded, centered, and at peace',
      'I trust myself to handle whatever comes my way',
      'I let go of what I cannot change',
      'I am worthy of feeling calm and secure',
      'Peace flows through me with every breath',
      'I replace fear with faith in myself',
      'My mind is clearing and my body is relaxing',
    ],
  },
  women: {
    title: 'Affirmations for Women - Empowerment, Confidence & Self-Love',
    description:
      'Empowering affirmations designed for women to build confidence, embrace self-love, and step into their full power. Daily motivation for the modern woman.',
    keywords:
      'affirmations for women, women empowerment, self-love affirmations, female confidence, women motivation, strong women affirmations',
    affirmations: [
      'I am a powerful, confident woman',
      'I honor my unique journey as a woman',
      'I am worthy of respect, love, and success',
      'My voice matters and deserves to be heard',
      'I embrace my femininity as a source of strength',
      'I support and uplift other women',
      'I am breaking barriers and creating new possibilities',
      "My worth is not determined by others' opinions",
      'I am beautiful, inside and out',
      'I trust my intuition to guide me',
      'I deserve to take up space in this world',
      'I am resilient and can overcome any challenge',
      'I celebrate my accomplishments, big and small',
      'I am the author of my own story',
      'I radiate confidence and attract positive opportunities',
    ],
  },
  kids: {
    title: 'Affirmations for Kids - Build Confidence & Positive Thinking',
    description:
      'Simple, powerful affirmations for children to build self-esteem, confidence, and a positive mindset. Help your child develop healthy self-talk habits.',
    keywords:
      'affirmations for kids, children affirmations, kids confidence, positive thinking for children, self-esteem kids, child development',
    affirmations: [
      'I am brave and can try new things',
      'I am kind to myself and others',
      'I am loved just the way I am',
      'I can do hard things',
      'My mistakes help me learn and grow',
      'I am a good friend',
      'I believe in myself',
      'I am creative and full of great ideas',
      'I am important and my feelings matter',
      'I choose to be happy today',
      'I am getting better every day',
      'I am proud of who I am',
      'I can solve problems',
      'I spread kindness wherever I go',
      'I am unique and that makes me special',
    ],
  },
  'weight-loss': {
    title: 'Affirmations for Weight Loss - Healthy Mindset & Body Positivity',
    description:
      'Supportive affirmations for your weight loss journey. Build a healthy relationship with food, exercise, and your body while staying motivated.',
    keywords:
      'weight loss affirmations, healthy eating affirmations, body positivity, fitness motivation, diet affirmations, health mindset',
    affirmations: [
      'I nourish my body with healthy choices',
      'I am committed to my health and wellbeing',
      "I listen to my body's hunger and fullness cues",
      'Every healthy choice brings me closer to my goals',
      'I release emotional attachments to food',
      'I love and appreciate my body at every stage',
      'I am patient with my transformation',
      'I deserve to feel strong and energetic',
      'I choose foods that fuel my body',
      'I celebrate my progress, not just the destination',
      'Movement is a gift I give my body',
      'I am becoming healthier and stronger each day',
      'I release the need for perfection',
      'My body is capable of amazing things',
      'I am creating sustainable, healthy habits',
    ],
  },
  'job-interview': {
    title: 'Affirmations Before Job Interview - Confidence & Success',
    description:
      'Boost your confidence before any job interview with powerful affirmations. Calm nerves, project confidence, and land your dream job.',
    keywords:
      'job interview affirmations, interview confidence, career affirmations, job success, interview preparation, professional confidence',
    affirmations: [
      'I am fully prepared and ready for this interview',
      'I communicate my value clearly and confidently',
      'I am the ideal candidate for this position',
      'My skills and experience make me valuable',
      'I remain calm and collected under pressure',
      'I make a strong, positive first impression',
      'I answer questions thoughtfully and authentically',
      'This interview is an opportunity to show my best self',
      'I deserve this job and the success it brings',
      'I connect easily with my interviewers',
      'My unique perspective is an asset',
      'I am confident in my abilities',
      'I trust myself to handle any question',
      'I radiate professionalism and competence',
      'The right opportunity is meant for me',
    ],
  },
  'self-love': {
    title: 'Self-Love Affirmations - Embrace Your Worth & Inner Beauty',
    description:
      'Transform your relationship with yourself using powerful self-love affirmations. Build self-esteem, practice self-compassion, and embrace your worth.',
    keywords:
      'self-love affirmations, self-esteem, self-worth, self-compassion, loving yourself, inner beauty, personal acceptance',
    affirmations: [
      'I am worthy of love and belonging',
      'I accept myself completely as I am',
      'I treat myself with kindness and compassion',
      'I am enough, exactly as I am',
      'I forgive myself for past mistakes',
      'I choose to see the beauty within me',
      'I am deserving of my own love',
      'I honor my needs and set healthy boundaries',
      'I speak to myself with gentleness',
      'I celebrate my unique qualities',
      'I am my own best friend',
      'I release the need for external validation',
      'I nurture my mind, body, and spirit',
      'I am proud of the person I am becoming',
      'I choose self-love over self-criticism',
    ],
  },
  morning: {
    title: 'Morning Affirmations - Start Your Day with Positive Energy',
    description:
      'Energizing morning affirmations to start your day with positivity, motivation, and intention. Transform your mornings and your life.',
    keywords:
      'morning affirmations, daily affirmations, positive morning routine, start your day, morning motivation, daily positivity',
    affirmations: [
      'Today is full of endless possibilities',
      'I wake up feeling energized and excited',
      'I am grateful for this new day',
      'I choose to make today amazing',
      'I am ready to embrace whatever comes',
      'My positive energy attracts good things',
      'I am focused, productive, and efficient',
      'I greet this day with joy and enthusiasm',
      'I am open to new opportunities today',
      'I set positive intentions for this day',
      'I am capable of achieving my goals',
      'Today I choose happiness and peace',
      'I am confident and ready to succeed',
      'I bring my best self to everything I do',
      'This day is a gift and I will use it wisely',
    ],
  },
  sleep: {
    title: 'Affirmations for Sleep - Peaceful Rest & Relaxation',
    description:
      "Calming bedtime affirmations to quiet your mind and prepare for restful sleep. Release the day's stress and drift into peaceful slumber.",
    keywords:
      'sleep affirmations, bedtime affirmations, relaxation, peaceful sleep, insomnia help, nighttime routine, restful sleep',
    affirmations: [
      'I release the day and welcome peaceful rest',
      'My body is relaxing and preparing for sleep',
      'I let go of all worries and concerns',
      'I am safe, secure, and ready for rest',
      'My mind is calm and quiet',
      'I deserve restful, rejuvenating sleep',
      'Each breath takes me deeper into relaxation',
      'I release tension from every part of my body',
      'Tomorrow will take care of itself',
      'I am grateful for today and ready for sleep',
      'Peace and tranquility surround me',
      'I drift easily into deep, healing sleep',
      'My dreams are peaceful and restorative',
      'I wake up feeling refreshed and renewed',
      'Sleep comes naturally and easily to me',
    ],
  },
  men: {
    title: 'Affirmations for Men - Strength, Purpose & Confidence',
    description:
      'Empowering affirmations for men to build confidence, find purpose, and embrace authentic masculinity. Daily motivation for personal growth.',
    keywords:
      'affirmations for men, male confidence, masculine energy, men motivation, strength affirmations, purpose driven',
    affirmations: [
      'I am a strong, capable man',
      'I embrace my emotions as a source of strength',
      'I lead with integrity and purpose',
      'I am confident in who I am',
      'I provide value in everything I do',
      'I am worthy of respect and success',
      'I face challenges with courage and resilience',
      'I am growing into the man I want to be',
      'I support and uplift those around me',
      'My presence makes a positive difference',
      'I am disciplined and focused on my goals',
      'I honor my commitments and my word',
      'I am comfortable with vulnerability',
      'I create my own definition of success',
      'I am proud of the man I am becoming',
    ],
  },
  teens: {
    title: 'Affirmations for Teens - Confidence, Identity & Growth',
    description:
      'Supportive affirmations for teenagers navigating identity, confidence, and personal growth. Build resilience and self-esteem during crucial years.',
    keywords:
      'teen affirmations, teenage confidence, adolescent self-esteem, youth motivation, growing up affirmations, teen mental health',
    affirmations: [
      'I am discovering who I truly am',
      'My feelings are valid and important',
      "I don't need to be perfect to be amazing",
      'I am more than my grades or achievements',
      'I choose friends who respect and support me',
      'I am finding my own path in life',
      'I can handle peer pressure with confidence',
      'My future is bright and full of potential',
      'I accept myself as I grow and change',
      'I am brave enough to be myself',
      'I learn from mistakes without defining myself by them',
      'I deserve kindness, especially from myself',
      'I am building skills for my future',
      'I can ask for help when I need it',
      'I am exactly where I need to be right now',
    ],
  },
  pregnancy: {
    title: 'Affirmations for Pregnancy - Calm, Confident & Connected',
    description:
      'Nurturing affirmations for expecting mothers. Build confidence, reduce anxiety, and connect with your growing baby through positive affirmations.',
    keywords:
      'pregnancy affirmations, expecting mother, prenatal affirmations, birth affirmations, motherhood, baby bonding',
    affirmations: [
      'My body knows how to nurture this baby',
      'I trust the wisdom of my body',
      'I am creating a beautiful new life',
      'I connect with my baby with love',
      'I am calm, confident, and capable',
      'My baby feels my love and peace',
      'I embrace the changes in my body',
      'I am prepared for this journey',
      'I release fear and welcome excitement',
      'My body is strong and capable of birth',
      'I am surrounded by love and support',
      'I trust my instincts as a mother',
      'Every day brings me closer to my baby',
      'I am grateful for this miraculous experience',
      'I am becoming the mother I was meant to be',
    ],
  },
  athletes: {
    title: 'Affirmations for Athletes - Peak Performance & Mental Strength',
    description:
      'High-performance affirmations for athletes to build mental toughness, focus, and confidence. Elevate your game with a champion mindset.',
    keywords:
      'athlete affirmations, sports motivation, mental toughness, peak performance, competitive mindset, athletic confidence',
    affirmations: [
      'I am mentally and physically prepared',
      'I perform at my best under pressure',
      'I trust my training and abilities',
      'I am focused, determined, and unstoppable',
      'I embrace competition as an opportunity to excel',
      'My mind and body work together perfectly',
      'I recover quickly and come back stronger',
      'I visualize success and make it reality',
      'I learn from every performance',
      'I am committed to continuous improvement',
      'I channel nervous energy into powerful performance',
      'I am resilient in the face of setbacks',
      'I compete with confidence and sportsmanship',
      'My hard work is paying off',
      'I am a champion in my mind and actions',
    ],
  },
  abundance: {
    title: 'Abundance Affirmations - Attract Wealth & Prosperity',
    description:
      'Powerful abundance affirmations to shift your mindset from scarcity to prosperity. Attract wealth, opportunities, and success into your life.',
    keywords:
      'abundance affirmations, wealth mindset, prosperity, attract money, financial abundance, law of attraction, manifestation',
    affirmations: [
      'I am a magnet for abundance and prosperity',
      'Wealth flows to me from multiple sources',
      'I am worthy of financial abundance',
      'I release all limiting beliefs about money',
      'Opportunities for wealth surround me',
      'I am open to receiving all good things',
      'I attract success and prosperity effortlessly',
      'My income is constantly increasing',
      'I am grateful for the abundance in my life',
      'I create value and attract wealth',
      'Money comes to me easily and frequently',
      'I deserve to live an abundant life',
      'I am financially free and secure',
      'I see abundance everywhere I look',
      'The universe supports my prosperity',
    ],
  },
  gratitude: {
    title: 'Gratitude Affirmations - Cultivate Joy & Appreciation',
    description:
      'Transform your perspective with gratitude affirmations. Cultivate appreciation, joy, and contentment through the power of thankfulness.',
    keywords:
      'gratitude affirmations, thankfulness, appreciation, joy affirmations, mindfulness, positive thinking, contentment',
    affirmations: [
      'I am grateful for all the blessings in my life',
      'I appreciate the simple joys each day brings',
      'Gratitude fills my heart and guides my day',
      'I notice and celebrate the good around me',
      'I am thankful for my body and its abilities',
      'I appreciate the people who love and support me',
      'Every challenge is an opportunity for growth',
      'I find something to be grateful for in every situation',
      'My heart overflows with appreciation',
      'I am blessed in countless ways',
      'Gratitude attracts more blessings into my life',
      'I give thanks for this present moment',
      "I appreciate my journey and how far I've come",
      'I am grateful for the opportunity to grow',
      'Thankfulness is my natural state of being',
    ],
  },
  healing: {
    title: 'Healing Affirmations - Recovery, Health & Restoration',
    description:
      'Supportive affirmations for physical and emotional healing. Support your recovery journey with positive, healing-focused statements.',
    keywords:
      'healing affirmations, recovery, health affirmations, emotional healing, physical healing, wellness, restoration',
    affirmations: [
      'My body has an amazing ability to heal',
      'I support my healing with positive thoughts',
      'Every day I am getting healthier and stronger',
      'I release what no longer serves my wellbeing',
      'I am patient with my healing process',
      'I deserve to feel whole and healthy',
      'My mind and body work together to heal',
      'I nourish myself with healing thoughts',
      "I trust my body's wisdom to heal",
      'I am surrounded by healing energy',
      'I let go of pain and embrace wellness',
      'Each breath brings healing to my body',
      "I am grateful for my body's resilience",
      'I choose thoughts that promote healing',
      'Complete healing is possible for me',
    ],
  },
  teachers: {
    title: 'Affirmations for Teachers - Inspiration, Patience & Impact',
    description:
      "Empowering affirmations for educators to stay motivated, patient, and inspired. Recognize your profound impact on students' lives.",
    keywords:
      'teacher affirmations, educator motivation, teaching inspiration, classroom confidence, teacher self-care, educational impact',
    affirmations: [
      "I make a meaningful difference in students' lives",
      'I am patient, understanding, and kind',
      'My passion for teaching inspires others',
      'I create a safe and supportive learning environment',
      'I am continually growing as an educator',
      'I handle challenges with grace and wisdom',
      'My students benefit from my dedication',
      'I balance giving with self-care',
      'I celebrate small victories in my classroom',
      'I am creative and adaptable in my teaching',
      'I am respected for my expertise and care',
      'I plant seeds of knowledge that will grow',
      'I am exactly the teacher my students need',
      'My work has lasting, positive impact',
      'I am grateful for the opportunity to teach',
    ],
  },
  depression: {
    title: 'Affirmations for Depression - Hope, Light & Gentle Recovery',
    description:
      'Gentle, supportive affirmations for those struggling with depression. Find hope, self-compassion, and small steps toward feeling better.',
    keywords:
      'depression affirmations, mental health, hope affirmations, self-compassion, emotional support, gentle affirmations',
    affirmations: [
      'I am doing the best I can, and that is enough',
      'This darkness is temporary, not permanent',
      'I deserve compassion, especially from myself',
      'Small steps forward are still progress',
      'I am not alone in this struggle',
      "It's okay to ask for help",
      'I am worthy of feeling better',
      'I take things one moment at a time',
      'I acknowledge my pain without judgment',
      "There is hope, even when I can't feel it",
      'I am more than my depression',
      'I give myself permission to rest',
      'Better days are ahead of me',
      'I am strong for facing each day',
      'I choose to be gentle with myself today',
    ],
  },
  entrepreneurs: {
    title: 'Affirmations for Entrepreneurs - Vision, Resilience & Success',
    description:
      'Powerful affirmations for entrepreneurs and business owners. Build resilience, maintain vision, and attract success in your ventures.',
    keywords:
      'entrepreneur affirmations, business success, startup motivation, business owner, entrepreneurial mindset, success affirmations',
    affirmations: [
      'I have the vision and drive to succeed',
      'I turn challenges into opportunities',
      'I attract the right people and resources',
      'I trust my ability to build something great',
      'Failure is just feedback on my path to success',
      'I am a creative problem solver',
      'My business adds value to the world',
      'I am comfortable with calculated risks',
      'I persist when others would give up',
      'I learn and adapt quickly',
      'My network is expanding with valuable connections',
      'I deserve the success I am creating',
      'I make confident decisions',
      'I balance ambition with wellbeing',
      'My entrepreneurial journey is unfolding perfectly',
    ],
  },
  forgiveness: {
    title: 'Affirmations for Forgiveness - Release, Peace & Freedom',
    description:
      'Healing affirmations to help you forgive others and yourself. Release resentment, find peace, and experience the freedom of forgiveness.',
    keywords:
      'forgiveness affirmations, letting go, release resentment, self-forgiveness, healing relationships, inner peace',
    affirmations: [
      'I release resentment and choose peace',
      'Forgiveness sets me free',
      'I forgive myself for past mistakes',
      'I let go of anger that no longer serves me',
      'I choose healing over holding grudges',
      'Forgiveness is a gift I give myself',
      'I release the past and embrace the present',
      'I am worthy of forgiveness',
      'I understand that hurt people hurt people',
      'I free myself through forgiveness',
      'I choose compassion over resentment',
      'Forgiving does not mean forgetting or excusing',
      'I deserve the peace that forgiveness brings',
      'I release the burden of unforgiveness',
      'Each day I move closer to complete forgiveness',
    ],
  },
  students: {
    title: 'Affirmations for Students - Focus, Success & Academic Excellence',
    description:
      'Motivating affirmations for students to improve focus, reduce test anxiety, and achieve academic success. Build confidence in your learning.',
    keywords:
      'student affirmations, study motivation, academic success, test anxiety, learning confidence, school affirmations',
    affirmations: [
      'I am capable of learning anything I set my mind to',
      'I am focused and retain information easily',
      'I approach exams with confidence and calm',
      'I am an excellent student',
      'My hard work leads to great results',
      'I understand and remember what I study',
      'I am curious and eager to learn',
      'I manage my time effectively',
      'I perform well under pressure',
      'I ask questions and seek understanding',
      'I am proud of my academic efforts',
      'I learn from mistakes and keep improving',
      'I have all the abilities I need to succeed',
      'I stay motivated throughout the semester',
      'Education opens doors for my future',
    ],
  },
}

export function getNicheAffirmationOfTheDay(niche: string): string {
  const nicheData = NICHE_AFFIRMATIONS[niche]

  if (!nicheData || nicheData.affirmations.length === 0) {
    return 'I am worthy of all the good things that come into my life today.'
  }

  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24))

  return nicheData.affirmations[dayOfYear % nicheData.affirmations.length]
}

export const NICHE_SLUGS = Object.keys(NICHE_AFFIRMATIONS)
