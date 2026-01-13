import { Github, Coffee } from "lucide-react"
import LinkCard from "@/components/LinkCard"
import HiddenLink from "@/components/HiddenLink"
import AboutSticker from "@/components/AboutSticker"
import PersonalSticker from "@/components/PersonalSticker"
import { links, hiddenLink } from "@/data/links"

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      
      <div className="flex-1 flex items-center justify-center px-4 py-8 relative">
        <div className="w-full max-w-2xl space-y-6">
          <div className="flex justify-center items-center gap-3 mb-8">
            <img 
              src="/pfp/p1stachy.webp" 
              alt="p1stachy avatar" 
              className="w-14 h-14 rounded-full border-2 border-white object-cover"
            />
            <h1 className="text-2xl font-bold text-white">p1stachy</h1>
            <a 
              href="https://github.com/p1stachy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          
          <div className="flex justify-center relative z-20">
            <AboutSticker />
          </div>
          <div className="flex justify-center relative z-20">
            <PersonalSticker />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:gap-8">
            <div style={{ marginTop: '0px' }} className="relative z-0">
              <LinkCard {...links[0]} />
            </div>
            <div style={{ marginTop: '20px' }} className="relative z-20">
              <LinkCard {...links[1]} />
            </div>
            <div className="md:col-span-2 flex justify-center relative z-0" style={{ marginTop: '10px' }}>
              <div className="w-full md:w-1/2">
                <HiddenLink {...hiddenLink} />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="https://ko-fi.com/p1stachy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5E5B] hover:bg-[#FF5E5B]/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Coffee className="w-5 h-5" />
              <span>Support me on Ko-fi</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
