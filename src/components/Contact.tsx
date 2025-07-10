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
  faDownload,
  faChevronUp,
  faFileText,
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

// Success/Error Popup Component
function FormPopup({ isVisible, type, message, onClose }: {
  isVisible: boolean;
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto close after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -50 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative z-10 max-w-md w-full"
      >
        <div className={`
          p-6 rounded-xl shadow-2xl border-l-4 backdrop-blur-sm
          ${type === 'success' 
            ? 'bg-white/95 dark:bg-gray-800/95 border-green-500 text-green-800 dark:text-green-200' 
            : 'bg-white/95 dark:bg-gray-800/95 border-red-500 text-red-800 dark:text-red-200'
          }
        `}>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${type === 'success' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}
              `}>
                <FontAwesomeIcon 
                  icon={type === 'success' ? faCheck : faTimes} 
                  className={`w-5 h-5 ${type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
                />
              </div>
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold mb-2">
                {type === 'success' ? 'Message Sent Successfully!' : 'Submission Failed'}
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                {message}
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Floating Mobile Buttons Component
function FloatingMobileButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowScrollTop(scrollY > 300)
      setIsAtTop(scrollY < 50) // Consider "at top" when within 50px of top
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Resume Button - Left Bottom */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-6 left-4 z-50 md:hidden"
      >
        <motion.a
          href="https://drive.google.com/drive/folders/1vm35z-6VQjtO9A8ZBgCvvSP_7_POPTrV?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isAtTop ? {
            scale: [1, 1.15, 1],
            rotate: [0, -10, 10, -5, 5, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }
          } : {}}
          className="flex items-center justify-center w-12 h-12 bg-kubernetes-600 hover:bg-kubernetes-700 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl relative"
        >
          <FontAwesomeIcon icon={faFileText} className="w-5 h-5" />
          {isAtTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -top-3 -right-3 w-6 h-6 flex items-center justify-center"
            >
              {/* WiFi Signal Animation */}
              <div className="relative">
                {/* WiFi Arc 1 - Innermost */}
                <motion.div
                  className="absolute inset-0 border-2 border-yellow-600 rounded-full"
                  style={{ width: '8px', height: '8px', top: '9px', left: '9px' }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0,
                    ease: "easeOut"
                  }}
                />
                {/* WiFi Arc 2 - Middle */}
                <motion.div
                  className="absolute border-2 border-yellow-600 rounded-full"
                  style={{ width: '14px', height: '14px', top: '6px', left: '6px', borderTop: 'transparent', borderLeft: 'transparent', transform: 'rotate(225deg)' }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.3,
                    ease: "easeOut"
                  }}
                />
                {/* WiFi Arc 3 - Outermost */}
                <motion.div
                  className="absolute border-2 border-yellow-600 rounded-full"
                  style={{ width: '20px', height: '20px', top: '3px', left: '3px', borderTop: 'transparent', borderLeft: 'transparent', transform: 'rotate(225deg)' }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.6,
                    ease: "easeOut"
                  }}
                />
                {/* Center Dot */}
                <motion.div
                  className="absolute w-2 h-2 bg-yellow-600 rounded-full"
                  style={{ top: '10px', left: '10px' }}
                  animate={{
                    opacity: [1, 0.7, 1],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          )}
        </motion.a>
      </motion.div>

      {/* Back to Top Button - Right Bottom */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed bottom-6 right-4 z-50 md:hidden"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 bg-docker-600 hover:bg-docker-700 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <FontAwesomeIcon icon={faChevronUp} className="w-5 h-5" />
          </motion.button>
        </motion.div>
      )}
    </>
  )
}

