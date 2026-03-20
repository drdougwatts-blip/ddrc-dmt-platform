import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import ProgressBar from '../components/ProgressBar'
import { useAuth } from '../context/AuthContext'
import {
  getAllCandidates,
  getModuleProgress,
  signOffModule,
  revokeSignOff,
  saveCertificateRecord,
  logNotification,
} from '../firebase/firestore'
import { getModulesForCourse } from '../modules/moduleData'
import { downloadCertificate, generateCertificateNumber } from '../utils/certificateGenerator'
import {
  sendModuleCompleteEmail,
  sendCourseCompleteEmail,
  sendAdminNotification,
  emailIsConfigured,
} from '../utils/emailService'

export default function AdminCandidates() {
  const { currentUser } = useAuth()
  const [candidates, setCandidates] = useState([])
  const [candidateProgress, setCandidateProgress] = useState({})
  const [loading, setLoading] = useState(true)
  const [filterCourse, setFilterCourse] = useState('all')
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [selectedProgress, setSelectedProgress] = useState([])
  const [signingOff, setSigningOff] = useState({})

  useEffect(() => {
    loadCandidates()
  }, [])

  async function loadCandidates() {
    try {
      const data = await getAllCandidates()
      setCandidates(data)

      const progressMap = {}
      for (const candidate of data) {
        const progress = await getModuleProgress(candidate.uid)
        const courseModules = getModulesForCourse(candidate.courseType)
        const completed = courseModules.filter((m) => progress[m.id]?.status === 'complete').length
        progressMap[candidate.uid] = { progress, completed, total: courseModules.length }
      }
      setCandidateProgress(progressMap)
    } catch (err) {
      console.error('Error loading candidates:', err)
    }
    setLoading(false)
  }

  async function handleSelectCandidate(candidate) {
    setSelectedCandidate(candidate)
    const progress = await getModuleProgress(candidate.uid)
    const courseModules = getModulesForCourse(candidate.courseType)
    const detailed = courseModules.map((mod) => ({
      ...mod,
      progress: progress[mod.id] || {
        status: 'not_started',
        quizScore: null,
        quizAttempts: 0,
        signedOff: false,
      },
    }))
    setSelectedProgress(detailed)
  }

  async function handleToggleSignOff(candidateUid, moduleId, currentlySignedOff, sharedWith) {
    setSigningOff((prev) => ({ ...prev, [moduleId]: true }))
    try {
      if (currentlySignedOff) {
        await revokeSignOff(candidateUid, moduleId)
        if (sharedWith) await revokeSignOff(candidateUid, sharedWith)
      } else {
        await signOffModule(candidateUid, moduleId, currentUser.uid)
        if (sharedWith) await signOffModule(candidateUid, sharedWith, currentUser.uid)
      }
      // Reload progress
      const progress = await getModuleProgress(candidateUid)
      const courseModules = getModulesForCourse(selectedCandidate.courseType)
      const detailed = courseModules.map((mod) => ({
        ...mod,
        progress: progress[mod.id] || {
          status: 'not_started',
          quizScore: null,
          quizAttempts: 0,
          signedOff: false,
        },
      }))
      setSelectedProgress(detailed)

      // Update summary progress
      const completed = courseModules.filter((m) => progress[m.id]?.status === 'complete').length
      setCandidateProgress((prev) => ({
        ...prev,
        [candidateUid]: { progress, completed, total: courseModules.length },
      }))

      // --- Email notifications on sign-off ---
      if (!currentlySignedOff) {
        const signedOffModule = courseModules.find((m) => m.id === moduleId)

        // Log and send module sign-off notification
        const moduleEmailResult = await sendModuleCompleteEmail({
          candidateName: selectedCandidate.name,
          candidateEmail: selectedCandidate.email,
          moduleCode: signedOffModule?.code || moduleId,
          moduleTitle: signedOffModule?.title || moduleId,
          completedCount: completed,
          totalModules: courseModules.length,
        })

        await logNotification({
          type: 'module_complete',
          candidateName: selectedCandidate.name,
          candidateUid,
          details: `${signedOffModule?.code} ${signedOffModule?.title} signed off (${completed}/${courseModules.length})`,
          emailSent: moduleEmailResult.sent,
        })

        // Check if course is now complete
        if (completed === courseModules.length) {
          const completionDate = new Date()
          const certNumber = generateCertificateNumber(
            candidateUid,
            selectedCandidate.courseType,
            completionDate
          )

          // Save certificate record
          await saveCertificateRecord(candidateUid, {
            certificateNumber: certNumber,
            candidateName: selectedCandidate.name,
            courseType: selectedCandidate.courseType,
            cohortName: selectedCandidate.cohortName || '',
            completionDate: completionDate.toISOString(),
          })

          // Send course completion email to candidate
          const dateStr = completionDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
          const courseEmailResult = await sendCourseCompleteEmail({
            candidateName: selectedCandidate.name,
            candidateEmail: selectedCandidate.email,
            courseType: selectedCandidate.courseType,
            certificateNumber: certNumber,
            completionDate: dateStr,
          })

          await logNotification({
            type: 'course_complete',
            candidateName: selectedCandidate.name,
            candidateUid,
            details: `Course complete! Certificate: ${certNumber}`,
            emailSent: courseEmailResult.sent,
          })

          // Notify admin
          if (currentUser.email) {
            await sendAdminNotification({
              adminEmail: currentUser.email,
              candidateName: selectedCandidate.name,
              courseType: selectedCandidate.courseType,
              completionDate: dateStr,
            })
          }

          await logNotification({
            type: 'certificate_issued',
            candidateName: selectedCandidate.name,
            candidateUid,
            details: `Certificate ${certNumber} issued`,
            emailSent: false,
          })
        }
      }
    } catch (err) {
      console.error('Error toggling sign-off:', err)
    }
    setSigningOff((prev) => ({ ...prev, [moduleId]: false }))
  }

  function formatDate(timestamp) {
    if (!timestamp) return '—'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  function formatDateTime(timestamp) {
    if (!timestamp) return '—'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
    })
  }

  function exportCSV() {
    if (!selectedCandidate) return
    const headers = ['Module Code', 'Module Title', 'Status', 'Signed Off', 'Quiz Score', 'Quiz Attempts', 'Started', 'Completed']
    const rows = selectedProgress.map((m) => [
      m.code,
      m.title,
      m.progress.status,
      m.progress.signedOff ? 'Yes' : 'No',
      m.progress.quizScore ?? '',
      m.progress.quizAttempts,
      m.progress.startedAt ? formatDateTime(m.progress.startedAt) : '',
      m.progress.completedAt ? formatDateTime(m.progress.completedAt) : '',
    ])

    const csv = [headers, ...rows].map((row) => row.map((v) => `"${v}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${selectedCandidate.name.replace(/\s+/g, '_')}_progress.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const filteredCandidates = filterCourse === 'all'
    ? candidates
    : candidates.filter((c) => c.courseType === filterCourse)

  const statusLabel = {
    not_started: 'Not Started',
    in_progress: 'In Progress',
    complete: 'Complete',
  }

  const statusColor = {
    not_started: 'text-text-muted',
    in_progress: 'text-blue-600',
    complete: 'text-success-green',
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

  // Detail view
  if (selectedCandidate) {
    const cp = candidateProgress[selectedCandidate.uid]
    const signedOffCount = selectedProgress.filter((m) => m.progress.signedOff).length

    return (
      <Layout>
        <button
          onClick={() => setSelectedCandidate(null)}
          className="inline-flex items-center text-sm text-teal hover:underline mb-6"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Candidates
        </button>

        <div className="card mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-heading text-2xl font-bold text-navy">{selectedCandidate.name}</h1>
              <p className="text-text-muted">{selectedCandidate.email}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                  selectedCandidate.courseType === 'full' ? 'bg-navy/10 text-navy' : 'bg-teal/10 text-teal'
                }`}>
                  {selectedCandidate.courseType === 'full' ? 'Full Course' : 'Refresher'}
                </span>
                <span className="text-xs text-text-muted">
                  Enrolled: {formatDate(selectedCandidate.enrolledAt)}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {cp && cp.completed === cp.total && cp.total > 0 && (
                <button
                  onClick={() => {
                    const completionDate = new Date()
                    const certNumber = generateCertificateNumber(
                      selectedCandidate.uid,
                      selectedCandidate.courseType,
                      completionDate
                    )
                    downloadCertificate({
                      candidateName: selectedCandidate.name,
                      courseType: selectedCandidate.courseType,
                      completionDate,
                      certificateNumber: certNumber,
                      cohortName: selectedCandidate.cohortName || '',
                    })
                  }}
                  className="btn-primary text-sm inline-flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Certificate
                </button>
              )}
              <button onClick={exportCSV} className="btn-outline text-sm">
                Export CSV
              </button>
            </div>
          </div>
          {cp && (
            <div className="mt-4">
              <ProgressBar completed={cp.completed} total={cp.total} />
              <p className="text-xs text-text-muted mt-2">
                {signedOffCount} of {selectedProgress.length} modules signed off by instructor
              </p>
            </div>
          )}
        </div>

        <div className="card overflow-hidden p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left font-medium text-text-muted px-6 py-3">Module</th>
                <th className="text-left font-medium text-text-muted px-6 py-3">Status</th>
                <th className="text-left font-medium text-text-muted px-6 py-3">Quiz</th>
                <th className="text-center font-medium text-text-muted px-6 py-3">Sign Off</th>
                <th className="text-left font-medium text-text-muted px-6 py-3 hidden md:table-cell">Completed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {selectedProgress.map((m) => {
                const isSignedOff = m.progress.signedOff
                const isSaving = signingOff[m.id]

                return (
                  <tr key={m.id} className={isSignedOff ? 'bg-success-green/5' : ''}>
                    <td className="px-6 py-3">
                      <span className="font-mono text-xs text-teal mr-2">{m.code}</span>
                      <span className="text-text-primary">{m.title}</span>
                      {m.shared && (
                        <span className="ml-2 text-xs text-warning-amber">(shared)</span>
                      )}
                    </td>
                    <td className={`px-6 py-3 font-medium ${statusColor[m.progress.status]}`}>
                      {statusLabel[m.progress.status]}
                    </td>
                    <td className="px-6 py-3 text-text-muted">
                      {m.progress.quizScore !== null ? (
                        <span className={m.progress.quizScore >= 70 ? 'text-success-green font-medium' : ''}>
                          {m.progress.quizScore}%
                        </span>
                      ) : '—'}
                      {m.progress.quizAttempts > 0 && (
                        <span className="text-xs ml-1">({m.progress.quizAttempts}x)</span>
                      )}
                    </td>
                    <td className="px-6 py-3 text-center">
                      <button
                        onClick={() => handleToggleSignOff(
                          selectedCandidate.uid,
                          m.id,
                          isSignedOff,
                          m.sharedWith
                        )}
                        disabled={isSaving}
                        className={`w-8 h-8 rounded-lg border-2 transition-all duration-150 flex items-center justify-center mx-auto ${
                          isSignedOff
                            ? 'bg-success-green border-success-green text-white'
                            : 'border-gray-300 hover:border-navy text-transparent hover:text-gray-300'
                        } ${isSaving ? 'opacity-50' : ''}`}
                        title={isSignedOff ? 'Revoke sign-off' : 'Sign off module'}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                    </td>
                    <td className="px-6 py-3 text-text-muted hidden md:table-cell">
                      {formatDateTime(m.progress.completedAt)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    )
  }

  // List view
  return (
    <Layout>
      <div className="mb-6">
        <Link to="/admin" className="inline-flex items-center text-sm text-teal hover:underline mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Admin
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="font-heading text-2xl font-bold text-navy">Candidate Progress</h1>
          <select
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
            className="input-field w-auto"
          >
            <option value="all">All Courses</option>
            <option value="full">Full Course</option>
            <option value="refresher">Refresher</option>
          </select>
        </div>
      </div>

      <div className="card overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left font-medium text-text-muted px-6 py-3">Name</th>
                <th className="text-left font-medium text-text-muted px-6 py-3 hidden sm:table-cell">Email</th>
                <th className="text-left font-medium text-text-muted px-6 py-3">Course</th>
                <th className="text-left font-medium text-text-muted px-6 py-3 hidden md:table-cell">Enrolled</th>
                <th className="text-left font-medium text-text-muted px-6 py-3">Progress</th>
                <th className="text-left font-medium text-text-muted px-6 py-3 hidden lg:table-cell">Last Active</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredCandidates.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center text-text-muted py-8 px-6">
                    No candidates found.
                  </td>
                </tr>
              ) : (
                filteredCandidates.map((candidate) => {
                  const cp = candidateProgress[candidate.uid]
                  return (
                    <tr
                      key={candidate.uid}
                      onClick={() => handleSelectCandidate(candidate)}
                      className="hover:bg-gray-50/50 cursor-pointer"
                    >
                      <td className="px-6 py-3 font-medium text-navy">{candidate.name}</td>
                      <td className="px-6 py-3 text-text-muted hidden sm:table-cell">{candidate.email}</td>
                      <td className="px-6 py-3">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                          candidate.courseType === 'full' ? 'bg-navy/10 text-navy' : 'bg-teal/10 text-teal'
                        }`}>
                          {candidate.courseType === 'full' ? 'Full' : 'Refresher'}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-text-muted hidden md:table-cell">
                        {formatDate(candidate.enrolledAt)}
                      </td>
                      <td className="px-6 py-3">
                        {cp ? (
                          <div className="w-32">
                            <ProgressBar completed={cp.completed} total={cp.total} size="sm" showLabel={false} />
                            <span className="text-xs text-text-muted">{cp.completed}/{cp.total}</span>
                          </div>
                        ) : '—'}
                      </td>
                      <td className="px-6 py-3 text-text-muted hidden lg:table-cell">
                        {formatDate(candidate.lastActive)}
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
