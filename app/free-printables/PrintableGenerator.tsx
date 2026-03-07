'use client'

import { useState } from 'react'
import { jsPDF } from 'jspdf'
import { Download, Star, Briefcase, Users, Leaf, Rocket, Zap } from 'lucide-react'

const CATEGORIES = [
  {
    id: 'general',
    name: 'General',
    icon: Star,
    color: 'bg-violet-600',
    affirmations: [
      'I am worthy of all the good things that come into my life.',
      'I trust the journey and embrace each new day with gratitude.',
      'I am becoming the best version of myself, one day at a time.',
      'I radiate positivity and attract abundance into my life.',
      'I am capable of achieving anything I set my mind to.',
      'I choose happiness and peace in every moment.',
      'I am grateful for all the blessings in my life.',
      'I release what no longer serves me and welcome new beginnings.',
      'I am surrounded by love and support.',
      'Today, I choose to focus on what I can control.',
    ],
  },
  {
    id: 'career',
    name: 'Career',
    icon: Briefcase,
    color: 'bg-blue-600',
    affirmations: [
      'I bring unique value to my work that no one else can replicate.',
      'I am confident in my abilities and trust my professional instincts.',
      'I attract opportunities that align with my career goals.',
      'I am a respected leader who inspires others.',
      'I deserve success, recognition, and fair compensation.',
      'I handle workplace challenges with grace and wisdom.',
      'My ideas are valuable and deserve to be heard.',
      'I am constantly growing and improving in my career.',
      'I create meaningful impact through my work.',
      'Success flows to me naturally and abundantly.',
    ],
  },
  {
    id: 'relationships',
    name: 'Relationships',
    icon: Users,
    color: 'bg-rose-600',
    affirmations: [
      'I attract loving, supportive relationships into my life.',
      'I communicate my needs clearly and with compassion.',
      'I am worthy of deep, authentic love and connection.',
      'I set healthy boundaries that honor my wellbeing.',
      'I give and receive love freely and openly.',
      'I forgive those who have hurt me and release the past.',
      'I am a great listener and supportive friend.',
      'My relationships are built on trust and mutual respect.',
      'I attract people who celebrate and encourage my growth.',
      'I am complete on my own and choose connection from a place of wholeness.',
    ],
  },
  {
    id: 'health',
    name: 'Health',
    icon: Leaf,
    color: 'bg-emerald-600',
    affirmations: [
      'My body is strong, healthy, and full of energy.',
      'I nourish my body with foods that make me feel vibrant.',
      'I listen to my body and give it the rest it needs.',
      'I am grateful for my health and treat my body with respect.',
      'Every cell in my body radiates health and vitality.',
      'I release stress and welcome peace into my mind and body.',
      'I move my body in ways that bring me joy.',
      'I am worthy of self-care and make it a priority.',
      'My mental health is just as important as my physical health.',
      'I am becoming healthier and stronger every day.',
    ],
  },
  {
    id: 'personal-growth',
    name: 'Personal Growth',
    icon: Rocket,
    color: 'bg-indigo-600',
    affirmations: [
      'I embrace change as an opportunity for growth.',
      'I am constantly evolving into the person I am meant to be.',
      'I learn valuable lessons from every experience.',
      'I am open to new possibilities and perspectives.',
      'I have the power to create the life I desire.',
      'I celebrate my progress, no matter how small.',
      'I am brave enough to step outside my comfort zone.',
      'I trust the timing of my life and remain patient.',
      'I am committed to my personal development.',
      'Every day, I become more aligned with my true self.',
    ],
  },
  {
    id: 'confidence',
    name: 'Confidence',
    icon: Zap,
    color: 'bg-amber-600',
    affirmations: [
      'I am confident, capable, and strong.',
      'I believe in myself and my abilities.',
      'I am worthy of respect and admiration.',
      'I speak my truth with clarity and conviction.',
      'I am proud of who I am and who I am becoming.',
      'I face challenges with courage and determination.',
      'My confidence grows stronger every day.',
      'I trust my decisions and stand by them.',
      'I radiate self-assurance in everything I do.',
      'I am enough exactly as I am.',
    ],
  },
]

