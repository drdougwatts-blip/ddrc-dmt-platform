/**
 * Generate and download .ics calendar files for sessions.
 * Works with Google Calendar, Outlook, Apple Calendar, etc.
 */

function pad(n) {
  return String(n).padStart(2, '0')
}

function formatICSDate(date) {
  return (
    date.getUTCFullYear().toString() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    'T' +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    'Z'
  )
}

function parseDurationToMinutes(durationStr) {
  if (!durationStr) return 60
  const str = durationStr.toLowerCase()
  let total = 0

  const hourMatch = str.match(/([\d.]+)\s*h/)
  if (hourMatch) total += parseFloat(hourMatch[1]) * 60

  const minMatch = str.match(/(\d+)\s*min/)
  if (minMatch) total += parseInt(minMatch[1], 10)

  // Handle "2.5 hours" style
  if (!hourMatch && !minMatch) {
    const numMatch = str.match(/([\d.]+)/)
    if (numMatch) {
      const num = parseFloat(numMatch[1])
      total = str.includes('hour') ? num * 60 : num
    }
  }

  return total || 60
}

function escapeICS(text) {
  return (text || '')
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
}

/**
 * Generate an .ics file string for a single session.
 */
export function generateICS(session) {
  const startDate = session.date?.toDate
    ? session.date.toDate()
    : new Date(session.date)

  const durationMins = parseDurationToMinutes(session.duration)
  const endDate = new Date(startDate.getTime() + durationMins * 60 * 1000)

  const location =
    session.type === 'online'
      ? session.meetingLink || 'Online'
      : session.location || 'DDRC Plymouth'

  const description = [
    `DDRC DMT Course Session`,
    session.type === 'online' ? 'Online session' : 'In-person practical',
    session.instructor ? `Instructor: ${session.instructor}` : '',
    session.duration ? `Duration: ${session.duration}` : '',
    session.meetingLink ? `Join: ${session.meetingLink}` : '',
  ]
    .filter(Boolean)
    .join('\\n')

  const uid = `ddrc-session-${session.id || Date.now()}@ddrc-dmt-platform`

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//DDRC DMT Platform//Session//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTART:${formatICSDate(startDate)}`,
    `DTEND:${formatICSDate(endDate)}`,
    `SUMMARY:${escapeICS(session.title)}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${escapeICS(location)}`,
    session.meetingLink ? `URL:${session.meetingLink}` : '',
    'STATUS:CONFIRMED',
    `DTSTAMP:${formatICSDate(new Date())}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]
    .filter(Boolean)
    .join('\r\n')

  return lines
}

/**
 * Generate an .ics file for multiple sessions.
 */
export function generateMultiICS(sessions) {
  const events = sessions.map((session) => {
    const startDate = session.date?.toDate
      ? session.date.toDate()
      : new Date(session.date)

    const durationMins = parseDurationToMinutes(session.duration)
    const endDate = new Date(startDate.getTime() + durationMins * 60 * 1000)

    const location =
      session.type === 'online'
        ? session.meetingLink || 'Online'
        : session.location || 'DDRC Plymouth'

    const description = [
      'DDRC DMT Course Session',
      session.type === 'online' ? 'Online session' : 'In-person practical',
      session.instructor ? `Instructor: ${session.instructor}` : '',
      session.duration ? `Duration: ${session.duration}` : '',
      session.meetingLink ? `Join: ${session.meetingLink}` : '',
    ]
      .filter(Boolean)
      .join('\\n')

    const uid = `ddrc-session-${session.id || Date.now()}@ddrc-dmt-platform`

    return [
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTART:${formatICSDate(startDate)}`,
      `DTEND:${formatICSDate(endDate)}`,
      `SUMMARY:${escapeICS(session.title)}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${escapeICS(location)}`,
      session.meetingLink ? `URL:${session.meetingLink}` : '',
      'STATUS:CONFIRMED',
      `DTSTAMP:${formatICSDate(new Date())}`,
      'END:VEVENT',
    ]
      .filter(Boolean)
      .join('\r\n')
  })

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//DDRC DMT Platform//Sessions//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    ...events,
    'END:VCALENDAR',
  ].join('\r\n')

  return lines
}

/**
 * Download a single session as .ics file.
 */
export function downloadSessionICS(session) {
  const ics = generateICS(session)
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${(session.title || 'session').replace(/[^a-zA-Z0-9]/g, '_')}.ics`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

/**
 * Download all sessions as a single .ics file.
 */
export function downloadAllSessionsICS(sessions, filename = 'ddrc-dmt-sessions.ics') {
  const ics = generateMultiICS(sessions)
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
