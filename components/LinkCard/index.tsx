"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

interface LinkCardProps {
  title: string
  url: string
  rotation?: number
  image?: string
  description?: string
}

export default function LinkCard({ title, url, rotation = 0, image, description }: LinkCardProps) {
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
        {image && (
          <div className="mb-3 flex justify-center">
            <img 
              src={image} 
              alt={title}
              className="w-16 h-16 object-cover rounded"
            />
          </div>
        )}
        <div className="flex items-center justify-between select-none">
          <div className="flex flex-col">
            <span className="font-bold text-lg select-none">{title}</span>
            {description && <span className="text-sm text-gray-600 select-none">{description}</span>}
          </div>
          <ArrowUpRight 
            className={`w-5 h-5 transition-transform duration-200 ${isHovered ? 'rotate-45' : ''}`} 
          />
        </div>
      </div>
    </a>
  )
}
