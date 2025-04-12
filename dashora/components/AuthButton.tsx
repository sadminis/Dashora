// components/AuthButton.tsx
'use client'

import { supabase } from '@/lib/supabaseClient'
import { useEffect, useState } from 'react'

export default function AuthButton() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <div className="p-4">
      {user ? (
        <>
          <p className="mb-2">Hello, {user.email}</p>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Sign Out
          </button>
        </>
      ) : (
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign In with Google
        </button>
      )}
    </div>
  )
}
