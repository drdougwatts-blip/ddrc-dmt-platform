import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getModuleById } from '../modules/moduleData'
import { getModuleContent } from '../modules/content'
import { getModuleQuiz } from '../modules/quizzes'
import ModuleContent from '../components/ModuleContent'
import QuizEngine from '../components/QuizEngine'
import Layout from '../components/Layout'

export default function ModulePage() {
  const { moduleId } = useParams()
  const { userProfile } = useAuth()
  const navigate = useNavigate()
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizScore, setQuizScore] = useState(null)

  const module = getModuleById(moduleId)

  if (!module) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="font-heading text-2xl font-bold text-navy mb-4">Module not found</h1>
          <p className="text-text-muted mb-6">The module you're looking for doesn't exist.</p>
          <Link to="/dashboard" className="btn-primary">Back to Dashboard</Link>
        </div>
      </Layout>
    )
  }

  // Redirect if module doesn't belong to candidate's course
  const courseType = userProfile?.courseType
  if (courseType && !module.courseTypes.includes(courseType)) {
    navigate('/dashboard', { replace: true })
    return null
  }

  const content = getModuleContent(moduleId)
  const quiz = getModuleQuiz(moduleId)

  function handleQuizComplete(score) {
    setQuizScore(score)
    setShowQuiz(false)
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <Link
          to="/dashboard"
          className="inline-flex items-center text-sm text-teal hover:underline mb-6"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>

        {/* Module Header */}
        <div className="card mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono font-semibold text-teal bg-teal/10 px-3 py-1 rounded">
              {module.code}
            </span>
            {module.shared && (
              <span className="text-xs text-warning-amber bg-warning-amber/10 px-2 py-0.5 rounded">
                Shared session
              </span>
            )}
          </div>

          <h1 className="font-heading text-2xl font-bold text-navy mb-2">
            {module.title}
          </h1>
          <p className="text-text-muted mb-6">{module.subtitle}</p>

          <div className="flex flex-wrap gap-4 text-sm text-text-muted border-t border-gray-100 pt-4">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {module.day}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {module.duration}
            </span>
            <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${
              module.instructor === 'DMP'
                ? 'bg-navy/10 text-navy'
                : 'bg-teal/10 text-teal'
            }`}>
              {module.instructor === 'DMP' ? 'Diving Medicine Physician' : 'Senior Instructor'}
            </span>
          </div>
        </div>

        {/* Tab Switch: Content / Quiz */}
        {content && quiz && quiz.length > 0 && (
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setShowQuiz(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                !showQuiz
                  ? 'bg-navy text-white'
                  : 'bg-gray-100 text-text-muted hover:bg-gray-200'
              }`}
            >
              Module Content
            </button>
            <button
              onClick={() => setShowQuiz(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                showQuiz
                  ? 'bg-navy text-white'
                  : 'bg-gray-100 text-text-muted hover:bg-gray-200'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Take Quiz
              {quizScore !== null && (
                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                  quizScore >= 80
                    ? 'bg-success-green/20 text-success-green'
                    : quizScore >= 60
                    ? 'bg-warning-amber/20 text-warning-amber'
                    : 'bg-error-red/20 text-error-red'
                }`}>
                  {quizScore}%
                </span>
              )}
            </button>
          </div>
        )}

        {/* Quiz View */}
        {showQuiz && quiz && quiz.length > 0 ? (
          <QuizEngine
            questions={quiz}
            moduleId={moduleId}
            onComplete={handleQuizComplete}
          />
        ) : content ? (
          <ModuleContent moduleData={module} content={content} />
        ) : (
          <div className="card text-center py-12">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h2 className="font-heading text-lg font-semibold text-navy mb-2">
              Module content is being prepared
            </h2>
            <p className="text-text-muted max-w-md mx-auto">
              This page will contain the full teaching material, key reference points,
              and a formative quiz. Content will be available before your course begins.
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}
