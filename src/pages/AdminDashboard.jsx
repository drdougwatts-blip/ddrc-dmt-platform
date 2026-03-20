import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { getAllCandidates, getEnrolmentCodes, getModuleProgress } from '../firebase/firestore'
import { getModulesForCourse } from '../modules/moduleData'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalCandidates: 0,
    fullCandidates: 0,
    refresherCandidates: 0,
    activeCodes: 0,
    avgProgress: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStats() {
      try {
        const [candidates, codes] = await Promise.all([
          getAllCandidates(),
          getEnrolmentCodes(),
        ])

        const activeCodes = codes.filter((c) => c.active).length
        const fullCandidates = candidates.filter((c) => c.courseType === 'full').length
        const refresherCandidates = candidates.filter((c) => c.courseType === 'refresher').length

        // Calculate average progress
        let totalProgress = 0
        let candidateCount = 0

        for (const candidate of candidates) {
          const progress = await getModuleProgress(candidate.uid)
          const courseModules = getModulesForCourse(candidate.courseType)
          const completed = courseModules.filter((m) => progress[m.id]?.status === 'complete').length
          if (courseModules.length > 0) {
            totalProgress += (completed / courseModules.length) * 100
            candidateCount++
          }
        }

        setStats({
          totalCandidates: candidates.length,
          fullCandidates,
          refresherCandidates,
          activeCodes,
          avgProgress: candidateCount > 0 ? Math.round(totalProgress / candidateCount) : 0,
        })
      } catch (err) {
        console.error('Error loading admin stats:', err)
      }
      setLoading(false)
    }
    loadStats()
  }, [])

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
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-navy">Admin Dashboard</h1>
        <p className="text-text-muted mt-1">Manage candidates and course enrolments</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="card">
          <p className="text-sm text-text-muted mb-1">Total Candidates</p>
          <p className="text-3xl font-heading font-bold text-navy">{stats.totalCandidates}</p>
          <p className="text-xs text-text-muted mt-1">
            {stats.fullCandidates} full / {stats.refresherCandidates} refresher
          </p>
        </div>
        <div className="card">
          <p className="text-sm text-text-muted mb-1">Active Enrolment Codes</p>
          <p className="text-3xl font-heading font-bold text-teal">{stats.activeCodes}</p>
        </div>
        <div className="card">
          <p className="text-sm text-text-muted mb-1">Average Progress</p>
          <p className="text-3xl font-heading font-bold text-success-green">{stats.avgProgress}%</p>
        </div>
        <div className="card">
          <p className="text-sm text-text-muted mb-1">Courses Offered</p>
          <p className="text-3xl font-heading font-bold text-navy">2</p>
          <p className="text-xs text-text-muted mt-1">Full DMT + Refresher</p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 className="font-heading text-lg font-semibold text-navy mb-4">Quick Actions</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link to="/admin/cohorts" className="card hover:shadow-md transition-shadow duration-150">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold text-navy">Create Enrolment Code</h3>
              <p className="text-xs text-text-muted">Generate a new code for a cohort</p>
            </div>
          </div>
        </Link>

        <Link to="/admin/candidates" className="card hover:shadow-md transition-shadow duration-150">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold text-navy">View All Candidates</h3>
              <p className="text-xs text-text-muted">Monitor candidate progress</p>
            </div>
          </div>
        </Link>

        <Link to="/admin/sessions" className="card hover:shadow-md transition-shadow duration-150">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-warning-amber/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-warning-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold text-navy">Sessions & Attendance</h3>
              <p className="text-xs text-text-muted">Schedule sessions and track attendance</p>
            </div>
          </div>
        </Link>
      </div>
    </Layout>
  )
}
