'use client'

import { useState, useEffect, useRef } from 'react'
import { Music } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setMounted(true)
    audioRef.current = new Audio('/song.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.5
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="default"
      size="icon"
      onClick={togglePlay}
      className="rounded-full bg-pink-400 hover:bg-pink-500"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      <Music className={`h-6 w-6 text-white`} />
    </Button>
  )
}

