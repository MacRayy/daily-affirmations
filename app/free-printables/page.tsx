import Link from 'next/link'
import Logo from '@/app/components/Logo'
import MobileMenu from '@/app/components/MobileMenu'
import Footer from '@/components/Footer'
import { ROUTES } from '../AppRoutes'
import PrintableGenerator from './PrintableGenerator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: ROUTES.printables.title,
  description: ROUTES.printables.description,
  keywords: ROUTES.printables.keywords,
  openGraph: {
    title: ROUTES.printables.title,
    description: ROUTES.printables.description,
    type: 'website',
  },
  alternates: {
    canonical: ROUTES.printables.path,
  },
}

export default function PrintablesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-10 shadow-sm relative">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8 min-w-[32px] min-h-[32px]" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Link href={ROUTES.home.path}>Daily Affirmations</Link>
              <span className="hidden md:inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-2 py-0.5 text-xs font-semibold border border-violet-200">
                AI-powered
              </span>
            </h1>
            <nav className="hidden md:flex items-center gap-6 ml-auto">
              <Link
                href={ROUTES.blog.path}
                className="text-gray-700 hover:text-violet-600 font-semibold transition"
              >
                Blog
              </Link>
            </nav>
            <div className="ml-auto md:hidden">
              <MobileMenu links={[{ href: ROUTES.blog.path, label: 'Blog' }]} />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free Printable Affirmation Cards
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download beautiful affirmation cards to print and place on your mirror, desk, or
            journal. Choose your category and get 10 powerful affirmations instantly.
          </p>
        </div>

        <PrintableGenerator />

        <div className="mt-16 bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Your Printable Cards</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-600">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">1. Print & Cut</h3>
              <p>
                Print on cardstock for best results. Cut along the dotted lines to create individual
                cards.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">2. Place Strategically</h3>
              <p>
                Put cards on your bathroom mirror, desk, refrigerator, or anywhere you&apos;ll see
                them daily.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">3. Practice Daily</h3>
              <p>
                Read your affirmations aloud each morning. Feel the words and believe in their
                truth.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Want fresh AI-generated affirmations every day?</p>
          <Link
            href={ROUTES.home.path}
            className="inline-block px-8 py-4 bg-violet-600 text-white rounded-lg font-bold hover:bg-violet-700 transition shadow-lg hover:shadow-xl"
          >
            Try Our Free Affirmation Generator
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
