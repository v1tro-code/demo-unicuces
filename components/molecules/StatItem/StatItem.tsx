"use client"

import { useCountUp } from "@/hooks/use-count-up"
import type { ReactNode } from "react"

interface StatItemProps {
  icon: ReactNode
  value: number
  suffix?: string
  label: string
  description: string
  delay?: number
}

const StatItem = ({ icon, value, suffix = "", label, description, delay = 0 }: StatItemProps) => {
  const { count, elementRef } = useCountUp({
    end: value,
    duration: 2000,
    delay,
  })

  return (
    <div ref={elementRef} className="bg-muted p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-3xl font-bold text-secondary mb-2">
        {count}
        {suffix}
      </h3>
      <p className="font-medium text-gray-800 mb-1">{label}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default StatItem
