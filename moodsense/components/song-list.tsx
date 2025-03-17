"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import type { Song } from "@/lib/types"

interface SongListProps {
  songs: Song[]
}

export function SongList({ songs }: SongListProps) {
  const [redirectingSong, setRedirectingSong] = useState<string | null>(null)

  const handlePlayOnSpotify = (songId: string) => {
    setRedirectingSong(songId)

    // In a real app, this would redirect to Spotify
    setTimeout(() => {
      setRedirectingSong(null)
      // window.open(spotifyUrl, '_blank')
    }, 1500)
  }

  return (
    <div className="grid gap-4">
      {songs.length === 0 ? (
        <p className="text-gray-400 text-center py-8">Select a mood to see recommendations</p>
      ) : (
        songs.map((song) => (
          <motion.div
            key={song.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center p-3 rounded-xl bg-gray-900/50 border border-gray-800"
          >
            <div className="w-12 h-12 rounded-lg bg-gray-800 flex-shrink-0 overflow-hidden">
              <img
                src={`/placeholder.svg?height=48&width=48&text=${song.title.charAt(0)}`}
                alt={song.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-3 flex-grow">
              <h3 className="font-medium text-white">{song.title}</h3>
              <p className="text-sm text-gray-400">{song.artist}</p>
            </div>
            <button
              onClick={() => handlePlayOnSpotify(song.id)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
            >
              <Play size={18} />
            </button>

            {redirectingSong === song.id && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
                <div className="bg-gray-900 p-6 rounded-2xl max-w-xs w-full text-center">
                  <div className="animate-spin w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-white mb-1">Redirecting to Spotify!</h3>
                  <p className="text-sm text-gray-400">
                    Opening {song.title} by {song.artist}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))
      )}
    </div>
  )
}

