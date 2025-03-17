"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export default function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth")
    }, 2000)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        return prevProgress + 5
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold tracking-wider text-white mb-6">
          <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">Mood</span>
          <span className="text-fuchsia-400 drop-shadow-[0_0_10px_rgba(232,121,249,0.7)]">Sense</span>
        </h1>
        <div className="w-64 mx-auto">
          <Progress
            value={progress}
            className="h-1 bg-gray-800"
            indicatorClassName="bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
          />
        </div>
      </motion.div>
    </div>
  )
}

