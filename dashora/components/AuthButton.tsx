'use client'

import { supabase } from '@/lib/supabaseClient'
import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    handleGoogleCredentialResponse?: (response: any) => void
  }
}


export default function AuthButton() {
  const [user, setUser] = useState<any>(null)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)

    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }

    getUser()

    // ✅ Load Google Identity script
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    // ✅ Setup global callback
    window.handleGoogleCredentialResponse = async (response: any) => {
      const idToken = response.credential

      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: idToken,
      })

      if (error) {
        console.error('Supabase sign-in error:', error)
      } else {
        setUser(data.user)
      }
    }

    return () => {
      // Cleanup global callback if needed
      delete window.handleGoogleCredentialResponse
    }
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  if (!hasMounted) return null

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
        <Box>
          {/* ✅ Google Login Setup */}
          <div
            id="g_id_onload"
            data-client_id="365575093816-k0stj4fssgael5q0d9usee4lvo1osnjq.apps.googleusercontent.com"
            data-callback="handleGoogleCredentialResponse"
            data-auto_prompt="false"
          ></div>
          <div
            className="g_id_signin"
            data-type="standard"
            data-shape="rectangular"
            data-theme="outline"
            data-text="signin_with"
            data-size="large"
            data-logo_alignment="left"
          ></div>
        </Box>
      )}
    </div>
  )
}
