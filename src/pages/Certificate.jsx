import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { getModuleProgress, getCertificateRecords } from '../firebase/firestore'
import { getModulesForCourse } from '../modules/moduleData'
import { downloadCertificate, generateCertificateNumber } from '../utils/certificateGenerator'
import Layout from '../components/Layout'

export default function Certificate() {
  const { currentUser, userProfile } = useAuth()
  const [courseComplete, setCourseComplete] = useState(false)
  const [certificates, setCertificates] = useState([])
  const [completedCount, setCompletedCount] = useState(0)
  const [totalModules, setTotalModules] = useState(0)
  const [loading, setLoading] = useState(true)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    async function loadData() {
      if (!currentUser || !userProfile) return

      try {
        const progress = await getModuleProgress(currentUser.uid)
        const courseModules = getModulesForCourse(userProfile.courseType)
        const completed = courseModules.filter((m) => progress[m.id]?.status === 'complete').length

        setCompletedCount(completed)
        setTotalModules(courseModules.length)
        setCourseComplete(completed === courseModules.length && courseModules.length > 0)

        const certs = await getCertificateRecords(currentUser.uid)
        setCertificates(certs)
      } catch (err) {
        console.error('Error loading certificate data:', err)
      }
      setLoading(false)
    }
    loadData()
  }, [currentUser, userProfile])

  function handleDownload() {
    if (!userProfile) return
    setDownloading(true)

    try {
      const completionDate = new Date()
      const certNumber = generateCertificateNumber(
        currentUser.uid,
        userProfile.courseType,
        completionDate
      )

      downloadCertificate({
        candidateName: userProfile.name,
        courseType: userProfile.courseType,
        completionDate,
        certificateNumber: certNumber,
        cohortName: userProfile.cohortName || '',
      })
    } catch (err) {
      console.error('Error generating certificate:', err)
    }
    setDownloading(false)
  }

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-navy"></div>
        </div>
      </Layout>
    )
  }

  const courseLabel = userProfile?.courseType === 'full' ? 'Full DMT Course' : 'DMT Refresher Course'

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading text-2xl font-bold text-navy mb-6">Your Certificate</h1>

        {courseComplete ? (
          <>
            {/* Success state */}
            <div className="card text-center py-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success-green/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-success-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h2 className="font-heading text-xl font-bold text-navy mb-2">
                Congratulations, {userProfile?.name?.split(' ')[0]}!
              </h2>
              <p className="text-text-muted mb-1">
                You have completed all {totalModules} modules of the
              </p>
              <p className="text-lg font-semibold text-navy mb-6">{courseLabel}</p>

              <button
                onClick={handleDownload}
                disabled={downloading}
                className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {downloading ? 'Generating...' : 'Download Certificate (PDF)'}
              </button>
            </div>

            {/* Previous certificates */}
            {certificates.length > 0 && (
              <div className="card mt-6">
                <h3 className="font-heading text-sm font-semibold text-navy mb-3">Certificate History</h3>
                <div className="space-y-2">
                  {certificates.map((cert) => {
                    const date = cert.issuedAt?.toDate
                      ? cert.issuedAt.toDate()
                      : new Date(cert.issuedAt)
                    return (
                      <div
                        key={cert.id}
                        className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                      >
                        <div>
                          <span className="text-sm font-medium text-navy">{cert.certificateNumber}</span>
                          <span className="text-xs text-text-muted ml-3">
                            {date.toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            downloadCertificate({
                              candidateName: cert.candidateName,
                              courseType: cert.courseType,
                              completionDate: date,
                              certificateNumber: cert.certificateNumber,
                              cohortName: cert.cohortName || '',
                            })
                          }}
                          className="text-xs text-teal hover:underline"
                        >
                          Re-download
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Not yet complete */
          <div className="card text-center py-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>

            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Certificate Not Yet Available
            </h2>
            <p className="text-text-muted mb-4">
              Complete all modules and receive instructor sign-off to unlock your certificate.
            </p>

            <div className="inline-flex items-center gap-2 text-sm bg-gray-50 rounded-lg px-4 py-2">
              <span className="text-text-muted">Progress:</span>
              <span className="font-semibold text-navy">
                {completedCount} / {totalModules} modules
              </span>
            </div>

            <p className="text-xs text-text-muted mt-4">
              {totalModules - completedCount} module{totalModules - completedCount !== 1 ? 's' : ''} remaining
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}
