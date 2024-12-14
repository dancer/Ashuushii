import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Camera, Heart, Mail, Twitch, Twitter, Youtube, Smile, Instagram, Menu } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import { TikTok } from '@/components/TikTok'
import { SakuraBackground } from '@/components/SakuraBackground'
import { YouTubePreview } from '@/components/YouTubePreview'
import { PhotoGallery } from '@/components/PhotoGallery'
import { MusicPlayer } from '@/components/MusicPlayer'
import { Testimonial } from '@/components/Testimonial'
import { FloatingHearts } from '@/components/FloatingHearts'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Page() {
  return (
    <div className="min-h-screen bg-pink-50/50 relative overflow-hidden">
      <SakuraBackground />
      <FloatingHearts />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-bubblegum text-pink-400">𝓪𝓼𝓱𝓾𝓾𝓼𝓱𝓲𝓲</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="font-bold text-sm text-gray-600 hover:text-pink-400 transition">Home</a>
              <a href="#about" className="font-bold text-sm text-gray-600 hover:text-pink-400 transition">About</a>
              <a href="#contact" className="font-bold text-sm text-gray-600 hover:text-pink-400 transition">Contact</a>
              <MusicPlayer />
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-600">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="top" className="w-full h-auto max-h-[250px]">
                  <div className="flex flex-col gap-4">
                    <MusicPlayer />
                    <div className="flex flex-col gap-3">
                      <a href="#" className="text-sm text-gray-600 hover:text-pink-400 transition">Home</a>
                      <a href="#about" className="text-sm text-gray-600 hover:text-pink-400 transition">About</a>
                      <a href="#contact" className="text-sm text-gray-600 hover:text-pink-400 transition">Contact</a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4 md:px-6 relative overflow-hidden">
        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 relative z-10 bg-white/30 p-6 md:p-8 rounded-2xl backdrop-blur-sm">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                  Hello, I am <span className="inline-block bg-pink-300 px-4 py-1 rounded-lg text-white">Ashii</span>
                </h1>
                <h2 className="text-4xl md:text-2xl font-bold text-purple-900">Gamer │ Content Creator │ Streamer</h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg max-w-md">
              Welcome! :) I play a variety of games, chat, stream IRL & more! I love interacting my community & making others happy ✨
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="w-full sm:w-auto bg-purple-400 hover:bg-purple-500" asChild>
                  <a href="https://twitch.tv/ashiip0o" target="_blank" rel="noopener noreferrer">
                    <Twitch className="mr-2 h-4 w-4" />
                    Follow on Twitch
                  </a>
                </Button>
                <Button className="w-full sm:w-auto bg-pink-400 hover:bg-pink-500" asChild>
                  <a href="https://discord.gg/ashuushii" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="mr-2 h-4 w-4" />
                    Join Discord
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-60 h-60 md:w-72 md:h-72">
                {/* Orbital circles */}
                <div className="absolute inset-0 -m-8">
                  <div 
                    className="absolute w-full h-full rounded-full border-2 border-pink-200/30"
                  />
                </div>
                <div className="absolute inset-0 -m-16">
                  <div 
                    className="absolute w-full h-full rounded-full border-2 border-pink-200/20"
                  />
                </div>
                <div className="absolute inset-0 -m-24">
                  <div 
                    className="absolute w-full h-full rounded-full border-2 border-pink-200/10"
                  />
                </div>
                <div className="absolute inset-0 -m-32">
                  <div 
                    className="absolute w-full h-full rounded-full border-2 border-pink-200/5"
                  />
                </div>

                {/* Floating icons */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-100 rounded-full shadow-lg flex items-center justify-center">
                  <Heart className="h-4 w-4 text-pink-400" />
                </div>
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-pink-100 rounded-full shadow-lg flex items-center justify-center">
                  <Camera className="h-8 w-8 text-pink-400" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-100 rounded-full shadow-lg flex items-center justify-center">
                  <Smile className="h-6 w-6 text-pink-400" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-14 h-14 bg-pink-100 rounded-full shadow-lg flex items-center justify-center">
                  <Youtube className="h-7 w-7 text-pink-400" />
                </div>

                {/* Main circle with gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-50" />
                <div className="relative rounded-full overflow-hidden border-8 border-white/50 w-full h-full">
                  <Image
                    src="/main.png"
                    alt="Ashuushii"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold text-center text-purple-900 mb-6 md:mb-8">
              Our community is growing!
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-pink-400">100 +</div>
                <div className="text-gray-600">Discord Members</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-pink-400">20k +</div>
                <div className="text-gray-600">Followers</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-pink-400">10 +</div>
                <div className="text-gray-600">Collabs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-900 mb-6 md:mb-8">
            What Our Community Says
          </h2>
          <Testimonial />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-50" />
        <div className="container mx-auto relative">
          <div className="space-y-12 md:space-y-16">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative w-full">
                  <PhotoGallery />
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-purple-900">About Me</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Hey there! I'm your friendly neighborhood content creator who loves gaming, 
                    anime, and creating a positive space for everyone. When I'm not streaming, 
                    you can find me crafting, playing with my cats, or watching anime!
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    I'm a huge fan of the <span className="inline-block bg-pink-300 px-4 py-1 rounded-lg text-white">Valorant</span> community, and I love to support them in any way I can.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-pink-200 hover:bg-pink-50"
                      asChild
                    >
                      <a href="https://twitter.com/ashuushii" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4 text-pink-400" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-pink-200 hover:bg-pink-50"
                      asChild
                    >
                      <a href="https://youtube.com/@ashuushii" target="_blank" rel="noopener noreferrer">
                        <Youtube className="h-4 w-4 text-pink-400" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-pink-200 hover:bg-pink-50"
                      asChild
                    >
                      <a href="https://instagram.com/ashuushii" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4 text-pink-400" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-pink-200 hover:bg-pink-50"
                      asChild
                    >
                      <a href="https://tiktok.com/@ashuushii" target="_blank" rel="noopener noreferrer">
                        <TikTok className="h-4 w-4 text-pink-400" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-pink-200 hover:bg-pink-50"
                      asChild
                    >
                      <a href="https://twitch.tv/ashiip0o" target="_blank" rel="noopener noreferrer">
                        <Twitch className="h-4 w-4 text-pink-400" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <YouTubePreview />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-purple-50/50" />
        <div className="container mx-auto max-w-xl text-center relative">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">Let's Connect!</h2>
          <p className="text-gray-600 mb-6 md:mb-8">Have a question or want to collaborate? Feel free to reach out!</p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
            <Button className="w-full bg-pink-400 hover:bg-pink-500" asChild>
              <a href="mailto:contact@ashuushii.com">
                <Mail className="mr-2 h-4 w-4" />
                Email me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6 border-t">
        <div className="container mx-auto text-center text-sm md:text-base text-gray-600">
          <p>© 2024 ashuushii. Made with 🩷</p>
        </div>
      </footer>
    </div>
  )
}

