"use client"

import { useState, useEffect, useRef } from "react"

interface UseCountUpProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  onComplete?: () => void
}

export function useCountUp({ end, start = 0, duration = 2000, delay = 0, onComplete }: UseCountUpProps) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  // Detectar cuando el elemento es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Animar el contador cuando es visible
  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsedTime = timestamp - startTime

      if (elapsedTime < delay) {
        animationFrame = requestAnimationFrame(animate)
        return
      }

      const progress = Math.min((elapsedTime - delay) / duration, 1)
      const currentCount = start + progress * (end - start)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else if (onComplete) {
        onComplete()
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [isVisible, start, end, duration, delay, onComplete])

  return {
    count: Math.floor(count),
    elementRef,
  }
}
