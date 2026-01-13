"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

interface LinkCardProps {
  title: string
  url: string
  rotation?: number
}

export default function LinkCard({ title, url, rotation = 0 }: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      draggable={false}
    >
      <div 
        className={`
          relative p-5 bg-white text-black rounded-none border-2 border-black
          transition-all duration-200 ease-out select-none
          ${isHovered ? 'scale-105' : 'scale-100'}
        `}
        style={{
          transform: `rotate(${rotation}deg) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
          boxShadow: '3px 3px 0px rgba(255, 255, 255, 0.3)',
        }}
      >
        <div className="flex items-center justify-between select-none">
          <span className="font-bold text-lg select-none">{title}</span>
          <ArrowUpRight 
            className={`w-5 h-5 transition-transform duration-200 ${isHovered ? 'rotate-45' : ''}`} 
          />
        </div>
      </div>
    </a>
  )
}
