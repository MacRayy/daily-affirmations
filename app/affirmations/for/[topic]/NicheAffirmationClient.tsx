'use client'

import React, { useState, useEffect, useRef } from 'react'
import { RefreshCw, Copy, Check, Share2, Heart, Sparkles } from 'lucide-react'
import { generateNewAffirmation } from '@/app/actions'

type NicheAffirmationClientProps = {
  topic: string
  topicName: string
  initialAffirmation: string
  allAffirmations: string[]
}

export default function NicheAffirmationClient({
  topic,
  topicName,
  initialAffirmation,
  allAffirmations,
}: NicheAffirmationClientProps) {
  const [affirmation, setAffirmation] = useState(initialAffirmation)
  const [displayedText, setDisplayedText] = useState(initialAffirmation)
  const [isTyping, setIsTyping] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isAIGenerated, setIsAIGenerated] = useState(false)
  const [copied, setCopied] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const typingRef = useRef<NodeJS.Timeout | null>(null)

  // Typewriter effect
  useEffect(() => {
    if (typingRef.current) {
      clearInterval(typingRef.current)
    }

    if (affirmation !== displayedText || isTyping) {
      setIsTyping(true)
      setDisplayedText('')
      let index = 0

      typingRef.current = setInterval(() => {
        if (index < affirmation.length) {
          setDisplayedText(affirmation.slice(0, index + 1))
          index++
        } else {
          setIsTyping(false)
          if (typingRef.current) {
            clearInterval(typingRef.current)
          }
        }
      }, 50)
    }

    return () => {
      if (typingRef.current) {
        clearInterval(typingRef.current)
      }
    }
  }, [affirmation])

  const handleGenerateNew = () => {
    const nextIndex = (currentIndex + 1) % allAffirmations.length
    setCurrentIndex(nextIndex)
    setAffirmation(allAffirmations[nextIndex])
    setIsAIGenerated(false)
  }

  const handleAIGenerate = async () => {
    setLoading(true)
    try {
      const result = await generateNewAffirmation(topic)
      setAffirmation(result.affirmation)
      setIsAIGenerated(true)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(affirmation)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareAffirmation = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Affirmation for ${topicName}`,
          text: affirmation,
          url: window.location.href,
        })
      } catch (error) {
        console.error('Share failed:', error)
      }
    } else {
      await copyToClipboard()
    }
  }

  const shareOnPinterest = () => {
    const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      window.location.href
    )}&description=${encodeURIComponent(`"${affirmation}" - Affirmation for ${topicName}`)}`
    window.open(pinterestUrl, '_blank', 'width=600,height=400')
  }

  return (
    <div className="rounded-2xl border-2 border-gray-200 shadow-lg p-8 md:p-12 bg-white">
      <div>
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-violet-600 text-white shadow-md">
            <Heart className="w-5 h-5" strokeWidth={2} />
            {topicName}
          </span>
          {isAIGenerated && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-violet-100 text-violet-700 animate-pulse">
              <Sparkles className="w-3 h-3" />
              AI Generated
            </span>
          )}
        </div>

        <div className="mb-8 min-h-[120px] flex items-center">
          {loading ? (
            <div className="flex items-center justify-center w-full py-12">
              <div className="relative">
                <RefreshCw className="w-10 h-10 text-violet-600 animate-spin" strokeWidth={2} />
                <div className="absolute inset-0 w-10 h-10 rounded-full bg-violet-600/20 animate-ping" />
              </div>
            </div>
          ) : (
            <p className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
              &ldquo;{displayedText}&rdquo;
              {isTyping && (
                <span className="inline-block w-[3px] h-[1em] bg-violet-600 ml-1 animate-blink align-middle" />
              )}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-6 border-t-2 border-gray-100">
        <button
          onClick={handleGenerateNew}
          disabled={loading}
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer disabled:opacity-50"
        >
          <RefreshCw className="w-5 h-5" strokeWidth={2} />
          New
        </button>

        <button
          onClick={handleAIGenerate}
          disabled={loading}
          className="flex items-center gap-2 px-5 py-3 bg-white text-violet-600 border-2 border-violet-600 hover:bg-violet-50 rounded-lg font-semibold transition-all shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer disabled:opacity-50"
        >
          <Sparkles className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} strokeWidth={2} />
          Generate
        </button>

        <button
          onClick={copyToClipboard}
          className="p-3 rounded-lg bg-white text-gray-700 border-2 border-gray-200 hover:border-violet-300 hover:text-violet-600 transition-all shadow-sm hover:shadow-md hover:scale-105 cursor-pointer"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-600" strokeWidth={2} />
          ) : (
            <Copy className="w-5 h-5" strokeWidth={2} />
          )}
        </button>

        <button
          onClick={shareOnPinterest}
          className="p-3 rounded-lg bg-white text-[#E60023] border-2 border-gray-200 hover:border-[#E60023] transition-all shadow-sm hover:shadow-md hover:scale-105 cursor-pointer"
          title="Share on Pinterest"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
          </svg>
        </button>

        <button
          onClick={shareAffirmation}
          className="p-3 rounded-lg bg-white text-gray-700 border-2 border-gray-200 hover:border-violet-300 hover:text-violet-600 transition-all shadow-sm hover:shadow-md hover:scale-105 cursor-pointer"
          title="Share"
        >
          <Share2 className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        {isAIGenerated
          ? 'Showing AI-generated affirmation'
          : `Showing affirmation ${currentIndex + 1} of ${allAffirmations.length}`}
      </p>
    </div>
  )
}
