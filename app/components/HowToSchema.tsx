type Step = {
  name: string
  text: string
}

type HowToSchemaProps = {
  name: string
  description: string
  totalTime?: string
  steps: Step[]
}

export default function HowToSchema({ name, description, totalTime, steps }: HowToSchemaProps) {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    totalTime: totalTime ?? 'PT10M',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  )
}
