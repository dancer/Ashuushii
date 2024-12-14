'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    text: "Being part of ashuushii's journey has been incredible! Her dedication to creating engaging content and building a welcoming community is inspiring. I'm proud to see how she brings people together and creates memorable experiences for everyone. 💖",
    author: "Joshii",
    role: "Proud Boyfriend and #1 Fan"
  },
  {
    text: "ashuushii को स्ट्रीम हेर्दा मलाई नेपाल र जापानको संस्कृति मिसिएको जस्तो लाग्छ! It's like a cultural fusion of Nepal and Japan, with gaming and cuteness mixed in!",
    author: "Benza",
    role: "Nepali-Japanese Culture Enthusiast"
  },
  {
    text: "OMG, ashuushii's stream is like, totally the cutest thing ever! The emotes are so kawaii, I can't even! 💖✨",
    author: "Boku",
    role: "Glitter and Sparkles Expert"
  },
  {
    text: "Slay queen! ashuushii's community is the ultimate vibe check. It's like a virtual slumber party with the best dress-up games!",
    author: "Saffie",
    role: "Professional Tea Spiller"
  }
]

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative">
        <Quote className="absolute -left-4 -top-4 h-12 w-12 text-pink-200/30 rotate-180" />
        <div className="relative z-10 pt-6 pl-6">
          <div className="space-y-8">
            <div className="min-h-[150px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 text-lg italic leading-relaxed mb-6">
                  {testimonials[currentIndex].text}
                </p>
                <div className="space-y-2">
                  <div className="font-semibold text-purple-900">{testimonials[currentIndex].author}</div>
                  <div className="text-sm text-pink-400">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={previous}
                className="rounded-full border-pink-200 hover:bg-pink-50"
              >
                <ChevronLeft className="h-4 w-4 text-pink-400" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-pink-200 hover:bg-pink-50"
              >
                <ChevronRight className="h-4 w-4 text-pink-400" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

