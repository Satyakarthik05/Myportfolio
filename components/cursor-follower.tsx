"use client"

import { useEffect, useRef } from "react"

export default function CursorFollower() {
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (followerRef.current) {
        followerRef.current.style.left = `${e.clientX}px`
        followerRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={followerRef}
      className="fixed w-8 h-8 pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-full h-full border-2 border-purple-500/50 rounded-full" />
      <div className="absolute inset-2 border border-purple-400/30 rounded-full animate-spin" />
    </div>
  )
}
