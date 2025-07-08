'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faDocker, 
  faCodepen, 
  faAws, 
  faReact, 
  faNode, 
  faJs, 
  faPython, 
  faGithub,
  faGitAlt,
  faJava,
  faSalesforce
} from '@fortawesome/free-brands-svg-icons'
import { 
  faCode, 
  faDatabase, 
  faServer, 
  faCogs, 
  faCloud, 
  faShieldAlt,
  faRocket,
  faTools,
  faGraduationCap,
  faSuitcase,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react'

export default function Skills() {
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
      setCurrentSlide((prev) => (prev + 1) % skillCategories.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false) // Stop auto-play when user interacts
    setTimeout(() => setIsAutoPlaying(true), 8000) // Resume auto-play after 8 seconds
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % skillCategories.length)
  }

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? skillCategories.length - 1 : currentSlide - 1)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const skillCategories = [
    {
      title: 'Container Orchestration',
      icon: faCodepen,
      type: 'kubernetes',
      description: 'Scalable microservices and infrastructure automation',
      skills: [
        { name: 'Kubernetes', icon: faCodepen },
        { name: 'Docker', icon: faDocker },
        { name: 'Helm Charts', icon: faCogs },
        { name: 'Microservices', icon: faServer },
        { name: 'Service Mesh', icon: faShieldAlt },
        { name: 'Container Registry', icon: faDatabase }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      icon: faAws,
      type: 'docker',
      description: 'Enterprise-grade cloud solutions and DevOps practices',
      skills: [
        { name: 'AWS (ECS, Lambda, SQS, SNS, S3)', icon: faAws },
        { name: 'API Gateway', icon: faServer },
        { name: 'Terraform', icon: faCode },
        { name: 'Jenkins', icon: faCogs },
        { name: 'GitHub Actions', icon: faGithub },
        { name: 'Infrastructure as Code', icon: faCloud }
      ]
    },
    {
      title: 'Frontend Development',
      icon: faReact,
      type: 'kubernetes',
      description: 'Modern web applications with responsive design',
      skills: [
        { name: 'React.js', icon: faReact },
        { name: 'Next.js', icon: faReact },
        { name: 'TypeScript', icon: faJs },
        { name: 'JavaScript', icon: faJs },
        { name: 'TailwindCSS', icon: faCode },
        { name: 'HTML/CSS', icon: faCode }
      ]
    },
    {
      title: 'Backend Development',
      icon: faNode,
      type: 'docker',
      description: 'Robust server-side solutions and APIs',
      skills: [
        { name: 'Node.js', icon: faNode },
        { name: 'Python', icon: faPython },
        { name: 'Java', icon: faJava },
        { name: 'REST APIs', icon: faServer },
        { name: 'GraphQL', icon: faDatabase },
        { name: 'Microservices Architecture', icon: faCogs }
      ]
    },
    {
      title: 'Database & Storage',
      icon: faDatabase,
      type: 'kubernetes',
      description: 'Data management and storage solutions',
      skills: [
        { name: 'PostgreSQL', icon: faDatabase },
        { name: 'MongoDB', icon: faDatabase },
        { name: 'Redis', icon: faDatabase },
        { name: 'Elasticsearch', icon: faDatabase },
        { name: 'DynamoDB', icon: faAws },
        { name: 'Oracle', icon: faDatabase }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: faTools,
      type: 'docker',
      description: 'Development workflow and automation tools',
      skills: [
        { name: 'Git', icon: faGitAlt },
        { name: 'Salesforce', icon: faSalesforce },
        { name: 'ServiceNow', icon: faCogs },
        { name: 'JIRA', icon: faTools },
        { name: 'Confluence', icon: faTools },
        { name: 'Postman', icon: faCode }
      ]
    }
  ]

  const certifications = [
    { name: 'AWS Solutions Architect', status: 'In Progress', icon: faAws },
    { name: 'Kubernetes Administrator', status: 'Planned', icon: faCodepen },
    { name: 'Docker Certified Associate', status: 'Planned', icon: faDocker },
  ]

  const getGlowClass = (type: string) => {
    return type === 'kubernetes' ? 'kubernetes-glow' : 'docker-glow'
  }

  const getCardColor = (type: string) => {
    return type === 'kubernetes' 
      ? 'from-kubernetes-500 to-kubernetes-600' 
      : 'from-docker-500 to-docker-600'
  }

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
            <FontAwesomeIcon icon={faCogs} className="w-5 h-5 text-kubernetes-600 dark:text-kubernetes-400" />
            <span className="text-kubernetes-600 dark:text-kubernetes-400 font-mono text-sm">
              kubectl describe services --all-namespaces
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            <FontAwesomeIcon icon={faTools} className="inline-block mr-2 text-kubernetes-300" />
            Technical Skills
          </h2>
          <p className="text-lg font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Code, container, deploy, repeat - powered by caffeine.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div variants={itemVariants}>
          {/* Desktop Version - Hidden on Mobile */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`glass-effect rounded-lg overflow-hidden card-hover ${getGlowClass(category.type)}`}
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${getCardColor(category.type)} p-6 text-white`}>
                  <div className="flex items-center space-x-3 mb-3">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={category.icon} className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-white/90">{category.description}</p>
                </div>

                {/* Skills List */}
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <FontAwesomeIcon 
                          icon={skill.icon} 
                          className={`w-4 h-4 ${
                            category.type === 'kubernetes' 
                              ? 'text-kubernetes-500' 
                              : 'text-docker-500'
                          }`} 
                        />
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel Version - Hidden on Desktop */}
          <div className="md:hidden mb-16">
            <div 
              ref={carouselRef}
              className="relative w-full max-w-full overflow-hidden rounded-lg"
              onTouchStart={() => setIsAutoPlaying(false)}
            >
              <div className="w-full overflow-hidden">
                <motion.div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {skillCategories.map((category, index) => (
                    <div 
                      key={index} 
                      className="w-full flex-shrink-0"
                    >
                      <div className="px-4 w-full">
                        <motion.div
                          className={`glass-effect rounded-lg overflow-hidden card-hover ${getGlowClass(category.type)} w-full`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {/* Category Header */}
                          <div className={`bg-gradient-to-r ${getCardColor(category.type)} p-6 text-white`}>
                            <div className="flex items-center space-x-3 mb-3">
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                              >
                                <FontAwesomeIcon icon={category.icon} className="w-6 h-6" />
                              </motion.div>
                              <div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                              </div>
                            </div>
                            <p className="text-sm text-white/90">{category.description}</p>
                          </div>

                          {/* Skills List */}
                          <div className="p-6">
                            <div className="grid grid-cols-1 gap-3">
                              {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                  key={skillIndex}
                                  whileHover={{ scale: 1.02, x: 5 }}
                                  className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                  <FontAwesomeIcon 
                                    icon={skill.icon} 
                                    className={`w-4 h-4 ${
                                      category.type === 'kubernetes' 
                                        ? 'text-kubernetes-500' 
                                        : 'text-docker-500'
                                    }`} 
                                  />
                                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {skill.name}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
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
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 opacity-80 hover:opacity-100 transition-opacity touch-manipulation"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 opacity-80 hover:opacity-100 transition-opacity touch-manipulation"
              >
                <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>

              {/* Dot Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {skillCategories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors touch-manipulation ${
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

       

        {/* Deployment Release History */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 px-4">
            Deployment Release History
          </h3>
          
          {/* Mobile Timeline - Vertical Layout */}
          <div className="block lg:hidden px-4">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-kubernetes-500 via-docker-500 to-kubernetes-500"></div>
              <div className="space-y-6">
                {[
                  { year: '2021', tech: 'Bachelor\'s @ VIT-Vellore | SDE @ Wipro', icon: faGraduationCap },
                  { year: '2022', tech: 'SDE @ Wipro | SDE @ Shell', icon: faSuitcase },
                  { year: '2023', tech: 'SDE @ Shell | MS CS @ NYU', icon: faSuitcase },
                  { year: '2024', tech: 'MS CS @ NYU | SDE @ NYU IT - HSRN', icon: faGraduationCap },
                  { year: '2025', tech: 'MS CS @ NYU | SDE @ NYU IT - HSRN', icon: faRocket }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 relative"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-kubernetes-500 to-docker-500 rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0 z-10">
                      <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md">
                      <div className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">{item.year}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 break-words">{item.tech}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Timeline - Horizontal Layout */}
          <div className="hidden lg:block">
            <div className="relative px-4">
              <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-kubernetes-500 via-docker-500 to-kubernetes-500"></div>
              <div className="flex justify-center space-x-4 xl:space-x-8">
                {[
                  { year: '2021', tech: 'Bachelor\'s @ VIT-Vellore | SDE @ Wipro', icon: faGraduationCap },
                  { year: '2022', tech: 'SDE @ Wipro | SDE @ Shell', icon: faSuitcase },
                  { year: '2023', tech: 'SDE @ Shell | MS CS @ NYU', icon: faSuitcase },
                  { year: '2024', tech: 'MS CS @ NYU | SDE @ NYU IT - HSRN', icon: faGraduationCap },
                  { year: '2025', tech: 'MS CS @ NYU | SDE @ NYU IT - HSRN', icon: faRocket }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center max-w-32"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-kubernetes-500 to-docker-500 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                      <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-bold text-gray-800 dark:text-gray-200">{item.year}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 text-center break-words">{item.tech}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}