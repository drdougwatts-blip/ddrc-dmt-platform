import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { useAuth } from '../context/AuthContext'
import { Timestamp } from 'firebase/firestore'
import {
  getEnrolmentCodes,
  getSessionsForCohort,
  createSession,
  deleteSession,
  getCandidatesForCohort,
  getAttendanceForSession,
  setAttendance,
} from '../firebase/firestore'
import { getModulesForCourse, getModuleById } from '../modules/moduleData'

export default function AdminSessions() {
  const { currentUser } = useAuth()
  const [cohorts, setCohorts] = useState([])
  const [selectedCohort, setSelectedCohort] = useState(null)
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)
  const [sessionsLoading, setSessionsLoading] = useState(false)

  // Create session form
  const [showForm, setShowForm] = useState(false)
  const [formModuleId, setFormModuleId] = useState('')
  const [formDate, setFormDate] = useState('')
  const [formTime, setFormTime] = useState('09:00')
  const [formType, setFormType] = useState('online')
  const [formMeetingLink, setFormMeetingLink] = useState('')
  const [formLocation, setFormLocation] = useState('DDRC Plymouth')
  const [formError, setFormError] = useState('')
  const [creating, setCreating] = useState(false)

  // Attendance
  const [attendanceSession, setAttendanceSession] = useState(null)
  const [candidates, setCandidates] = useState([])
  const [attendanceMap, setAttendanceMap] = useState({})
  const [attendanceLoading, setAttendanceLoading] = useState(false)
  const [savingAttendance, setSavingAttendance] = useState({})

  useEffect(() => {
    loadCohorts()
  }, [])

  async function loadCohorts() {
    try {
      const codes = await getEnrolmentCodes()
      const activeCohorts = codes.filter((c) => c.active)
      setCohorts(activeCohorts)
      if (activeCohorts.length > 0 && !selectedCohort) {
        await selectCohort(activeCohorts[0])
      }
    } catch (err) {
      console.error('Error loading cohorts:', err)
    }
    setLoading(false)
  }

  async function selectCohort(cohort) {
    setSelectedCohort(cohort)
    setAttendanceSession(null)
    setSessionsLoading(true)
    try {
      const sess = await getSessionsForCohort(cohort.id)
      setSessions(sess)
    } catch (err) {
      console.error('Error loading sessions:', err)
    }
    setSessionsLoading(false)
  }

  async function handleCreateSession(e) {
    e.preventDefault()
    setFormError('')

    if (!formModuleId) {
      setFormError('Please select a module.')
      return
    }
    if (!formDate) {
      setFormError('Please set a date.')
      return
    }

    setCreating(true)
    try {
      const mod = getModuleById(formModuleId)
      const dateTime = new Date(`${formDate}T${formTime}`)

      await createSession({
        cohortId: selectedCohort.id,
        moduleId: formModuleId,
        title: `${mod.code} ${mod.title}`,
        date: Timestamp.fromDate(dateTime),
        duration: mod.duration,
        type: formType,
        meetingLink: formType === 'online' ? formMeetingLink : '',
        location: formType === 'in_person' ? formLocation : '',
        instructor: mod.instructor,
        dayLabel: mod.day,
      })

      // Reload sessions
      const sess = await getSessionsForCohort(selectedCohort.id)
      setSessions(sess)

      // Reset form
      setFormModuleId('')
      setFormDate('')
      setFormTime('09:00')
      setFormMeetingLink('')
      setShowForm(false)
    } catch (err) {
      console.error('Error creating session:', err)
      setFormError('Failed to create session.')
    }
    setCreating(false)
  }

  async function handleDeleteSession(sessionId) {
    try {
      await deleteSession(sessionId)
      setSessions(sessions.filter((s) => s.id !== sessionId))
    } catch (err) {
      console.error('Error deleting session:', err)
    }
  }

  async function openAttendance(session) {
    setAttendanceSession(session)
    setAttendanceLoading(true)
    try {
      const [cands, records] = await Promise.all([
        getCandidatesForCohort(selectedCohort.id),
        getAttendanceForSession(session.id),
      ])
      setCandidates(cands)

      const map = {}
      records.forEach((r) => {
        map[r.candidateUid] = r.attended
      })
      setAttendanceMap(map)
    } catch (err) {
      console.error('Error loading attendance:', err)
    }
    setAttendanceLoading(false)
  }

  async function toggleAttendance(candidateUid, candidateName) {
    const newValue = !attendanceMap[candidateUid]
    setSavingAttendance((prev) => ({ ...prev, [candidateUid]: true }))
    try {
      await setAttendance(
        attendanceSession.id,
        selectedCohort.id,
        candidateUid,
        candidateName,
        newValue,
        currentUser.uid
      )
      setAttendanceMap((prev) => ({ ...prev, [candidateUid]: newValue }))
    } catch (err) {
      console.error('Error saving attendance:', err)
    }
    setSavingAttendance((prev) => ({ ...prev, [candidateUid]: false }))
  }

  function formatDate(timestamp) {
    if (!timestamp) return '—'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  function formatTime(timestamp) {
    if (!timestamp) return ''
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  }

  function isUpcoming(timestamp) {
    if (!timestamp) return false
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date > new Date()
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

  const courseModules = selectedCohort
    ? getModulesForCourse(selectedCohort.courseType)
    : []

  // Modules not yet scheduled
  const scheduledModuleIds = new Set(sessions.map((s) => s.moduleId))
  const unscheduledModules = courseModules.filter((m) => !scheduledModuleIds.has(m.id))

  // Attendance view
  if (attendanceSession) {
    const attendedCount = Object.values(attendanceMap).filter(Boolean).length
    return (
      <Layout>
        <button
          onClick={() => setAttendanceSession(null)}
          className="inline-flex items-center text-sm text-teal hover:underline mb-6"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Sessions
        </button>

        <div className="card mb-6">
          <h1 className="font-heading text-xl font-bold text-navy mb-1">
            Attendance Register
          </h1>
          <p className="text-text-muted text-sm mb-2">{attendanceSession.title}</p>
          <div className="flex flex-wrap gap-3 text-xs text-text-muted">
            <span>{formatDate(attendanceSession.date)} at {formatTime(attendanceSession.date)}</span>
            <span className={`font-medium px-2 py-0.5 rounded ${
              attendanceSession.type === 'online' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'
            }`}>
              {attendanceSession.type === 'online' ? 'Online' : 'In-Person'}
            </span>
            <span>{attendedCount} / {candidates.length} attended</span>
          </div>
        </div>

        {attendanceLoading ? (
          <div className="flex items-center justify-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy"></div>
          </div>
        ) : candidates.length === 0 ? (
          <div className="card text-center text-text-muted py-8">
            No candidates enrolled in this cohort yet.
          </div>
        ) : (
          <div className="card overflow-hidden p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left font-medium text-text-muted px-6 py-3">Candidate</th>
                  <th className="text-left font-medium text-text-muted px-6 py-3">Email</th>
                  <th className="text-center font-medium text-text-muted px-6 py-3">Attended</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {candidates.map((c) => (
                  <tr key={c.uid} className="hover:bg-gray-50/50">
                    <td className="px-6 py-3 font-medium text-navy">{c.name}</td>
                    <td className="px-6 py-3 text-text-muted">{c.email}</td>
                    <td className="px-6 py-3 text-center">
                      <button
                        onClick={() => toggleAttendance(c.uid, c.name)}
                        disabled={savingAttendance[c.uid]}
                        className={`w-8 h-8 rounded-lg border-2 transition-all duration-150 flex items-center justify-center mx-auto ${
                          attendanceMap[c.uid]
                            ? 'bg-success-green border-success-green text-white'
                            : 'border-gray-300 hover:border-navy text-transparent'
                        } ${savingAttendance[c.uid] ? 'opacity-50' : ''}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
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
        <h1 className="font-heading text-2xl font-bold text-navy">Session Schedule & Attendance</h1>
        <p className="text-text-muted text-sm mt-1">Schedule sessions with Zoom links and track attendance</p>
      </div>

      {/* Cohort Selector */}
      {cohorts.length === 0 ? (
        <div className="card text-center text-text-muted py-8">
          No active cohorts. <Link to="/admin/cohorts" className="text-teal hover:underline">Create one first.</Link>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 mb-6">
            {cohorts.map((cohort) => (
              <button
                key={cohort.id}
                onClick={() => selectCohort(cohort)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCohort?.id === cohort.id
                    ? 'bg-navy text-white'
                    : 'bg-white text-text-muted hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {cohort.cohortLabel}
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded ${
                  selectedCohort?.id === cohort.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {cohort.courseType === 'full' ? 'Full' : 'Ref'}
                </span>
              </button>
            ))}
          </div>

          {/* Add Session Button */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-lg font-semibold text-navy">
              {selectedCohort?.cohortLabel} — Sessions
            </h2>
            <button onClick={() => setShowForm(!showForm)} className="btn-secondary text-sm">
              {showForm ? 'Cancel' : '+ Add Session'}
            </button>
          </div>

          {/* Create Session Form */}
          {showForm && (
            <div className="card mb-6">
              <h3 className="font-heading text-sm font-semibold text-navy mb-4">Schedule a Session</h3>

              {formError && (
                <div className="bg-error-red/10 border border-error-red/20 text-error-red rounded-lg px-4 py-3 mb-4 text-sm">
                  {formError}
                </div>
              )}

              <form onSubmit={handleCreateSession} className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="label">Module</label>
                  <select
                    value={formModuleId}
                    onChange={(e) => setFormModuleId(e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select a module...</option>
                    {unscheduledModules.length > 0 && (
                      <optgroup label="Not yet scheduled">
                        {unscheduledModules.map((m) => (
                          <option key={m.id} value={m.id}>
                            {m.code} — {m.title} ({m.duration}, {m.day})
                          </option>
                        ))}
                      </optgroup>
                    )}
                    <optgroup label="All modules">
                      {courseModules.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.code} — {m.title} ({m.duration}, {m.day})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="label">Date</label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="label">Start Time</label>
                  <input
                    type="time"
                    value={formTime}
                    onChange={(e) => setFormTime(e.target.value)}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="label">Session Type</label>
                  <select
                    value={formType}
                    onChange={(e) => setFormType(e.target.value)}
                    className="input-field"
                  >
                    <option value="online">Online (Zoom/Teams)</option>
                    <option value="in_person">In-Person at DDRC</option>
                  </select>
                </div>

                {formType === 'online' ? (
                  <div>
                    <label className="label">Meeting Link</label>
                    <input
                      type="url"
                      value={formMeetingLink}
                      onChange={(e) => setFormMeetingLink(e.target.value)}
                      className="input-field"
                      placeholder="https://zoom.us/j/..."
                    />
                  </div>
                ) : (
                  <div>
                    <label className="label">Location</label>
                    <input
                      type="text"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      className="input-field"
                      placeholder="DDRC Plymouth"
                    />
                  </div>
                )}

                <div className="sm:col-span-2">
                  <button type="submit" disabled={creating} className="btn-primary">
                    {creating ? 'Scheduling...' : 'Schedule Session'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Sessions List */}
          {sessionsLoading ? (
            <div className="flex items-center justify-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy"></div>
            </div>
          ) : sessions.length === 0 ? (
            <div className="card text-center text-text-muted py-8">
              No sessions scheduled yet. Click "+ Add Session" to get started.
            </div>
          ) : (
            <div className="space-y-3">
              {sessions.map((session) => {
                const upcoming = isUpcoming(session.date)
                return (
                  <div
                    key={session.id}
                    className={`card flex flex-col sm:flex-row sm:items-center gap-4 ${
                      !upcoming ? 'opacity-75' : ''
                    }`}
                  >
                    {/* Date block */}
                    <div className="flex-shrink-0 w-16 text-center">
                      <div className="text-xs text-text-muted uppercase">
                        {session.date?.toDate
                          ? session.date.toDate().toLocaleDateString('en-GB', { weekday: 'short' })
                          : '—'}
                      </div>
                      <div className="text-2xl font-bold text-navy">
                        {session.date?.toDate
                          ? session.date.toDate().getDate()
                          : '—'}
                      </div>
                      <div className="text-xs text-text-muted">
                        {session.date?.toDate
                          ? session.date.toDate().toLocaleDateString('en-GB', { month: 'short' })
                          : ''}
                      </div>
                    </div>

                    {/* Session info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-sm font-semibold text-navy truncate">
                        {session.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1 text-xs text-text-muted">
                        <span>{formatTime(session.date)}</span>
                        <span>{session.duration}</span>
                        <span className={`font-medium px-1.5 py-0.5 rounded ${
                          session.type === 'online' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'
                        }`}>
                          {session.type === 'online' ? 'Online' : 'In-Person'}
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-gray-100">
                          {session.instructor}
                        </span>
                      </div>
                      {session.meetingLink && (
                        <a
                          href={session.meetingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-teal hover:underline mt-1"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Join meeting
                        </a>
                      )}
                      {session.location && (
                        <p className="text-xs text-text-muted mt-1">{session.location}</p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => openAttendance(session)}
                        className="btn-outline text-xs px-3 py-1.5"
                      >
                        Attendance
                      </button>
                      <button
                        onClick={() => handleDeleteSession(session.id)}
                        className="text-xs text-text-muted hover:text-error-red px-2 py-1.5 transition-colors"
                        title="Delete session"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </>
      )}
    </Layout>
  )
}
