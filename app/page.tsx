import Image from "next/image"
import { Github } from "lucide-react"
import LinkCard from "@/components/LinkCard"
import HiddenLink from "@/components/HiddenLink"
import AboutSticker from "@/components/AboutSticker"
import PersonalSticker from "@/components/PersonalSticker"
import { links, hiddenLink } from "@/data/links"

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      <div className="flex-1 flex items-center justify-center px-4 py-8 relative z-10">
        <div className="w-full max-w-2xl space-y-6">
          <div className="flex justify-center items-center gap-3 mb-8">
            <Image
              src="/pfp/p1stachy.webp"
              alt="p1stachy"
              width={56}
              height={56}
              className="rounded-full border-2 border-white"
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
          
          <div className="flex justify-center">
            <AboutSticker />
          </div>
          <div className="flex justify-center">
            <PersonalSticker />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:gap-8">
            <div style={{ marginTop: '0px' }}>
              <LinkCard {...links[0]} />
            </div>
            <div style={{ marginTop: '20px' }}>
              <LinkCard {...links[1]} />
            </div>
            <div className="md:col-span-2 flex justify-center" style={{ marginTop: '10px' }}>
              <div className="w-full md:w-1/2">
                <HiddenLink {...hiddenLink} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
