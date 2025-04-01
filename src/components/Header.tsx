
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const headerScale = useTransform(scrollY, [0, 50], [0.95, 1]);
  const logoScale = useTransform(scrollY, [0, 50], [1, 0.8]);
  const textOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4">
      {/* Header Container */}
      <motion.div 
        className={`mx-auto max-w-7xl ${scrolled || isMobile ? 'bg-uni-blue/80 shadow-lg backdrop-blur-md' : 'bg-transparent'} 
          rounded-2xl px-6 py-4 transition-all duration-300 flex items-center justify-between`}
        style={{ 
          opacity: isMobile ? 1 : headerOpacity,
          scale: isMobile ? 1 : headerScale,
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-uni-blue rounded-md w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
            UN
          </div>
          <motion.div 
            className="ml-2 text-xl font-bold text-white"
            style={{ 
              opacity: isMobile ? 1 : textOpacity,
              display: scrolled && !isMobile ? 'none' : 'block' 
            }}
          >
            UniAlgo
          </motion.div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white hover:text-uni-lightBlue transition-colors">
            Features
          </a>
          <a href="#how-to-use" className="text-white hover:text-uni-lightBlue transition-colors">
            How to Use
          </a>
          <a href="#pricing" className="text-white hover:text-uni-lightBlue transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-white hover:text-uni-lightBlue transition-colors">
            FAQ
          </a>
        </nav>
        
        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hidden md:block text-white hover:text-uni-lightBlue transition-colors">
            Log in
          </a>
          <a 
            href="#" 
            className="bg-white text-uni-blue hover:bg-uni-lightGray px-4 py-2 rounded-lg transition-colors font-medium"
          >
            Start for free
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
