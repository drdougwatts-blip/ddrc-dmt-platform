import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getModulesByDay, getModulesForCourse } from '../modules/moduleData'
import {
  getModuleProgress,
  getSessionsForCohort,
  getAttendanceForCandidate,
} from '../firebase/firestore'
import Layout from '../components/Layout'
import ModuleCard from '../components/ModuleCard'
import ProgressBar from '../components/ProgressBar'

const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

export default function Dashboard() {
  const { currentUser, userProfile } = useAuth()
  const [progress, setProgress] = useState({})
  const [sessions, setSessions] = useState([])
  const [attendedSessionIds, setAttendedSessionIds] = useState(new Set())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      if (currentUser) {
        try {
          const p = await getModuleProgress(currentUser.uid)
          setProgress(p)

          // Load sessions for the candidate's cohort
          if (userProfile?.cohortId) {
            const sess = await getSessionsForCohort(userProfile.cohortId)
            setSessions(sess)

            // Load attendance records for this candidate
            const attendance = await getAttendanceForCandidate(currentUser.uid)
            setAttendedSessionIds(new Set(attendance.map((a) => a.sessionId)))
          }
        } catch (err) {
          console.error('Error loading data:', err)
        }
      }
      setLoading(false)
    }
    loadData()
  }, [currentUser, userProfile])

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-navy"></div>
        </div>
      </Layout>
    )
  }

  const courseType = userProfile?.courseType || 'full'
  const modulesByDay = getModulesByDay(courseType)
  const allModules = getModulesForCourse(courseType)
  const completedCount = allModules.filter((m) => progress[m.id]?.status === 'complete').length
  const courseLabel = courseType === 'full' ? 'Full DMT Course' : 'DMT Refresher'

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h1 className="font-heading text-2xl font-bold text-navy">
              Welcome back, {userProfile?.name?.split(' ')[0]}
            </h1>
            <span className={`inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full ${
              courseType === 'full'
                ? 'bg-navy/10 text-navy'
                : 'bg-teal/10 text-teal'
            }`}>
              {courseLabel}
            </span>
          </div>
        </div>

        <div className="card">
          <h2 className="font-heading text-sm font-semibold text-text-muted uppercase tracking-wide mb-3">
            Overall Progress
          </h2>
          <ProgressBar completed={completedCount} total={allModules.length} size="lg" />
        </div>
      </div>

      {/* Module List by Day */}
      <div className="space-y-8">
        {dayOrder.map((day) => {
          const dayModules = modulesByDay[day]
          if (!dayModules || dayModules.length === 0) return null

          return (
            <section key={day}>
              <h2 className="font-heading text-lg font-semibold text-navy mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-navy/10 text-navy flex items-center justify-center text-sm font-bold">
                  {day.charAt(0)}
                </span>
                {day} — Online Sessions
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {dayModules.map((mod) => (
                  <ModuleCard
                    key={mod.id}
                    module={mod}
                    progress={progress[mod.id]}
                  />
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {/* Upcoming Sessions */}
      {sessions.length > 0 && (
        <div className="mt-10">
          <h2 className="font-heading text-lg font-semibold text-navy mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Your Sessions
          </h2>
          <div className="space-y-3">
            {sessions.map((session) => {
              const sessionDate = session.date?.toDate ? session.date.toDate() : new Date(session.date)
              const isPast = sessionDate < new Date()
              const attended = attendedSessionIds.has(session.id)

              return (
                <div
                  key={session.id}
                  className={`card flex flex-col sm:flex-row sm:items-center gap-4 ${isPast ? 'opacity-70' : ''}`}
                >
                  {/* Date block */}
                  <div className="flex-shrink-0 w-14 text-center">
                    <div className="text-xs text-text-muted uppercase">
                      {sessionDate.toLocaleDateString('en-GB', { weekday: 'short' })}
                    </div>
                    <div className="text-2xl font-bold text-navy">
                      {sessionDate.getDate()}
                    </div>
                    <div className="text-xs text-text-muted">
                      {sessionDate.toLocaleDateString('en-GB', { month: 'short' })}
                    </div>
                  </div>

                  {/* Session info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-sm font-semibold text-navy truncate">
                      {session.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-1 text-xs text-text-muted">
                      <span>
                        {sessionDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      <span>{session.duration}</span>
                      <span className={`font-medium px-1.5 py-0.5 rounded ${
                        session.type === 'online' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'
                      }`}>
                        {session.type === 'online' ? 'Online' : 'In-Person'}
                      </span>
                      {session.instructor && (
                        <span className="px-1.5 py-0.5 rounded bg-gray-100">
                          {session.instructor === 'DMP' ? 'Diving Medical Physician' :
                           session.instructor === 'SI' ? 'Senior Instructor' :
                           session.instructor}
                        </span>
                      )}
                    </div>
                    {session.location && (
                      <p className="text-xs text-text-muted mt-1">{session.location}</p>
                    )}
                  </div>

                  {/* Right side: Join link or attendance status */}
                  <div className="flex-shrink-0 flex items-center gap-3">
                    {isPast ? (
                      <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                        attended
                          ? 'bg-success-green/10 text-success-green'
                          : 'bg-gray-100 text-text-muted'
                      }`}>
                        {attended ? 'Attended' : 'Not recorded'}
                      </span>
                    ) : session.meetingLink ? (
                      <a
                        href={session.meetingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-teal hover:bg-teal/90 px-4 py-2 rounded-lg transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Join
                      </a>
                    ) : (
                      <span className="text-xs text-text-muted">Link TBC</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Course complete banner */}
      {completedCount === allModules.length && allModules.length > 0 && (
        <div className="mt-10 card bg-success-green/5 border border-success-green/20">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-success-green/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-success-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-lg font-bold text-navy">Course Complete!</h3>
              <p className="text-sm text-text-muted">
                Congratulations — you have completed all modules. Your certificate is ready to download.
              </p>
            </div>
            <Link
              to="/certificate"
              className="btn-primary inline-flex items-center gap-1.5 text-sm flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Certificate
            </Link>
          </div>
        </div>
      )}

      {/* Resources */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <h3 className="font-heading text-sm font-semibold text-navy mb-2">Reference Library</h3>
          <p className="text-sm text-text-muted mb-3">
            Quick-reference cards for ABCDE, DCI, drug doses, and more.
          </p>
          <Link to="/reference-library" className="text-sm text-teal font-medium hover:underline">
            Open references &rarr;
          </Link>
        </div>
        <div className="card">
          <h3 className="font-heading text-sm font-semibold text-navy mb-2">File Library</h3>
          <p className="text-sm text-text-muted mb-3">
            Download guidance notes, forms, and course materials.
          </p>
          <Link to="/file-library" className="text-sm text-teal font-medium hover:underline">
            Browse files &rarr;
          </Link>
        </div>
        <div className="card">
          <h3 className="font-heading text-sm font-semibold text-navy mb-2">Certificate</h3>
          <p className="text-sm text-text-muted mb-3">
            {completedCount === allModules.length && allModules.length > 0
              ? 'Your certificate is ready to download.'
              : `Complete all ${allModules.length} modules to unlock your certificate.`}
          </p>
          <Link to="/certificate" className="text-sm text-teal font-medium hover:underline">
            View certificate &rarr;
          </Link>
        </div>
      </div>
    </Layout>
  )
}
