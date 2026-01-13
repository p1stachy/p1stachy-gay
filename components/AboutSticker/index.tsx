"use client"

export default function AboutSticker() {
  return (
    <div 
      className="relative bg-white text-black p-6 w-full max-w-md"
      style={{
        transform: 'rotate(-1deg)',
        boxShadow: '3px 3px 0px rgba(255, 255, 255, 0.3)',
      }}
    >
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-6 bg-white/50 border-2 border-white"
        style={{ transform: 'rotate(2deg)' }}
      />
      
      <div className="space-y-3">
        <h2 className="text-lg font-bold border-b-2 border-black pb-1">About</h2>
        <p className="text-sm leading-relaxed">
          Building Discord bots with discord.js and creating websites with focus on frontend using Next.js/Tailwind and React.js
        </p>
      </div>
    </div>
  )
}
