import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

type BreadcrumbItem = {
  name: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-500">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center hover:text-violet-600 transition"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-violet-600 transition"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium truncate max-w-[200px] md:max-w-none">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
