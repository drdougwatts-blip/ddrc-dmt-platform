import { describe, it, expect } from 'vitest'
import { modules } from '../moduleData'

// Dynamically import all quiz modules that have content
const quizModules = import.meta.glob('../quizzes/*.js', { eager: true })

describe('quiz data integrity', () => {
  Object.entries(quizModules).forEach(([path, mod]) => {
    const fileName = path.split('/').pop().replace('.js', '')
    // Skip index and non-question files
    if (fileName === 'index' || fileName === 'revision' || fileName === 'summativeAssessment') return

    describe(`quiz: ${fileName}`, () => {
      const questions = mod.default

      it('exports an array of questions', () => {
        expect(Array.isArray(questions)).toBe(true)
        expect(questions.length).toBeGreaterThan(0)
      })

      it('each question has required fields', () => {
        questions.forEach((q, i) => {
          expect(q, `question ${i}`).toHaveProperty('question')
          expect(q, `question ${i}`).toHaveProperty('options')
          expect(q, `question ${i}`).toHaveProperty('correct')
          expect(q, `question ${i}`).toHaveProperty('explanation')
          expect(Array.isArray(q.options), `question ${i} options`).toBe(true)
          expect(q.options.length, `question ${i} option count`).toBeGreaterThanOrEqual(2)
        })
      })

      it('correct answer index is within options range', () => {
        questions.forEach((q, i) => {
          expect(q.correct, `question ${i} correct index`).toBeGreaterThanOrEqual(0)
          expect(q.correct, `question ${i} correct index`).toBeLessThan(q.options.length)
        })
      })
    })
  })
})
