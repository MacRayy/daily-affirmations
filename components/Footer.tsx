import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
        <p className="text-sm font-medium mb-4">
          © 2025{' '}
          <Link href="/" className="hover:text-violet-600 hover:underline underline-offset-2">
            Daily Affirmations
          </Link>
          . Empowering you every day.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <Link href="/terms" className="hover:text-violet-600 transition">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-violet-600 transition">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:text-violet-600 transition">
            Contact
          </Link>
          <a
            href="https://www.buymeacoffee.com/MacRay"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 transition"
          >
            Buy Me a Brick 🧱
          </a>
        </div>
        <div className="mt-4 flex justify-center">
          <span className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-2 py-0.5 text-xs font-semibold border border-violet-200">
            AI-powered affirmations
          </span>
        </div>
      </div>
    </footer>
  )
}
