import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../firebase/auth'
import {
  validateEnrolmentCode,
  incrementCodeUsage,
  createUserDocument,
} from '../firebase/firestore'
import { getModulesForCourse } from '../modules/moduleData'
import { initModuleProgress } from '../firebase/firestore'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [enrolmentCode, setEnrolmentCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setLoading(true)

    try {
      // Validate enrolment code
      const codeResult = await validateEnrolmentCode(enrolmentCode.trim())
      if (!codeResult.valid) {
        setError(codeResult.error)
        setLoading(false)
        return
      }

      // Create Firebase Auth user
      const user = await registerUser(email, password, name)

      // Create Firestore user document
      await createUserDocument(user.uid, {
        name,
        email,
        role: 'candidate',
        courseType: codeResult.data.courseType,
        enrolmentCode: enrolmentCode.trim(),
      })

      // Increment code usage
      await incrementCodeUsage(codeResult.docId)

      // Initialise module progress for the candidate's course
      const courseModules = getModulesForCourse(codeResult.data.courseType)
      for (const mod of courseModules) {
        await initModuleProgress(user.uid, mod.id)
      }

      navigate('/dashboard')
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists.')
      } else if (err.code === 'auth/weak-password') {
        setError('Password is too weak. Please use at least 8 characters.')
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.')
      } else {
        setError('An error occurred during registration. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-light-bg flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-bold text-navy">DDRC</h1>
          <p className="text-teal font-medium text-sm">Professional Services</p>
          <p className="text-text-muted mt-3">DMT Learning Platform</p>
        </div>

        {/* Register Card */}
        <div className="card">
          <h2 className="font-heading text-xl font-semibold text-navy mb-6">Create your account</h2>

          {error && (
            <div className="bg-error-red/10 border border-error-red/20 text-error-red rounded-lg px-4 py-3 mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="label">Full name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
                placeholder="John Smith"
                required
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="label">Email address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="your.name@example.com"
                required
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="password" className="label">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="At least 8 characters"
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="label">Confirm password</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input-field"
                placeholder="Re-enter your password"
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>

            <div>
              <label htmlFor="enrolmentCode" className="label">Enrolment code</label>
              <input
                id="enrolmentCode"
                type="text"
                value={enrolmentCode}
                onChange={(e) => setEnrolmentCode(e.target.value)}
                className="input-field font-mono"
                placeholder="e.g. DDRC-FULL-2026-03"
                required
              />
              <p className="text-xs text-text-muted mt-1">
                Your enrolment code is provided by DDRC when you register for a course.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <p className="text-center text-sm text-text-muted mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-teal font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
