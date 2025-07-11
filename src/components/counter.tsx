"use client"

import { useEffect, useState } from "react"

export function Counter({ target, duration = 2000, suffix = "" }: { target: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = target
    if (start === end) return

    const incrementTime = (duration / end)
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [target, duration])

  return <span>{count}{suffix}</span>
}
