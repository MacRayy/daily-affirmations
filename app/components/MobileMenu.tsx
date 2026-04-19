'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

type MobileMenuProps = {
  links: { href: string; label: string }[]
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setOpen(!open)
        }}
        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition cursor-pointer"
        aria-label="Toggle menu"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b-2 border-gray-200 shadow-lg z-20">
          <nav className="flex flex-col px-4 py-3 gap-1">
            <span className="inline-flex items-center self-start rounded-full bg-violet-100 text-violet-700 px-3 py-1 text-xs font-semibold border border-violet-200 mx-3 mb-1">
              AI-powered
            </span>
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setOpen(false)
                }}
                className="text-gray-700 hover:text-violet-600 hover:bg-violet-50 font-semibold transition px-3 py-2.5 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
