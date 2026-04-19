'use client'

import { jsPDF } from 'jspdf'
import { Download, Star, Briefcase, Users, Leaf, Rocket, Zap } from 'lucide-react'
import { useState } from 'react'

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

  const generatePDF = (categoryId: string) => {
    setGenerating(true)
    const category = CATEGORIES.find(c => c.id === categoryId)
    if (!category) {
      return
    }

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 12
    const cardWidth = (pageWidth - margin * 3) / 2
    const cardHeight = 55
    const cornerRadius = 4

    // Color schemes for each category
    type ColorScheme = {
      primary: [number, number, number]
      secondary: [number, number, number]
      accent: [number, number, number]
      light: [number, number, number]
    }
    const colorSchemes: Record<string, ColorScheme | undefined> = {
      general: {
        primary: [139, 92, 246], // violet
        secondary: [167, 139, 250], // violet light
        accent: [196, 181, 253], // violet lighter
        light: [245, 243, 255], // violet bg
      },
      career: {
        primary: [37, 99, 235], // blue
        secondary: [96, 165, 250], // blue light
        accent: [147, 197, 253], // blue lighter
        light: [239, 246, 255], // blue bg
      },
      relationships: {
        primary: [225, 29, 72], // rose
        secondary: [251, 113, 133], // rose light
        accent: [253, 164, 175], // rose lighter
        light: [255, 241, 242], // rose bg
      },
      health: {
        primary: [16, 185, 129], // emerald
        secondary: [52, 211, 153], // emerald light
        accent: [110, 231, 183], // emerald lighter
        light: [236, 253, 245], // emerald bg
      },
      'personal-growth': {
        primary: [79, 70, 229], // indigo
        secondary: [129, 140, 248], // indigo light
        accent: [165, 180, 252], // indigo lighter
        light: [238, 242, 255], // indigo bg
      },
      confidence: {
        primary: [217, 119, 6], // amber
        secondary: [251, 191, 36], // amber light
        accent: [252, 211, 77], // amber lighter
        light: [255, 251, 235], // amber bg
      },
    }

    const colors = colorSchemes[categoryId] ?? colorSchemes.general!

    // ============ TITLE PAGE ============
    // Gradient background (simulated with rectangles)
    const gradientSteps = 50
    for (let i = 0; i < gradientSteps; i++) {
      const ratio = i / gradientSteps
      const r = Math.round(colors.primary[0] + (colors.secondary[0] - colors.primary[0]) * ratio)
      const g = Math.round(colors.primary[1] + (colors.secondary[1] - colors.primary[1]) * ratio)
      const b = Math.round(colors.primary[2] + (colors.secondary[2] - colors.primary[2]) * ratio)
      doc.setFillColor(r, g, b)
      doc.rect(0, (pageHeight / gradientSteps) * i, pageWidth, pageHeight / gradientSteps + 1, 'F')
    }

    // Decorative circles
    doc.setFillColor(255, 255, 255, 0.1)
    doc.circle(20, 40, 30, 'F')
    doc.circle(pageWidth - 25, pageHeight - 50, 40, 'F')
    doc.circle(pageWidth - 10, 80, 20, 'F')

    // Title content
    doc.setTextColor(255, 255, 255)

    // Decorative line
    doc.setDrawColor(255, 255, 255)
    doc.setLineWidth(0.5)
    doc.line(pageWidth / 2 - 30, pageHeight / 2 - 45, pageWidth / 2 + 30, pageHeight / 2 - 45)

    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.text('DAILY AFFIRMATIONS', pageWidth / 2, pageHeight / 2 - 35, { align: 'center' })

    doc.setFontSize(36)
    doc.setFont('helvetica', 'bold')
    doc.text(category.name, pageWidth / 2, pageHeight / 2, { align: 'center' })

    doc.setFontSize(16)
    doc.setFont('helvetica', 'normal')
    doc.text('Collection', pageWidth / 2, pageHeight / 2 + 12, { align: 'center' })

    // Decorative line
    doc.line(pageWidth / 2 - 30, pageHeight / 2 + 25, pageWidth / 2 + 30, pageHeight / 2 + 25)

    doc.setFontSize(12)
    doc.text('10 Powerful Affirmations', pageWidth / 2, pageHeight / 2 + 40, { align: 'center' })
    doc.text('for Your Daily Practice', pageWidth / 2, pageHeight / 2 + 48, { align: 'center' })

    // Footer
    doc.setFontSize(11)
    doc.text('daily-affirm.com', pageWidth / 2, pageHeight - 25, { align: 'center' })

    // ============ CARDS PAGES ============
    doc.addPage()

    // Page background
    doc.setFillColor(250, 250, 250)
    doc.rect(0, 0, pageWidth, pageHeight, 'F')

    // Header
    doc.setFillColor(...colors.primary)
    doc.rect(0, 0, pageWidth, 18, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text(`${category.name.toUpperCase()} AFFIRMATIONS`, pageWidth / 2, 11, { align: 'center' })

    doc.setFontSize(8)
    doc.setTextColor(107, 114, 128)
    doc.setFont('helvetica', 'normal')
    doc.text(
      'Cut along the dotted lines. Place on your mirror, desk, or journal.',
      pageWidth / 2,
      25,
      {
        align: 'center',
      },
    )

    let x = margin
    let y = 32

    category.affirmations.forEach((affirmation, index) => {
      // Card shadow (subtle)
      doc.setFillColor(200, 200, 200)
      doc.roundedRect(x + 1, y + 1, cardWidth, cardHeight, cornerRadius, cornerRadius, 'F')

      // Card background with gradient effect
      doc.setFillColor(...colors.light)
      doc.roundedRect(x, y, cardWidth, cardHeight, cornerRadius, cornerRadius, 'F')

      // Colored accent bar on left
      doc.setFillColor(...colors.primary)
      doc.roundedRect(x, y, 3, cardHeight, cornerRadius, 0, 'F')
      doc.rect(x + 2, y, 2, cardHeight, 'F')

      // Card border
      doc.setDrawColor(...colors.accent)
      doc.setLineWidth(0.3)
      doc.roundedRect(x, y, cardWidth, cardHeight, cornerRadius, cornerRadius, 'S')

      // Large decorative quote mark
      doc.setFontSize(48)
      doc.setTextColor(...colors.accent)
      doc.setFont('helvetica', 'bold')
      doc.text('"', x + 8, y + 18)

      // Affirmation number badge
      doc.setFillColor(...colors.primary)
      doc.circle(x + cardWidth - 10, y + 10, 5, 'F')
      doc.setFontSize(8)
      doc.setTextColor(255, 255, 255)
      doc.setFont('helvetica', 'bold')
      doc.text(`${index + 1}`, x + cardWidth - 10, y + 12, { align: 'center' })

      // Affirmation text
      doc.setFontSize(10)
      doc.setTextColor(31, 41, 55)
      doc.setFont('helvetica', 'bold')

      const lines = doc.splitTextToSize(affirmation, cardWidth - 20) as string[]
      const lineHeight = 5
      const totalTextHeight = lines.length * lineHeight
      const startY = y + (cardHeight - totalTextHeight) / 2 + 3

      lines.forEach((line, lineIndex) => {
        doc.text(line, x + 10, startY + lineIndex * lineHeight)
      })

      // Bottom decoration
      doc.setFillColor(...colors.secondary)
      doc.roundedRect(x + 10, y + cardHeight - 8, 20, 3, 1, 1, 'F')

      // Website watermark
      doc.setFontSize(6)
      doc.setTextColor(...colors.primary)
      doc.setFont('helvetica', 'normal')
      doc.text('daily-affirm.com', x + cardWidth - 8, y + cardHeight - 4, { align: 'right' })

      // Dotted cut line
      doc.setDrawColor(180, 180, 180)
      doc.setLineDashPattern([1, 1], 0)
      doc.setLineWidth(0.2)

      // Move to next position
      if (x === margin) {
        x = margin * 2 + cardWidth
      } else {
        x = margin
        y += cardHeight + 6

        // Draw horizontal cut line between rows
        if (y < pageHeight - margin - cardHeight) {
          doc.line(margin, y - 3, pageWidth - margin, y - 3)
        }
      }

      // Reset dash pattern
      doc.setLineDashPattern([], 0)

      // Add new page if needed
      if (y + cardHeight > pageHeight - margin && index < category.affirmations.length - 1) {
        doc.addPage()

        // Page background
        doc.setFillColor(250, 250, 250)
        doc.rect(0, 0, pageWidth, pageHeight, 'F')

        // Header
        doc.setFillColor(...colors.primary)
        doc.rect(0, 0, pageWidth, 12, 'F')
        doc.setTextColor(255, 255, 255)
        doc.setFontSize(8)
        doc.setFont('helvetica', 'bold')
        doc.text(`${category.name.toUpperCase()} AFFIRMATIONS (continued)`, pageWidth / 2, 8, {
          align: 'center',
        })

        x = margin
        y = 18
      }
    })

    // ============ TIPS PAGE ============
    doc.addPage()

    // Background
    doc.setFillColor(...colors.light)
    doc.rect(0, 0, pageWidth, pageHeight, 'F')

    // Header bar
    doc.setFillColor(...colors.primary)
    doc.rect(0, 0, pageWidth, 35, 'F')

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('How to Use Your', pageWidth / 2, 18, { align: 'center' })
    doc.text('Affirmation Cards', pageWidth / 2, 28, { align: 'center' })

    // Tips content
    const tips = [
      {
        title: 'Morning Ritual',
        text: 'Read your affirmations aloud each morning while looking in the mirror. Feel the words as you speak them.',
      },
      {
        title: 'Strategic Placement',
        text: 'Place cards where you will see them daily: bathroom mirror, desk, refrigerator, car dashboard, or wallet.',
      },
      {
        title: 'Repeat with Feeling',
        text: 'Say each affirmation 3 times with emotion and conviction. Visualization enhances the effect.',
      },
      {
        title: 'Be Consistent',
        text: 'Practice daily for at least 21 days. Consistency rewires your brain for positive thinking.',
      },
    ]

    let tipY = 50

    tips.forEach((tip, i) => {
      // Tip card
      doc.setFillColor(255, 255, 255)
      doc.roundedRect(margin, tipY, pageWidth - margin * 2, 30, 3, 3, 'F')

      // Number circle
      doc.setFillColor(...colors.primary)
      doc.circle(margin + 12, tipY + 15, 8, 'F')
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.text(`${i + 1}`, margin + 12, tipY + 18, { align: 'center' })

      // Tip title
      doc.setTextColor(...colors.primary)
      doc.setFontSize(12)
      doc.text(tip.title, margin + 25, tipY + 10)

      // Tip text
      doc.setTextColor(75, 85, 99)
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      const tipLines = doc.splitTextToSize(tip.text, pageWidth - margin * 2 - 30) as string[]
      tipLines.forEach((line, lineIndex) => {
        doc.text(line, margin + 25, tipY + 18 + lineIndex * 4)
      })

      tipY += 38
    })

    // CTA box
    doc.setFillColor(...colors.primary)
    doc.roundedRect(margin, tipY + 10, pageWidth - margin * 2, 35, 4, 4, 'F')

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Want Fresh AI-Generated Affirmations Daily?', pageWidth / 2, tipY + 25, {
      align: 'center',
    })

    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.text(
      'Visit daily-affirm.com for unlimited personalized affirmations',
      pageWidth / 2,
      tipY + 35,
      { align: 'center' },
    )

    // Footer
    doc.setTextColor(...colors.primary)
    doc.setFontSize(10)
    doc.text('Made with love by Daily Affirmations', pageWidth / 2, pageHeight - 15, {
      align: 'center',
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
              onClick={() => {
                setSelectedCategory(category.id)
              }}
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
            {CATEGORIES.find(c => c.id === selectedCategory)
              ?.affirmations.slice(0, 3)
              .map((aff, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-violet-600 font-bold">{i + 1}.</span>
                  <span className="text-gray-700">&ldquo;{aff}&rdquo;</span>
                </li>
              ))}
            <li className="text-gray-500 italic">...and 7 more affirmations</li>
          </ul>

          <button
            onClick={() => {
              generatePDF(selectedCategory)
            }}
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
