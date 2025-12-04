'use client'

import { useState } from 'react'
import {
  RefreshCw,
  Share2,
  Briefcase,
  Users,
  Leaf,
  Rocket,
  Zap,
  Star,
  Sparkles,
} from 'lucide-react'
import { generateNewAffirmation } from '../actions'
import { getAffirmationOfTheDay } from '../data/affirmations'

const CATEGORIES = [
  { id: 'general', name: 'General', icon: Star, color: 'bg-violet-600' },
  { id: 'career', name: 'Career', icon: Briefcase, color: 'bg-blue-600' },
  { id: 'relationships', name: 'Relationships', icon: Users, color: 'bg-rose-600' },
  { id: 'health', name: 'Health', icon: Leaf, color: 'bg-emerald-600' },
  { id: 'personal-growth', name: 'Personal Growth', icon: Rocket, color: 'bg-indigo-600' },
  { id: 'confidence', name: 'Confidence', icon: Zap, color: 'bg-amber-600' },
]

interface AffirmationClientProps {
  initialAffirmation: string
  initialCategory: string
}

export default function AffirmationClient({
  initialAffirmation,
  initialCategory,
}: AffirmationClientProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [affirmation, setAffirmation] = useState(initialAffirmation)
  const [loading, setLoading] = useState(false)
  const [isAIGenerated, setIsAIGenerated] = useState(false)

  const handleGenerateNewAffirmation = async () => {
    setLoading(true)

    try {
      const result: { success: boolean; affirmation: string } =
        await generateNewAffirmation(selectedCategory)
      setAffirmation(result.affirmation)
      setIsAIGenerated(true)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    const newAffirmation = getAffirmationOfTheDay(categoryId)
    setAffirmation(newAffirmation)
    setIsAIGenerated(false)
  }

  const shareAffirmation = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Affirmation',
          text: affirmation,
        })
      } catch (error) {
        console.error('Share failed:', error)
      }
    } else {
      await navigator.clipboard.writeText(affirmation)
      alert('Affirmation copied to clipboard!')
    }
  }

  const currentCategory = CATEGORIES.find(c => c.id === selectedCategory)
  const CurrentIcon = currentCategory?.icon || Star

  return (
    <>
      <div className="mb-8">
        <h2 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
          Choose Your Focus
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {CATEGORIES.map(category => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                disabled={loading}
                className={`p-4 rounded-xl transition-all border-2 shadow-sm hover:shadow-md disabled:opacity-50 ${
                  selectedCategory === category.id
                    ? `${category.color} text-white border-transparent scale-[1.02]`
                    : `bg-white text-gray-700 border-gray-200 hover:border-gray-300`
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                  <span className="font-semibold text-sm">{category.name}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8 md:p-12">
        <div className="mb-8 flex items-center gap-3">
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold ${currentCategory?.color} text-white`}
          >
            <CurrentIcon className="w-5 h-5" strokeWidth={2} />
            {currentCategory?.name}
          </span>
          {isAIGenerated && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-violet-100 text-violet-700">
              <Sparkles className="w-3 h-3" />
              AI Generated
            </span>
          )}
        </div>

        <div className="mb-8 min-h-[120px] flex items-center">
          {loading ? (
            <div className="flex items-center justify-center w-full py-12">
              <RefreshCw className="w-8 h-8 text-violet-600 animate-spin" strokeWidth={2} />
            </div>
          ) : (
            <p className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
              &ldquo;{affirmation}&rdquo;
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 pt-6 border-t-2 border-gray-100">
          <button
            onClick={handleGenerateNewAffirmation}
            disabled={loading}
            className="flex items-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition disabled:opacity-50 shadow-sm hover:shadow-md"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} strokeWidth={2} />
            Generate New
          </button>

          <button
            onClick={shareAffirmation}
            className="p-3 rounded-lg bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 transition shadow-sm hover:shadow-md"
          >
            <Share2 className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </>
  )
}
