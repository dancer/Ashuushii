'use client'

import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{
    left: string;
    top: string;
    scale: string;
    rotation: string;
    opacity: number;
    animationDuration: string;
    animationDelay: string;
  }>>([]);

  useEffect(() => {
    const newHearts = [...Array(10)].map(() => ({
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
      scale: `${Math.random() * 0.4 + 0.4}`,
      rotation: `${Math.random() * 360}deg`,
      opacity: Math.random() * 0.3 + 0.2,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animationDelay: `${Math.random() * 2}s`
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((style, i) => (
        <Heart
          key={i}
          className="absolute text-pink-200 animate-pulse"
          style={{
            left: style.left,
            top: style.top,
            transform: `scale(${style.scale}) rotate(${style.rotation})`,
            opacity: style.opacity,
            animationDuration: style.animationDuration,
            animationDelay: style.animationDelay
          }}
        />
      ))}
    </div>
  );
}; 