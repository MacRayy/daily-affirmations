import affirmationsData from './affirmations.json'

const typedAffirmations = affirmationsData as Record<string, string[]>

export function getAffirmationOfTheDay(category: string): string {
  const categoryAffirmations = typedAffirmations[category]

  if (!categoryAffirmations || categoryAffirmations.length === 0) {
    return 'I am worthy of all the good things that come into my life today.'
  }

  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24))

  return categoryAffirmations[dayOfYear % categoryAffirmations.length]
}
