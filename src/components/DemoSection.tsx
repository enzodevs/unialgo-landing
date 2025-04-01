
import React from 'react';
import { motion } from 'framer-motion';

const DemoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="text-xl md:text-2xl font-medium text-uni-gray mb-2">
            Veja como o UniAlgo funciona na prática
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto relative"
        >
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            {/* Video overlay gradient for better visual integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none rounded-xl"></div>
            
            {/* Video placeholder - in a real implementation, this would be an actual video */}
            <div className="aspect-video bg-uni-lightGray rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-uni-blue/80 flex items-center justify-center cursor-pointer hover:bg-uni-blue transition-colors">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-white ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="UniAlgo Demo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <p className="text-center text-uni-gray mt-8 text-lg">
            Interface intuitiva para professores e alunos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
