'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, List } from 'lucide-react'

type TOCItem = {
  id: string
  title: string
  level: number
}

type TableOfContentsProps = {
  items: TOCItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true)

  if (items.length === 0) return null

  return (
    <nav className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 my-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-violet-600" />
          <span className="font-bold text-gray-900">Table of Contents</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <ol className="mt-4 space-y-2">
          {items.map((item, index) => (
            <li
              key={item.id}
              style={{ paddingLeft: `${(item.level - 2) * 16}px` }}
            >
              <a
                href={`#${item.id}`}
                className="text-gray-700 hover:text-violet-600 transition flex items-baseline gap-2"
              >
                <span className="text-violet-600 font-semibold text-sm">
                  {index + 1}.
                </span>
                <span className={item.level === 2 ? 'font-medium' : 'text-sm'}>
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  )
}
