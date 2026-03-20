import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
  increment,
  Timestamp,
  addDoc,
} from 'firebase/firestore'
import { db } from './config'

// --- Enrolment Codes ---

export async function validateEnrolmentCode(code) {
  const q = query(collection(db, 'enrolmentCodes'), where('code', '==', code))
  const snapshot = await getDocs(q)

  if (snapshot.empty) return { valid: false, error: 'Invalid enrolment code.' }

  const docSnap = snapshot.docs[0]
  const data = docSnap.data()

  if (!data.active) return { valid: false, error: 'This enrolment code is no longer active.' }
  if (data.expiresAt && data.expiresAt.toDate() < new Date()) {
    return { valid: false, error: 'This enrolment code has expired.' }
  }
  if (data.currentUses >= data.maxUses) {
    return { valid: false, error: 'This enrolment code has reached its maximum number of uses.' }
  }

  return { valid: true, data, docId: docSnap.id }
}

export async function incrementCodeUsage(docId) {
  const codeRef = doc(db, 'enrolmentCodes', docId)
  await updateDoc(codeRef, { currentUses: increment(1) })
}

export async function createEnrolmentCode(codeData) {
  const docRef = await addDoc(collection(db, 'enrolmentCodes'), {
    ...codeData,
    currentUses: 0,
    active: true,
    createdAt: Timestamp.now(),
  })
  return docRef.id
}

export async function getEnrolmentCodes() {
  const q = query(collection(db, 'enrolmentCodes'), orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
}

export async function toggleCodeActive(docId, active) {
  const codeRef = doc(db, 'enrolmentCodes', docId)
  await updateDoc(codeRef, { active })
}

// --- Users ---

export async function createUserDocument(uid, userData) {
  await setDoc(doc(db, 'users', uid), {
    uid,
    ...userData,
    enrolledAt: Timestamp.now(),
    lastActive: Timestamp.now(),
  })
}

export async function getUserDocument(uid) {
  const docSnap = await getDoc(doc(db, 'users', uid))
  if (docSnap.exists()) return docSnap.data()
  return null
}

export async function updateLastActive(uid) {
  const userRef = doc(db, 'users', uid)
  await updateDoc(userRef, { lastActive: Timestamp.now() })
}

export async function getAllCandidates() {
  const q = query(
    collection(db, 'users'),
    where('role', '==', 'candidate'),
    orderBy('enrolledAt', 'desc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
}

// --- Progress ---

export async function getModuleProgress(uid) {
  const progressRef = collection(db, 'users', uid, 'progress')
  const snapshot = await getDocs(progressRef)
  const progress = {}
  snapshot.docs.forEach((d) => {
    progress[d.data().moduleId] = d.data()
  })
  return progress
}

export async function initModuleProgress(uid, moduleId) {
  const progressRef = doc(db, 'users', uid, 'progress', moduleId)
  const existing = await getDoc(progressRef)
  if (!existing.exists()) {
    await setDoc(progressRef, {
      moduleId,
      status: 'not_started',
      quizScore: null,
      quizAttempts: 0,
      startedAt: null,
      completedAt: null,
    })
  }
}

export async function updateModuleProgress(uid, moduleId, data) {
  const progressRef = doc(db, 'users', uid, 'progress', moduleId)
  await updateDoc(progressRef, data)
}

export async function getCandidateProgress(uid) {
  const progressRef = collection(db, 'users', uid, 'progress')
  const snapshot = await getDocs(progressRef)
  return snapshot.docs.map((d) => d.data())
}

export async function signOffModule(candidateUid, moduleId, adminUid) {
  const progressRef = doc(db, 'users', candidateUid, 'progress', moduleId)
  await updateDoc(progressRef, {
    status: 'complete',
    completedAt: Timestamp.now(),
    completedBy: adminUid,
    signedOff: true,
  })
}

export async function revokeSignOff(candidateUid, moduleId) {
  const progressRef = doc(db, 'users', candidateUid, 'progress', moduleId)
  const existing = await getDoc(progressRef)
  const data = existing.data()
  // Revert to in_progress if they had started it, otherwise not_started
  const newStatus = data?.startedAt ? 'in_progress' : 'not_started'
  await updateDoc(progressRef, {
    status: newStatus,
    completedAt: null,
    completedBy: null,
    signedOff: false,
  })
}

// --- Sessions ---

export async function createSession(sessionData) {
  const docRef = await addDoc(collection(db, 'sessions'), {
    ...sessionData,
    createdAt: Timestamp.now(),
  })
  return docRef.id
}

export async function getSessionsForCohort(cohortId) {
  const q = query(
    collection(db, 'sessions'),
    where('cohortId', '==', cohortId),
    orderBy('date', 'asc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
}

export async function updateSession(sessionId, data) {
  const sessionRef = doc(db, 'sessions', sessionId)
  await updateDoc(sessionRef, data)
}

export async function deleteSession(sessionId) {
  const { deleteDoc: del } = await import('firebase/firestore')
  const sessionRef = doc(db, 'sessions', sessionId)
  await del(sessionRef)
}

// --- Attendance ---

export async function getAttendanceForSession(sessionId) {
  const q = query(
    collection(db, 'attendance'),
    where('sessionId', '==', sessionId)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
}

export async function setAttendance(sessionId, cohortId, candidateUid, candidateName, attended, markedBy) {
  // Check if attendance record already exists
  const q = query(
    collection(db, 'attendance'),
    where('sessionId', '==', sessionId),
    where('candidateUid', '==', candidateUid)
  )
  const snapshot = await getDocs(q)

  if (!snapshot.empty) {
    // Update existing record
    const docSnap = snapshot.docs[0]
    await updateDoc(doc(db, 'attendance', docSnap.id), {
      attended,
      markedBy,
      markedAt: Timestamp.now(),
    })
  } else {
    // Create new record
    await addDoc(collection(db, 'attendance'), {
      sessionId,
      cohortId,
      candidateUid,
      candidateName,
      attended,
      markedBy,
      markedAt: Timestamp.now(),
    })
  }
}

export async function getAttendanceForCandidate(candidateUid) {
  const q = query(
    collection(db, 'attendance'),
    where('candidateUid', '==', candidateUid),
    where('attended', '==', true)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
}

// --- Certificates ---

export async function saveCertificateRecord(uid, certData) {
  const certRef = doc(db, 'users', uid, 'certificates', certData.certificateNumber)
  await setDoc(certRef, {
    ...certData,
    issuedAt: Timestamp.now(),
  })
}

export async function getCertificateRecords(uid) {
  const certRef = collection(db, 'users', uid, 'certificates')
  const snapshot = await getDocs(certRef)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
}

// --- Notification Log ---

export async function logNotification(data) {
  await addDoc(collection(db, 'notifications'), {
    ...data,
    createdAt: Timestamp.now(),
  })
}

export async function getRecentNotifications(limitCount = 20) {
  const q = query(
    collection(db, 'notifications'),
    orderBy('createdAt', 'desc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.slice(0, limitCount).map((d) => ({ id: d.id, ...d.data() }))
}

// --- Candidates by Cohort ---

export async function getCandidatesForCohort(cohortId) {
  const q = query(
    collection(db, 'users'),
    where('role', '==', 'candidate'),
    where('cohortId', '==', cohortId)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
}
