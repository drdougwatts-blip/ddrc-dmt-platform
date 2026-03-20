import { Link } from 'react-router-dom'

const statusConfig = {
  not_started: { label: 'Not Started', color: 'bg-gray-100 text-text-muted', dot: 'bg-gray-400' },
  in_progress: { label: 'In Progress', color: 'bg-blue-50 text-blue-700', dot: 'bg-blue-500' },
  complete: { label: 'Complete', color: 'bg-green-50 text-success-green', dot: 'bg-success-green' },
}

export default function ModuleCard({ module, progress }) {
  const status = progress?.status || 'not_started'
  const isSignedOff = progress?.signedOff === true
  const config = statusConfig[status]
  const isDisabled = !module.contentReady

  const CardContent = () => (
    <>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold text-teal bg-teal/10 px-2 py-0.5 rounded">
            {module.code}
          </span>
          {module.shared && (
            <span className="text-xs text-warning-amber bg-warning-amber/10 px-2 py-0.5 rounded">
              Shared session
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          {isSignedOff && (
            <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-success-green/10 text-success-green">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              Signed off
            </span>
          )}
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${config.color}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
            {isDisabled ? 'Coming soon' : config.label}
          </span>
        </div>
      </div>

      <h3 className="font-heading text-lg font-semibold text-navy mb-1">
        {module.title}
      </h3>
      <p className="text-sm text-text-muted mb-4">
        {module.subtitle}
      </p>

      <div className="flex items-center gap-4 text-xs text-text-muted">
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {module.duration}
        </span>
        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
          module.instructor === 'DMP'
            ? 'bg-navy/10 text-navy'
            : 'bg-teal/10 text-teal'
        }`}>
          {module.instructor === 'DMP' ? 'Diving Medicine Physician' : 'Senior Instructor'}
        </span>
      </div>
    </>
  )

  if (isDisabled) {
    return (
      <div className="card opacity-60 cursor-not-allowed">
        <CardContent />
      </div>
    )
  }

  return (
    <Link to={`/module/${module.id}`} className="card block hover:shadow-md transition-shadow duration-150">
      <CardContent />
    </Link>
  )
}
