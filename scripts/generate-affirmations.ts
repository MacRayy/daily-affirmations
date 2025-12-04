import fs from 'fs'
import { config } from 'dotenv'

// Load .env.local
config({ path: '.env.local' })

const GROQ_API_KEY = process.env.GROQ_API_KEY
const CATEGORIES = [
  'general',
  'career',
  'relationships',
  'health',
  'personal-growth',
  'confidence',
] as const
const AFFIRMATIONS_PER_CATEGORY = 50

if (!GROQ_API_KEY) {
  console.error('❌ GROQ_API_KEY not found in .env.local')
  process.exit(1)
}

type GroqResponse = {
  choices: Array<{
    message: {
      content: string
    }
  }>
}

async function generateAffirmations(category: string, count: number): Promise<string[]> {
  const affirmations: string[] = []

  console.log(`\n📝 Generating ${count} affirmations for ${category}...`)

  for (let i = 0; i < count; i += 10) {
    const batchSize = Math.min(10, count - i)

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'user',
              content: `Generate exactly ${batchSize} unique daily affirmations for "${category}".

Rules:
- Each is 1-2 sentences
- Use "I am" or "I" statements
- Positive and empowering
- Each must be completely different
- Return ONLY a JSON array of strings
- No markdown, no explanations

Example format: ["I am...", "I embrace...", "I trust..."]`,
            },
          ],
          max_tokens: 1500,
          temperature: 0.9,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error(`   ❌ API Error (${response.status}):`, errorText)
        continue
      }

      const data = (await response.json()) as GroqResponse

      if (!data?.choices?.[0]?.message?.content) {
        console.error('   ❌ Invalid response structure')
        continue
      }

      let content = data.choices[0].message.content

      // Clean up markdown code blocks if present
      content = content
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim()

      let batch: unknown
      try {
        batch = JSON.parse(content)
      } catch {
        console.error('   ❌ Failed to parse JSON:', content.substring(0, 100))
        continue
      }

      if (Array.isArray(batch) && batch.every(item => typeof item === 'string')) {
        affirmations.push(...batch)
        console.log(`   ✅ Progress: ${affirmations.length}/${count}`)
      }

      // Wait 2 seconds between requests
      await new Promise(resolve => setTimeout(resolve, 2000))
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      console.error(`   ❌ Error:`, errorMessage)
    }
  }

  return affirmations
}

async function main(): Promise<void> {
  console.log('🚀 Starting affirmation generation...\n')

  const allAffirmations: Record<string, string[]> = {}

  for (const category of CATEGORIES) {
    const affirmations = await generateAffirmations(category, AFFIRMATIONS_PER_CATEGORY)
    allAffirmations[category] = affirmations
    console.log(`✅ Generated ${affirmations.length} for ${category}\n`)
  }

  // Create directory
  const outputDir = './app/data'
  if (!fs.existsSync(outputDir)) {
    console.log('📁 Creating app/data directory...')
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Save JSON
  const outputPath = `${outputDir}/affirmations.json`
  fs.writeFileSync(outputPath, JSON.stringify(allAffirmations, null, 2))

  const total = Object.values(allAffirmations).flat().length
  console.log(`\n✅ SUCCESS! Generated ${total} total affirmations`)
  console.log(`📁 Saved to ${outputPath}`)

  // Show stats
  console.log('\n📊 Breakdown:')
  for (const [category, items] of Object.entries(allAffirmations)) {
    console.log(`   ${category}: ${items.length} affirmations`)
  }
}

main().catch(error => {
  console.error('❌ Fatal error:', error)
  process.exit(1)
})
