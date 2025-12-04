import { Sparkles } from 'lucide-react'
import AffirmationClient from './components/AffirmationClient'
import { getAffirmationOfTheDay } from './data/affirmations'

export const metadata = {
  title: 'Daily Affirmations - Positive Motivation & Inspiration',
  description: 'Start your day with powerful affirmations.',
}

export default function Home() {
  const initialCategory = 'general'
  const initialAffirmation = getAffirmationOfTheDay(initialCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-violet-600" strokeWidth={2} />
            <h1 className="text-2xl font-bold text-gray-900">Daily Affirmations</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <AffirmationClient
          initialAffirmation={initialAffirmation}
          initialCategory={initialCategory}
        />
      </main>

      <footer className="bg-white border-t-2 border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p className="text-sm font-medium">© 2025 Daily Affirmations.</p>
        </div>
      </footer>
    </div>
  )
}
