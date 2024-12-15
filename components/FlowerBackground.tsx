'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface FlowerPosition {
  left: string;
  top: string;
  transform: string;
  opacity: number;
  speed: number;
}

export function FlowerBackground() {
  const [flowers, setFlowers] = useState<FlowerPosition[]>([])
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Generate flower positions after mounting
    setFlowers([...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      transform: `scale(${0.8 + Math.random() * 0.7}) rotate(${Math.random() * 360}deg)`,
      opacity: 0.3 + Math.random() * 0.3,
      speed: 0.05 + Math.random() * 0.15,
    })))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Create a grid of flowers */}
      <div className="absolute inset-0 overflow-hidden">
        {flowers.map((flower, i) => {
          // Calculate new position based on scroll
          const translateY = -scrollY * flower.speed
          
          return (
            <div
              key={i}
              className="absolute will-change-transform"
              style={{
                ...flower,
                transform: `${flower.transform} translateY(${translateY}px)`,
                transition: 'transform 0.5s ease-out',
              }}
            >
              <Image
                src="/flower.png"
                alt=""
                width={50}
                height={50}
                className="w-auto h-auto"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
} 