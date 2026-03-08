type ItemListSchemaProps = {
  name: string
  description: string
  items: string[]
  itemType?: string
}

export default function ItemListSchema({
  name,
  description,
  items,
  itemType = 'ListItem',
}: ItemListSchemaProps) {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: name,
    description: description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': itemType,
      position: index + 1,
      name: item,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
    />
  )
}
