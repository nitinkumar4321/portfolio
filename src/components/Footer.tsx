import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  // const socialLinks = [
  //   { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  //   { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  //   { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  // ]
  const socialLinks = [
    { icon: FaGithub, href: '', label: 'GitHub' },
    { icon: FaLinkedin, href: '', label: 'LinkedIn' },
    { icon: FaTwitter, href: '', label: 'Twitter' },
  ]

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex gap-6 mb-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} Nitin Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer