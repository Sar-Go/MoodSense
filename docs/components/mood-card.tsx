"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Mood } from "@/lib/types"

interface MoodCardProps {
  mood: Mood
  isSelected: boolean
  onSelect: () => void
}

export function MoodCard({ mood, isSelected, onSelect }: MoodCardProps) {
  // Function to get the appropriate color classes based on mood
  const getColorClasses = (moodColor: string, isSelected: boolean) => {
    const colorMap: Record<string, { border: string; text: string; dot: string; shadow: string }> = {
      green: {
        border: "border-green-500",
        text: "text-green-400",
        dot: "bg-green-500",
        shadow: "shadow-[0_0_15px_rgba(34,197,94,0.5)]",
      },
      cyan: {
        border: "border-cyan-500",
        text: "text-cyan-400",
        dot: "bg-cyan-500",
        shadow: "shadow-[0_0_15px_rgba(34,211,238,0.5)]",
      },
      blue: {
        border: "border-blue-500",
        text: "text-blue-400",
        dot: "bg-blue-500",
        shadow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]",
      },
      purple: {
        border: "border-purple-500",
        text: "text-purple-400",
        dot: "bg-purple-500",
        shadow: "shadow-[0_0_15px_rgba(168,85,247,0.5)]",
      },
      red: {
        border: "border-red-500",
        text: "text-red-400",
        dot: "bg-red-500",
        shadow: "shadow-[0_0_15px_rgba(239,68,68,0.5)]",
      },
      yellow: {
        border: "border-yellow-500",
        text: "text-yellow-400",
        dot: "bg-yellow-500",
        shadow: "shadow-[0_0_15px_rgba(234,179,8,0.5)]",
      },
    }

    return colorMap[moodColor] || colorMap.green
  }

  const colorClasses = getColorClasses(mood.color, isSelected)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onSelect}
      className={cn(
        "relative flex flex-col items-center justify-center p-4 rounded-2xl cursor-pointer transition-all",
        "border border-gray-800 bg-gray-900/50 backdrop-blur-sm",
        isSelected && [colorClasses.border, colorClasses.shadow],
      )}
    >
      <div className={cn("text-3xl mb-2", isSelected ? colorClasses.text : "text-gray-400")}>{mood.emoji}</div>
      <span className={cn("font-medium", isSelected ? colorClasses.text : "text-gray-300")}>{mood.name}</span>
      {isSelected && <div className={cn("absolute top-2 right-2 w-3 h-3 rounded-full", colorClasses.dot)}></div>}
    </motion.div>
  )
}

