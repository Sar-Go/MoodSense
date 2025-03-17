"use client"

import { useState } from "react"
import { User, Settings, LogOut, Music, Heart, History, PlayCircle } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="relative h-10 w-10 rounded-full bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback className="bg-gray-900">
              <User className="h-5 w-5 text-gray-400" />
            </AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-black"></span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 mt-1 mr-1 bg-gray-900 border border-gray-800 text-white"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Music Lover</p>
            <p className="text-xs leading-none text-gray-400">music.lover@example.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-800" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gray-800">
            <Music className="mr-2 h-4 w-4" />
            <span>My Library</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gray-800">
            <Heart className="mr-2 h-4 w-4" />
            <span>Favorites</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gray-800">
            <PlayCircle className="mr-2 h-4 w-4" />
            <span>Playlists</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gray-800">
            <History className="mr-2 h-4 w-4" />
            <span>Recently Played</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-gray-800" />
        <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gray-800">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gray-800">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

