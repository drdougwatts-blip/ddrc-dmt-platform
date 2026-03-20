import { createContext, useContext, useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config'
import { getUserDocument, updateLastActive } from '../firebase/firestore'

const AuthContext = createContext(null)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user)
      if (user) {
        try {
          const profile = await getUserDocument(user.uid)
          setUserProfile(profile)
          await updateLastActive(user.uid)
        } catch (err) {
          console.error('Error fetching user profile:', err)
          setUserProfile(null)
        }
      } else {
        setUserProfile(null)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  async function refreshProfile() {
    if (currentUser) {
      const profile = await getUserDocument(currentUser.uid)
      setUserProfile(profile)
    }
  }

  const value = {
    currentUser,
    userProfile,
    loading,
    refreshProfile,
    isAdmin: userProfile?.role === 'admin',
    isCandidate: userProfile?.role === 'candidate',
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
