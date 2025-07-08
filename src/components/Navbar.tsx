'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faBars, faTimes, faBarcode, faHotdog, faSuitcase, faGraduationCap, faToolbox, faTools, faMicrophone, faCoffee, faCodeFork, faCode, faCodeMerge, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faDocker, faCodepen, faStackOverflow, faCodiepie } from '@fortawesome/free-brands-svg-icons'

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigationItems = [
    { 
      id: 'orchestration-hub', 
      label: 'Home', 
      icon: faCodepen
    },
    { 
      id: 'cluster-manifest', 
      label: 'About', 
      icon: faHotdog
    },
    { 
      id: 'runtime-environments', 
      label: 'Experience', 
      icon: faSuitcase
    },
    { 
      id: 'deployment-history', 
      label: 'Education', 
      icon: faGraduationCap
    },
    { 
      id: 'container-registry', 
      label: 'Projects', 
      icon: faStackOverflow
    },
    { 
      id: 'service-mesh', 
      label: 'Skills', 
      icon: faTools
    },
    { 
      id: 'network-policies', 
      label: 'Contact', 
      icon: faMicrophone
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 cursor-pointer mr-8"
            onClick={() => scrollToSection('orchestration-hub')
            }
          >
            <div className="relative">
              <FontAwesomeIcon 
                icon={faCoffee} 
                className="w-8 h-8 text-kubernetes-600 dark:text-kubernetes-400" 
              />
              <FontAwesomeIcon 
                icon={faCodeBranch} 
                className="w-6 h-6 text-docker-600 dark:text-docker-400 absolute -bottom-1 -right-1 icon-rotate" 
              />
            </div>
            <span className="flex items-baseline">
              {/* <span className="its-text">its</span> */}
              <span className="jaya-logo">Jaya</span>
            </span>
          </motion.div>

          {/* Desktop and Tablet Navigation - Consistent across all screen sizes */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-kubernetes-600 dark:text-kubernetes-400 bg-kubernetes-50 dark:bg-kubernetes-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-kubernetes-600 dark:hover:text-kubernetes-400'
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FontAwesomeIcon 
                icon={theme === 'dark' ? faSun : faMoon} 
                className="w-5 h-5" 
              />
            </motion.button>

            {/* Mobile Menu Button - Show on mobile only */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FontAwesomeIcon 
                icon={isMenuOpen ? faTimes : faBars} 
                className="w-5 h-5" 
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-colors w-full ${
                    activeSection === item.id
                      ? 'text-kubernetes-600 dark:text-kubernetes-400 bg-kubernetes-50 dark:bg-kubernetes-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-kubernetes-600 dark:hover:text-kubernetes-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}