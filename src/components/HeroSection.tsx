
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 min-h-screen flex items-center pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-uni-black">Debug</span>
          </motion.h1>
          
          <motion.span 
            className="text-xl md:text-2xl lg:text-3xl font-medium block mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            your
          </motion.span>
          
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-uni-blue mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Potential
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Transforme o aprendizado de algoritmos com feedback em tempo real e ambientes seguros para execução de código.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <a 
              href="#" 
              className="btn-primary inline-block text-lg"
            >
              Start for free
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
