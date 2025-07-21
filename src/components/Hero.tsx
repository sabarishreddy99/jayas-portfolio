'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhone, faDownload, faTerminal, faBriefcase, faBarcode, faGraduationCap, faCode, faDollarSign, faCopy } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { getImagePath } from '@/utils/images'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const email = "jr6421@nyu.edu"
  const taglineText = "Simplifying complexity with Docker builds and Kubernetes brains."
  const words = taglineText.split(' ')

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => {
          const newText = prev + (prev ? ' ' : '') + words[currentWordIndex]
          return newText
        })
        setCurrentWordIndex(prev => prev + 1)
      }, 400) // Slower, more formal timing

      return () => clearTimeout(timer)
    } else {
      setIsTypingComplete(true)
    }
  }, [currentWordIndex, words])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 mt-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        {/* Profile Image */}
        <motion.div
          variants={iconVariants}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-kubernetes-500 dark:ring-kubernetes-400 shadow-xl">
              {/* Placeholder for profile image */}
                <Image 
                    src={getImagePath("/sabari-avtar-portfolio.jpg")} 
                    alt="Jaya Sabarish Reddy Remala" 
                    width={160} 
                    height={160} 
                    className="w-full h-full object-cover"
              />
              {/* <div className="w-full h-full bg-gradient-to-br from-kubernetes-500 to-docker-500 flex items-center justify-center">
                <span className="text-white text-4xl md:text-5xl font-bold">JR</span>
              </div> */}
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2 w-12 h-12 bg-kubernetes-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <FontAwesomeIcon icon={faCodepen} className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-2 -left-2 w-10 h-10 bg-docker-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <FontAwesomeIcon icon={faDocker} className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-2">
            <span className="font-mono text-primary-900 dark:text-kubernetes-400">
              <FontAwesomeIcon icon={faTerminal} className="mr-1 text-zinc-950  dark:text-gray-400" />
              <FontAwesomeIcon icon={faDollarSign} className="mr-1 text-zinc-950 dark:text-gray-400" />
              kubectl get engineer
            </span>
          </div>
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-4 mt-4">
            <span className="gradient-text gradient-text-animated">
              Hi, I'm Jaya{" "}
                👋
    
            </span>
          </h1>
         
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 dark:text-gray-300 mb-6 tracking-wide leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block">
              {displayedText}
            </span>
          </motion.h2>
          
  
        </motion.div>

        {/* Status Cards */}
        <motion.div 
          variants={itemVariants} 
          className="status-cards-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-2 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="status-card glass-effect rounded-lg p-6 kubernetes-glow"
          >
            <FontAwesomeIcon icon={faBriefcase} className="status-icon w-8 h-8 text-kubernetes-500 mb-3" />
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">SDE</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              NYU IT - HSRN
            </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Shell PLC
            </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Wipro Limited
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="status-card glass-effect rounded-lg p-6 docker-glow"
          >
            <FontAwesomeIcon icon={faGraduationCap} className="status-icon w-8 h-8 text-docker-500 mb-3" />
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Academia</h3>
             <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              CS @ New York University
            </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              EEE @ VIT University
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="status-card glass-effect rounded-lg p-6 kubernetes-glow"
          >
             <FontAwesomeIcon icon={faCode} className="status-icon w-8 h-8 text-docker-500 mb-3" />
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Core Strengths</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Full-Stack Development | 
              DevOps & Infrastructure | 
              OOP & DSA | 
              Cloud Computing
            </p>
          </motion.div>
        </motion.div>


                {/* Terminal Command */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="terminal text-left">
            <FontAwesomeIcon icon={faTerminal} className="mr-2 text-green-400" />
            <div className="mb-2">
              <span className="text-green-400">user@kubernetes-cluster:~$</span> kubectl describe engineer jaya
            </div>
            <div className="text-gray-300 text-sm">
              <div>First Name: Jaya Sabarish Reddy</div>
              <div>Last Name: Remala</div>
              <div>Capabilities: SDE, Full-Stack, Cloud & DevOps</div>
              <div>Experience: 3+ YOE</div>
            <div>Status: Open to US opportunities</div>
              <div>Ready: True</div>
            </div>
          </div>
        </motion.div>



        {/* Contact Info */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-8 text-gray-600 dark:text-gray-400 mt-4"
        >
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 text-kubernetes-500" />
            <span className="text-sm">New York City, NY</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-docker-500" />
            <span className="text-sm">+1 (5*6) 9*7-8*27</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-kubernetes-500" />
            <span className="text-sm">jr6421@nyu.edu</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <div className="tooltip-container">
            <div className="relative inline-flex">
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-kubernetes-600 hover:bg-kubernetes-700 text-white px-6 py-3 rounded-l-lg font-medium transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                <span>Deploy Connection</span>
              </motion.a>
              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-3 py-3 rounded-r-lg font-medium transition-all duration-300 border-l border-white/20 ${
                  copied 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-kubernetes-600 hover:bg-kubernetes-700 text-white'
                }`}
              >
                <FontAwesomeIcon icon={faCopy} className={`w-4 h-4 ${copied ? 'animate-pulse' : ''}`} />
              </motion.button>
            </div>
            <div className="tooltip">
              {copied ? 'Email copied to clipboard!' : 'Click to send email or copy address'}
            </div>
          </div>

          <div className="tooltip-container">
            <motion.a
              href="https://drive.google.com/drive/folders/1vm35z-6VQjtO9A8ZBgCvvSP_7_POPTrV?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 border-2 border-docker-600 text-docker-600 dark:text-docker-400 hover:bg-docker-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
              <span>Download Manifest</span>
            </motion.a>
            <div className="tooltip">
              My resume
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-2"
        >
          <motion.a
            href="https://github.com/sabarishreddy99"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="social-link social-link-github w-12 h-12 bg-gray-800 dark:bg-gray-700 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/jayasabarishreddyr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="social-link social-link-linkedin w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
          </motion.a>
        </motion.div>


      </motion.div>
    </section>
  )
}