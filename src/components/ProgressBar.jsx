export default function ProgressBar({ completed, total, showLabel = true, size = 'md' }) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
  const heightClass = size === 'sm' ? 'h-2' : size === 'lg' ? 'h-5' : 'h-3'

  return (
    <div>
      <div className={`w-full bg-gray-200 rounded-full ${heightClass} overflow-hidden`}>
        <div
          className={`${heightClass} rounded-full transition-all duration-300`}
          style={{
            width: `${percentage}%`,
            backgroundColor: percentage === 100 ? '#2E8B57' : '#2A7F8E',
          }}
        />
      </div>
      {showLabel && (
        <p className="text-sm text-text-muted mt-1">
          {completed} of {total} modules complete ({percentage}%)
        </p>
      )}
    </div>
  )
}
