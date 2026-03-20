import { useState, useCallback } from 'react'
import { useAuth } from '../context/AuthContext'
import { updateModuleProgress } from '../firebase/firestore'
import { Timestamp } from 'firebase/firestore'

function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function QuizEngine({ questions, moduleId, onComplete }) {
  const { currentUser } = useAuth()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [answers, setAnswers] = useState([])
  const [quizComplete, setQuizComplete] = useState(false)
  const [saving, setSaving] = useState(false)

  const total = questions.length
  const current = questions[currentIndex]
  const score = answers.filter((a) => a.correct).length
  const percentage = Math.round((score / total) * 100)

  const handleSelect = useCallback((optionIndex) => {
    if (showFeedback) return
    setSelectedAnswer(optionIndex)
  }, [showFeedback])

  const handleSubmit = useCallback(() => {
    if (selectedAnswer === null) return
    setShowFeedback(true)
    setAnswers((prev) => [
      ...prev,
      { questionIndex: currentIndex, selected: selectedAnswer, correct: selectedAnswer === current.correct },
    ])
  }, [selectedAnswer, currentIndex, current])

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= total) {
      setQuizComplete(true)
      return
    }
    setCurrentIndex((i) => i + 1)
    setSelectedAnswer(null)
    setShowFeedback(false)
  }, [currentIndex, total])

  const handleKeyDown = useCallback((e) => {
    if (e.key >= '1' && e.key <= '4') {
      const idx = parseInt(e.key) - 1
      if (idx < current.options.length && !showFeedback) {
        setSelectedAnswer(idx)
      }
    }
    if (e.key === 'Enter') {
      if (showFeedback) {
        handleNext()
      } else if (selectedAnswer !== null) {
        handleSubmit()
      }
    }
  }, [showFeedback, selectedAnswer, handleNext, handleSubmit, current])

  async function handleSaveAndFinish() {
    if (!currentUser || !moduleId) return
    setSaving(true)
    try {
      // Fetch current best score to preserve highest
      const { getModuleProgress } = await import('../firebase/firestore')
      const progress = await getModuleProgress(currentUser.uid)
      const currentBest = progress[moduleId]?.quizBestScore || 0
      const { increment } = await import('firebase/firestore')

      await updateModuleProgress(currentUser.uid, moduleId, {
        quizScore: percentage,
        quizAttempts: increment(1),
        lastQuizAt: Timestamp.now(),
        quizBestScore: Math.max(percentage, currentBest),
      })
    } catch (err) {
      console.error('Failed to save quiz score:', err)
    }
    setSaving(false)
    if (onComplete) onComplete(percentage)
  }

  function handleRetry() {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setAnswers([])
    setQuizComplete(false)
  }

  if (quizComplete) {
    return (
      <div className="card text-center py-8">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
          percentage >= 80 ? 'bg-success-green/10' : percentage >= 60 ? 'bg-warning-amber/10' : 'bg-error-red/10'
        }`}>
          <span className={`text-3xl font-bold ${
            percentage >= 80 ? 'text-success-green' : percentage >= 60 ? 'text-warning-amber' : 'text-error-red'
          }`}>
            {percentage}%
          </span>
        </div>
        <h3 className="font-heading text-lg font-bold text-navy mb-2">Quiz Complete</h3>
        <p className="text-text-muted mb-1">
          You scored {score} out of {total} ({percentage}%)
        </p>
        <p className="text-sm text-text-muted mb-6">
          {percentage >= 80
            ? 'Excellent work! You have a strong grasp of this material.'
            : percentage >= 60
            ? 'Good effort. Review the topics you found challenging.'
            : 'Consider reviewing this module and retrying the quiz.'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onClick={handleRetry} className="btn-outline text-sm">
            Retry Quiz
          </button>
          {moduleId && (
            <button
              onClick={handleSaveAndFinish}
              disabled={saving}
              className="btn-primary text-sm"
            >
              {saving ? 'Saving...' : 'Save Score'}
            </button>
          )}
        </div>
        {/* Review answers */}
        <div className="mt-8 text-left space-y-4">
          <h4 className="font-heading font-semibold text-navy text-sm uppercase tracking-wide">Review Your Answers</h4>
          {questions.map((q, i) => {
            const answer = answers[i]
            if (!answer) return null
            return (
              <div key={i} className={`border rounded-lg p-4 ${answer.correct ? 'border-success-green/30 bg-success-green/5' : 'border-error-red/30 bg-error-red/5'}`}>
                <p className="text-sm font-medium text-text-primary mb-2">
                  {i + 1}. {q.question}
                </p>
                {!answer.correct && (
                  <p className="text-sm text-error-red mb-1">
                    Your answer: {q.options[answer.selected]}
                  </p>
                )}
                <p className="text-sm text-success-green mb-1">
                  Correct: {q.options[q.correct]}
                </p>
                <p className="text-xs text-text-muted">{q.explanation}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="card" onKeyDown={handleKeyDown} tabIndex={0} role="form" aria-label="Quiz question">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-text-muted">
          Question {currentIndex + 1} of {total}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < answers.length
                  ? answers[i]?.correct ? 'bg-success-green' : 'bg-error-red'
                  : i === currentIndex ? 'bg-navy' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h3 className="font-heading text-lg font-semibold text-navy mb-4">
        {current.question}
      </h3>

      {/* Options */}
      <div className="space-y-2 mb-6">
        {current.options.map((option, i) => {
          let classes = 'w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-150 text-sm '
          if (showFeedback) {
            if (i === current.correct) {
              classes += 'border-success-green bg-success-green/10 text-success-green font-medium'
            } else if (i === selectedAnswer && i !== current.correct) {
              classes += 'border-error-red bg-error-red/10 text-error-red'
            } else {
              classes += 'border-gray-200 text-text-muted opacity-60'
            }
          } else if (i === selectedAnswer) {
            classes += 'border-navy bg-navy/5 text-navy font-medium'
          } else {
            classes += 'border-gray-200 hover:border-navy/30 hover:bg-gray-50 text-text-primary'
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showFeedback}
              className={classes}
              aria-label={`Option ${i + 1}: ${option}`}
            >
              <span className="inline-flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  showFeedback && i === current.correct
                    ? 'border-success-green bg-success-green text-white'
                    : showFeedback && i === selectedAnswer && i !== current.correct
                    ? 'border-error-red bg-error-red text-white'
                    : i === selectedAnswer
                    ? 'border-navy bg-navy text-white'
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {String.fromCharCode(65 + i)}
                </span>
                {option}
              </span>
            </button>
          )
        })}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className={`rounded-lg p-4 mb-4 ${
          selectedAnswer === current.correct
            ? 'bg-success-green/10 border border-success-green/30'
            : 'bg-error-red/10 border border-error-red/30'
        }`}>
          <p className={`font-semibold text-sm mb-1 ${
            selectedAnswer === current.correct ? 'text-success-green' : 'text-error-red'
          }`}>
            {selectedAnswer === current.correct ? 'Correct!' : `Incorrect — the answer is ${current.options[current.correct]}`}
          </p>
          <p className="text-sm text-text-primary">{current.explanation}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between items-center">
        <p className="text-xs text-text-muted">
          Press 1-4 to select, Enter to submit
        </p>
        {showFeedback ? (
          <button onClick={handleNext} className="btn-primary text-sm">
            {currentIndex + 1 >= total ? 'See Results' : 'Next Question'}
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="btn-primary text-sm"
          >
            Submit Answer
          </button>
        )}
      </div>
    </div>
  )
}
