import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { getModulesByDay, getModulesForCourse } from '../modules/moduleData'
import { getModuleProgress } from '../firebase/firestore'
import Layout from '../components/Layout'
import ModuleCard from '../components/ModuleCard'
import ProgressBar from '../components/ProgressBar'

const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

export default function Dashboard() {
  const { currentUser, userProfile } = useAuth()
  const [progress, setProgress] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProgress() {
      if (currentUser) {
        try {
          const p = await getModuleProgress(currentUser.uid)
          setProgress(p)
        } catch (err) {
          console.error('Error loading progress:', err)
        }
      }
      setLoading(false)
    }
    loadProgress()
  }, [currentUser])

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

      {/* Sidebar-style info */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <h3 className="font-heading text-sm font-semibold text-navy mb-2">Reference Library</h3>
          <p className="text-sm text-text-muted mb-3">
            Access quick-reference cards and clinical guidelines.
          </p>
          <a href="/reference-library" className="text-sm text-teal font-medium hover:underline">
            Open library &rarr;
          </a>
        </div>
        <div className="card">
          <h3 className="font-heading text-sm font-semibold text-navy mb-2">Pre-session Briefs</h3>
          <p className="text-sm text-text-muted mb-3">
            Preparatory reading for upcoming in-person sessions.
          </p>
          <span className="text-sm text-text-muted">Coming soon</span>
        </div>
        <div className="card">
          <h3 className="font-heading text-sm font-semibold text-navy mb-2">Upcoming Sessions</h3>
          <p className="text-sm text-text-muted mb-3">
            Your next in-person session dates and location details.
          </p>
          <span className="text-sm text-text-muted">Dates to be confirmed</span>
        </div>
      </div>
    </Layout>
  )
}
