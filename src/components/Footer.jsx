import React from 'react';
import { motion } from 'framer-motion';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiHeart,
} from 'react-icons/hi';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { Icon: FaFacebookF, href: '#', color: 'hover:text-blue-600' },
    { Icon: FaTwitter, href: '#', color: 'hover:text-sky-500' },
    { Icon: FaLinkedinIn, href: '#', color: 'hover:text-blue-700' },
    { Icon: FaInstagram, href: '#', color: 'hover:text-pink-600' },
    { Icon: FaGithub, href: '#', color: 'hover:text-gray-900' },
  ];

  const contactInfo = [
    {
      Icon: HiMail,
      text: 'info@virexvista.com',
      href: 'mailto:info@virexvista.com',
    },
    {
      Icon: HiPhone,
      text: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      Icon: HiLocationMarker,
      text: 'Your City, Your Country',
      href: '#',
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              VirexVista
            </h3>
            <p className="text-sm leading-relaxed">
              Transforming ideas into powerful digital experiences. Your trusted
              partner for innovative web solutions.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300 ${color}`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-blue-400 transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="mr-2 group-hover:mr-3 transition-all duration-200">
                        →
                      </span>
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                'UI/UX Design',
                'E-Commerce',
                'Mobile Apps',
                'SEO Optimization',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all duration-200">
                      →
                    </span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              {contactInfo.map(({ Icon, text, href }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="flex items-start space-x-3 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <Icon
                      size={20}
                      className="mt-1 group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-sm">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 flex items-center">
              © {new Date().getFullYear()} VirexVista. Made with{' '}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="mx-1"
              >
                <HiHeart className="text-red-500" />
              </motion.span>{' '}
              for better web experiences.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

