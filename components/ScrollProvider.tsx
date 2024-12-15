'use client'

import { useEffect } from 'react'

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const html = document.documentElement
    let scrollPosition = 0
    
    const handleScroll = () => {
      scrollPosition = window.scrollY
      html.setAttribute('data-scroll', scrollPosition.toString())
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <>{children}</>
} 