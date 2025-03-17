"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const router = useRouter()

  const handleAuth = (provider: string) => {
    // In a real app, this would trigger OAuth flow
    console.log(`Authenticating with ${provider}`)
    // Mock authentication
    setTimeout(() => {
      router.push("/home")
    }, 1000)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold tracking-wider text-white mb-2">
          <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">Mood</span>
          <span className="text-fuchsia-400 drop-shadow-[0_0_10px_rgba(232,121,249,0.7)]">Sense</span>
        </h1>
        <p className="text-gray-400">Find music that matches your vibe</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col gap-4 w-full max-w-xs"
      >
        <button
          onClick={() => handleAuth("spotify")}
          className="flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-black border border-green-500 text-white hover:bg-green-900/20 transition-all shadow-[0_0_15px_rgba(34,197,94,0.5)]"
        >
          <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          Continue with Spotify
        </button>

        <button
          onClick={() => handleAuth("google")}
          className="flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-black border border-red-500 text-white hover:bg-red-900/20 transition-all shadow-[0_0_15px_rgba(239,68,68,0.5)]"
        >
          <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>
      </motion.div>
    </div>
  )
}

