'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faCalendarAlt, faMapMarkerAlt, faBriefcase, faRocket, faChartLine, faUsers, faCogs, faAtom } from '@fortawesome/free-solid-svg-icons'

export default function Experience() {
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  const experiences = [
    {
      title: 'Software Engineer Intern & Web Applications Lead',
      company: 'NYU IT - High Speed Research Network',
      location: 'New York, NY',
      period: 'May 2024 – May 2025',
      type: 'kubernetes',
      achievements: [
        'Directed Agile team of 5, boosting sprint throughput by 40% and delivering 3 scalable research tools with React, Node.js, and PostgreSQL',
        'Engineered the Research Connections app, enhancing academic collaboration and increasing researcher match accuracy by 73% using Python ETL and Elsevier Scopus APIs',
        'Orchestrated secure deployments with OAuth2 and Kubernetes Helm charts, serving 10K+ NYU users with zero downtime',
        'Automated CI/CD pipelines (GitHub Actions, Jenkins), reducing deployment failures by 80% across staging and prod environments'
      ],
      skills: ['Kubernetes', 'Docker', 'React', 'Node.js', 'PostgreSQL', 'Python', 'OAuth2', 'Jenkins', 'GitHub Actions']
    },
    {
      title: 'Teaching Assistant – ML & DS, Algorithms & DS for Bioinformatics',
      company: 'New York University - College of Arts & Science',
      location: 'New York, NY',
      period: 'Sep 2024 – May 2025',
      type: 'docker',
      achievements: [
        'Guided 50+ graduate students across two core courses, facilitating discussions and providing in-depth technical support during office hours and via Ed Discussion',
        'Streamlined grading by creating rubrics and automation tools, reducing assignment turnaround time by 40% and ensuring consistent, timely feedback'
      ],
      skills: ['Machine Learning', 'Data Structures', 'Algorithms', 'Bioinformatics', 'Python', 'Academic Mentoring']
    },
    {
      title: 'Software Development Engineer',
      company: 'Wipro Ltd (Client: Shell PLC)',
      location: 'Bengaluru, India',
      period: 'Jul 2021 – Feb 2023',
      type: 'kubernetes',
      achievements: [
        'Improved maritime logistics tracking by 39% via scalable SOQL, SOSL, SF Triggers, Apex services and LWC across 20+ countries',
        'Streamlined invoice processing, cutting delays by 25% by integrating REST APIs between Salesforce and SAP systems for 1K+ clients',
        'Reduced SLA violations by 30% by designing real-time dashboards to track 200+ crude oil stations and maritime data',
        'Reduced ServiceNow incidents by 45% by automating an internal self-service tool handling 5K+ monthly interactions',
        'Achieved a 91% deployment success rate by optimizing CI/CD flows using Git, Jenkins, and Salesforce DX tools',
        'Enhanced code quality, reducing defects by 25% through extensive unit testing and structured peer reviews'
      ],
      skills: ['Salesforce', 'Apex', 'Lightning Web Components', 'REST APIs', 'SAP Integration', 'Jenkins', 'Git', 'SOQL', 'SOSL']
    }
  ]

  const getIcon = (type: string) => {
    return type === 'kubernetes' ? faCodepen : faAtom
  }

  const getGlowClass = (type: string) => {
    return type === 'kubernetes' ? 'kubernetes-glow' : 'docker-glow'
  }

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-docker-100 dark:bg-docker-900/20 px-4 py-2 rounded-full mb-6">
            <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5 text-docker-600 dark:text-docker-400" />
            <span className="text-docker-600 dark:text-docker-400 font-mono text-sm">
              kubectl get pods --namespace=experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Runtime Environments
          </h2>
          <p className="text-lg font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Scaling Impact. Shipping Reliability.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-kubernetes-500 via-docker-500 to-kubernetes-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Icon */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${getGlowClass(exp.type)} ${
                    exp.type === 'kubernetes' 
                      ? 'bg-kubernetes-500 text-white' 
                      : 'bg-docker-500 text-white'
                  }`}
                >
                  <FontAwesomeIcon icon={getIcon(exp.type)} className="w-6 h-6" />
                </motion.div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className={`glass-effect rounded-lg p-6 card-hover ${getGlowClass(exp.type)}`}>
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 mt-1 sm:mt-0">
                        <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <FontAwesomeIcon icon={faRocket} className="w-4 h-4 mr-2 text-kubernetes-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.1 * achievementIndex }}
                          className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-kubernetes-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <FontAwesomeIcon icon={faCogs} className="w-4 h-4 mr-2 text-docker-500" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            exp.type === 'kubernetes'
                              ? 'bg-kubernetes-100 text-kubernetes-700 dark:bg-kubernetes-900/20 dark:text-kubernetes-400'
                              : 'bg-docker-100 text-docker-700 dark:bg-docker-900/20 dark:text-docker-400'
                          }`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-lg glass-effect kubernetes-glow"
            >
              <FontAwesomeIcon icon={faChartLine} className="w-8 h-8 text-kubernetes-500 mb-3 mx-auto" />
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">73%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Performance Improvement</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-lg glass-effect docker-glow"
            >
              <FontAwesomeIcon icon={faUsers} className="w-8 h-8 text-docker-500 mb-3 mx-auto" />
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">10K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Users Served</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-lg glass-effect kubernetes-glow"
            >
              <FontAwesomeIcon icon={faRocket} className="w-8 h-8 text-kubernetes-500 mb-3 mx-auto" />
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">80%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Deployment Success Rate</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-lg glass-effect docker-glow"
            >
              <FontAwesomeIcon icon={faCogs} className="w-8 h-8 text-docker-500 mb-3 mx-auto" />
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Countries Deployed</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}