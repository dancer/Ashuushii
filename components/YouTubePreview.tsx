import { Button } from "@/components/ui/button"
import { Youtube } from 'lucide-react'

export function YouTubePreview() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-900">YouTube Coming Soon!</h2>
          <p className="text-gray-600 leading-relaxed">
            We're excited to announce that we'll be launching our YouTube channel soon! 
            While we're preparing amazing content for you, enjoy this video from my favorite singer, Sabrina Carpenter. 
            Stay tuned for cute and creative videos coming your way!
          </p>
          <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
            <a href="https://youtube.com/@ashuushii" target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-4 w-4" />
              Subscribe for Updates
            </a>
          </Button>
        </div>
        <div className="relative w-full">
          <div className="aspect-video overflow-hidden rounded-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/KEG7b851Ric"
              title="Sabrina Carpenter - Nonsense (Official Video)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

