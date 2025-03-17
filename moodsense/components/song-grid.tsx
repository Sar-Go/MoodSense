"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import type { Song } from "@/lib/types"
import { cn } from "@/lib/utils"
import { moods } from "@/lib/data"

interface SongGridProps {
  songs: Song[]
}

export function SongGrid({ songs }: SongGridProps) {
  const [redirectingSong, setRedirectingSong] = useState<string | null>(null)

  const handlePlayOnSpotify = (songId: string) => {
    setRedirectingSong(songId)

    // In a real app, this would redirect to Spotify
    setTimeout(() => {
      setRedirectingSong(null)
      // window.open(spotifyUrl, '_blank')
    }, 1500)
  }

  // Abstract shapes for song tiles
  const shapes = [
    "M10,30 Q50,10 90,30 Q50,50 10,30",
    "M10,10 L90,10 L50,90 Z",
    "M50,10 A40,40 0 1,0 50,90 A40,40 0 1,0 50,10 Z",
    "M10,50 Q10,10 50,10 Q90,10 90,50 Q90,90 50,90 Q10,90 10,50",
    "M30,10 L70,10 L90,50 L70,90 L30,90 L10,50 Z",
    "M10,30 L50,10 L90,30 L90,70 L50,90 L10,70 Z",
    "M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z",
    "M30,10 Q90,10 90,50 Q90,90 30,90 Q10,70 10,50 Q10,30 30,10",
    "M10,10 L90,10 L90,90 L10,90 Z",
  ]

  // Get a shape based on song id
  const getShape = (id: string) => {
    const index = Number.parseInt(id.replace(/[^0-9]/g, "")) % shapes.length
    return shapes[index]
  }

  // Get a color based on mood
  const getColor = (mood: string) => {
    const colorMap: Record<string, { text: string; bg: string }> = {
      happy: {
        text: "text-green-400",
        bg: "bg-green-500/20",
      },
      excited: {
        text: "text-cyan-400",
        bg: "bg-cyan-500/20",
      },
      chill: {
        text: "text-blue-400",
        bg: "bg-blue-500/20",
      },
      sad: {
        text: "text-purple-400",
        bg: "bg-purple-500/20",
      },
      angry: {
        text: "text-red-400",
        bg: "bg-red-500/20",
      },
      focused: {
        text: "text-yellow-400",
        bg: "bg-yellow-500/20",
      },
    }

    return colorMap[mood] || colorMap.happy
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {songs.length === 0 ? (
        <p className="text-gray-400 text-center py-8 col-span-full">Select at least one mood to see recommendations</p>
      ) : (
        songs.map((song) => {
          const colorClasses = getColor(song.mood)
          const shape = getShape(song.id)

          return (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className={cn(
                "relative aspect-square rounded-xl overflow-hidden cursor-pointer",
                "bg-gray-900/50 border border-gray-800 backdrop-blur-sm",
                "flex flex-col items-center justify-center p-4 group",
              )}
              onClick={() => handlePlayOnSpotify(song.id)}
            >
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <svg viewBox="0 0 100 100" className={`w-full h-full ${colorClasses.text} opacity-50`}>
                  <path d={shape} fill="currentColor" />
                </svg>
              </div>

              <div className="relative z-10 text-center mt-auto">
                <h3 className="font-medium text-white truncate max-w-full">{song.title}</h3>
                <p className="text-sm text-gray-400 truncate max-w-full">{song.artist}</p>
                <span className={`text-xs ${colorClasses.text} opacity-70`}>
                  {moods.find((m) => m.id === song.mood)?.name}
                </span>
              </div>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className={`w-12 h-12 rounded-full ${colorClasses.bg} flex items-center justify-center`}>
                  <Play size={24} className={colorClasses.text} />
                </div>
              </div>
            </motion.div>
          )
        })
      )}

      {redirectingSong && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="bg-gray-900 p-6 rounded-2xl max-w-xs w-full text-center">
            <div className="animate-spin w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-medium text-white mb-1">Redirecting to Spotify!</h3>
            <p className="text-sm text-gray-400">
              Opening {songs.find((s) => s.id === redirectingSong)?.title} by{" "}
              {songs.find((s) => s.id === redirectingSong)?.artist}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

