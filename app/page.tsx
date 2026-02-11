"use client"

import { useState, useEffect } from "react"

type Tab = 'home' | 'projects' | 'about'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isBirthday, setIsBirthday] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>('home')
  const [isGoalsOpen, setIsGoalsOpen] = useState(false)

  // Birthday countdown
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      let birthday = new Date(currentYear, 1, 9) // February 9
      
      // If birthday has passed this year, calculate for next year
      if (now > birthday) {
        birthday = new Date(currentYear + 1, 1, 9)
      }
      
      const difference = birthday.getTime() - now.getTime()
      
      // Check if it's the birthday (February 9)
      const isToday = now.getDate() === 9 && now.getMonth() === 1
      
      if (isToday) {
        setIsBirthday(true)
      } else {
        setIsBirthday(false)
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  // Noise effect
  useEffect(() => {
    const canvas = document.getElementById('noise') as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const safeCtx = ctx

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    let animationFrameId: number

    function drawNoise() {
      const imageData = safeCtx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data
      for (let i = 0; i < data.length; i += 4) {
        const color = Math.random() * 255
        data[i] = color
        data[i + 1] = color
        data[i + 2] = color
        data[i + 3] = 255
      }
      safeCtx.putImageData(imageData, 0, 0)
      animationFrameId = requestAnimationFrame(drawNoise)
    }

    drawNoise()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <canvas id="noise" className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.03] z-50" />
      <button
        type="button"
        onClick={() => setIsGoalsOpen((prev) => !prev)}
        className="fixed top-4 right-4 z-50 bg-[#0c0e10]/80 hover:bg-[#0c0e10]/95 border border-white/30 text-white text-xs tracking-widest uppercase px-4 py-2 rounded-full backdrop-blur-xl transition-all shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
        aria-expanded={isGoalsOpen}
        aria-controls="goals-sheet"
      >
        Goals
      </button>

      <div
        className={`goals-overlay fixed inset-0 z-30 transition-opacity duration-300 ${isGoalsOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsGoalsOpen(false)}
        aria-hidden="true"
      />

      <section
        id="goals-sheet"
        className={`fixed z-40 w-full md:w-80 md:right-6 md:top-24 md:left-auto top-0 left-0 right-0 transition-transform duration-500 ${isGoalsOpen ? 'translate-y-0 md:translate-x-0' : '-translate-y-full md:translate-y-0 md:translate-x-full'}`}
      >
        <div className={`goals-sheet mx-auto md:mx-0 bg-[#f6f4f0] text-[#0c0e10] border border-black/10 rounded-b-2xl md:rounded-2xl shadow-2xl px-6 py-6 ${isGoalsOpen ? 'goals-sheet--open' : 'goals-sheet--closed'}`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm tracking-[0.2em] uppercase font-semibold">Goals by 19</h2>
            <button
              type="button"
              onClick={() => setIsGoalsOpen(false)}
              className="text-[11px] uppercase tracking-widest text-black/60 hover:text-black transition-colors"
            >
              Close
            </button>
          </div>

          <ol className="space-y-3 text-[13px] leading-relaxed">
            <li className="goal-item">
              <span className="goal-num">1.</span>
              <span>Release my game Re-Thing</span>
            </li>
            <li className="goal-item">
              <span className="goal-num">2.</span>
              <span>Buy a MacBook</span>
            </li>
            <li className="goal-item">
              <span className="goal-num">3.</span>
              <span>Lose 10 or 20 kilograms</span>
            </li>
            <li className="goal-item">
              <span className="goal-num">4.</span>
              <span>Lose my virginity</span>
            </li>
            <li className="goal-item">
              <span className="goal-num">5.</span>
              <span className="goal-special">Start OnlyFans and make paid + free content</span>
            </li>
            <li className="goal-item">
              <span className="goal-num">6.</span>
              <span>Achieve stability in life</span>
            </li>
            <li className="goal-item">
              <span className="goal-num">7.</span>
              <span>Not die</span>
            </li>
          </ol>
        </div>
      </section>
      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 pb-32 relative">
      <div className="w-full max-w-4xl">
        
        {/* Header - Left aligned without tabs */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-2">
            p1stachy
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-sm text-gray-500">aka finfin001</p>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>•</span>
              <img src="/brokencat.webp" alt="BrokenCat Studio" className="h-7 w-auto" />
              <span>owner of BrokenCat Studio</span>
            </div>
          </div>
          
          {/* Content based on active tab */}
          {activeTab === 'home' && (
            <>
              <p className="text-[15px] text-gray-400 leading-relaxed max-w-lg mb-6">
                Aspiring indie developer from Ukraine — developing game projects, bots, and simple websites
              </p>
              
              {/* Info badges */}
              <div className="flex flex-wrap gap-3 text-sm">
                {/* Location */}
                <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-2">
                  <i className="fi fi-br-marker text-gray-400 text-sm"></i>
                  <span className="text-gray-400">Ukraine</span>
                </div>
                
                {/* Birthday countdown */}
                <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-2">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"/>
                  </svg>
                  {isBirthday ? (
                    <span className="text-gray-300 font-medium">Happy Birthday!</span>
                  ) : (
                    <span className="text-gray-400 tabular-nums">{timeLeft.days}d {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
                  )}
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'projects' && (
            <div className="mt-8 max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Re-Thing Project */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
                <h3 className="text-lg font-semibold mb-1">Re-Thing</h3>
                <p className="text-gray-500 text-[13px] mb-4">Top-down RPG game</p>
              
                <div className="flex gap-2">
                  <a 
                    href="https://store.steampowered.com/app/4223120/ReThing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.06] border border-white/[0.06] text-white text-[13px] py-2 px-3 rounded-lg transition-all"
                  >
                    <img 
                      width="16" 
                      height="16" 
                      src="https://img.icons8.com/glyph-neue/64/FFFFFF/steam-circled.png" 
                      alt="steam"
                    />
                    Steam
                  </a>
                  
                  <a 
                    href="https://discord.gg/rething"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.06] border border-white/[0.06] text-white text-[13px] py-2 px-3 rounded-lg transition-all"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    Discord
                  </a>
                </div>
              </div>

              {/* Back To The Outback Project */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
                <h3 className="text-lg font-semibold mb-1">Back To The Outback</h3>
                <p className="text-gray-500 text-[13px] mb-4">Movie wiki website</p>
              
                <div className="flex gap-2">
                  <a 
                    href="https://www.backtotheoutback.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.06] border border-white/[0.06] text-white text-[13px] py-2 px-3 rounded-lg transition-all"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    Website
                  </a>
                </div>
              </div>
              </div>
            </div>
          )}
          
          {activeTab === 'about' && (
            <div className="mt-8 max-w-md">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
                <div className="space-y-3 text-gray-400 text-[13px] leading-relaxed">
                  <p>
                    Hey, call me finfin or pistachy—honestly, feel free to call me whatever you like. I don't really connect with my real name, which is why I go by a pseudonym.
                  </p>
                  <p>
                    I love creating things and bringing joy to the community. I build cool and unique projects to add a splash of positivity to this gray world. I mainly code in JavaScript and I'm open to different projects or custom orders for Discord bots or websites!
                  </p>
                  <p>
                    My pronouns are she/her. I love food and have an interesting mental state.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content - Centered and compact */}
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div>
            <h2 className="text-[11px] uppercase tracking-widest text-gray-600 mb-3 font-semibold text-center">Connect</h2>
            <div className="flex gap-2.5 justify-center">
            <a 
              href="https://discordapp.com/users/289088457228156930"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-white/[0.08] transition-all backdrop-blur-xl"
              title="Discord"
            >
              <svg className="w-[18px] h-[18px] text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            
            <a 
              href="https://t.me/finfin0001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-white/[0.08] transition-all backdrop-blur-xl"
              title="Telegram"
            >
              <svg className="w-[18px] h-[18px] text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              </a>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-8 left-0 right-0 z-50">
        <div className="mx-auto max-w-xs px-6">
          <div className="bg-white/[0.03] backdrop-blur-lg border border-white/[0.06] rounded-full px-6 py-2.5">
            <div className="flex items-center justify-around gap-4">
              {/* Home Tab */}
              <button
                onClick={() => setActiveTab('home')}
                className="transition-all"
              >
                <i className={`fi fi-br-home text-lg ${activeTab === 'home' ? 'text-[#0A84FF]' : 'text-gray-500'}`}></i>
              </button>

              {/* Projects Tab */}
              <button
                onClick={() => setActiveTab('projects')}
                className="transition-all"
              >
                <i className={`fi fi-br-briefcase text-lg ${activeTab === 'projects' ? 'text-[#0A84FF]' : 'text-gray-500'}`}></i>
              </button>

              {/* About Tab */}
              <button
                onClick={() => setActiveTab('about')}
                className="transition-all"
              >
                <i className={`fi fi-bs-user text-lg ${activeTab === 'about' ? 'text-[#0A84FF]' : 'text-gray-500'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </main>
    </>
  )
}
