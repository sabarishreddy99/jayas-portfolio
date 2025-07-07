'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faCodepen, faGithub, faAws, faReact, faNode } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faCode, faUsers, faRocket, faServer, faDatabase, faCogs } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

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

  const projects = [
    {
      title: 'CodeCollab – Real-time Code Editor',
      description: 'Built a real-time collaborative code editor using CRDT (Yjs), enabling concurrent editing in 3+ languages with sub-second sync latency.',
      type: 'kubernetes',
      category: 'Full Stack Application',
      technologies: ['Next.js', 'TypeScript', 'Yjs', 'AWS', 'Redis', 'Docker', 'NGINX'],
      features: [
        'Architected backend with AWS ECS (Fargate), API Gateway, and Lambda, scaling to 2K+ ops/sec with zero downtime',
        'Integrated Redis, SQS/SNS, and S3 for messaging, caching, and session durability, reducing latency by 40%',
        'Automated infrastructure deployment using Terraform and GitHub Actions, ensuring seamless CI/CD',
        'Implemented real-time collaboration with conflict-free replicated data types (CRDT)'
      ],
      metrics: {
        users: '500+',
        performance: '40% latency reduction',
        uptime: '99.9%',
        scale: '2K+ ops/sec'
      },
      links: {
        github: 'https://github.com/sabarishreddy99/CodeCollab',
        demo: 'https://www.youtube.com/watch?v=vL2KroJkakg'
      },
      status: 'Production'
    },
    {
      title: 'gradeVITian – Grade Forecasting Tool',
      description: 'Developed an exam prediction tool serving 14K+ users; ranked #2 on Google, attracted 16K+ monthly organic visits, and actively maintained it in production for 6+ years.',
      type: 'kubernetes',
      category: 'Web Application',
      technologies: ['React.js', 'PHP', 'PostgreSQL', 'Git', 'Google Search Console', 'SEO'],
      features: [
        'Improved user engagement by 25% and reduced bounce rate by 20% through SEO optimization',
        'Implemented responsive UI design ensuring compatibility across all device types',
        'Built robust backend API handling thousands of concurrent grade calculations',
        'Achieved top Google rankings through strategic SEO and content optimization'
      ],
      metrics: {
        users: '14K+',
        visitors: '16K+ monthly',
        ranking: '#2 on Google',
        uptime: '6+ years'
      },
      links: {
        demo: 'https://gradevitian.in',
        github: 'https://github.com/sabarishreddy99/gradevitian-official-beta/tree/master/sabarishreddy99.github.io-master'
      },
      status: 'Production & Live'
    }
  ]

  const getIcon = (type: string) => {
    return type === 'kubernetes' ? faCodepen : faDocker
  }

  const getGlowClass = (type: string) => {
    return type === 'kubernetes' ? 'kubernetes-glow' : 'docker-glow'
  }

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: any } = {
      'React': faReact,
      'React.js': faReact,
      'Next.js': faReact,
      'Node.js': faNode,
      'AWS': faAws,
      'Docker': faDocker,
      'Kubernetes': faCodepen,
      'GitHub': faGithub,
    }
    return iconMap[tech] || faCode
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
            <FontAwesomeIcon icon={faCode} className="w-5 h-5 text-docker-600 dark:text-docker-400" />
            <span className="text-docker-600 dark:text-docker-400 font-mono text-sm">
              kubectl get projects --namespace=portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Container Registry
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My personal container registry where each commit tells a story, every release solves a problem.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`glass-effect rounded-lg overflow-hidden card-hover ${getGlowClass(project.type)}`}
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                        project.type === 'kubernetes' 
                          ? 'bg-kubernetes-500 text-white' 
                          : 'bg-docker-500 text-white'
                      }`}
                    >
                      <FontAwesomeIcon icon={getIcon(project.type)} className="w-8 h-8" />
                    </motion.div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          project.status.includes('Production')
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {project.category}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        project.type === 'kubernetes'
                          ? 'bg-kubernetes-600 hover:bg-kubernetes-700 text-white'
                          : 'bg-docker-600 hover:bg-docker-700 text-white'
                      }`}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                    <FontAwesomeIcon icon={faRocket} className="w-4 h-4 mr-2 text-kubernetes-500" />
                    Key Features & Achievements
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-kubernetes-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Metrics & Technologies */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Performance Metrics */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <FontAwesomeIcon icon={faServer} className="w-4 h-4 mr-2 text-docker-500" />
                      Performance Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                        <motion.div
                          key={metricIndex}
                          whileHover={{ scale: 1.05 }}
                          className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-center"
                        >
                          <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <FontAwesomeIcon icon={faCogs} className="w-4 h-4 mr-2 text-kubernetes-500" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-medium ${
                            project.type === 'kubernetes'
                              ? 'bg-kubernetes-100 text-kubernetes-700 dark:bg-kubernetes-900/20 dark:text-kubernetes-400'
                              : 'bg-docker-100 text-docker-700 dark:bg-docker-900/20 dark:text-docker-400'
                          }`}
                        >
                          <FontAwesomeIcon icon={getTechIcon(tech)} className="w-3 h-3" />
                          <span>{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
              <FontAwesomeIcon icon={faUsers} className="w-8 h-8 text-kubernetes-500 mb-3 mx-auto" />
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">25K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Users Served</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-lg glass-effect docker-glow"
            >
              <FontAwesomeIcon icon={faRocket} className="w-8 h-8 text-docker-500 mb-3 mx-auto" />
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Uptime</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-lg glass-effect kubernetes-glow"
            >
              <FontAwesomeIcon icon={faDatabase} className="w-8 h-8 text-kubernetes-500 mb-3 mx-auto" />
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years in Production</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-lg glass-effect docker-glow"
            >
              <FontAwesomeIcon icon={faCode} className="w-8 h-8 text-docker-500 mb-3 mx-auto" />
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Countries Deployed</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
