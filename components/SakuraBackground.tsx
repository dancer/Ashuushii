'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface SakuraPosition {
  left: string;
  top: string;
  transform: string;
  opacity: number;
}

export function SakuraBackground() {
  const [opacity, setOpacity] = useState(1)
  const [sakuraPositions, setSakuraPositions] = useState<SakuraPosition[]>([])

  useEffect(() => {
    // Generate random positions after mounting
    setSakuraPositions([...Array(6)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      transform: `scale(${0.5 + Math.random() * 0.5}) rotate(${Math.random() * 360}deg)`,
      opacity: 0.3 + Math.random() * 0.3,
    })))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const fadeStart = windowHeight * 0.3
      const fadeEnd = windowHeight * 0.8
      const newOpacity = 1 - Math.min(Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0), 1)
      setOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0" style={{ opacity }}>
      {/* Create a grid of sakura flowers */}
      <div className="absolute inset-0 overflow-hidden">
        {sakuraPositions.map((position, i) => (
          <div 
            key={i} 
            className="absolute" 
            style={position}
          />
        ))}
      </div>
      {/* Add a pink gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-pink-100/50 to-transparent"
        style={{
          mixBlendMode: 'soft-light'
        }}
      />
    </div>
  )
}

