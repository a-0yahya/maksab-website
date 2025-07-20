"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  ZoomIn, 
  ZoomOut, 
  Contrast, 
  Sun, 
  Moon,
  SkipForward,
  Accessibility
} from 'lucide-react'

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Load saved preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true'
    const savedLargeText = localStorage.getItem('largeText') === 'true'
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true'
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'

    setHighContrast(savedHighContrast)
    setLargeText(savedLargeText)
    setReducedMotion(savedReducedMotion)
    setDarkMode(savedDarkMode)

    applyAccessibilitySettings(savedHighContrast, savedLargeText, savedReducedMotion, savedDarkMode)
  }, [])

  const applyAccessibilitySettings = (contrast: boolean, text: boolean, motion: boolean, dark: boolean) => {
    const root = document.documentElement

    // High contrast
    if (contrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Large text
    if (text) {
      root.classList.add('large-text')
    } else {
      root.classList.remove('large-text')
    }

    // Reduced motion
    if (motion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }

    // Dark mode
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  const toggleHighContrast = () => {
    const newValue = !highContrast
    setHighContrast(newValue)
    localStorage.setItem('highContrast', newValue.toString())
    applyAccessibilitySettings(newValue, largeText, reducedMotion, darkMode)
  }

  const toggleLargeText = () => {
    const newValue = !largeText
    setLargeText(newValue)
    localStorage.setItem('largeText', newValue.toString())
    applyAccessibilitySettings(highContrast, newValue, reducedMotion, darkMode)
  }

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion
    setReducedMotion(newValue)
    localStorage.setItem('reducedMotion', newValue.toString())
    applyAccessibilitySettings(highContrast, largeText, newValue, darkMode)
  }

  const toggleDarkMode = () => {
    const newValue = !darkMode
    setDarkMode(newValue)
    localStorage.setItem('darkMode', newValue.toString())
    applyAccessibilitySettings(highContrast, largeText, reducedMotion, newValue)
  }

  const resetSettings = () => {
    setHighContrast(false)
    setLargeText(false)
    setReducedMotion(false)
    setDarkMode(false)
    
    localStorage.removeItem('highContrast')
    localStorage.removeItem('largeText')
    localStorage.removeItem('reducedMotion')
    localStorage.removeItem('darkMode')
    
    applyAccessibilitySettings(false, false, false, false)
  }

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-maksab-blue text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Accessibility toggle button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-40 bg-maksab-blue hover:bg-maksab-blue/90 text-white rounded-full w-12 h-12 p-0 shadow-lg"
        aria-label="Accessibility settings"
      >
        <Accessibility className="h-6 w-6" />
      </Button>

      {/* Accessibility panel */}
      {isOpen && (
        <Card className="fixed top-20 right-4 z-50 w-80 shadow-2xl border-2 border-maksab-blue">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Accessibility</h3>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                aria-label="Close accessibility panel"
              >
                ×
              </Button>
            </div>

            <div className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Contrast className="h-4 w-4" />
                  <span className="text-sm">High Contrast</span>
                </div>
                <Button
                  onClick={toggleHighContrast}
                  variant={highContrast ? "default" : "outline"}
                  size="sm"
                  className="w-16"
                >
                  {highContrast ? "On" : "Off"}
                </Button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {largeText ? <ZoomIn className="h-4 w-4" /> : <ZoomOut className="h-4 w-4" />}
                  <span className="text-sm">Large Text</span>
                </div>
                <Button
                  onClick={toggleLargeText}
                  variant={largeText ? "default" : "outline"}
                  size="sm"
                  className="w-16"
                >
                  {largeText ? "On" : "Off"}
                </Button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {reducedMotion ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  <span className="text-sm">Reduced Motion</span>
                </div>
                <Button
                  onClick={toggleReducedMotion}
                  variant={reducedMotion ? "default" : "outline"}
                  size="sm"
                  className="w-16"
                >
                  {reducedMotion ? "On" : "Off"}
                </Button>
              </div>

              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <span className="text-sm">Dark Mode</span>
                </div>
                <Button
                  onClick={toggleDarkMode}
                  variant={darkMode ? "default" : "outline"}
                  size="sm"
                  className="w-16"
                >
                  {darkMode ? "On" : "Off"}
                </Button>
              </div>

              {/* Reset button */}
              <Button
                onClick={resetSettings}
                variant="outline"
                className="w-full mt-4"
                size="sm"
              >
                Reset to Default
              </Button>
            </div>

            {/* Accessibility info */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                This website is designed to be accessible to all users. 
                For additional assistance, please contact us.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}

// Keyboard navigation support
export function KeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with 'S' key
      if (event.key === 'S' && event.altKey) {
        const mainContent = document.getElementById('main-content')
        if (mainContent) {
          mainContent.focus()
          mainContent.scrollIntoView({ behavior: 'smooth' })
        }
      }

      // Open accessibility panel with 'A' key
      if (event.key === 'A' && event.altKey) {
        // Trigger accessibility panel open
        const accessibilityButton = document.querySelector('[aria-label="Accessibility settings"]') as HTMLButtonElement
        if (accessibilityButton) {
          accessibilityButton.click()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return null
}

// Focus management
export function FocusManager() {
  useEffect(() => {
    // Ensure focus is visible
    const style = document.createElement('style')
    style.textContent = `
      *:focus {
        outline: 2px solid #015DAB !important;
        outline-offset: 2px !important;
      }
      
      .high-contrast *:focus {
        outline: 3px solid #ffffff !important;
        outline-offset: 3px !important;
      }
    `
    document.head.appendChild(style)

    return () => document.head.removeChild(style)
  }, [])

  return null
}

// Screen reader announcements
export function ScreenReaderAnnouncements() {
  const [announcements, setAnnouncements] = useState<string[]>([])

  const announce = (message: string) => {
    setAnnouncements(prev => [...prev, message])
    
    // Remove announcement after 5 seconds
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(announcement => announcement !== message))
    }, 5000)
  }

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {announcements.map((announcement, index) => (
        <div key={index}>{announcement}</div>
      ))}
    </div>
  )
}

// Accessibility utilities
export const accessibilityUtils = {
  // Announce to screen readers
  announce: (message: string) => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    
    document.body.appendChild(announcement)
    
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  },

  // Check if element is visible to screen readers
  isVisibleToScreenReader: (element: HTMLElement) => {
    const style = window.getComputedStyle(element)
    return style.display !== 'none' && 
           style.visibility !== 'hidden' && 
           element.offsetWidth > 0 && 
           element.offsetHeight > 0
  },

  // Get accessible name for element
  getAccessibleName: (element: HTMLElement) => {
    return element.getAttribute('aria-label') ||
           element.getAttribute('aria-labelledby') ||
           element.getAttribute('title') ||
           element.textContent?.trim()
  }
} 