'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface FlowerPosition {
  left: string;
  top: string;
  transform: string;
  opacity: number;
}

export function FlowerBackground() {
  const [opacity, setOpacity] = useState(1)
  const [flowers, setFlowers] = useState<FlowerPosition[]>([])

  useEffect(() => {
    // Generate flower positions after mounting
    setFlowers([...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      transform: `scale(${0.8 + Math.random() * 0.7}) rotate(${Math.random() * 360}deg)`,
      opacity: 0.3 + Math.random() * 0.3,
    })))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const fadeStart = windowHeight * 0.1
      const fadeEnd = windowHeight * 0.8
      const newOpacity = 1 - Math.min(Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0), 1)
      setOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0" 
      style={{ 
        opacity,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      {/* Create a grid of flowers */}
      <div className="absolute inset-0 overflow-hidden">
        {flowers.map((flower, i) => (
          <div
            key={i}
            className="absolute transition-transform duration-1000"
            style={flower}
          >
            <Image
              src="/flower.png"
              alt=""
              width={50}
              height={50}
              className="w-auto h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
} 