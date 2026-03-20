import { useState } from 'react'
import { downloadSessionICS } from '../utils/calendarExport'

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function getMonthData(year, month) {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  // Monday = 0, Sunday = 6
  let startDow = firstDay.getDay() - 1
  if (startDow < 0) startDow = 6

  const days = []
  // Pad days before the 1st
  for (let i = 0; i < startDow; i++) {
    const d = new Date(year, month, -(startDow - 1 - i))
    days.push({ date: d, isCurrentMonth: false })
  }
  // Days of the month
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push({ date: new Date(year, month, d), isCurrentMonth: true })
  }
  // Pad to fill the last week
  while (days.length % 7 !== 0) {
    const nextIdx = days.length - startDow - lastDay.getDate() + 1
    days.push({ date: new Date(year, month + 1, nextIdx), isCurrentMonth: false })
  }

  return days
}

function isSameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

export default function CalendarView({ sessions, onSessionClick }) {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth())
  const [selectedDay, setSelectedDay] = useState(null)

  const days = getMonthData(year, month)
  const monthLabel = new Date(year, month).toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
  })

  function prevMonth() {
    if (month === 0) {
      setMonth(11)
      setYear(year - 1)
    } else {
      setMonth(month - 1)
    }
    setSelectedDay(null)
  }

  function nextMonth() {
    if (month === 11) {
      setMonth(0)
      setYear(year + 1)
    } else {
      setMonth(month + 1)
    }
    setSelectedDay(null)
  }

  function goToToday() {
    setYear(now.getFullYear())
    setMonth(now.getMonth())
    setSelectedDay(null)
  }

  // Map sessions to dates
  function getSessionsForDay(date) {
    return sessions.filter((s) => {
      const sd = s.date?.toDate ? s.date.toDate() : new Date(s.date)
      return isSameDay(sd, date)
    })
  }

  const selectedDaySessions = selectedDay ? getSessionsForDay(selectedDay) : []

  return (
    <div className="card p-0 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-navy/5 border-b border-gray-100">
        <button
          onClick={prevMonth}
          className="p-1.5 rounded-lg hover:bg-white transition-colors text-navy"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-3">
          <h3 className="font-heading text-base font-semibold text-navy">{monthLabel}</h3>
          <button
            onClick={goToToday}
            className="text-xs text-teal hover:underline font-medium"
          >
            Today
          </button>
        </div>
        <button
          onClick={nextMonth}
          className="p-1.5 rounded-lg hover:bg-white transition-colors text-navy"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 border-b border-gray-100">
        {WEEKDAYS.map((d) => (
          <div
            key={d}
            className="text-center text-xs font-medium text-text-muted py-2 bg-gray-50/50"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7">
        {days.map(({ date, isCurrentMonth }, idx) => {
          const daySessions = getSessionsForDay(date)
          const isToday = isSameDay(date, now)
          const isSelected = selectedDay && isSameDay(date, selectedDay)
          const hasOnline = daySessions.some((s) => s.type === 'online')
          const hasInPerson = daySessions.some((s) => s.type === 'in_person')

          return (
            <button
              key={idx}
              onClick={() => setSelectedDay(date)}
              className={`relative min-h-[64px] sm:min-h-[80px] p-1 border-b border-r border-gray-100 text-left transition-colors ${
                !isCurrentMonth ? 'bg-gray-50/30 text-gray-300' : 'hover:bg-navy/5'
              } ${isSelected ? 'bg-navy/10 ring-1 ring-navy/20' : ''}`}
            >
              <span
                className={`inline-flex items-center justify-center w-6 h-6 text-xs font-medium rounded-full ${
                  isToday
                    ? 'bg-navy text-white'
                    : isCurrentMonth
                    ? 'text-text-primary'
                    : 'text-gray-300'
                }`}
              >
                {date.getDate()}
              </span>

              {/* Session dots */}
              {daySessions.length > 0 && (
                <div className="mt-0.5 space-y-0.5">
                  {daySessions.length <= 2 ? (
                    daySessions.map((s, i) => (
                      <div
                        key={i}
                        className={`text-[10px] leading-tight truncate px-1 rounded ${
                          s.type === 'online'
                            ? 'bg-blue-50 text-blue-700'
                            : 'bg-amber-50 text-amber-700'
                        }`}
                      >
                        {s.title?.split(' ').slice(0, 2).join(' ')}
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center gap-1 px-1">
                      {hasOnline && (
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      )}
                      {hasInPerson && (
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      )}
                      <span className="text-[10px] text-text-muted">
                        {daySessions.length} sessions
                      </span>
                    </div>
                  )}
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Selected day detail */}
      {selectedDay && (
        <div className="border-t border-gray-200 bg-gray-50/50 p-4">
          <h4 className="font-heading text-sm font-semibold text-navy mb-3">
            {selectedDay.toLocaleDateString('en-GB', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </h4>

          {selectedDaySessions.length === 0 ? (
            <p className="text-xs text-text-muted">No sessions scheduled for this day.</p>
          ) : (
            <div className="space-y-2">
              {selectedDaySessions.map((session) => {
                const sd = session.date?.toDate
                  ? session.date.toDate()
                  : new Date(session.date)

                return (
                  <div
                    key={session.id}
                    className="bg-white rounded-lg p-3 border border-gray-100 flex items-center gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-navy truncate">
                        {session.title}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1 text-xs text-text-muted">
                        <span>
                          {sd.toLocaleTimeString('en-GB', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                        <span>{session.duration}</span>
                        <span
                          className={`font-medium px-1.5 py-0.5 rounded ${
                            session.type === 'online'
                              ? 'bg-blue-50 text-blue-700'
                              : 'bg-amber-50 text-amber-700'
                          }`}
                        >
                          {session.type === 'online' ? 'Online' : 'In-Person'}
                        </span>
                        {session.instructor && (
                          <span className="px-1.5 py-0.5 rounded bg-gray-100">
                            {session.instructor}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          downloadSessionICS(session)
                        }}
                        className="text-xs text-teal hover:text-teal/80 p-1.5"
                        title="Add to Calendar"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </button>
                      {onSessionClick && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            onSessionClick(session)
                          }}
                          className="text-xs text-navy hover:underline font-medium"
                        >
                          View
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
