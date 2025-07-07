'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faRocket, 
  faPaperPlane,
  faCalendarAlt,
  faExternalLinkAlt,
  faDownload
} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
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

  const contactMethods = [
    {
      icon: faEnvelope,
      title: 'Email',
      value: 'jr6421@nyu.edu',
      link: 'mailto:jr6421@nyu.edu',
      description: 'Preferred method for professional inquiries',
      type: 'kubernetes'
    },
    {
      icon: faPhone,
      title: 'Phone',
      value: '+1 (5*6)-9*7-8*27',
      link: 'tel:+15*69*78*27',
      description: 'Available for urgent discussions',
      type: 'docker'
    },
    {
      icon: faMapMarkerAlt,
      title: 'Location',
      value: 'New York City, NY',
      link: '#',
      description: 'Open to relocation for the right opportunity',
      type: 'kubernetes'
    },
    {
      icon: faCalendarAlt,
      title: 'Availability',
      value: 'Available May 2025',
      link: '#',
      description: 'Open for full-time opportunities',
      type: 'docker'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://linkedin.com/in/jayasabarishreddyr',
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Professional network and career updates'
    },
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/sabarishreddy99',
      color: 'bg-gray-800 hover:bg-gray-700',
      description: 'Code repositories'
    },
    {
      name: 'gradeVITian',
      icon: faExternalLinkAlt,
      url: 'https://gradevitian.in',
      color: 'bg-kubernetes-600 hover:bg-kubernetes-700',
      description: 'Web Application for #VITians'
    }
  ]

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
            <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5 text-docker-600 dark:text-docker-400" />
            <span className="text-docker-600 dark:text-docker-400 font-mono text-sm">
              kubectl expose service contact --type=LoadBalancer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Network Policies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to deploy innovative solutions together? Let's establish a secure connection 
            and discuss how I can contribute to your team's success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 flex items-center">
              <FontAwesomeIcon icon={faRocket} className="w-6 h-6 mr-3 text-kubernetes-500" />
              Establish Connection
            </h3>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block p-6 glass-effect rounded-lg card-hover ${getGlowClass(method.type)} ${
                    method.link === '#' ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        method.type === 'kubernetes'
                          ? 'bg-kubernetes-500 text-white'
                          : 'bg-docker-500 text-white'
                      }`}
                    >
                      <FontAwesomeIcon icon={method.icon} className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {method.title}
                      </h4>
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {method.value}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <FontAwesomeIcon icon={faCodepen} className="w-5 h-5 mr-2 text-kubernetes-500" />
                Service Discovery
              </h4>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center space-x-4 p-4 rounded-lg text-white transition-colors ${social.color}`}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                    <div className="flex-1">
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm opacity-90">{social.description}</div>
                    </div>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4 opacity-70" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Resume Download */}
            <div className="glass-effect rounded-lg p-8 kubernetes-glow">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <FontAwesomeIcon icon={faDownload} className="w-6 h-6 mr-3 text-kubernetes-500" />
                Resource Manifest
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Download my complete technical specifications and deployment history for detailed review.
              </p>
              <motion.a
                href="https://drive.google.com/drive/folders/1vm35z-6VQjtO9A8ZBgCvvSP_7_POPTrV?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-kubernetes-600 hover:bg-kubernetes-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-3"
              >
                <FontAwesomeIcon icon={faDownload} className="w-5 h-5" />
                <span>Download Resume (PDF)</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Quick Stats */}
            <div className="glass-effect rounded-lg p-8 docker-glow">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <FontAwesomeIcon icon={faDocker} className="w-6 h-6 mr-3 text-docker-500" />
                Container Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">25K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Users Served</div>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime Achieved</div>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Countries Deployed</div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-effect rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                Deployment Status: Ready
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Current Status:</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">Available for Deployment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Target Date:</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">May 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Preferred Roles:</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">SDE, DevOps, Full Stack</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Relocation:</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Open to US opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Ready to Scale Your Team?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss how my expertise in cloud infrastructure, DevOps practices, and full-stack development 
              can help drive your organization's technological transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:jr6421@nyu.edu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-kubernetes-600 hover:bg-kubernetes-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                <span>Initiate Connection</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/jayasabarishreddyr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 border-2 border-docker-600 text-docker-600 hover:bg-docker-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}