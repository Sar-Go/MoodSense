"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { MoodCard } from "@/components/mood-card"
import { SongGrid } from "@/components/song-grid"
import { moods, songs } from "@/lib/data"
import { UserNav } from "@/components/user-nav"

export default function HomePage() {
  const [selectedMoods, setSelectedMoods] = useState<string[]>([])
  const [intensityLevel, setIntensityLevel] = useState(1) // 0: normal, 1: engaged, 2: intense

  const intensityLabels = ["normal", "engaged", "intense"]

  const handleMoodSelect = (moodId: string) => {
    setSelectedMoods((prev) => {
      // If already selected, remove it
      if (prev.includes(moodId)) {
        return prev.filter((id) => id !== moodId)
      }
      // Otherwise add it
      return [...prev, moodId]
    })
  }

  const handleClearMoods = () => {
    setSelectedMoods([])
  }

  const handleIntensityChange = (value: number[]) => {
    setIntensityLevel(Math.round(value[0]))
  }

  const filteredSongs =
    selectedMoods.length > 0
      ? songs.filter((song) => selectedMoods.includes(song.mood) && song.intensity === intensityLevel)
      : []

  // Shuffle the songs to mix recommendations from different moods
  const shuffledSongs = [...filteredSongs].sort(() => Math.random() - 0.5)

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-black/70 border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wider">
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">Mood</span>
            <span className="text-fuchsia-400 drop-shadow-[0_0_10px_rgba(232,121,249,0.7)]">Sense</span>
          </h1>
          <UserNav />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400 text-lg">How are you feeling today?</p>
          <p className="text-gray-500 text-sm mt-1">Select multiple moods for mixed recommendations</p>
        </motion.div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Moods</h2>
          {selectedMoods.length > 0 && (
            <Button variant="ghost" size="sm" onClick={handleClearMoods} className="text-gray-400 hover:text-white">
              <X className="h-4 w-4 mr-1" />
              Clear selection
            </Button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {moods.map((mood) => (
            <MoodCard
              key={mood.id}
              mood={mood}
              isSelected={selectedMoods.includes(mood.id)}
              onSelect={() => handleMoodSelect(mood.id)}
            />
          ))}
        </div>

        {selectedMoods.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-400">Intensity</span>
                <span className="text-sm font-medium text-green-400">{intensityLabels[intensityLevel]}</span>
              </div>
              <Slider
                defaultValue={[1]}
                max={2}
                step={1}
                onValueChange={handleIntensityChange}
                className="py-4"
                thumbClassName="bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.7)]"
                trackClassName="bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.7)]"
              />
            </div>
          </motion.div>
        )}

        {selectedMoods.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-xl font-semibold mb-4">Mixed Mood Recommendations</h2>
            <SongGrid songs={shuffledSongs} />
          </motion.div>
        )}
      </main>
    </div>
  )
}

