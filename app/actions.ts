'use server'

interface GroqResponse {
  choices: Array<{
    message: {
      content: string
    }
  }>
}

export async function generateNewAffirmation(category: string) {
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'user',
            content: `Generate a single, powerful daily affirmation for the "${category}" category. 
          
          Requirements:
          - 1-2 sentences maximum
          - Positive, empowering, and actionable
          - Use "I am" or "I" statements
          - No explanations, just the affirmation
          - Make it feel personal and authentic
          - Avoid clichés
          
          Return ONLY the affirmation text, nothing else.`,
          },
        ],
        max_tokens: 150,
        temperature: 0.9,
      }),
    })

    const data = (await response.json()) as GroqResponse

    if (data.choices?.[0]?.message?.content) {
      const affirmation = data.choices[0].message.content.trim().replace(/^["']|["']$/g, '')
      return { success: true, affirmation }
    }

    throw new Error('Invalid response from Groq')
  } catch (error) {
    console.error('Error generating affirmation with Groq:', error)

    const fallbacks: Record<string, string> = {
      general: 'I am worthy of all the good things that come into my life today.',
      career: 'I bring unique value to my work, and I am recognized for my contributions.',
      relationships: 'I attract authentic connections and give love freely without losing myself.',
      health: 'I honor my body by making choices that nurture my wellbeing.',
      'personal-growth': "I embrace change as an opportunity to become the person I'm meant to be.",
      confidence: 'I trust my decisions and stand firmly in my own power.',
    }

    return {
      success: false,
      affirmation: fallbacks[category] || fallbacks.general,
    }
  }
}
