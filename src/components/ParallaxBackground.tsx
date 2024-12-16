'use client'

import { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
  connected: boolean
}

export function ParallaxBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const points = useRef<Point[]>([])
  const animationRef = useRef<number>()
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initPoints()
    }

    const initPoints = () => {
      // Create a grid of points that form a world map shape
      const gridSize = 30
      const rows = Math.ceil(canvas.height / gridSize)
      const cols = Math.ceil(canvas.width / gridSize)
      
      points.current = []
      
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (Math.random() > 0.85) { // Randomly place points
            points.current.push({
              x: x * gridSize + Math.random() * 10,
              y: y * gridSize + Math.random() * 10,
              connected: false
            })
          }
        }
      }
    }

    const drawConnections = () => {
      if (!ctx || !canvas) return

      // Clear canvas with a dark background
      ctx.fillStyle = '#0a0a14'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections between nearby points
      points.current.forEach((point, i) => {
        points.current.slice(i + 1).forEach(otherPoint => {
          const dx = point.x - otherPoint.x
          const dy = point.y - otherPoint.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) { // Maximum connection distance
            const opacity = (1 - distance / 150) * 0.3
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
            ctx.strokeStyle = `rgba(147, 197, 253, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      // Draw points
      points.current.forEach(point => {
        ctx.beginPath()
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(147, 197, 253, 0.5)'
        ctx.fill()
      })

      // Subtle movement
      points.current.forEach(point => {
        point.x += Math.sin(Date.now() * 0.001 + point.y * 0.01) * 0.2
        point.y += Math.cos(Date.now() * 0.001 + point.x * 0.01) * 0.2
      })

      animationRef.current = requestAnimationFrame(drawConnections)
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)
    drawConnections()

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ opacity: 0.6 }}
    />
  )
} 