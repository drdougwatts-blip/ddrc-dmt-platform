import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyBEr21OtMUWQdH7yRZVKm4JUMSS4YvD7iI',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'ddrc-dmt-platform.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'ddrc-dmt-platform',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'ddrc-dmt-platform.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '18426471109',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:18426471109:web:957af0ecdbb78f3bce06ac',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
