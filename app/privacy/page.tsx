import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { Shield, Eye, Lock, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Daily Affirmations',
  description:
    'Learn how Daily Affirmations protects your privacy and handles your data. Our commitment to transparency and user privacy.',
  keywords: 'privacy policy, data protection, user privacy, daily affirmations, personal data',
  openGraph: {
    title: 'Privacy Policy - Daily Affirmations',
    description: 'Our commitment to protecting your privacy and data security',
    type: 'website',
    url: 'https://daily-affirm.com/privacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Daily Affirmations',
    description: 'Our commitment to protecting your privacy and data security',
    site: '@dailyaffirm',
  },
  alternates: {
    canonical: 'https://daily-affirm.com/privacy',
  },
}

export default function PrivacyPage() {
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
            <Shield className="w-8 h-8 text-violet-600" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <div className="mt-2">
            <span className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-2 py-0.5 text-xs font-semibold border border-violet-200">
              AI-powered
            </span>
          </div>
          <p className="text-lg text-gray-600">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              At Daily Affirmations, we are committed to protecting your privacy and ensuring the
              security of your personal information. This Privacy Policy explains how we collect,
              use, and protect your data when you use our affirmation services.
            </p>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-6 h-6 text-violet-600" />
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Information You Provide
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Email address (when subscribing to updates)</li>
                  <li>Feedback and comments you submit</li>
                  <li>Preferences for affirmation categories</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Usage patterns and interaction data</li>
                  <li>Device information and browser type</li>
                  <li>IP address and general location</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-6 h-6 text-violet-600" />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To provide and improve our affirmation services</li>
              <li>To personalize your experience and content recommendations</li>
              <li>To analyze usage patterns and optimize our platform</li>
              <li>To communicate with you about service updates</li>
              <li>To ensure the security and integrity of our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-6 h-6 text-violet-600" />
              <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>SSL encryption for all data transmissions</li>
              <li>Secure servers with limited access</li>
              <li>Regular security audits and updates</li>
              <li>Compliance with data protection regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the following third-party services to operate our platform:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Vercel Analytics:</strong> For website performance and usage analytics
              </li>
              <li>
                <strong>Next.js Hosting:</strong> For secure and reliable content delivery
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13. If you believe we have collected
              such information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new policy on this page and updating the &quot;Last updated&quot; date
              above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please
              contact us at:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mt-4">
              <p className="text-gray-700">
                <strong>Email:</strong> contact@daily-affirm.com
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
