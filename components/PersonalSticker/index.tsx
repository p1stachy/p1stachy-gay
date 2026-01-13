"use client"

export default function PersonalSticker() {
  return (
    <div 
      className="relative bg-white text-black p-5 w-full max-w-md text-sm"
      style={{
        transform: 'rotate(0.5deg)',
        boxShadow: '2px 2px 0px rgba(255, 255, 255, 0.2)',
      }}
    >
      <div 
        className="absolute top-0 right-8 -translate-y-1/2 w-12 h-5 bg-white/40 border-2 border-white"
        style={{ transform: 'rotate(-3deg)' }}
      />
      
      <div className="space-y-2">
        <h3 className="text-xs font-bold opacity-40 uppercase tracking-wider">Info</h3>
        <div className="flex flex-wrap gap-2 items-center">
          <span>aromantic</span>
          <span className="text-black/40">|</span>
          <span>pansexual</span>
          <span className="text-black/40">|</span>
          <span>she/her</span>
          <span className="text-black/40">|</span>
          <span>feb 9</span>
        </div>
      </div>
    </div>
  )
}
