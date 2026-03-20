import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { uploadFile, listFiles, deleteFile, formatFileSize } from '../firebase/storage'
import Layout from '../components/Layout'

const CATEGORIES = [
  { id: 'guidance-notes', label: 'Guidance Notes', description: 'DMAC, IMCA, and HSE guidance documents' },
  { id: 'clinical-references', label: 'Clinical References', description: 'Treatment tables, drug references, and clinical protocols' },
  { id: 'course-materials', label: 'Course Materials', description: 'Handouts, worksheets, and supplementary reading' },
  { id: 'forms-templates', label: 'Forms & Templates', description: 'DMAC 01, incident report forms, and medical record templates' },
  { id: 'other', label: 'Other Resources', description: 'Additional resources and reference materials' },
]

function FileIcon({ contentType }) {
  const isPdf = contentType?.includes('pdf')
  const isDoc = contentType?.includes('word') || contentType?.includes('document')
  const isImage = contentType?.startsWith('image/')

  if (isPdf) {
    return (
      <div className="w-10 h-10 rounded-lg bg-error-red/10 flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-error-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
    )
  }
  if (isImage) {
    return (
      <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    )
  }
  return (
    <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
      <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </div>
  )
}

export default function FileLibrary() {
  const { isAdmin } = useAuth()
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadCategory, setUploadCategory] = useState('course-materials')
  const [showUpload, setShowUpload] = useState(false)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    loadFiles()
  }, [])

  async function loadFiles() {
    setLoading(true)
    setError(null)
    try {
      const allFiles = await listFiles()
      setFiles(allFiles)
    } catch (err) {
      console.error('Error loading files:', err)
      setError('Unable to load files. The file library will be available once files are uploaded.')
    }
    setLoading(false)
  }

  async function handleUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return

    const maxSize = 50 * 1024 * 1024 // 50MB
    if (file.size > maxSize) {
      setError('File size must be under 50MB.')
      return
    }

    setUploading(true)
    setUploadProgress(0)
    setError(null)

    try {
      await uploadFile(file, uploadCategory, setUploadProgress)
      await loadFiles()
      setShowUpload(false)
    } catch (err) {
      console.error('Upload error:', err)
      setError('Upload failed. Please check your permissions and try again.')
    }
    setUploading(false)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function handleDelete(filePath) {
    if (!window.confirm('Are you sure you want to delete this file?')) return
    try {
      await deleteFile(filePath)
      setFiles((prev) => prev.filter((f) => f.path !== filePath))
    } catch (err) {
      console.error('Delete error:', err)
      setError('Failed to delete file.')
    }
  }

  const filteredFiles = activeCategory
    ? files.filter((f) => f.category === activeCategory)
    : files

  const groupedFiles = {}
  filteredFiles.forEach((f) => {
    if (!groupedFiles[f.category]) groupedFiles[f.category] = []
    groupedFiles[f.category].push(f)
  })

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <Link
          to="/dashboard"
          className="inline-flex items-center text-sm text-teal hover:underline mb-6"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="font-heading text-2xl font-bold text-navy">File Library</h1>
            <p className="text-sm text-text-muted mt-1">
              Downloadable resources, guidance notes, and course materials
            </p>
          </div>
          {isAdmin && (
            <button
              onClick={() => setShowUpload(!showUpload)}
              className="btn-primary text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Upload File
            </button>
          )}
        </div>

        {error && (
          <div className="bg-error-red/10 border border-error-red/30 rounded-lg px-4 py-3 text-sm text-error-red mb-6">
            {error}
          </div>
        )}

        {/* Admin Upload Panel */}
        {isAdmin && showUpload && (
          <div className="card mb-6">
            <h3 className="font-heading text-sm font-semibold text-navy mb-4">Upload a File</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="label">Category</label>
                <select
                  value={uploadCategory}
                  onChange={(e) => setUploadCategory(e.target.value)}
                  className="input-field"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="label">File (max 50MB)</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleUpload}
                  disabled={uploading}
                  className="block w-full text-sm text-text-muted file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-navy/10 file:text-navy hover:file:bg-navy/20 cursor-pointer"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif,.txt,.csv"
                />
              </div>
            </div>
            {uploading && (
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-text-muted mb-1">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-teal rounded-full h-2 transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              !activeCategory
                ? 'bg-navy text-white'
                : 'bg-gray-100 text-text-muted hover:bg-gray-200'
            }`}
          >
            All Files
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-navy text-white'
                  : 'bg-gray-100 text-text-muted hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-navy"></div>
          </div>
        ) : filteredFiles.length === 0 ? (
          <div className="card text-center py-12">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <h2 className="font-heading text-lg font-semibold text-navy mb-2">
              No files yet
            </h2>
            <p className="text-text-muted max-w-md mx-auto">
              {isAdmin
                ? 'Upload files using the button above. Files will be available for all enrolled candidates to download.'
                : 'Downloadable resources will appear here once your instructors upload them.'}
            </p>
          </div>
        ) : (
          /* File List */
          <div className="space-y-6">
            {Object.entries(groupedFiles).map(([category, catFiles]) => {
              const catInfo = CATEGORIES.find((c) => c.id === category)
              return (
                <div key={category}>
                  <h2 className="font-heading text-lg font-semibold text-navy mb-1">
                    {catInfo?.label || category}
                  </h2>
                  {catInfo?.description && (
                    <p className="text-sm text-text-muted mb-3">{catInfo.description}</p>
                  )}
                  <div className="space-y-2">
                    {catFiles.map((file) => (
                      <div
                        key={file.path}
                        className="card flex items-center gap-4 py-3 px-4"
                      >
                        <FileIcon contentType={file.contentType} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-text-primary truncate">
                            {file.name}
                          </p>
                          <p className="text-xs text-text-muted">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-teal/10 text-teal hover:bg-teal/20 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download
                          </a>
                          {isAdmin && (
                            <button
                              onClick={() => handleDelete(file.path)}
                              className="p-1.5 rounded-lg text-text-muted hover:text-error-red hover:bg-error-red/10 transition-colors"
                              title="Delete file"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </Layout>
  )
}
