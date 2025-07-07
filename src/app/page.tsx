'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  const [activeSection, setActiveSection] = useState('orchestration-hub')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['orchestration-hub', 'cluster-manifest', 'runtime-environments', 'deployment-history', 'container-registry', 'service-mesh', 'network-policies']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 overflow-hidden">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 px-6 text-center w-full max-w-xs mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 border-4 border-kubernetes-500 border-t-transparent rounded-full animate-spin flex-shrink-0"></div>
          <motion.p
            className="text-kubernetes-400 font-mono text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            kubectl apply -f jaya's-portfolio.yaml
          </motion.p>
          <motion.p
            className="text-gray-400 text-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Initializing container orchestration...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <div className="container-grid min-h-screen w-full max-w-full overflow-x-hidden">
        <Navbar activeSection={activeSection} />
        <main className="w-full max-w-full overflow-x-hidden">
          <section id="orchestration-hub">
            <Hero />
          </section>
          <section id="cluster-manifest">
            <About />
          </section>
          <section id="runtime-environments">
            <Experience />
          </section>
          <section id="deployment-history">
            <Education />
          </section>
          <section id="container-registry">
            <Projects />
          </section>
          <section id="service-mesh">
            <Skills />
          </section>
          <section id="network-policies">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}