'use client'

import { Music } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useMusic } from './MusicContext'

export function MusicPlayer() {
  const { isPlaying, togglePlay } = useMusic();

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

