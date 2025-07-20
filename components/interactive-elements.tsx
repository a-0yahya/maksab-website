"use client"

import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TrendingUp, Users, Shield, Zap, Target, Globe, ArrowRight, Play, Pause } from 'lucide-react'

// Interactive card with 3D tilt effect
export function InteractiveCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  const springConfig = { damping: 20, stiffness: 300 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY

    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.3 }}
        className="transform-gpu"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Animated counter
export function AnimatedCounter({ value, duration = 2, className = "" }: { value: number, duration?: number, className?: string }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      setDisplayValue(Math.floor(progress * value))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [value, duration])

  return (
    <span className={className}>
      {displayValue.toLocaleString()}
    </span>
  )
}

// Floating action button with pulse effect
export function FloatingActionButton({ 
  children, 
  onClick, 
  className = "" 
}: { 
  children: React.ReactNode, 
  onClick: () => void, 
  className?: string 
}) {
  return (
    <motion.div
      className={`fixed bottom-6 right-6 z-50 ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="absolute inset-0 bg-maksab-green rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <Button
        onClick={onClick}
        className="relative bg-maksab-green hover:bg-maksab-green/90 text-white rounded-full w-14 h-14 shadow-lg"
      >
        {children}
      </Button>
    </motion.div>
  )
}

// Interactive service showcase
export function InteractiveServiceShowcase() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: TrendingUp,
      title: "Financial Advisory",
      description: "Strategic financial planning and investment optimization",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Business Consulting",
      description: "Operational excellence and growth strategies",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Technology integration and process automation",
      color: "from-orange-500 to-orange-600"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
                         <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${services[activeService].color} flex items-center justify-center`}>
               {React.createElement(services[activeService].icon, { className: "h-8 w-8 text-white" })}
             </div>
            <h3 className="text-2xl font-bold text-gray-900">{services[activeService].title}</h3>
            <p className="text-gray-600">{services[activeService].description}</p>
            <Button className="bg-maksab-blue hover:bg-maksab-blue/90">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                activeService === index 
                  ? 'bg-white shadow-lg scale-105' 
                  : 'bg-gray-200/50 hover:bg-gray-200'
              }`}
              onClick={() => setActiveService(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <service.icon className={`h-6 w-6 mb-2 ${
                activeService === index ? 'text-maksab-blue' : 'text-gray-500'
              }`} />
              <h4 className="font-semibold text-sm">{service.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Animated progress bars
export function AnimatedProgressBar({ 
  value, 
  max = 100, 
  label, 
  color = "bg-maksab-blue" 
}: { 
  value: number, 
  max?: number, 
  label: string, 
  color?: string 
}) {
  const percentage = (value / max) * 100

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-gray-500">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

// Interactive timeline
export function InteractiveTimeline() {
  const timelineItems = [
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to 25+ countries with new regional offices"
    },
    {
      year: "2023",
      title: "Digital Innovation",
      description: "Launched AI-powered financial advisory platform"
    },
    {
      year: "2022",
      title: "Market Leadership",
      description: "Recognized as top financial advisory firm"
    },
    {
      year: "2021",
      title: "Foundation",
      description: "Established MAKSAB with core team of experts"
    }
  ]

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-maksab-blue to-maksab-green" />
      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-start space-x-6"
          >
            <div className="absolute left-2 w-4 h-4 bg-maksab-blue rounded-full border-4 border-white shadow-lg" />
            <div className="ml-8 space-y-2">
              <div className="text-sm font-bold text-maksab-blue">{item.year}</div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Animated statistics
export function AnimatedStatistics() {
  const stats = [
    { label: "Global Clients", value: 500, suffix: "+" },
    { label: "Countries Served", value: 25, suffix: "+" },
    { label: "Years Experience", value: 15, suffix: "+" },
    { label: "Success Rate", value: 98, suffix: "%" }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-maksab-blue mb-2">
            <AnimatedCounter value={stat.value} />
            {stat.suffix}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
} 