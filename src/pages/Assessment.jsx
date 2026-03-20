import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import SummativeExam from '../components/SummativeExam'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase/config'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

export default function Assessment() {
  const { currentUser } = useAuth()
  const [pastResults, setPastResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [showExam, setShowExam] = useState(false)

  useEffect(() => {
    async function loadResults() {
      if (!currentUser) return
      try {
        const q = query(
          collection(db, 'users', currentUser.uid, 'examResults'),
          orderBy('completedAt', 'desc')
        )
        const snapshot = await getDocs(q)
        setPastResults(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })))
      } catch (err) {
        console.error('Error loading exam results:', err)
      }
      setLoading(false)
    }
    loadResults()
  }, [currentUser])

  function handleExamComplete({ percentage, passed }) {
    setPastResults((prev) => [
      {
        id: Date.now().toString(),
        type: 'summative',
        score: percentage,
        passed,
        completedAt: { toDate: () => new Date() },
      },
      ...prev,
    ])
    // Don't hide the exam — let them see results in the component
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
        <Link to="/dashboard" className="inline-flex items-center text-sm text-teal hover:underline mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <h1 className="font-heading text-2xl font-bold text-navy">Final Assessment</h1>
        <p className="text-text-muted mt-1">
          Summative examination covering all DMT course topics. Pass mark: 70%.
        </p>
      </div>

      {showExam ? (
        <SummativeExam onComplete={handleExamComplete} />
      ) : (
        <>
          {/* Start exam card */}
          <div className="card mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-lg font-bold text-navy">Take Summative Exam</h2>
                <p className="text-sm text-text-muted">
                  30 questions drawn randomly from the full question bank. You will see your results and a full review at the end.
                </p>
              </div>
              <button onClick={() => setShowExam(true)} className="btn-primary flex-shrink-0">
                Start Exam
              </button>
            </div>
          </div>

          {/* Past results */}
          {pastResults.length > 0 && (
            <div>
              <h2 className="font-heading text-lg font-semibold text-navy mb-4">Previous Attempts</h2>
              <div className="space-y-3">
                {pastResults.map((result) => {
                  const date = result.completedAt?.toDate
                    ? result.completedAt.toDate()
                    : new Date(result.completedAt)
                  return (
                    <div key={result.id} className="card flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                        result.passed
                          ? 'bg-success-green/10 text-success-green'
                          : 'bg-error-red/10 text-error-red'
                      }`}>
                        {result.score}%
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-text-primary">
                          {result.passed ? 'Passed' : 'Not passed'}
                        </p>
                        <p className="text-xs text-text-muted">
                          {date.toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        result.passed
                          ? 'bg-success-green/10 text-success-green'
                          : 'bg-error-red/10 text-error-red'
                      }`}>
                        {result.questionsCorrect !== undefined
                          ? `${result.questionsCorrect}/${result.questionsTotal}`
                          : `${result.score}%`}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </>
      )}
    </Layout>
  )
}
