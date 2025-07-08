'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faCodepen, faAws } from '@fortawesome/free-brands-svg-icons'
import { faServer, faCode, faCloud, faCogs, faRocket, faShieldAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react'

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Mobile carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-scroll effect for mobile carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false) // Stop auto-play when user interacts
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % highlights.length)
  }

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? highlights.length - 1 : currentSlide - 1)
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

  const stats = [
    { label: 'Container Deployments', value: '10K+', icon: faDocker },
    { label: 'Lines of Code', value: '100K+', icon: faCode },
    { label: 'Cloud Services', value: '50+', icon: faCloud },
    { label: 'Years Experience', value: '3+', icon: faRocket },
  ]

  const highlights = [
    {
      icon: faCodepen,
      title: 'Container Orchestration Expert',
      description: 'Architected and deployed scalable microservices infrastructure using Kubernetes, achieving 99.9% uptime across production environments.',
    },
    {
      icon: faAws,
      title: 'Cloud Infrastructure Specialist',
      description: 'Designed and implemented cloud-native solutions on AWS, leveraging services like ECS, Lambda, and API Gateway for optimal performance.',
    },
    {
      icon: faServer,
      title: 'DevOps Pipeline Architect',
      description: 'Built robust CI/CD pipelines reducing deployment failures by 80% and enabling seamless integration across development teams.',
    },
    {
      icon: faShieldAlt,
      title: 'Security-First Approach',
      description: 'Implemented OAuth2 authentication and security best practices, ensuring enterprise-grade protection for applications serving 10K+ users.',
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-kubernetes-100 dark:bg-kubernetes-900/20 px-4 py-2 rounded-full mb-6">
            <FontAwesomeIcon icon={faDocker} className="w-5 h-5 text-kubernetes-600 dark:text-kubernetes-400" />
            <span className="text-kubernetes-600 dark:text-kubernetes-400 font-mono text-sm">
              kubectl describe --namespace=about
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
            Orchestrating digital symphonies where containers dance in perfect harmony.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-lg glass-effect kubernetes-glow"
            >
              <FontAwesomeIcon 
                icon={stat.icon} 
                className="w-8 h-8 text-kubernetes-500 dark:text-kubernetes-400 mb-3 mx-auto" 
              />
              <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Engineering Scalable Solutions
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I'm the kind of engineer who sees a broken system and thinks 'challenge accepted.' What excites me most? Building solutions that make people's lives easier, whether it's helping researchers connect across continents or ensuring oil tankers move smoothly across 20+ countries.
              </p>
              <p>
                What drives me? The moment when complex becomes simple. I recently spent weeks diving into CRDT 
                algorithms (think Google Docs magic) to help academics collaborate seamlessly. Sure, I could talk 
                about the technical details for hours, but what really matters is watching researchers discover 
                new connections they never knew existed. That's the human side of technology I love most.
              </p>
              <p>
                Fresh out of my Master's at NYU, but my real education came from those 2 AM debugging sessions 
                and the satisfaction of turning "it's impossible" into "it's deployed." I believe the best 
                engineering happens when you combine rigorous thinking with genuine empathy for the people using 
                your systems. I don't just write code, I create experiences that make complicated things feel effortless.
              </p>
            </div>

            {/* Technical Philosophy */}
            <div className="mt-8 p-6 bg-gradient-to-r from-kubernetes-50 to-docker-50 dark:from-kubernetes-900/20 dark:to-docker-900/20 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FontAwesomeIcon icon={faCogs} className="w-5 h-5 text-kubernetes-500 mr-2" />
                Engineering Philosophy
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                "Infrastructure should be invisible to users but bulletproof in reliability. 
                Every deployment should be a non-event, every system should self-heal, 
                and every line of code should contribute to a larger vision of seamless, scalable technology."
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            {/* Desktop Version - Hidden on Mobile */}
            <div className="hidden md:block space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start space-x-4 p-6 rounded-lg glass-effect card-hover"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-kubernetes-500 to-docker-500 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={highlight.icon} className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Carousel Version - Hidden on Desktop */}
            <div className="md:hidden w-full overflow-hidden">
              <div 
                ref={carouselRef}
                className="relative w-full max-w-full overflow-hidden rounded-lg"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                onTouchStart={() => setIsAutoPlaying(false)}
              >
                <div className="w-full overflow-hidden">
                  <motion.div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                  >
                    {highlights.map((highlight, index) => (
                      <div 
                        key={index} 
                        className="w-full flex-shrink-0"
                      >
                        <div className="px-3 w-full">
                          <motion.div
                            className="flex items-start space-x-3 p-4 rounded-lg glass-effect card-hover w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-gradient-to-r from-kubernetes-500 to-docker-500 rounded-lg flex items-center justify-center">
                                <FontAwesomeIcon icon={highlight.icon} className="w-5 h-5 text-white" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0 pr-2">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm leading-tight break-words">
                                {highlight.title}
                              </h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed break-words">
                                {highlight.description}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-1 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 opacity-80 hover:opacity-100 transition-opacity touch-manipulation"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 opacity-80 hover:opacity-100 transition-opacity touch-manipulation"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                </button>

                {/* Dot Indicators */}
                <div className="flex justify-center space-x-2 mt-4 px-4">
                  {highlights.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors touch-manipulation ${
                        currentSlide === index 
                          ? 'bg-kubernetes-500' 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Cloud */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Technology Ecosystem
          </h3>
          <div className="tech-ecosystem-container flex flex-wrap justify-center gap-3">
            {[
              'Kubernetes', 'Docker', 'AWS', 'React', 'Node.js', 'TypeScript', 'Python', 
              'PostgreSQL', 'Redis', 'Jenkins', 'Terraform', 'GitHub Actions', 'Salesforce',
              'Next.js', 'TailwindCSS', 'MongoDB', 'Elasticsearch', 'API Gateway', 'Lambda'
            ].map((tech, index) => (
              <motion.span
                key={index}
                className="tech-tag px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-kubernetes-100 hover:text-kubernetes-700 dark:hover:bg-kubernetes-900/20 dark:hover:text-kubernetes-400 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}