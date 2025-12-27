import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FileText, Scale, AlertCircle, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - Daily Affirmations',
  description:
    'Read our Terms of Service to understand your rights and responsibilities when using Daily Affirmations. Legal terms and conditions.',
  keywords: 'terms of service, legal terms, conditions, daily affirmations, user agreement',
  openGraph: {
    title: 'Terms of Service - Daily Affirmations',
    description: 'Terms and conditions for using Daily Affirmations services',
    type: 'website',
    url: 'https://daily-affirm.com/terms',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Daily Affirmations',
    description: 'Terms and conditions for using Daily Affirmations services',
    site: '@dailyaffirm',
  },
  alternates: {
    canonical: 'https://daily-affirm.com/terms',
  },
}

export default function TermsPage() {
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
            <FileText className="w-8 h-8 text-violet-600" />
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using Daily Affirmations, you accept and agree to be bound by the
              terms and provision of this agreement. These Terms of Service apply to all visitors,
              users, and others who access or use the service.
            </p>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-6 h-6 text-violet-600" />
              <h2 className="text-2xl font-bold text-gray-900">Use License</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily access the materials (affirmations, articles,
              content) on Daily Affirmations for personal, non-commercial transitory viewing only.
              This is the grant of a license, not a transfer of title, and under this license you
              may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-6 h-6 text-violet-600" />
              <h2 className="text-2xl font-bold text-gray-900">Disclaimer</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The materials on Daily Affirmations are provided on an &apos;as is&apos; basis. Daily
              Affirmations makes no warranties, expressed or implied, and hereby disclaims and
              negates all other warranties including without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose, or non-infringement
              of intellectual property or other violation of rights.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Further, Daily Affirmations does not warrant or make any representations concerning
              the accuracy, likely results, or reliability of the use of the materials on its
              website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Daily Affirmations or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use the materials on Daily
              Affirmations, even if Daily Affirmations or a Daily Affirmations authorized
              representative has been notified orally or in writing of the possibility of such
              damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy of Materials</h2>
            <p className="text-gray-700 leading-relaxed">
              The materials appearing on Daily Affirmations could include technical, typographical,
              or photographic errors. Daily Affirmations does not warrant that any of the materials
              on its website are accurate, complete, or current. Daily Affirmations may make changes
              to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Daily Affirmations has not reviewed all of the sites linked to our website and is not
              responsible for the contents of any such linked site. The inclusion of any link does
              not imply endorsement by Daily Affirmations of the site. Use of any such linked
              website is at the user&apos;s own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              Daily Affirmations may revise these terms of service for its website at any time
              without notice. By using this website, you are agreeing to be bound by the then
              current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws
              of the jurisdiction in which Daily Affirmations operates and you irrevocably submit to
              the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-6 h-6 text-violet-600" />
              <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs
              the site, to understand our practices. By using Daily Affirmations, you agree to be
              bound by our Privacy Policy.
            </p>
            <div className="bg-violet-50 p-4 rounded-lg mt-4">
              <Link href="/privacy" className="text-violet-600 hover:underline font-semibold">
                Read our Privacy Policy →
              </Link>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questions about the Terms of Service should be sent to us at:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
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
