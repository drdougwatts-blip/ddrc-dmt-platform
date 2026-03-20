import { jsPDF } from 'jspdf'

/**
 * Generate a DDRC DMT course completion certificate as a PDF.
 */
export function generateCertificate({
  candidateName,
  courseType,
  completionDate,
  certificateNumber,
  cohortName,
}) {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  })

  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const centerX = pageWidth / 2

  // --- Background ---
  doc.setFillColor(250, 251, 252)
  doc.rect(0, 0, pageWidth, pageHeight, 'F')

  // --- Border ---
  const borderMargin = 8
  doc.setDrawColor(0, 48, 87) // navy
  doc.setLineWidth(1.5)
  doc.rect(borderMargin, borderMargin, pageWidth - borderMargin * 2, pageHeight - borderMargin * 2)

  // Inner border
  const innerMargin = 12
  doc.setDrawColor(0, 128, 128) // teal
  doc.setLineWidth(0.5)
  doc.rect(innerMargin, innerMargin, pageWidth - innerMargin * 2, pageHeight - innerMargin * 2)

  // --- Corner ornaments ---
  const ornamentSize = 15
  const corners = [
    [innerMargin, innerMargin],
    [pageWidth - innerMargin, innerMargin],
    [innerMargin, pageHeight - innerMargin],
    [pageWidth - innerMargin, pageHeight - innerMargin],
  ]
  doc.setDrawColor(0, 48, 87)
  doc.setLineWidth(0.8)
  corners.forEach(([x, y]) => {
    const dx = x < centerX ? 1 : -1
    const dy = y < pageHeight / 2 ? 1 : -1
    doc.line(x, y, x + ornamentSize * dx, y)
    doc.line(x, y, x, y + ornamentSize * dy)
  })

  // --- Header: DDRC ---
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(28)
  doc.setTextColor(0, 48, 87)
  doc.text('DDRC', centerX, 35, { align: 'center' })

  // Sub-header
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.setTextColor(0, 128, 128)
  doc.text('Professional Services', centerX, 43, { align: 'center' })

  // --- Decorative line ---
  doc.setDrawColor(0, 128, 128)
  doc.setLineWidth(0.5)
  doc.line(centerX - 50, 48, centerX + 50, 48)

  // --- Certificate title ---
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(13)
  doc.setTextColor(100, 100, 100)
  doc.text('This is to certify that', centerX, 62, { align: 'center' })

  // --- Candidate name ---
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(32)
  doc.setTextColor(0, 48, 87)
  doc.text(candidateName, centerX, 78, { align: 'center' })

  // --- Underline for name ---
  const nameWidth = doc.getTextWidth(candidateName)
  doc.setDrawColor(0, 128, 128)
  doc.setLineWidth(0.3)
  doc.line(centerX - nameWidth / 2 - 10, 82, centerX + nameWidth / 2 + 10, 82)

  // --- Course title ---
  const courseLabel =
    courseType === 'full'
      ? 'Diver Medic Technician (DMT) Full Course'
      : 'Diver Medic Technician (DMT) Refresher Course'

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(13)
  doc.setTextColor(100, 100, 100)
  doc.text('has successfully completed the', centerX, 95, { align: 'center' })

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.setTextColor(0, 48, 87)
  doc.text(courseLabel, centerX, 107, { align: 'center' })

  // --- Additional details ---
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.setTextColor(100, 100, 100)

  const detailsY = 120
  doc.text(
    'having demonstrated competence across all required modules,',
    centerX,
    detailsY,
    { align: 'center' }
  )
  doc.text(
    'formative assessments, and instructor-verified practical skills.',
    centerX,
    detailsY + 6,
    { align: 'center' }
  )

  // --- Date and Certificate Number ---
  const dateStr = completionDate instanceof Date
    ? completionDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : completionDate

  const infoY = 145
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(80, 80, 80)
  doc.text(`Date of Completion: ${dateStr}`, centerX - 50, infoY, { align: 'center' })
  doc.text(`Certificate No: ${certificateNumber}`, centerX + 50, infoY, { align: 'center' })

  if (cohortName) {
    doc.text(`Cohort: ${cohortName}`, centerX, infoY + 7, { align: 'center' })
  }

  // --- Signature lines ---
  const sigY = 170
  const sigWidth = 55

  // Left: Course Director
  doc.setDrawColor(0, 48, 87)
  doc.setLineWidth(0.3)
  doc.line(centerX - 85, sigY, centerX - 85 + sigWidth, sigY)
  doc.setFontSize(9)
  doc.setTextColor(100, 100, 100)
  doc.text('Course Director', centerX - 85 + sigWidth / 2, sigY + 5, { align: 'center' })
  doc.text('DDRC Professional Services', centerX - 85 + sigWidth / 2, sigY + 10, { align: 'center' })

  // Right: Medical Director
  doc.line(centerX + 30, sigY, centerX + 30 + sigWidth, sigY)
  doc.text('Medical Director', centerX + 30 + sigWidth / 2, sigY + 5, { align: 'center' })
  doc.text('DDRC Professional Services', centerX + 30 + sigWidth / 2, sigY + 10, { align: 'center' })

  // --- Footer ---
  doc.setFontSize(8)
  doc.setTextColor(150, 150, 150)
  doc.text(
    'DDRC Professional Services | Diving Diseases Research Centre | Plymouth, UK',
    centerX,
    pageHeight - 18,
    { align: 'center' }
  )
  doc.text(
    'This certificate is issued subject to verification of all course requirements.',
    centerX,
    pageHeight - 13,
    { align: 'center' }
  )

  return doc
}

/**
 * Generate a certificate number from candidate UID and date.
 */
export function generateCertificateNumber(uid, courseType, date) {
  const prefix = courseType === 'full' ? 'DMT' : 'DMTR'
  const year = date.getFullYear()
  const hash = uid.substring(0, 6).toUpperCase()
  return `${prefix}-${year}-${hash}`
}

/**
 * Download the certificate PDF.
 */
export function downloadCertificate(params) {
  const doc = generateCertificate(params)
  const filename = `DDRC_${params.courseType === 'full' ? 'DMT' : 'DMTR'}_Certificate_${params.candidateName.replace(/\s+/g, '_')}.pdf`
  doc.save(filename)
}
