'use client'

import { useEffect } from 'react'

export function ForceTheme() {
  useEffect(() => {
    // Force dark theme on mount and whenever the component renders
    const forceDarkTheme = () => {
      const html = document.documentElement
      
      // Add dark class and remove light class
      html.classList.add('dark')
      html.classList.remove('light')
      
      // Set data attributes
      html.setAttribute('data-theme', 'dark')
      html.setAttribute('data-color-mode', 'dark')
      
      // Update localStorage
      try {
        localStorage.setItem('theme', 'dark')
        localStorage.setItem('nextra-theme', 'dark')
        localStorage.setItem('color-mode', 'dark')
      } catch (e) {
        // localStorage might not be available
      }
    }

    // Force immediately
    forceDarkTheme()

    // Set up observers to catch any theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && 
            (mutation.attributeName === 'class' || 
             mutation.attributeName === 'data-theme')) {
          const html = document.documentElement
          if (!html.classList.contains('dark') || 
              html.getAttribute('data-theme') !== 'dark') {
            forceDarkTheme()
          }
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme', 'data-color-mode']
    })

    // Listen for storage changes
    const handleStorageChange = () => {
      forceDarkTheme()
    }
    
    window.addEventListener('storage', handleStorageChange)

    return () => {
      observer.disconnect()
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return null
}
