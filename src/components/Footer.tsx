'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCode, faRocket, faEnvelope, faArrowUp, faTerminal, faHome } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Check if user is near the bottom (within 200px of end)
      const isNearBottom = scrollY + windowHeight >= documentHeight - 200
      setIsAtBottom(isNearBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#orchestration-hub' },
        { name: 'About Me', href: '#cluster-manifest' },
        { name: 'Work Experience', href: '#runtime-environments' },
        { name: 'Projects', href: '#container-registry' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Email', href: 'mailto:jr6421@nyu.edu' },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/jayasabarishreddyr' },
        { name: 'GitHub', href: 'https://github.com/sabarishreddy99' },
        { name: 'Portfolio', href: 'https://sabarishreddyrj.gradevitian.in' },
      ]
    }
  ]

  const technologies = [
    'Kubernetes', 'Docker', 'AWS', 'React', 'Node.js', 'TypeScript', 
    'Python', 'PostgreSQL', 'Redis', 'Jenkins', 'Terraform'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-6"
            >
                <FontAwesomeIcon icon={faTerminal} className="w-8 h-8 text-kubernetes-500" />
              <span className="font-bold text-xl gradient-text">Jaya Sabarish Reddy R</span>
            </motion.div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Software Development Engineer
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/sabarishreddy99"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/jayasabarishreddyr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:jr6421@nyu.edu"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-kubernetes-600 hover:bg-kubernetes-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-semibold text-lg mb-4 text-kubernetes-400">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Terminal Output */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="terminal max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <FontAwesomeIcon icon={faTerminal} className="w-5 h-5 text-kubernetes-500" />
              <span className="text-gray-400 font-mono text-sm">Terminal Output</span>
            </div>
            <div className="mb-2">
              <span className="text-green-400">kubectl@portfolio-cluster:~$</span> kubectl get pods --all-namespaces
            </div>
            <div className="text-gray-300 text-sm space-y-1">
              <div>NAMESPACE     NAME                    READY   STATUS    RESTARTS   AGE</div>
              <div>about         cluster-manifest        1/1     Running   0          {currentYear - 2021}y</div>
              <div>experience    runtime-environments    1/1     Running   0          3y</div>
              <div>projects      container-registry      1/1     Running   0          6y</div>
              <div>skills        service-mesh            1/1     Running   0          1y</div>
              <div>contact       network-policies        1/1     Running   0          available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 text-gray-400 text-sm text-center md:text-left">
              <span>© {currentYear} Jaya Sabarish Reddy Remala</span>
              <span className="hidden md:inline">|</span>
              <span>Designed with a Docker and Kubernetes mindset.</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm hidden sm:flex items-center">
                Back to <FontAwesomeIcon icon={faHome} className="w-3 h-3 text-docker-400 mx-1" />
              </span>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-kubernetes-600 hover:bg-kubernetes-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <FontAwesomeIcon icon={faArrowUp} className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Status Indicator - Hidden on Mobile */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ 
          scale: isAtBottom ? 0 : 1,
          opacity: isAtBottom ? 0 : 1
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed bottom-6 left-6 z-40 hidden md:block"
      >
        <div className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span>Available for Deployment</span>
        </div>
      </motion.div>
    </footer>
  )
}