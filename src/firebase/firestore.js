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
