import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { updateModuleProgress } from '../firebase/firestore'
import { Timestamp } from 'firebase/firestore'
import { getModulesForCourse } from '../modules/moduleData'

function SelfCheckQuestion({ question, answer, rationale }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setRevealed(!revealed)}
        className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-start gap-3"
      >
        <span className="text-text-primary font-medium text-sm">{question}</span>
        <svg
          className={`w-5 h-5 text-teal flex-shrink-0 transition-transform ${revealed ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {revealed && (
        <div className="px-4 py-3 border-t border-gray-200 bg-white">
          <p className="text-sm font-semibold text-navy mb-1">{answer}</p>
          {rationale && <p className="text-sm text-text-muted">{rationale}</p>}
        </div>
      )}
    </div>
  )
}

function ImagePlaceholder({ alt }) {
  return (
    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center my-4">
      <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-sm text-text-muted italic">{alt}</p>
    </div>
  )
}

function renderSection(section, index) {
  switch (section.type) {
    case 'heading':
      if (section.level === 2) {
        return <h2 key={index} className="font-heading text-xl font-bold text-navy mt-8 mb-4">{section.text}</h2>
      }
      return <h3 key={index} className="font-heading text-lg font-semibold text-navy mt-6 mb-3">{section.text}</h3>

    case 'paragraph':
      return <p key={index} className="text-text-primary leading-relaxed mb-4">{section.text}</p>

    case 'list':
      return (
        <ul key={index} className="list-disc list-outside ml-6 mb-4 space-y-1.5">
          {section.items.map((item, i) => (
            <li key={i} className="text-text-primary leading-relaxed">{item}</li>
          ))}
        </ul>
      )

    case 'orderedList':
      return (
        <ol key={index} className="list-decimal list-outside ml-6 mb-4 space-y-1.5">
          {section.items.map((item, i) => (
            <li key={i} className="text-text-primary leading-relaxed">{item}</li>
          ))}
        </ol>
      )

    case 'keyPoint':
      return (
        <div key={index} className="bg-navy text-white rounded-lg p-4 mb-4">
          {section.title && <p className="font-semibold mb-1">{section.title}</p>}
          <p className="leading-relaxed text-white/90">{section.text}</p>
        </div>
      )

    case 'divingContext':
      return (
        <div key={index} className="border-l-4 border-teal bg-teal/5 rounded-r-lg p-4 mb-4">
          {section.title && <p className="font-semibold text-teal mb-1">{section.title}</p>}
          <p className="text-text-primary leading-relaxed">{section.text}</p>
        </div>
      )

    case 'inPractice':
      return (
        <div key={index} className="bg-warning-amber/10 border border-warning-amber/30 rounded-lg p-4 mb-4">
          <p className="font-semibold text-warning-amber mb-1">In Practice</p>
          <p className="text-text-primary leading-relaxed">{section.text}</p>
        </div>
      )

    case 'image':
      return <ImagePlaceholder key={index} alt={section.alt} />

    case 'table':
      return (
        <div key={index} className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-navy/5">
                {section.headers.map((h, i) => (
                  <th key={i} className="text-left px-3 py-2 border border-gray-200 font-semibold text-navy">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 py-2 border border-gray-200 text-text-primary">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    default:
      return null
  }
}

export default function ModuleContent({ moduleData, content }) {
  const { currentUser, userProfile } = useAuth()
  const [completing, setCompleting] = useState(false)
  const [completed, setCompleted] = useState(false)

  const courseType = userProfile?.courseType
  const allModules = courseType ? getModulesForCourse(courseType) : []
  const currentIndex = allModules.findIndex((m) => m.id === moduleData.id)
  const prevModule = currentIndex > 0 ? allModules[currentIndex - 1] : null
  const nextModule = currentIndex < allModules.length - 1 ? allModules[currentIndex + 1] : null

  async function handleMarkComplete() {
    if (!currentUser) return
    setCompleting(true)
    try {
      await updateModuleProgress(currentUser.uid, moduleData.id, {
        status: 'complete',
        completedAt: Timestamp.now(),
      })
      // For shared modules, also update the linked module
      if (moduleData.sharedWith) {
        await updateModuleProgress(currentUser.uid, moduleData.sharedWith, {
          status: 'complete',
          completedAt: Timestamp.now(),
        })
      }
      setCompleted(true)
    } catch (err) {
      console.error('Failed to mark complete:', err)
    } finally {
      setCompleting(false)
    }
  }

  // Mark as in_progress on first view
  useState(() => {
    if (currentUser && moduleData) {
      updateModuleProgress(currentUser.uid, moduleData.id, {
        status: 'in_progress',
        startedAt: Timestamp.now(),
      }).catch(() => {})
    }
  })

  return (
    <div className="space-y-6">
      {/* Shared session notice */}
      {moduleData.shared && (
        <div className="bg-warning-amber/10 border border-warning-amber/30 rounded-lg px-4 py-3 text-sm text-text-primary">
          <span className="font-semibold text-warning-amber">Shared session.</span>{' '}
          Full course and refresher candidates attend together.
        </div>
      )}

      {/* Learning Objectives */}
      {content.objectives && content.objectives.length > 0 && (
        <div className="card">
          <h2 className="font-heading text-lg font-bold text-navy mb-3">Learning Objectives</h2>
          <ol className="list-decimal list-outside ml-6 space-y-1.5">
            {content.objectives.map((obj, i) => (
              <li key={i} className="text-text-primary leading-relaxed">{obj}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Prerequisites */}
      {content.prerequisites && content.prerequisites.length > 0 && (
        <div className="text-sm text-text-muted">
          <span className="font-medium">Prerequisites: </span>
          {content.prerequisites.map((p, i) => (
            <span key={p.id}>
              <Link to={`/module/${p.id}`} className="text-teal hover:underline">{p.label}</Link>
              {i < content.prerequisites.length - 1 && ', '}
            </span>
          ))}
        </div>
      )}

      {/* Pre-Session Brief */}
      {content.preBrief && (
        <div className="bg-teal/10 border border-teal/20 rounded-xl p-5">
          <h2 className="font-heading text-lg font-bold text-teal mb-3">Before This Session</h2>
          {content.preBrief.haveReady && content.preBrief.haveReady.length > 0 && (
            <div className="mb-3">
              <p className="font-semibold text-sm text-text-primary mb-1">Have ready:</p>
              <ul className="list-disc list-outside ml-5 text-sm space-y-1">
                {content.preBrief.haveReady.map((item, i) => (
                  <li key={i} className="text-text-primary">{item}</li>
                ))}
              </ul>
            </div>
          )}
          {content.preBrief.keyTerms && content.preBrief.keyTerms.length > 0 && (
            <div className="mb-3">
              <p className="font-semibold text-sm text-text-primary mb-1">Key terms you will encounter:</p>
              <div className="grid gap-1.5">
                {content.preBrief.keyTerms.map((term, i) => (
                  <p key={i} className="text-sm"><span className="font-medium text-navy">{term.term}:</span> <span className="text-text-muted">{term.definition}</span></p>
                ))}
              </div>
            </div>
          )}
          {content.preBrief.thinkAbout && content.preBrief.thinkAbout.length > 0 && (
            <div>
              <p className="font-semibold text-sm text-text-primary mb-1">Think about:</p>
              <ul className="list-disc list-outside ml-5 text-sm space-y-1">
                {content.preBrief.thinkAbout.map((item, i) => (
                  <li key={i} className="text-text-muted italic">{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Main Teaching Content */}
      <div className="card">
        {content.sections.map((section, i) => renderSection(section, i))}
      </div>

      {/* Key Takeaways */}
      {content.takeaways && content.takeaways.length > 0 && (
        <div className="bg-navy text-white rounded-xl p-5">
          <h2 className="font-heading text-lg font-bold mb-3">Key Takeaways</h2>
          <ul className="space-y-2">
            {content.takeaways.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Self-Check Questions */}
      {content.selfCheck && content.selfCheck.length > 0 && (
        <div className="card">
          <h2 className="font-heading text-lg font-bold text-navy mb-4">Self-Check Questions</h2>
          <p className="text-sm text-text-muted mb-4">Click each question to reveal the answer.</p>
          <div className="space-y-3">
            {content.selfCheck.map((q, i) => (
              <SelfCheckQuestion key={i} {...q} />
            ))}
          </div>
        </div>
      )}

      {/* Mark Complete */}
      <div className="card text-center">
        {completed ? (
          <div className="flex items-center justify-center gap-2 text-success-green">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Module marked as complete</span>
          </div>
        ) : (
          <button
            onClick={handleMarkComplete}
            disabled={completing}
            className="btn-secondary"
          >
            {completing ? 'Saving...' : 'Mark as Complete'}
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
        <div>
          {prevModule ? (
            <Link
              to={`/module/${prevModule.id}`}
              className="inline-flex items-center gap-1.5 text-sm text-teal hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {prevModule.code}: {prevModule.title}
            </Link>
          ) : <span />}
        </div>
        <Link to="/dashboard" className="text-sm text-text-muted hover:text-navy">
          Back to Dashboard
        </Link>
        <div>
          {nextModule ? (
            <Link
              to={`/module/${nextModule.id}`}
              className="inline-flex items-center gap-1.5 text-sm text-teal hover:underline"
            >
              {nextModule.code}: {nextModule.title}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : <span />}
        </div>
      </div>
    </div>
  )
}
