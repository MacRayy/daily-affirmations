import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Daily Affirmations',
  description:
    'Get in touch with Daily Affirmations. We&apos;d love to hear your feedback, questions, or suggestions. Contact our team.',
  keywords: 'contact daily affirmations, support, feedback, customer service, help, questions',
  openGraph: {
    title: 'Contact Us - Daily Affirmations',
    description: 'Get in touch with the Daily Affirmations team',
    type: 'website',
    url: 'https://daily-affirm.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Daily Affirmations',
    description: 'Get in touch with the Daily Affirmations team',
    site: '@dailyaffirm',
  },
  alternates: {
    canonical: 'https://daily-affirm.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-violet-600" />
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          </div>
          <div className="mt-2">
            <span className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-2 py-0.5 text-xs font-semibold border border-violet-200">
              AI-powered
            </span>
          </div>
          <p className="text-lg text-gray-600">
            We&apos;d love to hear from you! Whether you have questions, feedback, or suggestions,
            our team is here to help.
          </p>
        </header>

        <div className="grid md:grid-cols-1 gap-12">
          {/* Contact Info Card */}
          <div>
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              <div className="bg-violet-50 border-2 border-violet-200 rounded-lg p-6 text-center">
                <Mail className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-900 mb-2">Email us directly</p>
                <p className="text-gray-700 mb-4">For the fastest response, please email us at:</p>
                <a
                  href="mailto:contact@daily-affirm.com"
                  className="inline-block px-6 py-3 bg-violet-600 text-white rounded-lg font-bold hover:bg-violet-700 transition"
                >
                  contact@daily-affirm.com
                </a>
              </div>

              <div className="mt-6 text-sm text-gray-500 text-center">
                <p>
                  By contacting us, you agree to our{' '}
                  <Link href="/privacy" className="text-violet-600 hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/terms" className="text-violet-600 hover:underline">
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
