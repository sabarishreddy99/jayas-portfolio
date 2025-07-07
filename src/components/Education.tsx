'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faCodepen, faSalesforce, faAws } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap, faDollarSign, faLuggageCart, faCalendarAlt, faMapMarkerAlt, faStar, faCode, faDatabase, faCogs, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { getImagePath } from '@/utils/images'

export default function Education() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const educationData = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'New York University',
      location: 'New York City, NY, USA',
      period: 'Sep 2023 – May 2025',
      gpa: '3.8 / 4.0',
      type: 'kubernetes',
      coursework: [
        'Design Analysis & Algorithms',
        'Software Engineering',
        'Machine Learning',
        'Database Systems',
        'Operating Systems',
        'Human-Computer Interaction'
      ],
      highlights: [
        'Specialized in cloud computing and distributed systems',
        'Research focus on container orchestration and microservices',
        'Active participant in graduate-level algorithm design courses',
        'Contributing to academic research in collaborative computing'
      ]
    },
    {
      degree: 'Bachelor of Technology in Electrical and Electronics Engineering',
      school: 'VIT University',
      location: 'Vellore, Tamil Nadu, India',
      period: 'Jul 2017 – May 2021',
      gpa: '3.78 / 4.0',
      type: 'docker',
      coursework: [
        'Data Structures & Algorithms',
        'Neural Networks',
        'Embedded Systems',
        'Computer Networks',
        'Digital Signal Processing',
        'Control Systems'
      ],
      highlights: [
        'Strong foundation in computer science fundamentals',
        'Developed early expertise in programming and algorithms',
        'Built projects combining hardware and software systems',
        'Leadership roles in technical student organizations'
      ]
    }
  ]

  const certifications = [
    {
      name: 'Salesforce Platform Developer I',
      status: 'Completed',
      icon: faSalesforce
    },
    {
      name: 'AWS Certified Solutions Architect - Associate',
      status: 'In Progress',
      icon: faAws
    }
  ]

  const getIcon = (type: string) => {
    return type === 'kubernetes' ? faCodepen : faDocker
  }

  const getGlowClass = (type: string) => {
    return type === 'kubernetes' ? 'kubernetes-glow' : 'docker-glow'
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
            <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5 text-kubernetes-600 dark:text-kubernetes-400" />
            <span className="text-kubernetes-600 dark:text-kubernetes-400 font-mono text-sm">
              kubectl get deployments --namespace=education
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Deployment History
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My knowledge base compiled from two release cycles: VIT's electrical engineering bootcamp 
            and NYU's advanced algorithms laboratory
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8 mb-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`glass-effect rounded-lg p-8 card-hover ${getGlowClass(edu.type)}`}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className={`w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden ${
                        edu.type === 'kubernetes' 
                          ? 'bg-white text-black' 
                          : 'bg-white text-black'
                      }`}
                    >
                        <Image 
                            src={getImagePath(edu.type === 'kubernetes' ? '/nyu-logo.jpg' : '/vit-logo.jpg')} 
                            alt={`${edu.school} logo`} 
                            width={64} 
                            height={64} 
                            className="w-full h-full object-cover rounded-lg"
                        />  
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {edu.degree}
                      </h3>
                      <div className="space-y-2 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4" />
                            <span className="font-medium">{edu.school}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-500" />
                            <span className="font-medium">GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <FontAwesomeIcon icon={faStar} className="w-4 h-4 mr-2 text-kubernetes-500" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <motion.li
                          key={highlightIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.1 * highlightIndex }}
                          className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-kubernetes-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Coursework */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                    <FontAwesomeIcon icon={faCode} className="w-4 h-4 mr-2 text-docker-500" />
                    Core Coursework
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <motion.div
                        key={courseIndex}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                          edu.type === 'kubernetes'
                            ? 'bg-kubernetes-50 text-kubernetes-700 dark:bg-kubernetes-900/10 dark:text-kubernetes-400 hover:bg-kubernetes-100 dark:hover:bg-kubernetes-900/20'
                            : 'bg-docker-50 text-docker-700 dark:bg-docker-900/10 dark:text-docker-400 hover:bg-docker-100 dark:hover:bg-docker-900/20'
                        }`}
                      >
                        {course}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Learning */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="glass-effect rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
              <FontAwesomeIcon icon={faCogs} className="w-5 h-5 mr-3 text-kubernetes-500" />
              Professional Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={cert.icon} className="w-5 h-5 text-kubernetes-500" />
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {cert.name}
                    </span>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    cert.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                  }`}>
                    {cert.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="glass-effect rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5 mr-3 text-docker-500" />
              Leadership & Academic Excellence
            </h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gradient-to-r from-kubernetes-50 to-docker-50 dark:from-kubernetes-900/20 dark:to-docker-900/20 rounded-lg"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5 text-kubernetes-500" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Graduate Teaching Assistant
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Selected to mentor 50+ graduate students in ML & DS, and Algorithms & DS for Bioinformatics
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gradient-to-r from-docker-50 to-kubernetes-50 dark:from-docker-900/20 dark:to-kubernetes-900/20 rounded-lg"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <FontAwesomeIcon icon={faLuggageCart} className="w-5 h-5 text-docker-500" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Head of Operations at Graduate Indian Student Association (GISA)
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Orchestrated logistics and crowd management for NYU cultural events with 1K+ attendees, contributing to award-winning initiatives that earned GISA multiple honors, including Outstanding Inclusivity and Community Development.

                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gradient-to-r from-kubernetes-50 to-docker-50 dark:from-kubernetes-900/20 dark:to-docker-900/20 rounded-lg"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <FontAwesomeIcon icon={faDollarSign} className="w-5 h-5 text-kubernetes-500" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Head Of Finance at VIT Animation Club
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Directed budgeting for animation initiatives and co-led a 40+ member team to host creative tech workshops, contributing to the club’s 5-star certification from the Office of Student Engagement & Affairs.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}