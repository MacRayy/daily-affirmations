'use client'

import Link from 'next/link'

type ClickBankCTAProps = {
  href: string
  title: string
  description: string
  buttonLabel: string
  className?: string
}

export function ClickBankCTA({
  href,
  title,
  description,
  buttonLabel,
  className = '',
}: ClickBankCTAProps) {
  return (
    <div
      className={`bg-white rounded-2xl border-2 border-violet-200 shadow-md p-6 flex flex-col md:flex-row items-start md:items-center gap-4 ${className}`}
    >
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        <p className="mt-2 text-[11px] text-gray-400">
          This is an affiliate link. If you buy through it, I may earn a commission at no extra cost to you.
        </p>
      </div>
      <div>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold shadow-sm transition-colors"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  )
}
