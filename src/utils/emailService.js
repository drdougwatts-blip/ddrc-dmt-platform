import emailjs from '@emailjs/browser'

// EmailJS configuration — set these in your .env file
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

// Template IDs
const TEMPLATES = {
  WELCOME: import.meta.env.VITE_EMAILJS_TEMPLATE_WELCOME || '',
  MODULE_COMPLETE: import.meta.env.VITE_EMAILJS_TEMPLATE_MODULE || '',
  COURSE_COMPLETE: import.meta.env.VITE_EMAILJS_TEMPLATE_COURSE || '',
  ADMIN_NOTIFICATION: import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN || '',
}

let initialized = false

function ensureInit() {
  if (!initialized && PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY)
    initialized = true
  }
}

function isConfigured() {
  return Boolean(SERVICE_ID && PUBLIC_KEY)
}

/**
 * Send a welcome email to a newly registered candidate.
 */
export async function sendWelcomeEmail({ name, email, courseType }) {
  if (!isConfigured()) return { sent: false, reason: 'Email not configured' }

  ensureInit()
  try {
    await emailjs.send(SERVICE_ID, TEMPLATES.WELCOME, {
      to_name: name,
      to_email: email,
      course_type: courseType === 'full' ? 'Full DMT Course' : 'DMT Refresher Course',
      platform_url: window.location.origin,
    })
    return { sent: true }
  } catch (err) {
    console.error('Failed to send welcome email:', err)
    return { sent: false, reason: err.text || err.message }
  }
}

/**
 * Send a notification when a module is signed off by an instructor.
 */
export async function sendModuleCompleteEmail({
  candidateName,
  candidateEmail,
  moduleCode,
  moduleTitle,
  completedCount,
  totalModules,
}) {
  if (!isConfigured()) return { sent: false, reason: 'Email not configured' }

  ensureInit()
  try {
    await emailjs.send(SERVICE_ID, TEMPLATES.MODULE_COMPLETE, {
      to_name: candidateName,
      to_email: candidateEmail,
      module_code: moduleCode,
      module_title: moduleTitle,
      completed_count: completedCount,
      total_modules: totalModules,
      remaining: totalModules - completedCount,
    })
    return { sent: true }
  } catch (err) {
    console.error('Failed to send module complete email:', err)
    return { sent: false, reason: err.text || err.message }
  }
}

/**
 * Send a course completion email with certificate download link.
 */
export async function sendCourseCompleteEmail({
  candidateName,
  candidateEmail,
  courseType,
  certificateNumber,
  completionDate,
}) {
  if (!isConfigured()) return { sent: false, reason: 'Email not configured' }

  ensureInit()
  try {
    await emailjs.send(SERVICE_ID, TEMPLATES.COURSE_COMPLETE, {
      to_name: candidateName,
      to_email: candidateEmail,
      course_type: courseType === 'full' ? 'Full DMT Course' : 'DMT Refresher Course',
      certificate_number: certificateNumber,
      completion_date: completionDate,
      platform_url: window.location.origin,
    })
    return { sent: true }
  } catch (err) {
    console.error('Failed to send course complete email:', err)
    return { sent: false, reason: err.text || err.message }
  }
}

/**
 * Notify admin when a candidate completes the course.
 */
export async function sendAdminNotification({
  adminEmail,
  candidateName,
  courseType,
  completionDate,
}) {
  if (!isConfigured()) return { sent: false, reason: 'Email not configured' }

  ensureInit()
  try {
    await emailjs.send(SERVICE_ID, TEMPLATES.ADMIN_NOTIFICATION, {
      to_email: adminEmail,
      candidate_name: candidateName,
      course_type: courseType === 'full' ? 'Full DMT Course' : 'DMT Refresher Course',
      completion_date: completionDate,
    })
    return { sent: true }
  } catch (err) {
    console.error('Failed to send admin notification:', err)
    return { sent: false, reason: err.text || err.message }
  }
}

/**
 * Check if email notifications are configured.
 */
export function emailIsConfigured() {
  return isConfigured()
}
