import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiCode,
  HiDeviceTablet,
  HiLightningBolt,
  HiShoppingCart,
  HiChartBar,
  HiColorSwatch,
} from 'react-icons/hi';

const ServicesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const services = [
    {
      id: 1,
      badge: 'Our Expertise',
      title: 'Web Development',
      description:
        'Build stunning, high-performance websites tailored to your business needs with cutting-edge technologies.',
      icon: HiCode,
      color: 'from-blue-500 to-cyan-500',
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-32 h-32 border-4 border-blue-500/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute w-24 h-24 border-4 border-cyan-500/30 rounded-full"
          />
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-8 rounded-2xl shadow-2xl">
            <HiCode className="text-white" size={64} />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      badge: 'Coming Soon',
      title: 'Custom Solutions',
      description:
        'Build & share your custom assistants to help you with tasks specific to your team and your needs.',
      icon: HiLightningBolt,
      color: 'from-purple-500 to-pink-500',
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-white p-6 rounded-xl shadow-xl"
          >
            <div className="flex space-x-2 mb-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                className="w-3 h-3 bg-purple-500 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                className="w-3 h-3 bg-pink-500 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                className="w-3 h-3 bg-purple-500 rounded-full"
              />
            </div>
            <HiLightningBolt className="text-purple-500" size={48} />
          </motion.div>
        </div>
      ),
    },
    {
      id: 3,
      badge: 'Popular',
      title: 'Responsive Design',
      description:
        'Create beautiful, mobile-first designs that work seamlessly across all devices and screen sizes.',
      icon: HiDeviceTablet,
      color: 'from-green-500 to-emerald-500',
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center space-x-4">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-white p-4 rounded-lg shadow-xl border-4 border-green-500"
            style={{ width: '80px', height: '120px' }}
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-white p-4 rounded-lg shadow-xl border-4 border-emerald-500"
            style={{ width: '100px', height: '140px' }}
          />
        </div>
      ),
    },
    {
      id: 4,
      badge: 'E-Commerce',
      title: 'Online Stores',
      description:
        'Launch powerful e-commerce platforms that drive sales and provide seamless shopping experiences.',
      icon: HiShoppingCart,
      color: 'from-orange-500 to-red-500',
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-2xl shadow-2xl"
          >
            <HiShoppingCart className="text-white" size={64} />
          </motion.div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive web solutions designed to elevate your business
          </p>
        </motion.div>

        {/* Carousel Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left Content */}
                <div className="flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6 w-fit"
                  >
                    <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {services[activeSlide].badge}
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  >
                    {services[activeSlide].title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 text-lg leading-relaxed mb-6"
                  >
                    {services[activeSlide].description}
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 bg-gradient-to-r ${services[activeSlide].color} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-fit`}
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Right Illustration */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center h-64 md:h-auto"
                >
                  {services[activeSlide].illustration}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className="group relative"
              >
                <motion.div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-12'
                      : 'bg-gray-300 group-hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
                <span className="text-xs text-gray-500 absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  0{index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: '100+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '24/7', label: 'Support' },
            { number: '5★', label: 'Client Rating' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </h4>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

