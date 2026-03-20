import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { emailIsConfigured } from '../utils/emailService'
import { getRecentNotifications } from '../firebase/firestore'

export default function AdminNotifications() {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const configured = emailIsConfigured()

  useEffect(() => {
    loadNotifications()
  }, [])

  async function loadNotifications() {
    try {
      const data = await getRecentNotifications(50)
      setNotifications(data)
    } catch (err) {
      console.error('Error loading notifications:', err)
    }
    setLoading(false)
  }

  function formatDate(timestamp) {
    if (!timestamp) return '—'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const typeLabel = {
    welcome: 'Welcome',
    module_complete: 'Module Signed Off',
    course_complete: 'Course Complete',
    admin_notification: 'Admin Alert',
    certificate_issued: 'Certificate Issued',
  }

  const typeColor = {
    welcome: 'bg-blue-50 text-blue-700',
    module_complete: 'bg-teal/10 text-teal',
    course_complete: 'bg-success-green/10 text-success-green',
    admin_notification: 'bg-amber-50 text-amber-700',
    certificate_issued: 'bg-purple-50 text-purple-700',
  }

  return (
    <Layout>
      <div className="mb-6">
        <Link to="/admin" className="inline-flex items-center text-sm text-teal hover:underline mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Admin
        </Link>
        <h1 className="font-heading text-2xl font-bold text-navy">Notifications</h1>
      </div>

      {/* Email config status */}
      <div className={`card mb-6 ${configured ? 'border-l-4 border-success-green' : 'border-l-4 border-warning-amber'}`}>
        <div className="flex items-start gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
            configured ? 'bg-success-green/10' : 'bg-warning-amber/10'
          }`}>
            {configured ? (
              <svg className="w-4 h-4 text-success-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-warning-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            )}
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-navy">
              Email Notifications: {configured ? 'Active' : 'Not Configured'}
            </h3>
            {configured ? (
              <p className="text-xs text-text-muted mt-1">
                EmailJS is connected. Candidates receive automatic notifications for sign-offs and course completion.
              </p>
            ) : (
              <div className="text-xs text-text-muted mt-1">
                <p className="mb-2">To enable email notifications, add these to your .env file:</p>
                <code className="block bg-gray-50 p-2 rounded text-xs font-mono">
                  VITE_EMAILJS_SERVICE_ID=your_service_id<br />
                  VITE_EMAILJS_PUBLIC_KEY=your_public_key<br />
                  VITE_EMAILJS_TEMPLATE_WELCOME=template_id<br />
                  VITE_EMAILJS_TEMPLATE_MODULE=template_id<br />
                  VITE_EMAILJS_TEMPLATE_COURSE=template_id<br />
                  VITE_EMAILJS_TEMPLATE_ADMIN=template_id
                </code>
                <p className="mt-2">
                  Sign up free at emailjs.com (200 emails/month free).
                  Certificates still work without email — candidates download them from their dashboard.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Notification log */}
      {loading ? (
        <div className="flex items-center justify-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy"></div>
        </div>
      ) : notifications.length === 0 ? (
        <div className="card text-center py-10 text-text-muted">
          No notifications yet. Notifications will appear here as candidates progress through the course.
        </div>
      ) : (
        <div className="card overflow-hidden p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left font-medium text-text-muted px-6 py-3">Type</th>
                <th className="text-left font-medium text-text-muted px-6 py-3">Candidate</th>
                <th className="text-left font-medium text-text-muted px-6 py-3 hidden sm:table-cell">Details</th>
                <th className="text-left font-medium text-text-muted px-6 py-3 hidden md:table-cell">Email Sent</th>
                <th className="text-left font-medium text-text-muted px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {notifications.map((n) => (
                <tr key={n.id}>
                  <td className="px-6 py-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${typeColor[n.type] || 'bg-gray-100 text-gray-700'}`}>
                      {typeLabel[n.type] || n.type}
                    </span>
                  </td>
                  <td className="px-6 py-3 font-medium text-navy">{n.candidateName || '—'}</td>
                  <td className="px-6 py-3 text-text-muted hidden sm:table-cell">{n.details || '—'}</td>
                  <td className="px-6 py-3 hidden md:table-cell">
                    {n.emailSent ? (
                      <span className="text-success-green text-xs font-medium">Sent</span>
                    ) : (
                      <span className="text-text-muted text-xs">—</span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-text-muted text-xs">{formatDate(n.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  )
}
