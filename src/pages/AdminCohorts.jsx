import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { useAuth } from '../context/AuthContext'
import { createEnrolmentCode, getEnrolmentCodes, toggleCodeActive } from '../firebase/firestore'
import { Timestamp } from 'firebase/firestore'

function generateCodeSuffix() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  return chars.charAt(Math.floor(Math.random() * chars.length)) +
    chars.charAt(Math.floor(Math.random() * chars.length))
}

export default function AdminCohorts() {
  const { currentUser } = useAuth()
  const [codes, setCodes] = useState([])
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [showForm, setShowForm] = useState(false)

  // Form state
  const [courseType, setCourseType] = useState('full')
  const [cohortLabel, setCohortLabel] = useState('')
  const [maxUses, setMaxUses] = useState(12)
  const [expiryDate, setExpiryDate] = useState('')
  const [formError, setFormError] = useState('')
  const [formSuccess, setFormSuccess] = useState('')

  useEffect(() => {
    loadCodes()
  }, [])

  async function loadCodes() {
    try {
      const data = await getEnrolmentCodes()
      setCodes(data)
    } catch (err) {
      console.error('Error loading codes:', err)
    }
    setLoading(false)
  }

  async function handleCreateCode(e) {
    e.preventDefault()
    setFormError('')
    setFormSuccess('')

    if (!cohortLabel.trim()) {
      setFormError('Please enter a cohort label.')
      return
    }

    if (!expiryDate) {
      setFormError('Please set an expiry date.')
      return
    }

    setCreating(true)

    try {
      const now = new Date()
      const prefix = courseType === 'full' ? 'DDRC-FULL' : 'DDRC-REF'
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const suffix = generateCodeSuffix()
      const code = `${prefix}-${year}-${month}-${suffix}`

      await createEnrolmentCode({
        code,
        courseType,
        createdBy: currentUser.uid,
        expiresAt: Timestamp.fromDate(new Date(expiryDate)),
        maxUses: Number(maxUses),
        cohortLabel: cohortLabel.trim(),
      })

      setFormSuccess(`Code created: ${code}`)
      setCohortLabel('')
      setMaxUses(12)
      setExpiryDate('')
      await loadCodes()
    } catch (err) {
      console.error('Error creating code:', err)
      setFormError('Failed to create code. Please try again.')
    } finally {
      setCreating(false)
    }
  }

  async function handleToggleActive(codeId, currentActive) {
    try {
      await toggleCodeActive(codeId, !currentActive)
      setCodes(codes.map((c) =>
        c.id === codeId ? { ...c, active: !currentActive } : c
      ))
    } catch (err) {
      console.error('Error toggling code:', err)
    }
  }

  function formatDate(timestamp) {
    if (!timestamp) return '—'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-navy"></div>
        </div>
      </Layout>
    )
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
        <div className="flex items-center justify-between">
          <h1 className="font-heading text-2xl font-bold text-navy">Cohort Management</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-secondary"
          >
            {showForm ? 'Cancel' : '+ New Code'}
          </button>
        </div>
      </div>

      {/* Create Form */}
      {showForm && (
        <div className="card mb-8">
          <h2 className="font-heading text-lg font-semibold text-navy mb-4">Create Enrolment Code</h2>

          {formError && (
            <div className="bg-error-red/10 border border-error-red/20 text-error-red rounded-lg px-4 py-3 mb-4 text-sm">
              {formError}
            </div>
          )}
          {formSuccess && (
            <div className="bg-success-green/10 border border-success-green/20 text-success-green rounded-lg px-4 py-3 mb-4 text-sm font-mono">
              {formSuccess}
            </div>
          )}

          <form onSubmit={handleCreateCode} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label">Course Type</label>
              <select
                value={courseType}
                onChange={(e) => setCourseType(e.target.value)}
                className="input-field"
              >
                <option value="full">Full DMT Course</option>
                <option value="refresher">DMT Refresher</option>
              </select>
            </div>

            <div>
              <label className="label">Cohort Label</label>
              <input
                type="text"
                value={cohortLabel}
                onChange={(e) => setCohortLabel(e.target.value)}
                className="input-field"
                placeholder="e.g. April 2026 Full Course"
                required
              />
            </div>

            <div>
              <label className="label">Max Uses</label>
              <input
                type="number"
                value={maxUses}
                onChange={(e) => setMaxUses(e.target.value)}
                className="input-field"
                min="1"
                max="100"
                required
              />
            </div>

            <div>
              <label className="label">Expiry Date</label>
              <input
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="input-field"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <button type="submit" disabled={creating} className="btn-primary">
                {creating ? 'Generating...' : 'Generate Enrolment Code'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Codes Table */}
      <div className="card overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left font-medium text-text-muted px-6 py-3">Code</th>
                <th className="text-left font-medium text-text-muted px-6 py-3">Course</th>
                <th className="text-left font-medium text-text-muted px-6 py-3">Cohort</th>
                <th className="text-left font-medium text-text-muted px-6 py-3">Uses</th>
                <th className="text-left font-medium text-text-muted px-6 py-3">Expires</th>
                <th className="text-left font-medium text-text-muted px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {codes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center text-text-muted py-8 px-6">
                    No enrolment codes yet. Create one to get started.
                  </td>
                </tr>
              ) : (
                codes.map((code) => (
                  <tr key={code.id} className="hover:bg-gray-50/50">
                    <td className="px-6 py-3 font-mono text-navy font-medium">{code.code}</td>
                    <td className="px-6 py-3">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                        code.courseType === 'full' ? 'bg-navy/10 text-navy' : 'bg-teal/10 text-teal'
                      }`}>
                        {code.courseType === 'full' ? 'Full' : 'Refresher'}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-text-primary">{code.cohortLabel}</td>
                    <td className="px-6 py-3 text-text-muted">
                      {code.currentUses}/{code.maxUses}
                    </td>
                    <td className="px-6 py-3 text-text-muted">{formatDate(code.expiresAt)}</td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() => handleToggleActive(code.id, code.active)}
                        className={`text-xs font-medium px-3 py-1 rounded-full transition-colors ${
                          code.active
                            ? 'bg-success-green/10 text-success-green hover:bg-success-green/20'
                            : 'bg-gray-100 text-text-muted hover:bg-gray-200'
                        }`}
                      >
                        {code.active ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