export default function PrintableGenerator() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [generating, setGenerating] = useState(false)

  const generatePDF = async (categoryId: string) => {
    setGenerating(true)
    const category = CATEGORIES.find(c => c.id === categoryId)
    if (!category) return

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 15
    const cardWidth = (pageWidth - margin * 3) / 2
    const cardHeight = 50
    const cornerRadius = 3

    // Title page
    doc.setFillColor(139, 92, 246) // violet-500
    doc.rect(0, 0, pageWidth, pageHeight, 'F')

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(32)
    doc.setFont('helvetica', 'bold')
    doc.text('Daily Affirmations', pageWidth / 2, pageHeight / 2 - 20, { align: 'center' })

    doc.setFontSize(24)
    doc.setFont('helvetica', 'normal')
    doc.text(`${category.name} Collection`, pageWidth / 2, pageHeight / 2 + 10, { align: 'center' })

    doc.setFontSize(14)
    doc.text('10 Powerful Affirmations for Your Daily Practice', pageWidth / 2, pageHeight / 2 + 30, {
      align: 'center',
    })

    doc.setFontSize(12)
    doc.text('daily-affirm.com', pageWidth / 2, pageHeight - 30, { align: 'center' })

    // Cards page
    doc.addPage()

    doc.setFontSize(10)
    doc.setTextColor(107, 114, 128) // gray-500
    doc.text('Print on cardstock and cut along the lines. Place where you will see them daily.', pageWidth / 2, 10, {
      align: 'center',
    })

    let x = margin
    let y = 20

    category.affirmations.forEach((affirmation, index) => {
      // Card background
      doc.setFillColor(255, 255, 255)
      doc.setDrawColor(229, 231, 235) // gray-200
      doc.roundedRect(x, y, cardWidth, cardHeight, cornerRadius, cornerRadius, 'FD')

      // Category badge
      const badgeColors: Record<string, [number, number, number]> = {
        general: [139, 92, 246],
        career: [37, 99, 235],
        relationships: [225, 29, 72],
        health: [16, 185, 129],
        'personal-growth': [79, 70, 229],
        confidence: [217, 119, 6],
      }
      const badgeColor = badgeColors[categoryId] || [139, 92, 246]
      doc.setFillColor(...badgeColor)
      doc.roundedRect(x + 5, y + 5, 25, 6, 1, 1, 'F')
      doc.setFontSize(6)
      doc.setTextColor(255, 255, 255)
      doc.text(category.name.toUpperCase(), x + 7, y + 9)

      // Affirmation number
      doc.setFontSize(8)
      doc.setTextColor(156, 163, 175) // gray-400
      doc.text(`#${index + 1}`, x + cardWidth - 10, y + 9)

      // Affirmation text
      doc.setFontSize(11)
      doc.setTextColor(31, 41, 55) // gray-800
      doc.setFont('helvetica', 'bold')

      const lines = doc.splitTextToSize(`"${affirmation}"`, cardWidth - 14)
      const textY = y + 22
      lines.forEach((line: string, lineIndex: number) => {
        doc.text(line, x + 7, textY + lineIndex * 6)
      })

      // Website
      doc.setFontSize(7)
      doc.setTextColor(139, 92, 246)
      doc.setFont('helvetica', 'normal')
      doc.text('daily-affirm.com', x + 7, y + cardHeight - 5)

      // Move to next position
      if (x === margin) {
        x = margin * 2 + cardWidth
      } else {
        x = margin
        y += cardHeight + 8
      }

      // Add new page if needed
      if (y + cardHeight > pageHeight - margin && index < category.affirmations.length - 1) {
        doc.addPage()
        x = margin
        y = 15
      }
    })

    // Save the PDF
    doc.save(`${category.name.toLowerCase()}-affirmations-daily-affirm.pdf`)
    setGenerating(false)
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {CATEGORIES.map(category => {
          const Icon = category.icon
          const isSelected = selectedCategory === category.id
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-6 rounded-xl transition-all border-2 shadow-sm hover:shadow-lg cursor-pointer ${
                isSelected
                  ? `${category.color} text-white border-transparent scale-[1.02]`
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <Icon className="w-8 h-8" strokeWidth={2} />
                <span className="font-bold">{category.name}</span>
                <span className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                  10 affirmations
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {selectedCategory && (
        <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Preview: {CATEGORIES.find(c => c.id === selectedCategory)?.name} Affirmations
          </h3>
          <ul className="space-y-3 mb-6">
            {CATEGORIES.find(c => c.id === selectedCategory)?.affirmations.slice(0, 3).map((aff, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-violet-600 font-bold">{i + 1}.</span>
                <span className="text-gray-700">&ldquo;{aff}&rdquo;</span>
              </li>
            ))}
            <li className="text-gray-500 italic">...and 7 more affirmations</li>
          </ul>

          <button
            onClick={() => generatePDF(selectedCategory)}
            disabled={generating}
            className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-bold transition disabled:opacity-50 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <Download className="w-6 h-6" />
            {generating ? 'Generating PDF...' : 'Download Free PDF'}
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Instant download - No email required
          </p>
        </div>
      )}
    </div>
  )
}
