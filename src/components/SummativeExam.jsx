import { useState, useCallback, useMemo } from 'react'
import { useAuth } from '../context/AuthContext'
import { updateModuleProgress } from '../firebase/firestore'
import { Timestamp } from 'firebase/firestore'
import summativeQuestions, { PASS_MARK, EXAM_QUESTION_COUNT } from '../modules/quizzes/summativeAssessment'

function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function SummativeExam({ onComplete }) {
  const { currentUser } = useAuth()
  const [started, setStarted] = useState(false)
  const [questions] = useState(() => shuffleArray(summativeQuestions).slice(0, EXAM_QUESTION_COUNT))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answers, setAnswers] = useState([])
  const [examComplete, setExamComplete] = useState(false)
  const [saving, setSaving] = useState(false)

  const total = questions.length
  const current = questions[currentIndex]
  const score = useMemo(() => answers.filter((a) => a.correct).length, [answers])
  const percentage = examComplete ? Math.round((score / total) * 100) : 0
  const passed = percentage >= PASS_MARK

  const handleSelect = useCallback((optionIndex) => {
    setSelectedAnswer(optionIndex)
  }, [])

  const handleSubmitAnswer = useCallback(() => {
    if (selectedAnswer === null) return

    const newAnswers = [
      ...answers,
      {
        questionIndex: currentIndex,
        selected: selectedAnswer,
        correct: selectedAnswer === current.correct,
      },
    ]
    setAnswers(newAnswers)

    if (currentIndex + 1 >= total) {
      setExamComplete(true)
    } else {
      setCurrentIndex((i) => i + 1)
      setSelectedAnswer(null)
    }
  }, [selectedAnswer, currentIndex, total, current, answers])

  const handleKeyDown = useCallback((e) => {
    if (examComplete) return
    if (e.key >= '1' && e.key <= '4') {
      const idx = parseInt(e.key) - 1
      if (idx < current.options.length) {
        setSelectedAnswer(idx)
      }
    }
    if (e.key === 'Enter' && selectedAnswer !== null) {
      handleSubmitAnswer()
    }
  }, [examComplete, selectedAnswer, handleSubmitAnswer, current])

  async function handleSaveResult() {
    if (!currentUser) return
    setSaving(true)
    try {
      const { addDoc, collection, Timestamp: TS } = await import('firebase/firestore')
      const { db } = await import('../firebase/config')

      // Save summative exam result
      await addDoc(collection(db, 'users', currentUser.uid, 'examResults'), {
        type: 'summative',
        score: percentage,
        passed,
        questionsTotal: total,
        questionsCorrect: score,
        completedAt: Timestamp.now(),
      })
    } catch (err) {
      console.error('Failed to save exam result:', err)
    }
    setSaving(false)
    if (onComplete) onComplete({ percentage, passed })
  }

  if (!started) {
    return (
      <div className="card text-center py-10">
        <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="font-heading text-xl font-bold text-navy mb-2">Summative Assessment</h2>
        <p className="text-text-muted mb-2">
          This examination covers all major topic areas of the DMT course.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-6 max-w-md mx-auto text-sm text-left space-y-2">
          <p><strong className="text-navy">Questions:</strong> {EXAM_QUESTION_COUNT} multiple choice</p>
          <p><strong className="text-navy">Pass mark:</strong> {PASS_MARK}%</p>
          <p><strong className="text-navy">Format:</strong> Select one answer per question. No feedback is given during the exam — you will see your results and review at the end.</p>
          <p className="text-warning-amber font-medium">Once started, you should complete the exam in one sitting.</p>
        </div>
        <button onClick={() => setStarted(true)} className="btn-primary">
          Begin Examination
        </button>
      </div>
    )
  }

  if (examComplete) {
    return (
      <div className="card py-8">
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
            passed ? 'bg-success-green/10' : 'bg-error-red/10'
          }`}>
            <span className={`text-4xl font-bold ${
              passed ? 'text-success-green' : 'text-error-red'
            }`}>
              {percentage}%
            </span>
          </div>
          <h3 className="font-heading text-xl font-bold text-navy mb-2">
            {passed ? 'Examination Passed' : 'Examination Not Passed'}
          </h3>
          <p className="text-text-muted mb-1">
            You scored {score} out of {total} ({percentage}%)
          </p>
          <p className="text-sm text-text-muted mb-6">
            {passed
              ? 'Congratulations — you have met the required standard.'
              : `The pass mark is ${PASS_MARK}%. Please review the topics below and retake the exam when ready.`}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <button
              onClick={handleSaveResult}
              disabled={saving}
              className="btn-primary text-sm"
            >
              {saving ? 'Saving...' : 'Save Result'}
            </button>
          </div>
        </div>

        {/* Results by topic */}
        <div className="mb-6">
          <h4 className="font-heading font-semibold text-navy text-sm uppercase tracking-wide mb-3">Performance by Topic</h4>
          {(() => {
            const topicResults = {}
            questions.forEach((q, i) => {
              const topic = q.topic || 'General'
              if (!topicResults[topic]) topicResults[topic] = { correct: 0, total: 0 }
              topicResults[topic].total++
              if (answers[i]?.correct) topicResults[topic].correct++
            })
            return Object.entries(topicResults).map(([topic, result]) => {
              const topicPct = Math.round((result.correct / result.total) * 100)
              return (
                <div key={topic} className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-text-primary w-40 truncate">{topic}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${topicPct >= PASS_MARK ? 'bg-success-green' : 'bg-error-red'}`}
                      style={{ width: `${topicPct}%` }}
                    />
                  </div>
                  <span className={`text-sm font-medium w-12 text-right ${
                    topicPct >= PASS_MARK ? 'text-success-green' : 'text-error-red'
                  }`}>
                    {topicPct}%
                  </span>
                </div>
              )
            })
          })()}
        </div>

        {/* Review all answers */}
        <div>
          <h4 className="font-heading font-semibold text-navy text-sm uppercase tracking-wide mb-3">Review Your Answers</h4>
          <div className="space-y-4">
            {questions.map((q, i) => {
              const answer = answers[i]
              if (!answer) return null
              return (
                <div key={i} className={`border rounded-lg p-4 ${answer.correct ? 'border-success-green/30 bg-success-green/5' : 'border-error-red/30 bg-error-red/5'}`}>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-xs font-medium bg-gray-100 text-text-muted px-2 py-0.5 rounded">{q.topic}</span>
                  </div>
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
      </div>
    )
  }

  // Active exam
  return (
    <div className="card" onKeyDown={handleKeyDown} tabIndex={0} role="form" aria-label="Exam question">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-text-muted">
          Question {currentIndex + 1} of {total}
        </span>
        <span className="text-xs text-text-muted">
          {answers.length} answered
        </span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5 mb-6">
        <div
          className="bg-navy h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        />
      </div>

      {/* Topic tag */}
      <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-0.5 rounded mb-3 inline-block">
        {current.topic}
      </span>

      {/* Question */}
      <h3 className="font-heading text-lg font-semibold text-navy mb-4">
        {current.question}
      </h3>

      {/* Options */}
      <div className="space-y-2 mb-6">
        {current.options.map((option, i) => {
          let classes = 'w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-150 text-sm '
          if (i === selectedAnswer) {
            classes += 'border-navy bg-navy/5 text-navy font-medium'
          } else {
            classes += 'border-gray-200 hover:border-navy/30 hover:bg-gray-50 text-text-primary'
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={classes}
              aria-label={`Option ${i + 1}: ${option}`}
            >
              <span className="inline-flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  i === selectedAnswer
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

      {/* Actions */}
      <div className="flex justify-between items-center">
        <p className="text-xs text-text-muted">
          Press 1-4 to select, Enter to submit
        </p>
        <button
          onClick={handleSubmitAnswer}
          disabled={selectedAnswer === null}
          className="btn-primary text-sm"
        >
          {currentIndex + 1 >= total ? 'Finish Exam' : 'Next Question'}
        </button>
      </div>
    </div>
  )
}
