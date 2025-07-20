"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, MessageCircle } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6 w-80 transform animate-in slide-in-from-bottom-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-maksab-blue">Need Help?</h3>
            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(false)} className="h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Get a free consultation with our financial experts. No commitment required.
          </p>
          <div className="space-y-2">
            <Button className="w-full bg-maksab-green hover:bg-maksab-green/90 text-sm">Schedule Free Call</Button>
            <Button
              variant="outline"
              className="w-full text-sm border-maksab-blue text-maksab-blue hover:bg-maksab-blue hover:text-white bg-transparent"
            >
              Download Guide
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsExpanded(true)}
          className="bg-maksab-green hover:bg-maksab-green/90 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