// Professional Floating Contact Icons for Desktop/Tablet
function FloatingContactIcons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 200) // Show after scrolling 200px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const contactIcons = [
    {
      icon: faEnvelope,
      href: 'mailto:jr6421@nyu.edu',
      label: 'Send Email',
      color: 'bg-kubernetes-600 hover:bg-kubernetes-700',
      delay: 0
    },
    {
      icon: faLinkedin,
      href: 'https://linkedin.com/in/jayasabarishreddyr',
      label: 'LinkedIn Profile',
      color: 'bg-blue-600 hover:bg-blue-700',
      delay: 0.1,
      external: true
    },
    {
      icon: faDownload,
      href: 'https://drive.google.com/drive/folders/1vm35z-6VQjtO9A8ZBgCvvSP_7_POPTrV?usp=sharing',
      label: 'Download Resume',
      color: 'bg-docker-600 hover:bg-docker-700',
      delay: 0.2,
      external: true
    }
  ]

  return (
    <div className="hidden sm:block">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : 100
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4"
      >
        {contactIcons.map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : 50
            }}
            transition={{ 
              duration: 0.4, 
              delay: contact.delay,
              ease: "easeOut"
            }}
            className="group relative"
          >
            <motion.a
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              whileHover={{ 
                scale: 1.1,
                x: -8,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center justify-center w-14 h-14 rounded-full text-white
                shadow-lg hover:shadow-xl transition-all duration-300
                ${contact.color}
                backdrop-blur-sm border border-white/20
              `}
            >
              <FontAwesomeIcon icon={contact.icon} className="w-6 h-6" />
            </motion.a>
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              whileHover={{ opacity: 1, x: 0, scale: 1 }}
              className="absolute right-16 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              {contact.label}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 dark:border-l-gray-800 border-y-4 border-y-transparent"></div>
            </motion.div>
          </motion.div>
        ))}
        
        {/* Subtle background glow */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-l from-kubernetes-500/10 to-blue-500/10 rounded-full filter blur-xl -z-10"
        />
      </motion.div>
    </div>
  )
}

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState({
    isVisible: false,
    type: 'success' as 'success' | 'error',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Form submission URL (replace with your actual form URL)
      const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdMQ0D6SV-Z1lRkqneFTD8Zfryxpc6mwNjr5tscxmkbsSg93g/formResponse';

      // Create form data for Google Forms
      const submitData = new FormData();
      submitData.append('entry.947625533', formData.name); // Replace with actual entry IDs
      submitData.append('entry.1275510566', formData.email);
      submitData.append('entry.4476105', formData.message);

      // Submit to Google Forms
      await fetch(googleFormURL, {
        method: 'POST',
        body: submitData,
        mode: 'no-cors' // Required for Google Forms
      });

      // Show success popup
      setPopup({
        isVisible: true,
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      setPopup({
        isVisible: true,
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setPopup(prev => ({ ...prev, isVisible: false }));
  };

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
      value: 'June 2025',
      link: '#',
      description: 'Open for US full-time opportunities',
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
    <>
      {/* Form Popup */}
      <FormPopup 
        isVisible={popup.isVisible}
        type={popup.type}
        message={popup.message}
        onClose={closePopup}
      />
      
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
            Contact Me
          </h2>
          <p className="text-lg font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Let’s connect and deploy something great!
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

          {/* Right Column Content */}
          <motion.div variants={itemVariants} className="space-y-8">

            {/* Resume Download */}
            <div className="glass-effect rounded-lg p-6 docker-glow">
              <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <FontAwesomeIcon icon={faDownload} className="w-5 h-5 mr-2 text-docker-500" />
                Download Resume
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Get my complete technical specifications and deployment history.
              </p>
              <motion.a
                href="https://drive.google.com/drive/folders/1vm35z-6VQjtO9A8ZBgCvvSP_7_POPTrV?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-docker-600 hover:bg-docker-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-sm"
              >
                <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
                <span>Download PDF</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
              </motion.a>
            </div>

            {/* Quick Stats */}
            <div className="glass-effect rounded-lg p-8 docker-glow">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <FontAwesomeIcon icon={faDocker} className="w-6 h-6 mr-3 text-docker-500" />
                Container Specifications
              </h3>
              <div className="container-specs-grid grid grid-cols-2 gap-4">
                <div className="container-spec text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg relative overflow-hidden">
                  <div className="container-number text-2xl font-bold text-gray-800 dark:text-gray-200">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="container-spec text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg relative overflow-hidden">
                  <div className="container-number text-2xl font-bold text-gray-800 dark:text-gray-200">25K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Users Served</div>
                </div>
                <div className="container-spec text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg relative overflow-hidden">
                  <div className="container-number text-2xl font-bold text-gray-800 dark:text-gray-200">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime Achieved</div>
                </div>
                <div className="container-spec text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg relative overflow-hidden">
                  <div className="container-number text-2xl font-bold text-gray-800 dark:text-gray-200">20+</div>
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
                  <span className="text-gray-800 dark:text-gray-200 font-medium">June 2025</span>
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
            <p className="text-gray-600 dark:text-gray-400 mb-8 font-light">
              Let’s explore how my expertise in software development, cloud, DevOps, and full-stack engineering can drive your tech transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="mailto:jr6421@nyu.edu"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center space-x-3 bg-white dark:bg-gray-800 border-2 border-kubernetes-600 text-kubernetes-600 hover:bg-kubernetes-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-lg min-w-[200px]"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Email</span>
                <motion.div
                  className="w-2 h-2 bg-current rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/jayasabarishreddyr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center space-x-3 bg-white dark:bg-gray-800 border-2 border-docker-600 text-docker-600 hover:bg-docker-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-lg min-w-[200px]"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>View Profile</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Get in Touch Form Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="max-w-2xl mx-auto">
            <div className="glass-effect rounded-lg p-8 kubernetes-glow">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center justify-center">
                <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6 mr-3 text-kubernetes-500" />
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
                Send me a message and I'll get back to you as soon as possible.
              </p>
              
              <form className="contact-form space-y-6" onSubmit={handleSubmit}>
                {/* Name and Email Row - Desktop */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500/30 focus:border-blue-400 dark:focus:border-blue-400 valid:ring-green-300 dark:valid:ring-green-500/30 valid:border-green-400 dark:valid:border-green-400 transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500/30 focus:border-blue-400 dark:focus:border-blue-400 valid:ring-green-300 dark:valid:ring-green-500/30 valid:border-green-400 dark:valid:border-green-400 transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500/30 focus:border-blue-400 dark:focus:border-blue-400 valid:ring-green-300 dark:valid:ring-green-500/30 valid:border-green-400 dark:valid:border-green-400 transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-vertical min-h-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="w-full bg-kubernetes-600 hover:bg-kubernetes-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:shadow-none"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Form Note */}
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Your message will be sent directly to my inbox. I typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Mobile Buttons */}
      <FloatingMobileButtons />

      {/* Floating Contact Icons for Desktop/Tablet */}
      <FloatingContactIcons />
    </section>
    </>
  )
}