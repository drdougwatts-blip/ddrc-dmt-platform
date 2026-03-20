import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function ReferenceLibrary() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <Link
          to="/dashboard"
          className="inline-flex items-center text-sm text-teal hover:underline mb-6"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>

        <h1 className="font-heading text-2xl font-bold text-navy mb-6">Reference Library</h1>

        <div className="card text-center py-12">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <h2 className="font-heading text-lg font-semibold text-navy mb-2">
            Reference Library coming soon
          </h2>
          <p className="text-text-muted max-w-md mx-auto">
            Quick-reference cards covering key clinical guidelines, drug doses, treatment
            tables, and diagnostic criteria will be available here in a future update.
          </p>
        </div>
      </div>
    </Layout>
  )
}
