"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isBirthday, setIsBirthday] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const birthday = new Date('2026-02-09T00:00:00')
      const now = new Date()
      const difference = birthday.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
        setIsBirthday(false)
      } else {
        setIsBirthday(true)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-[#121212] flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl flex flex-col items-center space-y-8">
        
        {/* Avatar */}
        <img 
          src="/pfp/p1stachy.webp" 
          alt="p1stachy" 
          className="w-32 h-32 rounded-full object-cover select-none pointer-events-none"
          draggable={false}
        />
        
        {/* Name */}
        <h1 className="text-3xl font-bold text-white">p1stachy</h1>
        
        {/* Birthday Countdown */}
        <div className="bg-[#1e1e1e] px-8 py-4 rounded-lg">
          {!isBirthday ? (
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-3">I'll be 19 in:</p>
              <div className="flex gap-4 justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">{timeLeft.days}</span>
                  <span className="text-xs text-gray-500">days</span>
                </div>
                <span className="text-3xl font-bold text-white">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500">hours</span>
                </div>
                <span className="text-3xl font-bold text-white">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500">minutes</span>
                </div>
                <span className="text-3xl font-bold text-white">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500">seconds</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-2xl font-bold text-white">Happy Birthday Me!</p>
            </div>
          )}
        </div>
        
        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://discordapp.com/users/289088457228156930" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            title="Discord"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>
          <a 
            href="https://t.me/p1stachyx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            title="Telegram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
        </div>

        {/* Projects Section */}
        <div className="mt-12 w-full">
          <h2 className="text-xl font-semibold text-white text-center mb-6">Projects</h2>
          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden transition-all duration-300">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full p-6 flex items-center justify-between hover:bg-[#252525] transition-colors"
            >
              <div className="flex items-center gap-6">
                <img 
                  src="/game/rething.webp" 
                  alt="Re-Thing"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-2">Re-Thing</h3>
                  <p className="text-gray-400 text-sm">Top down rpg</p>
                </div>
              </div>
              <svg 
                className={`w-6 h-6 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isExpanded && (
              <div className="bg-[#0a0a0a] px-6 py-4 space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-300">p1stachy</span>
                  <span className="text-gray-500 text-sm">Lead Developer & Screenwriter</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <a 
                    href="https://discordapp.com/users/168452380684189696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Ihor Koval
                  </a>
                  <span className="text-gray-500 text-sm">Programming Assistant</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <a 
                    href="https://discordapp.com/users/1147134799853654087"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    romchikzabiv
                  </a>
                  <span className="text-gray-500 text-sm">Sprite Artist</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <a 
                    href="https://discordapp.com/users/807545334007857194"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    GribMushroom
                  </a>
                  <span className="text-gray-500 text-sm">Musician</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
